(function (doc, win) {
  var docEl = doc.documentElement,//根元素html
      //判断窗口有没有orientationchange这个方法，有就赋值给一个变量，没有就返回resize方法。
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          //把document的fontSize大小设置成跟窗口成一定比例的大小，从而实现响应式效果。
          docEl.style.fontSize = 50* (clientWidth / 375) + 'px';
      };
  //alert(docEl)
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);//addEventListener事件方法接受三个参数：第一个是事件名称比如点击事件onclick，第二个是要执行的函数，第三个是布尔值
  doc.addEventListener('DOMContentLoaded', recalc, false)//绑定浏览器缩放与加载时间
})(document, window);


//设置viewport
function viewportSet(){
  var deviceWidth = parseInt(window.screen.width);  //获取当前设备的屏幕宽度
  var deviceScale = deviceWidth / 750;  
  var ua = navigator.userAgent;
//获取当前设备类型（安卓或苹果）
  if (/Android (\d+\.\d+)/.test(ua)) {
      var version = parseFloat(RegExp.$1);
      if (version > 2.3) {
          document.write('<meta name="viewport" content="width=750,initial-scale=' + deviceScale + ', minimum-scale = ' + deviceScale + ', maximum-scale = ' + deviceScale + '">');
      } else {
          document.write('<meta name="viewport" content="width=750,initial-scale=0.75,maximum-scale=0.75,minimum-scale=0.75" />');
      }
  } else {
      document.write('<meta name="viewport" content="width=750, user-scalable=no">');
  }
}
viewportSet();
