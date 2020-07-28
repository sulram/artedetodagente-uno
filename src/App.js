import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './views/Home'
// import PageCursos from './views/PageCursos'
// import PageNoticias from './views/PageNoticias'
import Page from './views/Page'
import ScrollToTop from './util/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/videos/:id">
          Hello videos
        </Route>
        <Route path="/noticias">
          Em breve
        </Route>
        <Route exact path="/:id">
          <Page />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App