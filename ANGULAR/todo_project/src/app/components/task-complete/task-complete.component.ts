import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { GestioneTaskService } from 'src/app/services/gestione-task.service';

@Component({
  selector: 'app-task-complete',
  templateUrl: './task-complete.component.html',
  styleUrls: ['./task-complete.component.scss']
})
export class TaskCompleteComponent implements OnInit {
  tasks!: Todo[];

  constructor(private gestioneSrv: GestioneTaskService) {
    this.fetchTasks();
  }

  //prendo solo le task completate
  async fetchTasks(): Promise<void> {
    const allTasks = await this.gestioneSrv.getTask();
    this.tasks = allTasks.filter(task => task.completed);
  }

  ngOnInit(): void {
  }
}
