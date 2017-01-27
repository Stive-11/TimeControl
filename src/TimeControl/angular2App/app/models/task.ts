export class Task {
    public id: number;
    public name: string;
    public projectId: number;
    public workerId: number;
    public date: string;
    public time: number;

    constructor() {
        this.id = 0;
        this.date = '';
        this.name = '';
        this.projectId = 0;
        this.workerId = 0;
        this.time = 0;
    }
}

export class TableTask {
    public id: number;
    public name: string;
    public project: string;
    public worker: string;
    public date: string;
    public time: number;
}