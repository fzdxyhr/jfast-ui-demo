<template>
    <div __cid='100'  id="pm_1">
                <div __cid='div' style="height:100%;"  id="pm_2">
            <div __cid='div' style="float:left;width:250px;height:100%;padding: 5px;" id="pm_3">
                <el-button type="primary" __model='{"name":"添加"}' @click="go2TreeAdd"  __cid='el-button' id="pm_tree_add">添加</el-button>
                <el-input placeholder="搜索名称" v-model="treeSearchKey" type="text" style="margin-top:10px;" __cid='212' id="pm_tree_search"></el-input>
                <el-tree id="pm_tree" ref="tree" @node-click="handleTreeNodeClick" :expand-on-click-node="false" :highlight-current="true" :filter-node-method="filterNode" :data="treeData" node-key="id" default-expand-all :default-checked-keys='[]' :indent="16" style="margin-top:10px;" __model='{"expand-on-click-node":false,"default-expanded-keys":[], "item-icons":[{"icon":"el-icon-edit-outline","eventName":"go2TreeEdit(data)"}]}' __cid='el-custom-tree'>
                      <span slot-scope="{ node, data }" class="vve-tree-node">
                          <span>{{ node.label }}</span>
                          <span v-if="data.id" class="vve-op" style="margin-right: 30px;margin-top: 2px;position: absolute;right: 0;"><i class="el-icon-edit-outline" style="padding: 0 2px" @click.stop="go2TreeEdit(data)"></i></span>
						  <span v-if="data.id" class="vve-op" style="margin-right: 10px;margin-top: 2px;position: absolute;right: 0;"><i class="el-icon-delete" style="padding: 0 2px" @click.stop="go2TreeDel(data)"></i></span>
                      </span>
                </el-tree>
            </div>
            <div __cid='div' style="overflow:auto;padding: 0 0 0 20px;height:100%;" id="pm_7">
                <div id="index" __cid='div' style="padding: 10px 10px 20px 10px;">
                    <div __cid='div' id="label-show">
                        <span __model='{"text":"区域:"}' __cid="span">区域:</span><span __cid="span" v-text="treeLabel"></span>
                    </div>
                    <div v-if='showTab == "insert"' id="insertForm" __cid='div'>
                        <div __cid='div' id="delete-button-insert" style="text-align: right;">
                            <el-button  __cid='el-button'  __model='{"name":"删除"}' type="primary" @click="go2Del" id="pm_del_form">删除</el-button>
                        </div>
                        <el-form __cid='224' id="pm_form" ref="editForm" :model="editForm" :rules="rules" :label-width="formLabelWidth">
							                                                                                                                                                                                                        <el-form-item __cid='225' prop="name" label="班级名"  id="pm_name_form_item">
                                                                                                            <el-input  __cid='212' v-model="editForm.name" placeholder="请输入班级名" id="pm_name"></el-input>
                                </el-form-item>
                                                                                                                                                                                                                                                            							                                                                                                                                                                            <el-form-item __cid='225' prop="type" label="班级类型"  id="pm_type_form_item">
                                                                                                            <el-input  __cid='212' v-model="editForm.type" placeholder="请输入班级类型" id="pm_type"></el-input>
                                </el-form-item>
                                                                                                                                                                                                                                                            							                                                                                                                                                                                                                                                                <el-form-item __cid='225' prop="grade_id" label="学院"  id="pm_grade_id_form_item">
                                                                            <el-cascader filterable clearable @change="getTGradecascaderData3ItemChange" change-on-select __cid='216' :options="TGradeOption3" v-model="editForm.grade_id" id="pm_grade_id">
                                        </el-cascader>
                                                                    </el-form-item>
                                                                                                                                                                        							                                                                                                                                                                            <el-form-item __cid='225' prop="class_code" label="班级编码"  id="pm_class_code_form_item">
                                                                                                            <el-input  __cid='212' v-model="editForm.class_code" placeholder="请输入班级编码" id="pm_class_code"></el-input>
                                </el-form-item>
                                                                                                                                                                                                                                                            							                                                                                                                                      </el-form>
																																																																		    																																																																																		<div id="copy_content" __cid='div'>
								<span __cid="span" v-text='this.gradeIdCopy + this.editForm.class_code + ""'></span>
								<el-button __cid='el-button' v-clipboard:copy="copyMessage" v-clipboard:success="onCopy" v-clipboard:error="onError" type="primary" __model='{"name":"复 制"}' id="pm_copy">复 制</el-button>
							</div>
						    					  <div id="save_btn" __cid='div'>
    						<el-button __cid='el-button' type="primary" @click="go2Submit" __model='{"name":"保 存"}' id="pm_save">保 存</el-button>
    					  </div>
                    </div>
					<div v-if='showTab == "update"' id="updateForm" __cid='div'>
                        <div __cid='div' id="delete-button-update" style="text-align: right;">
                            <el-button  __cid='el-button'  __model='{"name":"删除"}' type="primary" @click="go2Del" id="pm_del_form">删除</el-button>
                        </div>
                        <el-form __cid='224' id="pm_form" ref="editForm" :model="editForm" :rules="rules" :label-width="formLabelWidth">
                            							                                                                                                                                                                            <el-form-item __cid='225' prop="name" label="班级名"  id="pm_name_form_item">
                                                                                                            <el-input  __cid='212' v-model="editForm.name" placeholder="请输入班级名" id="pm_name"></el-input>
                                </el-form-item>
                                                                                                                                                                                                                                                            							                                                                                                                                                                            <el-form-item __cid='225' prop="type" label="班级类型"  id="pm_type_form_item">
                                                                                                            <el-input  __cid='212' v-model="editForm.type" placeholder="请输入班级类型" id="pm_type"></el-input>
                                </el-form-item>
                                                                                                                                                                                                                                                            							                                                                                                                                                                                                                                                                <el-form-item __cid='225' prop="grade_id" label="学院"  id="pm_grade_id_form_item">
                                    																					<el-cascader @change="getTGradecascaderData3ItemChange" change-on-select __cid='216' :options="TGradeOption3" v-model="editForm.grade_id" id="pm_grade_id">
											</el-cascader>
										                                                                    </el-form-item>
                                                                                                                                                                        							                                                                                                                                                                            <el-form-item __cid='225' prop="class_code" label="班级编码"  id="pm_class_code_form_item">
                                                                                                            <el-input  __cid='212' v-model="editForm.class_code" placeholder="请输入班级编码" id="pm_class_code"></el-input>
                                </el-form-item>
                                                                                                                                                                                                                                                            							                                                                                                                                      </el-form>
					  																																																												    																																																																																		<div id="copy_content" __cid='div'>
								<span __cid="span" v-text='this.gradeIdCopy + this.editForm.class_code + ""'></span>
								<el-button __cid='el-button' v-clipboard:copy="copyMessage" v-clipboard:success="onCopy" v-clipboard:error="onError" type="primary" __model='{"name":"复 制"}' id="pm_copy">复 制</el-button>
							</div>
											  <div class="aaaa" id="save_btn" __cid='div'>
						<el-button   __cid='el-button' type="primary" @click="go2Submit" __model='{"name":"保 存"}' id="pm_save">保 存</el-button>
					  </div>
                    </div>
					<div v-if='showTab == "btn-info"' id="btn_info" __cid='div'>
						<el-button __cid='el-button' type="primary" @click="go2Insert" __model='{"name":"创 建"}' id="pm_save">创 建</el-button>
                    </div>
                    <rj-dialog __cid="rj-dialog"></rj-dialog>
                </div>
            </div>
            <div __cid='div' style="padding:0;clear:both;min-height:0;"></div>
        </div>
    </div>
