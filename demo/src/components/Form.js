import React from 'react';
export default class extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            users:[{id:1,name:'sai'},{id:2,name:'tarun'}]
        }
    }
    success=(event)=>{
        event.preventDefault();

        console.log('helllo' + event)
    }
   username=(username)=>{
   
       this.setState({username})
   }
   password=(password)=>{
       this.setState({password})
   }
   login=()=>{
       if(this.state.username==='tarun' && this.state.password=='admin'){
           alert('login successful')
       }
       else{
           alert('wrong credentials')
       }
   }
    render(){
    
        return(
            <div style={{textAlign:'center'}}>
                
                <div>
                    <form>
                        <input type='text' placeholder='username' value={this.state.username} onChange={(e)=>this.username(e.target.value)} /><br/><br/>
                        <input type='password' value={this.state.password} onChange={(e)=>this.password(e.target.value)} placeholder='password' /><br/><br/>
                        <input type='submit' value='submit' onSubmit={this.login()} />
                    </form>
                </div>
                {this.state.users.map(user=>(
   <p key={user.id}>{user.name}</p>
                ))}
          <div>
                   <button onClick={(e)=>this.success(e)} >show</button>
                </div>
            </div>
        )
    }
}