// section.service.ts
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Priority, Section, Task } from '../modules/task/models';


@Injectable({
    providedIn: 'root'
})
export class storageService {
    private sections: Section[] = [];
    private tasks: Task[] = [];

    constructor() {
        const storedSections = localStorage.getItem('sections');
        if (storedSections) {
            this.sections = JSON.parse(storedSections);
        }
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            this.tasks = JSON.parse(storedTasks);
        }
    }

    getSections(): Section[] {
        return this.sections;
    }

    addSection(title: string, priority: Priority): void {
        const id = uuidv4();

        const newSection: Section = {
            id: id,
            title: title,
            priority: priority,
        };

        this.sections.push(newSection);
        this.saveSectionsToLocalStorage();
    }

    private saveSectionsToLocalStorage(): void {
        localStorage.setItem('sections', JSON.stringify(this.sections));
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(sectionId: string, name: string, description: string, dueDate: Date, priority: Priority): void {
        const id = uuidv4();

        const newTask: Task = {
            id: id,
            name: name,
            priority: priority,
            description: description,
            dueDate: dueDate,
            sectionId: sectionId

        };

        this.tasks.push(newTask);
        this.saveTaskoLocalStorage();
    }
    private saveTaskoLocalStorage(): void {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }


}
