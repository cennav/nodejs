import Task from './task.js'

export default class Tasks {

    list = null;

    constructor()
    {
        this.list = {};
    }

    createTask = descrip => {
        const task = new Task(descrip);
        this.list[task.id] = task;
    
    }

    listTasks = () => {
        return this.list;
    }

}
