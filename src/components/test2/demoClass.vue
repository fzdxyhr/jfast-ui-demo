<template>
    <div __cid='100' style="padding:20px 10px;" id="pm_1" class="jf-tree-table-index">
                <div __cid='div' id="pm_2" class="jf-table-content">
            <div id="seachForm" __cid='div' class="jf-seachForm">
                <el-form :inline="true" :model="query" class="demo-form-inline" style="margin-bottom:-15px;"
                         __cid='224' id="pm_form">
                                                                                                                                                                        <el-form-item label="班级名称" __cid='225' id="pm_name_form_item">
                                                                            <el-input __cid='212' v-model="query.name" id="pm_name"
                                                  placeholder="请输入班级名称"></el-input>
                                                                                                                                                                                                                                                                                                                                                                    </el-form-item>
                                                                                                                                                                                                                                                    <el-form-item label="班长" __cid='225' id="pm_monitor_form_item">
                                                                            <el-input __cid='212' v-model="query.monitor" id="pm_monitor"
                                                  placeholder="请输入班长"></el-input>
                                                                                                                                                                                                                                                                                                                                                                    </el-form-item>
                                                                                                                                                                                                        <el-form-item __cid='225' __model='{"label":"","label-width":""}' id="pm_51">
                        <el-button __cid='el-button' __model='{"name":"查询"}' type="primary" @click="go2Search" id="pm_query">查询</el-button>
                        <el-button __cid='el-button' __model='{"name":"重置"}' type="primary" @click="go2Reset" id="pm_reset">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div style="margin: 10px 0;" __cid='div' class="jf-op-button">
                <el-button __cid='el-button' __model='{"name":"添加"}' type="primary" @click="go2Add" id="pm_add">添加
                </el-button>
                <el-button  __cid='el-button'  __model='{"name":"批量修改"}' type="primary" @click="go2BatchUpdate" id="pm_batch_update">批量修改</el-button>
                <el-button  __cid='el-button'  __model='{"name":"批量导入"}' type="primary" @click="go2Import"  id="pm_batch_import">批量导入</el-button>
                <el-button  __cid='el-button'  __model='{"name":"批量删除"}' type="primary" @click="go2BatchDelete" id="pm_batch_del">批量删除</el-button>
                <el-button  __cid='el-button'  __model='{"name":"导出"}' type="primary" @click="go2Export" id="pm_export">导出</el-button>
            </div>
            <div __cid='div' id="label-select" style="text-align: right;" class="jf-selected-text">
                <span __cid="span" __model='{"text":"已选择"}'>已选择</span><span __cid="span" v-text="selectObj.length"></span><span __model='{"text":"台"}' __cid="span">台</span>
            </div>
            <div id="content" __cid='div' class="jf-table">
                <el-table __cid='226'  id="pm_table"
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
                                                                                    __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"scope.row.name\"></span></template>"}'
                                                                                prop="name"
                                        header-align="center"
                                        align="center"
                                        label="班级名称"
                                                                                                                                                                                                        show-overflow-tooltip>
                                    <template scope="scope">
                                                                                    <span v-text="scope.row.name"></span>
                                                                            </template>
                                </el-table-column>
                                                                                                                                                                                    <el-table-column
                                        __cid='227'
                                                                                    __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"scope.row.headmaster\"></span></template>"}'
                                                                                prop="headmaster"
                                        header-align="center"
                                        align="center"
                                        label="班主任"
                                                                                                                                                                                                        show-overflow-tooltip>
                                    <template scope="scope">
                                                                                    <span v-text="scope.row.headmaster"></span>
                                                                            </template>
                                </el-table-column>
                                                                                                                                                                                    <el-table-column
                                        __cid='227'
                                                                                    __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"scope.row.contact_number\"></span></template>"}'
                                                                                prop="contact_number"
                                        header-align="center"
                                        align="center"
                                        label="联系方式"
                                                                                                                                                                                                        show-overflow-tooltip>
                                    <template scope="scope">
                                                                                    <span v-text="scope.row.contact_number"></span>
                                                                            </template>
                                </el-table-column>
                                                                                                                                                                                    <el-table-column
                                        __cid='227'
                                                                                    __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"scope.row.monitor\"></span></template>"}'
                                                                                prop="monitor"
                                        header-align="center"
                                        align="center"
                                        label="班长"
                                                                                                                                                                                                        show-overflow-tooltip>
                                    <template scope="scope">
                                                                                    <span v-text="scope.row.monitor"></span>
                                                                            </template>
                                </el-table-column>
                                                                                                                                                                                    <el-table-column
                                        __cid='227'
                                                                                    __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"scope.row.boys_num\"></span></template>"}'
                                                                                prop="boys_num"
                                        header-align="center"
                                        align="center"
                                        label="男生人数"
                                                                                                                                                                                                        show-overflow-tooltip>
                                    <template scope="scope">
                                                                                    <span v-text="scope.row.boys_num"></span>
                                                                            </template>
                                </el-table-column>
                                                                                                                                                                <el-table-column
                            __cid='el-custom-table-column-op'
                            fixed="right"
                            header-align="center"
                                                        align="center"
                                                    __model='{"content":[{"category":"el-button", "type": "text", "icon":"el-icon-edit", "label": "修改", "events":[{"type":"click","name":"go2Edit(scope.row)"}]},{"category":"el-button", "type": "text", "icon":"el-icon-delete", "label":"删除", "events":[{"type":"click","name":"go2Del(scope.row)"}]}]}'
                                                    label="操作">
                        <div slot-scope="scope">
                                                        <el-button type="text" icon="el-icon-edit" @click="go2Edit(scope.row)">修改</el-button>
                            <el-button type="text" icon="el-icon-delete" @click="go2Del(scope.row)">删除</el-button>
                        </div>
                    </el-table-column>
                </el-table>
                <div style="margin-top:15px;text-align:right;" __cid="div" id="pm_14">
                    <el-pagination
                            __cid='231'
                            id="pm_pagination"
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
</template>

