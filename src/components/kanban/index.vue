<template>
	<div id="pts_587_1" class="__pts_587_uid_1" __model='{"id":"pts_587_1"}' __config='{"draggable":false}' __event='{}'
	 __cls='{}' __uid='1' __cid='100'>
		<div id="pts_587_11" class="__pts_587_uid_11" __model='{"id":"pts_587_11"}' __config='{"draggable":false}' __event='{}'
		 __cls='{}' __uid='11' __pid='1' __cid='div'>
			<div id="pts_587_13" class="__pts_587_uid_13" __model='{"text":"已监控设备资产统计看板","id":"pts_587_13"}' __config='{"draggable":false}'
			 __event='{}' __cls='{}' __uid='13' __pid='12' __cid='span'>
				已监控设备资产统计看板
			</div>
			<div style="display: flex;margin:30px 0 10px">
				<div style="display: flex;flex: 1;flex-direction: column;">
					<div style="margin: 0 auto;">
						<div style="color: rgb(181,181,181);font-size: 14px;">监控总台数</div>
						<div style="color: #1ccbe5;padding-top: 5px;">
							<span style="font-size: 48px;">{{deviceTotal}}</span><span style="font-size: 18px;margin-left: 5px;">台</span>
						</div>
					</div>
				</div>
				<div style="display: flex;flex: 1;flex-direction: column;">
					<div style="margin: 0 auto;">
						<div style="color: rgb(181,181,181);font-size: 14px;">监控总金额</div>
						<div style="color: #1ccbe5;padding-top: 5px;">
							<span style="font-size: 48px;">{{deviceTotalWorth}}</span><span style="font-size: 18px;margin-left: 5px;">万元</span>
						</div>
					</div>
				</div>
			</div>
			<div id="pts_587_12" class="__pts_587_uid_12" __model='{"id":"pts_587_12"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='12' __pid='11' __cid='div'>
				<div id="pts_587_14" class="__pts_587_uid_14" __model='{"id":"pts_587_14"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='14' __pid='12' __cid='div'>
					<div __name="search" name="search" id="pts_587_15" class="__pts_587_uid_15" __model='{"name":"search","id":"pts_587_15"}'
					 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='15' __pid='14' __cid='v-chart-search-placeholder'>
						<el-form :inline="false" class="demo-form-inline" style="margin-bottom:-15px;" __cid='224'>
							<el-form-item class="first-part" label="" __cid='225'>
								<el-radio-group size="small" v-model="business_dept_name" @change="findByFirstDepartment">
									<el-radio-button label="">全部</el-radio-button>
									<el-radio-button v-for="item in departmentData" :label="item.value">{{item.label}}</el-radio-button>
								</el-radio-group>
								<el-button type="primary" size="small" @click="exportData">导出数据</el-button>
								<div class="clearfix"></div>
								<div style="margin-top: 10px;">
                  <el-radio-group size="small" v-show="secondDepartmentData.length > 0" v-model="department_info_name" @change="findAllReport0">
                  	<el-radio-button label="">全部</el-radio-button>
                  	<el-radio-button v-for="item in secondDepartmentData" :label="item.value">{{item.label}}</el-radio-button>
                  </el-radio-group>
                </div>
							</el-form-item>
						</el-form>
					</div>
				</div>
			</div>
			<div id="pts_587_16" __model='{"id":"pts_587_16"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='16'
			 __pid='11' __cid='div'> </div>
		</div>
		<div id="pts_587_33" class="__pts_587_uid_33" __model='{"id":"pts_587_33"}' __config='{"draggable":false}' __event='{}'
		 __cls='{}' __uid='33' __pid='1' __cid='div'>
			<div id="pts_587_34" class="__pts_587_uid_34" __model='{"id":"pts_587_34"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='34' __pid='33' __cid='div'>
				<div id="pts_587_35" class="__pts_587_uid_35" __model='{"id":"pts_587_35"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='35' __pid='34' __cid='div'> </div><span id="pts_587_36" class="__pts_587_uid_36" __model='{"text":"自有设备领用","id":"pts_587_36"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='36' __pid='34' __cid='span'>自有设备-领用</span>
				<div id="pts_587_37" class="__pts_587_uid_37" __model='{"id":"pts_587_37"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='37' __pid='34' __cid='div'> </div>
			</div>
			<div id="pts_587_38" class="__pts_587_uid_38" __model='{"id":"pts_587_38"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='38' __pid='33' __cid='div'>
				<div class="table-content">
					<el-table height="250" :data="selfDeviceData" style="width: 100%" highlight-current-row @current-change="hanldeClick">
						<el-table-column prop="deviceTypeName" label="自有设备" width="235" align="center">
							<!-- <template slot-scope="scope">
								<span v-if="scope.row.deviceTypeName !== '总计'" @click="hanldeClick(scope.row.deviceTypeName)">{{scope.row.deviceTypeName}}</span>
								<span v-if="scope.row.deviceTypeName === '总计'">{{scope.row.deviceTypeName}}</span>
							</template> -->
						</el-table-column>
						<el-table-column prop="useRatio" label="使用率" width="235" align="center">
							<template slot-scope="scope">{{scope.row.useRatio == '--'?'--':(scope.row.useRatio*100).toFixed(2)+'%'}}</template>
						</el-table-column>
						<el-table-column prop="amount" label="数量(台)" width="235" align="center">
						</el-table-column>
						<el-table-column prop="money" label="金额(元)" width="235" align="center">
						</el-table-column>
					</el-table>
				</div>
				<div>
					<v-chart v-if="options_1.showData" :options="options_1" auto-resize __relation_search="search" id="pts_587_40"
					 class="__pts_587_uid_40" __model='{"options":{"title":{"text":"作品分类分布","subtext":"","left":"center","top":"25","textStyle":{"color":"white","fontSize":"20"}},"tooltip":{"trigger":"item","formatter":"{a} <br/>{b} : {c} ({d}%)"},"color":["#13B5B1","#E3B61F","#9D97DA","#F37979","#72B1F1","#F391D6","#CEF6A5","#F1A8B8","#89D3EB","#FBC59C","#C3CBD2"],"series":[{"name":"访问来源","type":"pie","radius":"35%","center":["50%","50%"],"data":[{"value":2000,"name":"HLD"},{"value":1600,"name":"LLD"},{"value":300,"name":"MLD"},{"value":250,"name":"NLD"},{"value":230,"name":"OLD"},{"value":210,"name":"PLD"},{"value":190,"name":"QLD"},{"value":170,"name":"RLD"},{"value":150,"name":"XLD"},{"value":140,"name":"YLD"},{"value":800,"name":"更多"}],"itemStyle":{"emphasis":{"shadowBlur":10,"shadowOffsetX":0,"shadowColor":"rgba(0, 0, 0, 0.5)"}}}]},"auto-resize":true,"__relation_search":"search","id":"pts_587_40"}'
					 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='40' __pid='38' __cid='2001'></v-chart>
					<div v-if="!options_1.showData" class="__pts_587_uid_40 empty-text">暂无数据</div>
				</div>
			</div>
		</div>
		<div id="pts_587_33" class="__pts_587_uid_33" __model='{"id":"pts_587_33"}' __config='{"draggable":false}' __event='{}'
		 __cls='{}' __uid='33' __pid='1' __cid='div'>
			<div id="pts_587_34" class="__pts_587_uid_34" __model='{"id":"pts_587_34"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='34' __pid='33' __cid='div'>
				<div id="pts_587_35" class="__pts_587_uid_35" __model='{"id":"pts_587_35"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='35' __pid='34' __cid='div'> </div><span id="pts_587_36" class="__pts_587_uid_361" __model='{"text":"自有设备领用","id":"pts_587_36"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='36' __pid='34' __cid='span'>外购设备</span>
				<div id="pts_587_37" class="__pts_587_uid_37" __model='{"id":"pts_587_37"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='37' __pid='34' __cid='div'> </div>
			</div>
			<div id="pts_587_38" class="__pts_587_uid_38" __model='{"id":"pts_587_38"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='38' __pid='33' __cid='div'>
				<div class="table-content">
					<el-table height="250" :data="outDeviceData" style="width: 100%" highlight-current-row @current-change="hanldeClick2">
						<el-table-column prop="deviceTypeName" label="外购设备" width="235" align="center">
							<!-- <template slot-scope="scope">
								<span v-if="scope.row.deviceTypeName !== '总计'" @click="hanldeClick2(scope.row.deviceTypeName)">{{scope.row.deviceTypeName}}</span>
								<span v-if="scope.row.deviceTypeName === '总计'">{{scope.row.deviceTypeName}}</span>
							</template> -->
						</el-table-column>
						<el-table-column prop="useRatio" label="使用率" width="235" align="center">
							<template slot-scope="scope">
								<span v-if="scope.row.deviceTypeName === '数据测试仪'" @click="go2Detail1" style="cursor: pointer;color: rgb(19,181,177);text-decoration: underline;">详情</span>
								<span v-if="scope.row.deviceTypeName === '实验室设备【海西】'" @click="go2Detail2" style="cursor: pointer;color: rgb(19,181,177);text-decoration: underline;">详情</span>
								<span v-if="scope.row.deviceTypeName !== '数据测试仪' && scope.row.deviceTypeName !== '实验室设备【海西】'">{{scope.row.useRatio == '--'?'--':(scope.row.useRatio*100).toFixed(2)+'%'}}</span>
							</template>
						</el-table-column>
						<el-table-column prop="amount" label="数量(台)" width="235" align="center">
						</el-table-column>
						<el-table-column prop="money" label="金额(元)" width="235" align="center">
						</el-table-column>
					</el-table>
				</div>
				<div>
					<v-chart v-if="options_2.showData" :options="options_2" auto-resize __relation_search="search" id="pts_587_40"
					 class="__pts_587_uid_40" __model='{"options":{"title":{"text":"作品分类分布","subtext":"","left":"center","top":"25","textStyle":{"color":"white","fontSize":"20"}},"tooltip":{"trigger":"item","formatter":"{a} <br/>{b} : {c} ({d}%)"},"color":["#13B5B1","#E3B61F","#9D97DA","#F37979","#72B1F1","#F391D6","#CEF6A5","#F1A8B8","#89D3EB","#FBC59C","#C3CBD2"],"series":[{"name":"访问来源","type":"pie","radius":"35%","center":["50%","50%"],"data":[{"value":2000,"name":"HLD"},{"value":1600,"name":"LLD"},{"value":300,"name":"MLD"},{"value":250,"name":"NLD"},{"value":230,"name":"OLD"},{"value":210,"name":"PLD"},{"value":190,"name":"QLD"},{"value":170,"name":"RLD"},{"value":150,"name":"XLD"},{"value":140,"name":"YLD"},{"value":800,"name":"更多"}],"itemStyle":{"emphasis":{"shadowBlur":10,"shadowOffsetX":0,"shadowColor":"rgba(0, 0, 0, 0.5)"}}}]},"auto-resize":true,"__relation_search":"search","id":"pts_587_40"}'
					 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='40' __pid='38' __cid='2001'></v-chart>
					<div v-if="!options_2.showData" class="__pts_587_uid_40 empty-text">暂无数据</div>
				</div>
			</div>
		</div>
		<div id="pts_587_33" class="__pts_587_uid_33" __model='{"id":"pts_587_33"}' __config='{"draggable":false}' __event='{}'
		 __cls='{}' __uid='33' __pid='1' __cid='div'>
			<div id="pts_587_34" class="__pts_587_uid_34" __model='{"id":"pts_587_34"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='34' __pid='33' __cid='div'>
				<div id="pts_587_35" class="__pts_587_uid_35" __model='{"id":"pts_587_35"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='35' __pid='34' __cid='div'> </div><span id="pts_587_36" class="__pts_587_uid_362" __model='{"text":"自有设备领用","id":"pts_587_36"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='36' __pid='34' __cid='span'>办公设备</span>
				<div id="pts_587_37" class="__pts_587_uid_37" __model='{"id":"pts_587_37"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='37' __pid='34' __cid='div'> </div>
			</div>
			<div id="pts_587_38" class="__pts_587_uid_38" __model='{"id":"pts_587_38"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='38' __pid='33' __cid='div'>
				<div class="table-content">
					<el-table height="250" :data="officeDeviceData" style="width: 100%" highlight-current-row @current-change="hanldeClick3">
						<el-table-column prop="deviceTypeName" label="办公设备" width="235" align="center">
							<!-- <template slot-scope="scope">
								<span v-if="scope.row.deviceTypeName !== '总计'" @click="hanldeClick3(scope.row.deviceTypeName)">{{scope.row.deviceTypeName}}</span>
								<span v-if="scope.row.deviceTypeName === '总计'">{{scope.row.deviceTypeName}}</span>
							</template> -->
						</el-table-column>
						<el-table-column prop="useRatio" label="使用率" width="235" align="center">
							<template slot-scope="scope">
								{{scope.row.useRatio == '--'?'--':(scope.row.useRatio*100).toFixed(2) +'%'}}
							</template>
						</el-table-column>
						<el-table-column prop="amount" label="数量(台)" align="center" width="235">
						</el-table-column>
						<el-table-column prop="money" label="金额(元)" align="center" width="235">
						</el-table-column>
					</el-table>
				</div>
				<div>
					<v-chart v-if="options_3.showData" :options="options_3" auto-resize __relation_search="search" id="pts_587_40"
					 class="__pts_587_uid_40" __model='{"options":{"title":{"text":"作品分类分布","subtext":"","left":"center","top":"25","textStyle":{"color":"white","fontSize":"20"}},"tooltip":{"trigger":"item","formatter":"{a} <br/>{b} : {c} ({d}%)"},"color":["#13B5B1","#E3B61F","#9D97DA","#F37979","#72B1F1","#F391D6","#CEF6A5","#F1A8B8","#89D3EB","#FBC59C","#C3CBD2"],"series":[{"name":"访问来源","type":"pie","radius":"35%","center":["50%","50%"],"data":[{"value":2000,"name":"HLD"},{"value":1600,"name":"LLD"},{"value":300,"name":"MLD"},{"value":250,"name":"NLD"},{"value":230,"name":"OLD"},{"value":210,"name":"PLD"},{"value":190,"name":"QLD"},{"value":170,"name":"RLD"},{"value":150,"name":"XLD"},{"value":140,"name":"YLD"},{"value":800,"name":"更多"}],"itemStyle":{"emphasis":{"shadowBlur":10,"shadowOffsetX":0,"shadowColor":"rgba(0, 0, 0, 0.5)"}}}]},"auto-resize":true,"__relation_search":"search","id":"pts_587_40"}'
					 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='40' __pid='38' __cid='2001'></v-chart>
					<div v-if="!options_3.showData" class="__pts_587_uid_40 empty-text">暂无数据</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				deviceTotal: 0,
				deviceTotalWorth: 0,
				business_dept_name: "",
				department_info_name: "",
				selfDeviceData: [],
				outDeviceData: [],
				officeDeviceData: [],
        departmentData:[],
        secondDepartmentData:[],
				"options_1": {
					"showData": true,
					legend: {
						bottom: '35%',
						left: 'center',
						textStyle: {
							color: '#fff',
							fontSize: 14
						},
						data: ['在用', '空闲', '不可用']
					},
					"tooltip": {
						"trigger": "item",
						"formatter": "{a} <br/>{b} : {c} ({d}%)"
					},
					"color": ["#34BF6E", "#018AFE", "#FF536B"],
					"series": [{
						"name": "设备使用情况",
						"type": "pie",
						"radius": "35%",
						"center": ["50%", "35%"],
						"data": [{
							"value": 0,
							"name": "在用"
						}, {
							"value": 0,
							"name": "空闲"
						}, {
							"value": 0,
							"name": "不可用"
						}],
						"itemStyle": {
							"emphasis": {
								"shadowBlur": 10,
								"shadowOffsetX": 0,
								"shadowColor": "rgba(0, 0, 0, 0.5)"
							}
						}
					}]
				},
				"options_2": {
					"showData": true,
					legend: {
						bottom: '35%',
						left: 'center',
						textStyle: {
							color: '#fff',
							fontSize: 14
						},
						data: ['在用', '空闲', '不可用']
					},
					"tooltip": {
						"trigger": "item",
						"formatter": "{a} <br/>{b} : {c} ({d}%)"
					},
					"color": ["#34BF6E", "#018AFE", "#FF536B"],
					"series": [{
						"name": "设备使用情况",
						"type": "pie",
						"radius": "35%",
						"center": ["50%", "35%"],
						"data": [{
							"value": 0,
							"name": "在用"
						}, {
							"value": 0,
							"name": "空闲"
						}, {
							"value": 0,
							"name": "不可用"
						}],
						"itemStyle": {
							"emphasis": {
								"shadowBlur": 10,
								"shadowOffsetX": 0,
								"shadowColor": "rgba(0, 0, 0, 0.5)"
							}
						}
					}]
				},
				"options_3": {
					"showData": true,
					legend: {
						bottom: '35%',
						left: 'center',
						textStyle: {
							color: '#fff',
							fontSize: 14
						},
						data: ['在用', '空闲', '不可用']
					},
					"tooltip": {
						"trigger": "item",
						"formatter": "{a} <br/>{b} : {c} ({d}%)"
					},
					"color": ["#34BF6E", "#018AFE", "#FF536B"],
					"series": [{
						"name": "设备使用情况",
						"type": "pie",
						"radius": "35%",
						"center": ["50%", "35%"],
						"data": [{
							"value": 0,
							"name": "在用"
						}, {
							"value": 0,
							"name": "空闲"
						}, {
							"value": 0,
							"name": "不可用"
						}],
						"itemStyle": {
							"emphasis": {
								"shadowBlur": 10,
								"shadowOffsetX": 0,
								"shadowColor": "rgba(0, 0, 0, 0.5)"
							}
						}
					}]
				}
			}
		},
		methods: {
			hanldeClick(row) {
				this.findReportByConfig('自有设备', row.deviceTypeName)
			},
			hanldeClick2(row) {
				this.findReportByConfig('外购设备', row.deviceTypeName)
			},
			hanldeClick3(row) {
				this.findReportByConfig('办公设备', row.deviceTypeName)
			},
			go2Detail1() {
				window.open("http://kanban.ruijie.net:8888/#/equipmentuserate/testerequipmentuserate")
			},
			go2Detail2() {
				window.open("http://kanban.ruijie.net:8888/#/equipmentuserate/labratoryequipmentuserate")
			},
			exportData() {
				window.location = "/api/v0.1/export?business_dept_name=" + this.business_dept_name +
					"&department_info_name=" + this.department_info_name;
			},
      findDepartment(){
        this.$axios
        	.get("/api/v0.1/department")
        	.then((response) => {
        		let message = response.data;
            this.departmentData = message;
        	}).catch(function(error) {
        		console.log(error);
        	});
      },
      findByFirstDepartment(){
        if(this.business_dept_name == '') {
          this.department_info_name = '';
          this.secondDepartmentData = [];
        } else {
          this.department_info_name = '';
          this.findSecondDepartment();
        }
        this.findAllReport0();
      },
      findSecondDepartment(){
      	this.$axios
      		.get("/api/v0.1/department?business_dept_name="+this.business_dept_name)
      		.then((response) => {
      			let message = response.data;
      			this.secondDepartmentData = message;
      		}).catch(function(error) {
      			console.log(error);
      		});
      },
			findTotal() {
				this.$axios
					.get("/api/v0.1/total")
					.then((response) => {
						let message = response.data;
						this.deviceTotal = (message.deviceTotal ? message.deviceTotal : 0);
						this.deviceTotalWorth = (message.deviceTotalWorth ? parseInt(message.deviceTotalWorth / 10000) : 0);
					}).catch(function(error) {
						console.log(error);
					});
			},
			findCountByType(type) {
				this.$axios
					.get("/api/v0.1/statistics?belong_type=" + type + "&business_dept_name=" + this.business_dept_name +
						"&department_info_name=" + this.department_info_name)
					.then((response) => {
						let message = response.data;
						let amount = 0;
						let money = 0;
						message.forEach((item) => {
							amount = amount + item.amount;
							money = money + item.money;
						})
						let temp = {}
						temp.deviceTypeName = "总计"
						temp.useRatio = "--";
						temp.amount = amount;
						temp.money = money;
						if (type === '自有设备') {
							this.selfDeviceData = message;
							this.selfDeviceData.unshift(temp)
						}
						if (type === '外购设备') {
							this.outDeviceData = message;
							this.outDeviceData.unshift(temp)
						}
						if (type === '办公设备') {
							this.officeDeviceData = message;
							this.officeDeviceData.unshift(temp)
						}
					}).catch(function(error) {
						console.log(error);
					});
			},
			findReportByConfig(type, typeName) {
        if(typeName === '总计') {
          typeName = '';
        }
				this.$axios
					.get("/api/v0.1/chart?device_type_name=" + typeName+ "&business_dept_name=" + this.business_dept_name +
						"&department_info_name=" + this.department_info_name+"&belong_type="+type)
					.then((response) => {
						let message = response.data;
						if (type === '自有设备') {
							const newOptions = JSON.parse(JSON.stringify(this.options_1));
							newOptions.series[0].data = this.resolveData(message)
							this.options_1 = newOptions;
						}
						if (type === '外购设备') {
							const newOptions = JSON.parse(JSON.stringify(this.options_2));
							newOptions.series[0].data = this.resolveData(message)
							this.options_2 = newOptions;
						}
						if (type === '办公设备') {
							const newOptions = JSON.parse(JSON.stringify(this.options_3));
							newOptions.series[0].data = this.resolveData(message)
							this.options_3 = newOptions;
						}
					}).catch(function(error) {
						console.log(error);
					});
			},
			resolveData(message) {
				let array = [];
				let obj = {};
				obj.name = "在用";
				obj.value = message && message.inUseCount ? message.inUseCount : 0;
				array.push(obj);
				obj = {};
				obj.name = "空闲";
				obj.value = message && message.freeCount ? message.freeCount : 0;
				array.push(obj);
				obj = {};
				obj.name = "不可用";
				obj.value = message && message.notUseCount ? message.notUseCount : 0;
				array.push(obj);
				return array
			},
			findAllReport0() {
// 				if (this.business_dept_name !== '软件平台' && this.business_dept_name !== '测试平台' && this.business_dept_name !== '硬件平台') {
// 					this.department_info_name = '';
// 				}
				this.findCountByType("自有设备");
				this.findCountByType("外购设备");
				this.findCountByType("办公设备");
			},

		},
		mounted() {
			this.findAllReport0();
			this.findTotal();
      this.findDepartment();
		}
	}
