import { Worker } from './../models/worker';
import { Project } from './../models/project';
import { Task } from './../models/task';

import { ReportRequest } from './../models/reportRequest';

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';

@Injectable()
export class ManagementService {

    private urlSaveProject: string;
    private urlSaveWorker: string;
    private urlSaveTask: string;
    private urlDeleteTask: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.urlSaveProject = _configuration.ManagmentApi + 'addProject';
        this.urlSaveWorker = _configuration.ManagmentApi + 'addWorker';
        this.urlSaveTask = _configuration.ManagmentApi + 'addTask';
        this.urlDeleteTask = _configuration.ManagmentApi + 'deleteTask/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public SaveProject = (project: Project): Observable<any> => {
        let toAdd = JSON.stringify(project);
        return this._http.post(this.urlSaveProject, toAdd, { headers: this.headers });
    }

    public SaveWorker = (worker: Worker): Observable<any> => {
        let toAdd = JSON.stringify(worker);
        return this._http.post(this.urlSaveWorker, toAdd, { headers: this.headers });
    }

    public SaveTask = (task: Task): Observable<any> => {
        let toAdd = JSON.stringify(task);
        return this._http.post(this.urlSaveTask, toAdd, { headers: this.headers });
    }

    public DeleteTask = (id: number): Observable<any> => {
        return this._http.delete(this.urlDeleteTask + id);
    }
}