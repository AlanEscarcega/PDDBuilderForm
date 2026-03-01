// factories/FormComponentFactory.js
export class FormComponentFactory {




    createTextField(id, label, placeholder = "") {
        throw new Error("Método createTextField debe ser implementado");
    }



    createButton(id, text, type = "button") {
        throw new Error("Método createButton debe ser implementado");
    }




    createDropdown(options, buttonText = "Seleccionar") {
        throw new Error("Método createDropdown debe ser implementado");
    }
}