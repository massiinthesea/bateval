import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-question-modal',
  templateUrl: './add-question-modal.component.html',
  styleUrls: ['./add-question-modal.component.scss']
})
export class AddQuestionModalComponent implements OnInit {

  constructor() { }
  // reponses : []

  reponses = [];

  ngOnInit(): void {
    // this.reponses = [];
    this.reponses.push({value: "", coef:1});
    this.reponses.push({value: "", coef:1});
  }



  removeReponse(i){
    this.reponses.splice(i,1);
  }

  addReponse(){
    this.reponses.push({value: "", coef:1});
  }

  

  addConfirm(){


    console.log('heyyyy')
    console.log(this.reponses.length)
    console.log('haaayyyy')
    console.log(this.reponses)

  }
}
