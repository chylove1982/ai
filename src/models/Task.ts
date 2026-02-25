// Task model representing a to-do item in the application

export interface Task {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}