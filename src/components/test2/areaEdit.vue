<template>
    <div __cid='100'>
        <div id="el-dialog__content"__cid='div'>
            <el-form __cid='224' ref="editForm" :model="editForm" :rules="rules" :label-width="formLabelWidth">
                                                                                        <el-form-item __cid='225' prop="id" label="设备ID">
                                <el-input  __cid='212' v-model="editForm.id" placeholder="请输入设备ID"></el-input>
                            </el-form-item>
                                                                                                                                                                                                                                                            <el-form-item __cid='225' prop="pid" label="父节点">
                                <el-input  __cid='212' v-model="editForm.pid" placeholder="请输入父节点"></el-input>
                            </el-form-item>
                                                                                                                                                                                                                                                            <el-form-item __cid='225' prop="name" label="节点名称">
                                <el-input  __cid='212' v-model="editForm.name" placeholder="请输入节点名称"></el-input>
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
                                                                                                                                                                                                            var validateInteger = (rule, value, callback) => {
            var pattern = new RegExp("^[0-9]\\d*$");
            if (value!= '' && !pattern.test(value)) {
                callback(new Error('请输入正整数'));
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
                                                "id":[
                                                    {"required":true, "message":"请输入设备ID"},
                                                                                                                            { validator: validateInteger, trigger: 'change' },
                            { min: 0, max: 2147483647, validator: validateIntegerLength, message: '值必须在 0 到 2147483647 范围', trigger: 'change' }
                                                                    ],
                                                                "pid":[
                                                                                                                            { validator: validateInteger, trigger: 'change' },
                            { min: 0, max: 2147483647, validator: validateIntegerLength, message: '值必须在 0 到 2147483647 范围', trigger: 'change' }
                                                                    ],
                                                                "name":[
                                                                                                                                                    { min: 0, max: 2147483647, message: '长度在 0 到 2147483647 个字符', trigger: 'change' }
                                            ],
                                    }
    },
    mounted() {
        this.id = this.rjDialogParams().id;
        if(this.id != undefined && this.id != ''){
            this.findObject();
        }
                                                                        },
    methods:{
                                                                                                                                                                go2Submit() {
            let self = this;
                                                                                                        this.$refs["editForm"].validate((valid) => {
            if(valid) {
            self.$axios.put("/api/demo/area/"+ self.editForm.id, self.editForm).then((res) => {
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
    findObject(){
        this.$axios.get("/api/demo/area/" + this.id).then((res) => {
                if(res.data.success) {
                this.editForm = res.data.result;
            }
        }).catch((err) => {
            // 由axios/index.js统一处理
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