</template>

<script>
  import { list2Tree, findParentsById,findParentsByIdIncludeSelf,setChildrenByCurrentId } from '@common/js/tree'
  import rjDialog from '@common/dialog.vue'
  import postDelete from './tClassDelete.vue'
    import tGradeAdd from './tGradeAdd.vue'
  import tGradeEdit from './tGradeEdit.vue'
  
                                                                                                                                                  export default {
    components:{
        rjDialog,
        postDelete,
            tGradeAdd,
        tGradeEdit
        },
    data() {
      return {
        "editForm":{},
		"showTab":"",
        "treeSearchKey":"",
        "typeOptions": [],
        "treeData": [],
        "treeListData": [],
		"rules":{},
        "treeLabel":"",
        "selectedTreeNodeId": "",
		"formLabelWidth": "100px",
                                                                                                                  "TGradeOption3":[],
				  "TGradeOption3Temp":[],
                                    "TGradeOption31":[],
                                                                                                              			                    			                    			                                    gradeIdTemp:"",
            			                    			                    			        																								"gradeIdCopy":"",
												"classCodeCopy":"",
										      }
    },
	
	computed: {
				copyMessage(){
			return this.gradeIdCopy + this.editForm.class_code +  "";
		}
			},
	created(){
        this.rules = {
                                                                                                                                                                                            }
    },
    mounted() {
      	this.queryInfoByTreeId();
      	this.go2TreeQuery();
    },
    methods: {
				onCopy(){
			this.$message.success('复制成功');
		},
		onError(){
			this.$message.error('复制失败');
		},
																															gradeIdCascaderChange(val){
						const temp = findParentsByIdIncludeSelf(this.TGradeOption3Temp,val[val.length-1]);
                        this.gradeIdCopy = temp.map(v => v.label).join("");
					},
																												
							        			        			        			        			        			        					        			        			        			        			        			        		go2Insert(){
			this.showTab = "insert";
			this.editForm = {
    			    			            	    														name:"",
                  	    			            	    														type:"",
                  	    			            	    								                      	grade_id:[],
				  	    			            	    														class_code:"",
                  	    			            	    			            				};
									        							        							        											this.gradeIdCopy="";
			        											this.classCodeCopy="";
			        							        			},
              	queryInfoByTreeId() {
		if(this.selectedTreeNodeId == '' || this.selectedTreeNodeId == undefined) {
			this.showTab = "btn-info";
			return;
		}
        this.$axios.get('/api/demo/tclasss/byTreeId?tree_id='+this.selectedTreeNodeId).then((res) => {
            if(res.data.success){
              	var message = res.data.result;
				if(message != null && message != undefined) {
					this.editForm = message;
					this.showTab = "update";
				} else {
					this.showTab = "btn-info";
				}
              	                                                                                                                                              this.gradeIdTemp = this.editForm.grade_id;
                      this.editForm.grade_id = [];
                                                                                                      				                						              	                						              	                						              	                						              	                						              	                						              	            }
			                                                                                                    this.getTGradecascaderData3();
                                    this.getTGradecascaderData3Async();
                                                                                                }).catch((err) => {
        });
      },
       go2Del() {
		    if(this.editForm.id == undefined || this.editForm.id == '' || this.editForm.id == null) {
                this.showTab = "btn-info";
            } else {
                            this.$confirm('此操作将永久删除, 是否继续?', '删除提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                this.$axios.delete('/api/demo/tclasss/' + this.editForm.id,).then((res) => {
                    if(res.data.success){
                        this.$message({type: 'success',message: '删除成功!'});
                        this.queryInfoByTreeId();
                    } else {
                        this.$message({type: 'success',message: res.data.message || '删除成功!'});
                    }
                }).catch((err) => {});
                }).catch(() => {});
                        }

        },
	  go2Submit() {
        let self = this;
                                                                                                                                      this.$refs["editForm"].validate((valid) => {
            if(valid) {
                                  				                                    				                                    				                                                        if(this.editForm.grade_id != undefined && this.editForm.grade_id.length != 0){
                        this.editForm.grade_id = this.editForm.grade_id[this.editForm.grade_id.length-1];
                    }
                  				                                    				                                    				                  				//赋值左边选择的树的值
				this.editForm.grade_id = this.selectedTreeNodeId;
				if(self.editForm.id == undefined || self.editForm.id == '') {
                    const loading = this.$loading({lock: true,text: '处理中...',spinner: 'el-icon-loading',background: 'rgba(0, 0, 0, 0.7)'});
					self.$axios.post("/api/demo/tclasss", self.editForm).then((res) => {
                    if(res.data.success) {
                        self.$message({type: 'success',message: '保存成功!'});
                        loading.close();
                    }else {
                        self.$message({
                            type: 'error',
                            message: res.data.message || '保存失败!'
                        });
                    }
                    }).catch((err) => {
                        loading.close();
                        self.$message({
                            type: 'error',
                            message: err.data.message || '保存失败!'
                        });
                        // 由axios/index.js统一处理
                    });
				}else {
                    const loading = this.$loading({lock: true,text: '处理中...',spinner: 'el-icon-loading',background: 'rgba(0, 0, 0, 0.7)'});
					self.$axios.put("/api/demo/tclasss/"+ self.editForm.id, self.editForm).then((res) => {
                        loading.close();
					    if(res.data.success) {
                        self.$message({type: 'success',message: '修改成功!'});
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
            }
        });
      },
          go2TreeQuery(){
          this.$axios.get('/api/demo/tclasss/tree').then((res) => {
              if(res.data.success){
                  var message = res.data.result;
                  this.treeListData = message;
                  this.$nextTick(() => {
                      this.$refs.tree.setCurrentKey('');
                  });
              }
          }).catch((err) => {
          });
      },
              go2TreeAdd(){
          this.rjDialog.
          title("添加").
          currentView(tGradeAdd, {}).
          showClose(true).
          sizeTiny().
          then((opt) => {
              this.go2TreeQuery();
      }).show();
      },
              go2TreeEdit(data){
          this.rjDialog.
          title("修改").
          currentView(tGradeEdit, {id:data.id}).
          showClose(true).
          sizeTiny().
          then((opt) => {
              this.go2TreeQuery();
      }).show();
      },
    	      go2TreeDel(data) {
        this.$confirm('此操作将永久删除, 是否继续?', '删除提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
          this.$axios.delete('/api/demo/tgrades/' + data.id,).then((res) => {
        if(res.data.success){
            this.$message({type: 'success',message: '删除成功!'});
            this.go2TreeQuery();
        }
    }).catch((err) => {
    });
    }).catch(() => {
    });
    },
          filterNode(value, data) {
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
      },
      handleTreeNodeClick (data) {
        this.selectedTreeNodeId = data.id
        const temp = findParentsByIdIncludeSelf(this.treeListData,data.id);
        this.treeLabel = temp.map(v => v.label).join(">");
        this.queryInfoByTreeId();
      },
                                                                                                                        getTGradecascaderData3Async(){
          this.$axios.get('/api/demo/tclasss/t_grade/cascader_data/parent?id='+this.gradeIdTemp).then(async (res) => {
                  if(res.data.success){
                  var message = res.data.result;
                  if (message) {
                      for (let item of message) {
                          await this.getTGradecascaderData3Await(item.value);
                      }
                  }
                    this.editForm.grade_id = message.map(v => v.value);
                    this.gradeIdCopy = message.map(v => v.label).join("");
                    this.editForm.grade_id.unshift("");
              }
          }).catch((err) => {
          });
          },
          getTGradecascaderData3(pid){
          this.$axios.get('/api/demo/tclasss/t_grade/cascader_data?pid='+pid).then((res) => {
                  if(res.data.success){
                  var message = res.data.result;
                  const rootTree = [{value: '', label: '全局', children: []}]
                  rootTree[0].children =  list2Tree(message, 0)
                  this.TGradeOption3 = rootTree;
              }
          }).catch((err) => {
          });
          },
          getTGradecascaderData3Await(pid){
          this.$axios.get('/api/demo/tclasss/t_grade/cascader_data?pid='+pid).then((res) => {
                  if(res.data.success){
                  var message = res.data.result;
                  if(message != undefined && message.length > 0) {
                      setChildrenByCurrentId(this.TGradeOption3,pid,message);
                  }
              }
          }).catch((err) => {
          });
          },
          getTGradecascaderData3ItemChange(pid){
          this.$axios.get('/api/demo/tclasss/t_grade/cascader_data?pid='+pid[pid.length-1]).then((res) => {
                  if(res.data.success){
                  var message = res.data.result;
                  if(message != undefined && message.length > 0) {
                      setChildrenByCurrentId(this.TGradeOption3,pid[pid.length-1],message);
                  }
                this.$axios.get('/api/demo/tclasss/t_grade/cascader_data/parent?id='+pid[pid.length-1]).then(async (res) => {
                  if(res.data.success){
                      var message = res.data.result;
                      this.gradeIdCopy = message.map(v => v.label).join("");
                  }
              }).catch((err) => {
              });
              }
          }).catch((err) => {
          });
          },
                                                                          },
    filters: {

    },
      watch: {
          treeListData (val) {
              const rootTree = [{id: '', label: '所有', children: []}]
              rootTree[0].children =  list2Tree(val, 0)
              this.treeData =rootTree
          },
          treeSearchKey(val) {
              this.$refs.tree.filter(val);
          }
      }
  }
</script>
<style scoped>
</style>