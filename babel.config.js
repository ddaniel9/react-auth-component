module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { runtime: 'classic' }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-syntax-dynamic-import',
    // 'css-to-js-transform',
    'react-css-modules',
    ["babel-plugin-inline-import-data-uri", {
      // Opzioni del plugin se necessario
    }],
  ],
};
