import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import RockPage from './pages/RockPage'
import RapPage from './pages/RapsPage'
import CategoryPage from './pages/CategoryPage'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/rocks">Rock</Link>
          </li>
          <li>
            <Link to="/top40s">Top 40</Link>
          </li>
          <li>
            <Link to="/raps">Rap</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        {/* <Route exact path="/rocks" component={RockPage}></Route>
        <Route exact path="/raps" component={RapPage}></Route> */}
        <Route exact path="/:category" component={CategoryPage} />
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
