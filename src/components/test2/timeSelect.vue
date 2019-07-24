<template>
	<div class="index">
		<div style="display: inline-block;">
			<span>按</span>
			<el-button type="primary" @click="typeChange('day')">日</el-button>
			<el-button type="primary" @click="typeChange('week')">周</el-button>
			<el-button type="primary" @click="typeChange('month')">月</el-button>
			<span>统计</span>
		</div>
		<div style="display: inline-block;margin-left: 15px;">
			<el-date-picker @change="startTimeChange" v-model="startTime" :type="dateType" :format="format" :picker-options="pickerOptions"
			 :placeholder="startPlaceholder">
			</el-date-picker>
			<el-date-picker @change="endTimeChange" style="margin-left: 10px;" v-model="endTime" :type="dateType" :format="format"
			 :picker-options="pickerOptions" :placeholder="endPlaceholder">
			</el-date-picker>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			value: {
				type: [Object],
				default () {
					return []
				}
			}
		},
		data() {
			return {
				dateType: "date",
				startPlaceholder: "选择开始日期",
				endPlaceholder: "选择结束日期",
				startTime: "",
				endTime: "",
				format: "",
				pickerOptions: {
					firstDayOfWeek: 1
				}
			};
		},
		mounted() {
			if(this.value) {
				this.startTime = this.value.value[0];
				this.endTime = this.value.value[1];
				this.dateType = this.value.type;
			} else {
				this.startTime = new Date();
				this.endTime = new Date();
				this.dateType = "date";
			}
			
		},
		methods: {
			startTimeChange() {
				this.$emit('input', this.formatValue(this.startTime, this.endTime))
			},
			endTimeChange() {
				this.$emit('input', this.formatValue(this.startTime, this.endTime))
			},
			typeChange(val) {
				if (val === 'day') {
					this.dateType = "date";
					this.startPlaceholder = "选择开始日期";
					this.endPlaceholder = "选择结束日期";
					this.format = "";
				}
				if (val === 'week') {
					this.dateType = "week";
					this.startPlaceholder = "选择开始周";
					this.endPlaceholder = "选择结束周";
					this.format = "yyyy 第 WW 周";
				}
				if (val === 'month') {
					this.dateType = "month";
					this.startPlaceholder = "选择开始月";
					this.endPlaceholder = "选择结束月";
					this.format = "";
				}
				this.$emit('input', this.formatValue(this.startTime, this.endTime))
			},
			submit() {
				console.log(this.formatValue(this.startTime, this.endTime))
				this.$emit('input', this.formatValue(this.startTime, this.endTime))
				console.log("start=", this.crtTimeFtt(this.startTime), ",endTime=", this.crtTimeFtt(this.endTime))
			},
			crtTimeFtt(val) {
				if (val != null) {
					var date = new Date(val);
					return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
				}
			},
			formatValue(startTime, endTime) {
				if (!startTime && !endTime) return {}
				const timeRange = {}
				let temp = [];
				timeRange.type = this.dateType;
				let oneDay = 24 * 60 * 60 * 1000;
				switch (this.dateType) {
					case 'date':
						timeRange.start_time = startTime ? startTime.getTime() : "";
						timeRange.end_time = endTime ? endTime.getTime() : "";

						console.info(new Date(timeRange.start_time))
						console.info(new Date(timeRange.end_time))
						break;
					case 'week':
						timeRange.start_time = startTime.getTime() - oneDay;
						timeRange.end_time = endTime.getTime() + 6 * oneDay - 1000;
						
						console.info(new Date(timeRange.start_time))
						console.info(new Date(timeRange.end_time))
						break;
					case 'month':
						timeRange.start_time = startTime.getTime();
						var end = new Date(endTime.getYear() + 1900, endTime.getMonth() + 1, 0);
						timeRange.end_time = end.getTime();

						console.info(new Date(timeRange.start_time))
						console.info(new Date(timeRange.end_time))
						break;
					default:
						break;
				}
				temp.push(new Date(timeRange.start_time));
				temp.push(new Date(timeRange.end_time));
				timeRange.value = temp;
				return timeRange
			}
		}
	}
</script>

<style>

</style>
