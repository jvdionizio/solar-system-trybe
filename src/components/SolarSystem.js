import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planetas">
          {planets.map((planet) => (
          // eslint-disable-next-line max-len
            <PlanetCard planetName={ planet.name } planetImage={ planet.image } key={ planet.name } />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
