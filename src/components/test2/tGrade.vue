<template>
  <div id="pm_1" class="__pv_133_uid_1" __model='{"id":"pm_1"}' __config='{"draggable":false}' __event='{}' __uid='1' __cid='100'>
    <div id="pm_nav" class="__pv_133_uid_2" __model='{"id":"pm_nav"}' __config='{"draggable":false}' __event='{}' __uid='2' __pid='1' __cid='div'>
      <div id="pv_133_3" class="__pv_133_uid_3" __model='{"id":"pv_133_3"}' __config='{"draggable":false}' __event='{}' __uid='3' __pid='2' __cid='div'> <span  id="pv_133_4"  class="__pv_133_uid_4" @click="go2Back"  __model='{"name":"el-icon-back","id":"pv_133_4"}'  __config='{"draggable":false}'  __event='{"click":{"type":"2","funcName":"go2Back","funcRealArgs":"","eventModifier":""}}'  __uid='4'  __pid='3'  __cid='el-custom-icon' ><i class="el-icon-back"></i></span><span id="pv_133_5"  class="__pv_133_uid_5" @click="go2Back"  __model='{"text":"测试","id":"pv_133_5"}'  __config='{"draggable":false}'  __event='{"click":{"type":"2","funcName":"go2Back","funcRealArgs":"","eventModifier":""}}'  __uid='5'  __pid='3'  __cid='span' >测试</span></div>
    </div>
    <div id="pm_2" __model='{"id":"pm_2"}' __config='{"draggable":false}' __event='{}' __uid='6' __pid='1' __cid='div'>
      <div id="seachForm" __model='{"id":"seachForm"}' __config='{"draggable":false}' __event='{}' __uid='7' __pid='6' __cid='div'>
        <el-form inline label-position="right" :model="query" id="pm_form" class="__pv_133_uid_8" __model='{"inline":true,"label-position":"right","model":{"name_array":[]},"id":"pm_form"}' __config='{"draggable":false}' __event='{}' __uid='8' __pid='7' __cid='224'>
          <el-form-item label="学生数" label-width="70px" id="pm_student_number_form_item" __model='{"label":"学生数","label-width":"70px","required":false,"id":"pm_student_number_form_item"}' __config='{"draggable":false}' __event='{}' __uid='9' __pid='8' __cid='225'>
            <el-input placeholder="请输入学生数" type="text" v-model="query.student_number" id="pm_student_number" __model='{"placeholder":"请输入学生数","value":"","type":"text","size":"","disabled":false,"v-model":"query.student_number","id":"pm_student_number"}' __config='{"draggable":false}' __event='{}' __uid='10' __pid='9' __cid='212'></el-input>
          </el-form-item>
          <el-form-item id="pm_51" __model='{"label":"","label-width":"","required":false,"id":"pm_51"}' __config='{"draggable":false}' __event='{}' __uid='11' __pid='8' __cid='225'>
            <el-button type="primary" id="pm_query" @click="go2Search" __model='{"name":"查询","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pm_query"}' __config='{"draggable":false}' __event='{"click":{"type":"2","funcName":"go2Search","funcRealArgs":"","eventModifier":""}}' __uid='12' __pid='11' __cid='el-button'>查询</el-button>
            <el-button type="primary" id="pm_reset" @click="go2Reset" __model='{"name":"重置","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pm_reset"}' __config='{"draggable":false}' __event='{"click":{"type":"2","funcName":"go2Reset","funcRealArgs":"","eventModifier":""}}' __uid='13' __pid='11' __cid='el-button'>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div id="pv_133_14" class="__pv_133_uid_14" __model='{"id":"pv_133_14"}' __config='{"draggable":false}' __event='{}' __uid='14' __pid='6' __cid='div'>
        <el-button type="primary" id="pm_add" @click="go2Add" __model='{"name":"添加","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pm_add"}' __config='{"draggable":false}' __event='{"click":{"type":"2","funcName":"go2Add","funcRealArgs":"","eventModifier":""}}' __uid='15' __pid='14' __cid='el-button'>添加</el-button>
        <el-button type="primary" id="pm_batch_update" @click="go2BatchUpdate" __model='{"name":"批量修改","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pm_batch_update"}' __config='{"draggable":false}' __event='{"click":{"type":"2","funcName":"go2BatchUpdate","funcRealArgs":"","eventModifier":""}}' __uid='16' __pid='14' __cid='el-button'>批量修改</el-button>
        <el-button type="primary" id="pm_batch_import" @click="go2Import" __model='{"name":"批量导入","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pm_batch_import"}' __config='{"draggable":false}' __event='{"click":{"type":"2","funcName":"go2Import","funcRealArgs":"","eventModifier":""}}' __uid='17' __pid='14' __cid='el-button'>批量导入</el-button>
        <el-button type="primary" id="pm_batch_del" @click="go2BatchDelete" __model='{"name":"批量删除","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pm_batch_del"}' __config='{"draggable":false}' __event='{"click":{"type":"2","funcName":"go2BatchDelete","funcRealArgs":"","eventModifier":""}}' __uid='18' __pid='14' __cid='el-button'>批量删除</el-button>
        <el-button type="primary" id="pm_export" @click="go2Export" __model='{"name":"导出","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pm_export"}' __config='{"draggable":false}' __event='{"click":{"type":"2","funcName":"go2Export","funcRealArgs":"","eventModifier":""}}' __uid='19' __pid='14' __cid='el-button'>导出</el-button>
      </div>
      <div id="label-select" class="__pv_133_uid_20" __model='{"id":"label-select"}' __config='{"draggable":false}' __event='{}' __uid='20' __pid='6' __cid='div'> <span id="pv_133_21"  __model='{"text":"已选择","id":"pv_133_21"}'  __config='{"draggable":false}'  __event='{}'  __uid='21'  __pid='20'  __cid='span' >已选择</span><span v-text="selectObj.length"  id="pv_133_22"  __model='{"text":"我是文本","v-text":"selectObj.length","id":"pv_133_22"}'  __config='{"draggable":false}'  __event='{}'  __uid='22'  __pid='20'  __cid='span' >我是文本</span><span id="pv_133_23"  __model='{"text":"台","id":"pv_133_23"}'  __config='{"draggable":false}'  __event='{}'  __uid='23'  __pid='20'  __cid='span' >台</span></div>
      <div id="content" __model='{"id":"content"}' __config='{"draggable":false}' __event='{}' __uid='24' __pid='6' __cid='div'>
        <el-table :data="tableData" border highlight-current-row id="pm_table" tooltip-effect="dark" class="__pv_133_uid_25" @selection-change="handleSelectionChange" __model='{"data":[],"stripe":false,"border":true,"fit":true,"show-header":true,"highlight-current-row":true,"id":"pm_table","tooltip-effect":"dark"}' __config='{"draggable":false}' __event='{"selection-change":{"type":"2","funcName":"handleSelectionChange","funcRealArgs":"","eventModifier":""}}' __uid='25' __pid='24' __cid='226'>
          <el-table-column label="ID" prop="id" type="selection" width="40" align="left" header-align="left" key="id" id="pv_133_26" __model='{"label":"ID","prop":"id","type":"selection","sortable":false,"width":"40","align":"left","header-align":"left","show-overflow-tooltip":false,"innerHTML":"","key":"id","id":"pv_133_26"}' __config='{"draggable":false}' __event='{}' __uid='26' __pid='25' __cid='227'></el-table-column>
          <el-table-column prop="pid" align="center" header-align="center" show-overflow-tooltip v-if="headerProperty.pid" fit="true" id="pv_133_27" __model='{"label":"","prop":"pid","sortable":false,"width":"","align":"center","header-align":"center","show-overflow-tooltip":true,"innerHTML":"<template scope=\"scope\"><span v-text=\"scope.row.pid\"></span></template>","v-if":"headerProperty.pid","fit":"true","id":"pv_133_27"}' __config='{"draggable":false}' __event='{}' __uid='27' __pid='25' __cid='227'><template scope="scope"><span v-text="scope.row.pid"></span></template></el-table-column>
          <el-table-column label="班级名称" prop="name" align="center" header-align="center" show-overflow-tooltip :render-header="renderCheckBoxHeaderContentName" v-if="headerProperty.name" fit="true" id="pv_133_28" __model='{"label":"班级名称","prop":"name","sortable":false,"width":"","align":"center","header-align":"center","show-overflow-tooltip":true,"innerHTML":"<template scope=\"scope\"><el-popover placement=\"top\" trigger=\"click\"><detailTip :id=\"scope.row.id\" table_name=\"t_class_activity\"></detailTip><span style=\"cursor: pointer;text-decoration: underline;\" slot=\"reference\" v-text=\"name[scope.row.name]\"></span></el-popover></template>","v-if":"headerProperty.name","fit":"true","id":"pv_133_28"}' __config='{"draggable":false}' __event='{}' __uid='28' __pid='25' __cid='227'><template scope="scope">
              <el-popover placement="top" trigger="click">
                <detailTip :id="scope.row.id" table_name="t_class_activity"></detailTip><span style="cursor: pointer;text-decoration: underline;" slot="reference" v-text="name[scope.row.name]"></span>
              </el-popover>
            </template></el-table-column>
          <el-table-column label="学生数" prop="student_number" align="center" header-align="center" show-overflow-tooltip v-if="headerProperty.student_number" fit="true" id="pv_133_29" __model='{"label":"学生数","prop":"student_number","sortable":false,"width":"","align":"center","header-align":"center","show-overflow-tooltip":true,"innerHTML":"<template scope=\"scope\"><span style=\"cursor: pointer;text-decoration: underline;\" @click=\"go2StudentNumberDetail(scope.row)\" v-text=\"scope.row.student_number\"></span></template>","v-if":"headerProperty.student_number","fit":"true","id":"pv_133_29"}' __config='{"draggable":false}' __event='{}' __uid='29' __pid='25' __cid='227'><template scope="scope"><span style="cursor: pointer;text-decoration: underline;" @click="go2StudentNumberDetail(scope.row)" v-text="scope.row.student_number"></span></template></el-table-column>
          <el-table-column label="创建时间" prop="create_time" align="center" header-align="center" show-overflow-tooltip v-if="headerProperty.create_time" fit="true" id="pv_133_30" __model='{"label":"创建时间","prop":"create_time","sortable":false,"width":"","align":"center","header-align":"center","show-overflow-tooltip":true,"innerHTML":"<template scope=\"scope\"><span v-text=\"scope.row.create_time\"></span></template>","v-if":"headerProperty.create_time","fit":"true","id":"pv_133_30"}' __config='{"draggable":false}' __event='{}' __uid='30' __pid='25' __cid='227'><template scope="scope"><span v-text="scope.row.create_time"></span></template></el-table-column>
          <el-table-column label="操作" align="center" header-align="center" fixed="right" :render-header="renderOprateHeader" id="pv_133_31" __model='{"label":"操作","width":"","align":"center","header-align":"center","content":[{"category":"el-button","type":"text","label":"查看","events":[{"type":"click","name":"go2Detail(scope.row)"}]},{"category":"el-button","type":"text","icon":"el-icon-edit","label":"修改","events":[{"type":"click","name":"go2Edit(scope.row)"}]},{"category":"el-button","type":"text","icon":"el-icon-delete","label":"删除","events":[{"type":"click","name":"go2Del(scope.row.id)"}]}],"fixed":"right","id":"pv_133_31"}' __config='{"draggable":false}' __event='{}' __uid='31' __pid='25' __cid='el-custom-table-column-op'>
            <div slot-scope="scope">
              <el-button type="text" style="margin-left: 0px;margin-right: 15px;" @click="go2Detail(scope.row)">查看</el-button>
              <el-button type="text" icon="el-icon-edit" style="margin-left: 0px;margin-right: 15px;" @click="go2Edit(scope.row)">修改</el-button>
              <el-button type="text" icon="el-icon-delete" style="margin-left: 0px;margin-right: 15px;" @click="go2Del(scope.row.id)">删除</el-button>
            </div>
          </el-table-column>
        </el-table>
        <div id="pm_14" class="__pv_133_uid_32" __model='{"id":"pm_14"}' __config='{"draggable":false}' __event='{}' __uid='32' __pid='24' __cid='div'>
          <el-pagination :current-page="page_no" :page-sizes='[10,20,50,100]' :page-size="page_size" :total="total" layout="total, sizes, prev, pager, next, jumper" id="pm_pagination" @size-change="sizeChangeHandle" @current-change="currentChangeHandle" __model='{"current-page":1,"page-sizes":[10,20,50,100],"page-size":10,"total":0,"layout":"total, sizes, prev, pager, next, jumper","id":"pm_pagination"}' __config='{"draggable":false}' __event='{"size-change":{"type":"2","funcName":"sizeChangeHandle","funcRealArgs":"","eventModifier":""},"current-change":{"type":"2","funcName":"currentChangeHandle","funcRealArgs":"","eventModifier":""}}' __uid='33' __pid='32' __cid='231'></el-pagination>
        </div>
      </div>
      <rj-dialog id="pv_133_34" __model='{"id":"pv_133_34"}' __config='{"draggable":false}' __event='{}' __uid='34' __pid='6' __cid='rj-dialog'></rj-dialog>
    </div>
  </div>
