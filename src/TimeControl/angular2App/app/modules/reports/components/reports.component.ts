import { ReportProjects, ReportWorkers, ProjectCountsWorkers, ProjectReportItem } from './../../../models/reports';
import { ReportRequest } from './../../../models/reportRequest';
import { ReportService } from './../../../services/reportsService';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'reports-component',
    templateUrl: 'reports.component.html',
    providers: [ReportService]
})

export class ReportsComponent implements OnInit {

    public message: string;

    public startTime: string;
    public finishTime: string; 
    public reportProjects: ReportProjects;
    public reportWorkers: ReportWorkers;
    public projectCountsWorkers: ProjectCountsWorkers;

    constructor(private _reportService: ReportService) {
        this.message = 'All time Reports';
        this.reportProjects = new ReportProjects();
        this.reportWorkers = new ReportWorkers();
        this.projectCountsWorkers = new ProjectCountsWorkers();
        this.startTime = '';
        this.finishTime = '';
    }

    ngOnInit() {
        this.getAllReports();
        
    }

    public getAllReports() {
        this.message = 'All time Reports';
        this.getReportProjects();
        this.getReportWorkers();
        this.getProjectCountsWorkers();
        
    }

    public getAllPeriodReports() {
        this.message = 'All time Reports';
        let dates: ReportRequest = { startTime: this.startTime, finishTime: this.finishTime };
        this.getPeriodReportProjects(dates);
        this.getPeriodReportWorkers(dates);
        this.getPeriodProjectCountsWorkers(dates);
        this.message = `Reports from ${this.startTime} till ${this.finishTime}`;
    }


    public getReportProjects() {
        this._reportService
            .GetReportProjects()
            .subscribe(
                data => this.reportProjects = data,
            error => console.log(error),
            () => console.log('Get all report Projects complete')
        );
    }

    public getReportWorkers() {
        this._reportService
            .GetReportWorkers()
            .subscribe(
            data => this.reportWorkers = data,
            error => console.log(error),
            () => console.log('Get all report Workers complete')
            );
    }

    public getProjectCountsWorkers() {
        this._reportService
            .GetProjectCountsWorkers()
            .subscribe(
            data => this.projectCountsWorkers = data,
            error => console.log(error),
            () => console.log('Get all project Counts Workers complete')
            );
    }

    public getPeriodReportProjects(dates: ReportRequest) {
        this._reportService
            .GetPeriodReportProjects(dates)
            .subscribe(
            data => this.reportProjects = data,
            error => console.log(error),
            () => console.log('Get period report Projects complete')
            );
    }

    public getPeriodReportWorkers(dates: ReportRequest) {
        this._reportService
            .GetPeriodReportWorkers(dates)
            .subscribe(
            data => this.reportWorkers = data,
            error => console.log(error),
            () => console.log('Get period report Workers complete')
            );
    }

    public getPeriodProjectCountsWorkers(dates: ReportRequest) {
        this._reportService
            .GetPeriodProjectCountsWorkers(dates)
            .subscribe(
            data => this.projectCountsWorkers = data,
            error => console.log(error),
            () => console.log('Get period project count Workers complete')
            );
    }

}
