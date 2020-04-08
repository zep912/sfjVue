<template>
	<div class="ditu">
		<div class="zaixian_top" style="height: 70px;">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/zhize' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>司法地图</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="zaixian_content">
			<div>
				<div class="left_ditu">
					<img src="../../../assets/image/sousuo.png" alt="">
					<input type="text" v-model="lvsuo_name" placeholder="请输入想要搜索机构名称">
					<div>搜索</div>
				</div>
				<div class="left_toubu">
					<div>
						<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					    <div class="ditu_fenge"></div>
					    <el-select v-model="leibie_bt" placeholder="请选择">
						      <el-option
						        v-for="item in leibie"
						        :key="item.value"
						        :label="item.label"
						        :value="item.value">
						      </el-option>
						</el-select>
						<div class="ditu_fenge"></div>
						<div class="youce_tu">
							<img src="../../../assets/image/sanjiaoshang.png" alt="">
						</div>
					</div>
					<div class="shuliangtongji">
						<div class="shulactive" v-for="(lvsuo,index) in lvsuolist.collectData.orgList" v-show="index==0" :key="index">
							<div>{{lvsuo.orgCount}}</div>
							<div>{{lvsuo.allOrg}}</div>
						</div>
						<div class="shulactive" v-for="(lvsuo,i) in lvsuolist.collectData.orgList" v-show="i!=0" :key="i">
							<div>{{lvsuo.orgCount}}</div>
							<div>{{lvsuo.orgName}}</div>
						</div>
					</div>
					<div class="ditu_shuxing">
						<el-tree
						  :data="data"
						  show-checkbox
						  node-key="id"
						  default-expand-all
						  :expand-on-click-node="false">
						  <span class="custom-tree-node" slot-scope="{ node, data }">
							<span>{{ node.label }}</span>
							<span>
							  <el-button
								type="text"
								size="mini" style="">
								数量： <span>765</span>
							  </el-button>
							</span>
						  </span>
						</el-tree>
					</div>
				</div>
			</div>
			<div class="amap-page-container">
			      <el-amap
			        vid="amapDemo"  
			        :center="center"
			        :zoom="zoom"
			        class="amap-demo"
			        :events="events"
					:amap-manager="amapManager"
					>
			        <el-amap-marker v-for="marker in markers" :position="marker.position" :content="marker.content" :events="marker.events"></el-amap-marker>
			      </el-amap>
			</div>
		</div>
		
	</div>
</template>

