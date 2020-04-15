<template>
    <div class="login-container">
        <div>
            <div class="title">"智慧司法"网络平台</div>
            <div class="login_content">
                <div class="logincon">
                    <div>
                        <div> <input type="text"
                                   v-model="userNum.username"
                                   placeholder="请输入您的账号"></div>
                        <div> <input type="password"
                                   v-model="userNum.password"
                                   placeholder="请输入您的密码"
                                   style="margin-top: 15px">
                        </div>
                    </div>
                    <div class="logins"
                         @click="login">
                        登陆
                    </div>
                </div>
            </div>
            <div class="zhanghoa">
                <div>账号注册</div>
                <div>忘记密码？</div>
            </div>
        </div>
    </div>
</template>
<script>
import { Field, Button } from "vant";
import { loginCheck } from "../../http/api";
export default {
    components: {
        "van-button": Button,
        "van-field": Field
    },
    data() {
        return {
            userNum: {
                username: "",
                password: ""
            }
        };
    },
    created() {},
    methods: {
        login() {
            console.log(this.userNum);
            loginCheck(this.userNum).then(success => {
                console.log(success);
                if (success.code == 200) {
                    sessionStorage.setItem("token", success.content.token);
                    sessionStorage.setItem(
                        "name",
                        success.content.userInfo.userName
                    );
                    sessionStorage.setItem(
                            "userId",
                            success.content.userInfo.userId
                    );
                    sessionStorage.setItem(
                        "imgurl",
                        success.content.userInfo.userImgUrl
                    );
                    sessionStorage.setItem(
                        "type",
                        success.content.userInfo.userType
                    );
                    sessionStorage.setItem(
                        "infoFlag",
                        success.content.userInfo.infoFlag
                    );
                    if (success.content.userInfo.infoFlag === "0") {
                        setTimeout(() => {
                            this.$router.push({
                                path: "/wanshan"
                            });
                        }, 1500);
                    } else {
                        setTimeout(() => {
                            if(success.content.userInfo.userType == '6'){
                                this.$message({
                                    message: "登录成功",
                                    type: "success"
                                });
                                this.$router.push({
                                    path: "/sifaju"
                                });
                            }else  if(success.content.userInfo.userType == '3'){
                                this.$message({
                                    message: "登录成功",
                                    type: "success"
                                });
                                this.$router.push({
                                    path: "/lvsuoindex"
                                });
                            }else  if(success.content.userInfo.userType == '2'){
                                this.$message({
                                    message: "登录成功",
                                    type: "success"
                                });
                                this.$router.push({
                                    path: "/lvshi"
                                });
                            }else  if(success.content.userInfo.userType == '1'){
                                this.$message.error("用户名密码错误");
                            }


                        }, 1500);
                    }
                }
            });
        }
    }
};
</script>
<style lang="scss">
.login-container {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#003c67, #21b7f1);
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
        font-size: 52px;
        color: #fff;
        font-weight: 600;
        text-align: center;
    }
    .login_content {
        width: 340px;
        padding: 25px 20px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.4);
        border: 1px solid #fff;
        margin: 25px auto;
    }
    .logincon {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
            width: 200px;
            height: 40px;
            background: #fff;
            border-radius: 5px;
            border: 0;
            padding-left: 15px;
        }
    }
    .logins {
        width: 90px;
        height: 90px;
        border-radius: 5px;
        color: #fff;
        background: #1a7cc3;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.zhanghoa {
    display: flex;
    width: 90%;
    padding: 0 5%;
    align-items: center;
    justify-content: space-between;
    color: #fff;
}
</style>
