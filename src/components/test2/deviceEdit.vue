<template>
  <div __cid='100'>
    <div id="el-dialog__content"__cid='div'>
      <el-form __cid='224' ref="editForm" :model="editForm" :rules="rules" :label-width="formLabelWidth">
                                                                                                    <el-form-item __cid='225' prop="mac" label="MAC">
                    <el-input  __cid='212' v-model="editForm.mac" placeholder="请输入MAC"></el-input>
                </el-form-item>
                                                                                                                                        <el-form-item __cid='225' prop="ip" label="IP">
                    <el-input  __cid='212' v-model="editForm.ip" placeholder="请输入IP"></el-input>
                </el-form-item>
                                                                                                                                        <el-form-item __cid='225' prop="device_name" label="设备名称">
                    <el-input  __cid='212' v-model="editForm.device_name" placeholder="请输入设备名称"></el-input>
                </el-form-item>
                                                                                                                                        <el-form-item __cid='225' prop="model" label="设备类型">
                    <el-input  __cid='212' v-model="editForm.model" placeholder="请输入设备类型"></el-input>
                </el-form-item>
                                                                                                                                                                <el-form-item __cid='225' prop="model_type" label="设备型号">
                    <el-select  __cid='214' v-model="editForm.model_type" placeholder="请选择设备型号"
                                __model='{"options":[{"label":"ACE","value":"ACE"}]}'>
                                                                                    <el-option key="ACE" label="ACE" value="ACE"></el-option>
                                                                        </el-select>
                </el-form-item>
                                                                                                                <el-form-item __cid='225' prop="position" label="位置">
                    <el-input  __cid='212' v-model="editForm.position" placeholder="请输入位置"></el-input>
                </el-form-item>
                                                                                                                                                      </el-form>
    </div>
    <div __cid="div" id="el-dialog__btn" style="text-align: right">
      <el-button   __cid='el-button' @click="doCancel" __model='{"name":"取 消"}'>取 消</el-button>
      <el-button   __cid='el-button' type="primary" @click="go2Submit" __model='{"name":"保 存"}'>保 存</el-button>
    </div>
  </div>
</template>

<script>
                                                                                                                                                                                                                                                                                                                                        var validateMac = (rule, value, callback) => {
        var pattern = new RegExp("((^([0-9a-fA-F]{2})(([0-9a-fA-F]{2}){5})$)|(^([0-9a-fA-F]{2})((:[0-9a-fA-F]{2}){5})$)|(^([0-9a-fA-F]{2})((-[0-9a-fA-F]{2}){5})$)|(^([0-9a-fA-F]{4})((\\.[0-9a-fA-F]{4}){2})$))");
        if (value!= '' && !pattern.test(value)) {
            callback(new Error('请输入正确的MAC'));
        }
        callback();
    };
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
                                                                                                        "mac":[
                                                                                                    { validator: validateMac, trigger: 'change' },
                                                                                            ],
                                                                "ip":[
                                                    {"required":true, "message":"请输入IP"},
                                                                            { validator: validateIp, trigger: 'change' },
                                                                                                                    ],
                                                                "device_name":[
                                                                                                                                                    { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'change' }
                                            ],
                                                                "model":[
                                                                                                                                                    { min: 0, max: 2147483647, message: '长度在 0 到 2147483647 个字符', trigger: 'change' }
                                            ],
                                                                "model_type":[
                                                                                                                                                    { min: 0, max: 2147483647, message: '长度在 0 到 2147483647 个字符', trigger: 'change' }
                                            ],
                                                                "position":[
                                                                                                                                                    { min: 0, max: 2147483647, message: '长度在 0 到 2147483647 个字符', trigger: 'change' }
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
                                                                                                                                                                          },
    methods:{
                                                                                                                                                                                                                                                                                                                                                                                              go2Submit() {
        let self = this;
                                                                                                                                                                                                                      this.$refs["editForm"].validate((valid) => {
            if(valid) {
                self.$axios.put("/api/demo/device/"+ self.editForm.id, self.editForm).then((res) => {
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
