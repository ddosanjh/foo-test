import vue from 'rollup-plugin-vue'

export default {

    input: 'src/FooVueComponent.vue',

    output: {
        format: 'esm',
        file: 'dist/foo-vue-component.esm.js'
    },

    plugins: [
        vue()
    ]
}