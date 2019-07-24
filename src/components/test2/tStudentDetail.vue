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
                        <el-table-column
                  __cid='227'
                  __model='{"width":""}'
                  prop="grade_id"
                  header-align="center"
                  align="center"
                  label="班级标识"
                  show-overflow-tooltip>
              </el-table-column>
                        <el-table-column
                  __cid='227'
                  __model='{"width":""}'
                  prop="name"
                  header-align="center"
                  align="center"
                  label="学生名"
                  show-overflow-tooltip>
              </el-table-column>
                        <el-table-column
                  __cid='227'
                  __model='{"width":""}'
                  prop="sex"
                  header-align="center"
                  align="center"
                  label="性别"
                  show-overflow-tooltip>
              </el-table-column>
                        <el-table-column
                  __cid='227'
                  __model='{"width":""}'
                  prop="age"
                  header-align="center"
                  align="center"
                  label="年龄"
                  show-overflow-tooltip>
              </el-table-column>
                        <el-table-column
                  __cid='227'
                  __model='{"width":""}'
                  prop="nature"
                  header-align="center"
                  align="center"
                  label="性格"
                  show-overflow-tooltip>
              </el-table-column>
                        <el-table-column
                  __cid='227'
                  __model='{"width":""}'
                  prop="create_time"
                  header-align="center"
                  align="center"
                  label="创建时间"
                  show-overflow-tooltip>
              </el-table-column>
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
        this.$axios.get('/api/demo/tgrades/'+this.id+"/detail").then((res) => {
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