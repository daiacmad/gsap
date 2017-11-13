TweenMax.to(".car" , 4, {
	top: "60%",
	scale: 1,
	repeat: -1,
	ease: Power0.easeNone
});
TweenMax.to(".cloud-1", 10 ,{
	left:"100%",
	repeat:-1,
	ease: Power0.easeNone
});
TweenMax.to(".cloud-2", 20 ,{
	top:"10%",
	left:"100%",
	repeat:-1,
	ease: Power0.easeNone
});

TweenMax.to(".cloud-3", 15 ,{
	top:"5%",
	left:"100%",
	repeat:-1,
	ease: Power0.easeNone
});

TweenMax.to(".cloud-4", 30 ,{
	top:"13%",
	left:"100%",
	repeat:-1,
	ease: Power0.easeNone
});

//banner
var delay = 0;
var y = 0;
var deg = 0;
$(".line-1").each(function(){
	TweenMax.to($(this), 0.5 , {
		y: "0px",
		x: "0px",
		width : "0px",
		opacity: "0.2",
		rotate: "0",
		repeat: 15,
		delay:delay
	});
	delay += 0.1;
});

