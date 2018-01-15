<!--
commonui.box = new Object;
commonui.box.boxstat = new Object;
commonui.box.boxes = new Object;
commonui.box.allmin = function(grp)
{
for (var k in this.boxes[grp])this.boxes[grp][k]._min.onclick();
}
commonui.box.allmax = function(grp)
{
for (var k in this.boxes[grp])this.boxes[grp][k]._max.onclick();
}
/*
==create����˵��
------id
��ID ���������ͬ
------title
����� �ַ�����dom obj
------getcontentfunc
������ ��Ϊ�ַ�����dom obj; ���Ϊ����,���ؿ����ݵ��ַ�����dom obj; Ϊ����ʱ�ɻ����������,��һ��Ϊ������������dom obj,�ڶ���Ϊ�鱾���dom obj
------hide
Ϊ��ʱĬ������,�û������󻯺��ȡ����
------contentclassname
������������style class
------groupid
�����������ID
------allminhandler
�������������ȫ�������С��ʱ��ִ�еĺ���
------allmaxhandler
�������������ȫ��������ʱ��ִ�еĺ���

==�鱾���dom obj���ӵ�����
this._titlebox
����������dom obj
this._titletextbox
��������������dom obj
this._contentbox
����������dom obj
this._min
��С����ť��dom obj
this._max
��󻯰�ť��dom obj
this._reload
ˢ�°�ť��dom obj
*/
commonui.box.create = function(id,title,getcontentfunc,hide,contentclassname,groupid,allminhandler,allmaxhandler)
{
if (typeof(getcontentfunc)!='function')
	{
	var _getcontentfunc = getcontentfunc;
	getcontentfunc = function(){return _getcontentfunc};
	}
var box = document.createElement('div');
var show = parseInt(cookieFuncs.getMiscCookie('box_'+id+'_show'),10);
if (show) cookieFuncs.setMiscCookieInSecond('box_'+id+'_show',show,3600*24*30);
if (!groupid)groupid=0;
if (!this.boxstat[groupid]){this.boxstat[groupid] = new Object;this.boxes[groupid] = new Object}
this.boxstat[groupid][id] = -1;
box.id = id;
box.className = 'box';
var t = document.createElement('h3');
var self = this;
var min = document.createElement('a');
min.href='javascript:void(0)';
min.className = 'boxmin';
min.title='����';
min.onclick = function(e){
	if (!e) var e = window.event;
	if(e){
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();
	}
	this.parentNode.parentNode._contentbox.parentNode.style.display = 'none';
	if(!hide)cookieFuncs.setMiscCookieInSecond('box_'+id+'_show',-1,3600*24*30);
	else cookieFuncs.setMiscCookieInSecond('box_'+id+'_show',0,0);
	self.boxstat[groupid][id] = -1;
	self.chkstat(groupid,allminhandler,allmaxhandler);
	return false;
	};
box._min = min;
var max = document.createElement('a');
max.href='javascript:void(0)';
max.className = 'boxmax';
max.title='��ʾ';
max.onclick = function(e){
	if (!e) var e = window.event;
	if(e){
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();
	}
	this.parentNode.parentNode._contentbox.parentNode.style.display = 'block';
	if(hide)cookieFuncs.setMiscCookieInSecond('box_'+id+'_show',1,3600*24*30);
	else cookieFuncs.setMiscCookieInSecond('box_'+id+'_show',0,0);
	if(!this.parentNode.parentNode._haveloadcontent)this.parentNode.parentNode._loadcontent()
	self.boxstat[groupid][id] = 1;
	self.chkstat(groupid,allminhandler,allmaxhandler);
	return false;
	};
box._max = max;
var reload = document.createElement('a');
reload.href='javascript:void(0)';
reload.className = 'boxreload';
reload.title='ˢ��';
reload.onclick = function(e){
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	this.parentNode.parentNode._contentbox.innerHTML = '';
	this.parentNode.parentNode._loadcontent();
	return false;
	};
box._reload = reload;
var tmp = function(e){
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	}
addEvent(max,'mousedown',tmp);
addEvent(min,'mousedown',tmp);
addEvent(reload,'mousedown',tmp);

t.appendChild(box._reload);
t.appendChild(box._max);
t.appendChild(box._min);
if (typeof(title)=='object')
	t.appendChild(title)
else
	{
	var tt = document.createElement('span');
	tt.innerHTML = title
	t.appendChild(tt)
	title = tt
	}
box.appendChild(t);
box._titlebox=t
box._titletextbox=title
var c = document.createElement('div');
if (!contentclassname) contentclassname ='';
c.className = 'content';
if (hide || show==-1) c.style.display = 'none';
var cc = document.createElement('div');
if(contentclassname) cc.className=contentclassname;
c.appendChild(cc);
box.appendChild(c);
box._contentbox = cc;
box._loadcontent = function() {
	var ccc = getcontentfunc(this._contentbox,this);
	if(ccc)
		if(typeof(ccc)=='string')this._contentbox.innerHTML = ccc;
		else this._contentbox.appendChild(ccc);
	box._haveloadcontent=1
	};
if (hide)
	{
	if (show==1)
		{
		box._loadcontent();
		box._contentbox.parentNode.style.display = 'block';
		this.boxstat[groupid][id] = 1;
		}
	}
else
	{
	if (show!=-1)
		{
		box._loadcontent();
		box._contentbox.parentNode.style.display = 'block';
		this.boxstat[groupid][id] = 1;
		}
	}
this.boxes[groupid][id] = box
return box;
}
commonui.box.chkstat = function(groupid,allminhandler,allmaxhandler)
{
if (!this.boxstat[groupid] || !allminhandler || !allmaxhandler)return false;
var i = 0;
var j = 0;
for (var k in this.boxstat[groupid])
	{
	i +=this.boxstat[groupid][k];
	j++;
	}
if (i==j)
	return allmaxhandler();
else if (i==-1*j)
	return allminhandler();
else
	return allmaxhandler();
}

-->