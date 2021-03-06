
	/**
	 * 生成并返回一个从m到n全区间的随机数
	 * @param {Object} m
	 * @param {Object} n
	 */
	function randomNum(m, n) {
		return Math.floor(Math.random() * (n - m + 1) + m);
	}
	/**
	 * 生成一个随机颜色，并返回rgb字符串值
	 */
	function randomColor() {
		var r = randomNum(0, 255);
		var g = randomNum(0, 255);
		var b = randomNum(0, 255);
		return "rgb(" + r + "," + g + "," + b + ")";
	}
	//获得wrapDiv
	var wrapDiv = document.getElementById("container");
	//定义数组存储所有的小球
	var balls = [];


	//小球里面的文件 每个小球对应一个
	var text = ['"Wikibook"project','2Project','3Project','4Project','5Project','6Project','7Project',]

	function createBalls() {
		for (var i = 0; i < 7; i++) {
			var ball = document.createElement("a");
			ball.className = "ballBox ball"+i;
	
			if(i==0){
				ball.setAttribute('href', 'page4.html');
			}
			if(i==1){
				ball.setAttribute('href', '');
			}
			if(i==2){
				ball.setAttribute('href', '');
			}
			if(i==3){
				ball.setAttribute('href', '');
			}
			if(i==4){
				ball.setAttribute('href', '');
			}
			if(i==5){
				ball.setAttribute('href', '');
			}
			if(i==6){
				ball.setAttribute('href', '');
			}


			//随机小球起始的X坐标和小球的Y坐标
			ball.x = randomNum(0, 1000);
			ball.y = randomNum(0, 600);
			//随机小球的移动速度
			ball.speed = randomNum(2, 5);
			//随机小球移动的方向
			if (Math.random() - 0.5 > 0) {
				ball.xflag = true;
			} else {
				ball.xflag = false;
			}
			if (Math.random() - 0.5 > 0) {
				ball.yflag = true;
			} else {
				ball.yflag = false;
			}
			//随机小球的背景颜色
			ball.style.backgroundColor = randomColor();
			ball.innerHTML = text[i];
			//将小球插入当wrapDiv中
			wrapDiv.appendChild(ball);
			//将所有的小球存储到数组中
			balls.push(ball);
		}
	}
	createBalls();
	//小球移动函数，判断小球的位置
	function moveBalls(ballObj) {
		setInterval(function () {
			ballObj.style.top = ballObj.y + "px";
			ballObj.style.left = ballObj.x + "px";
			//判断小球的标志量，对小球作出相应操作
			if (ballObj.yflag) {
				//小球向下移动
				ballObj.y += ballObj.speed;
				if (ballObj.y >= 600 - ballObj.offsetWidth) {
					ballObj.y = 600 - ballObj.offsetWidth;
					ballObj.yflag = false;
				}
			} else {
				//小球向上移动
				ballObj.y -= ballObj.speed;
				if (ballObj.y <= 0) {
					ballObj.y = 0;
					ballObj.yflag = true;
				}
			}
			if (ballObj.xflag) {
				//小球向右移动
				ballObj.x += ballObj.speed;
				if (ballObj.x >= 980 - ballObj.offsetHeight) {
					ballObj.x = 980 - ballObj.offsetHeight;
					ballObj.xflag = false;
				}
			} else {
				//小球向左移动
				ballObj.x -= ballObj.speed;
				if (ballObj.x <= 0) {
					ballObj.x = 0;
					ballObj.xflag = true;
				}
			}
			crash(ballObj);
		}, 100);  // 这里修改移动速度
	}
	var x1, y1, x2, y2;
	//碰撞函数
	function crash(ballObj) {
		//通过传过来的小球对象来获取小球的X坐标和Y坐标
		x1 = ballObj.x;
		y1 = ballObj.y;
		for (var i = 0; i < balls.length; i++) {
			//确保不和自己对比
			if (ballObj != balls[i]) {
				x2 = balls[i].x;
				y2 = balls[i].y;
				//判断位置的平方和小球的圆心坐标的关系
				if (Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + 800 <= Math.pow(ballObj.offsetWidth + balls[i].offsetWidth, 2)) {
					//判断传过来的小球对象，相对于碰撞小球的哪个方位
					if (ballObj.x < balls[i].x) {
						if (ballObj.y < balls[i].y) {
							//小球对象在被碰小球的左上角
							ballObj.yflag = false;
							ballObj.xflag = false;
						} else if (ballObj.y > balls[i].y) {
							//小球对象在被碰小球的左下角
							ballObj.xflag = false;
							ballObj.yflag = true;
						} else {
							//小球对象在被撞小球的正左方
							ballObj.xflag = false;
						}
					} else if (ballObj.x > balls[i].x) {
						if (ballObj.y < balls[i].y) {
							//小球对象在被碰撞小球的右上方
							ballObj.yflag = false;
							ballObj.xflag = true;
						} else if (ballObj.y > balls[i].y) {
							//小球对象在被碰撞小球的右下方
							ballObj.xflag = true;
							ballObj.yflag = true;
						} else {
							//小球对象在被撞小球的正右方
							ballObj.xflag = true;
						}
					} else if (ballObj.y > balls[i].y) {
						//小球对象在被撞小球的正下方
						ballObj.yflag = true;
					} else if (ballObj.y < balls[i].y) {
						//小球对象在被撞小球的正上方
						ballObj.yflag = false;
					}
				}
			}
		}
	}
	for (var i = 0; i < balls.length; i++) {
		//将所有的小球传到函数中,来实现对小球的移动
		moveBalls(balls[i]);
	}

	//获取min-max之间的随机整数
	function getRand(min, max) {
		return parseInt(Math.random() * (max - min + 1) + min);
	}
