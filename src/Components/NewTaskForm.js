import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './css/NewTaskForm.css';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { task: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.task) return;
        this.props.addTask({ ...this.state, id: uuidv4(), completed: false });
        this.setState({ task: '' });
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <input
                    name="task"
                    type="text"
                    placeholder="New Task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        );
    }
}
