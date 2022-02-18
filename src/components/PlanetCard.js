import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const newLocal = this;
    const altText = `Planeta ${newLocal.props.planetName}`;

    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{newLocal.props.planetName}</p>
        <img src={ newLocal.props.planetImage } alt={ altText } />
      </div>
    );
  }
}

export default PlanetCard;
