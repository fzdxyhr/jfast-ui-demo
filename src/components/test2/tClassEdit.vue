<template>
  <div __cid='100' id="pm_1">
    <div id="el-dialog__content" __cid='div'>
      <el-form __cid='224' id="pm_form" ref="editForm" :model="editForm" :rules="rules" :label-width="formLabelWidth">
                                                                                        <el-form-item __cid='225' prop="name" label="班级名"  id="pm_name_form_item">
                                                            <el-input  __cid='212' v-model.trim="editForm.name" placeholder="请输入班级名" id="pm_name"></el-input>
                </el-form-item>
                                                                                                                                                                                                    <el-form-item __cid='225' prop="type" label="班级类型"  id="pm_type_form_item">
                                                            <el-input  __cid='212' v-model.trim="editForm.type" placeholder="请输入班级类型" id="pm_type"></el-input>
                </el-form-item>
                                                                                                                                                                                                                                                    <el-form-item __cid='225' prop="grade_id" label="学院"  id="pm_grade_id_form_item">
                                            <el-cascader filterable clearable change-on-select __cid='216' @change="getTGradecascaderData3ItemChange" :options="TGradeOption3" v-model="editForm.grade_id" id="pm_grade_id">
                        </el-cascader>
                                    </el-form-item>
                                                                                                                                                    <el-form-item __cid='225' prop="class_code" label="班级编码"  id="pm_class_code_form_item">
                                                            <el-input  __cid='212' v-model.trim="editForm.class_code" placeholder="请输入班级编码" id="pm_class_code"></el-input>
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
    import { list2Tree, findParentsById,findParentsByIdIncludeSelf,setChildrenByCurrentId } from '@common/js/tree'

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
                                    "TGradeOption31":[],
                                                                                                                                                                                          gradeIdTemp:"",
                                                                  }
    },
    created(){
        this.rules = {
                                                                                                                                                                                            }
    },
    mounted() {
      this.type = this.rjDialogParams().type;
                    this.editForm.grade_id = this.rjDialogParams().selectedId;
              if(this.type === 'single'){
          this.editForm = this.rjDialogParams().data;
                                                                                      this.gradeIdTemp = this.editForm.grade_id;
              this.editForm.grade_id = [];
                                                                this.selectObj.push(this.rjDialogParams().data);
      } else {
          this.selectObj = this.rjDialogParams().data;
      }
                                                                                                                                                                                                      this.getTGradecascaderData3();
                                    this.getTGradecascaderData3Async();
                                                                                },
    methods:{
                                                                                                                                                                                                                                                      go2Submit() {
        let self = this;
      this.$refs["editForm"].validate((valid) => {
            if(valid) {
                                                                                                                                                                                                                        let tempGradeId = this.editForm.grade_id;
                    if(this.editForm.grade_id != undefined && this.editForm.grade_id.length != 0){
                        this.editForm.grade_id = this.editForm.grade_id[this.editForm.grade_id.length-1];
                    }
                                                                                                                                                                                                                                                                                                                                                                                                  const loading = this.$loading({lock: true,text: '处理中...',spinner: 'el-icon-loading',background: 'rgba(0, 0, 0, 0.7)'});
                self.$axios.put("/api/demo/tclasss/"+ self.editForm.id, self.editForm).then((res) => {
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
                                                                                                                                                                                                                            this.editForm.grade_id = tempGradeId;
                                                                                                                                                                    }
                }).catch((err) => {
                    loading.close();
                    self.$message({
                        type: 'error',
                        message: err.data.message || '修改失败!'
                    });
                                                                                                                                                                                        this.editForm.grade_id = tempGradeId;
                                                                                                                                            // 由axios/index.js统一处理
                });
            }
        });
      },
      doCancel() {
        this.closeRjDialog();
      },
                                                                                                            getTGradecascaderData3(){
            this.$axios.get('/api/demo/tclasss/t_grade/cascader_data').then((res) => {
                    if(res.data.success){
                    var message = res.data.result;
                    this.TGradeOption3 = message;
                }
            }).catch((err) => {
            });
        },
                        getTGradecascaderData3Async(){
        this.$axios.get('/api/demo/tclasss/t_grade/cascader_data/parent?id='+this.gradeIdTemp).then(async (res) => {
            if(res.data.success){
                var message = res.data.result;
                if (message) {
                    for (let item of message) {
                        await this.getTGradecascaderData1Await(item.value);
                    }
                }
                this.editForm.grade_id = message.map(v => v.value);
                this.editForm.grade_id.unshift("");
            }
        }).catch((err) => {
        });
        },
        getTGradecascaderData3(pid){
        this.$axios.get('/api/demo/tclasss/t_grade/cascader_data?pid='+pid).then((res) => {
                if(res.data.success){
                var message = res.data.result;
                const rootTree = [{value: '', label: '全局', children: []}]
                rootTree[0].children =  list2Tree(message, 0)
                this.TGradeOption3 = rootTree;
            }
        }).catch((err) => {
        });
        },
        getTGradecascaderData3Await(pid){
        this.$axios.get('/api/demo/tclasss/t_grade/cascader_data?pid='+pid).then((res) => {
            if(res.data.success){
                var message = res.data.result;
                if(message != undefined && message.length > 0) {
                    setChildrenByCurrentId(this.TGradeOption3,pid,message);
                }
            }
        }).catch((err) => {
        });
        },
        getTGradecascaderData3ItemChange(pid){
        this.$axios.get('/api/demo/tclasss/t_grade/cascader_data?pid='+pid[pid.length-1]).then((res) => {
                if(res.data.success){
                var message = res.data.result;
                if(message != undefined && message.length > 0) {
                    setChildrenByCurrentId(this.TGradeOption3,pid[pid.length-1],message);
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
