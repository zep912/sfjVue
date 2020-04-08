<template>
	<div>
		<div ref="wangEditorWrap" style="text-align:left;"></div>
		<p v-if="showEditorValidate" style="color:#F56C6C;text-align:left;font-size:12px;">请输入内容</p>
	</div>
</template>

<script>
import E from "wangeditor";
export default {
	data() {
		return {
			editor: null,
		}
	},
	mounted() {
			this.editor = new E(this.$refs.wangEditorWrap);
			// 编辑器的事件，每次改变会获取其html内容
			this.editor.customConfig.onchange = html => {
				// console.log(html);
				setTimeout(()=> {
					this.$emit('input', html);
				}, 0);
			};
			this.editor.customConfig.menus = [
				// 菜单配置
				'head', // 标题
				'bold', // 粗体
				'fontSize', // 字号
				'fontName', // 字体
				'italic', // 斜体
				'underline', // 下划线
				'strikeThrough', // 删除线
				'foreColor', // 文字颜色
				'backColor', // 背景颜色
				'link', // 插入链接
				'list', // 列表
				'justify', // 对齐方式
				'quote', // 引用
				'emoticon', // 表情
				'image', // 插入图片
				'table', // 表格
				'code', // 插入代码
				'undo', // 撤销
				'redo' // 重复
			];
			this.editor.create(); // 创建富文本实例
			this.editor.txt.html(this.value);
			// editor.cmd.do('justifyLeft');
			if(this.disable===true) {
				this.editor.$textElem.attr('contenteditable', false)
			}
	},
	watch: {
		value() {
			this.editor.txt.html(this.value);
		},
		disable() {
			
		}
	},
	props: ['value', 'showEditorValidate', 'disable'],
}
</script>

<style>

</style>