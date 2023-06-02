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

  constructor(private gestioneSrv: GestioneTaskService) {
    this.fetchTasks();
  }

  async fetchTasks(): Promise<void> {
    this.tasks = await this.gestioneSrv.getTask();
  }

  ngOnInit(): void { }

  completeTask(id: number, i: number): void {
    this.gestioneSrv.updateTask({ completed: true }, id);
    new Promise((response): void => {
      setTimeout(() => {
        response(this.tasks.splice(i, 1));
      }, 2000);
    });
  }

  add(): void {
    this.gestioneSrv.addTask(this.newTaskTitle);
    this.newTaskTitle = '';
  }
}
