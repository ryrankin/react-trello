import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function(){
	it('Renders the card with the correct text and correct className', function(){
		const text = 'hello test text';

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card text={text} />);
		const result = renderer.getRenderOutput();

		const cardClass = result.props.className;
		cardClass.should.equal('card');

		const testText = result.props.children;
		testText.should.equal('hello test text');
	
	});
});