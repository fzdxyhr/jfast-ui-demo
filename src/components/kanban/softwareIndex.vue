<template>
	<div id="p_1850_28" class="software-index">
		<div id="p_1850_29" class="__p_1850_uid_29">
			<span id="p_1850_39" class="__p_1850_uid_39">项目关键数据跟踪看板</span>
			<div id="p_1850_31" class="__p_1850_uid_31">
				<el-radio-group value="1559036913135" v-model="projectType" size="small" id="p_1850_32" class="__p_1850_uid_32"
				 @change="findProjects">
					<el-radio-button label="软件项目" id="p_1850_33">软件项目</el-radio-button>
					<el-radio-button label="硬件项目" id="p_1850_34">硬件项目</el-radio-button>
				</el-radio-group>
				<el-radio-group size="small" id="p_1850_35" v-model="business_dept_name" @change="findProjects">
					<el-radio-button label="" id="p_1850_36">全部</el-radio-button>
					<el-radio-button v-for="item in departmentData" :label="item.value">{{item.label}}</el-radio-button>
				</el-radio-group>
			</div>
		</div>
		<div id="p_1850_40" :class="index ===0?'__p_1850_uid_40':'__p_1850_uid_401'" v-for="(item,index) in projects">
			<div style="color: #17A2B8;font-size: 25px;margin-bottom: 15px;float: left;">
				{{item.project_name}}
			</div>
			<!-- <div :class="projectType === '软件项目'?'__p_1850_uid_521':'__p_1850_uid_522'">
        <span>总耗时:{{item.total_consume_time?item.total_consume_time.toFixed(1):0}}h</span>
        <span style="padding-left: 10px;">开发:{{item.development_time?item.development_time.toFixed(1):0}}h</span>
        <span style="padding-left: 10px;">占比:{{item.development_percent?item.development_percent:0}}%</span>
        <span style="padding-left: 10px;">测试:{{item.test_time?item.test_time.toFixed(1):0}}h</span>
        <span style="padding-left: 10px;">占比:{{item.test_percent?item.test_percent:0}}%</span>
      </div> -->
			<div id="p_1850_52" class="__p_1850_uid_52" v-if="projectType === '软件项目'">
				<div id="p_1850_56" class="__p_1850_uid_56"><span id="p_1850_57" class="__p_1850_uid_57">总耗时(h)</span><span id="p_1850_58"
					 class="__p_1850_uid_58">{{item.total_consume_time?item.total_consume_time.toFixed(1):0}}</span></div>
				<div id="p_1850_56" class="__p_1850_uid_56"><span id="p_1850_57" class="__p_1850_uid_57">开发(h)</span><span id="p_1850_58"
					 class="__p_1850_uid_58">{{item.development_time?item.development_time.toFixed(1):0}}</span></div>
				<div id="p_1850_56" class="__p_1850_uid_56"><span id="p_1850_57" class="__p_1850_uid_57">占比</span><span id="p_1850_58"
					 class="__p_1850_uid_58">{{item.development_percent?item.development_percent:0}}%</span></div>
				<div id="p_1850_56" class="__p_1850_uid_56"><span id="p_1850_57" class="__p_1850_uid_57">测试(h)</span><span id="p_1850_58"
					 class="__p_1850_uid_58">{{item.test_time?item.test_time.toFixed(1):0}}</span></div>
				<div id="p_1850_56" class="__p_1850_uid_56"><span id="p_1850_57" class="__p_1850_uid_57">占比</span><span id="p_1850_58"
					 class="__p_1850_uid_58">{{item.test_percent?item.test_percent:0}}%</span></div>
				<div id="p_1850_56" class="__p_1850_uid_56"><span id="p_1850_57" class="__p_1850_uid_57">总代码量(Kloc)</span><span id="p_1850_58"
					 class="__p_1850_uid_58">{{item.code_total_amount?item.code_total_amount:0}}</span></div>
				<!-- <div id="p_1850_59" class="__p_1850_uid_59"><span id="p_1850_60" class="__p_1850_uid_60">新增代码量(Kloc)</span><span id="p_1850_61"
					 class="__p_1850_uid_61">{{item.new_code_amount?item.new_code_amount.toFixed(1):0}}</span></div>
				<div id="p_1850_65" class="__p_1850_uid_65"><span id="p_1850_66" class="__p_1850_uid_66">总代码重复度</span><span id="p_1850_67"
					 class="__p_1850_uid_67">{{item.code_duplication?item.code_duplication*100:0}}%</span></div>
				<div id="p_1850_68" class="__p_1850_uid_68"><span id="p_1850_69" class="__p_1850_uid_69">新增代码重复度</span><span id="p_1850_70"
					 class="__p_1850_uid_70">{{item.new_code_duplication?item.new_code_duplication*100:0}}%</span></div>
				<div id="p_1850_71" class="__p_1850_uid_71"><span id="p_1850_72" class="__p_1850_uid_72">集成测试缺陷数</span><span id="p_1850_73"
					 class="__p_1850_uid_73">{{item.integration_test_defects_amount?item.integration_test_defects_amount:0}}</span></div>
				<div id="p_1850_74" class="__p_1850_uid_74"><span id="p_1850_75" class="__p_1850_uid_75">内测缺陷数</span><span id="p_1850_76"
					 class="__p_1850_uid_76">{{item.inner_test_defects_amount?item.inner_test_defects_amount:0}}</span></div>
				<div id="p_1850_77" class="__p_1850_uid_77"><span id="p_1850_78" class="__p_1850_uid_78">遗留BUG数</span><span id="p_1850_79"
					 class="__p_1850_uid_79">{{item.legacy_bug_amount?item.legacy_bug_amount:0}}</span></div>
				<div id="p_1850_62" class="__p_1850_uid_62"><span id="p_1850_63" class="__p_1850_uid_63">BLOCK BUG数</span><span id="p_1850_64"
					 class="__p_1850_uid_64">{{item.block_bug_amount?item.block_bug_amount:0}}</span></div> -->
			</div>
			<div id="p_1850_52" class="__p_1850_uid_521" v-if="projectType === '硬件项目'">
				<div id="p_1850_56" class="__p_1850_uid_56"><span id="p_1850_57" class="__p_1850_uid_57">总耗时(h)</span><span id="p_1850_58"
					 class="__p_1850_uid_58">{{item.total_consume_time?item.total_consume_time.toFixed(1):0}}</span></div>
				<div id="p_1850_56" class="__p_1850_uid_56"><span id="p_1850_57" class="__p_1850_uid_57">开发(h)</span><span id="p_1850_58"
					 class="__p_1850_uid_58">{{item.development_time?item.development_time.toFixed(1):0}}</span></div>
				<div id="p_1850_56" class="__p_1850_uid_56"><span id="p_1850_57" class="__p_1850_uid_57">占比</span><span id="p_1850_58"
					 class="__p_1850_uid_58">{{item.development_percent?item.development_percent:0}}%</span></div>
				<div id="p_1850_56" class="__p_1850_uid_56"><span id="p_1850_57" class="__p_1850_uid_57">测试(h)</span><span id="p_1850_58"
					 class="__p_1850_uid_58">{{item.test_time?item.test_time.toFixed(1):0}}</span></div>
				<div id="p_1850_56" class="__p_1850_uid_56"><span id="p_1850_57" class="__p_1850_uid_57">占比</span><span id="p_1850_58"
					 class="__p_1850_uid_58">{{item.test_percent?item.test_percent:0}}%</span></div>
			</div>
			<v-chart :ref="'vchart_'+index" :options="item.options" autoresize id="p_1850_41" class="__p_1850_uid_41"></v-chart>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				projectType: "硬件项目",
				business_dept_name: "",
				projects: [],
        departmentData:[],
				"options": {
					"title": {
						"text": "",
						"subtext": "小时（h）",
						"textStyle": {
							"color": "#fff",
							"fontSize": "18",
							"fontWeight": " normal"
						},
						"subtextStyle": {
							"color": "#ffffff"
						}
					},
					tooltip: {
						trigger: 'item',
						// alwaysShowContent: true
					},
					legend: {},
					"color": "#17A2B8",
					"toolbox": {
						"show": false,
						"feature": {
							"dataView": {
								"show": true,
								"readOnly": false
							},
							"magicType": {
								"show": false,
								"type": ["line", "bar"]
							},
							"restore": {
								"show": false
							},
							"saveAsImage": {
								"show": true
							}
						}
					},
					calculable: true,
					xAxis: {
						boundaryGap: false,
						type: 'category',
						axisTick: {
							show: false,
						},
						"axisLabel": {
							"color": "#ffffff"
						},
						"axisLine": {
							"lineStyle": {
								"color": "#5E6A80"
							}
						},
						data: []
					},
					"yAxis": [{
						"type": "value",
						"axisLabel": {
							"color": "#ffffff"
						},
						"splitLine": {
							"lineStyle": {
								"color": "#5E6A80"
							}
						},
						"axisLine": {
							"lineStyle": {
								"color": "#5E6A80"
							}
						}
					}],
					series: [{
						color: "#17A2B8",
						type: 'bar',
						barWidth: '30',
						data: [],
            stack: '搜索引擎',
						markPoint: {
							symbol: 'circle',
							symbolSize: 25,
							tooltip: {
								show: false,
							},
							data: []
						}
					},
          {
          	color: "#CEA926",
          	type: 'bar',
          	barWidth: '30',
          	data: [],
            stack: '搜索引擎',
          	markPoint: {
          		symbol: 'circle',
          		symbolSize: 25,
          		tooltip: {
          			show: false,
          		},
          		data: []
          	}
          },
          {
          	color: "green",
          	type: 'bar',
          	barWidth: '30',
          	data: [],
          	stack: '搜索引擎',
          	markPoint: {
          		symbol: 'circle',
          		symbolSize: 25,
          		tooltip: {
          			show: false,
          		},
          		data: []
          	}
          }]
				}
			}
		},
		mounted() {
			this.findProjects()
      this.findDepartment()
		},
		methods: {
      findDepartment(){
      	this.$axios
      		.get("/api/v0.1/project/department")
      		.then((response) => {
      			let message = response.data;
      			this.departmentData = message;
      		}).catch(function(error) {
      			console.log(error);
      		});
      },
			findProjects() {
				this.$axios
					.get("/api/v0.1/projects/statistic?project_type=" + this.projectType + "&business_dept_name=" + this.business_dept_name)
					.then((response) => {
						let message = response.data;
						message.forEach((item) => {
							let tempOptions = JSON.parse(JSON.stringify(this.options))
							let xData = [];
							let yData = [];
              let yDevData = [];
              let yTestData = [];
							let markData = []
							let totalDays = 0
							let total_consume_time = 0;
							let development_time = 0
							let test_time = 0
							item.project_stage_vos.forEach((it) => {
								totalDays = totalDays + (it.total_day_nums ? it.total_day_nums : 0)
								total_consume_time = total_consume_time + it.total_consume_time
								development_time = development_time + it.development_time
								test_time = test_time + it.test_time
							})
							let splitStantard = parseInt(totalDays / item.project_stage_vos.length * 2)
							for (let index = 0; index < item.project_stage_vos.length; index++) {
								let tempItem = item.project_stage_vos[index]
								let valueItem = item.project_stage_vos[index + 1]
								let temp = {
									value: tempItem.stage_name + '\n' + tempItem.create_time + '',
									status: tempItem.status,
									textStyle: {
										padding: 10
									}
								}
								xData.push(temp)
								yData.push(0)
                yDevData.push(0)
                yTestData.push(0)
								if (valueItem) {
									let split = parseInt(valueItem.total_day_nums / splitStantard);
									for (let i = 0; i < split; i++) {
										xData.push({
											value: ''
										})
										yData.push(0)
                    yDevData.push(0)
                    yTestData.push(0)
									}
									xData.push({
										value: ''
									})
									yData.push({
										value: 0,
										tooltip: {
											show: true,
											formatter: `总耗时: ${valueItem.total_consume_time?valueItem.total_consume_time:0}小时<br/>开发: ${valueItem.development_time?valueItem.development_time:0}小时(${valueItem.development_percent?valueItem.development_percent:0}%)<br/>测试: ${valueItem.test_time?valueItem.test_time:0}小时(${valueItem.test_percent?valueItem.test_percent:0}%)`
										},
                    label:{
                    	show:false,
                      // align:"left",
                      color: "white",
                    	formatter:`总耗时: ${valueItem.total_consume_time?valueItem.total_consume_time:0}小时\n开发: ${valueItem.development_time?valueItem.development_time:0}小时(${valueItem.development_percent?valueItem.development_percent:0}%)\n测试: ${valueItem.test_time?valueItem.test_time:0}小时(${valueItem.test_percent?valueItem.test_percent:0}%)`
                    },
                    label:{
                    	show:true,
                      position:"top",
                      // offset:[0,-10],
                    	color: "white",
                    	formatter:`${valueItem.total_consume_time?valueItem.total_consume_time:0}h`
                    },
									})
                  yDevData.push({
                  	value: valueItem.development_time ? valueItem.development_time : 0,
                  	tooltip: {
                  		show: true,
                  		formatter: `总耗时: ${valueItem.total_consume_time?valueItem.total_consume_time:0}小时<br/>开发: ${valueItem.development_time?valueItem.development_time:0}小时(${valueItem.development_percent?valueItem.development_percent:0}%)<br/>测试: ${valueItem.test_time?valueItem.test_time:0}小时(${valueItem.test_percent?valueItem.test_percent:0}%)`
                  	},
                  	label:{
                  		show:false,
                  		align:"left",
                  		offset:[0,-20],
                  		color: "white",
                  		formatter:`总耗时: ${valueItem.total_consume_time?valueItem.total_consume_time:0}小时\n开发: ${valueItem.development_time?valueItem.development_time:0}小时(${valueItem.development_percent?valueItem.development_percent:0}%)\n测试: ${valueItem.test_time?valueItem.test_time:0}小时(${valueItem.test_percent?valueItem.test_percent:0}%)`
                  	},
                    label:{
                    	show:false,
                    	color: "white",
                    	formatter:`${valueItem.development_time?valueItem.development_time:0}h(${valueItem.development_percent?valueItem.development_percent:0}%)`
                    },
                  })
                  yTestData.push({
                  	value: valueItem.test_time ? valueItem.test_time : 0,
                  	tooltip: {
                  		show: true,
                  		formatter: `总耗时: ${valueItem.total_consume_time?valueItem.total_consume_time:0}小时<br/>开发: ${valueItem.development_time?valueItem.development_time:0}小时(${valueItem.development_percent?valueItem.development_percent:0}%)<br/>测试: ${valueItem.test_time?valueItem.test_time:0}小时(${valueItem.test_percent?valueItem.test_percent:0}%)`
                  	},
                  	label:{
                  		show:false,
                  		color: "white",
                  		formatter:`${valueItem.test_time?valueItem.test_time:0}h(${valueItem.test_percent?valueItem.test_percent:0}%)`
                  	},
                  })
									for (let i = 0; i < split; i++) {
										xData.push({
											value: ''
										})
										yData.push(0)
                    yDevData.push(0)
                    yTestData.push(0)
									}
								}
								xData.forEach((it, idx) => {
									if (it.value) {
										if (it.status === 1) {
											markData.push({
												name: '',
												value: '',
												symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2N0Q0OUFBRkM0N0FFOTExODQ5RUQxRDNGQzUwMUZGRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRkFDNEJDMDgxQzQxMUU5QjA1QzlFMEVGOTk3N0JCMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRkFDNEJCRjgxQzQxMUU5QjA1QzlFMEVGOTk3N0JCMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwMTE1RDU4Mjk4MUU5MTE4RDlBQzgxMzgxQTY0NzVEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY3RDQ5QUFGQzQ3QUU5MTE4NDlFRDFEM0ZDNTAxRkZFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+v4l01QAAATFJREFUeNpi/B+czYAFyANxBBB7AbEKEIsA8RsgvgvEW4F4BRA/RNfEiGYYJxC3AnEOELMy4Aa/gXgqEFcD8TeYIBOSAlEgPgrEhQQMYoDKFwDxEag+FMPYgHgzEBsykAYMofrYkQ3rBGJzBvIASF8HzDA5aBhRAkD6FUCGJQExC4WGgfQnggxzYaAOcAUZpoQiFOXLwLCkF0ITw0cAdZBhwihCfkCHcgAjx8uBOD4CCIEMe4sitGkPA8PPXwwM2w4Qx0eAd6AcAEp41lQIs+Mgl+2lUgTsBhk2F4j/UGgQSP98kGGPgHgKhYaBMv0DWHYqB+KTZBp0EqofnjeB0cMASjjnSTToPFTfT/Qi6DUQ2wDxJCLC8A9UnQ1UH9bCEQYUoCWtNxAr4yhpH6BrAggwANYOTrEiemTgAAAAAElFTkSuQmCC',
												xAxis: idx,
												yAxis: 0
											})
										} else if (it.status === 2) {
											markData.push({
												name: '',
												value: '',
												symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2N0Q0OUFBRkM0N0FFOTExODQ5RUQxRDNGQzUwMUZGRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRjhBQzE3MDgxQzQxMUU5QjA1QzlFMEVGOTk3N0JCMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRjhBQzE2RjgxQzQxMUU5QjA1QzlFMEVGOTk3N0JCMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwMTE1RDU4Mjk4MUU5MTE4RDlBQzgxMzgxQTY0NzVEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY3RDQ5QUFGQzQ3QUU5MTE4NDlFRDFEM0ZDNTAxRkZFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vMoqZAAAAaRJREFUeNqclL9LQmEUho+lV0XLSKMgyiihNfs5FLRoQ1FDU2M1B9XU0BzUFEiNUbRUi0sEUhQNRdhi/4CgQhFoQZGZWtF74rvyecm6txeewXO/8yjnej5T426EfogXTIFR4AMekAFxcAT2QVLbZNLI7GAFzAELVU4RbIJl8KoWq6QDDeASLP4hIvF8AVyIvjKZAg6Bn4zFL/qssmwNDND/wn2rqqxVzEh3Ouuc1OywySXub2PZLDAbEYWDfRQe6acmu1Utc/8MywJGRW6bQvHnLD0WivLjIMva5YpSXUU1FvOvorO7DE2fx6jw8Vl2hGVuWbQz7KeDQC/VSkIdIk49yx5KnxQL+VwO6va4aC/Q8y3UKeI88gbwH29QrfBb4uF6nXa6eXiiFoddj4hzxb/sVK7cZt9o8viaki856nK79Io4JyzbAu8/CVMQ6hRx/zZPOQU2xK6VCSci0e/X/4eIxNIn1HVaAlHtiftcXo8oKvpLu1kA4yBmcC9joi+vvYLSYAiEtDOsMKOQOJ+Wd0oOX3TzYF3ctGOgo8JNm9B+w5cAAwDqTZkad8R2IgAAAABJRU5ErkJggg==',
												xAxis: idx,
												yAxis: 0
											})
										} else if (it.status === 0) {
											markData.push({
												name: '',
												value: '',
												symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2N0Q0OUFBRkM0N0FFOTExODQ5RUQxRDNGQzUwMUZGRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRkFDNEJDNDgxQzQxMUU5QjA1QzlFMEVGOTk3N0JCMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRkFDNEJDMzgxQzQxMUU5QjA1QzlFMEVGOTk3N0JCMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwMTE1RDU4Mjk4MUU5MTE4RDlBQzgxMzgxQTY0NzVEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY3RDQ5QUFGQzQ3QUU5MTE4NDlFRDFEM0ZDNTAxRkZFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mLwSVwAAARFJREFUeNpi9A5NY8AC5IE4Aoi9gFgFiEWA+A0Q3wXirUC8AogfomtiQeNzAnErEOcAMSuanBQU2wJxMxBPBeJqIP4GU8CEpFgUiI8CcSEWg9ABSL4AiI9A9aEYxgbEm4HYkIE0YAjVx45sWCcQmzOQB0D6OmCGyUHDiBIA0q8AMiwJS0SQCkD6E0GGuTBQB7iCDFOikmHqIMOEqWSYEMiwt1Qy7B3IsHtUMuwmyLC9VDJsN8iwuUD8h0KDQPrngwx7BMRTKDQMlOkfwLJTORCfJNOgk1D98Lz5C4h9gfg8iQadh+r7iV4EvQZiGyCeREQY/oGqs4Hqw1o4ggq6fCDuh5a03kCsjKOkfYBuA0CAAQASajEFilIQEAAAAABJRU5ErkJggg==',
												xAxis: idx,
												yAxis: 0
											})
										} else {
											markData.push({
												name: '',
												value: '',
												symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2N0Q0OUFBRkM0N0FFOTExODQ5RUQxRDNGQzUwMUZGRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRjhBQzE3MDgxQzQxMUU5QjA1QzlFMEVGOTk3N0JCMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRjhBQzE2RjgxQzQxMUU5QjA1QzlFMEVGOTk3N0JCMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwMTE1RDU4Mjk4MUU5MTE4RDlBQzgxMzgxQTY0NzVEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY3RDQ5QUFGQzQ3QUU5MTE4NDlFRDFEM0ZDNTAxRkZFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vMoqZAAAAaRJREFUeNqclL9LQmEUho+lV0XLSKMgyiihNfs5FLRoQ1FDU2M1B9XU0BzUFEiNUbRUi0sEUhQNRdhi/4CgQhFoQZGZWtF74rvyecm6txeewXO/8yjnej5T426EfogXTIFR4AMekAFxcAT2QVLbZNLI7GAFzAELVU4RbIJl8KoWq6QDDeASLP4hIvF8AVyIvjKZAg6Bn4zFL/qssmwNDND/wn2rqqxVzEh3Ouuc1OywySXub2PZLDAbEYWDfRQe6acmu1Utc/8MywJGRW6bQvHnLD0WivLjIMva5YpSXUU1FvOvorO7DE2fx6jw8Vl2hGVuWbQz7KeDQC/VSkIdIk49yx5KnxQL+VwO6va4aC/Q8y3UKeI88gbwH29QrfBb4uF6nXa6eXiiFoddj4hzxb/sVK7cZt9o8viaki856nK79Io4JyzbAu8/CVMQ6hRx/zZPOQU2xK6VCSci0e/X/4eIxNIn1HVaAlHtiftcXo8oKvpLu1kA4yBmcC9joi+vvYLSYAiEtDOsMKOQOJ+Wd0oOX3TzYF3ctGOgo8JNm9B+w5cAAwDqTZkad8R2IgAAAABJRU5ErkJggg==',
												xAxis: idx,
												yAxis: 0
											})
										}
									}
								})
							}
							tempOptions.xAxis.data = xData
							tempOptions.series[0].data = yTestData
							tempOptions.series[0].markPoint.data = markData
              tempOptions.series[1].data = yDevData
              tempOptions.series[1].markPoint.data = markData
              tempOptions.series[2].data = yData
              tempOptions.series[2].markPoint.data = markData
							// tempOptions.title.text = item.project_name
							item.options = tempOptions
							item.total_consume_time = total_consume_time
							item.development_time = development_time
							item.test_time = test_time
							item.development_percent = (development_time * 100 / total_consume_time).toFixed(0)
							item.test_percent = (test_time * 100 / total_consume_time).toFixed(0)
						})
						this.projects = message
// 						this.$nextTick(() => {
// 							this.projects.forEach((item, index) => {
// 								item.options.series[0].data.forEach((it, idx) => {
// 									if (it != 0) {
// 										console.log(this.$refs)
// 										this.$refs['vchart_' + index][0].dispatchAction({
// 											type: "showTip",
// 											seriesIndex: 0,
// 											dataIndex: idx
// 										})
// 									}
// 								})
// 							})
// 						});
					}).catch(function(error) {
						console.log(error);
					});
			}
		}
	}
