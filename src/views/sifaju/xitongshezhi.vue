<template>
    <div class="shezhi">
        <div class="shezhi_tou">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>系统设置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="shezhi_content">
            <div class="con_left">
                <div>
                    <img src="../../assets/image/add.png" alt="">
                    <div><b>用户及账号管理</b></div>
                </div>
                <div class="con_guanli">
                    <div>
                        <img src="../../assets/image/add.png" alt="">
                        <div>
                           <b>内容管理</b> </div>
                    </div>
                    <div class="er_guanli">
                        <img src="../../assets/image/add.png" style="opacity: 0" alt="">
                        <div>敏感词管理</div>
                    </div>
                    <div class="er_guanli">
                        <img src="../../assets/image/add.png" style="opacity: 0" alt="">
                        <div>热词管理</div>
                    </div>
                </div>
                <div>
                    <img src="../../assets/image/add.png" alt="">
                    <div><b>数据字典</b></div>
                </div>
            </div>
            <div class="shezhi_you">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
		data(){
			return{
				data:''
			};
		},
		created() {

		}
    };
</script>

<style lang="scss">
    .shezhi{
        width: 100%;
    }
    .shezhi_tou{
        width: 96%;
        padding: 0 2%;
        height: 70px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
    }
    .shezhi_content{
        width: 96%;
        padding: 20px 0;
        display: flex;
        margin: 0 auto;
        align-items: flex-start;
        justify-content: space-between;
    }
    .con_left{
        width: 30%;
        background: #f7f7f7;
        img{
            width: 25px;
            height: 25px;
            margin-right: 20px;
        }
        .con_guanli{
            display: inline-block;
            div{
                display: flex;
                align-items: center;
                height: 50px;
            }
        }
    }
    .con_left>div{
        width: 92%;
        padding: 20px 4%;
        font-size: 18px;
        color: #333;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
    }
    .er_guanli:hover{
        color: #0da9d7;

    }
    .shezhi_you{
        width: 67%;
    }
</style>