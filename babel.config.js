module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['module:babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@data': './src/data',
            '@domain': './src/domain',
            '@presentation': './src/presentation',
            '@components': './src/presentation/components',
            '@pages': './src/presentation/pages'
          }
        }
      ]
    ]
  };
};
