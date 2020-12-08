import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-resultat-evaluation',
  templateUrl: './resultat-evaluation.component.html',
  styleUrls: ['./resultat-evaluation.component.scss']
})
export class ResultatEvaluationComponent implements OnInit {
  gaugeValues: any = {
    1: 100,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 50
};
panelOpenState = false;
interval: any;
evaluation = {idEvaluation:6899848,
              nomEntreprise:"EDF",
              dateRealisation: "22/11/2020",
              scoreGlobal: 86.8,
              saved: false,
              categories: [{nomCategorie:"Score Total",
                            scoreCategorie:80
                            },
                            {nomCategorie:"Categ 1",
                            scoreCategorie:54
                            },
                            {nomCategorie:"Categ 2",
                            scoreCategorie:25
                            },
                            {nomCategorie:"Categ3",
                            scoreCategorie:100
                            },
                            ]
            }

percentageValue = function(value: number): string {
    console.log("heyyyy")

    return `${Math.round(value)} / ${this['max']}`;
};

ngAfterContentChecked(){
    $(".three .dial").css("stroke", "black");
    $(".three .dial").css("stroke-width", "6");
    // $(".three .value-text").css("fill", "orange");
    // $(".three .value").css("stroke", "orange");
    $(".three .value").css("stroke-dasharray", "none");
    $(".three .value").css("stroke-width", "14");

}

ngOnInit(){console.log("heyyyy")
  $( ".activPageButton" ).removeClass( "activPageButton" );
  $("#homeButton").addClass( "activPageButton" );

    const updateValues = (): void => {
        this.gaugeValues = {
            1: Math.round(Math.random() * 100),
            2: Math.round(Math.random() * 100),
            3: Math.round(Math.random() * 100),
            4: Math.round(Math.random() * 100),
            5: Math.round(Math.random() * 200),
            6: Math.round(Math.random() * 100),
            7: Math.round(Math.random() * 100)
        };
      //   setTimeout(() => {
            let val = this.gaugeValues[1];
            let couleur;
            console.log("valeur :: ", val)
                if(val < 25) {
                    couleur= "#FF495F";
                }else if(val < 50) {
                    couleur= "#FFA81E";
                }else if(val < 75) {
                    couleur=  "#E1FF3E";
                }else {
                    couleur= "#00FF40";
                }
            
            $(".three .value-text").css("fill", couleur);
            $(".three .value").css("stroke", couleur);

      //   }, 100);
    };

    const INTERVAL: number = 5000;

    this.interval = setInterval(updateValues, INTERVAL);
    updateValues();


}

ngOnDestroy(): void {
    clearInterval(this.interval);
    // $(".three .value-text").css("fill", "orange");

}

}
