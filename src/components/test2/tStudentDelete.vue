<template>
  <div __cid='100' id="pm_1">
    <div id="el-dialog__content" __cid='div'>
        <div id="confirm_header" __cid='div'>
            <i class="el-icon-warning" style="font-size: 26px;"></i>
            <span __cid="span" __model='{"text":"此操作将永久删除, 是否继续?' style="font-size: 16px;">此操作将永久删除, 是否继续?</span>
        </div>
        <div id="confirm_content" __cid='div' style="border: #D8D4D4 solid 1px;margin-top: 15px;">
            <el-form __cid='224' id="pm_form" ref="editForm" :model="editForm" :label-width="formLabelWidth">
                                                                                                                            <el-form-item __cid='225' prop="grade_id" label="班级标识"  id="pm_grade_id_form_item">
                                <span __cid="span" v-text="gradeId[editForm.grade_id]" style="padding-left: 15%;"></span>
                            </el-form-item>
                                                                                                                                                                        <el-form-item __cid='225' prop="sex" label="性别"  id="pm_sex_form_item">
                                <span __cid="span" v-text="editForm.sex" style="padding-left: 15%;"></span>
                            </el-form-item>
                                                                                                                                    <el-form-item __cid='225' prop="age" label="年龄"  id="pm_age_form_item">
                                <span __cid="span" v-text="editForm.age" style="padding-left: 15%;"></span>
                            </el-form-item>
                                                                                                                                    <el-form-item __cid='225' prop="nature" label="性格"  id="pm_nature_form_item">
                                <span __cid="span" v-text="editForm.nature" style="padding-left: 15%;"></span>
                            </el-form-item>
                                                                                                                                    <el-form-item __cid='225' prop="create_time" label="创建时间"  id="pm_create_time_form_item">
                                <span __cid="span" v-text="editForm.create_time" style="padding-left: 15%;"></span>
                            </el-form-item>
                                                                                                                                    <el-form-item __cid='225' prop="insterst" label="兴趣"  id="pm_insterst_form_item">
                                <span __cid="span" v-text="editForm.insterst" style="padding-left: 15%;"></span>
                            </el-form-item>
                                                                                                            </el-form>
        </div>
    </div>
    <div __cid="div" id="el-dialog__btn" style="text-align: right;margin-top: 15px;">
        <el-button  __cid='el-button' type="primary" @click="go2Del" __model='{"name":"确定删除"}' id="pm_save">确定删除</el-button>
        <el-button  __cid='el-button' @click="doCancel" __model='{"name":"不要删除"}' id="pm_canel">不要删除</el-button>
    </div>
  </div>
</template>

<script>
    import { list2Tree, findParentsById,findParentsByIdIncludeSelf } from '@common/js/tree'

  export default{
    data() {
      return {
        "editForm":{},
        "selectObj":[],
        "formLabelWidth": "150px",
        "typeOptions": [],
        "type":"",
                                                                  "TGradeGradeIdOption":[],
                                    "TGradeGradeIdOption1":[],
                                                                                                                                                                                                                                                                          gradeIdTemp:"",
                                                                                                                                                                                                              "TGradeGradeIdOption":[],
                                "gradeId":{},
                                                                                                                                                    }
    },
    mounted() {
        this.editForm = this.rjDialogParams().data;
                                                        this.gradeIdTemp = this.editForm.grade_id;
                this.editForm.grade_id = [];
                                                                                                                                                                                                                                                                                                                                                                              this.findTGradeGradeIdCascaderData();
                                                                                                                                                                    },
    methods:{
        go2Del() {
            this.$axios.delete('/api/demo/tstudents/' + this.editForm.id,).then((res) => {
                if(res.data.success){
                    this.$message({type: 'success',message: '删除成功!'});
                    this.closeRjDialog();
                }
            }).catch((err) => {});
      },
      doCancel() {
        this.closeRjDialog();
      },
                                                    findTGradeGradeIdCascaderData(){
            this.$axios.get('/api/demo/tstudents/t_grade/cascader/grade_id_data').then((res) => {
                    if(res.data.success){
                    var message = res.data.result;
                                                                    const rootTree = [{value: '', label: '全局', children: []}]
                        rootTree[0].children =  list2Tree(message, 0)
                        this.TGradeGradeIdOption = rootTree;
                        const temp1 = findParentsByIdIncludeSelf(message,this.gradeIdTemp);
                        this.editForm.grade_id = temp1.map(v => v.value);
                                                                                    message.forEach((item) =>{
                            this.$set(this.gradeId, item.value, item.label);
                    });
                                    }
            }).catch((err) => {
            });
        },
                                                                                                                                    },
    filters:{
    }
  }
</script>
