import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Analytics from 'react-router-ga'
import Home from './views/Home'
import Page from './views/Page'
import PageVideos from './views/PageVideos'
import PageProjetos from './views/PageProjetos'
import PageNoticias from './views/PageNoticias'
import PageImprensa from './views/PageImprensa'
import PageEventos from './views/PageEventos'
import PageGaleria from './views/PageGaleria'
import ScrollToTop from './util/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Analytics id="UA-177269578-1" debug>
        <Switch>
          <Route path="/videos/:id">
            <PageVideos />
          </Route>
          <Route path="/projetos/:projeto_slug">
            <PageProjetos />
          </Route>
          <Route path="/noticias">
            <PageNoticias />
          </Route>
          <Route path="/eventos">
            <PageEventos />
          </Route>
          <Route path="/galeria">
            <PageGaleria />
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
      </Analytics>
    </Router>
  )
}

export default App