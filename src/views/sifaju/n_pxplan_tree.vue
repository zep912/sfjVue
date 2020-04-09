<template>
  <div class="n_pxplan_tree">
    <div class="n_pxplan_header">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8">
						<el-form-item label="组卷规则" prop="peixunzhuti">
							<el-input maxlength="100"  v-model="ruleForm.peixunzhuti" placeholder="请输入培训主题"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
        <el-row type="flex" align="middle" justify="start"> 
          <el-col :span="8">
						<el-form-item label="考题设置" prop="peixunfangshi">
							<el-checkbox-group v-model="ruleForm.checkList">
                <el-checkbox label="优先选择未答和错答试题（根据各人员答题情况不同）"></el-checkbox>
                <el-checkbox label="考题选项随机排列"></el-checkbox>
              </el-checkbox-group>
						</el-form-item>
					</el-col>
        </el-row>
			</el-form>
    </div>
    <el-row class="n_pxplan_content">
      <el-col :span="12" class="n_p_c_left">
        <div class="c_left_heade">
          <span class="text">题库</span>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-button type="primary" >搜索</el-button>
        </div>
        <div class="c_left_tree">
          <el-tree
            :data="data2"
            show-checkbox
            node-key="id"
            :props="defaultProps">
          </el-tree>
        </div>
      </el-col>
      <el-col :span="12" class="n_p_c_right">
        <div>
          题量/分数设置
        </div>
        <div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-row type="flex" align="middle" justify="start">
              <el-col :span="8">
                <el-form-item label="组卷规则" prop="peixunzhuti">
                  <el-input maxlength="100"  v-model="ruleForm.peixunzhuti" placeholder="请输入培训主题"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row type="flex" align="middle" justify="start">
              <el-col :span="8">
                <el-form-item label="组卷规则" prop="peixunzhuti">
                  <el-input maxlength="100"  v-model="ruleForm.peixunzhuti" placeholder="请输入培训主题"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column  type="index" label="序号" width="80"> </el-table-column>
            <el-table-column  prop="trainTitle" label="已选题库"></el-table-column>
            <el-table-column  prop="trainUserTotal"  label="单选题/可用"></el-table-column>
            <el-table-column  prop="trainMode"  label="多选题/可用"></el-table-column>
            <el-table-column  prop="trainMode"  label="判断题/可用"></el-table-column>
            <el-table-column  prop="trainMode"  label="简答题/可用"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'NPxplanTree',
  data () {
    return {
      ruleForm: {
        checkList: []
      },
      rules: {},
      data2: [{
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
        }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: []
    }
  }
}
</script>
<style lang="scss">
.n_pxplan_tree {
  .n_pxplan_header {
    width: 100%;
		padding: 20px;
    .el-form {
      margin-bottom: 20px;
      .el-row {
          .el-form-item {
            margin: 0;
          }
          margin-bottom: 10px;
          &:last-child {
            margin-bottom: 0;
          }
        .el-col-twoline {
          display: inline-block;
          position: relative;
        }
        .el-date-editor--daterange.el-input__inner {
          width: 100%;
        }
        .el-form-item__label {
          width: 85px;
          float: left;
          text-align: right;
        }
        .el-form-item__content {
          display: block;
          padding-left: 85px;
        }
        .el-form-item {
          white-space: nowrap;
        }
        .el-select {
          display: block;
          position: relative;
        }
        .el-form-item.c-query-select {
          white-space: nowrap;
          display: block;
          .el-input {
            width: 100%;
            .el-input__inner {
              width: 100%;
            }
          }
          .el-form-item__label .c-left {
            text-align: left;
          }
        } // 搜索重置按钮
        .c-query-input {
          display: block;
          white-space: nowrap;
        .el-button:nth-child(1) {
          margin-left: 0;
        }
        } // 搜索重置按钮右浮动
        .f-right {
          float: right;
        }
        .c-query-range-date {
          white-space: nowrap;
          width: 100%;
        }
        div.el-form-item.c-query-range-date {
          margin-right: 0;
        }
      }
      .el-input-number {
        .el-input__inner {
          text-align: left;
        }
			}
		}
  }
  .n_pxplan_content {
    .n_p_c_left {
      border: 1px solid #eee;
      .c_left_heade {
        padding: 5px;
        border-bottom: 1px solid #eee;
        display: flex;
        flex-direction:row;
        .text {
          display: inline-block;
          width: 60px;
          line-height: 40px;
          margin-right: 10px;
        }
      }
      .c_left_tree {
        background-color: fff;
      }
    }
    .n_p_c_right {
      padding-left: 10px;
    }
  }
}
</style>
