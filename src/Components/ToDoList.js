import React from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm';
import './css/TaskList.css';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] };
        this.addTask = this.addTask.bind(this);
        this.delete = this.delete.bind(this);
        this.save = this.save.bind(this);
        this.updateCompleted = this.updateCompleted.bind(this);
    }

    addTask(newTask) {
        this.setState({ tasks: [...this.state.tasks, newTask] });
    }

    delete(id) {
        this.setState({ tasks: this.state.tasks.filter((st) => st.id !== id) });
    }

    save(task) {
        this.setState({
            tasks: this.state.tasks.map((i) => {
                if (i.id === task.id) {
                    i.task = task.task;
                }
                return i;
            }),
        });
    }
    updateCompleted(id) {
        this.setState({
            tasks: this.state.tasks.map((i) => {
                if (i.id === id) {
                    i.completed = !i.completed;
                }
                return i;
            }),
        });
    }

    render() {
        const tasks = this.state.tasks.map((task) => {
            return (
                <Task
                    task={task.task}
                    completed={task.completed}
                    id={task.id}
                    key={task.id}
                    delete={this.delete}
                    save={this.save}
                    updateCompleted={this.updateCompleted}
                />
            );
        });

        return (
            <div className="TodoList">
                <h1>
                    To-Do List
                    <span>SImple React To-do List</span>
                </h1>
                <NewTaskForm addTask={this.addTask} />
                {tasks}
            </div>
        );
    }
}
