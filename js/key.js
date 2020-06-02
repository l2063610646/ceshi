window.onkeypress = function (ev){
	switch (ev.keyCode){
		case 97: 
			if(that.snake.face !="right")
				that.snake.face = "left";
			break;
		case 100: 
			if(that.snake.face !="left")
				that.snake.face = "right";
			break;
		case 119:
			if(that.snake.face !="down")
				that.snake.face = "up";
			break;
		case 115: 
			if(that.snake.face !="up")
				that.snake.face = "down";
			break;
	}
}