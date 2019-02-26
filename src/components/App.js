import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
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
import CrawlAddLocations from './crawls/CrawlAddLocations';
import LocationShow from './locations/LocationShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={CrawlList} />
            <Route path="/crawls/new" component={CrawlCreate} />
            <Route path="/crawls/edit/:id" component={CrawlEdit} />
            <Route path="/crawls/delete/:id" component={CrawlDelete} />
            <Route path="/crawls/:id" exact component={CrawlShow} />
            <Route path="/crawls/:id/add_locations" component={CrawlAddLocations} />
            <Route path="/locations/:id" component={LocationShow} />

            <Route path="/streams" component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/:id" component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
