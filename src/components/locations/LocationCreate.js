import React from 'react';
import { connect } from 'react-redux';
import { createLocation } from '../../actions';

class LocationCreate extends React.Component {
  addBar = formValues => {
    console.log(this.props)
    this.props.createLocation(this.props.crawlId, this.props.name)
  }

  render() {
    return (
      <div>
        <button onClick={this.addBar}>Add Bar</button>
      </div>
    );
  }
}

export default connect(
  null,
  { createLocation }
)(LocationCreate);
