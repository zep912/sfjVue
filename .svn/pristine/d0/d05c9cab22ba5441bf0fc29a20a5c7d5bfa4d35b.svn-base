<template>
	<div class="gerenziliao">
		<div class="gerenziliao_top">
			个人资料
		</div>
		<div>
			<div class="shenheone_text" style="border: 0;">
				<div class="text_aa">
					<div>
						<div class="flex">
							<span class="text_betten">姓名<i></i></span>： {{data.baseInfo.lawyerName}}
						</div>
						<div class="flex">
							<span class="text_betten">性别<i></i></span>： {{data.baseInfo.sexDesc}}
						</div>
						<div class="flex">
							<span class="text_betten">居住地址<i></i></span>： {{data.baseInfo.areaAddress}}
						</div>
						<div class="flex">
							<span class="text_betten">政治面貌<i></i></span>： {{data.baseInfo.politicsStatusDesc}}
						</div>
						<div class="flex">
							<span class="text_betten">学历<i></i></span>： {{data.baseInfo.degreeDesc}}
						</div>
						<div class="flex">
							<span class="text_betten">专业<i></i></span>： {{data.baseInfo.major}}
						</div>
						<div class="flex">
							<span class="text_betten">手机号码<i></i></span>： {{data.baseInfo.lawyerPhone}}
						</div>
						<div class="flex">
							<span class="text_betten">资格证类型<i></i></span>： {{data.baseInfo.certificationType}}
						</div>

					</div>
					<div>
						<div class="flex">
							<span class="text_betten">执业证号<i></i></span>：{{data.baseInfo.credentialCode}}
						</div>
						<div class="flex">
							<span class="text_betten">执业类别<i></i></span>： {{data.baseInfo.professionTypeDesc}}
						</div>
						<div class="flex">
							<span class="text_betten">民族<i></i></span>：{{data.baseInfo.nationCode}}
						</div>
						<div class="flex">
							<span class="text_betten">学位<i></i></span>： {{data.baseInfo.degree}}
						</div>
						<div class="flex">
							<span class="text_betten">人事档案<i></i></span>：{{data.baseInfo.lawyerRecord}}
						</div>
						<div class="flex">
							<span class="text_betten">执业类别<i></i></span>： {{data.baseInfo.professionTypeDesc}}
						</div>
					</div>
				</div>
				<div style="margin-top: 30px;">
					<div class="flex">
						<span class="text_betten">诚信信息<i></i></span>：
						<el-table :data="data.faithList" border style="width: 100%">
							<el-table-column type="index" label="序号" width="80">
							</el-table-column>
							<el-table-column prop="awardName" label="授予机构">
							</el-table-column>
							<el-table-column prop="awardDate" label="授予日期">
							</el-table-column>
							<el-table-column prop="awardContent" label="授予内容">
							</el-table-column>
							<el-table-column prop="commendLevel" label="表彰级别">
							</el-table-column>
						</el-table>
					</div>
				</div>
				<div>
					<div class="flex">
						<span class="text_betten">擅长专业<i></i></span>：<span v-for="(item,index) in data.specialtyList" :key="index">{{item.adeptSpecialtyDesc}}</span> 
					</div>
					<div class="flex">
						<span class="text_betten">照片<i></i></span>： <img :src="data.baseInfo.photoUrl" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="xiugaiziliao">
			<div @click="xiugai">修改资料</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input: '',
				data: ''
			}
		},
		created() {
			this.$axios.post(`/api/lawyer/getOwnerLawyerInfo`, {
				"token": sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
			}, {
				headers: {
					'Content-Type': 'application/json',
					'Accept-Charset': 'utf-8'
				}
			}).then((respon) => {
				if (respon) {
					this.data = respon.data.content
				}
			})
		},
		methods: {
			xiugai() {
				this.$emit('xiugai', '7')
			}
		}
	}
</script>

<style>
	.gerenziliao {
		width: 100%;
		height: 100%;
	}

	.gerenziliao_top {
		width: 95%;
		height: 70px;
		padding-left: 5%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
	}

	.xiugaiziliao {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 40px;
	}

	.xiugaiziliao>div {
		width: 120px;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		border-radius: 5px;
		background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
	}
</style>
