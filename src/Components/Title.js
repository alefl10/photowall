import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Title = ({ title }) => <h1><Link to="/">{title}</Link></h1>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
