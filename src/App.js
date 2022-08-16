import React, { Component } from 'react'
import Contact from './Contact'
import Home from './Home'
import Nav from './Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: {},
      name: 'Shoha',
      age: 9000
    }
  }

  addToAge = () => {
    this.setState({age: this.state.age + 1})
  }
  

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />

          {this.state.name}

          <button onClick={this.addToAge}>Happy Birthday</button>


          <Routes>
            <Route path='/' element={<Home ageXYZ={this.state.age}/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>


        </div>
      </BrowserRouter>
    )
  }
}
