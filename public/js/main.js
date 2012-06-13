/**
 * Main js file
 */

$.prettyDate.messages = {
	now: "刚刚",
	minute: "1分钟前",
	minutes: $.prettyDate.template("{0}分钟前"),
	hour: "1小时前",
	hours: $.prettyDate.template("{0}小时前"),
	yesterday: "昨天",
	days: $.prettyDate.template("{0}天前"),
	weeks: $.prettyDate.template("{0}周前")
};
$(function($) {
	$("[rel=dateType]").prettyDate();
});