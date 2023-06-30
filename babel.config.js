module.exports = {
  plugins:
    process.env.REACT_APP_MODE === 'production'
      ? [['transform-remove-console', { exclude: ['error', 'warn'] }]]
      : []
};
