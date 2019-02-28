import React from 'react';
import './Application.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../../actions';

class Home extends React.Component {
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/crawls/new" className="ui huge primary button">
            Get Started <i className="right arrow icon" />
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/crawls/" className="ui huge primary button">
            View Pub Crawls <i className="right arrow icon" />
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="pusher">
        <div className="ui inverted vertical masthead center aligned segment cover-image">
          <div className="ui text container">
            <h1 className="ui inverted header">Pub Crawlr</h1>
            <h2>Decide your own drinking adventure</h2>
            {this.renderAuthButton()}
          </div>
        </div>

        <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="eight wide column">
                <h3 className="ui header">We Bring Together Great People</h3>
                <p>
                  Through the power of a shared interest in going from bar to
                  bar, we help create an environment for you to meet others in a
                  way you never thought possible. Spend a night or even the day
                  exploring the city. You are empowered
                </p>
                <h3 className="ui header">Explore Bars Like Never Before</h3>
                <p>
                  New to the city or looking for an adventure with new friends?
                  Explore curated pub crawls and get to know the city a bit
                  better!
                </p>
              </div>
              <div className="six wide right floated column">
                <img
                  src="https://www.verywellmind.com/thmb/JAK__6BPSswnQzYuOLxWLzfgCzA=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/beer-drinkers-569fe5fa5f9b58eba4add5ca.jpg"
                  className="ui large bordered rounded image" alt="people-drinking"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="ui vertical stripe quote segment">
          <div className="ui equal width stackable internally celled grid">
            <div className="center aligned row">
              <div className="column">
                <h3>"I've never had so much fun!"</h3>
                <p>~ Tom Cruise</p>
              </div>
              <div className="column">
                <h3>"That was a night I will never forget! 5 Stars!"</h3>
                <p>~ Vin Deasel</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ui vertical stripe segment">
          <div className="ui text container">
            <h3 className="ui header">Broadway Bar Hop</h3>
            <p>
              Broadway theatre, commonly known as Broadway, refers to the
              theatrical performances presented in the 41 professional theatres,
              each with 500 or more seats located in the Theater District and
              Lincoln Center along Broadway, in Midtown Manhattan, New York
              City.
            </p>
            <h4 className="ui horizontal header divider">
              <Link to="/crawls/">View More</Link>
            </h4>
            <h3 className="ui header">Speakeasys Only</h3>
            <p>
              A speakeasy, also called a blind pig or blind tiger, is an illicit
              establishment that sells alcoholic beverages. Such establishments
              came into prominence in the United States during the Prohibition
              era.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn }
)(Home);
