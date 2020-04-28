import React from 'react';
import PropTypes from 'prop-types';

import './Property.css';

const Property = ({ title, imgUrl, propertyUrl }) => (
  <div className='property-container'>
    <div className='property-img-container'>
      <img src={imgUrl} alt={title}/>
    </div>
    <p className='title'>
      <a href={propertyUrl}>{title}</a>
    </p>
  </div>
)

Property.prototype = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  propertyUrl: PropTypes.string.isRequired
}

export default Property;