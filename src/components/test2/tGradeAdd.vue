<template>
    <div __cid='100'  id="pm_1">
        <div id="el-dialog__content" __cid='div'>
            <el-form
                    id="pm_form"
                    __cid='224'
                    ref="addForm"
                    :model="addForm"
                    :label-width="formLabelWidth"
                    :rules="rules" >
                                                                                                                                                                                        <el-form-item __cid='225' prop="pid" label="" id="pm_pid_form_item">
                                                                    <el-cascader filterable clearable change-on-select __cid='216' @change="findTGradePidCascaderDataItemChange" :options="TGradePidOption" v-model="addForm.pid" id="pm_pid">
                                    </el-cascader>
                                
                            </el-form-item>
                                                                                                                                                                                                                                                                                                                                            <el-form-item __cid='225' prop="name"  label="班级名称" id="pm_name_form_item">
                                                                                                <el-input  __cid='212' v-model.trim="addForm.name" placeholder="请输入班级名称"  id="pm_name"></el-input>
                            </el-form-item>
                                                                                                                                                                                                                                                                                                                                                                                                                    <el-form-item __cid='225' prop="student_number"  label="学生数" id="pm_student_number_form_item">
                                                                                                <el-input  __cid='212' v-model.trim="addForm.student_number" placeholder="请输入学生数"  id="pm_student_number"></el-input>
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
                                                "TGradePidOption":[],
                                                                                            }
    },
    created(){
        this.rules = {
                                                                            "name":[
                                                                                                                                                                                                                                                                                                                                                                        { min: 1, max: 250, message: '长度在 1 到 250 个字符', trigger: 'change' },
                                                                                                                                                                                                                        ],
                                                                "student_number":[
                                                                                                                                                                                                                                                                            { validator: validateInteger, trigger: 'change' },
                                                                    { min: 0, max: 2147483647, validator: validateIntegerLength, message: '值必须在 0 到 2147483647 范围', trigger: 'change' },
                                                                                                                                                                                                                                                    ],
                                    }
    },
    mounted() {
                                    this.findTGradePidCascaderData();
                                                                },
    methods:{
                                                                                                                                                                go2Submit() {
        this.$refs["addForm"].validate((valid) => {
              if(valid) {
                                                    let tempPid = this.addForm.pid;
                  if(this.addForm.pid != undefined && this.addForm.pid.length != 0){
                      this.addForm.pid = this.addForm.pid[this.addForm.pid.length-1];
                  }
                                                                                                                                                                                                                                                                            const loading = this.$loading({lock: true,text: '处理中...',spinner: 'el-icon-loading',background: 'rgba(0, 0, 0, 0.7)'});
              this.$axios.post("/api/demo/tgrades",this.addForm).then((res) => {
                  if(res.data.success) {
                      this.$message({type: 'success',message: '添加成功!'});
                      loading.close();
                      this.closeRjDialog();
                  } else {
                      loading.close();
                      self.$message({
                          type: 'error',
                          message: res.data.message || '添加失败!'
                      });
                                                                      this.addForm.pid = tempPid;
                                                                                                                                                      }
              }).catch((err) => {
                  loading.close();
                  self.$message({
                      type: 'error',
                      message: err.data.message || '添加失败!'
                  });
                                                          this.addForm.pid = tempPid;
                                                                                                                        });
        }
    });
    },
    doCancel() {
        this.closeRjDialog();
    },
                                        findTGradePidCascaderData(pid){
    this.$axios.get('/api/demo/tgrades/t_grade/cascader/pid_data?pid='+pid).then((res) => {
            if(res.data.success){
            var message = res.data.result;
            const rootTree = [{value: '', label: '全局', children: []}]
            rootTree[0].children =  list2Tree(message, 0)
            this.TGradePidOption = rootTree;
        }
    }).catch((err) => {
    });
    },
    findTGradePidCascaderDataItemChange(pid){
    this.$axios.get('/api/demo/tgrades/t_grade/cascader/pid_data?pid='+pid[pid.length-1]).then((res) => {
        if(res.data.success){
            var message = res.data.result;
            if(message != undefined && message.length > 0) {
                setChildrenByCurrentId(this.TGradePidOption,pid[pid.length-1],message);
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