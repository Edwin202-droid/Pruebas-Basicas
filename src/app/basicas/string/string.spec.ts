
//Describe sirve para agrupar pruebas
//It es una prueba en especifico

import { mensaje } from "./string";

/* describe('Pruebas de Strings');

it('Debe regresar un string');
it('Debe de contener un nombre'); */

describe('Pruebas de Strings', ()=>{

    it('Debe regresar un string', ()=>{

         const resp= mensaje('Edwin');
         
         expect( typeof resp).toBe('string');//La respuesta que esperamos sea un string
         //Mandamos Edwin y verificamos que sea string
    });

    it('Debe retornar un saludo con el nombre enviado', ()=>{

        const nombre ='Juan'
        const resp= mensaje(nombre);
        
        expect( resp ).toContain(nombre);// verificar que la respuesta contenga el resp que enviamos
        //Mandamos Juan y verificamos que el resultado contenga la palabra 'Juan'
   });
    

});