import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = 'http://localhost:5000/';
    public ManagmentApi: string = this.Server + 'api/Management/';
    public DataApi: string = this.Server + 'api/data/';
    public ReportsApi: string = this.Server + 'api/reports/';
}