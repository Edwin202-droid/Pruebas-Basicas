import { FormBuilder, FormGroup, Validators } from "@angular/forms";

//Creacion de un formulario rapido para las pruebas

export class FormularioRegister {

    form: FormGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            email:['',[Validators.required, Validators.email]],
            password: ['',Validators.required]
        })
    }


}