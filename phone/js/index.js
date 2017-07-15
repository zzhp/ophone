/*获取元素*/

var getElm = function(selector){
    return document.querySelector(selector);
}
var getAllElm = function(selector){
    return document.querySelectorAll(selector);
}

/*获取元素样式*/
var getCls = function(element){
    return element.getAttribute('class');
}
/*设置元素样式*/
var setCls = function(element,cls){
    return element.setAttribute('class',cls);
}

/*为元素添加样式*/
var addCls = function(element,cls){
    var baseCls=getCls(element);
    if(baseCls.indexOf(cls) === -1){
        setCls(element,baseCls+' '+cls);
    }
}
/*为元素删除样式*/
var delCls = function(element,cls){
    var baseCls=getCls(element);
    if(baseCls.indexOf(cls) != -1){
        setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '));
    }
}
var screenAnimateElements = {
    ".screen-1":[
    ".screen-1_heading",
    ".screen-1_phone",
    ".screen-1_shadow",
    ],
    ".screen-2":[
    ".screen-2_heading",
    ".screen-2_phone",
    ".screen-2_subheading",
    ".screen-2_point_i_1",
    ".screen-2_point_i_2",
    ".screen-2_point_i_3",
    ],
    ".screen-3":[
    ".screen-3_heading",
    ".screen-3_phone",
    ".screen-3_subheading",
    ".screen-3_features",
    ],
    ".screen-4":[
    ".screen-4_heading",
    ".screen-4_subheading",
    ".screen-4_type_item_i_1",
    ".screen-4_type_item_i_2",
    ".screen-4_type_item_i_3",
    ".screen-4_type_item_i_4",
    ],
    ".screen-5":[
    ".screen-5_heading",
    ".screen-5_bg",
    ".screen-5_subheading",
    ],
};

var setScreenAnimateInit = function(screenCls){
    var screen = document.querySelector(screenCls);//获取当前屏幕的元素
    var animateElements = screenAnimateElements[screenCls];//需要设置动画的元素

    for (var i = 0; i < animateElements.length; i++) {
                 var element = document.querySelector(animateElements[i]);
                 var baseCls = element.getAttribute('class');
                 /*将当前选中的元素的样式拿出来*/
                 element.setAttribute('class',baseCls +' '+animateElements[i].substr(1)+'_animate_init');
            }
}

/*设置屏幕内的样式为done*/
var playScreenAnimateInit = function(screenCls){
    var screen = document.querySelector(screenCls);//获取当前屏幕的元素
    var animateElements = screenAnimateElements[screenCls];//需要设置动画的元素
    for (var i = 0; i < animateElements.length; i++) {
                 var element = document.querySelector(animateElements[i]);
                 var baseCls = element.getAttribute('class');
                 /*将当前选中的元素的样式拿出来*/
                 element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
            }
}

/*d第一步：初始化样式init*/
window.onload=function(){

var getByClass = function (className) {
  return document.getElementsByClassName(className);
}

getByClass('header_nav')[0].onmouseout = function  () {
    getByClass('header_nav-item-tip')[0].style.left = '';
  }
  getByClass('header_nav-item_i_1')[0].onmouseover=function () {
    getByClass('header_nav-item-tip')[0].style.left = (0*70+25)+'px';
  }
  getByClass('header_nav-item_i_2')[0].onmouseover=function () {
    getByClass('header_nav-item-tip')[0].style.left = (1*70+25)+'px';
  }
  getByClass('header_nav-item_i_3')[0].onmouseover=function () {
    getByClass('header_nav-item-tip')[0].style.left = (2*70+30)+'px';
  }
  getByClass('header_nav-item_i_4')[0].onmouseover=function () {
    getByClass('header_nav-item-tip')[0].style.left = (3*70+25)+'px';
  }
  getByClass('header_nav-item_i_5')[0].onmouseover=function () {
    getByClass('header_nav-item-tip')[0].style.left = (4*70+25)+'px';
  }

setTimeout(function(){
    playScreenAnimateInit('.screen-1');
},1000);

}
    for(k in screenAnimateElements){
    setScreenAnimateInit(k);
    }
  
/*第二步：滚到到哪里，就播放到哪里*/
var navItems = getAllElm('.header_nav-item');
var outLineItems = getAllElm('.outline_item');

var switchNavItemsActive = function( idx ){
    for (var i = 0; i < navItems.length; i++) {
        delCls(navItems[i],'header_nav-item_status_active');
    }
    addCls(navItems[idx],'header_nav-item_status_active');

    for (var i = 0; i < outLineItems.length; i++) {
        delCls(outLineItems[i],'outline_item_status_active');
    }
    addCls(outLineItems[idx],'outline_item_status_active');
}
switchNavItemsActive(0);

window.onscroll = function(){
    var top = document.body.scrollTop;

    if(top >-69){
        addCls( getElm('.header'), ' header_status_back');
        addCls( getElm('.outline'), 'outline_status_in');
        switchNavItemsActive(0);

    }else{
        delCls( getElm('.header'), 'header_status_back');
        delCls( getElm('.outline'), 'outline_status_in');
    }

    if(top > 0){
        addCls( getElm('.header'), 'header_active_1');
        playScreenAnimateInit('.screen-1');
    }else{
        delCls( getElm('.header'), 'header_active_1');
    }

    if(top>850*1-180){
        delCls( getElm('.header'), 'header_active_1');
        playScreenAnimateInit('.screen-2');
        addCls( getElm('.header'), 'header_active_2');
        switchNavItemsActive(1);
    }else{
        delCls( getElm('.header'), 'header_active_2');
    }

    if(top>850*2-180){
        delCls( getElm('.header'), 'header_active_2');
        playScreenAnimateInit('.screen-3');
        addCls( getElm('.header'), 'header_active_3');
        switchNavItemsActive(2);
    }else{
        delCls( getElm('.header'), 'header_active_3');
    }

    if(top>850*3-180){
        delCls( getElm('.header'), 'header_active_3');
        playScreenAnimateInit('.screen-4');
        addCls( getElm('.header'), 'header_active_4');
        switchNavItemsActive(3);
    }else{
        delCls( getElm('.header'), 'header_active_4');
    }

    if(top>850*4-180){
        delCls( getElm('.header'), 'header_active_4');
        playScreenAnimateInit('.screen-5');
        addCls( getElm('.header'), 'header_active_5');
        switchNavItemsActive(4);
    }else{
        delCls( getElm('.header'), 'header_active_5');
    }


}

/*导航条和大纲的双向定位*/

var navTip = getElm('.header_nav-tip');
var setNavJump = function(i,lib){
    var item = lib[i];
    item.onclick = function(){
        document.body.scrollTop = i*870+1-70;
    }
}
for (var i = 0; i < navItems.length; i++) {
    setNavJump(i,navItems);
    
}
for (var i = 0; i < outLineItems.length; i++) {
    setNavJump(i,outLineItems);
}

/* 第四步 滑动门*/
/*var setTip = function(idx,lib){
    lib[idx].onmouseover = function(){
        navTip.style.left = (idx * 70) + 'px';


    }

    var activeIdx=0;

    lib[idx].onmouseout = function(){
        for (var i = 0; i < lib.length; i++) {
            if( getCls(lib[i]).indexOf('header_nav-item_status_active') > -1){
                activeIdx=i;
                break;
            }
            navTip.style.left = (activeIdx * 70) + 'px';
        }
    }
}*/
/*for (var i = 0; i < navItems.length; i++) {
    setTip(i,navItems);
}*/



