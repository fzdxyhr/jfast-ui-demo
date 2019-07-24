<template>
  <div __cid='100' id="pm_1">
    <div id="el-dialog__content" __cid='div'>
        <div id="confirm_header" __cid='div'>
            <i class="el-icon-warning" style="font-size: 26px;"></i>
            <span __cid="span" __model='{"text":"此操作将永久删除, 是否继续?' style="font-size: 16px;">此操作将永久删除, 是否继续?</span>
        </div>
        <div id="confirm_content" __cid='div' style="border: #D8D4D4 solid 1px;margin-top: 15px;">
            <el-form __cid='224' id="pm_form" ref="editForm" :model="editForm" :label-width="formLabelWidth">
                                                                                                                            <el-form-item __cid='225' prop="name" label="班级名称"  id="pm_name_form_item">
                                <span __cid="span" v-text="editForm.name" style="padding-left: 15%;"></span>
                            </el-form-item>
                                                                                                                                    <el-form-item __cid='225' prop="headmaster" label="班主任"  id="pm_headmaster_form_item">
                                <span __cid="span" v-text="editForm.headmaster" style="padding-left: 15%;"></span>
                            </el-form-item>
                                                                                                                                    <el-form-item __cid='225' prop="contact_number" label="联系方式"  id="pm_contact_number_form_item">
                                <span __cid="span" v-text="editForm.contact_number" style="padding-left: 15%;"></span>
                            </el-form-item>
                                                                                                                                    <el-form-item __cid='225' prop="monitor" label="班长"  id="pm_monitor_form_item">
                                <span __cid="span" v-text="editForm.monitor" style="padding-left: 15%;"></span>
                            </el-form-item>
                                                                                                                                    <el-form-item __cid='225' prop="boys_num" label="男生人数"  id="pm_boys_num_form_item">
                                <span __cid="span" v-text="editForm.boys_num" style="padding-left: 15%;"></span>
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }
    },
    mounted() {
        this.editForm = this.rjDialogParams().data;
                                                                                                                                                                                                                                                                                                                                                                                                                                  },
    methods:{
        go2Del() {
            this.$axios.delete('/api/demo/democlasss/' + this.editForm.id,).then((res) => {
                if(res.data.success){
                    this.$message({type: 'success',message: '删除成功!'});
                    this.closeRjDialog();
                }
            }).catch((err) => {});
      },
      doCancel() {
        this.closeRjDialog();
      },
                                                                                                                                    },
    filters:{
    }
  }
</script>
