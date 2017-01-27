import { Worker } from './../models/worker';
import { Project } from './../models/project';
import { Task } from './../models/task';
import { ReportProjects, ReportWorkers, ProjectCountsWorkers} from './../models/reports';
import { ReportRequest } from './../models/reportRequest';


import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';

@Injectable()
export class ReportService {

    private urlReportProjects: string;
    private urlReportWorkers: string;
    private urlReportProjectCountsWorkers: string; 
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.urlReportProjects = _configuration.ReportsApi + 'getProjects';
        this.urlReportWorkers = _configuration.ReportsApi + 'getWorkers';
        this.urlReportProjectCountsWorkers = _configuration.ReportsApi + 'getProjectCountsWorkers';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetReportProjects = (): Observable<ReportProjects> => {
        return this._http.get(this.urlReportProjects).map((response: Response) => <ReportProjects>response.json());;
    }

    public GetReportWorkers = (): Observable<ReportWorkers> => {
        return this._http.get(this.urlReportWorkers).map((response: Response) => <ReportWorkers>response.json());
    }

    public GetProjectCountsWorkers = (): Observable<ProjectCountsWorkers> => {
        return this._http.get(this.urlReportProjectCountsWorkers).map((response: Response) => <ProjectCountsWorkers>response.json());
    }


    public GetPeriodReportProjects = (dates: ReportRequest): Observable<ReportProjects> => {
        let toAdd = JSON.stringify(dates);
        return this._http.post(this.urlReportProjects, toAdd, { headers: this.headers }).map((response: Response) => <ReportProjects>response.json());
    }

    public GetPeriodReportWorkers = (dates: ReportRequest): Observable<ReportWorkers> => {
        let toAdd = JSON.stringify(dates);
        return this._http.post(this.urlReportWorkers, toAdd, { headers: this.headers }).map((response: Response) => <ReportWorkers>response.json());
    }

    public GetPeriodProjectCountsWorkers = (dates: ReportRequest): Observable<ProjectCountsWorkers> => {
        let toAdd = JSON.stringify(dates);
        return this._http.post(this.urlReportProjectCountsWorkers, toAdd, { headers: this.headers }).map((response: Response) => <ProjectCountsWorkers>response.json());
    }

}