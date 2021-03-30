import { incrementar } from "./numeros";



describe('Pruebas de numeros', ()=>{
    //Evaluamos el if y else
    it('Debe retornar 100, si el numero ingresado es mayor a 100',()=>{

        const res= incrementar(300);
        //Hacemos la prueba, 
        //como mandamos 300, la respuesta debe ser 100
        expect(res).toBe(100);
    });

    it('Debe retornar el numero ingresado + 1, si no es mayor a 100',()=>{

        const res= incrementar(50);
        //Hacemos la prueba
        //Como mandamos 50, la respesta debe ser 51
        expect(res).toBe(51);
    });

});