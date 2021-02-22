import React from "react";
import '../App.css';
export default class Todo extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         title:'First Todo',
    //         complete:false
    //     }
    // }
    render(){   
        return(
            <div>
            <div className='todo'>
            <p style={{ textDecoration: this.props.todo.complete ? 'line-through' : '' }}>
            {this.props.todo.title}
            </p>
            <div className='status'>
            <button className='complete' onClick={() => this.props.completeTodo(this.props.todo.id)}>
            Complete
            </button>
            <button className='cancel' onClick={() => this.props.deleteTodo(this.props.todo.id)}>
            X
            </button>
            </div>
            </div>
            </div>
        )
    }
}
