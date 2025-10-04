$(function() {
		
	$('[data-toggle="tooltip"]').tooltip();
	
	/* **************** knob input control **************** */
	var dialersize1=130;
	var dialerwidth=dialersize1*1.2;
	
	setInterval(function() {
	    knobupdate();
	}, 1500);

	$("#dial-year").knob({
		'min': 1924,
		'max': 2030,
		//'data-width': dialersize1, //size of the ring
		'thickness': 0.4,  //thickness of the ring
		'width': dialerwidth,
		'step': 1,
		'change' : function (v) {
			$("#InputYear").html(v.toFixed(0));
			//$('#InputYear').trigger('DoBInputChanged');
		}
	});
	
	$("#dial-month").knob({
		'min': 0,
		'max': 12,
		//'data-width': dialersize1, //size of the ring
		'thickness': 0.4,  //thickness of the ring
		'width': dialerwidth,
		'step': 1,
		'change' : function (v) {
			$("#InputMonth").html(v.toFixed(0));
			$('#InputMonth').trigger('DoBInputChanged');
		}
	});

	
	$("#dial-day").knob({
		'min': 0,
		'max': 31,
		'data-width': dialersize1, //size of the ring
		'thickness': 0.4,  //thickness of the ring
		//'data-fgColor'="#222222",
		//'cursor':true,
		'width': dialerwidth,
		'step': 1,
		'change' : function (v) {
			$("#InputDay").html(v.toFixed(0));
			$("#InputDay").trigger('DoBInputChanged');
		}
	});

	$("#dial-hour").knob({
		'min': 0,
		'max': 23,
		//'data-width': dialersize1, //size of the ring
		'thickness': 0.3,  //thickness of the ring
		'width': dialerwidth,
		'step': 1,
		'displayInput': true,
		'change' : function (v) {
			$("#InputHour").html(v.toFixed(0));
			var 輸入時間=v.toFixed(0)+":"+$("#InputMinute").html()+":00";
			$("#InputDZHour").html(時間轉換地支(輸入時間, "地支"));
			//console.log(時間轉換地支(輸入時間, 1));
		}
	});

	$("#dial-minute").knob({
		'min': 0,
		'max': 59,
		'fgColor': "#ffec03",
		'cursor': '40',
		//'data-width': 90,
		'thickness': 0.3,  //thickness of the ring
		'width': 106,  //size of the ring
		'step': 1,
		'displayInput': false,

		'change' : function (v) {
			$("#InputMinute").html(v.toFixed(0));
			//$('#InputHour').trigger('DoBInputChanged');
		}

	});

	// ******************** 干支輸入 *************************

	$("#gz-dial-年干").knob({
		'min': 0,
		'max': 10,
		//'data-width': dialersize1, //size of the ring
		'cursor': '40',
		'thickness': 0.3,  //thickness of the ring
		'width': dialerwidth,
		'step': 1,
		'displayInput': false,
		'change' : function (v) {
			$("#knob_年干").html(knob_gz_tg(v.toFixed(0)));
			$("#GZ-Year").html($("#knob_年干").html()+$("#knob_年支").html());
		}
	});

	$("#gz-dial-年支").knob({
		'min': 0,
		'max': 12,
		'fgColor': "#ffec03",
		'cursor': '40',
		//'data-width': 90,
		'thickness': 0.4,  //thickness of the ring
		'width': 106,  //size of the ring
		'step': 1,
		'displayInput': false,

		'change' : function (v) {
			$("#knob_年支").html(knob_gz_dz(v.toFixed(0)));
			$("#GZ-Year").html($("#knob_年干").html()+$("#knob_年支").html());
		}
	});

	$("#gz-dial-月干").knob({
		'min': 0,
		'max': 10,
		//'data-width': dialersize1, //size of the ring
		'cursor': '40',
		'thickness': 0.3,  //thickness of the ring
		'width': dialerwidth,
		'step': 1,
		'displayInput': false,
		'change' : function (v) {
			$("#knob_月干").html(knob_gz_tg(v.toFixed(0)));
			$("#GZ-Month").html($("#knob_月干").html()+$("#knob_月支").html());
		}
	});

	$("#gz-dial-月支").knob({
		'min': 0,
		'max': 12,
		'fgColor': "#ffec03",
		'cursor': '40',
		//'data-width': 90,
		'thickness': 0.4,  //thickness of the ring
		'width': 106,  //size of the ring
		'step': 1,
		'displayInput': false,

		'change' : function (v) {
			$("#knob_月支").html(knob_gz_dz(v.toFixed(0)));
			$("#GZ-Month").html($("#knob_月干").html()+$("#knob_月支").html());
		}
	});
	
	$("#gz-dial-日干").knob({
		'min': 0,
		'max': 10,
		//'data-width': dialersize1, //size of the ring
		'cursor': '40',
		'thickness': 0.3,  //thickness of the ring
		'width': dialerwidth,
		'step': 1,
		'displayInput': false,
		'change' : function (v) {
			$("#knob_日干").html(knob_gz_tg(v.toFixed(0)));
			$("#GZ-Day").html($("#knob_日干").html()+$("#knob_日支").html());
		}
	});

	$("#gz-dial-日支").knob({
		'min': 0,
		'max': 12,
		'fgColor': "#ffec03",
		'cursor': '40',
		//'data-width': 90,
		'thickness': 0.4,  //thickness of the ring
		'width': 106,  //size of the ring
		'step': 1,
		'displayInput': false,

		'change' : function (v) {
			$("#knob_日支").html(knob_gz_dz(v.toFixed(0)));
			$("#GZ-Day").html($("#knob_日干").html()+$("#knob_日支").html());
		}
	});

	$("#gz-dial-時干").knob({
		'min': 0,
		'max': 10,
		//'data-width': dialersize1, //size of the ring
		'cursor': '40',
		'thickness': 0.3,  //thickness of the ring
		'width': dialerwidth,
		'step': 1,
		'displayInput': false,
		'change' : function (v) {
			$("#knob_時干").html(knob_gz_tg(v.toFixed(0)));
			$("#GZ-Hour").html($("#knob_時干").html()+$("#knob_時支").html());
		}
	});

	$("#gz-dial-時支").knob({
		'min': 0,
		'max': 12,
		'fgColor': "#ffec03",
		'cursor': '40',
		//'data-width': 90,
		'thickness': 0.4,  //thickness of the ring
		'width': 106,  //size of the ring
		'step': 1,
		'displayInput': false,

		'change' : function (v) {
			$("#knob_時支").html(knob_gz_dz(v.toFixed(0)));
			$("#GZ-Hour").html($("#knob_時干").html()+$("#knob_時支").html());
		}
	});
	
}); // end doc ready function

function knobupdate(){
	var monthval=parseInt($("#InputMonth").html());
	if (monthval==12) $('#dial-month').val(monthval).trigger('change');

	var dayval=parseInt($("#InputDay").html());
	if (dayval==31) $('#dial-day').val(dayval).trigger('change');
}

function knob_gz_tg (tg_inptvalue) {
	//console.log("given value: "+tg_inptvalue);
	var 天干數=(Number(tg_inptvalue)+1) % 10;

	//console.log("tg value:" +天干數);
	//console.log(天干字數轉換(天干數));
	return 天干字數轉換(天干數);
}


function knob_gz_dz(dz_inptvalue){
	var 地支數=(Number(dz_inptvalue)+1) % 12;
	return 地支字數轉換(地支數)
	//console.log("dz-val: " + 地支數);
}

