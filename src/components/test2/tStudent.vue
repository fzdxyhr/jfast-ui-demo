<template>
	<div __cid='100' id="pm_1">
		<div __cid='div' id="pm_nav" style="padding: 10px 5px;">
			<div __cid="div" style="cursor: pointer;font-weight: bolder;">
				<span style="font-size: 18px;" __cid='el-custom-icon' __model='{"name":"el-icon-back"}' @click="go2Back"><i class="el-icon-back"></i></span>
				<span __cid="span" __model='{"text":"返回上一级"}' style="margin-left: 10px;font-size: 18px;" @click="go2Back">返回上一级</span>
			</div>
		</div>
		<div __cid='div' style="height:100%;" id="pm_2">
			<div __cid='div' style="float:left;width:250px;height:100%;padding: 5px;" id="pm_3">
				<el-button type="primary" __model='{"name":"添加"}' @click="go2TreeAdd" __cid='el-button' id="pm_tree_add">添加</el-button>
				<el-input placeholder="搜索名称" v-model="treeSearchKey" type="text" style="margin-top:10px;" __cid='212' id="pm_tree_search"></el-input>
				<el-tree id="pm_tree" ref="tree" @node-click="handleTreeNodeClick" :expand-on-click-node="false" :highlight-current="true"
				 :filter-node-method="filterNode" :data="treeData" node-key="id" default-expand-all :default-checked-keys='[]'
				 :indent="16" style="margin-top:10px;" __model='{"expand-on-click-node":false,"default-expanded-keys":[], "item-icons":[{"icon":"el-icon-edit-outline","eventName":"go2TreeEdit(data)"},{"icon":"el-icon-delete","eventName":"go2TreeDel(data)"}]}'
				 __cid='el-custom-tree'>
					<span slot-scope="{ node, data }" class="vve-tree-node">
						<span>{{ node.label }}</span>
						<span v-if="data.id" class="vve-op" style="margin-right: 30px;margin-top: 2px;position: absolute;right: 0;"><i
							 class="el-icon-edit-outline" style="padding: 0 2px" @click.stop="go2TreeEdit(data)"></i></span>
						<span v-if="data.id" class="vve-op" style="margin-right: 10px;margin-top: 2px;position: absolute;right: 0;"><i
							 class="el-icon-delete" style="padding: 0 2px" @click.stop="go2TreeDel(data)"></i></span>
					</span>
				</el-tree>
			</div>
			<div __cid='div' style="overflow:auto;padding: 0 0 0 20px;height:100%;" id="pm_7">
				<div id="index" __cid='div' style="padding: 10px 10px 20px 10px;">
					<div __cid='div' id="label-show">
						<span __model='{"text":"区域:"}' __cid="span">区域:</span><span __cid="span" v-text="treeLabel"></span>
					</div>
					<div id="seachForm" __cid='div'>
						<el-form :inline="true" :model="query" class="demo-form-inline" style="margin-bottom:-15px;" __cid='224' id="pm_form">
							<el-form-item label="性别" __cid='225' id="pm_sex_form_item">
								<el-input __cid='212' v-model="query.sex" id="pm_sex" placeholder="请输入性别"></el-input>
							</el-form-item>
							<el-form-item label="兴趣" __cid='225' id="pm_insterst_form_item">
								<el-input __cid='212' v-model="query.insterst" id="pm_insterst" placeholder="请输入兴趣"></el-input>
							</el-form-item>
							<el-form-item __cid='225' __model='{"label":"","label-width":""}' id="pm_operate">
								<el-button __cid='el-button' __model='{"name":"查询"}' type="primary" @click="go2Search" id="pm_query">查询</el-button>
								<el-button __cid='el-button' __model='{"name":"重置"}' type="primary" @click="go2Reset" id="pm_reset">重置</el-button>
							</el-form-item>
						</el-form>
					</div>
					<div style="margin: 10px 0;" __cid='div'>
						<el-button __cid='el-button' __model='{"name":"添加"}' type="primary" @click="go2Add" id="pm_add">添加</el-button>
						<el-button __cid='el-button' __model='{"name":"批量修改"}' type="primary" @click="go2BatchUpdate" id="pm_batch_update">批量修改</el-button>
						<el-button __cid='el-button' __model='{"name":"批量导入"}' type="primary" @click="go2Import" id="pm_batch_import">批量导入</el-button>
						<el-button __cid='el-button' __model='{"name":"批量删除"}' type="primary" @click="go2BatchDelete" id="pm_batch_del">批量删除</el-button>
						<el-button __cid='el-button' __model='{"name":"导出"}' type="primary" @click="go2Export" id="pm_export">导出</el-button>
					</div>
					<div __cid='div' id="label-select" style="text-align: right;">
						<span __cid="span" __model='{"text":"已选择"}'>已选择</span><span __cid="span" v-text="selectObj.length"></span><span
						 __model='{"text":"台"}' __cid="span">台</span>
					</div>
					<div id="content" __cid='div'>
						<el-table __cid='226' id="pm_table" :data="tableData" :stripe="false" border tooltip-effect="dark"
						 @selection-change="handleSelectionChange" style="width: 100%">
							<el-table-column __cid='227' key="id" type="selection" width="40">
							</el-table-column>
							<el-table-column __cid='227' __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"gradeId[scope.row.grade_id]\"></span></template>"}'
							 prop="grade_id" header-align="center" align="center" label="班级标识" show-overflow-tooltip>
								<template scope="scope">
									<span v-text="gradeId[scope.row.grade_id]"></span>
								</template>
							</el-table-column>
							<el-table-column __cid='227' __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"scope.row.sex\"></span></template>"}'
							 prop="sex" header-align="center" align="center" label="性别" sortable show-overflow-tooltip>
								<template scope="scope">
									<span v-text="scope.row.sex"></span>
								</template>
							</el-table-column>
							<el-table-column __cid='227' __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"scope.row.age\"></span></template>"}'
							 prop="age" header-align="center" align="center" label="年龄" show-overflow-tooltip>
								<template scope="scope">
									<span v-text="scope.row.age"></span>
								</template>
							</el-table-column>
							<el-table-column __cid='227' __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"scope.row.nature\"></span></template>"}'
							 prop="nature" header-align="center" align="center" label="性格" show-overflow-tooltip>
								<template scope="scope">
									<span v-text="scope.row.nature"></span>
								</template>
							</el-table-column>
							<el-table-column __cid='227' __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"scope.row.create_time\"></span></template>"}'
							 prop="create_time" header-align="center" align="center" label="创建时间" show-overflow-tooltip>
								<template scope="scope">
									<span v-text="scope.row.create_time"></span>
								</template>
							</el-table-column>
							<el-table-column __cid='227' __model='{"width":"", "innerHTML": "<template scope=\"scope\"><span v-text=\"scope.row.insterst\"></span></template>"}'
							 prop="insterst" header-align="center" align="center" label="兴趣" show-overflow-tooltip>
								<template scope="scope">
									<span v-text="scope.row.insterst"></span>
								</template>
							</el-table-column>
							<el-table-column __cid='el-custom-table-column-op' fixed="right" header-align="center" align="center" min-width="120"
							 __model='{"content":[{"category":"el-button", "type": "text", "icon":"el-icon-edit", "label": "修改", "events":[{"type":"click","name":"go2Edit(scope.row)"}]},{"category":"el-button", "type": "text", "icon":"el-icon-delete", "label":"删除", "events":[{"type":"click","name":"go2Del(scope.row)"}]}]}'
							 label="操作">
								<div slot-scope="scope">
									<el-button type="text" icon="el-icon-edit" @click="go2Edit(scope.row)">修改
									</el-button>
									<el-button type="text" icon="el-icon-delete" @click="go2Del(scope.row)">删除
									</el-button>
								</div>
							</el-table-column>
						</el-table>
						<div style="margin-top:15px;text-align:right;" __cid="div">
							<el-pagination __cid='231' id="pm_pagination" @size-change="sizeChangeHandle" @current-change="currentChangeHandle"
							 :current-page="page_no" :page-sizes="[10, 20, 50, 100]" :page-size="page_size" :total="total" layout="total, sizes, prev, pager, next, jumper">
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
	import {
		list2Tree,
		findParentsById,
		findParentsByIdIncludeSelf,
		setChildrenByCurrentId
	} from '@common/js/tree'
	import rjDialog from '@common/dialog.vue'
	import rjDownload from '@common/js/download'
	import postAdd from './tStudentAdd.vue'
	import postDelete from './tStudentDelete.vue'
	import postEdit from './tStudentEdit.vue'
	import batchEdit from './tStudentBatchEdit.vue'
	import tGradeAdd from './tGradeAdd.vue'
	import tGradeEdit from './tGradeEdit.vue'
	import UploadImportData from '@common/UploadImportData'

	export default {
		components: {
			rjDialog,
			rjDownload,
			postAdd,
			postDelete,
			postEdit,
			tGradeAdd,
			tGradeEdit
		},
		data() {
			return {
				"query": {},
				"tableData": [],
				"selectObj": [],
				"treeSearchKey": "",
				"treeLabel": "",
				"typeOptions": [],

				"page_no": 1,
				"page_size": 10,
				"total": 0,
				"treeData": [],
				"treeListData": [],
				"selectedTreeNodeId": "",
				"TGradeGradeIdOption": [],
				"gradeId": {},
			}
		},
		mounted() {
			this.go2Query();
			this.go2TreeQuery();
			this.findTGradeGradeIdCascaderDataAll();
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
			go2Back() {
				let url = "/tclass";
				this.$router.push(url);
			},
			go2Search() {
				this.page_no = 1;
				this.go2Query();
			},
			go2Query() {
				this.query.page = this.page_no;
				this.query.size = this.page_size;
				this.query.grade_id = this.selectedTreeNodeId;
				const loading = this.$loading({
					lock: true,
					text: '处理中...',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				this.$axios.post('/api/demo/tstudents/byPage', this.query).then((res) => {
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
			go2Reset() {
				this.query.sex = '';
				this.query.create_time_range = null;
				this.query.insterst = '';
				this.selectedTreeNodeId = '';
				this.$nextTick(() => {
					this.$refs.tree.setCurrentKey('');
				});
				this.page_no = 1;
				this.page_size = 10;
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
					this.$axios.delete('/api/demo/tstudents/batchDelete?ids=' + idString, ).then((res) => {
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
				this.rjDialog.
				title("删除提示").
				width("600px").
				currentView(postDelete, {
					id: row.id,
					data: row
				}).
				showClose(true).
				sizeTiny().
				then((opt) => {
					this.go2Query();
				}).show();
			},
			go2TreeQuery() {
				this.$axios.get('/api/demo/tstudents/tree').then((res) => {
					if (res.data.success) {
						var message = res.data.result;
						this.treeListData = message;
						this.$nextTick(() => {
							this.$refs.tree.setCurrentKey('');
						});
					}
				}).catch((err) => {});
			},
			go2TreeDel(data) {
				this.$confirm('此操作将永久删除, 是否继续?', '删除提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$axios.delete('/api/demo/tgrades/' + data.id, ).then((res) => {
						if (res.data.success) {
							this.$message({
								type: 'success',
								message: '删除成功!'
							});
							this.go2TreeQuery();
						}
					}).catch((err) => {});
				}).catch(() => {});
			},
			go2TreeAdd() {
				this.rjDialog.
				title("添加").
				width("600px").
				currentView(tGradeAdd, {}).
				showClose(true).
				sizeTiny().
				then((opt) => {
					this.go2TreeQuery();
				}).show();
			},
			go2TreeEdit(data) {
				this.rjDialog.
				title("修改").
				width("600px").
				currentView(tGradeEdit, {
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
			filterNode(value, data) {
				if (!value) return true;
				return data.label.indexOf(value) !== -1;
			},
			handleTreeNodeClick(data) {
				this.selectedTreeNodeId = data.id;
				const temp = findParentsByIdIncludeSelf(this.treeListData, data.id);
				this.treeLabel = temp.map(v => v.label).join(">");
				this.go2Search();
			},
			go2Import() {
				this.rjDialog
					.title("批量导入")
					.width('50%').top()
					.currentView(UploadImportData, {
						uploadUrl: '/api/demo/tstudents/import',
						downloadUrl: '/api/demo/tstudents/download'
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
				rjDownload.download("/api/demo/tstudents/export?" + param);
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
			findTGradeGradeIdCascaderDataAll() {
				this.$axios.get('/api/demo/tstudents/t_grade/cascader/grade_id_data/all').then((res) => {
					if (res.data.success) {
						var message = res.data.result;
						message.forEach((item) => {
							this.$set(this.gradeId, item.value, item.label);
						});
					}
				}).catch((err) => {});
			},
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
</style>
