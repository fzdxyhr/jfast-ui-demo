<template>
	<div __cid='100' style="padding:20px 10px;" id="pm_1">
		<div __cid='div' id="pm_2">
			<div id="seachForm" __cid='div'>
				<el-form __cid='224' id="pm_form" ref="editForm" :rules="rules" :model="editForm" :inline="true" :label-width="formLabelWidth">
					<div v-for="(item,index) in editForm.tableData" __cid="div">
						<el-form-item __cid='225' :prop="'tableData.' + index + '.name'" label="名字" :rules="rules.name" id="pm_name_form_item">
							<el-input __cid='212' v-model.trim="item.name" placeholder="请输入名字" id="pm_name"></el-input>
						</el-form-item>
						<el-form-item __cid='225' :prop="'tableData.' + index + '.sex'" :rules="rules.sex" label="性别" id="pm_sex_form_item">
							<el-select __cid='214' clearable v-model="item.sex" placeholder="请选择性别" id="pm_sex" __model='{"options":[{"label":"男","value":1},{"label":"女","value":2}]}'>
								<el-option key="1" label="男" :value="1"></el-option>
								<el-option key="2" label="女" :value="2"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item __cid='225' :prop="'tableData.' + index + '.age'" :rules="rules.age" label="年龄" id="pm_age_form_item">
							<el-select __cid='214' clearable v-model="item.age" id="pm_age" placeholder="请选择年龄" __model='{"options":[],"innerHTML":"<el-option v-for=\"item in TGradeOption3\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"></el-option>"}'>
								<el-option v-for="item in TGradeOption3" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item __cid='225' :prop="'tableData.' + index + '.class_name'" label="班级名称" :rules="rules.class_name" id="pm_class_name_form_item">
							<el-input __cid='212' v-model.trim="item.class_name" placeholder="请输入班级名称" id="pm_class_name"></el-input>
						</el-form-item>
						<el-form-item __cid='225' id="pm_delete_insert" __model='{"label":"","label-width":"0px"}'>
							<span style="cursor:pointer;margin-right:10px;" __cid='el-custom-icon' __model='{"name":"el-icon-plus"}' v-show="index == editForm.tableData.length - 1"
							 @click="addData"><i class="el-icon-plus"></i></span>
							<span style="cursor:pointer;" __cid='el-custom-icon' __model='{"name":"el-icon-minus"}' @click="deleteData(item,index)"><i
								 class="el-icon-minus"></i></span>
						</el-form-item>
						<div class="clearfix"></div>
					</div>
				</el-form>
			</div>
			<div style="margin: 10px 0;" __cid='div'>
				<el-button __cid='el-button' __model='{"name":"保 存"}' type="primary" @click="go2BatchUpdate" id="pm_add">保 存</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		list2Tree,
		findParentsById,
		findParentsByIdIncludeSelf
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
				"query": {},
				"formLabelWidth": "100px",
				"rules": {},
				"editForm": {
					"tableData": [{
						"name": "",
						"sex": "",
						"age": "",
						"class_name": "",
					}]
				},
				"TGradeOption3": [],
			}
		},
		created() {
			this.rules = {
				"name": [{
					min: 0,
					max: 2147483647,
					message: '长度在 0 到 2147483647 个字符',
					trigger: 'change'
				}, ],
				"class_name": [{
					min: 0,
					max: 2147483647,
					message: '长度在 0 到 2147483647 个字符',
					trigger: 'change'
				}, ],
			}
		},
		mounted() {
			this.go2Query();
			this.getTGradeselectData3();
		},
		methods: {

			deleteData(item, index) {
				let self = this;
				if (item.id == '' || item.id == undefined) {
					self.editForm.tableData.splice(index, 1);
				} else {
					self.go2Del(item.id);
				}
			},
			addData() {
				let temp = {
					"name": "",
					"sex": "",
					"age": "",
					"class_name": "",
				};
				this.editForm.tableData.push(temp);
			},
			go2Query() {
				this.query.page = 1;
				this.query.size = 10000000;
				this.$axios.post('/api/demo/users/byPage', this.query).then((res) => {
					if (res.data.success) {
						var message = res.data.result;
						this.editForm.tableData = message.list;
						if (this.editForm.tableData.length == 0) {
							this.addData();
						}
					}
				}).catch((err) => {});
			},
			go2Del(id) {
				this.$confirm('删除操作将立即生效, 是否继续?', '删除提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$axios.delete('/api/demo/users/' + id, ).then((res) => {
						if (res.data.success) {
							this.$message({
								type: 'success',
								message: '删除成功!'
							});
							this.go2Query();
						} else {
							this.$message({
								type: 'error',
								message: res.data.message || '删除失败!'
							});
						}
					}).catch((err) => {});
				}).catch(() => {});
			},
			go2BatchUpdate() {
				let self = this;
				this.$refs["editForm"].validate((valid) => {
					if (valid) {
						const loading = this.$loading({
							lock: true,
							text: '处理中...',
							spinner: 'el-icon-loading',
							background: 'rgba(0, 0, 0, 0.7)'
						});
						self.$axios.put("/api/demo/users/insert_update", this.editForm.tableData).then((res) => {
							loading.close();
							if (res.data.success) {
								self.$message({
									type: 'success',
									message: '修改成功!'
								});
								self.go2Query();
							} else {
								self.$message({
									type: 'error',
									message: res.data.message || '修改失败!'
								});
							}
						}).catch((err) => {
							// 由axios/index.js统一处理
							loading.close();
							self.$message({
								type: 'error',
								message: err.data.message || '修改失败!'
							});
						});
					}
				});
			},
			getTGradeselectData3() {
				this.$axios.get('/api/demo/users/t_grade/select_data').then((res) => {
					if (res.data.success) {
						var message = res.data.result;
						this.TGradeOption3 = message;
					}
				}).catch((err) => {});
			},
		},
		filters: {

		}
	}
</script>
<style scoped>
</style>
