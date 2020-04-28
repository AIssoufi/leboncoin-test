// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Property from './Property';

// CSS
import './PropertyList.css';

const PropertyList = ({ properties, isLoading }) => {
  if (isLoading) return <p>Chargement...</p>
  return (
    <ul className='property-list-container'>
      {properties.map(data => (
        <li className='property-item'>
          <Property {...data} />
        </li>
      ))}
    </ul>
  )
}

PropertyList.prototype = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      propertyUrl: PropTypes.string.isRequired
    })
  ).isRequired,
  isLoading: PropTypes.bool
}

PropertyList.defaultProps = {
  isLoading: false
}

export default PropertyList;