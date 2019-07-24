<template>
  <div __cid='100' id="pm_1">
    <div id="el-dialog__content"__cid='div'>
      <el-form __cid='224' id="pm_form" ref="editForm" :model="editForm" :rules="rules" :label-width="formLabelWidth">
                                                                                            <el-form-item __cid='225' prop="yhr" label="测试1"  id="pm_yhr_form_item">
                                                                                                    <el-select __cid='214' v-model="editForm.yhr" id="pm_yhr"
                                       placeholder="请选择测试1"
                                       __model='{"options":[],"innerHTML":"<el-option v-for=\"item in TGradeOption0\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"></el-option>"}'>
                                <el-option v-for="item in TGradeOption0" :key="item.value" :label="item.label"
                                           :value="item.value"></el-option>
                            </el-select>
                                            </el-form-item>
                                                                                                                                                        <el-form-item __cid='225' prop="sxp" label="测试2"  id="pm_sxp_form_item">
                                                                        <el-input  __cid='212' v-model="editForm.sxp" placeholder="请输入测试2" id="pm_sxp"></el-input>
                    </el-form-item>
                                                                                                                                                                                        <el-form-item __cid='225' prop="hhx" label="测试3"  id="pm_hhx_form_item">
                                                                        <el-input  __cid='212' v-model="editForm.hhx" placeholder="请输入测试3" id="pm_hhx"></el-input>
                    </el-form-item>
                                                                                                                                              </el-form>
    </div>
    <div __cid="div" id="el-dialog__btn" style="text-align: right">
      <el-button   __cid='el-button' @click="doCancel" __model='{"name":"取 消"}' id="pm_cancel">取 消</el-button>
      <el-button   __cid='el-button' type="primary" @click="go2Submit" __model='{"name":"保 存"}' id="pm_save">保 存</el-button>
    </div>
  </div>
</template>

<script>
    import { list2Tree, findParentsById,findParentsByIdIncludeSelf } from '@common/js/tree'

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
        "formLabelWidth": "100px",
        "typeOptions": [],
        "rules":{},
                                          "TGradeOption0":[],
                                                                                                                                                                                  }
    },
    created(){
        this.rules = {
                                                "yhr":[
                                                    {"required":true, "message":"请输入测试1"},
                                                                                                                            { validator: validateInteger, trigger: 'change' },
                            { min: 0, max: 2147483647, validator: validateIntegerLength, message: '值必须在 0 到 2147483647 范围', trigger: 'change' }
                                                                    ],
                                                                "sxp":[
                                                    {"required":true, "message":"请输入测试2"},
                                                                                                                                                    { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'change' }
                                            ],
                                                                "hhx":[
                                                    {"required":true, "message":"请输入测试3"},
                                                                                                                            { validator: validateInteger, trigger: 'change' },
                            { min: 0, max: 2147483647, validator: validateIntegerLength, message: '值必须在 0 到 2147483647 范围', trigger: 'change' }
                                                                    ],
                                    }
    },
    mounted() {
        this.getInfo();
                                    this.getTGradeselectData0();
                                                                },
    methods:{
      getInfo() {
        let self = this
        this.$axios.get("/api/demo/user").then(res => {
            self.editForm = res.data.result;
                                                                                            }).catch(err => {
            // 由axios/index.js统一处理
        });
      },
      go2Submit() {
                                                                          this.$refs["editForm"].validate((valid) => {
            if(valid) {
                                                                                                                            this.$axios.post("/api/demo/user/save"  , this.editForm,).then((res) => {
                    if(res.data.success) {
                        this.$message({type: 'success',message: '修改成功!'});
                        this.closeRjDialog();
                    }
                }).catch((err) => {
                    // 由axios/index.js统一处理
                });
            }
        });
      },
      doCancel() {
        this.closeRjDialog();
      },
                                getTGradeselectData0(){
        this.$axios.get('/api/demo/user/t_grade/select_data').then((res) => {
                if(res.data.success){
                var message = res.data.result;
                                    this.TGradeOption0 = message;
                            }
        }).catch((err) => {
        });
        },
                                                    },
    filters:{
    }
  }
</script>
