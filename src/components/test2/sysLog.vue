<template>
    <div __cid='100' style="padding:20px 10px;">
        <div __cid='div'>
            <div id="seachForm" __cid='div'>
                <el-form :inline="true" :model="query" class="demo-form-inline" style="margin-bottom:-15px;"
                         __cid='224'>
                                                                                                                                                                        <el-form-item label="设备IP" __cid='225'>
                                                                            <el-input __cid='212' v-model="query.device_ip"
                                                  placeholder="请输入设备IP"></el-input>
                                                                                                                                                                                                                                                                                            </el-form-item>
                                                                                                                                                                                                                                                    <el-form-item label="严重程度" __cid='225'>
                                                                                                                                                    <el-select __cid='214' v-model="query.severity"
                                                   placeholder="请选择严重程度"
                                                   __model='{"options":[{"label":"Emergency","value":0},{"label":"Alert","value":1},{"label":"Critical","value":2},{"label":"Error","value":3},{"label":"Warning","value":4},{"label":"Notice","value":5},{"label":"Informational","value":6},{"label":"Debug","value":7}]}'>
                                                                                            <el-option key="0" label="Emergency"
                                                           value="0"></el-option>
                                                                                            <el-option key="1" label="Alert"
                                                           value="1"></el-option>
                                                                                            <el-option key="2" label="Critical"
                                                           value="2"></el-option>
                                                                                            <el-option key="3" label="Error"
                                                           value="3"></el-option>
                                                                                            <el-option key="4" label="Warning"
                                                           value="4"></el-option>
                                                                                            <el-option key="5" label="Notice"
                                                           value="5"></el-option>
                                                                                            <el-option key="6" label="Informational"
                                                           value="6"></el-option>
                                                                                            <el-option key="7" label="Debug"
                                                           value="7"></el-option>
                                                                                    </el-select>
                                                                                                                                                                                                                    </el-form-item>
                                                                                                                                                            <el-form-item label="模块" __cid='225'>
                                                                                                                                                    <el-select __cid='214' v-model="query.facility"
                                                   placeholder="请选择模块"
                                                   __model='{"options":[{"label":"模块一","value":1},{"label":"模块二","value":2}]}'>
                                                                                            <el-option key="1" label="模块一"
                                                           value="1"></el-option>
                                                                                            <el-option key="2" label="模块二"
                                                           value="2"></el-option>
                                                                                    </el-select>
                                                                                                                                                                                                                    </el-form-item>
                                                                                                                                                            <el-form-item label="日志内容" __cid='225'>
                                                                            <el-input __cid='212' v-model="query.syslog_content"
                                                  placeholder="请输入日志内容"></el-input>
                                                                                                                                                                                                                                                                                            </el-form-item>
                                                                                                                                                            <el-form-item label="时间" __cid='225'>
                                                                                                                                                                                                                                                                                                    <el-date-picker
                                                __cid='220'
                                                v-model="query.create_time_range"
                                                format=""
                                                value-format="yyyy-MM-dd HH:mm:ss"
                                                type="datetimerange"
                                                start-placeholder="选择开始日期"
                                                end-placeholder="选择结束日期">
                                        </el-date-picker>
                                                                    </el-form-item>
                                                                                                                                                            <el-form-item __cid='225' __model='{"label":"","label-width":""}'>
                        <el-button __cid='el-button' __model='{"name":"查询"}' type="primary" @click="go2Query">
                            查询
                        </el-button>
                        <el-button __cid='el-button' __model='{"name":"添加"}' type="primary" @click="go2Add">添加
                        </el-button>
                        <el-button  __cid='el-button'  __model='{"name":"批量修改"}' type="primary" @click="go2BatchUpdate">批量修改</el-button>
                        <el-button  __cid='el-button'  __model='{"name":"批量导入"}' type="primary" @click="go2Import">批量导入</el-button>
                        <el-button  __cid='el-button'  __model='{"name":"批量删除"}' type="primary" @click="go2BatchDelete">批量删除</el-button>
                        <el-button  __cid='el-button'  __model='{"name":"导出"}' type="primary" @click="go2Export">导出</el-button>
                    </el-form-item>
                </el-form>
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
                                        prop="device_ip"
                                        header-align="center"
                                        align="center"
                                        label="设备IP"
                                                                            show-overflow-tooltip>
                                </el-table-column>
                                                                                                                                                            <el-table-column
                                        __cid='227'
                                        __model='{"width":""}'
                                        prop="syslog_type"
                                        header-align="center"
                                        align="center"
                                        label="类型"
                                                                            show-overflow-tooltip>
                                </el-table-column>
                                                                                                                                                                                                        <el-table-column
                                        __cid='227'
                                        __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"severity[scope.row.severity]\"></span></template>"}'
                                        prop="severity"
                                        header-align="center"
                                        align="center"
                                        label="严重程度"
                                                                            show-overflow-tooltip>
                                    <template scope="scope">
                                        {{ severity[scope.row.severity] }}
                                    </template>
                                </el-table-column>
                                                                                                                                                            <el-table-column
                                        __cid='227'
                                        __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"facility[scope.row.facility]\"></span></template>"}'
                                        prop="facility"
                                        header-align="center"
                                        align="center"
                                        label="模块"
                                                                            show-overflow-tooltip>
                                    <template scope="scope">
                                        {{ facility[scope.row.facility] }}
                                    </template>
                                </el-table-column>
                                                                                                                                                            <el-table-column
                                        __cid='227'
                                        __model='{"width":""}'
                                        prop="syslog_content"
                                        header-align="center"
                                        align="center"
                                        label="日志内容"
                                                                            show-overflow-tooltip>
                                </el-table-column>
                                                                                                                                                            <el-table-column
                                        __cid='227'
                                        __model='{"width":""}'
                                        prop="create_time"
                                        header-align="center"
                                        align="center"
                                        label="时间"
                                                                            show-overflow-tooltip>
                                </el-table-column>
                                                                                                                                        <el-table-column
                            __cid='el-custom-table-column-op'
                            fixed="right"
                            header-align="center"
                            align="center"
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
</template>