<script>
    import { list2Tree, findParentsById } from '@common/js/tree'
    import UploadImportData from '@common/UploadImportData'
        import rjDialog from '@common/dialog.vue'
    import postAdd from './demoClassAdd.vue'
    import postEdit from './demoClassEdit.vue'
    import batchEdit from './demoClassBatchEdit.vue'
    import postDelete from './demoClassDelete.vue'
        
    export default {
        components:{
            rjDialog,
                        postDelete,
            postAdd,
            postEdit,
                                },
        data() {
    return {
        "query":{
                                                                                                                                                                                                                        },
                "tableData": [],
        "selectObj":[],
        "typeOptions": [],
                                                                                                                                                                                                                                            "page_no":1,
    "page_size":10,
    "total":0,
                                                                                                                                                        }
    },
    mounted() {
        this.go2Query();
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
        handleSelectionChange(val) {
            let self = this;
            var obj = eval("(" + JSON.stringify(val) + ")");
            self.selectObj = [];
            for (var i = 0; i < obj.length; i++) {
                var temp = obj[i];
                self.selectObj.push(temp);
            }
        },
                go2Search(){
            this.page_no = 1;
            this.go2Query();
        },
        go2Query() {
            this.query.page = this.page_no;
            this.query.size = this.page_size;
                                                                                                                                                                                                                            const loading = this.$loading({lock: true,text: '处理中...',spinner: 'el-icon-loading',background: 'rgba(0, 0, 0, 0.7)'});
            this.$axios.post('/api/demo/democlasss/byPage',this.query).then((res) => {
                loading.close();
                if(res.data.success){
                var message = res.data.result;
                this.tableData = message.list;
                this.total = message.total;
            }
        }).catch((err) => {
            loading.close();
        });
    },
        go2Reset(){
                                                                                this.query.name = '';
                                                                                                                                                                        this.query.monitor = '';
                                                                                                                                                            this.selectedTreeNodeId = '';
            this.$nextTick(() => {
                this.$refs.tree.setCurrentKey('');
        });
        this.page_no = 1;
        this.page_size = 10;
        this.go2Query();
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
              this.$axios.delete('/api/demo/democlasss/batchDelete?ids=' + idString,).then((res) => {
            if(res.data.success){
            this.$message({type: 'success',message: '删除成功!'});
            this.go2Query();
        }
    }).catch((err) => {
    });
    }).catch(() => {});
    },
    go2Del(row) {
                    this.rjDialog.
            title("删除提示").
            width("600px").
            currentView(postDelete, {id:row.id,data:row}).
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
        },
    go2Import () {
        this.rjDialog
            .title("批量导入")
            .width('50%').top()
            .currentView(UploadImportData, {
                uploadUrl: '/api/demo/democlasss/import',
                downloadUrl: '/api/demo/democlasss/download'
            })
            .closeOnClickModal(false)
            .showClose(true)
            .then((opt) => {
            this.go2Query();
    }).show()
    },
    go2Export(){
        let self = this;
        let param = self.buildParam(self.query);
                window.location = "/api/demo/democlasss/export?"+param;
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
                width("600px").
                currentView(batchEdit, {"type":"batch","data":this.selectObj}).
                showClose(true).
                sizeTiny().
                then((opt) => {
            this.go2Query();
    }).show();
    },
                                                                                                                                                                                                                                                    
                                                                    },
    filters: {

    }
    }
</script>
<style scoped>
</style>