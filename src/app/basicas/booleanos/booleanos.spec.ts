import { usuarioIngresado } from "./booleanos";


describe('Pruebas de booleanos',()=>{

    it('Debe retornar true',()=>{

        const res = usuarioIngresado();
        //Para booleanos
        //Para retornar true
        expect(res).toBeTruthy();
        //Si la funcion fuera falsa -> expect(res).not.toBeTruthy();
    });

});