import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import * as $ from 'jquery';
import { AddQuestionModalComponent } from './modals/add-question-modal/add-question-modal.component';
import { RemoveQuestionModalComponent } from './modals/remove-question-modal/remove-question-modal.component';


@Component({
  selector: 'app-gerer-questions',
  templateUrl: './gerer-questions.component.html',
  styleUrls: ['./gerer-questions.component.scss']
})
export class GererQuestionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  addQuestionModalClick(){
    const dialogRef = this.dialog.open(AddQuestionModalComponent, { disableClose: true });
    dialogRef.backdropClick().subscribe(result => {
      console.log("eezez")}
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log(`Dialog result: ${result}`);

    });
  }

  removeQuestionModalClick(){
    const dialogRef = this.dialog.open(RemoveQuestionModalComponent, { disableClose: true });

    console.log("heyyyy")
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
