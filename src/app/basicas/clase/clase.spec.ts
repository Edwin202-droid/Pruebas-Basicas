import { Jugador } from "./clase";

describe('Pruebas de Clase',()=>{

    //const jugador = new Jugador();
    let jugador = new Jugador();

    beforeAll(()=>{
        //Antes que todo
    });
    beforeEach(()=>{
        //Antes de cada IT
        /* Antes de cada IT, el hp del juador sera 100
        jugador.hp =100 */
        jugador = new Jugador(); //De esta forma traemos todas las propiedades del Jugador
    });

    afterAll(()=>{
        //Despues de todo
    });
    afterEach(()=>{
        //Despues de cada IT
    });




    it('Debe de retornar 80 de hp, si recibe 20 de daño',()=>{

        //const jugador = new Jugador();
        //Mando los 20 de daño
        const resp = jugador.recibeDanio(20);
        //Esperamos tener 80 de hp
        expect(resp).toBe(80);

    });

    it('Debe de retornar 50 de hp, si recibe 50 de daño',()=>{

        //const jugador = new Jugador();
        //Mando los 20 de daño
        const resp = jugador.recibeDanio(50);
        //Esperamos tener 80 de hp
        expect(resp).toBe(50);

    });

    it('Debe de retornar 0 de hp, si recibe 100 de daño o mas',()=>{

        //const jugador = new Jugador();
        //Mando los 20 de daño
        const resp = jugador.recibeDanio(200);
        //Esperamos tener 80 de hp
        expect(resp).toBe(0);

    });


});