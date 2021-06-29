import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/main.ts',
  output: {
    dir: 'dist',
  },
  plugins: [nodeResolve(), typescript()],
}
