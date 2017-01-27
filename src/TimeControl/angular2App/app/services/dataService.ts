import { Worker } from './../models/worker';
import { Project } from './../models/project';
import { Task, TableTask} from './../models/task';

import { ReportRequest } from './../models/reportRequest';

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';

@Injectable()
export class DataService {

    private urlGetProjects: string;
    private urlGetWorkers: string;
    private urlGetTasks: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.urlGetProjects = _configuration.DataApi + 'getProjects';
        this.urlGetWorkers = _configuration.DataApi + 'getWorkers';
        this.urlGetTasks = _configuration.DataApi + 'getTasks';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetProjects = (): Observable<Project[]> => {
        return this._http.get(this.urlGetProjects).map((response: Response) => <Project[]>response.json());
    }

    public GetWorkers = (): Observable<Worker[]> => {
        return this._http.get(this.urlGetWorkers).map((response: Response) => <Worker[]>response.json());
    }

    public GetTasks = (): Observable<TableTask[]> => {
        return this._http.get(this.urlGetTasks).map((response: Response) => <TableTask[]>response.json());
    }
    
    public GetPeriodProjects = (dates: ReportRequest): Observable<Project[]> => {
        let toAdd = JSON.stringify(dates);
        return this._http.post(this.urlGetProjects, toAdd, { headers: this.headers }).map((response: Response) => <Project[]>response.json());
    }
}