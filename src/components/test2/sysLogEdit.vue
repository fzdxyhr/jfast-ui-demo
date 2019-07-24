<template>
  <div __cid='100'>
    <div id="el-dialog__content"__cid='div'>
      <el-form __cid='224' ref="editForm" :model="editForm" :rules="rules" :label-width="formLabelWidth">
                                                                                                                                                                                                                                          </el-form>
    </div>
    <div __cid="div" id="el-dialog__btn" style="text-align: right">
      <el-button   __cid='el-button' @click="doCancel" __model='{"name":"取 消"}'>取 消</el-button>
      <el-button   __cid='el-button' type="primary" @click="go2Submit" __model='{"name":"保 存"}'>保 存</el-button>
    </div>
  </div>
</template>

<script>
                                                                                                                                                                                                                                                                                                                var validateIp = (rule, value, callback) => {
        var pattern = new RegExp("^(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|[1-9])\\." +
                "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\." +
                "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\." +
                "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)$");
        if (value!= '' && !pattern.test(value)) {
            callback(new Error('请输入正确的IP'));
        }
        callback();
    };
            var validateInteger = (rule, value, callback) => {
        var pattern = new RegExp("^[0-9]\\d*$");
        if (value!= '' && !pattern.test(value)) {
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
        "rules":{}
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
                self.$axios.put("/api/demo/syslog/"+ self.editForm.id, self.editForm).then((res) => {
                    if(res.data.success) {
                        self.$message({type: 'success',message: '修改成功!'});
                        self.closeRjDialog();
                    }
                }).catch((err) => {
                    // 由axios/index.js统一处理
                });
            }
        });
      },
      doCancel() {
        this.closeRjDialog();
      }
    },
    filters:{
    }
  }
</script>
