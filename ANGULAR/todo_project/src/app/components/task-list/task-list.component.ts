import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { GestioneTaskService } from 'src/app/services/gestione-task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks!: Todo[];
  newTaskTitle: string = '';
  disabledStatus: boolean = true;

  constructor(private gestioneSrv: GestioneTaskService) {
    this.fetchTasks();
  }

  //aspetto che passino i due secondi e ritorno l'array
  async fetchTasks(): Promise<void> {
    this.tasks = await this.gestioneSrv.getTask();
  }

  ngOnInit(): void { }

  //verifico che ci siano task da completare
  allTaskTrue(): boolean {
    return this.tasks.every(task => task.completed);
  }

  //passo il valore true a completed per dichiarare eseguita la task
  completeTask(id: number, i: number): void {
    this.gestioneSrv.updateTask({ completed: true }, id);
      setTimeout(() => {
        this.tasks.splice(i, 1);
      }, 2000);
  }

  //verifico che il campo input non sia vuoto
  checkInput(): void {
    this.disabledStatus = this.newTaskTitle.trim() === '';
  }

  //aggiungo una task
  add(): void {
    this.gestioneSrv.addTask(this.newTaskTitle);
    this.newTaskTitle = '';
    //rimetto disabledStatus al button
    this.disabledStatus = true;
  }
}
