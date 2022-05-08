import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import * as Servio from '../../service/todos.service'

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  tasksCompletati: Todo[]=[];
  active=true;
  inactive=false;


  ngOnInit(): void {
    setTimeout(() => {
      this.tasksCompletati= Servio.riportaCompletati();
      if (this.tasksCompletati.length != 0){
        this.active= false;
        this.inactive=true
      }
    }, 2000);
  }

}
