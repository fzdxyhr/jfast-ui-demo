/**
 * 参考
 * https://www.jianshu.com/p/bdaffff30b31
 */

import sortBy from 'lodash/sortBy'

export function parseTimeObject(res) {
	
	function replaceMonth(str) {
		var timerangeStr = str.replace(/January/gi, '01');
		timerangeStr = timerangeStr.replace(/February/gi, '02');
		timerangeStr = timerangeStr.replace(/March/gi, '03');
		timerangeStr = timerangeStr.replace(/April/gi, '04');
		timerangeStr = timerangeStr.replace(/May/gi, '05');
		timerangeStr = timerangeStr.replace(/June/gi, '06');
		timerangeStr = timerangeStr.replace(/July/gi, '07');
		timerangeStr = timerangeStr.replace(/August/gi, '08');
		timerangeStr = timerangeStr.replace(/September/gi, '09');
		timerangeStr = timerangeStr.replace(/October/gi, '10');
		timerangeStr = timerangeStr.replace(/November/gi, '11');
		timerangeStr = timerangeStr.replace(/December/gi, '12');
		return timerangeStr;
	}
	
	function replaceWeekday(str) {
		var timerangeStr = str.replace(/Monday/gi, 'Monday');
		timerangeStr = timerangeStr.replace(/Tuesday/gi, 'Tuesday');
		timerangeStr = timerangeStr.replace(/Wednesday/gi, 'Wednesday');
		timerangeStr = timerangeStr.replace(/Thursday/gi, 'Thursday');
		timerangeStr = timerangeStr.replace(/Friday/gi, 'Friday');
		timerangeStr = timerangeStr.replace(/Saturday/gi, 'Saturday');
		timerangeStr = timerangeStr.replace(/Sunday/gi, 'Sunday');
		return timerangeStr;
	}
	
	var timeArr = [];
	for (var i = 0; i < res.length; i++) {
		var value = res[i].trim();
		if(value === "")
			continue;
		if (value.indexOf("time-range entry") !== -1) {
			if (timeCell) {
				timeArr.push(timeCell);
			}
			var timeCell = {};
			var match = value.split(/^\s*time-range entry:\s*/gi);
			match = match[1] ? match[1] : match[0];
			match = match.split(/\s*\((inactive|active)\)$/gi);
			timeCell.timeName = match[0];
			timeCell.text = match[0];
			timeCell.value = match[0];
			timeCell.active = match[1];
			timeCell.region = [];
		}
		else {
			var detailStr;
			detailStr = value.trim().replace(/\s*periodic Daily (\d{1,2}:\d{1,2}) to (\d{1,2}:\d{1,2})\s*/gi, '{"timeType":"periodic","start":"$1","end":"$2","period":"Daily"}');
			detailStr = detailStr.replace(/\s*periodic\s*((\w* )*)\s*(\d{1,2}:\d{1,2}) to (\d{1,2}:\d{1,2})\s*/gi, '{"timeType":"periodic","start":"$3","end":"$4","period":"$1"}');
			detailStr = detailStr.replace(/\s*periodic ((([a-z])*\s)*)(\d{1,2}:\d{1,2}) to ((([a-z])*\s)*)(\d{1,2}:\d{1,2})\s*/gi, '{"timeType":"periodic","start":"$4","end":"$8","period":"$1-$5"}');
			detailStr = detailStr.replace(/\s*absolute start\s+(.*?)\s+(\d+)\s+(.*?)\s+(\d+)\s+end\s+(.*?)\s+(\d+)\s+(.*?)\s+(\d+)/gi, '{"timeType":"absolute","start":"$4-$3-$2 $1","end":"$8-$7-$6 $5"}');
			detailStr = replaceMonth(detailStr);
			detailStr = replaceWeekday(detailStr);
			timeCell.region.push(JSON.parse(detailStr));
		}
	}
	if (timeCell) {
		timeArr.push(timeCell);
	}
	return JSON.stringify(timeArr);
}


