import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Game } from '../../interfaces/interface';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {


  @Input('juegosFire') results:Game[];

  
  ngOnInit(): void {
  }
  // results: any[]=[
  //   {
  //     "name": "Juego 1",
  //     "value": 17
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 50
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 30
  //   }
  // ];
 

 

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo;

  constructor() {

    // this.intervalo = setInterval(()=>{

    //   console.log('tick');
      
    //    const newResults = [...this.results];

    //   for( let i in newResults){
    //     newResults[i].value= Math.round( Math.random() * 500 ) ;
    //   }

    //   this.results = [...newResults]

    // }, 1500 );

  }


  onSelect(event) {
    console.log(event);
  }
  ngOnDestroy(){
    clearInterval(this.intervalo);
  }

}
