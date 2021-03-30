import { obtenerRobots } from "./arreglo";


describe('Pruebas de arreglos', ()=>{

    it('Debe retornar al menos 3 robots',()=>{

        const res = obtenerRobots();
        /* Esperando que el largo del arreglo sea 3.
        expect(res.length).toBe(3); */

        //Esperando que sea mayor o igual a 3
        expect(res.length).toBeGreaterThanOrEqual(3);

    });
    it ('Debe de existir MegaMan y Ultron',()=>{

        const res = obtenerRobots();
        expect(res).toContain('MegaMan');
        expect(res).toContain('Ultron');
    });

});