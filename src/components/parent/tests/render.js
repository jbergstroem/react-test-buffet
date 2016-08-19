import Parent from '../parent.jsx';
import fixture from '../fixtures/base.js';
import { render, stubMethod } from '../../../../tests/helpers.js';
import React from 'react/addons';
import $ from 'jquery';

const { TestUtils } = React.addons;


describe('Parent', function() {
  let component;
  let doStuffStub, loadChildStub;

  beforeEach(function() {
    loadChildStub = stubMethod(Parent, 'loadChild', null);
    doStuffStub = stubMethod(Parent, 'doStuff');

    component = render(Parent, fixture);
  });

  it('should do stuff when clicking on the button', function() {
    TestUtils.Simulate.click(component.refs.btn.getDOMNode());

    expect(doStuffStub).to.have.been.calledOnce;
  });

  it('should render stuff', function() {
    expect($(component.refs.stuff.getDOMNode()).text()).to.equal('tomato');
  });

  it('should render a child', function() {
    expect(loadChildStub).to.have.been.calledWith('child');
  });
});
