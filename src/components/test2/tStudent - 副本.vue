<template>
    <div __cid='100'>
        <div __cid='div' style="height:100%;">
            <div __cid='div' style="float:left;width:250px;height:100%;background: white;padding: 5px;">
                <el-button type="primary" __model='{"name":"添加"}' @click="go2TreeAdd"  __cid='el-button'>添加</el-button>
                <el-input placeholder="搜索名称" v-model="treeSearchKey" type="text" style="margin-top:10px;" __cid='212'></el-input>
                <el-tree ref="tree" @node-click="handleTreeNodeClick" :expand-on-click-node="false" :highlight-current="true" :filter-node-method="filterNode" :data="treeData" node-key="id" default-expand-all :default-checked-keys='[]' :indent="16" style="margin-top:10px;" __model='{"expand-on-click-node":false,"default-expanded-keys":[], "item-icons":[{"icon":"el-icon-edit-outline","eventName":"go2TreeEdit(data)"}]}' __cid='el-custom-tree'>
                      <span slot-scope="{ node, data }">
                          <span>{{ node.label }}</span>
                          <span v-if="data.id" style="margin-right: 10px;margin-top: 2px;position: absolute;right: 0;"><i class="el-icon-edit-outline" style="padding: 0 2px" @click.stop="go2TreeEdit(data)"></i></span>
                      </span>
                </el-tree>
            </div>
            <div __cid='div' style="overflow:auto;padding: 0 0 0 20px;height:100%;">
                <div id="index" __cid='div' style="padding: 10px 10px 20px 10px;background: white;">
                    <div id="seachForm" __cid='div'>
                        <el-form :inline="true" :model="query" class="demo-form-inline" style="margin-bottom:-15px;"
                                 __cid='224'>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                <el-form-item label="性别" __cid='225'>
                                                                                                                                                                                    <el-select __cid='214' v-model="query.sex"
                                                           placeholder="请选择性别"
                                                           __model='{"options":["{\"label\":\"全部\",\"value\":\"\"}",{"label":"男","value":"2"}]}'>
                                                    <el-option label="全部" value=""></el-option>
                                                                                                            <el-option key="1" label="女"
                                                                   value="1"></el-option>
                                                                                                            <el-option key="2" label="男"
                                                                   value="2"></el-option>
                                                                                                    </el-select>
                                                                                                                                                                                                                                                                    </el-form-item>
                                                                                                                                                                                                                                                                                                                                                                                                                                            <el-form-item label="创建时间" __cid='225'>
                                                                                                                                                                                                                                                                                                                                                                    <el-date-picker
                                                        __cid='220'
                                                        v-model="query.create_time_range"
                                                        format=""
                                                        value-format="yyyy-MM-dd"
                                                        type="daterange"
                                                        start-placeholder="选择开始日期"
                                                        end-placeholder="选择结束日期">
                                                </el-date-picker>
                                                                                    </el-form-item>
                                                                                                                                                                                                                                                                                    <el-form-item label="" __cid='225'>
                                                                        <el-input __cid='212' prefix-icon="el-icon-search" v-model="query.key" placeholder="请输入学生名、年龄"></el-input>
                                </el-form-item>
                                                        <el-form-item __cid='225' __model='{"label":"","label-width":""}'>
                                <el-button __cid='el-button' __model='{"name":"查询"}' type="primary" @click="go2Query">查询</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div style="margin: 10px 0;" __cid='div'>
                        <el-button __cid='el-button' __model='{"name":"添加"}' type="primary" @click="go2Add">添加</el-button>
                        <el-button  __cid='el-button'  __model='{"name":"批量修改"}' type="primary" @click="go2BatchUpdate">批量修改</el-button>
                        <el-button  __cid='el-button'  __model='{"name":"批量导入"}' type="primary" @click="go2Import">批量导入</el-button>
                        <el-button  __cid='el-button'  __model='{"name":"批量删除"}' type="primary" @click="go2BatchDelete">批量删除</el-button>
                        <el-button  __cid='el-button'  __model='{"name":"导出"}' type="primary" @click="go2Export">导出</el-button>
                    </div>
                    <div id="content" __cid='div'>
                        <el-table __cid='226'
                                  :data="tableData"
                                  :stripe="false"
                                  border
                                  tooltip-effect="dark"
                                  @selection-change="handleSelectionChange"
                                  style="width: 100%">
                            <el-table-column
                                    __cid='227'
                                    key="id"
                                    type="selection"
                                    width="40">
                            </el-table-column>
                                                                                                                                                                                                    <el-table-column
                                                __cid='227'
                                                __model='{"width":""}'
                                                prop="grade_id"
                                                header-align="center"
                                                align="center"
                                                label="班级标识"
                                                                                                show-overflow-tooltip>
                                        </el-table-column>
                                                                                                                                                                                                            <el-table-column
                                                __cid='227'
                                                __model='{"width":""}'
                                                prop="name"
                                                header-align="center"
                                                align="center"
                                                label="学生名"
                                                                                                sortable
                                                                                                show-overflow-tooltip>
                                        </el-table-column>
                                                                                                                                                                                                            <el-table-column
                                                __cid='227'
                                                __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"sex[scope.row.sex]\"></span></template>"}'
                                                prop="sex"
                                                header-align="center"
                                                align="center"
                                                label="性别"
                                                                                                sortable
                                                                                                show-overflow-tooltip>
                                            <template scope="scope">
                                                <span v-text="sex[scope.row.sex]"></span>
                                            </template>
                                        </el-table-column>
                                                                                                                                                                                                            <el-table-column
                                                __cid='227'
                                                __model='{"width":""}'
                                                prop="age"
                                                header-align="center"
                                                align="center"
                                                label="年龄"
                                                                                                show-overflow-tooltip>
                                        </el-table-column>
                                                                                                                                                                                                            <el-table-column
                                                __cid='227'
                                                __model='{"width":""}'
                                                prop="nature"
                                                header-align="center"
                                                align="center"
                                                label="性格"
                                                                                                show-overflow-tooltip>
                                        </el-table-column>
                                                                                                                                                                                                            <el-table-column
                                                __cid='227'
                                                __model='{"width":""}'
                                                prop="create_time"
                                                header-align="center"
                                                align="center"
                                                label="创建时间"
                                                                                                show-overflow-tooltip>
                                        </el-table-column>
                                                                                                                                                                                                                                                    <el-table-column
                                    __cid='el-custom-table-column-op'
                                    fixed="right"
                                    header-align="center"
                                    align="center"
                                    min-width="120"
                                                                    __model='{"content":[{"category":"el-button", "type": "text", "icon":"el-icon-edit", "label": "修改", "events":[{"type":"click","name":"go2Edit(scope.row)"}]},{"category":"el-button", "type": "text", "icon":"el-icon-delete", "label":"删除", "events":[{"type":"click","name":"go2Del(scope.row.id)"}]}]}'
                                                                    label="操作">
                                <div slot-scope="scope">
                                                                        <el-button type="text" icon="el-icon-edit" @click="go2Edit(scope.row)">修改
                                    </el-button>
                                    <el-button type="text" icon="el-icon-delete" @click="go2Del(scope.row.id)">删除
                                    </el-button>
                                </div>
                            </el-table-column>
                        </el-table>
                        <div style="margin-top:15px;text-align:right;" __cid="div">
                            <el-pagination
                                    __cid='231'
                                    @size-change="sizeChangeHandle"
                                    @current-change="currentChangeHandle"
                                    :current-page="page_no"
                                    :page-sizes="[10, 20, 50, 100]"
                                    :page-size="page_size"
                                    :total="total"
                                    layout="total, sizes, prev, pager, next, jumper">
                            </el-pagination>
                        </div>
                    </div>
                    <rj-dialog __cid="rj-dialog"></rj-dialog>
                </div>
            </div>
            <div __cid='div' style="padding:0;clear:both;min-height:0;"></div>
        </div>
    </div>
