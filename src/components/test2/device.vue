<template>
  <div id="pv_53_1" __model='{"id":"pv_53_1"}' __config='{"draggable":false}' __event='{}' __uid='1' __cid='100'>
    <div id="pv_53_2" class="__pv_53_uid_2" __model='{"id":"pv_53_2"}' __config='{"draggable":false}' __event='{}' __uid='2' __pid='1' __cid='div'>
      <div id="pv_53_3" class="__pv_53_uid_3" __model='{"id":"pv_53_3"}' __config='{"draggable":false}' __event='{}' __uid='3' __pid='2' __cid='div'>
        <el-button type="primary" id="pv_53_4" @click="go2TreeAdd" __model='{"name":"添加","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pv_53_4"}' __config='{"draggable":false}' __event='{"click":"go2TreeAdd"}' __uid='4'
          __pid='3' __cid='el-button'>添加</el-button>
        <el-input placeholder="搜索名称" type="text" v-model="treeSearchKey" id="pv_53_5" class="__pv_53_uid_5" __model='{"placeholder":"搜索名称","value":"","type":"text","size":"","disabled":false,"v-model":"treeSearchKey","id":"pv_53_5"}' __config='{"draggable":false}'
          __event='{}' __uid='5' __pid='3' __cid='212'></el-input>
        <el-tree :data="treeData" node-key="id" :expand-on-click-node="false" :default-expanded-keys='[]' :default-checked-keys='[]' :indent="16" default-expand-all ref="tree" highlight-current :filter-node-method="filterNode" id="pv_53_6"
          class="__pv_53_uid_6" @node-click="handleTreeNodeClick" __model='{"data":[],"node-key":"id","expand-on-click-node":false,"default-expanded-keys":[],"default-checked-keys":[],"indent":16,"accordion":false,"show-checkbox":false,"default-expand-all":true,"item-icons":[{"icon":"el-icon-edit-outline","eventName":"go2TreeEdit(data)"}],"ref":"tree","highlight-current":true,"id":"pv_53_6"}'
          __config='{"draggable":false}' __event='{"node-click":"handleTreeNodeClick"}' __uid='6' __pid='3' __cid='el-custom-tree'>
          <span slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
          <span v-if="data.id" style="margin-right: 10px;margin-top: 2px;position: absolute;right: 0;"><i class="el-icon-edit-outline" style="padding: 0 2px" @click.stop="go2TreeEdit(data)"></i></span>
          </span>
        </el-tree>
      </div>
      <div id="pv_53_7" class="__pv_53_uid_7" __model='{"id":"pv_53_7"}' __config='{"draggable":false}' __event='{}' __uid='7' __pid='2' __cid='div'>
        <div id="pv_53_8" class="__pv_53_uid_8" __model='{"id":"pv_53_8"}' __config='{"draggable":false}' __event='{}' __uid='8' __pid='7' __cid='div'>
          <div id="pv_53_9" __model='{"id":"pv_53_9"}' __config='{"draggable":false}' __event='{}' __uid='9' __pid='8' __cid='div'>
            <el-form inline label-position="right" :model="query" id="pv_53_10" class="__pv_53_uid_10" __model='{"inline":true,"label-position":"right","model":{},"id":"pv_53_10"}' __config='{"draggable":false}' __event='{}' __uid='10' __pid='9' __cid='224'>
              <el-form-item label-width="70px" id="pv_53_11" __model='{"label":"","label-width":"70px","required":false,"id":"pv_53_11"}' __config='{"draggable":false}' __event='{}' __uid='11' __pid='10' __cid='225'>
                <el-input placeholder="请输入MAC、IP、设备名称、位置" type="text" prefix-icon="el-icon-search" v-model="query.key" id="pv_53_12" class="__pv_53_uid_12" __model='{"placeholder":"请输入MAC、IP、设备名称、位置","value":"","type":"text","size":"","disabled":false,"prefix-icon":"el-icon-search","v-model":"query.key","id":"pv_53_12"}'
                  __config='{"draggable":false}' __event='{}' __uid='12' __pid='11' __cid='212'></el-input>
              </el-form-item>
              <el-form-item id="pv_53_13" __model='{"label":"","label-width":"","required":false,"id":"pv_53_13"}' __config='{"draggable":false}' __event='{}' __uid='13' __pid='10' __cid='225'>
                <el-button type="primary" id="pv_53_14" @click="go2Query" __model='{"name":"查询","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pv_53_14"}' __config='{"draggable":false}' __event='{"click":"go2Query"}'
                  __uid='14' __pid='13' __cid='el-button'>查询</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div id="pv_53_15" class="__pv_53_uid_15" __model='{"id":"pv_53_15"}' __config='{"draggable":false}' __event='{}' __uid='15' __pid='8' __cid='div'>
            <el-button type="primary" id="pv_53_16" @click="go2Add" __model='{"name":"添加","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pv_53_16"}' __config='{"draggable":false}' __event='{"click":"go2Add"}' __uid='16'
              __pid='15' __cid='el-button'>添加</el-button>
            <el-button type="primary" id="pv_53_17" @click="go2BatchUpdate" __model='{"name":"批量修改","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pv_53_17"}' __config='{"draggable":false}' __event='{"click":"go2BatchUpdate"}'
              __uid='17' __pid='15' __cid='el-button'>批量修改</el-button>
            <el-button type="primary" id="pv_53_18" @click="go2Import" __model='{"name":"批量导入","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pv_53_18"}' __config='{"draggable":false}' __event='{"click":"go2Import"}'
              __uid='18' __pid='15' __cid='el-button'>批量导入</el-button>
            <el-button type="primary" id="pv_53_19" @click="go2BatchDelete" __model='{"name":"批量删除","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pv_53_19"}' __config='{"draggable":false}' __event='{"click":"go2BatchDelete"}'
              __uid='19' __pid='15' __cid='el-button'>批量删除</el-button>
            <el-button type="primary" id="pv_53_20" @click="go2Export" __model='{"name":"导出","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pv_53_20"}' __config='{"draggable":false}' __event='{"click":"go2Export"}'
              __uid='20' __pid='15' __cid='el-button'>导出</el-button>
          </div>
          <div id="pv_53_21" __model='{"id":"pv_53_21"}' __config='{"draggable":false}' __event='{}' __uid='21' __pid='8' __cid='div'>
            <el-table :data="tableData" border fit show-header highlight-current-row tooltip-effect="dark" id="pv_53_22" class="__pv_53_uid_22" @selection-change="handleSelectionChange" __model='{"data":[],"stripe":false,"border":true,"fit":true,"show-header":true,"highlight-current-row":true,"tooltip-effect":"dark","id":"pv_53_22"}'
              __config='{"draggable":false}' __event='{"selection-change":"handleSelectionChange"}' __uid='22' __pid='21' __cid='226'>
              <el-table-column label="ID" prop="id" type="selection" width="40" align="left" header-align="left" key="id" id="pv_53_23" __model='{"label":"ID","prop":"id","type":"selection","sortable":false,"width":"40","align":"left","header-align":"left","show-overflow-tooltip":false,"innerHTML":"","key":"id","id":"pv_53_23"}'
                __config='{"draggable":false}' __event='{}' __uid='23' __pid='22' __cid='227'></el-table-column>
              <el-table-column label="MAC" prop="mac" align="center" header-align="center" show-overflow-tooltip id="pv_53_24" __model='{"label":"MAC","prop":"mac","sortable":false,"width":"","align":"center","header-align":"center","show-overflow-tooltip":true,"innerHTML":"","id":"pv_53_24"}'
                __config='{"draggable":false}' __event='{}' __uid='24' __pid='22' __cid='227'></el-table-column>
              <el-table-column label="IP" prop="ip" sortable align="center" header-align="center" show-overflow-tooltip id="pv_53_25" __model='{"label":"IP","prop":"ip","sortable":true,"width":"","align":"center","header-align":"center","show-overflow-tooltip":true,"innerHTML":"","id":"pv_53_25"}'
                __config='{"draggable":false}' __event='{}' __uid='25' __pid='22' __cid='227'></el-table-column>
              <el-table-column label="设备名称" prop="device_name" align="center" header-align="center" show-overflow-tooltip id="pv_53_26" __model='{"label":"设备名称","prop":"device_name","sortable":false,"width":"","align":"center","header-align":"center","show-overflow-tooltip":true,"innerHTML":"","id":"pv_53_26"}'
                __config='{"draggable":false}' __event='{}' __uid='26' __pid='22' __cid='227'></el-table-column>
              <el-table-column label="设备类型" prop="model" align="center" header-align="center" show-overflow-tooltip id="pv_53_27" __model='{"label":"设备类型","prop":"model","sortable":false,"width":"","align":"center","header-align":"center","show-overflow-tooltip":true,"innerHTML":"","id":"pv_53_27"}'
                __config='{"draggable":false}' __event='{}' __uid='27' __pid='22' __cid='227'></el-table-column>
              <el-table-column label="设备型号" prop="model_type" align="center" header-align="center" show-overflow-tooltip id="pv_53_28" __model='{"label":"设备型号","prop":"model_type","sortable":false,"width":"","align":"center","header-align":"center","show-overflow-tooltip":true,"innerHTML":"<template scope=\"scope\"><span v-text=\"modelType[scope.row.model_type]\"></span></template>","id":"pv_53_28"}'
                __config='{"draggable":false}' __event='{}' __uid='28' __pid='22' __cid='227'>
                <template scope="scope"><span v-text="modelType[scope.row.model_type]"></span></template>
              </el-table-column>
              <el-table-column label="位置" prop="position" align="center" header-align="center" show-overflow-tooltip id="pv_53_29" __model='{"label":"位置","prop":"position","sortable":false,"width":"","align":"center","header-align":"center","show-overflow-tooltip":true,"innerHTML":"","id":"pv_53_29"}'
                __config='{"draggable":false}' __event='{}' __uid='29' __pid='22' __cid='227'></el-table-column>
              <el-table-column label="操作" align="center" header-align="center" fixed="right" min-width="120" id="pv_53_30" __model='{"label":"操作","width":"","align":"center","header-align":"center","content":[{"category":"el-button","type":"text","icon":"el-icon-edit","label":"修改","events":[{"type":"click","name":"go2Edit(scope.row)"}]},{"category":"el-button","type":"text","icon":"el-icon-delete","label":"删除","events":[{"type":"click","name":"go2Del(scope.row.id)"}]}],"fixed":"right","min-width":"120","id":"pv_53_30"}'
                __config='{"draggable":false}' __event='{}' __uid='30' __pid='22' __cid='el-custom-table-column-op'>
                <div slot-scope="scope">
                  <el-button type="text" icon="el-icon-edit" style="margin-left: 0px;margin-right: 15px;" @click="go2Edit(scope.row)">修改</el-button>
                  <el-button type="text" icon="el-icon-delete" style="margin-left: 0px;margin-right: 15px;" @click="go2Del(scope.row.id)">删除</el-button>
                </div>
              </el-table-column>
            </el-table>
            <div id="pv_53_31" class="__pv_53_uid_31" __model='{"id":"pv_53_31"}' __config='{"draggable":false}' __event='{}' __uid='31' __pid='21' __cid='div'>
              <el-pagination :current-page="page_no" :page-sizes='[10,20,50,100]' :page-size="page_size" :total="total" layout="total, sizes, prev, pager, next, jumper" id="pv_53_32" @size-change="sizeChangeHandle" @current-change="currentChangeHandle"
                __model='{"current-page":1,"page-sizes":[10,20,50,100],"page-size":10,"total":0,"layout":"total, sizes, prev, pager, next, jumper","id":"pv_53_32"}' __config='{"draggable":false}' __event='{"size-change":"sizeChangeHandle","current-change":"currentChangeHandle"}'
                __uid='32' __pid='31' __cid='231'></el-pagination>
            </div>
          </div>
          <rj-dialog id="pv_53_33" __model='{"id":"pv_53_33"}' __config='{"draggable":false}' __event='{}' __uid='33' __pid='8' __cid='rj-dialog'></rj-dialog>
        </div>
      </div>
      <div id="pv_53_34" class="__pv_53_uid_34" __model='{"id":"pv_53_34"}' __config='{"draggable":false}' __event='{}' __uid='34' __pid='2' __cid='div'> </div>
    </div>
  </div>
