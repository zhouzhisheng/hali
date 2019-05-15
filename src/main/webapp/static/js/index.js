$(function() {
	var c = new Coder("style-text");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*你好，我叫瑾年，是一萌新的程序猿</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*现在让我小露一手</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*准备好了吗？动画开始了</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>*</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transition</span>: <span class='bef_value'> all 1s</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Emmmmm,好像没什么变化</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*不要着急，接下来你就会看到</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*如果你不喜欢黑白配色</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Let's make some changes.</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>html</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(63, 82, 99)</span>;</div>");
	c.setClass("html", [{
		"name": "background",
		"val": "rgb(63, 82, 99)"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*好像很无聊的样子</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*ちょっとまって!!!</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*客官您别着急~</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre,a</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>color</span>: <span class='bef_value'>white</span>;</div>");
	c.setClass("pre,a", [{
		"name": "color",
		"val": "white"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*现在看起来好多了</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*不过全是代码看着有些枯燥</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*那换个位置来更好的显示代码吧</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre</span><span class='bef_key'>:not(:empty)</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>overflow</span>: <span class='bef_value'>hidden</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "overflow",
		"val": "hidden"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(48, 48, 48)</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "background",
		"val": "rgb(48, 48, 48)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>border</span>: <span class='bef_value'>1px solid #ccc</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "border",
		"val": "1px solid #ccc"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>max-height</span>: <span class='bef_value'>44.6%</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "max-height",
		"val": "44.6%"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>width</span>: <span class='bef_value'>49%</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "width",
		"val": "49%"
	}]);
	$('#pre:not(:empty)').addClass("toarea");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-size</span>: <span class='bef_value'>14<span class='bef_px'>px</span></span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "font-size",
		"val": "14px"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-family</span>: <span class='bef_value'>monospace</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "font-family",
		"val": "monospace"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>padding</span>: <span class='bef_value'>10<span class='bef_px'>px</span> 10<span class='bef_px'>px</span> 20<span class='bef_px'>px</span></span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "padding",
		"val": "10px 10px 20px"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>box-shadow</span>: <span class='bef_value'>-4<span class='bef_px'>px</span> 4<span class='bef_px'>px</span> 2<span class='bef_px'>px</span> 0 rgba(0,0,0,0.3)</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "box-shadow",
		"val": "-4px 4px 2px 0 rgba(0,0,0,0.3)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>white-space</span>: <span class='bef_value'>pre-wrap</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "white-space",
		"val": "pre-wrap"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>outline</span>: <span class='bef_value'>0</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "outline",
		"val": "0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*OK，现在让我们来换一下位置</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*go on</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transform</span>: <span class='bef_value'>translateX(95%)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(95%)"
	}]);
  	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>position</span>: <span class='bef_value'>absolute</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "position",
		"val": "absolute"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*现在看起来是不是好些了，但是所有的文字颜色都是白色的</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*那么来让它的可读性更强一点吧</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>.comment</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#857F6B</span>; <span class='bef_key'>font-style</span>: <span class='bef_value'>italic</span>; }</div>");
	c.addClass(".bef_comment","comment");
	c.load("<div class='code writecode'><span class='bef_selector'>.selector</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#E69F0F</span>; }</div>");
	c.addClass(".bef_selector","selector");
	c.load("<div class='code writecode'><span class='selector'>.selector .key</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.addClass(".bef_key","key");
	c.load("<div class='code writecode'><span class='selector'>.key</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.load("<div class='code writecode'><span class='selector'>.value</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#BE84F2</span>; }</div>");
	c.addClass(".bef_value","value");
	c.load("<div class='code writecode'><span class='selector'>.value.px</span>&nbsp;{ <span class='key'>color</span>: <span class='value'>#F92772</span>; }</div></p>");
	c.addClass(".value .bef_px","px");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*现在我们差不多都准备好了</div>");
	c.load("<div class='comment writecode'>&nbsp;*别以为我只会2D的，让你看看这个</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#content</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-perspective</span>: <span class='value'>1000<span class='px'>px</span></span>;</div>");
  	c.setClass("#content", [{
		"name": "-webkit-perspective",
		"val": "1000px"
	}]);
  	c.load("<div class='code writecode'>}</div></p>");
  	c.load("<p><div class='code writecode'><span class='selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>translateX(98.5%) rotateY(-10deg)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(98.5%) rotateY(-10deg)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>right</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform-origin",
		"val": "right"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>max-height</span>: <span class='value'>94.5%</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "max-height",
		"val": "94.5%"
	}]);
  	c.load("<div class='code writecode'>}</div></p>");
  	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*叽里呱啦这么久了</div>");
	c.load("<div class='comment writecode'>&nbsp;*我相信你来这不只是为了来看简单的动画的</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.addClass("#work-text","pre_work-text");
	c.load("<p><div class='code writecode'><span class='selector'>pre</span><span class='key'>:not(#style-text)</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(10deg)</span>;</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>left</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	var r = new Coder("work-text");
	r.load("<div id='md'></div>");
	var w = new Coder("md");
	w.load("<h1 class='writecode'>简历</h1>");
	w.load("<p><div class='writecode'>瑾年</div>");
	w.load("<div class='writecode'>健身汪&&程序猿</div>");
	w.load("<div class='writecode'>编程、健身、旅行</div>");
	w.load("<div class='writecode'>湘潭大学·信息工程学院</div></p>");
	w.load("<div class='writecode'>目前已在工作</div></p>");
	w.load("<h1 class='writecode'>联系方式</h1>");
	w.load("<ul>");
	w.load("<li class='writecode'>邮箱地址:<a href='17666545369@163.com' target='_blank'>17666545369@163.com</li>");
	w.load("<li class='writecode'>个人网站:<a href='https://zzs-dyl.club/' target='_blank'>https://zzs-dyl.club/</a></li>");
	w.load("<li class='writecode'>技术博客:<a href='https://zzs-dyl.club/' target='_blank'>https://zzs-dyl.club/</a></li>");
	w.load("</ul>");
	w.load("<h1 class='writecode'>技能</h1>");
	w.load("<ul>");
	w.load("<li class='writecode'>Java日常开发</li>");
	w.load("<li class='writecode'>熟练ssm框架</li>");
    w.load("<li class='writecode'>对数学情有独钟</li>");
	w.load("<li class='writecode'>深蹲硬拉两倍体重</li>");
	w.load("<li class='writecode'>人像摄影、直男修图</li>");	
	w.load("<li class='writecode'>装逼、吹牛</li>");
	w.load("</ul>");
	w.load("<h1 class='writecode'>时生</h1>");
	w.load("<ul>");		
    w.load("<li class='writecode'>只要想到你能活下去，</li>");
	w.load("<li class='writecode'>即便在现在这一瞬间，我也已经感受到了未来。</li>");
    w.load("<li class='writecode'>确信自己喜欢的人能够好好地活着，</li>");
	w.load("<li class='writecode'>即便面对死亡，也看到了未来。</li>");
	w.load("<li class='writecode'>对你父亲来说，你母亲就是未来。</li>");
	w.load("<li class='writecode'>人不论在什么时候都会感受到未来。</li>");
	w.load("<li class='writecode'>无论是怎样短暂的一个瞬间，只要有活着的感觉，就有未来。</li>");
	w.load("</ul>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*左面的简历看起来不是太令人满意，让我们先给他来点动态渲染</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#work-text</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateX(0deg) rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#work-text #md</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*好了，让我们准备</div>");
	c.load("<div class='comment writecode'>&nbsp;*</div>");
	c.load("<div class='comment writecode'>&nbsp;*3....</div>");
	c.load("<div class='comment writecode'>&nbsp;*2....</div>");
	c.load("<div class='comment writecode'>&nbsp;*1....</div>");
	c.load("<div class='comment writecode'>&nbsp;*0.9....</div>");
	c.load("<div class='comment writecode'>&nbsp;*0.8....</div>");
	c.load("<div class='comment writecode'>&nbsp;*0.7....</div>");
	c.load("<div class='comment writecode'>&nbsp;*0.6....</div>");
	c.load("<div class='comment writecode'>&nbsp;*hhhh开玩笑</div>");
	c.load("<div class='comment writecode'>&nbsp;*你别生气</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.setClass("#work-text", [{
		"name": "-webkit-transform",
		"val": "rotateX(0deg) rotateY(190deg) rotateZ(180deg)"
	}]);
	c.setClass("#work-text #md", [{
		"name": "-webkit-transform",
		"val": "rotateY(190deg) rotateZ(180deg)"
	}]);
	c.load("<p><div class='comment writecode'>/**</div>");	
	c.load("<div class='comment writecode'>&nbsp;*左下角搞得我强迫症要犯了</div>");
	c.load("<div class='comment writecode'>&nbsp;*最后再做一点微调</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>font-family</span>: <span class='value'>'Helvetica Neue', Helvetica, sans-serif</span>;</div>");
	c.setClass("#md", [{
		"name": "font-family",
		"val": "'Helvetica Neue', Helvetica, sans-serif"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md h1</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>border-bottom</span>: <span class='value'>1px solid #ccc</span>;</div>");
	c.setClass("#md h1", [{
		"name": "border-bottom",
		"val": "1px solid #ccc"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>padding-bottom</span>: <span class='value'>5px</span>;</div>");
	c.setClass("#md h1", [{
		"name": "padding-bottom",
		"val": "5px"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md li</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>5<span class='px'>px</span> 0</span>;</div>");
	c.setClass("#md li", [{
		"name": "margin",
		"val": "5px 0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md h1,#md ul</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>0</span>;</div>");
	c.setClass("#md h1,#md ul", [{
		"name": "margin",
		"val": "0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*到这里就要结束了</div>");
	c.load("<div class='comment writecode'>&nbsp;*");
	c.load("<div class='comment writecode'>&nbsp;*如果你想和我联系</div>");
	c.load("<div class='comment writecode'>&nbsp;*QQ:912272326</div>");
	c.load("<div class='comment writecode'>&nbsp;*wechat:ay912272326</div>");
	c.load("<div class='comment writecode'>&nbsp;*Mail:17666545369@163.com</div>");
	c.load("<div class='comment writecode'>&nbsp;*最后非常感谢您耐心花3分钟看完我的简历！</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");

});

var m = 0;

var Coder = function(dom) {
	this._dom = dom;
};

Coder.prototype = {
	constructor: Coder,
	load: function(code, second) {
		var dom = this._dom;
		var o = this;
		var _second = second ? second : 1000;
		_second = m + _second;
		setTimeout(function() {
			$('#' + dom).scrollTop( $('#' + dom)[0].scrollHeight );
			$("#" + dom).append(code);
		}, _second);
		m = _second;
	},
	setClass: function(dom, styles,second) {
		var _second = second ? second : 0;
		_second = m + _second;
		for (var i in styles) {
			setTimeout(function() {
				$(dom).css(styles[i].name, styles[i].val);
			}, _second);
		}
		m = _second;
	},
	addClass:function(dom,className){
		var second = m;
		setTimeout(function() {
			$(dom).addClass(className);
		}, second);
	}
}