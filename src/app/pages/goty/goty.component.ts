import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';

import { Game } from '../../interfaces/interface';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos:Game []=[];

  constructor( private gameService: GameService   ) {

    this.gameService.getNominados().subscribe( juegosResp =>{
      console.log(juegosResp);
      this.juegos = juegosResp;     
      
    })
   }

  ngOnInit(): void {
  }
  votarJuego( juego: Game){
     this.gameService.votarJuego( juego.id ).subscribe((resp: {ok:boolean, mensaje:string}) => {

      if (resp.ok){
        Swal.fire({
          icon: 'success',
          title: 'Gracias',
          text: resp.mensaje          
        });
      }else{
        Swal.fire({
          icon:'error',
          title:'Error!',
          text: resp.mensaje 
        });
      }

       console.log(resp)
      });
  }

}
