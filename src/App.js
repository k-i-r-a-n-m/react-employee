import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchBox from './components/search-box/search-box.component'
import CardList from './components/card-list/card-list.component';

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
    console.log('componentDidMount')
  }

   find=(event)=>{
    
      const found = this.state.employee.filter(e=>e.name.toLowerCase().includes(event.target.value.toLowerCase()))
      this.setState({filtered:found})
    
    // console.log(this)
  }

  render(){
    const {find} = this
    return (
      
      <div className="App">
      <h1 className='heading'>Find Employee🔍</h1>
      <SearchBox className="" placeholder="Name" onChangeHandler={find}/>
      <CardList list={this.state.filtered}/>
    </div>
    );
  }
}

export default App;
