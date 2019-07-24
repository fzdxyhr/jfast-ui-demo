<template>
  <div id="pts_566_51" __model='{"id":"pts_566_51"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='51' __cid='100'>
    <div name="aaa" id="pts_566_53" __model='{"name":"aaa","id":"pts_566_53"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='53' __pid='51' __cid='div'>
      <el-form inline label-position="right" :model="query0" id="pv_153_55" class="demo-form-inline __pv_153_uid_55" __model='{"inline":true,"label-position":"right","model":{"business_dep_name":"","second_business_dep_name":"","current_qualification":""},"id":"pv_153_55"}' __config='{"draggable":false}' __event='{}' __cls='{"demo-form-inline":true}' __uid='55' __pid='53' __cid='224'>
        <el-form-item label="事业部" label-width="70px" id="pv_153_56" __model='{"label":"事业部","label-width":"70px","required":false,"id":"pv_153_56"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='56' __pid='55' __cid='225'>
          <el-radio-group v-model="query0.business_dep_name" id="pv_153_57" __model='{"value":"","disabled":false,"size":"","text-color":"","fill":"","v-model":"query0.business_dep_name","id":"pv_153_57"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='57' __pid='56' __cid='el-radio-group'>
            <el-radio-button text="全部" label=" " id="pv_153_58" __model='{"text":"全部","label":" ","disabled":false,"name":"","id":"pv_153_58"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='58' __pid='57' __cid='el-radio-button'></el-radio-button>
            <el-radio-button text="SMB产品事业部" label="SMB产品事业部" id="pv_153_59" __model='{"text":"SMB产品事业部","label":"SMB产品事业部","disabled":false,"name":"","id":"pv_153_59"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='59' __pid='57' __cid='el-radio-button'></el-radio-button>
            <el-radio-button text="无线产品事业部" label="无线产品事业部" id="pv_153_60" __model='{"text":"无线产品事业部","label":"无线产品事业部","disabled":false,"name":"","id":"pv_153_60"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='60' __pid='57' __cid='el-radio-button'></el-radio-button>
            <el-radio-button text="数据中心交换产品事业部" label="数据中心交换产品事业部" id="pv_153_61" __model='{"text":"数据中心交换产品事业部","label":"数据中心交换产品事业部","disabled":false,"name":"","id":"pv_153_61"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='61' __pid='57' __cid='el-radio-button'></el-radio-button>
            <el-radio-button text="路由器产品事业部" label="路由器产品事业部" id="pv_153_62" __model='{"text":"路由器产品事业部","label":"路由器产品事业部","disabled":false,"name":"","id":"pv_153_62"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='62' __pid='57' __cid='el-radio-button'></el-radio-button>
            <el-radio-button text="研究院" label="研究院" id="pv_153_63" __model='{"text":"研究院","label":"研究院","disabled":false,"name":"","id":"pv_153_63"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='63' __pid='57' __cid='el-radio-button'></el-radio-button>
          </el-radio-group>
          <el-radio-group v-if="query0.business_dep_name == '研究院'" v-model="query0.second_business_dep_name" id="pv_153_64" __model='{"value":"","disabled":false,"size":"","text-color":"","fill":"","v-if":"query0.business_dep_name == %vvesdot%研究院%vvesdot%","v-model":"query0.second_business_dep_name","id":"pv_153_64"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='64' __pid='56' __cid='el-radio-group'>
            <el-radio-button text="全部" label="" id="pv_153_65" __model='{"text":"全部","label":"","disabled":false,"name":"","id":"pv_153_65"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='65' __pid='64' __cid='el-radio-button'></el-radio-button>
            <el-radio-button text="软件平台" label="软件平台" id="pv_153_66" __model='{"text":"软件平台","label":"软件平台","disabled":false,"name":"","id":"pv_153_66"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='66' __pid='64' __cid='el-radio-button'></el-radio-button>
            <el-radio-button text="硬件平台" label="硬件平台" id="pv_153_67" __model='{"text":"硬件平台","label":"硬件平台","disabled":false,"name":"","id":"pv_153_67"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='67' __pid='64' __cid='el-radio-button'></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="资质" label-width="70px" id="pv_153_68" __model='{"label":"资质","label-width":"70px","required":false,"id":"pv_153_68"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='68' __pid='55' __cid='225'>
          <el-input placeholder="请输入资质" type="text" v-model="query0.current_qualification" id="pv_153_69" __model='{"placeholder":"请输入资质","value":"","type":"text","size":"","disabled":false,"v-model":"query0.current_qualification","id":"pv_153_69"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='69' __pid='68' __cid='212'></el-input>
        </el-form-item>
        <el-button name="查询" type="primary" id="pv_153_70" @click="findAllReport0" __model='{"name":"查询","type":"primary","size":"","plain":false,"round":false,"circle":false,"icon":"","id":"pv_153_70"}' __config='{"draggable":false}' __event='{"click":{"type":"2","funcName":"findAllReport0","funcRealArgs":"","eventModifier":""}}' __cls='{}' __uid='70' __pid='55' __cid='el-button'></el-button>
      </el-form>
    </div>
    <v-chart :options="options" auto-resize __relation_search="aaa" id="pts_566_52" @click="handleBack52" class="__pv_153_uid_52" __model='{"options":{"title":{"text":"图表示例","x":"center"},"series":[{"name":"图标示例","type":"pie","radius":"55%","center":["50%","60%"],"data":[{"value":335,"name":"标签1"},{"value":310,"name":"标签2"},{"value":234,"name":"标签3"},{"value":135,"name":"标签4"},{"value":1548,"name":"标签5"}]}]},"auto-resize":true,"__relation_search":"aaa","id":"pts_566_52"}' __config='{"draggable":false}' __event='{"click":{"funcName":"handleBack52","callbackPreprocessing":"this.query0.current_qualification= e.name","relationChartefreshFunc":"findReportByConfig1","quickType":"5","eventModifier":"","type":"1"}}' __cls='{}' __uid='52' __pid='51' __cid='2001'></v-chart>
    <v-chart :options="options_1" auto-resize __relation_search="aaa" id="pts_566_54" class="__pv_153_uid_54" __model='{"options":{"title":{"text":"图表示例","x":"center"},"series":[{"name":"图标示例","type":"pie","radius":"55%","center":["50%","60%"],"data":[{"value":335,"name":"标签1"},{"value":310,"name":"标签2"},{"value":234,"name":"标签3"},{"value":135,"name":"标签4"},{"value":1548,"name":"标签5"}]}]},"auto-resize":true,"__relation_search":"aaa","id":"pts_566_54"}' __config='{"draggable":false}' __event='{}' __cls='{}' __uid='54' __pid='51' __cid='2001'></v-chart>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        "options": {
          "title": {
            "text": "图表示例",
            "x": "center"
          },
          "series": [{
            "name": "资质分布",
            "type": "pie",
            "radius": "55%",
            "center": ["50%", "60%"],
            "data": [{
              "value": 335,
              "name": "标签1"
            }, {
              "value": 310,
              "name": "标签2"
            }, {
              "value": 234,
              "name": "标签3"
            }, {
              "value": 135,
              "name": "标签4"
            }, {
              "value": 1548,
              "name": "标签5"
            }]
          }]
        },
        "options_1": {
          "title": {
            "text": "图表示例",
            "x": "center"
          },
          // legend:{},
          "series": [{
            "name": "作品分类分布",
            "type": "pie",
            "radius": "55%",
            "center": ["50%", "60%"],
            "data": [{
              "value": 335,
              "name": "标签1"
            }, {
              "value": 310,
              "name": "标签2"
            }, {
              "value": 234,
              "name": "标签3"
            }, {
              "value": 135,
              "name": "标签4"
            }, {
              "value": 1548,
              "name": "标签5"
            }]
          }]
        },
        "query0": {
          "business_dep_name": "",
          "second_business_dep_name": "",
          "current_qualification": ""
        }
      }
    },
    methods: {
      findReportByConfig0() {
        let self = this;
        let requestConfig = {};
        requestConfig.config = {
          "alias_id": 0,
          "chart_type": "pie",
          "data_source_config": {
            "legend": "资质分布",
            "data_config": "SELECT\n SUM ( t.qualificationNums ) as value,\n t.current_qualification as name\nFROM\n(\n    SELECT\n      business_dep_name,\n        department_info_name,\n        post_parent,\n        current_qualification,\n        COUNT ( * ) AS qualificationNums,\n        SUM( case when  on_duty_status = '在职' then  1 else  0 end ) as 在职,\n        SUM( case when  on_duty_status = '试用' then  1 else  0 end ) as 试用\n    FROM\n        dw_dim_staff \n    WHERE\n            -- 筛选当非禁用账户条件\n        disabled = '0'\n            -- 筛选在职和试用期人员\n        AND on_duty_status IN ( '在职', '试用' ) \n            -- 限定事业部范围\n      AND business_dep_name in ('SMB产品事业部', '无线产品事业部', '数据中心交换产品事业部','路由器产品事业部', '研究院', '园区与城域网交换产品事业部')\n            -- 筛选事业部条件\n            AND business_dep_name = ?\n            -- 筛选部门范围条件\n            -- AND department_info_name IN()\n            -- 筛选岗位类别\n            AND post_parent ='嵌入式软件开发'\n            -- 筛选是否管理岗，0为非管理岗，1为管理岗\n            AND is_leader = 1\n  GROUP BY \n        post_parent,business_dep_name,department_info_name,current_qualification\n    -- order by business_dep_name,department_info_name\n) t\nGROUP BY t.current_qualification"
          },
          "multi_data": 0,
          "relation_search_name": "aaa",
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
            if (newOptions.hasOwnProperty('legend')) {
              if (!newOptions.legend) newOptions.legend = {}
              if (!newOptions.legend.data) newOptions.legend.data = []
              newOptions.legend.data = message.x_data;
            }
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
            "data_config": "SELECT \n    COUNT(fq.*) as value,\n    u.current_qualification ,\n    fq.document_category_name as name\nFROM dw_fact_qlf_qualification fq\nLEFT JOIN\n(\n    -- 因为当前工号不唯一，所以需要子查询里去重\n    SELECT\n            user_id,\n            user_name,\n            business_dep_name,\n        department_info_name,\n        post_parent,\n        current_qualification\n    FROM\n        dw_dim_staff \n    WHERE\n            -- 筛选当非禁用账户条件\n        disabled = '0'\n            -- 筛选在职和试用期人员\n        AND on_duty_status IN ( '在职', '试用' ) \n            -- 限定事业部范围\n      AND business_dep_name in ('SMB产品事业部', '无线产品事业部', '数据中心交换产品事业部','路由器产品事业部', '研究院', '园区与城域网交换产品事业部')\n            -- 筛选事业部条件\n            AND business_dep_name = ?\n            -- 筛选部门范围条件\n            -- AND department_info_name IN()\n            -- 筛选岗位类别\n            AND post_parent ='嵌入式软件开发'\n            -- 筛选是否管理岗，0为非管理岗，1为管理岗\n            AND is_leader = 1\n            -- ZIZHIMINGC\n            AND current_qualification = ?\n    GROUP BY user_id,user_name,business_dep_name,\n        department_info_name,\n        post_parent,\n        current_qualification\n) u ON fq.user_id = u.user_id\nWHERE \n-- 文档状态关闭的，才表示文档已经完成并且提交\nfq.document_status ='关闭'\nAND u.user_id > ''\nGROUP BY u.current_qualification,fq.document_category_name;"
          },
          "multi_data": 0,
          "relation_search_name": "aaa",
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
            if (newOptions.hasOwnProperty('legend')) {
            	if (!newOptions.legend) newOptions.legend = {}
            	if (!newOptions.legend.data) newOptions.legend.data = []
            	newOptions.legend.data = message.x_data;
            }
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
            self.options_1 = newOptions;

          }).catch(function(error) {
            console.log(error);
          });
      },
      findAllReport0() {
        let self = this;
        self.findReportByConfig0();
        self.findReportByConfig1();
      },
      handleBack52(e) {
        this.query0.current_qualification = e.name
        this.findReportByConfig1()
      }
    },
    mounted() {
      this.findReportByConfig0();
      this.findReportByConfig1();

    }
  }
</script>
<style scoped>
  .__pv_153_uid_55 {
    margin-bottom: -15px;
  }

  .__pv_153_uid_52 {
    width: 100%;
  }

  .__pv_153_uid_54 {
    width: 100%;
  }
</style>