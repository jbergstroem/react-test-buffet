const requireComponent = require.context(
  '../src/components', true, /tests\/.*\.jsx?$/);

requireComponent.keys().forEach(requireComponent);
