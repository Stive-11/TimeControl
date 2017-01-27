import { Worker } from '../../../models/worker';
import { Project } from '../../../models/project';
import { Task } from '../../../models/task';
import { ManagementService } from './../../../services/managementService';
import { DataService } from './../../../services/dataService';
import { ReportRequest } from '../../../models/reportRequest';

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'management-component',
    templateUrl: 'management.component.html',
    providers: [ManagementService, DataService]
})

export class ManagementComponent implements OnInit {

    public projects: Project[];
    public workers: Worker[];
    public project: Project;
    public worker: Worker;

    constructor(private _managementService: ManagementService, private _dataService: DataService) {
        this.projects = [];
        this.workers = [];
        this.project = new Project();
        this.worker = new Worker();
    }

    ngOnInit() {
        this.getAllProjects();
        this.getAllWorkers();
    }

    public addProject() {
        this._managementService
            .SaveProject(this.project)
            .subscribe(() => {
                this.getAllProjects();
                this.project = new Project();
            }, (error) => {
                console.log(error);
            });
    }

    public addWorker() {
        this._managementService
            .SaveWorker(this.worker)
            .subscribe(() => {
                this.getAllWorkers();
                this.worker = new Worker();
            }, (error) => {
                console.log(error);
            });
    }

    public getAllProjects() {
        this._dataService
            .GetProjects()
            .subscribe(
            data => this.projects = data,
            error => console.log(error),
            () => console.log('Get all projects complete')
            );
    }

    public getAllWorkers() {
        this._dataService
            .GetWorkers()
            .subscribe(
            data => this.workers = data,
            error => console.log(error),
            () => console.log('Get all workers complete')
            );
    }
}
