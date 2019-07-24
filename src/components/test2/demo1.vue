<template>
	<div id="pts_587_1" class="__pts_587_uid_1" __model='{"id":"pts_587_1"}' __config='{"draggable":false}' __event='{}'
	 __cls='{}' __uid='1' __cid='100'>
		<div id="pts_587_11" class="__pts_587_uid_11" __model='{"id":"pts_587_11"}' __config='{"draggable":false}' __event='{}'
		 __cls='{}' __uid='11' __pid='1' __cid='div'>
			<div id="pts_587_12" class="__pts_587_uid_12" __model='{"id":"pts_587_12"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='12' __pid='11' __cid='div'> <span id="pts_587_13" class="__pts_587_uid_13" __model='{"text":"软件平台人员资质投入统计看板","id":"pts_587_13"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='13' __pid='12' __cid='span'>软件平台人员资质投入统计看板</span>
				<div id="pts_587_14" class="__pts_587_uid_14" __model='{"id":"pts_587_14"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='14' __pid='12' __cid='div'>
					<div __name="search" name="search" id="pts_587_15" class="__pts_587_uid_15" __model='{"name":"search","id":"pts_587_15"}'
					 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='15' __pid='14' __cid='v-chart-search-placeholder'>
						<el-form :inline="false" :model="query0" class="demo-form-inline" style="margin-bottom:-15px;float:right" __cid='224'>
							<el-form-item label="" __cid='225' style="text-align: right;">
								<el-radio-group v-model="query0.business_dep_name" @change="findAllReport0">
									<el-radio-button label="">全部</el-radio-button>
									<el-radio-button label="SMB产品事业部"></el-radio-button>
									<el-radio-button label="无线产品事业部"></el-radio-button>
									<el-radio-button label="数据中心交换产品事业部"></el-radio-button>
									<el-radio-button label="路由器产品事业部"></el-radio-button>
									<el-radio-button label="研究院"></el-radio-button>
									<el-radio-button label="园区与城域网交换产品事业部"></el-radio-button>
								</el-radio-group>
							</el-form-item>
							<el-form-item class="second-part" v-if="query0.business_dep_name === '研究院'" label="" __cid='225'>
								<el-radio-group v-model="query0.department_info_name" @change="findAllReport0">
									<el-radio-button label="平台1部"></el-radio-button>
									<el-radio-button label="平台2部"></el-radio-button>
									<el-radio-button label="平台3部"></el-radio-button>
									<el-radio-button label="平台4部"></el-radio-button>
									<el-radio-button label="平台5部"></el-radio-button>
									<el-radio-button label="平台6部"></el-radio-button>
									<el-radio-button label="平台7部"></el-radio-button>
									<el-radio-button label="平台8部"></el-radio-button>
									<el-radio-button label="平台9部"></el-radio-button>
									<el-radio-button label="平台10部"></el-radio-button>
								</el-radio-group>
								<el-radio-group v-model="query0.department_info_name" @change="findAllReport0">
									<el-radio-button label="测试1部"></el-radio-button>
									<el-radio-button label="测试2部"></el-radio-button>
									<el-radio-button label="测试3部"></el-radio-button>
									<el-radio-button label="测试4部"></el-radio-button>
									<el-radio-button label="测试5部"></el-radio-button>
								</el-radio-group>
                <!-- <div class="clearfix"></div> -->
								<el-radio-group v-model="query0.department_info_name" @change="findAllReport0">
									<el-radio-button label="硬件1部"></el-radio-button>
									<el-radio-button label="硬件2部"></el-radio-button>
									<el-radio-button label="硬件3部"></el-radio-button>
									<el-radio-button label="硬件4部"></el-radio-button>
									<el-radio-button label="硬件5部"></el-radio-button>
									<el-radio-button label="硬件6部"></el-radio-button>
								</el-radio-group>
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
				 __cls='{}' __uid='35' __pid='34' __cid='div'> </div><span id="pts_587_36" class="__pts_587_uid_36" __model='{"text":"嵌入式软件岗位资质投入汇总","id":"pts_587_36"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='36' __pid='34' __cid='span'>嵌入式软件岗位资质投入汇总</span>
				<div id="pts_587_37" class="__pts_587_uid_37" __model='{"id":"pts_587_37"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='37' __pid='34' __cid='div'> </div>
			</div>
			<div id="pts_587_38" class="__pts_587_uid_38" __model='{"id":"pts_587_38"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='38' __pid='33' __cid='div'>
				<v-chart v-if="options.showData" @click="hanldeClick" :options="options" auto-resize __relation_search="search" id="pts_587_39"
				 class="__pts_587_uid_39" __model='{"options":{"title":{"text":"资源分类资源分布","left":"center","top":"25","textStyle":{"color":"white","fontSize":"20"}},"tooltip":{"formatter":"{a} <br/>{b}: {c} ({d}%)"},"color":["#13B5B1","#E3B61F","#9D97DA","#F37979","#72B1F1","#F391D6","#CEF6A5","#F1A8B8","#89D3EB","#FBC59C","#C3CBD2"],"series":[{"name":"管理","type":"pie","radius":[0,"30%"],"label":{"normal":{"position":"inner"}},"labelLine":{"normal":{"show":false}},"data":[{"value":390,"name":"管理者"},{"value":335,"name":"非管理员"}]},{"name":"资质","type":"pie","radius":["40%","55%"],"label":{"normal":{"formatter":"{b}\n{d}%"}},"data":[{"value":335,"name":"一级资质"},{"value":100,"name":"二级资质"},{"value":234,"name":"无资质"}]}]},"auto-resize":true,"__relation_search":"search","id":"pts_587_39"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='39' __pid='38' __cid='2001'></v-chart>
				<div v-if="!options.showData" 
				 class="__pts_587_uid_40 empty-text">暂无数据</div>
				<v-chart v-if="options_1.showData" :options="options_1" auto-resize __relation_search="search" id="pts_587_40"
				 class="__pts_587_uid_40" __model='{"options":{"title":{"text":"作品分类分布","subtext":"","left":"center","top":"25","textStyle":{"color":"white","fontSize":"20"}},"tooltip":{"trigger":"item","formatter":"{a} <br/>{b} : {c} ({d}%)"},"color":["#13B5B1","#E3B61F","#9D97DA","#F37979","#72B1F1","#F391D6","#CEF6A5","#F1A8B8","#89D3EB","#FBC59C","#C3CBD2"],"series":[{"name":"访问来源","type":"pie","radius":"35%","center":["50%","50%"],"data":[{"value":2000,"name":"HLD"},{"value":1600,"name":"LLD"},{"value":300,"name":"MLD"},{"value":250,"name":"NLD"},{"value":230,"name":"OLD"},{"value":210,"name":"PLD"},{"value":190,"name":"QLD"},{"value":170,"name":"RLD"},{"value":150,"name":"XLD"},{"value":140,"name":"YLD"},{"value":800,"name":"更多"}],"itemStyle":{"emphasis":{"shadowBlur":10,"shadowOffsetX":0,"shadowColor":"rgba(0, 0, 0, 0.5)"}}}]},"auto-resize":true,"__relation_search":"search","id":"pts_587_40"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='40' __pid='38' __cid='2001'></v-chart>
				<div v-if="!options_1.showData" 
				 class="__pts_587_uid_40 empty-text">暂无数据</div>
			</div>
		</div>
		<div id="pts_587_33" class="__pts_587_uid_33" __model='{"id":"pts_587_33"}' __config='{"draggable":false}' __event='{}'
		 __cls='{}' __uid='33' __pid='1' __cid='div'>
			<div id="pts_587_34" class="__pts_587_uid_34" __model='{"id":"pts_587_34"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='34' __pid='33' __cid='div'>
				<div id="pts_587_35" class="__pts_587_uid_35" __model='{"id":"pts_587_35"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='35' __pid='34' __cid='div'> </div><span id="pts_587_36" class="__pts_587_uid_36" __model='{"text":"测试工程师岗位资质投入汇总","id":"pts_587_36"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='36' __pid='34' __cid='span'>测试工程师岗位资质投入汇总</span>
				<div id="pts_587_37" class="__pts_587_uid_37" __model='{"id":"pts_587_37"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='37' __pid='34' __cid='div'> </div>
			</div>
			<div id="pts_587_38" class="__pts_587_uid_38" __model='{"id":"pts_587_38"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='38' __pid='33' __cid='div'>
				<v-chart v-if="options_2.showData" @click="hanldeClick2" :options="options_2" auto-resize __relation_search="search"
				 id="pts_587_39" class="__pts_587_uid_39" __model='{"options":{"title":{"text":"资源分类资源分布","left":"center","top":"25","textStyle":{"color":"white","fontSize":"20"}},"tooltip":{"formatter":"{a} <br/>{b}: {c} ({d}%)"},"color":["#13B5B1","#E3B61F","#9D97DA","#F37979","#72B1F1","#F391D6","#CEF6A5","#F1A8B8","#89D3EB","#FBC59C","#C3CBD2"],"series":[{"name":"管理","type":"pie","radius":[0,"30%"],"label":{"normal":{"position":"inner"}},"labelLine":{"normal":{"show":false}},"data":[{"value":390,"name":"管理者"},{"value":335,"name":"非管理员"}]},{"name":"资质","type":"pie","radius":["40%","55%"],"label":{"normal":{"formatter":"{b}\n{d}%"}},"data":[{"value":335,"name":"一级资质"},{"value":100,"name":"二级资质"},{"value":234,"name":"无资质"}]}]},"auto-resize":true,"__relation_search":"search","id":"pts_587_39"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='39' __pid='38' __cid='2001'></v-chart>
				<div v-if="!options_2.showData" class="__pts_587_uid_40 empty-text">暂无数据</div>
				<v-chart v-if="options_3.showData" :options="options_3" auto-resize __relation_search="search" id="pts_587_40"
				 class="__pts_587_uid_40" __model='{"options":{"title":{"text":"作品分类分布","subtext":"","left":"center","top":"25","textStyle":{"color":"white","fontSize":"20"}},"tooltip":{"trigger":"item","formatter":"{a} <br/>{b} : {c} ({d}%)"},"color":["#13B5B1","#E3B61F","#9D97DA","#F37979","#72B1F1","#F391D6","#CEF6A5","#F1A8B8","#89D3EB","#FBC59C","#C3CBD2"],"series":[{"name":"访问来源","type":"pie","radius":"35%","center":["50%","50%"],"data":[{"value":2000,"name":"HLD"},{"value":1600,"name":"LLD"},{"value":300,"name":"MLD"},{"value":250,"name":"NLD"},{"value":230,"name":"OLD"},{"value":210,"name":"PLD"},{"value":190,"name":"QLD"},{"value":170,"name":"RLD"},{"value":150,"name":"XLD"},{"value":140,"name":"YLD"},{"value":800,"name":"更多"}],"itemStyle":{"emphasis":{"shadowBlur":10,"shadowOffsetX":0,"shadowColor":"rgba(0, 0, 0, 0.5)"}}}]},"auto-resize":true,"__relation_search":"search","id":"pts_587_40"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='40' __pid='38' __cid='2001'></v-chart>
				<div v-if="!options_3.showData"
				 class="__pts_587_uid_40 empty-text">暂无数据</div>
			</div>
		</div>
		<div id="pts_587_33" class="__pts_587_uid_33" __model='{"id":"pts_587_33"}' __config='{"draggable":false}' __event='{}'
		 __cls='{}' __uid='33' __pid='1' __cid='div'>
			<div id="pts_587_34" class="__pts_587_uid_34" __model='{"id":"pts_587_34"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='34' __pid='33' __cid='div'>
				<div id="pts_587_35" class="__pts_587_uid_35" __model='{"id":"pts_587_35"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='35' __pid='34' __cid='div'> </div><span id="pts_587_36" class="__pts_587_uid_36" __model='{"text":"管理岗位资质投入汇总","id":"pts_587_36"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='36' __pid='34' __cid='span'>硬件开发岗位资质投入汇总</span>
				<div id="pts_587_37" class="__pts_587_uid_37" __model='{"id":"pts_587_37"}' __config='{"draggable":false}' __event='{}'
				 __cls='{}' __uid='37' __pid='34' __cid='div'> </div>
			</div>
			<div id="pts_587_38" class="__pts_587_uid_38" __model='{"id":"pts_587_38"}' __config='{"draggable":false}' __event='{}'
			 __cls='{}' __uid='38' __pid='33' __cid='div'>
				<v-chart v-if="options_4.showData" @click="hanldeClick3" :options="options_4" auto-resize __relation_search="search"
				 id="pts_587_39" class="__pts_587_uid_39" __model='{"options":{"title":{"text":"资源分类资源分布","left":"center","top":"25","textStyle":{"color":"white","fontSize":"20"}},"tooltip":{"formatter":"{a} <br/>{b}: {c} ({d}%)"},"color":["#13B5B1","#E3B61F","#9D97DA","#F37979","#72B1F1","#F391D6","#CEF6A5","#F1A8B8","#89D3EB","#FBC59C","#C3CBD2"],"series":[{"name":"管理","type":"pie","radius":[0,"30%"],"label":{"normal":{"position":"inner"}},"labelLine":{"normal":{"show":false}},"data":[{"value":390,"name":"管理者"},{"value":335,"name":"非管理员"}]},{"name":"资质","type":"pie","radius":["40%","55%"],"label":{"normal":{"formatter":"{b}\n{d}%"}},"data":[{"value":335,"name":"一级资质"},{"value":100,"name":"二级资质"},{"value":234,"name":"无资质"}]}]},"auto-resize":true,"__relation_search":"search","id":"pts_587_39"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='39' __pid='38' __cid='2001'></v-chart>
				<div v-if="!options_4.showData" 
				 class="__pts_587_uid_40 empty-text">暂无数据</div>
				<v-chart v-if="options_5.showData" :options="options_5" auto-resize __relation_search="search" id="pts_587_40"
				 class="__pts_587_uid_40" __model='{"options":{"title":{"text":"作品分类分布","subtext":"","left":"center","top":"25","textStyle":{"color":"white","fontSize":"20"}},"tooltip":{"trigger":"item","formatter":"{a} <br/>{b} : {c} ({d}%)"},"color":["#13B5B1","#E3B61F","#9D97DA","#F37979","#72B1F1","#F391D6","#CEF6A5","#F1A8B8","#89D3EB","#FBC59C","#C3CBD2"],"series":[{"name":"访问来源","type":"pie","radius":"35%","center":["50%","50%"],"data":[{"value":2000,"name":"HLD"},{"value":1600,"name":"LLD"},{"value":300,"name":"MLD"},{"value":250,"name":"NLD"},{"value":230,"name":"OLD"},{"value":210,"name":"PLD"},{"value":190,"name":"QLD"},{"value":170,"name":"RLD"},{"value":150,"name":"XLD"},{"value":140,"name":"YLD"},{"value":800,"name":"更多"}],"itemStyle":{"emphasis":{"shadowBlur":10,"shadowOffsetX":0,"shadowColor":"rgba(0, 0, 0, 0.5)"}}}]},"auto-resize":true,"__relation_search":"search","id":"pts_587_40"}'
				 __config='{"draggable":false}' __event='{}' __cls='{}' __uid='40' __pid='38' __cid='2001'></v-chart>
				<div v-if="!options_5.showData" 
				 class="__pts_587_uid_40 empty-text">暂无数据</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				query0: {
					business_dep_name: "",
					is_leader: "",
					current_qualification: "",
					department_info_name: ""
				},
				"options": {
					"showData": true,
					"title": {
						"text": "资源分类资源分布",
						"left": "center",
						"top": "25",
						"textStyle": {
							"color": "white",
							"fontSize": "20"
						}
					},
					"tooltip": {
						"formatter": "{a} <br/>{b}: {c} ({d}%)"
					},
					"color": ["#13B5B1", "#E3B61F", "#9D97DA", "#F37979", "#72B1F1", "#F391D6", "#CEF6A5", "#F1A8B8", "#89D3EB",
						"#FBC59C", "#C3CBD2"
					],
					"series": [{
						"name": "管理",
						"type": "pie",
						"radius": [0, "30%"],
						"label": {
              text:"aaa",
							"normal": {
								"position": "inner"
							}
						},
						"labelLine": {
							"normal": {
								"show": false
							}
						},
						"data": [{
							"value": 390,
							"name": "管理者"
						}, {
							"value": 335,
							"name": "非管理员"
						}]
					}, {
						"name": "资质分布",
						"type": "pie",
						"radius": ["40%", "55%"],
						"label": {
							"normal": {
								"formatter": "{b}\n{d}%"
							}
						},
						"data": [{
							"value": 335,
							"name": "一级资质"
						}, {
							"value": 100,
							"name": "二级资质"
						}, {
							"value": 234,
							"name": "无资质"
						}]
					}]
				},
				"options_1": {
					"showData": true,
					"title": {
						"text": "作品分类分布",
						"subtext": "",
						"left": "center",
						"top": "25",
						"textStyle": {
							"color": "white",
							"fontSize": "20"
						}
					},
					"tooltip": {
						"trigger": "item",
						"formatter": "{a} <br/>{b} : {c} ({d}%)"
					},
					"color": ["#13B5B1", "#E3B61F", "#9D97DA", "#F37979", "#72B1F1", "#F391D6", "#CEF6A5", "#F1A8B8", "#89D3EB",
						"#FBC59C", "#C3CBD2"
					],
					"series": [{
						"name": "作品分类分布",
						"type": "pie",
						"radius": "35%",
						"center": ["50%", "50%"],
						"data": [{
							"value": 2000,
							"name": "HLD"
						}, {
							"value": 1600,
							"name": "LLD"
						}, {
							"value": 300,
							"name": "MLD"
						}, {
							"value": 250,
							"name": "NLD"
						}, {
							"value": 230,
							"name": "OLD"
						}, {
							"value": 210,
							"name": "PLD"
						}, {
							"value": 190,
							"name": "QLD"
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
					"title": {
						"text": "资源分类资源分布",
						"left": "center",
						"top": "25",
						"textStyle": {
							"color": "white",
							"fontSize": "20"
						}
					},
					"tooltip": {
						"formatter": "{a} <br/>{b}: {c} ({d}%)"
					},
					"color": ["#13B5B1", "#E3B61F", "#9D97DA", "#F37979", "#72B1F1", "#F391D6", "#CEF6A5", "#F1A8B8", "#89D3EB",
						"#FBC59C", "#C3CBD2"
					],
					"series": [{
						"name": "管理",
						"type": "pie",
						"radius": [0, "30%"],
						"label": {
							"normal": {
								"position": "inner"
							}
						},
						"labelLine": {
							"normal": {
								"show": false
							}
						},
						"data": [{
							"value": 390,
							"name": "管理者"
						}, {
							"value": 335,
							"name": "非管理员"
						}]
					}, {
						"name": "资质分布",
						"type": "pie",
						"radius": ["40%", "55%"],
						"label": {
							"normal": {
								"formatter": "{b}\n{d}%"
							}
						},
						"data": [{
							"value": 335,
							"name": "一级资质"
						}, {
							"value": 100,
							"name": "二级资质"
						}, {
							"value": 234,
							"name": "无资质"
						}]
					}]
				},
				"options_3": {
					"showData": true,
					"title": {
						"text": "作品分类分布",
						"subtext": "",
						"left": "center",
						"top": "25",
						"textStyle": {
							"color": "white",
							"fontSize": "20"
						}
					},
					"tooltip": {
						"trigger": "item",
						"formatter": "{a} <br/>{b} : {c} ({d}%)"
					},
					"color": ["#13B5B1", "#E3B61F", "#9D97DA", "#F37979", "#72B1F1", "#F391D6", "#CEF6A5", "#F1A8B8", "#89D3EB",
						"#FBC59C", "#C3CBD2"
					],
					"series": [{
						"name": "作品分类分布",
						"type": "pie",
						"radius": "35%",
						"center": ["50%", "50%"],
						"data": [{
							"value": 2000,
							"name": "HLD"
						}, {
							"value": 1600,
							"name": "LLD"
						}, {
							"value": 300,
							"name": "MLD"
						}, {
							"value": 250,
							"name": "NLD"
						}, {
							"value": 230,
							"name": "OLD"
						}, {
							"value": 210,
							"name": "PLD"
						}, {
							"value": 190,
							"name": "QLD"
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
				"options_4": {
					"showData": true,
					"title": {
						"text": "资源分类资源分布",
						"left": "center",
						"top": "25",
						"textStyle": {
							"color": "white",
							"fontSize": "20"
						}
					},
					"tooltip": {
						"formatter": "{a} <br/>{b}: {c} ({d}%)"
					},
					"color": ["#13B5B1", "#E3B61F", "#9D97DA", "#F37979", "#72B1F1", "#F391D6", "#CEF6A5", "#F1A8B8", "#89D3EB",
						"#FBC59C", "#C3CBD2"
					],
					"series": [{
						"name": "管理",
						"type": "pie",
						"radius": [0, "30%"],
						"label": {
							"normal": {
								"position": "inner"
							}
						},
						"labelLine": {
							"normal": {
								"show": false
							}
						},
						"data": [{
							"value": 390,
							"name": "管理者"
						}, {
							"value": 335,
							"name": "非管理员"
						}]
					}, {
						"name": "资质分布",
						"type": "pie",
						"radius": ["40%", "55%"],
						"label": {
							"normal": {
								"formatter": "{b}\n{d}%"
							}
						},
						"data": [{
							"value": 335,
							"name": "一级资质"
						}, {
							"value": 100,
							"name": "二级资质"
						}]
					}]
				},
				"options_5": {
					"showData": true,
					"title": {
						"text": "作品分类分布",
						"subtext": "",
						"left": "center",
						"top": "25",
						"textStyle": {
							"color": "white",
							"fontSize": "20"
						}
					},
					"tooltip": {
						"trigger": "item",
						"formatter": "{a} <br/>{b} : {c} ({d}%)"
					},
					"color": ["#13B5B1", "#E3B61F", "#9D97DA", "#F37979", "#72B1F1", "#F391D6", "#CEF6A5", "#F1A8B8", "#89D3EB",
						"#FBC59C", "#C3CBD2"
					],
					"series": [{
						"name": "作品分类分布",
						"type": "pie",
						"radius": "35%",
						"center": ["50%", "50%"],
						"data": [{
							"value": 2000,
							"name": "HLD"
						}, {
							"value": 1600,
							"name": "LLD"
						}, {
							"value": 300,
							"name": "MLD"
						}, {
							"value": 250,
							"name": "NLD"
						}, {
							"value": 230,
							"name": "OLD"
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
			hanldeClick(a) {
				console.log(a)
				if (a.seriesIndex === 1) {
					this.query0.current_qualification = a.name
					this.query0.is_leader = ""
					this.findReportByConfig1()
				} else {
					this.query0.current_qualification = ""
					this.query0.is_leader = a.name.indexOf("非") < 0 ? 1 : 0
					this.findReportByConfig1()
          this.findReportByConfig0()
				}
			},
			hanldeClick2(a) {
				console.log(a)
				if (a.seriesIndex === 1) {
					this.query0.current_qualification = a.name
					this.query0.is_leader = ""
					this.findReportByConfig3()
				} else {
					this.query0.current_qualification = ""
					this.query0.is_leader = a.name.indexOf("非") < 0 ? 1 : 0
					this.findReportByConfig3()
          this.findReportByConfig2()
				}
			},
			hanldeClick3(a) {
				console.log(a)
				if (a.seriesIndex === 1) {
					this.query0.current_qualification = a.name
					this.query0.is_leader = ""
					this.findReportByConfig5()
				} else {
					this.query0.current_qualification = ""
					this.query0.is_leader = a.name.indexOf("非") < 0 ? 1 : 0
					this.findReportByConfig5()
          this.findReportByConfig4()
				}
			},
			findReportByConfig0() {
				let self = this;
				let requestConfig = {};
				requestConfig.config = {
					"alias_id": 0,
					"chart_type": "pie",
					"data_source_config": {
						"legend": "资质分布",
						"data_config": "SELECT\n\tt.current_qualification as name,\n\tSUM ( t.qualificationNums ) as value\nFROM\n(\n    SELECT\n      business_dep_name,\n        department_info_name,\n        post_parent,\n        current_qualification,\n        COUNT ( * ) AS qualificationNums,\n        SUM( case when  on_duty_status = '在职' then  1 else  0 end ) as 在职,\n        SUM( case when  on_duty_status = '试用' then  1 else  0 end ) as 试用\n    FROM\n        dw_dim_staff \n    WHERE\n            -- 筛选当非禁用账户条件\n        disabled = '0'\n            -- 筛选在职和试用期人员\n        AND on_duty_status IN ( '在职', '试用' ) \n            -- 限定事业部范围\n      AND business_dep_name in ('SMB产品事业部', '无线产品事业部', '数据中心交换产品事业部','路由器产品事业部', '研究院', '园区与城域网交换产品事业部')\n   AND is_leader = ? \n         -- 筛选事业部条件\n            AND business_dep_name = ?\n            -- 筛选部门范围条件\n            AND department_info_name =?\n            -- 筛选岗位类别\n            AND post_parent ='嵌入式软件开发'\n   GROUP BY \n        post_parent,business_dep_name,department_info_name,current_qualification\n    -- order by business_dep_name,department_info_name\n) t\nGROUP BY t.current_qualification;\n"
					},
					"multi_data": 0,
					"relation_search_name": "search",
					"title": "资质分类资质分布",
					"x_data_source_config": {
						"data_config": "",
						"x_is_sql": "0"
					},
					"y_data_source_config": [{
						"y_is_sql": "0",
						"legend": "",
						"data_config": ""
					}]
				};
				requestConfig.params = self.query0;
				self.$axios
					.post("/api/v0.1/report_data", requestConfig)
					.then(function(response) {
						let message = response.data;
						const newOptions = JSON.parse(JSON.stringify(self.options));
						if (!newOptions.title) newOptions.title = {}
						if (!newOptions.title.text) newOptions.title.text = {}
						newOptions.title.text = message.title;
						if (message.x_data.length > 0 || message.y_data.length > 0) {
							newOptions.showData = true;
						} else {
							newOptions.showData = false;
						}
						if (newOptions.series && newOptions.series.length > 0) {
							newOptions.series.forEach((item) => {
								message.y_data.forEach((it) => {
									if (it.legend == item.name) {
										let dataArray = [];
										it.y_data.forEach(function(val, index) {
											let data = {};
											data.value = val;
											data.name = message.x_data[index];
											dataArray.push(data);
										});
										item.data = dataArray;
									}
								});
							});
						}
						self.options = newOptions;
					}).catch(function(error) {
						console.log(error);
					});
			},
			findReportByConfig1() {
				let self = this;
				let requestConfig = {};
				requestConfig.config = {
					"alias_id": 1,
					"chart_type": "pie",
					"data_source_config": {
						"legend": "作品分类分布",
						"data_config": "SELECT \n    COUNT(fq.*) AS value,\n    u.current_qualification,\n    fq.document_category_name as name\nFROM dw_fact_qlf_qualification fq\nLEFT JOIN\n(\n    -- 因为当前工号不唯一，所以需要子查询里去重\n    SELECT\n            user_id,\n            user_name,\n            business_dep_name,\n        department_info_name,\n        post_parent,\n        current_qualification\n    FROM\n        dw_dim_staff \n    WHERE\n            -- 筛选当非禁用账户条件\n        disabled = '0'\n            -- 筛选在职和试用期人员\n        AND on_duty_status IN ( '在职', '试用' ) \n            -- 限定事业部范围\n\t\t\t\tAND business_dep_name in ('SMB产品事业部', '无线产品事业部', '数据中心交换产品事业部','路由器产品事业部', '研究院', '园区与城域网交换产品事业部')\n            -- 筛选事业部条件\n            AND business_dep_name = ?\n            -- 筛选部门范围条件\n            AND department_info_name =?\n            -- 筛选岗位类别\n            AND post_parent ='嵌入式软件开发'\n            -- 筛选是否管理岗，0为非管理岗，1为管理岗\n            AND is_leader = ?\n\t\t\t\t\t\tand current_qualification = ?\n    GROUP BY user_id,user_name,business_dep_name,\n        department_info_name,\n        post_parent,\n        current_qualification\n) u ON fq.user_id = u.user_id\nWHERE \n-- 文档状态关闭的，才表示文档已经完成并且提交\nfq.document_status ='关闭'\nAND u.user_id > ''\nGROUP BY u.current_qualification,fq.document_category_name\n"
					},
					"multi_data": 0,
					"relation_search_name": "search",
					"title": "作品分类分布",
					"x_data_source_config": {
						"data_config": "",
						"x_is_sql": "0"
					},
					"y_data_source_config": [{
						"y_is_sql": "0",
						"legend": "",
						"data_config": ""
					}]
				};
				requestConfig.params = self.query0;
				self.$axios
					.post("/api/v0.1/report_data", requestConfig)
					.then(function(response) {
						let message = response.data;
						const newOptions = JSON.parse(JSON.stringify(self.options_1));
						if (!newOptions.title) newOptions.title = {}
						if (!newOptions.title.text) newOptions.title.text = {}
						if (message.x_data.length > 0 || message.y_data.length > 0) {
							newOptions.showData = true;
						} else {
							newOptions.showData = false;
						}
						if (newOptions.series && newOptions.series.length > 0) {
							newOptions.series.forEach((item) => {
								message.y_data.forEach((it) => {
									if (it.legend == item.name) {
										let dataArray = [];
										const newData = it.y_data.sort((a, b) => b - a)
										let arr01 = []
										let arr02 = []
										if (newData.length > 30) {
											arr01 = newData.slice(0, 30)
											arr02 = [newData.slice(30).reduce((val, item) => {
												val = val + Number(item)
												return val
											}, 0)]
											message.x_data[30] = '更多'
										} else {
											arr01 = newData
										}
										[...arr01, ...arr02].forEach(function(val, index) {
											let data = {};
											data.value = val;
											data.name = message.x_data[index];
											dataArray.push(data);
										});
										item.data = dataArray;
									}
								});
							});
						}
						self.options_1 = newOptions;

					}).catch(function(error) {
						console.log(error);
					});
			},
			findReportByConfig2() {
				let self = this;
				let requestConfig = {};
				requestConfig.config = {
					"alias_id": 0,
					"chart_type": "pie",
					"data_source_config": {
						"legend": "资质分布",
						"data_config": "SELECT\n\tt.current_qualification as name,\n\tSUM ( t.qualificationNums ) as value\nFROM\n(\n    SELECT\n      business_dep_name,\n        department_info_name,\n        post_parent,\n        current_qualification,\n        COUNT ( * ) AS qualificationNums,\n        SUM( case when  on_duty_status = '在职' then  1 else  0 end ) as 在职,\n        SUM( case when  on_duty_status = '试用' then  1 else  0 end ) as 试用\n    FROM\n        dw_dim_staff \n    WHERE\n            -- 筛选当非禁用账户条件\n        disabled = '0'\n            -- 筛选在职和试用期人员\n        AND on_duty_status IN ( '在职', '试用' ) \n            -- 限定事业部范围\n      AND business_dep_name in ('SMB产品事业部', '无线产品事业部', '数据中心交换产品事业部','路由器产品事业部', '研究院', '园区与城域网交换产品事业部')\n  AND is_leader = ? \n            -- 筛选事业部条件\n            AND business_dep_name = ?\n            -- 筛选部门范围条件\n            AND department_info_name = ?\n            -- 筛选岗位类别\n            AND post_parent ='测试工程师'\n  GROUP BY \n        post_parent,business_dep_name,department_info_name,current_qualification\n    -- order by business_dep_name,department_info_name\n) t\nGROUP BY t.current_qualification;\n"
					},
					"multi_data": 0,
					"relation_search_name": "search",
					"title": "资质分类资质分布",
					"x_data_source_config": {
						"data_config": "",
						"x_is_sql": "0"
					},
					"y_data_source_config": [{
						"y_is_sql": "0",
						"legend": "",
						"data_config": ""
					}]
				};
				requestConfig.params = self.query0;
				self.$axios
					.post("/api/v0.1/report_data", requestConfig)
					.then(function(response) {
						let message = response.data;
						const newOptions = JSON.parse(JSON.stringify(self.options_2));
						if (!newOptions.title) newOptions.title = {}
						if (!newOptions.title.text) newOptions.title.text = {}
						newOptions.title.text = message.title;
						if (message.x_data.length > 0 || message.y_data.length > 0) {
							newOptions.showData = true;
						} else {
							newOptions.showData = false;
						}
						if (newOptions.series && newOptions.series.length > 0) {
							newOptions.series.forEach((item) => {
								message.y_data.forEach((it) => {
									if (it.legend == item.name) {
										let dataArray = [];
										it.y_data.forEach(function(val, index) {
											let data = {};
											data.value = val;
											data.name = message.x_data[index];
											dataArray.push(data);
										});
										item.data = dataArray;
									}
								});
							});
						}
						self.options_2 = newOptions;

					}).catch(function(error) {
						console.log(error);
					});
			},
			findReportByConfig3() {
				let self = this;
				let requestConfig = {};
				requestConfig.config = {
					"alias_id": 1,
					"chart_type": "pie",
					"data_source_config": {
						"legend": "作品分类分布",
						"data_config": "SELECT \n    COUNT(fq.*) AS value,\n    u.current_qualification,\n    fq.document_category_name as name\nFROM dw_fact_qlf_qualification fq\nLEFT JOIN\n(\n    -- 因为当前工号不唯一，所以需要子查询里去重\n    SELECT\n            user_id,\n            user_name,\n            business_dep_name,\n        department_info_name,\n        post_parent,\n        current_qualification\n    FROM\n        dw_dim_staff \n    WHERE\n            -- 筛选当非禁用账户条件\n        disabled = '0'\n            -- 筛选在职和试用期人员\n        AND on_duty_status IN ( '在职', '试用' ) \n            -- 限定事业部范围\n\t\t\t\tAND business_dep_name in ('SMB产品事业部', '无线产品事业部', '数据中心交换产品事业部','路由器产品事业部', '研究院', '园区与城域网交换产品事业部')\n            -- 筛选事业部条件\n            AND business_dep_name = ?\n            -- 筛选部门范围条件\n            AND department_info_name =?\n            -- 筛选岗位类别\n            AND post_parent ='测试工程师'\n            -- 筛选是否管理岗，0为非管理岗，1为管理岗\n            AND is_leader = ?\n\t\t\t\t\t\tand current_qualification = ?\n    GROUP BY user_id,user_name,business_dep_name,\n        department_info_name,\n        post_parent,\n        current_qualification\n) u ON fq.user_id = u.user_id\nWHERE \n-- 文档状态关闭的，才表示文档已经完成并且提交\nfq.document_status ='关闭'\nAND u.user_id > ''\nGROUP BY u.current_qualification,fq.document_category_name\n"
					},
					"multi_data": 0,
					"relation_search_name": "search",
					"title": "作品分类分布",
					"x_data_source_config": {
						"data_config": "",
						"x_is_sql": "0"
					},
					"y_data_source_config": [{
						"y_is_sql": "0",
						"legend": "",
						"data_config": ""
					}]
				};
				requestConfig.params = self.query0;
				self.$axios
					.post("/api/v0.1/report_data", requestConfig)
					.then(function(response) {
						let message = response.data;
						const newOptions = JSON.parse(JSON.stringify(self.options_3));
						if (!newOptions.title) newOptions.title = {}
						if (!newOptions.title.text) newOptions.title.text = {}
						if (message.x_data.length > 0 || message.y_data.length > 0) {
							newOptions.showData = true;
						} else {
							newOptions.showData = false;
						}
						if (newOptions.series && newOptions.series.length > 0) {
							newOptions.series.forEach((item) => {
								message.y_data.forEach((it) => {
									if (it.legend == item.name) {
										let dataArray = [];
										const newData = it.y_data.sort((a, b) => b - a)
										let arr01 = []
										let arr02 = []
										if (newData.length > 30) {
											arr01 = newData.slice(0, 30)
											arr02 = [newData.slice(30).reduce((val, item) => {
												val = val + Number(item)
												return val
											}, 0)]
											message.x_data[30] = '更多'
										} else {
											arr01 = newData
										}
										[...arr01, ...arr02].forEach(function(val, index) {
											let data = {};
											data.value = val;
											data.name = message.x_data[index];
											dataArray.push(data);
										});
										item.data = dataArray;
									}
								});
							});
						}
						self.options_3 = newOptions;

					}).catch(function(error) {
						console.log(error);
					});
			},
			findReportByConfig4() {
				let self = this;
				let requestConfig = {};
				requestConfig.config = {
					"alias_id": 0,
					"chart_type": "pie",
					"data_source_config": {
						"legend": "资质分布",
						"data_config": "SELECT\n\tt.current_qualification as name,\n\tSUM ( t.qualificationNums ) as value\nFROM\n(\n    SELECT\n      business_dep_name,\n        department_info_name,\n        post_parent,\n        current_qualification,\n        COUNT ( * ) AS qualificationNums,\n        SUM( case when  on_duty_status = '在职' then  1 else  0 end ) as 在职,\n        SUM( case when  on_duty_status = '试用' then  1 else  0 end ) as 试用\n    FROM\n        dw_dim_staff \n    WHERE\n            -- 筛选当非禁用账户条件\n        disabled = '0'\n            -- 筛选在职和试用期人员\n        AND on_duty_status IN ( '在职', '试用' ) \n            -- 限定事业部范围\n      AND business_dep_name in ('SMB产品事业部', '无线产品事业部', '数据中心交换产品事业部','路由器产品事业部', '研究院', '园区与城域网交换产品事业部')\n  AND is_leader = ? \n           -- 筛选事业部条件\n            AND business_dep_name = ?\n            -- 筛选部门范围条件\n            AND department_info_name =?\n            -- 筛选岗位类别\n            AND post_parent ='硬件开发'\n    GROUP BY \n        post_parent,business_dep_name,department_info_name,current_qualification\n    -- order by business_dep_name,department_info_name\n) t\nGROUP BY t.current_qualification;\n"
					},
					"multi_data": 0,
					"relation_search_name": "search",
					"title": "资质分类资质分布",
					"x_data_source_config": {
						"data_config": "",
						"x_is_sql": "0"
					},
					"y_data_source_config": [{
						"y_is_sql": "0",
						"legend": "",
						"data_config": ""
					}]
				};
				requestConfig.params = self.query0;
				self.$axios
					.post("/api/v0.1/report_data", requestConfig)
					.then(function(response) {
						let message = response.data;
						const newOptions = JSON.parse(JSON.stringify(self.options_4));
						if (!newOptions.title) newOptions.title = {}
						if (!newOptions.title.text) newOptions.title.text = {}
						newOptions.title.text = message.title;
						if (message.x_data.length > 0 || message.y_data.length > 0) {
							newOptions.showData = true;
						} else {
							newOptions.showData = false;
						}
						if (newOptions.series && newOptions.series.length > 0) {
							newOptions.series.forEach((item) => {
								message.y_data.forEach((it) => {
									if (it.legend == item.name) {
										let dataArray = [];
										it.y_data.forEach(function(val, index) {
											let data = {};
											data.value = val;
											data.name = message.x_data[index];
											dataArray.push(data);
										});
										item.data = dataArray;
									}
								});
							});
						}
						self.options_4 = newOptions;
					}).catch(function(error) {
						console.log(error);
					});
			},
			findReportByConfig5() {
				let self = this;
				let requestConfig = {};
				requestConfig.config = {
					"alias_id": 1,
					"chart_type": "pie",
					"data_source_config": {
						"legend": "作品分类分布",
						"data_config": "SELECT \n    COUNT(fq.*) AS value,\n    u.current_qualification,\n    fq.document_category_name as name\nFROM dw_fact_qlf_qualification fq\nLEFT JOIN\n(\n    -- 因为当前工号不唯一，所以需要子查询里去重\n    SELECT\n            user_id,\n            user_name,\n            business_dep_name,\n        department_info_name,\n        post_parent,\n        current_qualification\n    FROM\n        dw_dim_staff \n    WHERE\n            -- 筛选当非禁用账户条件\n        disabled = '0'\n            -- 筛选在职和试用期人员\n        AND on_duty_status IN ( '在职', '试用' ) \n            -- 限定事业部范围\n\t\t\t\tAND business_dep_name in ('SMB产品事业部', '无线产品事业部', '数据中心交换产品事业部','路由器产品事业部', '研究院', '园区与城域网交换产品事业部')\n            -- 筛选事业部条件\n            AND business_dep_name = ?\n            -- 筛选部门范围条件\n            AND department_info_name =?\n            -- 筛选岗位类别\n            AND post_parent ='硬件开发'\n            -- 筛选是否管理岗，0为非管理岗，1为管理岗\n            AND is_leader = ?\n\t\t\t\t\t\tand current_qualification = ?\n    GROUP BY user_id,user_name,business_dep_name,\n        department_info_name,\n        post_parent,\n        current_qualification\n) u ON fq.user_id = u.user_id\nWHERE \n-- 文档状态关闭的，才表示文档已经完成并且提交\nfq.document_status ='关闭'\nAND u.user_id > ''\nGROUP BY u.current_qualification,fq.document_category_name\n"
					},
					"multi_data": 0,
					"relation_search_name": "search",
					"title": "作品分类分布",
					"x_data_source_config": {
						"data_config": "",
						"x_is_sql": "0"
					},
					"y_data_source_config": [{
						"y_is_sql": "0",
						"legend": "",
						"data_config": ""
					}]
				};
				requestConfig.params = self.query0;
				self.$axios
					.post("/api/v0.1/report_data", requestConfig)
					.then(function(response) {
						let message = response.data;
						const newOptions = JSON.parse(JSON.stringify(self.options_5));
						if (!newOptions.title) newOptions.title = {}
						if (!newOptions.title.text) newOptions.title.text = {}
						if (message.x_data.length > 0 || message.y_data.length > 0) {
							newOptions.showData = true;
						} else {
							newOptions.showData = false;
						}
						if (newOptions.series && newOptions.series.length > 0) {
							newOptions.series.forEach((item) => {
								message.y_data.forEach((it) => {
									if (it.legend == item.name) {
										let dataArray = [];
										const newData = it.y_data.sort((a, b) => b - a)
										let arr01 = []
										let arr02 = []
										if (newData.length > 30) {
											arr01 = newData.slice(0, 30)
											arr02 = [newData.slice(30).reduce((val, item) => {
												val = val + Number(item)
												return val
											}, 0)]
											message.x_data[30] = '更多'
										} else {
											arr01 = newData
										}
										[...arr01, ...arr02].forEach(function(val, index) {
											let data = {};
											data.value = val;
											data.name = message.x_data[index];
											dataArray.push(data);
										});
										item.data = dataArray;
									}
								});
							});
						}
						self.options_5 = newOptions;

					}).catch(function(error) {
						console.log(error);
					});
			},
			findReportByConfig6(type) {
				let self = this;
				self.$axios
					.get("/api/v0.1/manager?type=" + type + "&depart=" + this.query0.business_dep_name + "&second_part=" + this.query0
						.department_info_name)
					.then(function(response) {
						let message = response.data;
						let obj = null;
						if (type === '嵌入式软件开发') {
							obj = self.options
						} else if (type === '测试工程师') {
							obj = self.options_2
						} else {
							obj = self.options_4
						}
						const newOptions = JSON.parse(JSON.stringify(obj));
						if (!newOptions.title) newOptions.title = {}
						if (!newOptions.title.text) newOptions.title.text = {}
						newOptions.title.text = message.title;
						if (newOptions.series && newOptions.series.length > 0) {
							newOptions.series.forEach((item) => {
								message.y_data.forEach((it) => {
									if (it.legend == item.name) {
										let dataArray = [];
										it.y_data.forEach(function(val, index) {
											let data = {};
											data.value = val;
											data.name = message.x_data[index];
											dataArray.push(data);
										});
										item.data = dataArray;
									}
								});
							});
						}
						if (type === '嵌入式软件开发') {
							self.options = newOptions;
						} else if (type === '测试工程师') {
							self.options_2 = newOptions;
						} else {
							self.options_4 = newOptions;
						}
					}).catch(function(error) {
						console.log(error);
					});
			},
			findAllReport0() {
				let self = this;
				if (this.query0.business_dep_name !== '研究院') {
					this.query0.department_info_name = ''
				}
				this.findReportByConfig0();
				this.findReportByConfig1();
				this.findReportByConfig2();
				this.findReportByConfig3();
				this.findReportByConfig4();
				this.findReportByConfig5();
				this.findReportByConfig6("嵌入式软件开发");
				this.findReportByConfig6("测试工程师");
				this.findReportByConfig6("硬件开发");
			},

		},
		mounted() {
			this.findAllReport0();
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
			align-items: center;
		}

		.__pts_587_uid_11 {
			background: #343A40;
			padding-left: 10px;
			padding-right: 10px;
			padding-top: 10px;
			padding-bottom: 10px;
		}

		.__pts_587_uid_35 {
			width: 235px;
			height: 50px;
			background: #13B5B1;
			display: inline-block;
			transform: skew(-45deg);
			margin-left: 35px;
			vertical-align: bottom;
		}

		.__pts_587_uid_36 {
			font-size: 16px;
			position: absolute;
			top: 12px;
			left: 50px;
		}

		.__pts_587_uid_37 {
			border-top: 2px dashed #13B5B1;
			margin-left: 250px;
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
			align-items: center;
			justify-content: center;
      min-height: 300px
		}
    
    .second-part {
      .el-radio-button--small .el-radio-button__inner {
        padding: 4px 5px;
      }
    }

	}
</style>
