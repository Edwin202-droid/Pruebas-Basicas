import { Observable, from, empty, throwError} from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {
    //Metemos el componente y el servicio en la prueba
    let componente: MedicosComponent;
    const servicio = new MedicosService( null );

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });

    //Cuando entramos a la pagina, el ngoninit siempre se dispara
    it('Init: Debe recargar los medicos', () => {

        //Espia
        const medicos = ['medico1','medico2','medico3'];
        spyOn(servicio, 'getMedicos').and.callFake(()=>{
            return from([medicos]);
            /* espia al servicia. cuando llamamos a getmedicos,
            vamos a fingir que regresa con el observable el arreglo medicos */ 
        });

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);

    });

    //Agregar medico
    it('Debe de llamar al servidor para agregar un medico',()=>{

        const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico =>{
            return empty();
        });

        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
        //Estamos verificando si el servicio esta siendo llamado
    });

    it('Debe de agregar un nuevo medico al arreglo de medicos',()=>{
        //Simulamos
        const medico = {id:1 , nombre: 'Edwin'}//Vamos a agregar este medico
        
        spyOn(servicio, 'agregarMedico').and.returnValue( from([medico]) );
        //Estamos simulando si esta agregando el medico.

        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
        //Verificando si el medico esta dentro del arreglo
    });

    it('Si falla el agregar, la propiedad mensajeError, debe ser igual al servicio',()=>{

        //Evaluando el error.
        const miError = 'No se pudo agregar el medico';
        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));

        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);
    
    });

    it('Debe de llamar al servidor para borrar un medico', ()=>{
        /* En lugar de apretar ok en la ventana, simulamos que ya se selecciono */
        spyOn(window,'confirm').and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());
        componente.borrarMedico('1');
        expect(espia).toHaveBeenCalledWith('1');

    });

    it('NO Debe de llamar al servidor para borrar un medico', ()=>{
        /* En lugar de apretar cancelar en la ventana, simulamos que ya se selecciono */
        spyOn(window,'confirm').and.returnValue(false);
        
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());
        componente.borrarMedico('1');
        expect(espia).not.toHaveBeenCalledWith('1');

    });

});