<script>
	import {dituliebiao} from '../../../http/api.js'
	import { AMapManager } from 'vue-amap';
	export default  {
	      data() {
	        let self = this;
			const data = [{
			        id: 1,
			        label: '辽阳市',
			        children: [{
			          id: 4,
			          label: '宏伟区',
			          children: [{
			            id: 9,
			            label: '白塔区'
			          }, {
			            id: 10,
			            label: '文圣区'
			          }]
			        }]
			      }, {
			        id: 2,
			        label: '青岛市',
			        children: [{
			          id: 5,
			          label: '李沧区'
			        }, {
			          id: 6,
			          label: '城阳区'
			        }]
			      }, {
			        id: 3,
			        label: '烟台市',
			        children: [{
			          id: 7,
			          label: '芝罘区'
			        }, {
			          id: 8,
			          label: '开发区'
			        }]
			      }];
	        return {
			AMapManager,
	          zoom: 12,
	          center: [121.59996, 31.197646],
	          markers: [],
	          markerRefs: [],
	          events: {
	            init(o) {
	              setTimeout(() => {
	                console.log(self.markerRefs);
	                let cluster = new AMap.MarkerClusterer(o, self.markerRefs,{
	                  gridSize: 80,
	                  renderCluserMarker: self._renderCluserMarker
	                });
	                console.log(cluster);
	              }, 1000);
	            },
				'moveend': () => {
					console.log(111)
				},
				'zoomchange': () => {
				},
				'click': (e) => {
					
				}
	          },
			  options: [{
				value: '选项1',
				label: '黄金糕'
			  }, {
				value: '选项2',
				label: '双皮奶'
			  }, {
				value: '选项3',
				label: '蚵仔煎'
			  }, {
				value: '选项4',
				label: '龙须面'
			  }, {
				value: '选项5',
				label: '北京烤鸭'
			  }],
			  value: '所属区域',
			  leibie: [{
			  				value: '选项1',
			  				label: '黄金糕'
			  }, {
			  				value: '选项2',
			  				label: '双皮奶'
			  }, {
			  				value: '选项3',
			  				label: '蚵仔煎'
			  }, {
			  				value: '选项4',
			  				label: '龙须面'
			  }, {
			  				value: '选项5',
			  				label: '北京烤鸭'
			  }],
			  leibie_bt: '机构类别',
			  data: JSON.parse(JSON.stringify(data)),
			  lvsuo_name:'',
			  lvsuolist:{
				   "collectData": {                //类型：Object  必有字段  备注：汇总数据
					  "orgList": [                //类型：Array  必有字段  备注：按机构统计列表
						   {                //类型：Object  必有字段  备注：全部数据(必须排在第一位)
							  "allOrg":"全部",                //类型：String  必有字段  备注：全部
							  "orgCount":"800"                //类型：String  必有字段  备注：数量
						  },
						   {                //类型：Object  必有字段  备注：其他数据1
							  "orgType":"1",                //类型：String  必有字段  备注：机构类型
							  "orgName":"律师事务所",                //类型：String  必有字段  备注：机构名称
							  "orgCount":"150"                //类型：String  必有字段  备注：机构数量
						  },
						   {                //类型：Object  必有字段  备注：其他数据2
							  "orgType":"2",                //类型：String  必有字段  备注：机构类型
							  "orgName":"调委组织",                //类型：String  必有字段  备注：机构名称
							  "orgCount":"20"                //类型：String  必有字段  备注：机构数量
						  }
					  ]
				  },
				  "areaOrgList": [                //类型：Array  必有字段  备注：按区域统计数据
					   {                //类型：Object  必有字段  备注：辽阳市(必须排在第一位)
						  "areaRegionName":"辽阳市",                //类型：String  必有字段  备注：辽阳市
						  "areaOrgCount":"800"                //类型：String  必有字段  备注：机构总数量
					  },
					   {                //类型：Object  必有字段  备注：辽阳市其他区的统计信息
						  "areaOrgCount":"360",                //类型：String  必有字段  备注：机构总数量
						  "consultCount":"560",                //类型：String  必有字段  备注：法律咨询数量
						  "mediateCount":"32",                //类型：String  必有字段  备注：人民调解预约数量
						  "lawCount":"45",                //类型：String  必有字段  备注：法律援助预约数量
						  "satisfactionDegree":"98%",                //类型：String  必有字段  备注：满意度
						  "areaRegionName":"宏伟区",                //类型：String  必有字段  备注：区域名称
						  "areaRegionId":"b2787985797d4a8d9592bba039143d4c",                //类型：String  必有字段  备注：区域ID
						  "areaCoordinate":"47.123456,127.23456"                //类型：String  可有字段  备注：区域坐标
					  }
				  ]
			  }
	        };
	      },
	
	      created() {
	        let self = this;
	        let markers = [];
	        let index = 0;
	
	        let basePosition = [121.59996, 31.197646];
			dituliebiao({
				"token":sessionStorage.getItem("token"),                //类型：String  可有字段  备注：token 用户身份标识
				"orgName":this.lvsuo_name,                //类型：String  可有字段  备注：机构名称
				"orgType":"",                //类型：String  可有字段  备注：机构类别 1.律师事务所；2.法律援助中心；3.调委组织；4.司法鉴定；5.公证处；6.基层法律服务所；
				"areaRegionId":""                //类型：String  可有字段  备注：所属区域(区ID)
			}).then(res=>{
				this.lvsuolist = res.content
			})
	        while (++index <= 30) {
	          markers.push({
	            position: [basePosition[0] + 0.01 * index, basePosition[1]],
	            content: '<div style="text-align:center; background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',
	            events: {
	              init(o) {
	                self.markerRefs.push(o);
	              }
	            }
	          });
	        }
	
	        this.markers = markers;
	      },
	
	      methods: {
	        _renderCluserMarker(context) {
	          const count = this.markers.length;
	
	          let factor = Math.pow(context.count/count, 1/18)
	          let div = document.createElement('div');
	          let Hue = 180 - factor* 180;
	          let bgColor = 'hsla('+Hue+',100%,50%,0.7)';
	          let fontColor = 'hsla('+Hue+',100%,20%,1)';
	          let borderColor = 'hsla('+Hue+',100%,40%,1)';
	          let shadowColor = 'hsla('+Hue+',100%,50%,1)';
	          div.style.backgroundColor = bgColor
	          let size = Math.round(30 + Math.pow(context.count/count,1/5) * 20);
	          div.style.width = div.style.height = size+'px';
	          div.style.border = 'solid 1px '+ borderColor;
	          div.style.borderRadius = size/2 + 'px';
	          div.style.boxShadow = '0 0 1px '+ shadowColor;
	          div.innerHTML = context.count;
	          div.style.lineHeight = size+'px';
	          div.style.color = fontColor;
	          div.style.fontSize = '14px';
	          div.style.textAlign = 'center';
	          context.marker.setOffset(new AMap.Pixel(-size/2,-size/2));
	          context.marker.setContent(div)
	        }
	      }
	    };
