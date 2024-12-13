/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    plugins: []
    // 由于 element-plus 没有 reset 组件样式
    // corePlugins: {
    //     preflight: false
    // }
}
