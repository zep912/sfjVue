module.exports = {
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ],
    presets: [
        '@vue/app'
    ],
	ignore: [
	"public/bower_components/ueditor/utf8-asp/*.js"//排除不规范的js文件检查
	]
};