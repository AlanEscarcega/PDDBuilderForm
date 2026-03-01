import { FormComponentFactory } from './FormComponentFactory.js';

export class MinimalistaFactory extends FormComponentFactory {
    createTextField(id, label, placeholder = "") {
        return `
            <div class="mb-3">
                <label for="${id}" class="form-label">${label}</label>
                <input id="${id}" type="text" class="form-control" placeholder="${placeholder}">
            </div>
        `;
    }

    createButton(id, text, type = "button") {
        return `
            <button id="${id}" type="${type}" class="btn btn-primary mt-3">
                ${text}
            </button>
        `;
    }

    createDropdown(options, buttonText = "Seleccionar") {
        const items = options.map(option => 
            `<li><a class="dropdown-item" href="#">${option}</a></li>`
        ).join('');
        
        return `
            <div class="mb-3 mt-3 dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    ${buttonText}
                </button>
                <ul class="dropdown-menu">
                    ${items}
                </ul>
            </div>
        `;
    }
}