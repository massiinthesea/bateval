import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as $$ from 'jquery';

declare var $: any;


@Component({
    selector: 'app-evaluate',
    templateUrl: './evaluate.component.html',
    styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent implements OnInit {
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;



    categoriesReady = false;
    questionsReady = false;


    categories = new FormControl();


    categoriesList: string[] = ['Pornographie', 'Hardcoring', 'Defonce anale', 'Pizzaiolo', 'Plombier', 'Manouch', 'Étanchéité', 'Plomberie'];
    display:any;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        $(".activPageButton").removeClass("activPageButton");
        $("#evaluateButton").addClass("activPageButton");



        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required],
            scndCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });

        this.display = {idCategorie: 1,
                        nomCategorie: "Identité de l'entrepriezfzfeezfzef ezfzefezf zefezffez ezffezfez efzfezfez fezefzfeze  ezffezfez fezfezfez fzefezfez fezfezfez fezfezfez zeffezfez ezfezffez zeffezfez fezezfez ezffezfez se",
                        descriptionCategorie: "Avant de commencer l'évaluation, faisons la connaissance de votre entreprise, renseignez les champs ci-dessous puis passe à la page suivante.     ezrffezfez efzezefz fzefezfez ezffezfezezf ezffezfezezf fezfezfezfez zefezffezezf ezffezfezefzezf ezffezfezefz ezfefzezezf fezefzfezfez",
                        couleurArrièrePlan: "#078596"};


        // this.display.nomCategorie = "ezez",
        // this.display = {"ezez", "ezez", "ezez"}


        setTimeout(() => {
            this.categoriesReady = true;
        }, 500);

        setTimeout(() => {
            this.questionsReady = true;
        }, 1000);
    }



    clickButton() {
        console.log("ooooooo")
        $("#validationModal").modal('show');

    }

}
