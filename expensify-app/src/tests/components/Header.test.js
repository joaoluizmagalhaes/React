import React from 'react';
import Header from '../../components/Header';
import ReachShallowRenderer from 'react-test-renderer/shallow';

test('should render Header correctly', () => {
    const renderer = new ReachShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});