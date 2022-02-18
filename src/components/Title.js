import React from 'react';

class Title extends React.Component {
  render() {
    const newLocal = this;
    return (
      <h2>
        {newLocal.props.headline}
      </h2>
    );
  }
}

// Title.propTypes = {
//   headline: PropTypes.string.isRequired,
// };

export default Title;
