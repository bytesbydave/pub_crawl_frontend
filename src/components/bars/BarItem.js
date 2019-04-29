import React from 'react';
import 'semantic-ui-css/semantic.min.css';

const BarItem = ({ bar }) => {
  console.log(bar)
  return (
    <div className="card">
      <div className="image">
        <img src={bar.image_url} alt="bar-pic" />
      </div>
      <div className="content">
        <div className="header">{bar.name}</div>
        <div className="meta">
          <a>Category</a>
        </div>
        <div className="description">Description</div>
      </div>
      <div className="extra content">
        <span className="right floated">{bar.city}</span>
        <span>Rating: {bar.rating} Stars</span>
      </div>
    </div>
  );
};

export default BarItem;