</template>

<script>
  import { list2Tree } from '@/util/tree'
  import rjDialog from '@/components/common/dialog.vue'
  import postAdd from './tStudentAdd.vue'
  import postEdit from './tStudentEdit.vue'
      import tGradeAdd from './tGradeAdd.vue'
  import tGradeEdit from './tGradeEdit.vue'
    import UploadImportData from '@/components/common/UploadImportData'

  export default {
    components:{
        rjDialog,
        postAdd,
        postEdit
    ,tGradeAdd,
    tGradeEdit
    },
    data() {
      return {
        "query":{},
        "tableData": [],
        "selectObj":[],
        "treeSearchKey":"",
        "typeOptions": [],
                                                                                          "sex":{
                                                                                    "1":"女"
                                                                      ,
                                                                                        "2":"男"
                                                                                                                                                                                                                      },
        "page_no":1,
        "page_size":10,
        "total":0,
        "treeData": [],
        "treeListData": [],
        "selectedTreeNodeId": ""
      }
    },
    mounted() {
      this.go2Query();
      this.go2TreeQuery();
    },
    methods: {
      sizeChangeHandle(val){
          this.page_size = val;
          this.go2Query();
      },
      currentChangeHandle(val) {
          this.page_no = val;
          this.go2Query();
      },
      go2Query() {
        this.query.page = this.page_no;
        this.query.size = this.page_size;
                this.query.grade_id = this.selectedTreeNodeId;
                this.$axios.post('/api/sys/tstudent/byPage',this.query).then((res) => {
            if(res.data.success){
              var message = res.data.result;
              this.tableData = message.list;
              this.total = message.total;
            }
        }).catch((err) => {
        });
      },
      handleSelectionChange(val) {
          let self = this;
          var obj = eval("(" + JSON.stringify(val) + ")");
          self.selectObj = [];
          for (var i = 0; i < obj.length; i++) {
              var temp = obj[i];
              self.selectObj.push(temp);
          }
      },
      go2BatchDelete(){
          let ids = [];
          if(this.selectObj.length == 0){
              this.$message({type: 'error',message: '请先勾选删除对象'});
              return;
          }
          this.selectObj.forEach(function(item){
              ids.push(item.id);
          });
          let idString = ids.join(",");
          this.$confirm('此操作将永久删除, 是否继续?', '删除提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
          }).then(() => {
                  this.$axios.delete('/api/sys/tstudent/batchDelete?ids=' + idString,).then((res) => {
              if(res.data.success){
                  this.$message({type: 'success',message: '删除成功!'});
                  this.go2Query();
              }
          }).catch((err) => {
          });
        }).catch(() => {});
      },
      go2Del(id) {
          this.$confirm('此操作将永久删除, 是否继续?', '删除提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
          }).then(() => {
              this.$axios.delete('/api/sys/tstudent/' + id,).then((res) => {
                  if(res.data.success){
                      this.$message({type: 'success',message: '删除成功!'});
                      this.go2Query();
                  }
              }).catch((err) => {
              });
          }).catch(() => {
          });
      },
              go2TreeQuery(){
          this.$axios.get('/api/sys/tstudent/tree').then((res) => {
              if(res.data.success){
                  var message = res.data.result;
                  this.treeListData = message;
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
          go2Add() {
        this.rjDialog.
        title("添加").
        currentView(postAdd, {}).
        showClose(true).
        sizeTiny().
        then((opt) => {
          this.go2Query();
        }).
        show();
      },
      go2Edit(row) {
        this.rjDialog.
        title("修改").
        currentView(postEdit, {"type":"single","data":row}).
        showClose(true).
        sizeTiny().
        then((opt) => {
          this.go2Query();
        }).
        show();
      },
      filterNode(value, data) {
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
      },
      handleTreeNodeClick (data) {
        this.selectedTreeNodeId = data.id
        this.go2Query();
      },
      go2Import () {
          this.rjDialog
              .title("批量导入")
              .width('50%').top()
              .currentView(UploadImportData, {
                  uploadUrl: '/api/sys/tstudent/import',
                  downloadUrl: '/api/sys/tstudent/download'
              })
              .closeOnClickModal(false)
              .showClose(true)
              .then(function(opt){
                  this.go2Query();
              }).show()
      },
      go2Export(){
          let self = this;
          let param = self.buildParam(self.query);
          window.location = "/api/sys/tstudent/export?"+param;
      },
      buildParam: function (item) {
          var param = "";
          var objProperty = Object.keys(item);
          objProperty.forEach(function (x, index) {
              if (objProperty.length > 1) {
                  param += (x + "=" + item[x] + "&");
              } else {
                  param += (x + "=" + item[x]);
              }
          });
          if (param.length > 0) {
              param = param.substring(0, param.length - 1);
          }
          return param;
      },
      go2BatchUpdate(){
          if(this.selectObj.length == 0){
              this.$message({type: 'error',message: '请先勾选修改对象'});
              return;
          }
          this.rjDialog.
              title("批量修改").
              currentView(postEdit, {"type":"batch","data":this.selectObj}).
              showClose(true).
              sizeTiny().
              then((opt) => {
              this.go2Query();
          }).show();
      }
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