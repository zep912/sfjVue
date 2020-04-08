<template>
	<div class="add">
		<div class="add_lvshi">
			<div class="add_child">
				<div class="flex">
					<span class="text_betten">姓名<i></i></span><span class="name_span" >*</span>
					<el-input v-model="input" style="width: 288px;" placeholder="请输入内容"></el-input>
				</div>
				<div class="flex">
					<span class="text_betten">手机号码<i></i></span><span class="name_span" >*</span>
					<el-input v-model="input" style="width: 288px;" placeholder="请输入内容"></el-input>
				</div>
				<div class="flex">
					<span class="text_betten">进所时间<i></i></span><span class="name_span" style="opacity: 0;">*</span>
					<el-input v-model="input" style="width: 288px;" placeholder="请输入内容"></el-input>
				</div>
			</div>
			<div class="add_child">
				<div class="flex">
					<span class="text_betten">执业证号<i></i></span><span class="name_span" >*</span>
					<el-input v-model="input" style="width: 288px;" placeholder="请输入内容"></el-input>
				</div>
				<div class="flex">
					<span class="text_betten">执业类别<i></i></span><span class="name_span" >*</span>
					<el-input v-model="input" style="width: 288px;" placeholder="请输入内容"></el-input>
				</div>
			</div>
		</div>
		<div>
			<div class="flex">
				<span class="text_betten">人员类型<i></i></span><span class="name_span" style="opacity: 0;">*</span>
				<el-checkbox-group v-model="checkList">
				    <el-checkbox label="律所负责人"></el-checkbox>
				    <el-checkbox label="律所合伙人"></el-checkbox>
				    <el-checkbox label="派驻律师"></el-checkbox>
				  </el-checkbox-group>
			</div>
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten">擅长专业<i></i></span><span class="name_span" style="opacity: 0;">*</span>
				<textarea name="" id="" value="*******************" cols="30" rows="10"></textarea>
				<div class="add_btn" @click="select_type">
					<img src="../../assets/image/u3582.png" alt="">
				</div>
			</div>
			<div class="flex" style="align-items: flex-start;margin-top: 20px;">
				<span class="text_betten">上传照片<i></i></span><span class="name_span" style="opacity: 0;">*</span>
				<div class="add_img">
					<img src="../../assets/image/add.png" alt="">
				</div>
			</div>
			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
				  <el-button type="primary">提交</el-button>
				<el-button>取消</el-button>
			</div>
			
		</div>
		<div class="toast" v-if="shanchang">
			<div class="toast_con">
				<div class="con-toptoast">
					擅长专业
					<img src="../../assets/image/del.png" @click="close" alt="">
				</div>
				<div>
					<el-tree
					  :data="data"
					  show-checkbox
					  node-key="id"
					  :default-expanded-keys="[2, 3]"
					  :default-checked-keys="[5]"
					  :props="defaultProps">
					</el-tree>
				</div>
				<div class="toast_save">
					<div>保存</div>
					<div class="tishi_toast">
						<img src="../../assets/image/jinggao.png" alt="">
						最多选择5项
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
	  checkList: ['选中且禁用','复选框 A'],
	  data: [{
	            id: 1,
	            label: '一级 1',
	            children: [{
	              id: 4,
	              label: '二级 1-1',
	              children: [{
	                id: 9,
	                label: '三级 1-1-1'
	              }, {
	                id: 10,
	                label: '三级 1-1-2'
	              }]
	            }]
	          }, {
	            id: 2,
	            label: '一级 2',
	            children: [{
	              id: 5,
	              label: '二级 2-1'
	            }, {
	              id: 6,
	              label: '二级 2-2'
	            }]
	          }, {
	            id: 3,
	            label: '一级 3',
	            children: [{
	              id: 7,
	              label: '二级 3-1'
	            }, {
	              id: 8,
	              label: '二级 3-2'
	            }]
	          }],
	          defaultProps: {
	            children: 'children',
	            label: 'label'
	          },
			  shanchang:false
	       
    }
  },
  methods:{
	  select_type(){
		  this.shanchang=true
	  },
	  close(){
		  this.shanchang=false
	  }
  }
}
</script>

<style lang="scss">
	.add{
		width: 94%;
		padding: 20px 3%;
	}
	.add_lvshi{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
		
	.add_lvshi>div{
		width: 50%;
	}
	.add_child>div{
		margin-top: 20px;
	}
	.add_btn{
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: #0da9d7;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 20px;
	}
	.add_btn img{
		width: 65%;
		height: 65%;
	}
	.add_img{
		width: 100px;
		height: 100px;
		border: 1px solid #eee;
		
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.add_img img{
		width: 30px;
		height: 30px;
	}
	.toast{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.toast_con{
		width: 500px;
		border-radius: 5px;
		overflow: hidden;
		background: #fff;
	}
	.con-toptoast{
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		font-size: 20px;
		color: #fff;
		position: relative;
	}
	.con-toptoast img{
		width: 28px;
		height: 28px;
		position: absolute;
		right: 20px;
		top: 12px;
	}
	.toast_save{
		width: 100%;
		display: flex;
		justify-content: center;
		position: relative;
	}
	.toast_save>div:nth-child(1){
		width: 80px;
		height: 40px;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		color: #fff;
		border-radius: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20px ;
	}
	.tishi_toast{
		color: #d81e06;
		display: flex;
		align-items: center;
		
	}
	.tishi_toast img{
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
</style>
