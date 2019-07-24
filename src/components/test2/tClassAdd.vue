<template>
	<div __cid='100' id="pm_1">
		<div id="el-dialog__content" __cid='div'>
			<el-form __cid='224' id="pm_form" ref="addForm" :model="addForm" :label-width="formLabelWidth" :rules="rules">
				<el-form-item __cid='225' prop="name" label="班级名" id="pm_name_form_item">
					<el-input __cid='212' v-model.trim="addForm.name" placeholder="请输入班级名" id="pm_name"></el-input>
				</el-form-item>
				<el-form-item __cid='225' prop="type" label="班级类型" id="pm_type_form_item">
					<el-input __cid='212' v-model.trim="addForm.type" placeholder="请输入班级类型" id="pm_type"></el-input>
				</el-form-item>
				<el-form-item __cid='225' prop="grade_id" label="学院" id="pm_grade_id_form_item">
					<el-cascader filterable clearable change-on-select __cid='216' @change="getTGradecascaderData3ItemChange" :options="TGradeOption3"
					 v-model="addForm.grade_id" id="pm_grade_id">
					</el-cascader>

				</el-form-item>
				<el-form-item __cid='225' prop="class_code" label="班级编码" id="pm_class_code_form_item">
					<el-input __cid='212' v-model.trim="addForm.class_code" placeholder="请输入班级编码" id="pm_class_code"></el-input>
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
		findParentsById,
		setChildrenByCurrentId
	} from '@common/js/tree'

	export default {
		data() {
			return {
				"addForm": {},
				"formLabelWidth": "100px",
				"typeOptions": [],
				"rules": {},
				"TGradeOption3": [],
			}
		},
		created() {
			this.rules = {}
		},
		mounted() {
			this.addForm.grade_id = this.rjDialogParams().selectedId;
			this.getTGradecascaderData3();
			this.getTGradecascaderData3All();
		},
		methods: {
			go2Submit() {
				this.$refs["addForm"].validate((valid) => {
					if (valid) {
						let tempGradeId = this.addForm.grade_id;
						if (this.addForm.grade_id != undefined && this.addForm.grade_id.length != 0) {
							this.addForm.grade_id = this.addForm.grade_id[this.addForm.grade_id.length - 1];
						}
						const loading = this.$loading({
							lock: true,
							text: '处理中...',
							spinner: 'el-icon-loading',
							background: 'rgba(0, 0, 0, 0.7)'
						});
						this.$axios.post("/api/demo/tclasss", this.addForm).then((res) => {
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
								this.addForm.grade_id = tempGradeId;
							}
						}).catch((err) => {
							loading.close();
							this.$message({
								type: 'error',
								message: err.data.message || '添加失败!'
							});
							this.addForm.grade_id = tempGradeId;
						});
					}
				});
			},
			doCancel() {
				this.closeRjDialog();
			},
			getTGradecascaderData3(pid) {
				this.$axios.get('/api/demo/tclasss/t_grade/cascader_data?pid=' + pid).then((res) => {
					if (res.data.success) {
						var message = res.data.result;
						const rootTree = [{
							value: '',
							label: '全局',
							children: []
						}]
						rootTree[0].children = list2Tree(message, 0)
						this.TGradeOption3 = rootTree;
					}
				}).catch((err) => {});
			},
			getTGradecascaderData3ItemChange(pid) {
				this.$axios.get('/api/demo/tclasss/t_grade/cascader_data?pid=' + pid[pid.length - 1]).then((res) => {
					if (res.data.success) {
						var message = res.data.result;
						if (message != undefined && message.length > 0) {
							setChildrenByCurrentId(this.TGradeOption3, pid[pid.length - 1], message);
						}
					}
				}).catch((err) => {});
			},
		},
		filters: {}
	}
</script>
<style scoped>
</style>
