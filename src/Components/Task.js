import React from 'react';
import './css/Task.css';

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, task: this.props.task };
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCompletedClick = this.handleCompletedClick.bind(this);
    }

    handleDeleteClick(e) {
        this.props.delete(this.props.id);
    }

    handleEditClick(e) {
        this.setState({ isEditing: true });
    }
    handleCompletedClick(e) {
        this.props.updateCompleted(this.props.id);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.task) return;
        this.props.save({ task: this.state.task, id: this.props.id });
        this.setState({ isEditing: false });
    }

    render() {
        let renderedTask;
        if (this.state.isEditing) {
            renderedTask = (
                <div className="Todo">
                    <form
                        className="Todo-edit-form"
                        onSubmit={this.handleSubmit}
                    >
                        <input
                            name="task"
                            type="text"
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            renderedTask = (
                <div className="Todo">
                    <div
                        className="liWrapper"
                        onClick={this.handleCompletedClick}
                    >
                        <li
                            className={
                                this.props.completed
                                    ? 'Todo-task completed'
                                    : 'Todo-task'
                            }
                        >
                            {this.props.task}
                        </li>
                    </div>
                    <div className="Todo-buttons">
                        <button
                            className="fas fa-pen"
                            onClick={this.handleEditClick}
                        ></button>
                        <button
                            className="fas fa-trash"
                            onClick={this.handleDeleteClick}
                        ></button>
                    </div>
                </div>
            );
        }
        return renderedTask;
    }
}
