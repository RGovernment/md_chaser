
let save = "";
let saveName ="";
let saveOrder ="";
let btn_offset= "";
let btn_l = "";			   
let btn_t ="";
let parent = "";
var moveX = 0;
var moveY = 0;

/* 마우스 */

function drag(ev) { 
   	ev.dataTransfer.setData("text", ev.target.id);
   	parent = $("#"+ev.target.id).parent().attr("id");
   	var data = ev.dataTransfer.getData("text");
   	save = document.getElementById(data);
}

function dragEnter(ev) {
	ev.preventDefault();
}
   
function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	let main = $('.main_con');
	if(ev.target.id.includes("box_con")){
		if($("#"+ev.target.id).children("button").length == 0){
			ev.target.appendChild(document.getElementById(data));
		} else {
			
			ev.target.appendChild(document.getElementById(data));
			$("#" + parent).append(document.getElementById($("#"+ ev.target.id).children("button").attr("id")));
		}
	} else {
		if($("#"+ ev.target.id).parent().attr("id").includes("box_con")){
			let parent_id = $("#" +ev.target.id).parent().attr("id");
			$("#" +parent_id).append(document.getElementById(data));
			$("#" + parent).append(document.getElementById(ev.target.id));
		} else {
		main.innerHTML = save;
		}
	}
}
/* 마우스 종료 */

