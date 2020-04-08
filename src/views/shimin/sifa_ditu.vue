<template>
	<div class="ditu">
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/zhize' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>司法地图</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="zaixian_content">
			<div class="sfditu_left">
				<div class="left_ditu">
					<img src="../../assets/image/sousuo.png" alt="">
					<input type="text" placeholder="请输入想要搜索机构名称">
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
							<img src="../../assets/image/sanjiaoshang.png" alt="">
						</div>
					</div>
					<div class="shuliangtongji">
						<div class="shulactive">
							<div>765</div>
							<div>全部</div>
						</div>
						<div >
							<div>765</div>
							<div>律师事务所</div>
						</div>
						<div >
							<div>765</div>
							<div>法律援助中心</div>
						</div>
						<div >
							<div>765</div>
							<div>调委组织</div>
						</div>
						<div >
							<div>765</div>
							<div>司法鉴定</div>
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
			<div class="amap-page-container amap_shimin">
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
	import { AMapManager } from 'vue-amap';
	export default  {
	      data() {
	        let self = this;
			const data = [{
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
	        };
	      },
	
	      created() {
	        let self = this;
	        let markers = [];
	        let index = 0;
	
	        let basePosition = [121.59996, 31.197646];
	
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
	  .sfditu_left{
		  background: #fff;
		  margin-right: 20px;
	  }
	  .amap_shimin{
		  height: 100;
	  }
</style>