</template>
<script>
  import {
    list2Tree
  } from '@/util/tree'
  import rjDialog from '@/components/common/dialog.vue'
  import postAdd from './deviceAdd.vue'
  import postEdit from './deviceEdit.vue'
  import batchEdit from './deviceBatchEdit.vue'
  import areaAdd from './areaAdd.vue'
  import areaEdit from './areaEdit.vue'
  import UploadImportData from '@/components/common/UploadImportData'

  export default {
    components: {
      rjDialog,
      postAdd,
      postEdit,
      areaAdd,
      areaEdit
    },
    data() {
      return {
        "query": {},
        "tableData": [],
        "selectObj": [],
        "treeSearchKey": "",
        "typeOptions": [],
        "modelType": {
          "ACE": "ACE"
        },
        "page_no": 1,
        "page_size": 10,
        "total": 0,
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
      sizeChangeHandle(val) {
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
        this.query.area_id = this.selectedTreeNodeId;
        this.$axios.post('/api/demo/device/byPage', this.query).then((res) => {
          if (res.data.success) {
            var message = res.data.result;
            this.tableData = message.list;
            this.total = message.total;
          }
        }).catch((err) => {});
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
          this.$axios.delete('/api/demo/device/batchDelete?ids=' + idString, ).then((res) => {
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
      go2Del(id) {
        this.$confirm('此操作将永久删除, 是否继续?', '删除提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.delete('/api/demo/device/' + id, ).then((res) => {
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
      go2TreeQuery() {
        this.$axios.get('/api/demo/device/tree').then((res) => {
          if (res.data.success) {
            var message = res.data.result;
            this.treeListData = message;
          }
        }).catch((err) => {});
      },
      go2TreeAdd() {
        this.rjDialog.
        title("添加").
        currentView(areaAdd, {}).
        showClose(true).
        sizeTiny().
        then((opt) => {
          this.go2TreeQuery();
        }).show();
      },
      go2TreeEdit(data) {
        this.rjDialog.
        title("修改").
        currentView(areaEdit, {
          id: data.id
        }).
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
        currentView(postEdit, {
          "type": "single",
          "data": row
        }).
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
      handleTreeNodeClick(data) {
        this.selectedTreeNodeId = data.id
        this.go2Query();
      },
      go2Import() {
        this.rjDialog
          .title("批量导入")
          .width('50%').top()
          .currentView(UploadImportData, {
            uploadUrl: '/api/demo/device/import',
            downloadUrl: '/api/demo/device/download'
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
        window.location = "/api/demo/device/export?" + param;
      },
      buildParam: function(item) {
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
        currentView(batchEdit, {
          "type": "batch",
          "data": this.selectObj
        }).
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
      treeListData(val) {
        const rootTree = [{
          id: '',
          label: '所有',
          children: []
        }]
        rootTree[0].children = list2Tree(val, 0)
        this.treeData = rootTree
      },
      treeSearchKey(val) {
        this.$refs.tree.filter(val);
      }
    }
  }
</script>
<style scoped>
  .__pv_53_uid_5 {
    margin-top: 10px;
  }

  .__pv_53_uid_6 {
    margin-top: 10px;
  }

  .__pv_53_uid_3 {
    width: 250px;
    height: 100%;
    background: white;
    padding: 5px;
    float: left;
  }

  .__pv_53_uid_12 {
    width: 280px;
  }

  .__pv_53_uid_10 {
    margin-bottom: -15px;
  }

  .__pv_53_uid_15 {
    margin: 10px 0;
  }

  .__pv_53_uid_22 {
    width: 100%;
  }

  .__pv_53_uid_31 {
    margin-top: 15px;
    text-align: right;
  }

  .__pv_53_uid_8 {
    background: white;
    padding: 10px 10px 20px 10px;
  }

  .__pv_53_uid_7 {
    height: 100%;
    padding: 0 0 0 20px;
    overflow: auto;
  }

  .__pv_53_uid_34 {
    padding: 0;
    clear: both;
    min-height: 0;
  }

  .__pv_53_uid_2 {
    height: 100%;
  }
</style>