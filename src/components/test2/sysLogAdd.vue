<template>
  <div __cid='100'>
    <div id="el-dialog__content" __cid='div'>
      <el-form
        __cid='224'
        ref="addForm"
        :model="addForm"
        :label-width="formLabelWidth"
        :rules="rules" >
                                                                                                                                                              </el-form>
    </div>
    <div __cid="div" id="el-dialog__btn" style="text-align: right">
      <el-button  __cid='el-button' @click="doCancel" __model='{"name":"取 消"}'>取 消</el-button>
      <el-button  __cid='el-button' type="primary" @click="go2Submit" __model='{"name":"保 存"}'>保 存</el-button>
    </div>
  </div>
</template>

<script>
                                                                                                                                                                                                                                                                                                                var validateIp = (rule, value, callback) => {
        var pattern = new RegExp("^(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|[1-9])\\." +
                "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\." +
                "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\." +
                "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)$");
        if (value && !pattern.test(value)) {
            callback(new Error('请输入正确的IP'));
        }
        callback();
    };
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
        "rules":{}
      }
    },
    created(){
        this.rules = {
                                                                                                                                                                                                                                                                                }
    },
    mounted() {

    },
    methods:{
                                                                                                                                                                go2Submit() {
                                                                                                                                                                                                                                                                                    this.$refs["addForm"].validate((valid) => {
              if(valid) {
              this.$axios.post("/api/demo/syslog",this.addForm).then((res) => {
                      if(res.data.success) {
                        this.$message({type: 'success',message: '添加成功!'});
                        this.closeRjDialog();
                      }
                  }).catch((err) => {
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
<style scoped>
</style>