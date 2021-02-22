import React from 'react'

export default class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'button'
        }
    }
    componentDidMount(){
        this.setState({title:'button changed'})
    }
    render(){
        return(
            <div>
             
                <h1>{this.state.title}</h1>
                <p>{this.props.title}</p>
                <button>{this.state.title}</button>
            </div>
        )
    }
}