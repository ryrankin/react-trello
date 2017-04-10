import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import ListContainer from '../js/components/list-container';

describe('List container component', function(){
	it('Renders the list', function(){
		const title = 'Title 1';
		const cards = ['card 1', 'new card', 'card 3'];

		const renderer = TestUtils.createRenderer();
		renderer.render(<ListContainer />);
		const result = renderer.getRenderOutput();

		result.type.should.equal('div');
		result.props.className.should.equal('list-container');
		result.props.children.props.cards.should.be.an('array');
	
	});
});