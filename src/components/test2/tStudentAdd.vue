<template>
  <div __cid='100' id="pm_1">
    <div id="el-dialog__content" __cid='div'>
      <el-form
        __cid='224'
        id="pm_form"
        ref="addForm"
        :model="addForm"
        :label-width="formLabelWidth"
        :rules="rules" >
                                                                                                            <el-form-item __cid='225' prop="grade_id" label="班级标识" id="pm_grade_id_form_item">
                                            <el-cascader filterable clearable change-on-select __cid='216' @change="findTGradeGradeIdCascaderDataItemChange" :options="TGradeGradeIdOption" v-model="addForm.grade_id" id="pm_grade_id">
                        </el-cascader>
                    
                </el-form-item>
                                                                                                                                <el-form-item __cid='225' prop="sex"  label="性别" id="pm_sex_form_item">
                                                <el-input  __cid='212' v-model.trim="addForm.sex" placeholder="请输入性别" id="pm_sex"></el-input>
            </el-form-item>
                                                                                                                                                                                        <el-form-item __cid='225' prop="age"  label="年龄" id="pm_age_form_item">
                                                <el-input  __cid='212' v-model.trim="addForm.age" placeholder="请输入年龄" id="pm_age"></el-input>
            </el-form-item>
                                                                                                                                                                                        <el-form-item __cid='225' prop="nature"  label="性格" id="pm_nature_form_item">
                                                <el-input  __cid='212' v-model.trim="addForm.nature" placeholder="请输入性格" id="pm_nature"></el-input>
            </el-form-item>
                                                                                                                                                                                                                                    <el-form-item __cid='225' prop="create_time" label="创建时间" id="pm_create_time_form_item">
                <el-date-picker  __cid='220' id="pm_create_time" v-model="addForm.create_time" value-format="yyyy-MM-dd" format="" type="date" placeholder="选择创建时间">
                </el-date-picker>
            </el-form-item>
                                                                              </el-form>
    </div>
    <div __cid="div" id="el-dialog__btn" style="text-align: right">
      <el-button  __cid='el-button' @click="doCancel" __model='{"name":"取 消"}' id="pm_cancel">取 消</el-button>
      <el-button  __cid='el-button' type="primary" @click="go2Submit" __model='{"name":"保 存"}' id="pm_save">保 存</el-button>
    </div>
  </div>
</template>

<script>
    import { list2Tree, findParentsById,setChildrenByCurrentId } from '@common/js/tree'

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                var validateInteger = (rule, value, callback) => {
        var pattern = new RegExp("^[0-9]\\d*$");
        if (value && !pattern.test(value)) {
            callback(new Error('请输入整数'));
        }
        callback();
    };
    var validateIntegerLength = (rule, value, callback) => {
        var pattern = new RegExp("^[0-9]\\d*$");
        if (!value && value !== 0) {
            callback()
        } else if (!pattern.test(value)) {
            callback(new Error('请输入整数'));
        } else if (value < rule.min) {
            callback(new Error('不能小于' + rule.min));
        } else if (value > rule.max) {
            callback(new Error('不能大于' + rule.max));
        }
        callback();
    };
                      export default{
    data() {
      return {
        "addForm":{
                                                                                                                                                                                                                                                                                },
        "formLabelWidth": "100px",
        "typeOptions": [],
        "rules":{},
                                                                  "TGradeGradeIdOption":[],
                                                                                                                                                                                                      }
    },
    created(){
        this.rules = {
                                                                            "grade_id":[
                                                    {"required":true, "message":"请输入班级标识"},
                                                                                            ],
                                                                                                                        "age":[
                                                                                                                                                                                                                                                                            { validator: validateInteger, trigger: 'change' },
                                                                    { min: 1, max: 65536, validator: validateIntegerLength, message: '值必须在 1 到 65536 范围', trigger: 'change' },
                                                                                                                                                                                                                                                    ],
                                                                "nature":[
                                                                                                                                                                                                                                                                                                                                                                        { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'change' },
                                                                                                                                                                                                                        ],
                                                                                                                        }
    },
    mounted() {
                    this.addForm.grade_id = this.rjDialogParams().selectedId;
                                                                this.findTGradeGradeIdCascaderData();
                                                                                                                                                                    },
    methods:{
                                                                                                                                                                                                                                                go2Submit() {
            this.$refs["addForm"].validate((valid) => {
              if(valid) {
                                                                                                        let tempGradeId = this.addForm.grade_id;
                  if(this.addForm.grade_id != undefined && this.addForm.grade_id.length != 0){
                      this.addForm.grade_id = this.addForm.grade_id[this.addForm.grade_id.length-1];
                  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        const loading = this.$loading({lock: true,text: '处理中...',spinner: 'el-icon-loading',background: 'rgba(0, 0, 0, 0.7)'});
              this.$axios.post("/api/demo/tstudents",this.addForm).then((res) => {
                      if(res.data.success) {
                        this.$message({type: 'success',message: '添加成功!'});
                        loading.close();
                        this.closeRjDialog();
                      } else {
                        loading.close();
                        this.$message({
                              type: 'error',
                              message: res.data.message || '添加失败!'
                          });
                                                                                                                                      this.addForm.grade_id = tempGradeId;
                                                                                                                                                                                                                                                                                                                                                                                                                                                      }
                  }).catch((err) => {
                      loading.close();
                      this.$message({
                          type: 'error',
                          message: err.data.message || '添加失败!'
                      });
                                                                                                                    this.addForm.grade_id = tempGradeId;
                                                                                                                                                                                                                                                                                                                                                                                  });
              }
            });
        },
        doCancel() {
            this.closeRjDialog();
        },
                                                                                                                                                                                                findTGradeGradeIdCascaderData(pid){
        this.$axios.get('/api/demo/tstudents/t_grade/cascader/grade_id_data?pid='+pid).then((res) => {
            if(res.data.success){
                var message = res.data.result;
                const rootTree = [{value: '', label: '全局', children: []}]
                rootTree[0].children =  list2Tree(message, 0)
                this.TGradeGradeIdOption = rootTree;
        }
        }).catch((err) => {
        });
        },
        findTGradeGradeIdCascaderDataItemChange(pid){
        this.$axios.get('/api/demo/tstudents/t_grade/cascader/grade_id_data?pid='+pid[pid.length-1]).then((res) => {
        if(res.data.success){
            var message = res.data.result;
            if(message != undefined && message.length > 0) {
                setChildrenByCurrentId(this.TGradeGradeIdOption,pid[pid.length-1],message);
            }
        }
        }).catch((err) => {
        });
        },
                                                                                                                                    },
    filters:{
    }
  }
</script>
<style scoped>
</style>