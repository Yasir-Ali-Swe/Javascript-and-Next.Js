// Task Manager System
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Add a new task
    addTask(description) {
        const task = {
            id: this.tasks.length + 1,
            description,
            completed: false,
        };
        this.tasks.push(task);
        console.log(`Task "${description}" added.`);
    }

    // Mark a task as completed
    completeTask(id) {
        const task = this.tasks.find((task) => task.id === id);
        if (!task) {
            console.log(`No task found with ID: ${id}`);
            return;
        }
        task.completed = true;
        console.log(`Task "${task.description}" marked as completed.`);
    }

    // Delete a task
    deleteTask(id) {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        if (taskIndex === -1) {
            console.log(`No task found with ID: ${id}`);
            return;
        }
        const removedTask = this.tasks.splice(taskIndex, 1)[0];
        console.log(`Task "${removedTask.description}" deleted.`);
    }

    // View all tasks
    viewTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
            return;
        }
        console.log("Current Tasks:");
        this.tasks.forEach((task) => {
            console.log(
                `ID: ${task.id}, Description: "${task.description}", Completed: ${task.completed ? "Yes" : "No"
                }`
            );
        });
    }
}

// Create a new Task Manager instance
const myTaskManager = new TaskManager();

// Add tasks
myTaskManager.addTask("Complete JavaScript project");
myTaskManager.addTask("Study for exams");
myTaskManager.addTask("Read a new book");

// View tasks
myTaskManager.viewTasks();

// Mark a task as completed
myTaskManager.completeTask(2);

// View tasks again to see the updated status
myTaskManager.viewTasks();

// Delete a task
myTaskManager.deleteTask(3);

// View tasks after deletion
myTaskManager.viewTasks();
