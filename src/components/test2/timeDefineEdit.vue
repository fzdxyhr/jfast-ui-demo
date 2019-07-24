<template>
	<div __cid='100' id="pm_1">
		<div id="el-dialog__content" __cid='div'>
			<el-form __cid='224' id="pm_form" ref="editForm" :model="editForm" :rules="rules" :label-width="formLabelWidth">
				<el-form-item __cid='225' prop="time_object" label="时间对象" id="pm_time_object_form_item">
					<el-input __cid='212' :disabled="true" v-model.trim="editForm.time_object" placeholder="请输入时间对象" id="pm_time_object"></el-input>
				</el-form-item>
				<el-form-item __cid='225' prop="time_period" label="时间周期" id="pm_time_period_form_item">
					<el-select __cid='214' multiple v-model="editForm.time_period" placeholder="请选择时间周期" id="pm_time_period" __model='{"options":[]}'>
						<el-option key="Monday" label="星期一" value="Monday"></el-option>
						<el-option key="Tuesday" label="星期二" value="Tuesday"></el-option>
						<el-option key="Wednesday" label="星期三" value="Wednesday"></el-option>
						<el-option key="Thursday" label="星期四" value="Thursday"></el-option>
						<el-option key="Friday" label="星期五" value="Friday"></el-option>
						<el-option key="Saturday" label="星期六" value="Saturday"></el-option>
						<el-option key="Sunday" label="星期日" value="Sunday"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item __cid='225' prop="start_time" label="开始时间" id="pm_start_time_form_item">
					<el-time-select __cid='219' id="pm_start_time" placeholder="开始时间时间" v-model="editForm.start_time" :picker-options='{start: "06:00",step: "00:15",end: "21:00"
                                                                        ,minTime:"00:00"
                                                                                                            ,maxTime:"23:59"
                                                                        }'>
					</el-time-select>
				</el-form-item>
				<el-form-item __cid='225' prop="end_time" label="结束时间" id="pm_end_time_form_item">
					<el-time-select __cid='219' id="pm_end_time" placeholder="结束时间时间" v-model="editForm.end_time" :picker-options='{start: "06:00",step: "00:15",end: "21:00"
                                                                        ,minTime:editForm.start_time
                                                                                                            }'>
					</el-time-select>
				</el-form-item>
			</el-form>
		</div>
		<div __cid="div" id="el-dialog__btn" style="text-align: right">
			<el-button __cid='el-button' @click="doCancel" __model='{"name":"取 消"}' id="pm_canel">取 消</el-button>
			<el-button __cid='el-button' type="primary" @click="go2Submit" __model='{"name":"保 存"}' id="pm_save">保 存</el-button>
		</div>
	</div>
</template>

<script>
	import {
		list2Tree,
		findParentsById,
		findParentsByIdIncludeSelf
	} from '@common/js/tree'

	export default {
		data() {
			return {
				"editForm": {
					start_time:"",
					end_time:""
				},
				"selectObj": [],
				"formLabelWidth": "100px",
				"typeOptions": [],
				"type": "",
				"rules": {},
				"timePeriod":[
					{
						"label":"星期一",
						"value":"Monday",
						"is_work":"1"
					},
					{
						"label":"星期二",
						"value":"Tuesday",
						"is_work":"1"
					},
					{
						"label":"星期三",
						"value":"Wednesday",
						"is_work":"1"
					},
					{
						"label":"星期四",
						"value":"Thursday",
						"is_work":"1"
					},
					{
						"label":"星期五",
						"value":"Friday",
						"is_work":"1"
					},
					{
						"label":"星期六",
						"value":"Saturday",
						"is_work":"0"
					},
					{
						"label":"星期日",
						"value":"Sunday",
						"is_work":"0"
					}
				]
			}
		},
		created() {
			this.rules = {
				"time_object": [{
					"required": true,
					"message": "请输入时间对象"
				}, ],
				"end_time": [{
					min: 0,
					max: 2147483647,
					message: '长度在 0 到 2147483647 个字符',
					trigger: 'change'
				}, ],
			}
		},
		mounted() {
			this.type = this.rjDialogParams().type;
			if (this.type === 'single') {
				let temp = JSON.parse(JSON.stringify(this.rjDialogParams().data));
				this.editForm = {
					start_time:"",
					end_time:"",
					...temp
				};
			}
			if (this.editForm.time_period == '' || this.editForm.time_period === undefined || this.editForm.time_period === null) {
				this.editForm.time_period = [];
			} else {
				if(this.editForm.time_period[0] == '每天') {
					this.editForm.time_period = [];
					this.timePeriod.forEach((it) => {
						this.editForm.time_period.push(it.value);
					});
				} else if(this.editForm.time_period[0] == '工作日'){
					this.editForm.time_period = [];
					this.timePeriod.forEach((it) => {
						if(it.is_work == '1') {
							this.editForm.time_period.push(it.value);
						}
					});
				} else if(this.editForm.time_period[0] == '周末'){
					this.editForm.time_period = [];
					this.timePeriod.forEach((it) => {
						if(it.is_work == '0') {
							this.editForm.time_period.push(it.value);
						}
					});
				} else {
					let temp = this.editForm.time_period_actual[0].split(" ");
					let tempPeroid = [];
					temp.forEach((item) => {
						tempPeroid.push(item);
					});
					console.log(tempPeroid);
					this.editForm.time_period = tempPeroid;
				}
			}
			//解析时间
			if(this.editForm.time_quantum) {
				let timeTemp = this.editForm.time_quantum[0].split("-");
				this.editForm.start_time = timeTemp[0];
				this.editForm.end_time = timeTemp[1];
			}
		},
		methods: {
			go2Submit() {
				let self = this;
				this.$refs["editForm"].validate((valid) => {
					if (valid) {
						let request = {};
						request.name = this.editForm.time_object;
						let tempTimePeriod = this.editForm.time_period;
						let tempPeriod = [];
						if (this.editForm.time_period != '' && this.editForm.time_period != undefined && this.editForm.time_period.length !=0) {
							this.editForm.time_period.forEach(function(item) {
								tempPeriod.push(item);
							});
						}
						request.periodic = tempPeriod.join(" ") + " " + this.editForm.start_time + " to " + this.editForm.end_time;
						const loading = this.$loading({
							lock: true,
							text: '处理中...',
							spinner: 'el-icon-loading',
							background: 'rgba(0, 0, 0, 0.7)'
						});
						self.$axios.put("/api/timerange", request).then((res) => {
							if (res.data.success) {
								self.$message({
									type: 'success',
									message: '修改成功!'
								});
								loading.close();
								self.closeRjDialog();
							} else {
								loading.close();
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
				});
			},
			doCancel() {
				this.closeRjDialog();
			},
		},
		filters: {}
	}
</script>
