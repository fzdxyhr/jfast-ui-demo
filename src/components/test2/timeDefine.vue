<template>
	<div __cid='100' style="padding:20px 10px;" id="pm_1">
		<div __cid='div' id="pm_2">
			<!-- <div id="seachForm" __cid='div'>
				<el-form :inline="true" :model="query" class="demo-form-inline" style="margin-bottom:-15px;" __cid='224' id="pm_form">
					<el-form-item label="时间对象" __cid='225' id="pm_time_object_form_item">
						<el-input __cid='212' v-model="query.time_object" id="pm_time_object" placeholder="请输入时间对象"></el-input>
					</el-form-item>
					<el-form-item __cid='225' __model='{"label":"","label-width":""}' id="pm_51">
						<el-button __cid='el-button' __model='{"name":"查询"}' type="primary" @click="go2Search" id="pm_query">查询</el-button>
						<el-button __cid='el-button' __model='{"name":"重置"}' type="primary" @click="go2Reset" id="pm_reset">重置</el-button>
					</el-form-item>
				</el-form>
			</div> -->
			<div style="margin: 10px 0;font-size: 14px;" __cid='div'>
				<el-button __cid='el-button' __model='{"name":"添加时间对象"}' type="text" @click="go2Add" id="pm_add"><i class="el-icon-plus"></i>添加时间对象</el-button>
				<el-button __cid='el-button' __model='{"name":"删除选中时间对象"}' type="text" @click="go2BatchDelete" id="pm_batch_del"><i
					 class="el-icon-close"></i>删除选中时间对象</el-button>
			</div>
			<!-- <div __cid='div' id="label-select" style="text-align: right;">
				<span __cid="span" __model='{"text":"已选择"}'>已选择</span><span __cid="span" v-text="selectObj.length"></span><span
				 __model='{"text":"台"}' __cid="span">台</span>
			</div> -->
			<div id="content" __cid='div'>
				<el-table __cid='226' id="pm_table" :data="tableData" :stripe="false" border tooltip-effect="dark"
				 @selection-change="handleSelectionChange" style="width: 100%">
					<el-table-column __cid='227' key="time_object" type="selection" width="40">
					</el-table-column>
					<el-table-column __cid='227' __model='{"width":""}' prop="time_object" header-align="center" align="center" label="时间对象"
					 show-overflow-tooltip>
					 <template scope="scope">
						<span v-if="scope.row.time_object == 'any'">所有时间</span>
						<span v-else-if="scope.row.time_object == 'day_time'">白天</span>
						<span v-else-if="scope.row.time_object == 'night_time'">晚上</span>
						<span v-else-if="scope.row.time_object == 'unwork_time'">下班时间</span>
						<span v-else-if="scope.row.time_object == 'weekend'">周末</span>
						<span v-else-if="scope.row.time_object == 'work_time'">上班时间</span>
						<span v-else-if="scope.row.time_object == 'working_time'">工作日</span>
						<span v-else>{{scope.row.time_object}}</span>
					 </template>
					</el-table-column>
					<el-table-column __cid='227' __model='{"width":""}' prop="time_period" header-align="center" align="center" label="时间周期"
					 show-overflow-tooltip>
					 <template scope="scope">
					 	<div v-for="item in scope.row.time_period">{{ item }}</div>
					 </template>
					</el-table-column>
					<el-table-column __cid='227' __model='{"width":""}' prop="time_quantum" header-align="center" align="center" label="时间段"
					 show-overflow-tooltip>
					 <template scope="scope">
						<div v-for="item in scope.row.time_quantum">{{ item }}</div>
					 </template>
					</el-table-column>
					<el-table-column __cid='el-custom-table-column-op' fixed="right" header-align="center" align="center" __model='{"content":[{"category":"el-button", "type": "text", "icon":"el-icon-edit", "label": "修改", "events":[{"type":"click","name":"go2Edit(scope.row)"}]},{"category":"el-button", "type": "text", "icon":"el-icon-delete", "label":"删除", "events":[{"type":"click","name":"go2Del(scope.row.id)"}]}]}'
					 label="操作">
						<div slot-scope="scope">
							<el-button type="text" icon="el-icon-edit" @click="go2Edit(scope.row)">修改</el-button>
							<el-button type="text" icon="el-icon-delete" @click="go2Del(scope.row.time_object)">删除</el-button>
						</div>
					</el-table-column>
				</el-table>
				<div style="margin-top:15px;text-align:right;" __cid="div" id="pm_14">
					<el-pagination __cid='231' id="pm_pagination" @size-change="sizeChangeHandle" @current-change="currentChangeHandle"
					 :current-page="page_no" :page-sizes="[10, 20, 50, 100]" :page-size="page_size" :total="total" layout="total, sizes, prev, pager, next, jumper">
					</el-pagination>
				</div>
				<!-- <div>
					<el-input type="textarea" :rows="15" placeholder="请输入内容" v-model="test">
					</el-input>
				</div> -->
			</div>
			<rj-dialog __cid="rj-dialog"></rj-dialog>
		</div>
	</div>
</template>

