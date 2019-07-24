<template>
  <div __model='{}' __config='{"draggable":false}' __event='{}' __uid='46' __cid='100'>
    <div __name="aaa" name="aaa" __model='{"name":"aaa"}' __config='{"draggable":false}' __event='{}' __uid='50' __pid='46' __cid='v-chart-search-placeholder'><el-form :inline="true" :model="query0" class="demo-form-inline" style="margin-bottom:-15px;" __cid='224'>
    <el-form-item label="测试名称" __cid='225'>
    </el-form-item>
    <el-button __cid='el-button' __model='{"name":"查询"}' type="primary" @click="findAllReport0">查询</el-button>
</el-form></div>
    <v-chart __relation_search="aaa" :options="options_0" auto-resize relation-search="aaa" class="__uid_49" __model='{"options":{},"auto-resize":true,"relation-search":"aaa"}' __config='{"draggable":false}' __event='{}' __uid='49'
      __pid='46' __cid='v-chart-placeholder'></v-chart>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ,
query0:{
"name":"",
},

      }
    },
    mounted() {
      this.findReportByConfig0();

    },
    methods: {
      findReportByConfig0(){
    let self = this;
    let requestConfig = {};
    requestConfig.params = self.query0;
    self.$axios
        .post("/api/v0.1/report_data_0",requestConfig)
        .then(function(response) {
            let message = response.data;
            const newOptions = JSON.parse(JSON.stringify(self.options));
if (!newOptions.title) newOptions.title = {}
if (!newOptions.title.text) newOptions.title.text = {}
if (newOptions.hasOwnProperty('legend')) {
    if (!newOptions.legend) newOptions.legend = {}
    if (!newOptions.legend.data) newOptions.legend.data = []
}
newOptions.title.text = message.title;
if (newOptions.hasOwnProperty('legend')) {
    newOptions.legend.data = message.legend;
}
newOptions.xAxis.data = message.x_data;
if (newOptions.series && newOptions.series.length > 0) {
    newOptions.series.forEach((item) => {
        message.y_data.forEach((it) => {
            if (it.legend == item.name) {
                item.data = it.y_data;
            }
        });
    });
}
self.options=newOptions;
        }).catch(function(error) {
            console.log(error);
        });
},
findAllReport0(){
    let self = this;
    self.findReportByConfig0();
},

    }
  }
</script>
<style scoped>
  .__uid_49 {
    width: 100%;
    height: 250px;
  }
</style>