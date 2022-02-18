// import PropTypes from 'prop-types';
import React from 'react';

class MissionCard extends React.Component {
  render() {
    const newLocal = this;
    return (
      <div data-testid="mission-card">
        <h2 data-testid="mission-name">{newLocal.props.name}</h2>
        <p data-testid="mission-year">{newLocal.props.year}</p>
        <p data-testid="mission-country">{newLocal.props.country}</p>
        <p data-testid="mission-destination">{newLocal.props.destination}</p>
      </div>
    );
  }
}

// MissionCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
//   country: PropTypes.string.isRequired,
//   destination: PropTypes.string.isRequired,
// };

export default MissionCard;