<script>
    import UploadImportData from '@/components/common/UploadImportData'
    import rjDialog from '@/components/common/dialog.vue'
    import postAdd from './sysLogAdd.vue'
    import postEdit from './sysLogEdit.vue'
    import batchEdit from './sysLogBatchEdit.vue'
        
    export default {
        components:{
            rjDialog,
            postAdd,
            postEdit,
                    },
        data() {
    return {
        "query":{},
        "tableData": [],
        "selectObj":[],
        "typeOptions": [],
                                                                                                                "severity": {
                                                            "0": "Emergency",
                                                                                "1": "Alert",
                                                                                "2": "Critical",
                                                                                "3": "Error",
                                                                                "4": "Warning",
                                                                                "5": "Notice",
                                                                                "6": "Informational",
                                                                                "7": "Debug",
                                                },
                                            "facility": {
                                                            "1": "模块一",
                                                                                "2": "模块二",
                                                },
                                                                                    "page_no":1,
    "page_size":10,
    "total":0
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
        go2Query() {
            this.query.page = this.page_no;
            this.query.size = this.page_size;
        this.$axios.post('/api/demo/syslog/byPage',this.query).then((res) => {
                if(res.data.success){
                var message = res.data.result;
                this.tableData = message.list;
                this.total = message.total;
            }
        }).catch((err) => {
        });
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
              this.$axios.delete('/api/demo/syslog/batchDelete?ids=' + idString,).then((res) => {
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
              this.$axios.delete('/api/demo/syslog/' + id,).then((res) => {
            if(res.data.success){
            this.$message({type: 'success',message: '删除成功!'});
            this.go2Query();
        }
    }).catch((err) => {
    });
    }).catch(() => {
    });
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
    go2Import () {
        this.rjDialog
                .title("批量导入")
                .width('50%').top()
                .currentView(UploadImportData, {
                    uploadUrl: '/api/demo/syslog/import',
                    downloadUrl: '/api/demo/syslog/download'
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
        window.location = "/api/demo/syslog/export?"+param;
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
                currentView(batchEdit, {"type":"batch","data":this.selectObj}).
                showClose(true).
                sizeTiny().
                then((opt) => {
            this.go2Query();
    }).show();
    }
    },
    filters: {

    }
    }
</script>
<style scoped>
</style>