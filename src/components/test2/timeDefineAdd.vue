<template>
	<div __cid='100' id="pm_1">
		<div id="el-dialog__content" __cid='div'>
			<el-form __cid='224' id="pm_form" ref="addForm" :model="addForm" :label-width="formLabelWidth" :rules="rules">
				<el-form-item __cid='225' prop="time_object" label="时间对象" id="pm_time_object_form_item">
					<el-input __cid='212' v-model.trim="addForm.time_object" placeholder="请输入时间对象" id="pm_time_object"></el-input>
				</el-form-item>
				<el-form-item __cid='225' prop="time_period" label="时间周期" id="pm_time_period_form_item">
					<el-select __cid='214' multiple v-model="addForm.time_period" placeholder="请选择时间周期" id="pm_time_period" __model='{"options":[]}'>
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
					<el-time-select __cid='219' id="pm_start_time" placeholder="开始时间时间" v-model="addForm.start_time" :picker-options='{start: "06:00",step: "00:15",end: "21:00"
                                                                        ,minTime:"00:00",maxTime:"23:59"}'>
					</el-time-select>
				</el-form-item>
				<el-form-item __cid='225' prop="end_time" label="结束时间" id="pm_end_time_form_item">
					<el-time-select __cid='219' id="pm_end_time" placeholder="结束时间时间" v-model="addForm.end_time" :picker-options='{start: "06:00",step: "00:15",end: "21:00"
                                                                        ,minTime:addForm.start_time}'>
					</el-time-select>
				</el-form-item>
			</el-form>
		</div>
		<div __cid="div" id="el-dialog__btn" style="text-align: right">
			<el-button __cid='el-button' @click="doCancel" __model='{"name":"取 消"}' id="pm_cancel">取 消</el-button>
			<el-button __cid='el-button' type="primary" @click="go2Submit" __model='{"name":"保 存"}' id="pm_save">保 存</el-button>
		</div>
	</div>
</template>

<script>
	import {
		list2Tree,
		findParentsById
	} from '@common/js/tree'

	export default {
		data() {
			return {
				"addForm": {
					"time_period": [],
				},
				"formLabelWidth": "100px",
				"typeOptions": [],
				"rules": {},
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
		mounted() {},
		methods: {
			go2Submit() {
				this.$refs["addForm"].validate((valid) => {
					if (valid) {
						let request = {};
						request.name = this.addForm.time_object;
						let tempTimePeriod = this.addForm.time_period;
						let tempPeriod = [];
						if (this.addForm.time_period != '' && this.addForm.time_period != undefined && this.addForm.time_period.length !=
							0) {
							this.addForm.time_period.forEach(function(item) {
								tempPeriod.push(item);
							});
						}
						request.periodic = tempPeriod.join(" ") + " " + this.addForm.start_time + " to " + this.addForm.end_time;
						const loading = this.$loading({
							lock: true,
							text: '处理中...',
							spinner: 'el-icon-loading',
							background: 'rgba(0, 0, 0, 0.7)'
						});
						this.$axios.post("/api/timerange", request).then((res) => {
							if (res.data.success) {
								this.$message({
									type: 'success',
									message: '添加成功!'
								});
								loading.close();
								this.closeRjDialog();
							} else {
								loading.close();
								this.$message({
									type: 'error',
									message: res.data.message || '添加失败!'
								});
								this.addForm.time_period = tempTimePeriod;
							}
						}).catch((err) => {
							loading.close();
							this.$message({
								type: 'error',
								message: err.data.message || '添加失败!'
							});
							this.addForm.time_period = tempTimePeriod;
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
<style scoped>
</style>
