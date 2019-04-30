import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './application/Home';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import CrawlList from './crawls/CrawlList';
import CrawlCreate from './crawls/CrawlCreate';
import CrawlEdit from './crawls/CrawlEdit';
import CrawlDelete from './crawls/CrawlDelete';
import CrawlShow from './crawls/CrawlShow';
import BarsDisplay from './bars/BarsDisplay'
import LocationShow from './bars/LocationShow';
import Header from './application/Header';
import Footer from '../components/application/Footer';
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/crawls" exact component={CrawlList} />
            <Route path="/crawls/new" component={CrawlCreate} />
            <Route path="/crawls/edit/:id" component={CrawlEdit} />
            <Route path="/crawls/delete/:id" component={CrawlDelete} />
            <Route path="/crawls/:id" exact component={CrawlShow} />

            {/* <Route path="/locations/:id" component={LocationShow} /> */}

            <Route path="/streams" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/:id" component={StreamShow} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
