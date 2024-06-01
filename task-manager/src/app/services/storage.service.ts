import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { BehaviorSubject, Observable } from 'rxjs';
import { Priority, Section, Task } from '../modules/task/models';


@Injectable({
    providedIn: 'root'
})
export class storageService {
    private sectionsSubject: BehaviorSubject<Section[]> = new BehaviorSubject<Section[]>([]);
    sections$: Observable<Section[]> = this.sectionsSubject.asObservable();

    private tasks: Task[] = [];

    constructor() {
        const storedSections = localStorage.getItem('sections');
        if (storedSections) {
            this.sectionsSubject.next(JSON.parse(storedSections));
        }
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            this.tasks = JSON.parse(storedTasks);
        }
    }

    getSections(): Section[] {
        return this.sectionsSubject.getValue();
    }

    addSection(title: string, priority: Priority): void {
        const id = uuidv4();

        const newSection: Section = {
            id: id,
            title: title,
            priority: priority,
        };

        const sections = [...this.sectionsSubject.getValue(), newSection];
        this.sectionsSubject.next(sections);
        this.saveSectionsToLocalStorage(sections);
    }

    updateSection(id: string, title: string, priority: Priority): void {
        const sections = this.sectionsSubject.getValue().map(section => {
            if (section.id === id) {
                return { ...section, title, priority };
            }
            return section;
        });
        this.sectionsSubject.next(sections);
        this.saveSectionsToLocalStorage(sections);
    }

    private saveSectionsToLocalStorage(sections: Section[]): void {
        localStorage.setItem('sections', JSON.stringify(sections));
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(data: Task): void {
        this.tasks.push(data);
        this.saveTaskoLocalStorage();
    }

    private saveTaskoLocalStorage(): void {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    deleteSection(sectionId: string): void {
        const sections = this.sectionsSubject.getValue();
        const updatedSections = sections.filter(section => section.id !== sectionId);
        this.sectionsSubject.next(updatedSections);
        this.saveSectionsToLocalStorage(updatedSections);
    }
}
