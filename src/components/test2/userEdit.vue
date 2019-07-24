<template>
  <div __cid='100' id="pm_1">
    <div id="el-dialog__content" __cid='div'>
      <el-form __cid='224' id="pm_form" ref="editForm" :model="editForm" :rules="rules" :label-width="formLabelWidth">
                                                                                                                                    <el-form-item __cid='225' prop="name" label="名字"  id="pm_name_form_item">
                                                            <el-input  __cid='212' v-model.trim="editForm.name" placeholder="请输入名字" id="pm_name"></el-input>
                </el-form-item>
                                                                                                                                                                                                    <el-form-item __cid='225' prop="sex" label="性别"  id="pm_sex_form_item">
                                                                                    <el-select  __cid='214' clearable v-model="editForm.sex" placeholder="请选择性别" id="pm_sex"
                                    __model='{"options":[{"label":"男","value":1},{"label":"女","value":2}]}'>
                                                                                                <el-option key="1" label="男" :value="1"></el-option>
                                                                                                                                <el-option key="2" label="女" :value="2"></el-option>
                                                                                    </el-select>
                                    </el-form-item>
                                                                                                                                                                            <el-form-item __cid='225' prop="age" label="年龄"  id="pm_age_form_item">
                                                                                    <el-select __cid='214' clearable v-model="editForm.age" id="pm_age"
                                   placeholder="请选择年龄"
                                   __model='{"options":[],"innerHTML":"<el-option v-for=\"item in TGradeOption3\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"></el-option>"}'>
                            <el-option v-for="item in TGradeOption3" :key="item.value" :label="item.label"
                                       :value="item.value"></el-option>
                        </el-select>
                                    </el-form-item>
                                                                                                                                                                                                <el-form-item __cid='225' prop="class_name" label="班级名称"  id="pm_class_name_form_item">
                                                            <el-input  __cid='212' v-model.trim="editForm.class_name" placeholder="请输入班级名称" id="pm_class_name"></el-input>
                </el-form-item>
                                                                                                                              </el-form>
    </div>
    <div __cid="div" id="el-dialog__btn" style="text-align: right">
      <el-button   __cid='el-button' @click="doCancel" __model='{"name":"取 消"}' id="pm_canel">取 消</el-button>
      <el-button   __cid='el-button' type="primary" @click="go2Submit" __model='{"name":"保 存"}' id="pm_save">保 存</el-button>
    </div>
  </div>
</template>

<script>
    import { list2Tree, findParentsById,findParentsByIdIncludeSelf } from '@common/js/tree'

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
        "editForm":{},
        "selectObj":[],
        "formLabelWidth": "100px",
        "typeOptions": [],
        "type":"",
        "rules":{},
                                                                                                                  "TGradeOption3":[],
                                                                                                                                                                                    }
    },
    created(){
        this.rules = {
                                                                            "name":[
                                                                                                                                                                                                                                                                                                        { min: 0, max: 2147483647, message: '长度在 0 到 2147483647 个字符', trigger: 'change' },
                                                                                                                                                                                        ],
                                                                                                                        "class_name":[
                                                                                                                                                                                                                                                                                                        { min: 0, max: 2147483647, message: '长度在 0 到 2147483647 个字符', trigger: 'change' },
                                                                                                                                                                                        ],
                                    }
    },
    mounted() {
      this.type = this.rjDialogParams().type;
      if(this.type === 'single'){
          this.editForm = this.rjDialogParams().data;
                                                                                                            this.selectObj.push(this.rjDialogParams().data);
      } else {
          this.selectObj = this.rjDialogParams().data;
      }
                                                                                                                                                                                      this.getTGradeselectData3();
                                            },
    methods:{
                                                                                                                                                                                                                                  go2Submit() {
        let self = this;
                                                                                                                  this.$refs["editForm"].validate((valid) => {
            if(valid) {
                                                                                                                                                                                                          const loading = this.$loading({lock: true,text: '处理中...',spinner: 'el-icon-loading',background: 'rgba(0, 0, 0, 0.7)'});
                self.$axios.put("/api/demo/users/"+ self.editForm.id, self.editForm).then((res) => {
                    if(res.data.success) {
                        self.$message({type: 'success',message: '修改成功!'});
                        loading.close();
                        self.closeRjDialog();
                    } else {
                        loading.close();
                        self.$message({
                            type: 'error',
                            message: res.data.message || '修改失败!'
                        });
                                                                                                                                                                                                                                                                                            }
                }).catch((err) => {
                    loading.close();
                    self.$message({
                        type: 'error',
                        message: err.data.message || '修改失败!'
                    });
                                                                                                                                                                                                                                                // 由axios/index.js统一处理
                });
            }
        });
      },
      doCancel() {
        this.closeRjDialog();
      },
                                                                                    getTGradeselectData3(){
            this.$axios.get('/api/demo/users/t_grade/select_data').then((res) => {
                    if(res.data.success){
                    var message = res.data.result;
                                            this.TGradeOption3 = message;
                                    }
            }).catch((err) => {
            });
        },
                                    },
    filters:{
    }
  }
</script>
