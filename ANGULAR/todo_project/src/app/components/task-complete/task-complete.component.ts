import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { GestioneTaskService } from 'src/app/services/gestione-task.service';

@Component({
  selector: 'app-task-complete',
  templateUrl: './task-complete.component.html',
  styleUrls: ['./task-complete.component.scss']
})
export class TaskCompleteComponent implements OnInit {
  tasks: Todo[];

  constructor(private gestioneSrv: GestioneTaskService) {
    this.tasks = this.gestioneSrv.getTask();
  }

  ngOnInit(): void {
  }

}
