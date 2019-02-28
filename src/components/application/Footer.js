import React from 'react';
// import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">About</h4>
              <div className="ui inverted link list">
                <p className="item">Contact Us</p>
                <p className="item">Frequently Asked Questions</p>
                <p className="item">Careers</p>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Services</h4>
              <div className="ui inverted link list">
                <p className="item">Schedule a Crawl</p>
                <p className="item">Sponsor a Pub Crawl</p>
                <p className="item">Purchase Merchandise</p>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">Disclaimer</h4>
              <p>
                Drinking is only permitted for adults +21.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
