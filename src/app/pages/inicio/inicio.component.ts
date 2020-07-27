import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos:Game[]=[];

  juegosdesdeFire:any[]=[];

  constructor( private dbFirestore: AngularFirestore ) { }

  ngOnInit(): void {

    this.dbFirestore.collection('goty').valueChanges()
    .pipe(
      map( (juegosRec:Game[])=>{          
        // con la desestructuracion, extraigo las propiedades que necesito 
        //y retorno un nuevo objeto con nuevas propiedades        
        
        // return juegosRec.map( juegos =>{
        //   return {
        //     name: juegos.name,
        //     value: juegos.votos
        //   }
        // })

        return juegosRec.map( ({ name, votos }) => ({ name, value: votos }) );

        } 
      )
    )
    .subscribe( (resp) => {
      console.log(resp);
      this.juegosdesdeFire = resp;

    } );
  }

}
