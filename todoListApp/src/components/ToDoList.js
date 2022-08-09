import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todoList: []
        };
    }

    addTodo = (event) => {
        event.preventDefault();
        // console.log(event.target.taskTitle.value);
        const data = event.target,
            newTodo = {
                taskTitle: data.taskTitle.value,
                date: data.date.value,
                time: data.time.value
            }
        // console.log(newTodo);
        this.state.todoList.push(newTodo);
        this.setState({
            todoList: this.state.todoList
        })
    }

    // to delete todo list 
    deleteTodo = (event) => {
        // splice you need indexNumber, how many you delete
        this.state.todoList.splice(event.target.value, 1)
        this.setState( {
            todoList: this.state.todoList
        })
    }

    render() {
        console.log(this.state.todoList);
        return (
            <>
                <Form onSubmit={this.addTodo}>
                    <Form.Group controlId="formBasicTaskTitle">
                        <Form.Label>Task Title:</Form.Label>
                        <Form.Control type="text" placeholder="Enter a Task" name="taskTitle" />
                    </Form.Group>
                    <Form.Group controlId="formBasicDate">
                        <Form.Label>Task Date:</Form.Label>
                        <Form.Control type="date" placeholder="mm/dd/yyyy" name="date" />
                    </Form.Group>
                    <Form.Group controlId="formBasicTime">
                        <Form.Label>Task Time:</Form.Label>
                        <Form.Control type="time" placeholder="Enter a Time" name="time" />
                    </Form.Group>
                    <br/>
                
                    <Button type="submit" className="btn btn-success">Add+</Button>
                </Form>
                <br/>
                <ListGroup>
                    {
                        this.state.todoList.map((task, index)  => {
                            return (
                                <ListGroup.Item key={index} variant="success"> You have a
                                    {task.taskTitle} at {task.time}, Date: {task.date}.   
                                    <Button type="button" variant="danger" onClick={this.deleteTodo} value={index}>
                                        Delete
                                    </Button>
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </>
        )

    }
}
export default TodoList;