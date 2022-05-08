import { Todo } from "../interface/todo";

let todos:Todo[]=[];
let todoscompletati: Todo[]=[];

export function aggiungiImpegno(task: Todo){
  todos.push(task)
  return todos;
}
export function riportaTodo(){
  return todos;
}

export function creaCompletati(task : Todo){
  todoscompletati.push(task);
}

export function riportaCompletati(){
  return todoscompletati;
}
