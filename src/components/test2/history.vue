<template>
	<div id="pts_547_51" __model='{"id":"pts_547_51"}' __config='{"draggable":false}' __event='{}' __uid='51' __cid='100'>
		<div __name="search" name="search" id="pts_547_52" __model='{"name":"search","id":"pts_547_52"}' __config='{"draggable":false}'
		 __event='{}' __uid='52' __pid='51' __cid='v-chart-search-placeholder'>
			<el-form :inline="true" :model="query0" class="demo-form-inline" style="margin-bottom:-15px;" __cid='224'>
				<el-form-item label="线路" __cid='225'>
					<el-select __cid='214' v-model="query0.line" id="pm_line" placeholder="请选择线路" __model='{"options":[{"label":"全部","value":""},{"label":"整机","value":"Global"},{"label":"Gi0/3","value":"GigabitEthernet 0/3"}]}'>
						<el-option key="Global" label="整机" value="Global"></el-option>
						<el-option key="GigabitEthernet 0/3" label="Gi0/3" value="GigabitEthernet 0/3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="流量类型" __cid='225'>
					<el-select __cid='214' v-model="query0.flow_type" id="pm_flow_type" placeholder="请选择流量类型" __model='{"options":[{"label":"全部","value":""},{"label":"上行流量","value":"up"},{"label":"下行流量","value":"down"}]}'>
						<el-option key="up" label="上行流量" value="up"></el-option>
						<el-option key="down" label="下行流量" value="down"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="时间" __cid='225'>
					<el-radio-group v-model="query0.time">
						<el-radio-button :label="1">1小时</el-radio-button>
						<el-radio-button :label="2">2小时</el-radio-button>
						<el-radio-button :label="3">3小时</el-radio-button>
						<el-radio-button :label="6">6小时</el-radio-button>
						<el-radio-button :label="12">12小时</el-radio-button>
						<el-radio-button :label="24">24小时</el-radio-button>
					</el-radio-group>
				</el-form-item>
				<!-- <el-form-item label="时间" __cid='225'>
					<el-date-picker __cid='220' v-model="query0.time" type="daterange" range-separator="至" start-placeholder="开始日期"
					 end-placeholder="结束日期">
					</el-date-picker>
				</el-form-item> -->
				<el-button type="primary" @click="findAllReport0">查询</el-button>
			</el-form>
		</div>
		<v-chart __relation_search="search" :options="options_0" auto-resize relation-search="search" id="pts_547_53" class="__pts_547_uid_53"
		 __model='{"options":{},"auto-resize":true,"relation-search":"search","id":"pts_547_53"}' __config='{"draggable":false}'
		 __event='{}' __uid='53' __pid='51' __cid='v-chart-placeholder'></v-chart>
	</div>
</template>
<script>
	export default {
		methods: {
			findReportByConfig0() {
				let self = this;
				let requestConfig = {};
				requestConfig.config = {
					"alias_id": 0,
					"chart_type": "line",
					"data_source_config": {
						"legend": "",
						"data_config": ""
					},
					"multi_data": 1,
					"relation_search_name": "search",
					"title": "流量走势图",
					"x_data_source_config": {
						"data_config": "select time name from history_interface_flow where line=? and flow_type=? and time>=? and time<=?",
						"x_is_sql": "1"
					},
					"y_data_source_config": [{
						"y_is_sql": "1",
						"legend": "流控抑制前流量",
						"data_config": "select before_flow value from history_interface_flow where line=? and flow_type=? and time>=? and time<=?"
					}, {
						"y_is_sql": "1",
						"legend": "通过的流量",
						"data_config": "select flow_through value from history_interface_flow where line=? and flow_type=? and time>=? and time<=?"
					}]
				};
				requestConfig.params = self.query0;
				self.$axios
					.get("/api/flowhistory/"+encodeURIComponent(self.query0.line)+"/"+self.query0.time)
					.then(function(response) {
						let message = response.data.message;
						let msgJson = JSON.parse(message);
						let data = msgJson.data;
						let xData = [];
						let yTotalData = [];
						let yPassData = [];
						if(data.total_flow.up) {
							data.total_flow.up.forEach((item) => {
								xData.push(item[0]);
							});
						}
						if(self.query0.flow_type == 'up') {
							if(data.pass_flow.up) {
								data.pass_flow.up.forEach((item) => {
									yPassData.push(item[1]);
								});
							}
							if(data.total_flow.up) {
								data.total_flow.up.forEach((item) => {
									yTotalData.push(item[1]);
								});
							}
						} else {
							if(data.pass_flow.down) {
								data.pass_flow.down.forEach((item) => {
									yPassData.push(item[1]);
								});
							}
							if(data.total_flow.down) {
								data.total_flow.down.forEach((item) => {
									yTotalData.push(item[1]);
								});
							}
						}
						let series = [
							{
								name:'流控抑制前流量',
								type:'line',
								areaStyle: {
								},
								lineStyle: {
									width: 1
								},
								data: yTotalData
							},
							{
								name:'通过的流量',
								type:'line',
								areaStyle: {
								},
								lineStyle: {
									width: 1
								},
								data: yPassData
							}
						];
						const newOptions = JSON.parse(JSON.stringify(self.options_0));
						newOptions.legend.data = ["流控抑制前流量","通过的流量"];
						newOptions.title.text = "历史接口流量趋势";
						newOptions.xAxis.data = xData;
						newOptions.series = series;
						self.options_0 = newOptions;
					}).catch(function(error) {
						console.log(error);
					});
			},
			findAllReport0() {
				let self = this;
				self.findReportByConfig0();
			},

		},
		data() {
			return {
				options_0: {
					title: {
						text: ''
					},
					legend: {
						data: []
					},
					grid: {
							bottom: 80
					},
					toolbox: {
						
					},
					tooltip : {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							animation: false,
							label: {
									backgroundColor: '#505765'
							}
						}
					},
					xAxis: {
						type : 'category',
						boundaryGap : false,
						axisLine: {onZero: false},
						data: []
					},
					yAxis: {},
					series: []
				},
				query0: {
					"line": "Global",
					"flow_type": "up",
					"time": 1
				},

			}
		},
		mounted() {
			this.findReportByConfig0();

		}
	}
</script>
<style scoped>
	.__pts_547_uid_53 {
		width: 100%;
		height: 250px;
	}
</style>
