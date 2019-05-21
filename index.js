var tabs=document.getElementById("tabs").getElementsByTagName("li");
var lists=document.getElementById("lists").getElementsByTagName("ul");

//console.log(tabs);
for(var i=0;i<tabs.length;i++){
	tabs[i].onclick=showlist;
	
};

function showlist(){
	for(var i=0;i<tabs.length;i++){
		if(tabs[i]==this){
			tabs[i].className="active";
			lists[i].className="clearfix active";
		    }else
		    {
			tabs[i].className="";
			lists[i].className="clearfix";
		    };
	};
};
var seckillNav=document.getElementById("seckillNav");

window.onscroll=function(){
	var scrollTOP=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
//	console.log(scrollTOP);
			if(scrollTOP>=260){
				seckillNav.className="seckill-nav seckill-navfixed";
			    }else{
			    seckillNav.className="seckill-nav";
			};
};