$(function(){
	
	$.ajax({   //在登陆成功的前提下 获取成绩
 		type: "GET",
 		url: "http://run.hbut.edu.cn/StuGrade/Index",
		success: function(data){
 			//alert( "Data Saved: " + data );
 			regex1 = /<h2.*?>[\s\S]*?<\/h2>/;
 			mc1 = regex1.exec(data);
 			regex2 = /<table.*?>[\s\S]*?<\/table>/;
            mc2 = regex2.exec(data);
            //alert(mc);
  			$("#box1").append(mc1);
  			$("#box1").append(mc2);
  			
		}
	})
   $.ajax({   //在登陆成功的前提下 获取课表
 		type: "GET",
 		url: "http://run.hbut.edu.cn/ArrangeTask/MyselfSchedule",
		success: function(data){
 			//alert( "Data Saved: " + data );
 			
 			regex = /<table.*?>[\s\S]*?<\/table>/;
            mc = regex.exec(data);
            //alert(mc);
  			$("#box2").append(mc);
  			
		}
	})
   
   $(".reloadcourse").click(function(){
                //alert("刷新");
                window.location.reload();//页面整体刷新  输入的信息会丢失
                
                
           })
})


