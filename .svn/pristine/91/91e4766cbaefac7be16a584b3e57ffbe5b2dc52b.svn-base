<template>
    <div class="publice">
        <div class="publice_top">
            <div class="p_top_left">
                <img src="../../assets/image/u896.png"
                     alt="">
                “智慧司法”网络平台
            </div>
            <div class="p_top_right">
                <div>
                    <img :src="userurl"
                         alt="">
                </div>
                <div class="name_p">
                    <div>{{nameuser}}</div>
                    <div @click="goout">退出</div>
                </div>
            </div>
        </div>
        <div class="publice_content">
            <div class="p_conleft"
                 :class="active_show?'active_show':'active_close'">
                <div @click="active_show = !active_show">
                    <img src="../../assets/image/u58.png"
                         alt="">
                    <span v-show="active_show"
                          style="font-size:18px">&nbsp;&nbsp;菜 &nbsp;&nbsp;&nbsp;&nbsp;单</span>
                </div>
                <router-link :to="{path:'sifaju'}"
                             :class="active==1?'active2':'active_color'"
                             @click.native="tabclick(1)">
                    <img :src="active==1?require('../../assets/image/shouye1.png'):require('../../assets/image/shouye.png')"
                         alt="">
                    <span v-show="active_show"> 菜单名称</span>
                </router-link>
                <router-link :to="{path:'sifa_ditu'}"
                             :class="active==2?'active2':'active_color'"
                             @click.native="tabclick(2)">
                    <img :src="active==2?require('../../assets/image/ditu1.png'):require('../../assets/image/ditu.png')"
                         alt="">
                    <span v-show="active_show"> 菜单名称</span>
                </router-link>
                <router-link :to="{path:'xiaoxitongzhi'}"
                             :class="active==3?'active2':'active_color'"
                             @click.native="tabclick(3)">
                    <img :src="active==3?require('../../assets/image/xiaoxi1.png'):require('../../assets/image/xiaox.png')"
                         alt="">
                    <span v-show="active_show"> 菜单名称</span>
                </router-link>
                <router-link :to="{path:'xiaoxitongzhi'}"
                             :class="active==4?'active2':'active_color'"
                             @click.native="tabclick(4)">
                    <img :src="active==4?require('../../assets/image/dangan1.png'):require('../../assets/image/dangan.png')"
                         alt="">
                    <span v-show="active_show"> 菜单名称</span>
                </router-link>
                <router-link :to="{path:'xitongshezhi'}"
                             :class="active==5?'active2':'active_color'"
                             @click.native="tabclick(5)">
                    <img :src="active==5?require('../../assets/image/shezhi1.png'):require('../../assets/image/shezi.png')"
                         alt="">
                    <span v-show="active_show"> 菜单名称</span>
                </router-link>
            </div>
            <div class="p_conright index_con">
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
            active: 1,
            active_show: false,
            nameuser: "",
            userurl: ""
        };
    },
    created() {
        this.nameuser = sessionStorage.getItem("name");
        this.userurl = sessionStorage.getItem("imgurl");
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        tabclick(e) {
            console.log(11111);
            this.active = e;
        },
        goout() {
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
    width: 100%;
}
.publice_top {
    width: 94%;
    padding: 0 3%;
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
    height: 100vh;
}
.p_conleft {
    text-align: center;
    border-right: 1px solid #eee;
    background: #fff;
    height: 100%;
}
.p_conleft img {
    width: 22px;
    height: 20px;
    vertical-align: bottom;
}
.p_conleft > div {
    height: 70px;
    width: 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #eee;
}
.biaoge_content,
.biaoge-content {
    width: 96%;
    margin: 0 auto;
    padding: 0 20px 20px;
}
.name_span {
    color: #ff0000;
    font-size: 30px;
    display: inline-block;
    margin: 15px 15px 0;
}
.p_conleft a {
    display: block;
    height: 24px;
    width: 100% !important;
    text-align: center;
    border-bottom: 1px solid #eee;
}
.active_show {
    width: 180px;
}
.active_close {
    width: 70px;
}
.active_color {
    color: #999;
    font-size: 18px;
}
.active2 {
    background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
    color: #fff;
}
.p_conright {
    width: 100%;
}
.el-table td,
.el-table th {
    text-align: center;
}
@media screen and(max-width: 1200px) {
    .publice {
        width: 1200px;
    }
}
</style>