</template>
<script>
  import {
    list2Tree,
    findParentsById
  } from '@common/js/tree'
  import UploadImportData from '@common/UploadImportData'
  // import rjDownload from '@common/js/download'
  import rjDialog from '@common/dialog.vue'
  import postAdd from './tGradeAdd.vue'
  import postEdit from './tGradeEdit.vue'
  import batchEdit from './tGradeBatchEdit.vue'
  import postDelete from './tGradeDelete.vue'
  import detail from './childDetail.vue'
  import detailTip from './childTipDetail.vue'

  export default {
    components: {
      rjDialog,
      // rjDownload,
      postDelete,
      postAdd,
      postEdit,
      detail,
      detailTip,
    },
    data() {
      return {
        "query": {
          "name_array": []
        },
        "headerProperty": {
          "pid": true,
          "name": true,
          "student_number": true,
          "create_time": true
        },
        "tableData": [],
        "selectObj": [],
        "typeOptions": [],
        "name": {},
        "page_no": 1,
        "page_size": 10,
        "total": 0,
        "TGradeOption2": []
      }
    },
    mounted() {
      this.go2Query();
      this.getTGradeselectData2();
      this.initHeaderFiled();
    },
    methods: {
      sizeChangeHandle(val) {
        this.page_size = val;
        this.go2Query();
      },
      currentChangeHandle(val) {
        this.page_no = val;
        this.go2Query();
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
      go2Back() {
        let url = "/student";
        this.$router.push(url);
      },
      go2Search() {
        this.page_no = 1;
        this.go2Query();
      },
      go2Query() {
        this.query.page = this.page_no;
        this.query.size = this.page_size;
        const loading = this.$loading({
          lock: true,
          text: '处理中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.$axios.post('/api/demo/tgrades/byPage', this.query).then((res) => {
          loading.close();
          if (res.data.success) {
            var message = res.data.result;
            this.tableData = message.list;
            this.total = message.total;
          }
        }).catch((err) => {
          loading.close();
        });
      },
      go2StudentNumberDetail(row) {
        this.rjDialog.
        title("学生信息详情").
        width("600px").
        currentView(detail, {
          id: row.id,
          table_name: "t_student"
        }).
        showClose(true).
        sizeTiny().
        then((opt) => {
          this.go2Query();
        }).show();
      },
      go2NameDetail(row) {
        this.rjDialog.
        title("班级活动详情").
        width("600px").
        currentView(detail, {
          id: row.id,
          table_name: "t_class_activity"
        }).
        showClose(true).
        sizeTiny().
        then((opt) => {
          this.go2Query();
        }).show();
      },
      go2Reset() {
        this.query.student_number = '';
        this.selectedTreeNodeId = '';
        this.$nextTick(() => {
          this.$refs.tree.setCurrentKey('');
        });
        this.page_no = 1;
        this.page_size = 10;
        this.go2Query();
      },
      go2BatchDelete() {
        let ids = [];
        if (this.selectObj.length == 0) {
          this.$message({
            type: 'error',
            message: '请先勾选删除对象'
          });
          return;
        }
        this.selectObj.forEach(function(item) {
          ids.push(item.id);
        });
        let idString = ids.join(",");
        this.$confirm('此操作将永久删除, 是否继续?', '删除提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.delete('/api/demo/tgrades/batchDelete?ids=' + idString, ).then((res) => {
            if (res.data.success) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.go2Query();
            }
          }).catch((err) => {});
        }).catch(() => {});
      },
      go2Del(row) {
        this.$confirm('此操作将永久删除, 是否继续?', '删除提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.delete('/api/demo/tgrades/' + row.id).then((res) => {
            if (res.data.success) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.go2Query();
            }
          }).catch((err) => {});
        }).catch(() => {});
      },
      go2Detail(row) {
        this.rjDialog.
        title("查看").
        width("600px").
        currentView(detail, {
          id: row.id,
          table_name: "all"
        }).
        showClose(true).
        sizeTiny().
        then((opt) => {
          this.go2Query();
        }).show();
      },
      go2Add() {
        this.rjDialog.
        title("添加").
        width("600px").
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
        width("600px").
        currentView(postEdit, {
          "type": "single",
          "data": row
        }).
        showClose(true).
        sizeTiny().
        then((opt) => {
          this.go2Query();
        }).show();
      },
      go2Import() {
        this.rjDialog
          .title("批量导入")
          .width('50%').top()
          .currentView(UploadImportData, {
            uploadUrl: '/api/demo/tgrades/import',
            downloadUrl: '/api/demo/tgrades/download'
          })
          .closeOnClickModal(false)
          .showClose(true)
          .then((opt) => {
            this.go2Query();
          }).show()
      },
      go2Export() {
        let self = this;
        let param = self.buildParam(self.query);
        //        window.location = "/api/demo/tgrades/export?"+param;
        rjDownload.download("/api/demo/tgrades/export?" + param);
      },
      buildParam(item) {
        var param = "";
        var objProperty = Object.keys(item);
        objProperty.forEach(function(x, index) {
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
      go2BatchUpdate() {
        if (this.selectObj.length == 0) {
          this.$message({
            type: 'error',
            message: '请先勾选修改对象'
          });
          return;
        }
        this.rjDialog.
        title("批量修改").
        width("600px").
        currentView(batchEdit, {
          "type": "batch",
          "data": this.selectObj
        }).
        showClose(true).
        sizeTiny().
        then((opt) => {
          this.go2Query();
        }).show();
      },
      renderCheckBoxHeaderContentName(h, {
        column,
        index
      }) {
        let self = this;
        return h('span', [
          h('span', "班级名称"),
          h('el-dropdown', {
            attrs: {
              class: 'header-drown'
            }
          }, [
            h('i', {
              attrs: {
                class: 'el-icon-search',
                width: '10px',
                height: '13px',
                style: 'float:right;cursor: pointer;'
              }
            }),
            h('el-dropdown-menu', {
                slot: 'dropdown',
                style: "border-style: hidden!important;"
              },
              [
                this.TGradeOption2.map((item) => {
                  return h('div', {
                    attrs: {
                      style: "padding: 10px 25px;"
                    }
                  }, [h('el-checkbox', {
                    attrs: {
                      label: item.value
                    },
                    on: {
                      change: this.checkNameChange
                    }
                  }, item.label)])
                })
              ])
          ]),
        ]);
      },
      checkNameChange(val, obj) {
        let self = this;
        if (val) {
          self.query.name_array.push(obj.target.defaultValue);
        } else {
          self.query.name_array.splice(self.query.name_array.indexOf(obj.target.defaultValue), 1);
        }
        self.go2Query();
      },
      initHeaderFiled() {
        let self = this;
        let objProperty = Object.keys(self.headerProperty);
        objProperty.forEach(function(x, index) {
          if (window.localStorage.getItem(x) != '' && window.localStorage.getItem(x) != undefined) {
            self.headerProperty[x] = window.localStorage.getItem(x) == 'false' ? false : true;
          }
        });
      },
      headerCheckChange(val, obj) {
        let self = this;
        self.headerProperty[obj.target.defaultValue] = val;
        let objProperty = Object.keys(self.headerProperty);
        let isLast = 0;
        objProperty.forEach(function(x, index) {
          let key = x;
          let value = self.headerProperty[key];
          if (value == true) {
            isLast = isLast + 1;
          }
        });
        if (isLast == 0 && val == false) { //说明最后一个也钩掉了，不允许
          self.$message({
            message: "最后一列不能隐藏",
            type: "error"
          });
          self.headerProperty[obj.target.defaultValue] = true;
          return;
        }
        objProperty.forEach(function(x, index) {
          let key = x;
          let value = self.headerProperty[key];
          window.localStorage.setItem(key, value);
        });
      },
      renderOprateHeader(h, {
        column,
        index
      }) {
        let self = this;
        return h('span', [
          h('span', "操作"),
          h('el-dropdown', {
            attrs: {
              class: 'header-drown'
            }
          }, [
            h('i', {
              attrs: {
                class: 'el-icon-view',
                width: '15px',
                height: '13px',
                style: 'float:right;cursor: pointer;'
              }
            }),
            h('el-dropdown-menu', {
                slot: 'dropdown',
                style: "border-style: hidden!important;"
              },
              [
                h('div', {
                  attrs: {
                    style: "padding: 10px 25px;"
                  }
                }, [h('el-checkbox', {
                  attrs: {
                    label: "pid",
                    checked: this.headerProperty.pid
                  },
                  on: {
                    change: this.headerCheckChange
                  }
                }, "")]),
                h('div', {
                  attrs: {
                    style: "padding: 10px 25px;"
                  }
                }, [h('el-checkbox', {
                  attrs: {
                    label: "name",
                    checked: this.headerProperty.name
                  },
                  on: {
                    change: this.headerCheckChange
                  }
                }, "班级名称")]),
                h('div', {
                  attrs: {
                    style: "padding: 10px 25px;"
                  }
                }, [h('el-checkbox', {
                  attrs: {
                    label: "student_number",
                    checked: this.headerProperty.student_number
                  },
                  on: {
                    change: this.headerCheckChange
                  }
                }, "学生数")]),
                h('div', {
                  attrs: {
                    style: "padding: 10px 25px;"
                  }
                }, [h('el-checkbox', {
                  attrs: {
                    label: "create_time",
                    checked: this.headerProperty.create_time
                  },
                  on: {
                    change: this.headerCheckChange
                  }
                }, "创建时间")]),
              ])
          ]),
        ]);
      },
      getTGradeselectData2() {
        this.$axios.get('/api/demo/tgrades/t_grade/select_data').then((res) => {
          if (res.data.success) {
            var message = res.data.result;
            this.TGradeOption2 = message;
            message.forEach((item) => {
              this.$set(this.name, item.value, item.label);
            });
          }
        }).catch((err) => {});
      }
    }
  }
</script>
<style scoped>
  .__pv_133_uid_4 {
    font-size: 18px;
    line-height: 1em;
  }

  .__pv_133_uid_5 {
    font-size: 18px;
    margin-left: 10px;
  }

  .__pv_133_uid_3 {
    cursor: pointer;
    font-weight: bolder;
  }

  .__pv_133_uid_2 {
    padding: 10px 5px;
  }

  .__pv_133_uid_8 {
    margin-bottom: -15px;
  }

  .__pv_133_uid_14 {
    margin: 10px 0;
  }

  .__pv_133_uid_20 {
    text-align: right;
  }

  .__pv_133_uid_25 {
    width: 100%;
  }

  .__pv_133_uid_32 {
    margin-top: 15px;
    text-align: right;
  }

  .__pv_133_uid_1 {
    padding: 20px 10px;
  }
</style>