<script>
	import {
		list2Tree,
		findParentsById
	} from '@common/js/tree'
	import {
		parseTimeObject
	} from '@common/js/timeObject'
	import UploadImportData from '@common/UploadImportData'
	// import rjDownload from '@common/js/download'
	import rjDialog from '@common/dialog.vue'
	import postAdd from './timeDefineAdd.vue'
	import postEdit from './timeDefineEdit.vue'
	import batchEdit from './timeDefineBatchEdit.vue'

	export default {
		components: {
			rjDialog,
			// rjDownload,
			postAdd,
			postEdit,
		},
		data() {
			return {
				"query": {},
				"tableData": [],
				tempTableData:[],
				"selectObj": [],
				"typeOptions": [],
				"page_no": 1,
				"page_size": 10,
				"total": 0,
				"timePeriod": {
					"Monday": "星期一",
					"Tuesday": "星期二",
					"Wednesday": "星期三",
					"Thursday": "星期四",
					"Friday": "星期五",
					"Saturday": "星期六",
					"Sunday": "星期日"
				},
				"timeObj": ["time-range entry: any (active)", "periodic Daily 0:00 to 23:59", "time-range entry: day_time (active)",
					"periodic Daily 6:00 to 18:00", "time-range entry: night_time (inactive)",
					"periodic Weekdays 0:00 to 5:59 ",
					"periodic Daily 18:01 to 23:59 ",

					"time-range entry: unwork_time (inactive)",
					"periodic Weekdays 0:00 to 7:59",
					"periodic Weekdays 12:00 to 13:00 ",
					"periodic Weekdays 18:01 to 23:59 ",

					"time-range entry: weekend (inactive)",
					"periodic Weekend 0:00 to 23:59",

					"time-range entry: work_time (active)",
					"periodic Weekdays 8:00 to 12:00",
					"periodic Monday Tuesday Wednesday 0:00 to 18:00 ",

					"time-range entry: working_time (active)",
					"periodic Weekdays 0:00 to 23:59 "
				]
			}
		},
		mounted() {
			this.go2Query();
		},
		computed: {
			test: function() {
				return parseTimeObject(this.timeObj);
			}
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
			go2Search() {
				this.page_no = 1;
				this.go2Query();
			},
			go2Query() {
				const loading = this.$loading({
					lock: true,
					text: '处理中...',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				this.$axios.get('/api/timerange').then((res) => {
					loading.close();
					if (res.data.success) {
						let tempValue = [];
						this.tempTableData = [];
						let temp = res.data.message.split("\r\n");
						temp.forEach((item, index) => {
							if (item.trim() != '') {
								tempValue.push(item.trim());
							}
						});
						let timeObjects = parseTimeObject(tempValue);
						if (timeObjects) {
							timeObjects = JSON.parse(timeObjects);
							timeObjects.forEach((item) => {
								let timeObj = {};
								timeObj.id = item.timeName;
								timeObj.time_object = item.timeName;
								let tempTimePer = [];
								let tempTimeValuePer = [];
								let tempTimeQuantum = [];
								item.region.forEach((it) => {
									if (it.period.trim() == 'Daily') {
										tempTimePer.push("每天");
									} else if (it.period.trim() == 'Weekdays') {
										tempTimePer.push("工作日");
									} else if (it.period.trim() == 'Weekend') {
										tempTimePer.push("周末");
									} else {
										let tempPeriod = it.period.trim().split(" ");
										let periodArray = [];
										let periodValueArray = [];
										tempPeriod.forEach((period) => {
											periodArray.push(this.timePeriod[period]);
											periodValueArray.push(period);
										});
										tempTimePer.push(periodArray.join(" "));
										tempTimeValuePer.push(periodValueArray.join(" "))
									}
									tempTimeQuantum.push(it.start + "-" + it.end);
								});
								timeObj.time_period = tempTimePer;
								timeObj.time_period_actual = tempTimeValuePer;
								timeObj.time_quantum = tempTimeQuantum;
								this.tempTableData.push(timeObj);
							});
						}
						this.total = this.tempTableData.length;
						console.log((this.page_no-1)*this.page_size);
						this.tableData = this.tempTableData.splice((this.page_no-1)*this.page_size,this.page_size);
					}
				}).catch((err) => {
					loading.close();
				});
			},
			go2Reset() {
				this.query.time_object = '';
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
					ids.push(item.time_object);
				});
				this.$confirm('此操作将永久删除, 是否继续?', '删除提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					let count = 0;
					ids.forEach((item) => {
						this.$axios.delete('/api/timerange/' + item).then((res) => {
							if (res.data.success) {
								count++;
								if(count == ids.length) {
									this.$message({
										type: 'success',
										message: '删除成功!'
									});
									this.go2Query();
								}
							}
						}).catch((err) => {});
					});
					
				}).catch(() => {});
			},
			go2Del(id) {
				this.$confirm('此操作将永久删除, 是否继续?', '删除提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$axios.delete('/api/timerange/' + id).then((res) => {
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
						uploadUrl: '/api/demo/timedefines/import',
						downloadUrl: '/api/demo/timedefines/download'
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
				rjDownload.download("/api/demo/timedefines/export?" + param);
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
		},
		filters: {

		}
	}
</script>
<style scoped>
</style>
