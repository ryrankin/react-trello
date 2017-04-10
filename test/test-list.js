import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';

describe('List component', function(){
	it('Renders the list with the proper className, cards, title, and a form', function(){
		const title = 'Title 1';
		const cards = ['card 1', 'new card', 'card 3'];

		const renderer = TestUtils.createRenderer();
		renderer.render(<List title={title} cards={cards} />);
		const result = renderer.getRenderOutput();

		const listClass = result.props.className;
		listClass.should.equal('card-list');
		result.type.should.equal('div');

		const h3 = result.props.children[0].props;
		h3.className.should.equal('list-title');
		h3.children.should.equal('Title 1');

		const section = result.props.children[1].props;
		section.className.should.equal('list-cards');
		section.children.length.should.equal(3);
		section.children[0].props.text.should.equal('card 1');
		section.children[1].props.text.should.equal('new card');
		section.children[2].props.text.should.equal('card 3');

		const form = result.props.children[2];
		form.type.should.equal('form');
	});
});