import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';

describe('Board component', function() {
  it('Renders the Board with correct className', function() {

    const renderer = TestUtils.createRenderer();
    renderer.render(<Board />);
    const result = renderer.getRenderOutput();

    result.type.should.equal('div');
    result.props.className.should.equal('card-board');

    const h2 = result.props.children;
    h2.type.should.equal('div');
    h2.props.className.should.equal('board-title');

  });
});