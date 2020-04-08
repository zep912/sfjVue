<template>
    <div class="zaixianzixun">
        <div class="zaixian_top">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'/sifa_guanli'}">司法管理</el-breadcrumb-item>
                <el-breadcrumb-item>新增机构</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- <div class="qingjia_neirong">
            <div class="shoujihoama1" style="margin: 20px 0;">
                <div class="flex" style="align-items: flex-start;">
                    <span class="text_betten">机构名称<i></i></span><span class="name_span">*</span>
                    <el-input v-model="jigoudata.orgName" style="width: 82%;" placeholder="请输入机构名称"></el-input>
                </div>
                <div class="flex" style="align-items: flex-start;">
                    <span class="text_betten">联系电话<i></i></span><span class="name_span" style="opacity: 0;">*</span>
                    <el-input v-model="jigoudata.orgCellphone" style="width: 82%;" placeholder="请输入联系电话"></el-input>
                </div>
            </div>
            <div class="flex" style="align-items: flex-start;">
                <span class="text_betten">办公时间<i></i></span><span class="name_span">*</span>
                <el-time-picker
                        is-range
                        v-model="jigoudata.workBeginTime"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围">
                </el-time-picker>
            </div>
            <div class="flex" style="align-items: flex-start;margin: 15px 0;">
                <span class="text_betten">联系地址<i></i></span><span class="name_span">*</span>
                <el-input v-model="jigoudata.orgAddress" style="width: 82%;" placeholder="请输入联系电话"></el-input>
            </div>
            <div class="flex" style="align-items: flex-start;">
                <span class="text_betten">机构简介<i></i></span><span class="name_span" style="opacity: 0;">*</span>
                <textarea name="" v-model="jigoudata.orgDesc" placeholder="请输入机构简介" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="flex" style="align-items: flex-start;margin-top: 20px;">
                <span class="text_betten">上传照片<i></i></span><span class="name_span" style="opacity: 0;">*</span>
                <el-upload
                    :action="uploadUrl"
                    :data="uploadType"
                    list-type="picture-card"
                    :on-success="successUpload_goodsAdmin"
                    accept=".jpg,.jpeg,.png,.gif,.bmp"
                    :limit="1">
                    <i class="el-icon-plus"></i>
                </el-upload>
            </div>
            <div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
                <el-button type="primary" @click="tijiao">提交</el-button>
                <el-button>取消</el-button>
            </div>
        </div> -->
    <div class="formWrap">
			<el-form :model="form" :rules="rules" ref="form">
        <el-row :gutter="0">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="jigoumingceng">
							<span class="textSpan">机构名称<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.jigoumingceng" placeholder="机构名称"></el-input>
							</el-form-item>
					</el-col>
					<el-col :span="10" :offset="4">
						<el-form-item class="itemWrap"  prop="lianxidianhua">
							<span class="textSpan">联系电话<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.lianxidianhua" placeholder="联系电话"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
        <el-row :gutter="0">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="bangongsijian">
							<span class="textSpan">办公时间<i></i></span><span class="name_span" >*</span>
							<el-time-picker
                is-range
                v-model="form.bangongsijian"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围">
              </el-time-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="20" style="margin-top:0px;">
					<el-col :span="24">
						<el-form-item class="itemWrap"  prop="lianxidizi">
							<span class="textSpan">联系地址<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.lianxidizi" placeholder="联系地址"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="24">
						<el-form-item class="itemWrap"  prop="jigoujianjie">
							<span class="textSpan">机构简介<i></i></span><span class="name_span" style="visibility: hidden;" >*</span>
              <el-input
                type="textarea"
                :rows="5"
                placeholder="机构简介"
                v-model="form.jigoujianjie">
              </el-input>
            </el-form-item>
					</el-col>
				</el-row>
        <div class="flex" style="align-items: flex-start;margin-top: 20px;">
            <span class="text_betten">上传照片<i></i></span><span class="name_span" style="opacity: 0;">*</span>
            <el-upload
                :action="uploadUrl"
                :data="uploadType"
                :file-list="fileList"
                list-type="picture-card"
                :on-success="successUpload_goodsAdmin"
                :on-remove="handleRemove"
                accept=".jpg,.jpeg,.png,.gif,.bmp"
                :limit="1">
                <i class="el-icon-plus"></i>
            </el-upload>
        </div>
				<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
					<el-button type="primary" @click="tijiao">提交</el-button>
					<el-button @click="quxiao">取消</el-button>
				</div>
			</el-form>
		</div>
    </div>
</template>

