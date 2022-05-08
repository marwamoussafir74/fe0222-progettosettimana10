import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import * as Servizio from '../../service/todos.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  active = true;
  tasks: Todo[]=[];
  impegno: string=''
  i=0;

    constructor() {

    }

    aggiungiTask(impegno : string):void{
      if (impegno ===''){
        alert ('Possibile che non hai nulla da fare?!?!? Sfaticata aggiungi qualcosa da fare alla lista!')
      }else {
        setTimeout(()=>{
          this.active=false;
          let task:Todo={
            id: this.i,
            title: impegno,
            completed: false
          };
          this.tasks= Servizio.aggiungiImpegno(task);
          this.i++;
        },2000)
      }
    }

    taskCompletato(index:number):void{
      setTimeout(()=>{
        Servizio.creaCompletati(this.tasks[index]);
        this.tasks.splice(index,1);
      }, 2000)
    }

    ngOnInit(): void {
    }


  }


