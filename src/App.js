import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   const name="kiran"
//   return (
//     <div className="App">
      
//       {name}
    
//     </div>
//   );
// }

class App extends React.Component{
  constructor(){
    super()
    this.state={
      employee:[],
      filtered:[]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(list=>this.setState({employee:list,filtered:list}))
    // console.log(this)
  }
  find(event){
    if(event.target.value){
      const found = this.state.employee.filter(e=>e.name.toLowerCase().includes(event.target.value.toLowerCase()))
      this.setState({filtered:found})
    }else{
      this.setState({filtered:this.state.employee})
      
    }
    
    // console.log(this)
  }

  render(){
    return (
      
      <div className="App">
        <input type="text" placeholder='Type a Name...' onInput={this.find.bind(this)}></input>
          {this.state.filtered.map(e=><h1 key={e.id}>{e.name},{e.id}</h1>)}
    </div>
    );
  }
}

export default App;
