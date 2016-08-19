import Child from '../child.jsx';
import fixture from '../fixtures/base.js';
import { render } from '../../../../tests/helpers.js';
import $ from 'jquery';


describe('Child', function() {
  let component;

  beforeEach(function() {
    component = render(Child, fixture);
  });

  it('should render foo', function() {
    expect($(component.refs.foo.getDOMNode()).text()).to.equal('bar');
  });
});
