commonui.userScript = {
setUi:function(e){

if(!Object.freeze || !domStorageFuncs)
	return alert('��������������')
if(!__CURRENT_UID)
	return alert('��Ҫ�ȵ�½')

var c = commonui
c.createadminwindow()
c.adminwindow._.addContent(null)

var u = c.userCache.get('userScript'),
ck = 'user_script_'+__CURRENT_UID,
f = c.userCache.get('userScriptFile'),
ff = _$('/span')

if(!u)u=''

if(f){
	for(var i=0;i<f.length;i++)
		ff._.add(_$('/input').$0('value',f[i],'style',{width:'90%'}),_$('/br'))
	}
ff._.add(_$('/input').$0('style',{width:'90%'}),_$('/br'))
ff._.add(_$('/input').$0('style',{width:'90%'}),_$('/br'))

c.adminwindow._.addContent(
	
	_$('/span').$0('style',{linHeight:'1.83em'},'innerHTML','��������������Ҫ���ص�javascript�ű���ַ<br/>\
����<b>��������б��е���վ�ű��ᵯ����ʾ</b>������뽫�����վ�ű����뵽����б��У����������Ա<br/>'),
	ff,
	_$('/button')._.attr({innerHTML:'����',type:'button'})._.on('click',function(){
			var u = this.previousSibling.getElementsByTagName('input'),x = []
			for(var i=0;i<u.length;i++){
				var z = u[i].value.replace(/^\s*|\s*$/g,'')
				if(z)
					x.push(z)
				}
			if(x.length)
				commonui.userCache.set('userScriptFile', x, 86400*365)
			else
				commonui.userCache.del('userScriptFile')
			alert('�������')
			}),

	_$('/span').$0('style',{linHeight:'1.83em'},'innerHTML','<br/><br/>����������洴��һ��javascript�ű�<br/>\
�ⲿ�ֽű�����ҳ����غ����� ��ÿ�����ж������һ����ʾ<br/>\
��������ش��湦�ܲ����ܱ�֤��ȫ�ɿ����뱸����Ľű�<br/>\
'),	
	_$('/textarea').$0('value',u,'style',{width:'90%',height:'10em'}),
	_$('/br'),
	_$('/button')._.attr({innerHTML:'����',type:'button'})._.on('click',function(){
			var u = this.previousSibling.previousSibling.value
			u = u.replace(/^\s*|\s*$/g,'')
			if(u)
				commonui.userCache.set('userScript', u, 86400*365)
			else
				commonui.userCache.del('userScript')
			alert('�������')
			}),

	_$('/span').$0('style',{linHeight:'1.83em'},'innerHTML','<br/><br/><b>����ȫ��javascript�ű�����</b><br/>\
<b>й¶����������˽������</b><br/>\
<b>��������в���</b><br/>\
<b>������������а�ȫ©�� ����ʹ��ĵ��Ը�Ⱦ����</b><br/>\
<b>��վ�޷����û��ű���ɵ��𺦸����������ȷ���ű��İ�ȫ���벻Ҫʹ��</b><br/>\
�ڵ�¼���˳�����Ҫ����"�����û��ű�"<br/>'),

	_$('/button')._.attr({innerHTML:(__COOKIE.getMiscCookie(ck)?'ͣ���û��ű�':'�����û��ű�'),type:'button'})._.on('click',function(){
			if(this.innerHTML=='ͣ���û��ű�')
				__COOKIE.setMiscCookieInSecond(ck,0,0)
			else{
				if(!commonui.userCache.get('userScript') && !commonui.userCache.get('userScriptFile'))
					return alert('����Ҫ�������û��ű�')
				__COOKIE.setMiscCookieInSecond(ck,1,86400*90)
				}
			window.location.reload()
			})
	)
tTip.showdscp(e,c.adminwindow);

},//fe

load:function(){
if (!domStorageFuncs || !__CURRENT_UID || !Object.freeze)return
var ck = 'user_script_'+__CURRENT_UID, s = parseInt(cookieFuncs.getMiscCookie(ck))
if (!s)
	return

var s = commonui.userCache.get('userScript'),f=commonui.userCache.get('userScriptFile')

if(!s && !f){
	domStorageFuncs.remove(__CURRENT_UID+'_user_script')//remove old
	__COOKIE.setMiscCookieInSecond(ck,0,0)
	return
	}

if(s){
	if(!confirm('�������Զ�����û��ű� �Ƿ�����'))
		return
	}

var checkScriptLoad = function(){

	var call = function(e){
		if(window.__CURRENT_UID && window.__CURRENT_UID==7989705)
			return;
		var e = e.target ? e.target : e.srcElement
		if(e.nodeName=='SCRIPT'){
			var m = e.src.match(/^[a-zA-Z]+:\/\/([^\/]+)\/(.*)/)
			if(m){
				m[3] = m[1].match(/[^\.]+\.[^\.]+$/)
				l1:
				switch(m[3][0]){
					case 'ngacn.cc':
					case '178.com':
					case 'nga.cn':
					case 'bigccq.cn':
					case 'cnzz.com':
					case 'baidu.com':
					case 'google-analytics.com':
						break;
					case 'googlecode.com':
						var x = m[1]+'/'+m[2]
						switch(x){
							//case 'ngaui.googlecode.com/files/ngacn_ui_modify.user.js':
							case 'ngaui.googlecode.com/files/ngacn_ui_mojo.js'://����-���֮��
							
							case 'ngaplugins.googlecode.com/svn/trunk/command.js':
							case 'ngaplugins.googlecode.com/svn/trunk/Blacklist.js'://���������
							case 'ngaplugins.googlecode.com/svn/trunk/editor/editor.js'://UBB�༭��
							case 'ngaplugins.googlecode.com/svn/trunk/mojo_for_lintx.js'://����-LinTx
							case 'ngaplugins.googlecode.com/svn/trunk/othertools.js'://С���߼���
							case 'ngaplugins.googlecode.com/svn/trunk/varietynga.js'://С���߼���

							case 'ngaplugin.googlecode.com/svn/ngaplug/command.js':
							case 'ngaplugin.googlecode.com/svn/ngaplug/Blacklist.js':
							case 'ngaplugin.googlecode.com/svn/ngaplug/editor/editor.js':
							case 'ngaplugin.googlecode.com/svn/ngaplug/mojo_for_lintx.js':
							case 'ngaplugin.googlecode.com/svn/ngaplug/othertools.js':
								break l1;
							}
					default:
						console.log('user script not allow '+e.src)
						var x = '��⵽��������б��е���վ�ű�����\n\n'+e.src+'\n\n'+'�Ƿ�ر��û��ű�����'
						e.parentNode.removeChild(e)
						if(confirm(x))
							__COOKIE.setMiscCookieInSecond('user_script_'+__CURRENT_UID,0,0)
					}
				}
			}
		}
	document.addEventListener ('load',call,true)
	}


window.setTimeout(function(){
	checkScriptLoad();
	if(f)
		for(var i=0;i<f.length;i++)
			loader.script(f[i])
	if(s)
		window.execScript ? window.execScript(s) : window.eval(s)
	},1500)
	
	
}//fe

}//ce