import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as $ from 'jquery';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    admin = true;    
    connected = false;

    isLinear = false;



    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    darkThemeActivated = false;



    
    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit(): void {
        // setTimeout(() => {
        //   $(".mat-step-label").css("color", "white");
        // }, 2000);
    
        this.connected=true;
        this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
        });

    }

    changeTheme(){
        this.darkThemeActivated = !this.darkThemeActivated;
        console.log(this.darkThemeActivated)
    }

    changePageClick(page:any){
        console.log("aller à la page " + page)
        // $( ".activPageButton" ).removeClass( "activPageButton" );
        // $("#"+page).addClass( "activPageButton" );
// setTimeout(() => {
    
//     $('.activPageButton').vibrate({
//         speed: 50,             // Vibration speed in milliseconds
//         trigger: "mouseover",  // Triggering event
//         reverse: false,        // Reverse behaviour
//         overEffect: "stop",    // Over effect, see details below
//         vibrateClass: "",      // CSS class applied when vibrating (New in vers. 1.1!)
//         overClass: "",         // CSS class applied when over effect is triggered (New in vers. 1.1!)
//         callBack: function(){} // Function to call when vibration stops
//     });



// }, 1000);

        // $(".activPageButton").vibrate(); 
        // switch (page) {
        //     case 0:
        //         break;

        //     case 1:
        //         $( ".activPageButton" ).removeClass( "activPageButton" );
        //             break;


        //     case 2:
        //         $( ".activPageButton" ).addClass( "activPageButton" );
        //             break;


        //     case 3:
        //         $( ".activPageButton" ).removeClass( "activPageButton" );
        //             break;


        
        //     default:
        //     break;
        // }
    }



    // collapseLeftClick(){
    //     // console.log("heyyy")
    //     // $(".leftScreen").animate({
    //     //     // opacity: 0.25,
    //     //     // left: "+=50",
    //     //     width: "90%"
    //     //   }, 1000, function() {
    //     //     // Animation complete.
    //     //   });


    //     this.leftMenu = !this.leftMenu
    //     // if(this.leftMenu){
    //     //     $(".rightScreen").animate({
    //     //         // opacity: 0.25,
    //     //         left: "-=150",
    //     //         // width: "90%"
    //     //       }, 0, function() {
    //     //         // Animation complete.
    //     //       });
    //     //  }
    //     //  else {
    //     //     $(".rightScreen").animate({
    //     //         // opacity: 0.25,
    //     //         left: "+=150",
    //     //         // width: "90%"
    //     //       }, 0, function() {
    //     //         // Animation complete.
    //     //       });
    //     //  }

    // }
}
