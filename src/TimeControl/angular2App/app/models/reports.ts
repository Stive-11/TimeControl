export class ReportProjects {
    public listProjects: ProjectReportItem[];

    constructor() {
        this.listProjects = [];
    }
}

export class ReportWorkers {
    public listWorkers: WorkerReportItem[];

    constructor() {
        this.listWorkers = [];
    }
}

export class ProjectCountsWorkers {
    public listProjectsCountWorkerses: ProjectCountWorkersItem[];

    constructor() {
        this.listProjectsCountWorkerses = [];
    }
}


export class ProjectReportItem {
    public time: number;
    public name: string;
}

export class WorkerReportItem {
    public time: number;
    public name: string;
}

export class ProjectCountWorkersItem {
    public count: number;
    public name: string;
}

