import { EventEmitter } from "@angular/core";


export class Jugador2{

    hp:number;
    hpCambia = new EventEmitter<number>();

    constructor(){
        this.hp = 100;
    }

    recibeDanio(danio:number){

        //Si recibe mas de 100 de daño, retorna 0
        if(danio >= this.hp){
            this.hp= 0;
        }else{
            this.hp = this.hp - danio;
        }

        this.hpCambia.emit(this.hp)

    }

}