/** 터치 스크린 */
function main(){
	
	$("button[name=dragbox]").on("touchstart", function(e){
		
		// 터치 선택한 객체 ID 확인
		var StartTouchId = e.target.getAttribute("id");
		
		btn_offset = $("#"+StartTouchId);
		
		parent = $("#"+StartTouchId).parent().attr("id");

		BodyScrollDisAble();

		$(this).data('text', StartTouchId);
	   	var data = $(this).data("text");
	   	save = document.getElementById(data);

	});    			    	    	    						 																
	
	$("button[name=dragbox]").on("touchmove", function(e){
		// 터치 이동중인 객체 ID 확인
		var MoveTouchId = e.target.getAttribute("id");
		
		BodyScrollDisAble();
		
		//이동중 현재 좌표
		moveX = e.originalEvent.changedTouches[0].clientX;
		moveY = e.originalEvent.changedTouches[0].clientY;
		//객체 이동
		$("#"+MoveTouchId).css("position","fixed");
		$("#"+MoveTouchId).css("top",(moveY - ($("#"+MoveTouchId).height()/2)) +"px");
		$("#"+MoveTouchId).css("left",(moveX - ($("#"+MoveTouchId).width()/2)) +"px");
			
	});
	
	
	$("button[name=dragbox]").on("touchend", function(e){
		// 터치 종료 객체 ID 확인
		var EndTouchId = e.target.getAttribute("id");
		$("#"+EndTouchId).css("position","static");
		// 종료 좌표값 확인
		var endX = e.originalEvent.changedTouches[0].clientX;
		var endY = e.originalEvent.changedTouches[0].clientY;
		   if(e.target.name == "dragbox"){
			   let con1 = $("#box_con1");
			   let con1_l = con1.offset().left;
			   let con1_r = con1_l+130;
			   let con1_t = con1.offset().top - $(window).scrollTop();
			   let con1_b = con1_t+130; 
			   
			   let con2 = $("#box_con2");
			   let con2_l = con2.offset().left;
			   let con2_r = con2_l+130;
			   let con2_t = con2.offset().top - $(window).scrollTop();
			   let con2_b = con2_t+130; 
			   
			   let con3 = $("#box_con3");
			   let con3_l = con3.offset().left;
			   let con3_r = con3_l+130;
			   let con3_t = con3.offset().top - $(window).scrollTop();
			   let con3_b = con3_t+130;
			   
			   let con4 = $("#box_con4");
			   let con4_l = con4.offset().left;
			   let con4_r = con4_l+130;
			   let con4_t = con4.offset().top - $(window).scrollTop();
			   let con4_b = con4_t+130;
			   
			   let con5 = $("#box_con5");
			   let con5_l = con5.offset().left;
			   let con5_r = con5_l+130;
			   let con5_t = con5.offset().top - $(window).scrollTop();
			   let con5_b = con5_t+130;
			   
			   let con6 = $("#box_con6");
			   let con6_l = con6.offset().left;
			   let con6_r = con6_l+130;
			   let con6_t = con6.offset().top - $(window).scrollTop();
			   let con6_b = con6_t+130;
			   
			   let con7 = $("#box_con7");
			   let con7_l = con7.offset().left;
			   let con7_r = con7_l+130;
			   let con7_t = con7.offset().top - $(window).scrollTop();
			   let con7_b = con7_t+130; 
			   
			   let con8 = $("#box_con8");
			   let con8_l = con8.offset().left;
			   let con8_r = con8_l+130;
			   let con8_t = con8.offset().top - $(window).scrollTop();
			   let con8_b = con8_t+130; 
			   
			   let con9 = $("#box_con9");
			   let con9_l = con9.offset().left;
			   let con9_r = con9_l+130;
			   let con9_t = con9.offset().top - $(window).scrollTop();
			   let con9_b = con9_t+130;
			   
			   

			   if(con1_l<endX&&con1_r>endX&&con1_t<endY&&con1_b>endY){
				if(con1.children("button").length == 0){
					con1.append(save);
				}else{
					$("#"+parent).append(document.getElementById(con1.children("button").attr("id")));
					con1.append(save);
				}
				   		   
			   } else if(con2_l<endX&&con2_r>endX&&con2_t<endY&&con2_b>endY) {
				   if(con2.children("button").length == 0){
					con2.append(save);
				}else{
					$("#"+parent).append(document.getElementById(con2.children("button").attr("id")));
					con2.append(save);
				}
			   }else if(con3_l<endX&&con3_r>endX&&con3_t<endY&&con3_b>endY) {
				  if(con3.children("button").length == 0){
					con3.append(save);
				}else{
					$("#"+parent).append(document.getElementById(con3.children("button").attr("id")));
					con3.append(save);
				}
			   }else if(con4_l<endX&&con4_r>endX&&con4_t<endY&&con4_b>endY) {
				   if(con4.children("button").length == 0){
					con4.append(save);
				}else{
					$("#"+parent).append(document.getElementById(con4.children("button").attr("id")));
					con4.append(save);
				}
			   }else if(con5_l<endX&&con5_r>endX&&con5_t<endY&&con5_b>endY) {
				   if(con5.children("button").length == 0){
					con5.append(save);
				}else{
					$("#"+parent).append(document.getElementById(con5.children("button").attr("id")));
					con5.append(save);
				}
			   }else if(con6_l<endX&&con6_r>endX&&con6_t<endY&&con6_b>endY) {
				   if(con6.children("button").length == 0){
					con6.append(save);
				}else{
					$("#"+parent).append(document.getElementById(con6.children("button").attr("id")));
					con6.append(save);
				}
			   }else if(con7_l<endX&&con7_r>endX&&con7_t<endY&&con7_b>endY) {
				   if(con7.children("button").length == 0){
					con7.append(save);
				}else{
					$("#"+parent).append(document.getElementById(con7.children("button").attr("id")));
					con7.append(save);
				}
			   }else if(con8_l<endX&&con8_r>endX&&con8_t<endY&&con8_b>endY) {
				   if(con8.children("button").length == 0){
					con8.append(save);
				}else{
					$("#"+parent).append(document.getElementById(con8.children("button").attr("id")));
					con8.append(save);
				}
			   }else if(con9_l<endX&&con9_r>endX&&con9_t<endY&&con9_b>endY) {
				   if(con9.children("button").length == 0){
					con9.append(save);
				}else{
					$("#"+parent).append(document.getElementById(con9.children("button").attr("id")));
					con9.append(save);
				}
			   }
		   }
		
		// 결과 출력
		
		BodyScrollAble();
		
		return true;
	});    		
	
};
	/** 스크롤 정지 */
	function BodyScrollDisAble(){
	document.body.style.overflow = "hidden";
	};
	/** 스크롤 가동 */
	function BodyScrollAble(){
	document.body.style.overflow = "auto";
	};
	
	
	$(document).ready(function(){
		
		main();
		
	});
	
/* } */