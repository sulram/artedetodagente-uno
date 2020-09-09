import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './views/Home'
import Page from './views/Page'
import PageVideos from './views/PageVideos'
import PageProjetos from './views/PageProjetos'
import PageNoticias from './views/PageNoticias'
import PageEventos from './views/PageEventos'
import PageImprensa from './views/PageImprensa'
import ScrollToTop from './util/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/videos/:id">
          <PageVideos />
        </Route>
        <Route path="/projetos/:id">
          <PageProjetos />
        </Route>
        <Route path="/noticias">
          <PageNoticias />
        </Route>
        <Route path="/eventos">
          <PageEventos />
        </Route>
        <Route path="/imprensa">
          <PageImprensa />
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