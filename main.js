import { DirectorFactory } from './factories/DirectorFactory.js';

class BuilderForm {
    constructor(factory) {
        this.factory = factory;
        this.formHTML = "";
    }

    addField(label, id) {
        this.formHTML += this.factory.createTextField(id, label);
        return this;
    }

    addDropdown(options) {
        this.formHTML += this.factory.createDropdown(options);
        return this;
    }

    build() {
        this.formHTML += this.factory.createButton("btn-submit", "Enviar", "submit");
        return `<form>${this.formHTML}</form>`;
    }
}

const btn = document.getElementById("btn-action-form");
btn.addEventListener("click", () => {
    const mainContent = document.getElementById("main-content");
    const title = document.title.toLowerCase();
    


const factory = DirectorFactory.getFactory('default'); 
    
    let builder = new BuilderForm(factory);

    if (title.includes("extendido")) {
        builder
            .addField("Nombre(s):", "field-name")
            .addField("Apellidos:", "field-last-name")
            .addField("Teléfono:", "field-phone")
            .addField("Domicilio:", "field-address")
            .addField("Correo Electrónico:", "field-email")
            .addDropdown(["Opción A", "Opción B", "Opción C"]);
    } else {
        builder
            .addField("Nombre(s):", "field-name")
            .addField("Apellidos:", "field-last-name")
            .addField("Correo Electrónico:", "field-email")
            .addDropdown(["Opción 1", "Opción 2", "Opción 3"]);
    }

    mainContent.innerHTML = builder.build();
});