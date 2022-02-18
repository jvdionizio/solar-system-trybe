import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const newLocal = this;
    const altText = `Planeta ${newLocal.props.planetName}`;

    return (
      <div data-testid="planet-card" className="planet-card">
        <img src={ newLocal.props.planetImage } alt={ altText } />
        <p data-testid="planet-name">{newLocal.props.planetName}</p>
      </div>
    );
  }
}

export default PlanetCard;
