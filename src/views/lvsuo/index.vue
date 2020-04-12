<template>
    <div class="AMapManager">
        <div class="publice_top">
            <div class="p_top_left">
                <img src="../../assets/image/u896.png"
                     alt="">
                “智慧司法”网络平台
            </div>
            <!-- <div class="p_top_right" @click="geren(6)"> -->
            <div class="p_top_right"
                 @click="logout">
                <div>
                    <img :src="useravatar"
                         alt="">
                </div>
                <div class="name_p">
                    <div>{{username}}</div>
                    <div>退出</div>
                </div>
            </div>
        </div>
        <div class="publice_content">
            <div class="p_conleft"
                 style="width: 70px;">
                <div>
                    <img src="../../assets/image/u58.png"
                         alt="">
                </div>
                <div :class="actives!=2?'active2':'' ">
                    <router-link :to="{path: '/lvshi'}"
                                 @click="zhanshi(1)">
                        <img :src="actives!=2?require('../../assets/image/u73.png'):require('../../assets/image/u554.png')"
                             alt="">
                    </router-link>
                </div>
                <div :class="actives==2?'active2':'' ">
                    <router-link :to="{path: 'xiaoxi'}"
                                 @click="zhanshi(2)">
                        <el-badge :value="3"
                                  class="item">
                            <img src="../../assets/image/u522.png"
                                 alt="">
                        </el-badge>
                    </router-link>
                </div>
            </div>
            <div class="p_conright index_con">
                <!--<jindus v-if="actives==1||actives==3||actives==4" @active="zhizezhanshi"></jindus>
				<daichulis v-if="actives==1"></daichulis>
				<xiaoxi v-if="actives==2"></xiaoxi>
				<zhizes v-if="actives==3" @ziyemian="zhizezhanshi"></zhizes>
				<xuexijihuas v-if="actives==4" @xuexi="zhizezhanshi"></xuexijihuas>
				<kanshipins v-if="actives==5" @xuexi="zhizezhanshi"></kanshipins>
				<gerenziliaos  v-if="actives==6" @xiugai="zhizezhanshi"></gerenziliaos>
				<zaixianzixuns v-if="actives==8" ></zaixianzixuns>
				<ditus v-if="actives==9"></ditus>
				<zhibanlvshis v-if="actives==10"></zhibanlvshis>
				<sifapeixuns v-if="actives==11"></sifapeixuns>
				<pufaxuanchuans v-if="actives==12"></pufaxuanchuans> -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: "",
            options: [
                {
                    value: "选项1",
                    label: "黄金糕"
                },
                {
                    value: "选项2",
                    label: "双皮奶"
                },
                {
                    value: "选项3",
                    label: "蚵仔煎"
                },
                {
                    value: "选项4",
                    label: "龙须面"
                },
                {
                    value: "选项5",
                    label: "北京烤鸭"
                }
            ],
            value: "",
            actives: 1,
            username: "",
            useravatar: ""
        };
    },
    created() {
        this.username = sessionStorage.getItem("name");
        this.useravatar = sessionStorage.getItem("imgurl");
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        tabclick(e) {
            console.log(11111);
            this.select = e;
        },
        zhanshi(e) {
            this.actives = e;
        },
        zhizezhanshi(data) {
            this.actives = data;
        },
        geren() {
            this.$router.push({
                path: "/gerenziliao"
            });
        },
        logout() {
            sessionStorage.clear();
            this.$router.push({
                path: "/"
            });
        }
    }
};
</script>

<style lang="scss">
.publice {
    width: 100vw;
}
.publice::-webkit-scrollbar {
    display: none;
}
.publice_top {
    width: 90%;
    padding: 0 5%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
}

.p_top_left img {
    width: 55px;
    height: 57px;
    margin-right: 20px;
}

.p_top_left {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 28px;
    font-weight: 600;
}

.p_top_right img {
    width: 52px;
    height: 52px;
    border-radius: 3px;
    margin-right: 20px;
}

.p_top_right {
    display: flex;
    align-items: center;
}

.name_p {
    width: 100px;
    text-align: left;
    color: #fff;
}

.name_p > div:nth-child(1) {
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.name_p > div:nth-child(2) {
    font-size: 14px;
    margin-top: 10px;
}

.publice_content {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: calc(100% - 80px);;
}

.p_conleft {
    text-align: center;
    border-right: 1px solid #eee;
    background: #fff;
    height: 100%;
}

.p_conleft img {
    width: 25px;
    height: 20px;
}
.p_conleft a {
    height: 24px;
    width: 70px;
    display: inline-block;
    padding: 23px 0;
    outline: none;
}
.p_conleft > div {
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #eee;
}

.active2 {
    background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
}

.p_conright {
    width: 100%;
}

.tightp_top {
    width: 96%;
    padding: 0 2%;
    height: 70px;
    background: #fff;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* .right_select{
		margin-left: 40px;
	} */
.p_search {
    width: 400px;
    height: 38px;
    border: 1px solid #999;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

.p_search input {
    padding-left: 20px;
    border: 0;
}

.p_search .searchp {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
}

.p_page {
    width: 94%;
    padding: 0 3%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.el-tabs__content {
    display: none;
}

.p_conright .el-table th {
    background: #1884c7 !important;
    color: #fff;
}

.index_con {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
}

.zuo_jindu {
    width: 30%;
    height: 100%;
    border-right: 1px solid #999;
}
</style>
