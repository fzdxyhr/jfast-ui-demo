<template>
  <div __cid='100' id="pm_1" class="jf-table-add">
    <div id="el-dialog__content" __cid='div'>
      <el-form
        __cid='224'
        id="pm_form"
        ref="addForm"
        :model="addForm"
        :label-width="formLabelWidth"
        :rules="rules" >
                                                                                            <el-form-item __cid='225' prop="name"  label="班级名称" id="pm_name_form_item">
                                                <el-input  __cid='212' v-model.trim="addForm.name" placeholder="请输入班级名称" id="pm_name"></el-input>
            </el-form-item>
                                                                                                                                                                                        <el-form-item __cid='225' prop="headmaster"  label="班主任" id="pm_headmaster_form_item">
                                                <el-input  __cid='212' v-model.trim="addForm.headmaster" placeholder="请输入班主任" id="pm_headmaster"></el-input>
            </el-form-item>
                                                                                                                                                                                        <el-form-item __cid='225' prop="contact_number"  label="联系方式" id="pm_contact_number_form_item">
                                                <el-input  __cid='212' v-model.trim="addForm.contact_number" placeholder="请输入联系方式" id="pm_contact_number"></el-input>
            </el-form-item>
                                                                                                                                                        <el-form-item __cid='225' prop="monitor"  label="班长" id="pm_monitor_form_item">
                                                <el-input  __cid='212' v-model.trim="addForm.monitor" placeholder="请输入班长" id="pm_monitor"></el-input>
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
    import { list2Tree, findParentsById } from '@common/js/tree'

                                                                                                                                                                                                                                                                                                                                                                                                              export default{
    data() {
      return {
        "addForm":{
                                                                                                                                                                                                                        },
        "formLabelWidth": "100px",
        "typeOptions": [],
        "rules":{},
                                                                                                                                                                                        }
    },
    created(){
        this.rules = {
                                                                            "name":[
                                                    {"required":true, "message":"请输入班级名称"},
                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                "headmaster":[
                                                    {"required":true, "message":"请输入班主任"},
                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                "contact_number":[
                                                    {"required":true, "message":"请输入联系方式"},
                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                        }
    },
    mounted() {
                                                                                                                                                                },
    methods:{
                                                                                                                                                                                                go2Submit() {
            this.$refs["addForm"].validate((valid) => {
              if(valid) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            const loading = this.$loading({lock: true,text: '处理中...',spinner: 'el-icon-loading',background: 'rgba(0, 0, 0, 0.7)'});
              this.$axios.post("/api/demo/democlasss",this.addForm).then((res) => {
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
                                                                                                                                                                                                                                                                                                                                                                                                                            }
                  }).catch((err) => {
                      loading.close();
                      this.$message({
                          type: 'error',
                          message: err.data.message || '添加失败!'
                      });
                                                                                                                                                                                                                                                                                                                                                            });
              }
            });
        },
        doCancel() {
            this.closeRjDialog();
        },
                                                                                                                            },
    filters:{
    }
  }
</script>
<style scoped>
</style>