import typescript from 'rollup-plugin-typescript'

export default {
  dest: './dist/bundle.js',
  entry: './src/index.tsx',
  exports: 'named',
  external: ['react', 'react-dom'],
  format: 'umd',
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    rxjs: 'Rx'
  },
  moduleName: 'TduxDemo',
  plugins: [
    typescript({
      typescript: require('typescript')
    })
  ],
  treeshake: false // otherwise, rollup shakes all our exports away
}