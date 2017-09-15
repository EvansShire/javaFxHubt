$(function(){
	
	$("#login").click(function(){
		login();
	})

	$("#reset").click(function(){
        //alert("dededede");           
        $(".UserName").val("");			//lert(UserName);
        $(".Password").val("");			//lert(Password);
        $(".ValidateCode").val("");	//alert(ValidateCode);         

    });

	$(".reload").click(function(){
        //alert("刷新验证码");
        //window.location.reload();//页面整体刷新  输入的信息会丢失            
        this.src = 'http://run.hbut.edu.cn/Account/GetValidateCode?time=' + (new Date()).getTime();
        //只刷新图片 输入的信息不会丢失

    })

	$(".about").click(function(){
        //alert("about");
        window.location.href="about.html";
  
     })

	$(document).keyup(function(event) {  
		if (event.keyCode == 13) { 
             //执行操作
             //$("#alert").text("enter按下");
             login();
        }  
    }) 
    
	function login(){
		//$("#alert").text("hello world");
		
        //alert("dededede");
        isRemember=$(".isRemember").val();		//alert(isRemember);
        Student=$(".Student").val();			//alert(Student);
        UserName=$(".UserName").val();			//lert(UserName);
        Password=$(".Password").val();			//lert(Password);
        ValidateCode=$(".ValidateCode").val();	//alert(ValidateCode);
                
        $.ajax({
            type: "POST",
            url: "http://run.hbut.edu.cn/Account/LogOn",
   			data: {isRemember:isRemember,Role:Student,UserName:UserName,Password:Password,ValidateCode:ValidateCode}, //第一种方式传参
   			success: function(data){
   				//var str=<title>(<div[^>]*>.*?</div>|.)*?</title> ;
   				//var arr = data.match(str);
     			//alert( arr );
     			//alert( "Data Saved: " + data );
     			var text = data;   
     			var regex2 = /<title[^>/]*>(.*?)<\/title>/i;   
     			var groups = regex2.exec(text);   
     			if(groups){   
     				var result=groups[1];
                	//alert(result); 
            		
               		var login="登陆页面";
               		//alert(login.length);
               		if(4==result.length){
               			$("#alert").text("用户名或密码错误！");
     					//alert("用户名或密码错误");  电脑端alert无效
     				}

     				var success="湖北工业大学教学管理系统";

     				if(12==result.length){
     					alert("登陆成功"); 

     					window.location.href="course.html";
     					//window.location.href="http://run.hbut.edu.cn/StuGrade/Index"; 
     				}
     			} 
     		}
    	})
    
	}
})
