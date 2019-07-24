<template>
  <div id="detail" __cid='100'>
              <div v-if="table_name =='t_student' || table_name == 'all'" id="content" __cid='div' style="margin-top: 10px;">
        <div __cid='div' id="label_t_student">学生信息详情</div>
        <el-table
            __cid='226'
          :data="tableData1"
          border
          highlight-current-row
          tooltip-effect="dark"
          style="width: 100%">
                        <el-table-column
                  __cid='227'
                  __model='{"width":""}'
                  prop="id"
                  header-align="center"
                  align="center"
                  label="学生标识"
                  show-overflow-tooltip>
              </el-table-column>
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
                        <el-table-column
                  __cid='227'
                  __model='{"width":""}'
                  prop="insterst"
                  header-align="center"
                  align="center"
                  label="兴趣"
                  show-overflow-tooltip>
              </el-table-column>
                  </el-table>
      </div>
              <div v-if="table_name =='t_class_activity' || table_name == 'all'" id="content" __cid='div' style="margin-top: 10px;">
        <div __cid='div' id="label_t_class_activity">班级活动详情</div>
        <el-table
            __cid='226'
          :data="tableData2"
          border
          highlight-current-row
          tooltip-effect="dark"
          style="width: 100%">
                        <el-table-column
                  __cid='227'
                  __model='{"width":""}'
                  prop="id"
                  header-align="center"
                  align="center"
                  label="标识"
                  show-overflow-tooltip>
              </el-table-column>
                        <el-table-column
                  __cid='227'
                  __model='{"width":""}'
                  prop="name"
                  header-align="center"
                  align="center"
                  label="活动名称"
                  show-overflow-tooltip>
              </el-table-column>
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
                        "tableData1": [],
                        "tableData2": [],
                        "id":"",
        "table_name":""
      }
    },
    mounted() {
        this.id = this.rjDialogParams().id;
        this.table_name = this.rjDialogParams().table_name;
                            this.go2Query1();
                            this.go2Query2();
                    },
    methods: {
                            go2Query1() {
            this.$axios.get('/api/demo/tgrades/'+this.id+"/t_student/detail").then((res) => {
                    if(res.data.success){
                    let message = res.data.result;
                    this.tableData1 = message;
                }
            }).catch((err) => {
                });
            },
                                go2Query2() {
            this.$axios.get('/api/demo/tgrades/'+this.id+"/t_class_activity/detail").then((res) => {
                    if(res.data.success){
                    let message = res.data.result;
                    this.tableData2 = message;
                }
            }).catch((err) => {
                });
            },
                      }
}
</script>