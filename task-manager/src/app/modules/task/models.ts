// Section model
export class Section {
    id: string;
    title: string;
    priority: Priority;
    createdAt?: string;

    constructor(id: string, title: string, priority: Priority) {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.createdAt = new Date().toISOString();
    }
}

// Task model
export class Task {
    id: string;
    sectionId: string;
    name: string;
    description: string;
    dueDate: Date;
    priority: Priority;
    createdAt?: Date;
    // isCompleted: boolean;

    constructor(id: string, sectionId: string, name: string, description: string, dueDate: Date, priority: Priority) {
        this.id = id;
        this.sectionId = sectionId;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.createdAt = new Date();
        // this.isCompleted = isCompleted;
    }
}

// Enum for Priority
export enum Priority {
    High = 'HIGH',
    Normal = 'NORMAL',
    Low = 'LOW'
}
