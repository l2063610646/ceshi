//alert("2");
(function(){
var elesn =[];
var thwy;
var isDead = 1;
function Snake(){
	this.color = "red";
	this.width = 50;
	this.height = 50;
	this.scores=0;
	this.face = "right";
	this.body = [
		{x:3,y:3,color:'red'},
		{x:3,y:2,color:'blue'},
		{x:3,y:1,color:'blue'},
	];
	thwy = this;
}

Snake.prototype.draw=function(map){
	remov();
	for(var s = 0,len = this.body.length; s< len;s++)
	{
	var obj = this.body[s];
	var div = document.createElement("div");
	map.appendChild(div);
	elesn.push(div);
	//alert("1");
	div.style.position = 'absolute';
	div.style.width = this.width + 'px';
	div.style.height = this.height + 'px';
	div.style.left = obj.x * this.width + 'px';
	div.style.top = obj.y * this.width + 'px';
	div.style.backgroundColor = obj.color;
	}
}
Snake.prototype.move = function(food,map){
	for(var i = this.body.length -1;i>0;i--)
	{
		this.body[i].x =this.body[i-1].x;
		this.body[i].y =this.body[i-1].y;
	}
	var head = this.body[0];
	switch(this.face){
		case "down":
			head.y += 1;
			break;
		case "up":
			head.y -= 1;
			break;
		case "right":
			head.x += 1;
			break;
		case "left":
			head.x -= 1;
			break;
	}
	
	if((food.x === head.x)&&(food.y === head.y))
	{
		var last = this.body[this.body.length -1];
		this.body.push({
			x:last.x,
			y:last.y,
			color: last.color,
		});
		this.scores+=1;
		food.draw(map);
	}
	var tet = setInterval(function(){
	for(var av = thwy.body.length -1;av>0;av--)
	{
		if((thwy.body[av].x===food.x)&&(thwy.body[av].y===food.y))
			food.draw(map);
		if((thwy.body[av].x === thwy.body[0].x)&&(thwy.body[av].y===thwy.body[0].y))
		{
			clearInterval(tet);
			clearInterval(run);
			//alert("吃到自己了");
			sayOver();
		}
		
	}
	},500);
}
function sayOver(){
    if(isDead===1)
    alert("咬到自己了，"+"您的分数为:"+thwy.scores);
    isDead=-1;
}
function remov(){
	for(var i= elesn.length - 1 ; i>=0 ; i--)
	{
		elesn[i].parentNode.removeChild(elesn[i]);
		elesn.splice(i,1);
	}
}

window.Snake =Snake;
})();
/*

var tet = document.getElementById("container");
var bt = new Snake();
bt.draw(tet);
*/
