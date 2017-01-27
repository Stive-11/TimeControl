import { Task, TableTask } from './../../../models/task';
import { Project } from './../../../models/project';
import { Worker } from './../../../models/worker';

import { DataService } from './../../../services/dataService';
import { ManagementService } from './../../../services/managementService';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    public message: string;
    public task: Task;
    public tasks: TableTask[];
    public projects: Project[];
    public workers: Worker[];

    constructor(private _dataService: DataService, private _managementService: ManagementService ) {
        this.message = 'Tasks';
        this.task = new Task();
        this.tasks = [];
        this.projects = [];
        this.workers = [];
    }

    ngOnInit() {
        this.getAllTasks();
        this.getAllProjects();
        this.getAllWorkers();
    }

    public addTask() {
        this._managementService
            .SaveTask(this.task)
            .subscribe(() => {
                this.getAllTasks();
                this.task = new Task();
            }, (error) => {
                console.log(error);
            });
    }

    public deleteTask(task: TableTask) {
        this._managementService
            .DeleteTask(task.id)
            .subscribe(() => {
                this.getAllTasks();
            }, (error) => {
                console.log(error);
            });
    }

    private getAllTasks() {
        this._dataService
            .GetTasks()
            .subscribe(
            data => this.tasks = data,
            error => console.log(error),
            () => console.log('Get all tasks complete')
            );
    }

    private getAllProjects() {
        this._dataService
            .GetProjects()
            .subscribe(
            data => this.projects = data,
            error => console.log(error),
            () => console.log('Get all projects complete')
            );
    }

    private getAllWorkers() {
        this._dataService
            .GetWorkers()
            .subscribe(
            data => this.workers = data,
            error => console.log(error),
            () => console.log('Get all workers complete')
            );
    }
}
