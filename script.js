
document.querySelector('button').addEventListener('click',(evt)=>{
	evt.preventDefault();
}
)
const heightMain=document.querySelector('main').offsetHeight;
const heightWindow=document.documentElement.clientHeight;

if(document.documentElement.clientWidth>1300){
	document.querySelector('main').style.height=heightWindow+"px";
}

const btn=document.querySelector('.button-menu');
const menu=document.querySelector('.header');

btn.addEventListener('click',(event)=>{
	btn.classList.toggle('button-menu_active');
	menu.classList.toggle('header_active');
});

document.addEventListener('scroll',()=>{
	document.querySelector('.gear').style.transform='rotate('+pageYOffset%360+'deg)';
	document.querySelector('.gear_2').style.transform='rotate('+(-1)*pageYOffset%360+'deg)';
	if(pageYOffset<200){
		document.querySelector('.mainText').style.transform='translateY('+pageYOffset/3+'px';
		document.querySelector('.mainLine').style.width=100+pageYOffset+'px';
}
})

