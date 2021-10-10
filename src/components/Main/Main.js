import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import ExperienceMap from '../ExperienceMap/ExperienceMap'

const Main = () => (
    <div id="main" role="main">
      <ExperienceMap />
    </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
