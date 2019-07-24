<template>
  <div id="detail" __cid='100'>
      <div id="content" __cid='div'>
        <el-table
            __cid='226'
          :data="tableData"
          border
          highlight-current-row
          tooltip-effect="dark"
          style="width: 100%">
                  </el-table>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        "query":{},
        "tableData": [],
        "id":""
      }
    },
    mounted() {
      this.id = this.rjDialogParams().id;
      this.go2Query();
    },
    methods: {
      go2Query() {
        this.$axios.get('/api/demo/tstudents/'+this.id+"/detail").then((res) => {
            if(res.data.success){
                let message = res.data.result;
                this.tableData = message;
            }
        }).catch((err) => {
        });
      }
  }
}
</script>