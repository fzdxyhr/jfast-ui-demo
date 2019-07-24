<template>
  <div __cid='100' id="pm_1">
    <div id="el-dialog__content"__cid='div'>
      <el-form __cid='224' ref="editForm" :model="editForm" :rules="rules" :label-width="formLabelWidth" id="pm_form">
                                                                                                                                                                                          </el-form>
    </div>
    <div __cid="div" id="el-dialog__btn" style="text-align: right">
      <el-button   __cid='el-button' @click="doCancel" __model='{"name":"取 消"}' id="pm_cancel">取 消</el-button>
      <el-button   __cid='el-button' type="primary" @click="go2Submit" __model='{"name":"保 存"}' id="pm_save">保 存</el-button>
    </div>
  </div>
</template>

<script>
    import { list2Tree, findParentsById } from '@common/js/tree'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          export default{
    data() {
      return {
        "editForm":{},
        "selectObj":[],
        "formLabelWidth": "100px",
        "typeOptions": [],
        "type":"",
        "rules":{},
                                                                                                                                                                                        }
    },
    created(){
        this.rules = {
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
                                                                                                                                                                                                                                                                              },
    methods:{
                                                                                                                                                          go2Submit() {
        let self = this;
      this.$refs["editForm"].validate((valid) => {
            if(valid) {
                let request = [];
                self.selectObj.forEach(function(item){
                    let obj={};
                                        obj.id = item.id;
                                                            obj.id = item.id;
                                                            obj.id = item.id;
                                                            obj.id = item.id;
                                                            obj.id = item.id;
                                                            obj.id = item.id;
                                                            obj.id = item.id;
                                                            request.push(obj);
                });
                const loading = this.$loading({lock: true,text: '处理中...',spinner: 'el-icon-loading',background: 'rgba(0, 0, 0, 0.7)'});
                self.$axios.put("/api/demo/democlasss/batch_update", request).then((res) => {
                    loading.close();
                    if(res.data.success) {
                        self.$message({type: 'success',message: '修改成功!'});
                        self.closeRjDialog();
                    } else {
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
                                                                },
    filters:{
    }
  }
</script>
