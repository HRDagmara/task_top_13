import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/header';
import Carousel from '../Carousel/carousel';
import Search from '../Search/search';

const Layout = ({ children }) => {
	return (<div>
		<Header />
		<Search />
		<Carousel />
	</div>
	)
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;