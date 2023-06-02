import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class GestioneTaskService {
  tasks: Todo[] = []

  constructor() { }
  //metodo che prenderà l'array
  getTask(): Todo[] {
    console.log(this.tasks);
    return this.tasks;
  }

  //metodo che creerà la task e la pusherà nell'array
  addTask(title: string): void {
    const newTask: Todo = {
      id: this.tasks.length + 1,
      title: title,
      completed: false,
    };

    this.tasks.push(newTask);
  }

  //metodo che ritornerà la task completata
  updateTask(task_property: Partial<Todo>, id: number): void {
    this.tasks = this.tasks.map((task) =>
      task.id == id ? { ...task, ...task_property } : task
    );
    console.log(this.tasks);
  }
}
