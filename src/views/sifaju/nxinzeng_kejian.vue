<template>
	<div class="xinzeng_kj">
		<div class="xinz_kejiantop">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{ path: '/manakejianku' }">课件库管理</el-breadcrumb-item>
			  <el-breadcrumb-item>新增课件</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="kejianku">
			<div class="upkejianleft">
<!--				<el-upload-->
<!--				  class="upload-demo"-->
<!--				  drag-->
<!--				  action="https://jsonplaceholder.typicode.com/posts/"-->
<!--				  multiple-->
<!--				  :on-change='wenjiansp'>-->
<!--				</el-upload>-->
				<shipin-upload  :getfileList='getshipinfileList' v-on:submitInshipinformchild="submitInshipinformchild"></shipin-upload>
			</div>
			<div class="upkejianright">
<!--				<el-upload-->
<!--				style="width: 100%;height: 100%;"-->
<!--				  class="upload-demo"-->
<!--				  drag-->
<!--				  action="https://jsonplaceholder.typicode.com/posts/"-->
<!--				  multiple-->
<!--				  :on-change='wenjian'>-->
<!--				</el-upload>-->
				<file-upload  :getfileList='getfileList' v-on:submitInformchild="submitInformchild"></file-upload>
			</div>
		</div>
	</div>
</template>

<script>
	import FileUpload from "../../components/fileUpload";
	import ShipinUpload from "../../components/shipinUpload";
	export default {
		components: {
			ShipinUpload,
			FileUpload},
	    data() {
	      return {
	        value: '100',
			/*******************相关文件相关参数******************/
			input:'',
			file:[],
			getfileList:[],
			getshipinfileList:[]
	      }
	    },
		methods:{
			//接收到上传文件id
			submitInformchild(val,name,size) {
				console.log(val);
				console.log(name);
				this.wenjian(val,name,size)
			},
			//接收视频
			submitInshipinformchild(val,name) {
				console.log(val);
				console.log(name);
				this.wenjiansp(val,name)
			},
			wenjian(val,name,size){
				console.log(123)
				this.$router.push({
					path:'/nadd_kejian', query:{
					   id:val,
					   name:name,
					   size:size
					}
				})
			},
			wenjiansp(val,name,size){
                this.$router.push({
                    path:'/nadd_kejian',query:{
                        shipin:'shipin',
						id:val,
						name:name,
						size:size
                    }
                })
			}
		}
	  };
</script>

<style>
	.xinzeng_kj{
		width: 100%;
	}
	.xinz_kejiantop{
		width: 96%;
		padding: 0 2%;
		height: 70px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
	}
	.kejianku{
		width: 92%;
		padding: 30px 4%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.upkejianleft{
		width: 47%;
		height: 480px;
		background: url(../../assets/image/cshioinkj.png);
		background-size: 100% 100%;
	}
	.upkejianright{
		width: 47%;
		height: 480px;
		background: url(../../assets/image/wenzikj.png);
		background-size: 100% 100%;
	}
	.upkejianleft div,.upkejianright div{
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>