<script>
import {
  saveLawOrg,
  add_jigou,
  lawOrgGetLawOrgInfo,
  imgBaseurl
} from "../../http/api";
export default {
  data() {
    return {
      form: {
        jigoumingceng: "",
        lianxidianhua: "",
        bangongsijian: "",
        lianxidizi: "",
        jigoujianjie: "",
        type: ""
      },
      rules: {
        jigoumingceng: [
          { required: true, message: "请输入机构名称", trigger: "blur" }
        ],
        lianxidianhua: [
          { required: true, message: "请输入联系电话", trigger: "blur" }
        ],
        bangongsijian: [
          { required: true, message: "请选择办公时间", trigger: "change" }
        ],
        lianxidizi: [
          { required: true, message: "请输入联系地址", trigger: "blur" }
        ]
      },
      input: "",
      value1: "",
      imgUrl: "",
      fileList: [],
      jigoudata: {
        token: sessionStorage.getItem("token"), //类型：String  必有字段  备注：用户身份标识
        lawOrgId: "", //类型：String  可有字段  备注：新增时id为空，修改时不能为空
        orgName: "", //类型：String  必有字段  备注：机构名称
        orgDesc: "", //类型：String  必有字段  备注：机构简介
        orgType: "2", //类型：String  必有字段  备注：2.法律援助中心；3.调委组织；4.司法鉴定；5.公证处；6.基层法律服务所；
        areaRegionId: "所在区域区ID，使用t_admin_area表area_id", //类型：String  可有字段  备注：所在区id
        areaStreetId: "014b5e486ce848d099d0c815b3550b34", //类型：String  可有字段  备注：所在街道id
        orgAddress: "", //类型：String  必有字段  备注：地址
        areaX: "47.1254895", //类型：String  可有字段  备注：经度坐标(地图选择)
        areaY: "127.254896", //类型：String  可有字段  备注：纬度坐标(地图选择)
        orgCellphone: "", //类型：String  可有字段  备注：联系电话
        orgPrincipal: "机构负责人", //类型：String  可有字段  备注：负责人
        orgCode: "23101201330334485", //类型：String  可有字段  备注：机构代码
        credentialCode: "310087016", //类型：String  可有字段  备注：执业证号
        establishTime: "2010-06-12", //类型：String  可有字段  备注：成立时间
        workBeginTime: "", //类型：String  可有字段  备注：办公开始时间
        workEndTime: "18:00", //类型：String  可有字段  备注：办公结束时间
        orgStatus: "1" //类型：String  可有字段  备注：机构状态 1：正常；2：注销；
      },
      uploadUrl: "http://192.168.0.133:9001/jjkj/sfj/api/support/uploadFile"
    };
  },
  mounted() {
    this.uploadUrl = imgBaseurl + "/support/uploadFile";
    this.form.orgType = this.$route.query.orgType;
    this.form.lawOrgId = this.$route.query.lawOrgId;
    if (this.form.lawOrgId) {
      lawOrgGetLawOrgInfo({
        lawOrgId: this.form.lawOrgId
      }).then(res => {
        if (res.code == 200) {
          this.form.jigoumingceng = res.content.orgName;
          this.form.lianxidianhua = res.content.orgTelephone;
          this.form.bangongsijian = [
            new Date(2016, 9, 10, ...res.content.workBeginTime.split(":")),
            new Date(2016, 9, 10, ...res.content.workEndTime.split(":"))
          ];
          this.form.lianxidizi = res.content.orgName;
          this.form.jigoujianjie = res.content.orgName;
          this.form.type = res.content.orgName;
        }
      });
    }
  },
  methods: {
    //图片上传
    successUpload_goodsAdmin(success, file) {
      this.form.fileId = success.content.fileList[0].fileId;
    },
    handleRemove() {
      this.form.fileId = void 0;
    },
    tijiao() {
      console.log(this.form);
      this.$refs["form"].validate(valid => {
        if (valid) {
          add_jigou({
            lawOrgId: this.form.lawOrgId,
            orgType: this.form.orgType,
            orgName: this.form.jigoumingceng,
            orgCellphone: this.form.lianxidianhua,
            workBeginTime: nuxUtils
              .date2string(this.form.bangongsijian[0], "-", true)
              .split(" ")[1],
            workEndTime: nuxUtils
              .date2string(this.form.bangongsijian[1], "-", true)
              .split(" ")[1],
            areaAddress: this.form.lianxidizi,
            orgDesc: this.form.jigoujianjie,
            orgCode: this.form.lianxidianhua,
            fileId: this.form.fileId
          }).then(res => {
            if (res.code == 200) {
              this.$message({
                message: "新增成功",
                type: "success"
              });
              setTimeout(() => {
                this.$router.go(-1);
              }, 1500);
            }
          });
        }
      });
    },
    quxiao() {
      this.$router.go(-1);
    }
  },
  computed: {
    uploadType() {
      return {
        token: sessionStorage.getItem("token")
      };
    }
  }
};
</script>

<style lang="scss">
.zaixianzixun {
  width: 100%;
  height: 100%;
}
.zaixian_top {
  width: 98%;
  height: 70px;
  padding-left: 2%;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}
.qingjia_neirong {
  width: 96%;
  padding: 20px 2%;
}
.shoujihoama1 {
  width: 89.2%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  .flex {
    width: 45%;
  }
}
.formWrap {
  padding: 20px 2%;
  .itemWrap {
    > div {
      display: flex;
      align-items: center;
      .textSpan {
        font-size: 16px;
        width: 70px;
        flex: 0 0 70px;
        display: inline-block;
        text-align: justify;
        line-height: 40px;
        height: 40px;
        i {
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
  .el-form-item__error {
    color: #f56c6c;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 115px;
  }
}
</style>
