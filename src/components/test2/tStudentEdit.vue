<template>
	<div __cid='100' id="pm_1">
		<div id="el-dialog__content" __cid='div'>
			<el-form __cid='224' id="pm_form" ref="editForm" :model="editForm" :rules="rules" :label-width="formLabelWidth">
				<el-form-item __cid='225' prop="grade_id" label="班级标识" id="pm_grade_id_form_item">
					<el-cascader filterable clearable change-on-select __cid='216' @change="findTGradeGradeIdCascaderDataItemChange"
					 :options="TGradeGradeIdOption" v-model="editForm.grade_id" id="pm_grade_id">
					</el-cascader>
				</el-form-item>
				<el-form-item __cid='225' prop="sex" label="性别" id="pm_sex_form_item">
					<el-input __cid='212' v-model.trim="editForm.sex" placeholder="请输入性别" id="pm_sex"></el-input>
				</el-form-item>
				<el-form-item __cid='225' prop="age" label="年龄" id="pm_age_form_item">
					<el-input __cid='212' v-model.trim="editForm.age" placeholder="请输入年龄" id="pm_age"></el-input>
				</el-form-item>
				<el-form-item __cid='225' prop="nature" label="性格" id="pm_nature_form_item">
					<el-input __cid='212' v-model.trim="editForm.nature" placeholder="请输入性格" id="pm_nature"></el-input>
				</el-form-item>
				<el-form-item __cid='225' prop="create_time" label="创建时间" id="pm_create_time_form_item">
					<el-date-picker __cid='220' id="pm_create_time" v-model="editForm.create_time" value-format="yyyy-MM-dd" format=""
					 type="date" placeholder="选择创建时间">
					</el-date-picker>
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
		findParentsByIdIncludeSelf,
		setChildrenByCurrentId
	} from '@common/js/tree'

	var validateInteger = (rule, value, callback) => {
		var pattern = new RegExp("^[0-9]\\d*$");
		if (value && !pattern.test(value)) {
			callback(new Error('请输入整数'));
		}
		callback();
	};
	var validateIntegerLength = (rule, value, callback) => {
		var pattern = new RegExp("^[0-9]\\d*$");
		if (!value && value !== 0) {
			callback()
		} else if (!pattern.test(value)) {
			callback(new Error('请输入整数'));
		} else if (value < rule.min) {
			callback(new Error('不能小于' + rule.min));
		} else if (value > rule.max) {
			callback(new Error('不能大于' + rule.max));
		}
		callback();
	};
	export default {
		data() {
			return {
				"editForm": {},
				"selectObj": [],
				"formLabelWidth": "100px",
				"typeOptions": [],
				"type": "",
				"rules": {},
				"TGradeGradeIdOption": [],
				"TGradeGradeIdOption1": [],
				gradeIdTemp: "",
			}
		},
		created() {
			this.rules = {
				"grade_id": [{
					"required": true,
					"message": "请输入班级标识"
				}, ],
				"age": [{
						validator: validateInteger,
						trigger: 'change'
					},
					{
						min: 1,
						max: 65536,
						validator: validateIntegerLength,
						message: '值必须在 1 到 65536 范围',
						trigger: 'change'
					},
				],
				"nature": [{
					min: 6,
					max: 10,
					message: '长度在 6 到 10 个字符',
					trigger: 'change'
				}, ],
			}
		},
		mounted() {
			this.type = this.rjDialogParams().type;
			this.editForm.grade_id = this.rjDialogParams().selectedId;
			if (this.type === 'single') {
				this.editForm = this.rjDialogParams().data;
				this.gradeIdTemp = this.editForm.grade_id;
				this.editForm.grade_id = [];
				this.selectObj.push(this.rjDialogParams().data);
			} else {
				this.selectObj = this.rjDialogParams().data;
			}
			this.findTGradeGradeIdCascaderData();
			this.findTGradeGradeIdCascaderDataAsync();
		},
		methods: {
			go2Submit() {
				let self = this;
				this.$refs["editForm"].validate((valid) => {
					if (valid) {
						let tempGradeId = this.editForm.grade_id;
						if (this.editForm.grade_id != undefined && this.editForm.grade_id.length != 0) {
							this.editForm.grade_id = this.editForm.grade_id[this.editForm.grade_id.length - 1];
						}
						const loading = this.$loading({
							lock: true,
							text: '处理中...',
							spinner: 'el-icon-loading',
							background: 'rgba(0, 0, 0, 0.7)'
						});
						self.$axios.put("/api/demo/tstudents/" + self.editForm.id, self.editForm).then((res) => {
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
								this.editForm.grade_id = tempGradeId;
							}
						}).catch((err) => {
							loading.close();
							self.$message({
								type: 'error',
								message: err.data.message || '修改失败!'
							});
							this.editForm.grade_id = tempGradeId;
							// 由axios/index.js统一处理
						});
					}
				});
			},
			doCancel() {
				this.closeRjDialog();
			},
			findTGradeGradeIdCascaderData() {
				this.$axios.get('/api/demo/tstudents/t_grade/cascader/grade_id_data').then((res) => {
					if (res.data.success) {
						var message = res.data.result;
						this.TGradeGradeIdOption = message;
					}
				}).catch((err) => {});
			},
			findTGradeGradeIdCascaderDataAsync() {
				this.$axios.get('/api/demo/tstudents/t_grade/cascader/grade_id_data/parent?id=' + this.gradeIdTemp).then(async (res) => {
					if (res.data.success) {
						var message = res.data.result;
						if (message) {
							for (let item of message) {
								await this.findTGradeGradeIdCascaderDataAwait(item.value);
							}
						}
						this.editForm.grade_id = message.map(v => v.value);
						this.editForm.grade_id.unshift("");
					}
				}).catch((err) => {});
			},
			findTGradeGradeIdCascaderData(pid) {
				this.$axios.get('/api/demo/tstudents/t_grade/cascader/grade_id_data?pid=' + pid).then((res) => {
					if (res.data.success) {
						var message = res.data.result;
						const rootTree = [{
							value: '',
							label: '全局',
							children: []
						}]
						rootTree[0].children = list2Tree(message, 0)
						this.TGradeGradeIdOption = rootTree;
					}
				}).catch((err) => {});
			},
			findTGradeGradeIdCascaderDataAwait(pid) {
				this.$axios.get('/api/demo/tstudents/t_grade/cascader/grade_id_data?pid=' + pid).then((res) => {
					if (res.data.success) {
						var message = res.data.result;
						if (message != undefined && message.length > 0) {
							setChildrenByCurrentId(this.TGradeGradeIdOption, pid, message);
						}
					}
				}).catch((err) => {});
			},
			findTGradeGradeIdCascaderDataItemChange(pid) {
				this.$axios.get('/api/demo/tstudents/t_grade/cascader/grade_id_data?pid=' + pid[pid.length - 1]).then((res) => {
					if (res.data.success) {
						var message = res.data.result;
						if (message != undefined && message.length > 0) {
							setChildrenByCurrentId(this.TGradeGradeIdOption, pid[pid.length - 1], message);
						}
					}
				}).catch((err) => {});
			},
		},
		filters: {}
	}
</script>
