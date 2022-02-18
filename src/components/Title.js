import React from 'react';

class Title extends React.Component {
  render() {
    const newLocal = this;
    const { headline } = newLocal.props.headline;
    return (
      <h2>
        {headline}
      </h2>
    );
  }
}

// Title.propTypes = {
//   headline: PropTypes.string.isRequired,
// };

export default Title;
