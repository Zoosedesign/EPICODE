import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { GestioneTaskService } from 'src/app/services/gestione-task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Todo[];
  newTaskTitle: string = '';

  constructor(private gestione: GestioneTaskService) {
    this.tasks = this.gestione.getTask();
  }

  ngOnInit(): void {}

  add() {
    this.gestione.addTask(this.newTaskTitle);
  }
}