</script>
<style lang="scss">
	.__pts_587_uid_1 {
		background: #434B5A;
		overflow: auto;

		.__pts_587_uid_13 {
			font-size: 16px;
			color: #FFFFFF;
		}

		.__pts_587_uid_15 {
			display: block;
			margin-left: auto;
			margin-right: 0;
		}

		.__pts_587_uid_14 {
			flex: 1;
			margin-left: 10px;
		}

		.__pts_587_uid_12 {
			display: flex;
			align-items: flex-start;
			padding-top: 20px;
		}

		.__pts_587_uid_11 {
			background: #343A40;
			padding-left: 10px;
			padding-right: 10px;
			padding-top: 10px;
			padding-bottom: 10px;
		}

		.__pts_587_uid_35 {
			width: 182px;
			height: 40px;
			background: rgb(23, 162, 185);
			display: inline-block;
			transform: skew(-45deg);
			margin-left: 35px;
			vertical-align: bottom;
		}

		.__pts_587_uid_36 {
			font-size: 18px;
			position: absolute;
			top: 9px;
			left: 65px;
		}

		.__pts_587_uid_361 {
			font-size: 18px;
			position: absolute;
			top: 9px;
			left: 90px;
		}

		.__pts_587_uid_362 {
			font-size: 18px;
			position: absolute;
			top: 9px;
			left: 90px;
		}

		.__pts_587_uid_37 {
			border-top: 2px dashed rgb(23, 162, 185);
			margin-left: 200px;
			margin-top: -2px;
		}

		.__pts_587_uid_34 {
			color: #FFFFFF;
			position: relative;
		}

		.__pts_587_uid_39 {
			flex: 1;
		}

		.__pts_587_uid_40 {
			flex: 1;
		}

		.__pts_587_uid_38 {
			display: flex;
			padding-top: 5px;
			padding-bottom: 5px;
			padding-left: 5px;
			padding-right: 5px;
			height: 320px;
		}

		.__pts_587_uid_33 {
			padding-left: 20px;
			padding-right: 20px;
			padding-top: 10px;
		}

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

		.empty-text {
			color: #d7d9da;
			font-size: 18px;
			display: flex;
			flex: 1;
			align-items: center;
			justify-content: center;
			min-height: 300px;
			// min-width: 300px;
		}

		.second-part {}

		.first-part {
			.el-button--primary {
				color: #fff;
				background-color: rgb(23, 162, 184);
				border-color: rgb(23, 162, 184);
			}

			.el-radio-button--small .el-radio-button__inner {
				padding: 8px 9px;
			}
		}

		.table-content {
			flex: 1;
			margin-top: 45px;

			.el-table {
				color: #fff;
				font-size: 14px;
				border-bottom: none;
			}

			.el-table::before {
				height: 0px;
			}

			.el-table thead th {
				background-color: #434b5a;
			}

			.el-table tr {
				background-color: rgb(76, 85, 102);
			}

			.el-table td,
			.el-table th.is-leaf {
				border-bottom: 2px solid #434b5a;
			}

			.el-table,
			.el-table__expanded-cell {
				background-color: transparent;
			}

			.el-table--enable-row-hover .el-table__body tr:hover>td {
				background-color: rgb(85, 96, 114);
			}

			.el-table__body tr.current-row>td {
				background-color: rgb(85, 96, 114);
			}
		}

		.echarts {
			width: 400px;
		}
	}
</style>
