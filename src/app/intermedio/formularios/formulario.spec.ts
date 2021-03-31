import { FormBuilder } from "@angular/forms";
import { FormularioRegister } from "./formulario";


describe('Formularios',()=>{

    let componente: FormularioRegister;
    //Antes del It declaramos que el formulario estara en el componente
    beforeEach(()=>{
        componente = new FormularioRegister( new FormBuilder() );
    });

    it('Debe crear un formulario con dos campos, email y password',()=>{
        //Esperamos que en el formulario exista el email y password
        expect(componente.form.contains('email')).toBeTruthy;
        expect(componente.form.contains('password')).toBeTruthy;
    });

    it('El email debe ser obligatorio',()=>{
        //dentro de control ponemos el valor del campo email
        const control = componente.form.get('email');
        //ponemos que el valor del campo es '', Angular lo toma que esta vacio
        control.setValue('');
        //Esperamos que sea falsa, y si lo es, ya que es un campo obligatorio
        expect(control.valid).toBeFalsy();
        //Es falso porque no mandamos nada -> prueba bien hecha
    });

    it('El email debe ser un correo valido',()=>{

        const control = componente.form.get('email');
        //Como en el formulario.ts pusimos que el campo email debe ser de tipo email
        //la condicion que mandamos debe ser como tal
        control.setValue('edwin.espinoza2@unmsm.edu.pe');
        //Es verdadero
        expect(control.valid).toBeTruthy();
    });

});