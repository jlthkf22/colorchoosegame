// 网页加载结束会执行的方法
window.onload = function() {
	var oTimeSpan = document.getElementById('time');
	var time = 20 * 1000;
	var isBegin = false; // 游戏没有开始
	var oScore=document.getElementById('score');
	var oHint=document.getElementById('hint');
	
	// 开始游戏
	function beginGame() {
		time = 20 * 1000;
		Interval = setInterval(function(){
			time = time - 10;
			// 把时间转成秒数
			var sec = parseInt(time / 1000);
			var minsec = time % 1000 / 10;
			minsec = minsec > 9? minsec: '0' + minsec; 
			oTimeSpan.innerHTML = '剩余时间:' + sec + ':' + minsec;
			if (sec <= 0 && minsec <= 0 ) {
				clearInterval(Interval);
			}
			if (time <=0) {
			oHint.innerHTML='您的成绩是:'+s+'分             点击再试一次';
			
			isBegin=false;
			oScore.innerHTML='分数:0';
			return;
		}
		},10)
	}
	
	
	// 
	var textArr = ["黄","绿","紫","蓝","红"];
	var colorArr = ["yellow","green","purple","blue","red"];
	var s=0;
	// 随机数[0,4]
	function rand() {
		var num = parseInt(Math.random() * 5 );
		return num;
	}
	
	// 获取到中间文字的标签
	var oText = document.getElementById('text');
	oText.innerHTML = textArr[rand()];
	oText.style.color = colorArr[rand()];
	oText.onclick = function() {
		// 判断游戏有没有开始
		if (!isBegin) {
			// 开始游戏
			oHint.innerHTML='根据上面字的颜色选择下面正确的字,点击开始游戏计时';
			s=0;
			isBegin = !isBegin;
			beginGame(); // 游戏开始
		}
		// 游戏结束, 禁止点击
		
		// 每次点击颜色, 文字改变
		oText.innerHTML = textArr[rand()];
		oText.style.color = colorArr[rand()];
		setUl(); 
	}
	setUl(); // 初始化颜色
	// 设置ul
	function setUl() {
		var oLis = document.getElementsByTagName('li');
		var indexArr = rand4(); // 给innrHTML随机的
		var index2Arr = rand4(); // 给颜色随机的
		for (var i = 0; i < oLis.length; i++) {
			oLis[i].innerHTML = textArr[indexArr[i]];
			oLis[i].style.color = colorArr[index2Arr[i]];
			oLis[i].onclick = function() {
				// 设置分数
				// this.innerHTML  绿色
				// green
				var color = null;
				switch (this.innerHTML) {
				case '绿': 
				 	color = 'green';
				 	break;
				 case '黄': 
				 	color = 'yellow';
				 	break;
				 case '紫': 
					 color = 'purple';
					 break;
				 case '红': 
					 color = 'red';
					 break;
				 case '蓝': 
					 color = 'blue';
					 break; 
				default:
				}
				if (color == oText.style.color && isBegin) {
					oScore.innerHTML='分数:'+ ++s;
					oText.innerHTML = textArr[rand()];
					oText.style.color = colorArr[rand()];
					setUl();
					console.log("点击正确");
				} else if(isBegin==false){}
				  else {
				  	var oImg=document.getElementsByTagName('img');
				  	oImg[0].style.display='block';
					console.log("点击错误");
				}
			}
		}
	}
	
	// 生成一个随机数组, 0-4
	function rand4() {
		var result = [];
		while (result.length < 5) {
			var number = rand();
			if (result.indexOf(number) == -1) {
				result.push(number);
			}
		}
		return result;
	}
}

















