import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch,Route} from  'react-router-dom'
import BoogleGame from './BoggleGame'
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path ='/' render ={()=>('Home !!')} />
        <Route path='/game' render ={()=><BoogleGame boggleParam ="Hello from game!"/>}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App
