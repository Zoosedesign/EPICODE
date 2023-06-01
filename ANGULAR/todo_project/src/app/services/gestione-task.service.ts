import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class GestioneTaskService {
  tasks: Todo[] = []

  constructor() { }
  //metodo che prenderà l'array
  getTask() {
      return this.tasks;
  }

  //metodo che creerà la task e la pusherà nell'array
  addTask(title: string) {
      const newTask: Todo = {
        id: this.tasks.length + 1,
        title: title,
        completed: false,
      };

      this.tasks.push(newTask);
      return console.log(this.tasks);
  }
}
