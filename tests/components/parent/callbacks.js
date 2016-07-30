var React = require('react'),
    Parent = require('../../../src/components/parent.jsx'),
    TestHelpers = require('../../helpers.js');


describe('Parent', function() {
  var component;


  beforeEach(function() {
    // We don't care about the output of the component here because we're only
    // testing its callbacks.
    TestHelpers.stubMethod(Parent, 'render', null);

    component = TestHelpers.render(Parent);
  });

  it('should change foo when asked to', function() {
    component.changeFoo('baz');

    expect(component.state.foo).to.equal('baz');
  });

  it('should do stuff when asked to', function() {
    component.doStuff();

    expect(component.state.stuff).to.equal('potato');
  });
});