</script>

<style lang="scss">
	.ditu{
		width: 100%;
		height: 100%;
	}
	.amap-page-container{
		width: 100%;
		height: 40vw;
	}
	.zaixian_content{
		width: 100%;
		display: flex;
		align-items: flex-start;
		height: 100%;
	}
	.zaixian_content>div:nth-child(1){
		width: 400px;
	}
	.left_ditu{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 96%;
		background: #eee;
		position: relative;
		padding: 5px 2%;
		input{
			width: 74%;
			height: 50px;
			border-radius: 5px;
			background: #fff;
			border: 1px solid #eee;
			padding-left: 30px;
		}
		img{
			position: absolute;
			width: 20px;
			height: 20px;
			left: 3%;
		}
		div{
			width: 15%;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			border-radius: 5px;
			background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		}
	}
	.left_toubu>div:nth-child(1){
		width: 96%;
		padding: 0 2%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 50px;
		border-bottom: 1px solid #eee;
		.youce_tu{
			width: 10%;
			display: flex;
			justify-content: center;
		}
		img{
			width: 15px;
			height: 15px;
		}
	}
	.ditu_fenge{
		width: 1px ;
		height: 20px;
		background: #dcdfe6;
	}
	.shuliangtongji{
		width: 96%;
		padding: 20px 2%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		border-bottom: 1px solid #eee;
	}
	.shuliangtongji>div>div:nth-child(1){
		width: 60px;
		height: 60px;
		background: #f0f7fb;
		color: #068FD4;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		margin:0 auto;
		margin-bottom: 10px;
	}
	.shuliangtongji>div .shulactive{
		background: #068FD4;
		color: #fff;
	}
	.ditu_shuxing{
		width: 96%;
		padding: 20px 2%;
	}
	.custom-tree-node {
	    flex: 1;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    font-size: 14px;
	    padding-right: 8px;
	  }
	  .zaixian_top {
	      width: 98%;
	      height: 70px;
	      padding-left: 2%;
	      border-bottom: 1px solid #eee;
	      display: -webkit-box;
	      display: -ms-flexbox;
	      display: flex;
	      -webkit-box-align: center;
	      -ms-flex-align: center;
	      align-items: center;
	  }
</style>
