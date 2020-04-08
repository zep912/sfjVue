<template>
    <div class="xinzeng_kj">
        <div class="xinz_kejiantop">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/manakejianku' }">课件库管理</el-breadcrumb-item>
                <el-breadcrumb-item>文件预览</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="kejianku">
            <h1><p>在云平台上构建的虚拟机清单和配置如下：</p></h1>
            <p>1.	Nginx反向代理虚拟服务器2台，用于搭建应用服务的反向代理，每台分配2颗VCPU，32G内存，200G存储空间；</p>
            <p>2.	应用虚拟服务器2台，用于安装公共法律服务网络平台应用服务，提供负载均衡访问，故障一台不影响业务应用，每台分配8颗VCPU,32G内存，300G存储空间；</p>
            <p>3.	数据虚拟服务器2台，用于提供公共法律服务网络平台数据库负载均衡访问，每台分配4颗VCPU，32G内存，500G存储空间；</p>
            <p>4.	静态文件虚拟服务器1台，对图片服务提供静态访问服务，每台分配2颗VCPU，32G内存，500G存储空间；</p>
            <p>5.	应用虚拟服务器1台，用于安装智能综合管理平台应用服务，提供程序主访问出口，每台分配8颗VCPU，32G内存，300G存储空间；</p>
            <p>6.	数据虚拟服务器1台，用于存储智能综合管理平台业务应用数据，每台分配4颗VCPU，32G内存，500M存储空间；</p>
            <p> 7.	 数据备份虚拟服务器1台，用于备份智能综合管理平台业务应用数据，每台分配2颗VCPU，32G内存，1T存储空间。</p>
            <p>总计需要44颗VCPU，320G内存，4.3T存储空间。</p>
            <p>综合考虑系统冗余，造价等因素，超融合资源池配置定为80核VCPU，320G内存，5T存储。</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: '100'
            }
        },
        methods:{
            wenjian(){
                console.log(123)
                this.$router.push({
                    path:'/nadd_kejian'
                })
            },
            wenjiansp(){
                this.$router.push({
                    path:'/nadd_kejian',query:{
                        shipin:'shipin'
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
        flex-wrap: wrap;
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

<!-