</script>
<style lang="scss">
	.software-index {

		background: #434B5A;
		overflow: auto;

		.el-radio-button__orig-radio:checked+.el-radio-button__inner {
			background-color: rgb(23, 162, 184);
			border-color: rgb(23, 162, 184);
		}

		.el-radio-button__inner {
			background: rgb(52, 58, 64);
			color: rgb(23, 162, 184);
			border: 1px solid rgb(23, 162, 184);
		}

		.el-radio-button:first-child .el-radio-button__inner {
			border-left: 1px solid rgb(23, 162, 184);
		}

		.__p_1850_uid_39 {
			font-size: 18px;
			color: #FFFFFF;
			flex: 1;
			padding-top: 5px;
			padding-bottom: 5px;
			line-height: 32px;
		}

		.__p_1850_uid_32 {
			margin-right: 20px;
		}

		.__p_1850_uid_31 {
			height: 32px;
		}

		.__p_1850_uid_29 {
			background: #345d;
			display: flex;
			padding-top: 10px;
			padding-bottom: 10px;
			padding-left: 10px;
			padding-right: 10px;
		}

		.__p_1850_uid_57 {
			font-size: 12px;
			color: #FFFFFF;
		}

		.__p_1850_uid_58 {
			font-size: 20px;
			color: #FFFFFF;
			display: block;
		}

		.__p_1850_uid_56 {
			flex: 1;
		}

		.__p_1850_uid_60 {
			font-size: 12px;
			color: #FFFFFF;
		}

		.__p_1850_uid_61 {
			font-size: 20px;
			color: #FFFFFF;
			display: block;
		}

		.__p_1850_uid_59 {
			flex: 1;
		}

		.__p_1850_uid_66 {
			font-size: 12px;
			color: #FFFFFF;
		}

		.__p_1850_uid_67 {
			font-size: 24px;
			color: #FFFFFF;
			display: block;
		}

		.__p_1850_uid_65 {
			flex: 1;
		}

		.__p_1850_uid_69 {
			font-size: 12px;
			color: #FFFFFF;
		}

		.__p_1850_uid_70 {
			font-size: 24px;
			color: #FFFFFF;
			display: block;
		}

		.__p_1850_uid_68 {
			flex: 1;
		}

		.__p_1850_uid_72 {
			font-size: 12px;
			color: #FFFFFF;
		}

		.__p_1850_uid_73 {
			font-size: 24px;
			color: #FFFFFF;
			display: block;
		}

		.__p_1850_uid_71 {
			flex: 1;
		}

		.__p_1850_uid_75 {
			font-size: 12px;
			color: #FFFFFF;
		}

		.__p_1850_uid_76 {
			font-size: 24px;
			color: #FFFFFF;
			display: block;
		}

		.__p_1850_uid_74 {
			flex: 1;
		}

		.__p_1850_uid_78 {
			font-size: 12px;
			color: #FFFFFF;
		}

		.__p_1850_uid_79 {
			font-size: 24px;
			color: #FFFFFF;
			display: block;
		}

		.__p_1850_uid_77 {
			flex: 1;
		}

		.__p_1850_uid_63 {
			font-size: 12px;
			color: #FFFFFF;
		}

		.__p_1850_uid_64 {
			font-size: 24px;
			color: #FFFFFF;
			display: block;
		}

		.__p_1850_uid_62 {
			flex: 1;
		}

		.__p_1850_uid_52 {
			width: 50%;
			height: 50px;
			display: flex;
      float: right;
			// position: absolute;
			// right: 0;
			// z-index: 10;
		}

		.__p_1850_uid_521 {
			// text-align: right;
			width: 50%;
			height: 50px;
			display: flex;
      float: right;
			// position: absolute;
			// right: 940px;
			// z-index: 10;
		}

		.__p_1850_uid_522 {
			color: white;
			width: 500px;
			height: 50px;
			display: flex;
			position: absolute;
			right: 70px;
			z-index: 10;
		}

		.__p_1850_uid_41 {
			width: 100%;
		}

		.__p_1850_uid_40 {
			position: relative;
			margin-top: 20px;
			padding: 0 15px;
		}
    
    .__p_1850_uid_401 {
    	position: relative;
    	margin-top: 50px;
    	padding: 0 15px;
    }
	}
</style>
