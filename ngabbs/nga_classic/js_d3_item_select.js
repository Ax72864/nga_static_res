if(!window.postfunc)window.postfunc={}

postfunc.prePostHint = function(){
if((this.form.elements.namedItem("fid").value!=401 && this.form.elements.namedItem("fid").value!=404) || this.form.elements.namedItem("tid").value!=0)return true;
if(this.form.elements.namedItem("fid").value==401)
	var x=_$("<div id='additional_check_120604' class=gray style='line-height:22px'>\
<span class='b'>���±�ѡ</span><br/>\
<span class='red'><nobr><input type=radio name='reign'><span>�Ƿ���</span></nobr> \
<nobr><input type=radio name='reign'><span>�Ƿ�����</span></nobr> \
<nobr><input type=radio name='reign'><span>������</span></nobr> \
<nobr><input type=radio name='reign'><span>��������</span></nobr> \
<nobr><input type=radio name='reign'><span>ŷ����</span></nobr> \
<nobr><input type=radio name='reign'><span>ŷ������</span></nobr></span> \
 &nbsp; BattleTag ��������ϵ��ʽ:<nobr><input name='battletag'></nobr></span> \
<br/>\
<span class='b'>���¿�ѡ��ṩ����������������������ҵ������Ϣ</span>\
<br/>\
<nobr><input type=checkbox name='class'><span>Ұ����</span></nobr> \
<nobr><input type=checkbox name='class'><span>��ħ��</span></nobr> \
<nobr><input type=checkbox name='class'><span>��ɮ</span></nobr> \
<nobr><input type=checkbox name='class'><span>��ҽ</span></nobr> \
<nobr><input type=checkbox name='class'><span>��ʦ</span></nobr> <span class=silver>(����ְҵ)</span>\
<br/>\
<span class='b'>���±�ѡһ��</span>\
<br/>\
<nobr><input type=radio name='type'><span>����/��װ</span></nobr> \
<nobr><input type=radio name='type'><span>ͼֽ</span></nobr> \
<nobr><input type=radio name='type' class='gold'><span>���</span></nobr> \
<br/>\
<nobr><input type=radio name='slot' class='weapon'><span>˫��</span></nobr> \
<nobr><input type=radio name='slot' class='weapon'><span>����</span></nobr> \
<nobr><input type=radio name='slot'><span>����</span></nobr> \
<nobr><input type=radio name='slot'><span>��</span></nobr> \
 &nbsp; \
<nobr><input type=radio name='slot'><span>ͷ��</span></nobr> \
<nobr><input type=radio name='slot'><span>����</span></nobr> \
<nobr><input type=radio name='slot'><span>�ؼ�</span></nobr> \
<nobr><input type=radio name='slot'><span>����</span></nobr> \
<nobr><input type=radio name='slot'><span>����</span></nobr> \
<nobr><input type=radio name='slot'><span>ѥ��</span></nobr> \
<nobr><input type=radio name='slot'><span>����</span></nobr> \
<nobr><input type=radio name='slot'><span>����</span></nobr> \
<nobr><input type=radio name='slot'><span>����</span></nobr> \
<nobr><input type=radio name='slot'><span>��ָ</span></nobr> \
 &nbsp; \
<nobr><input type=radio name='range'><span>��ս</span></nobr> <span class=silver>(��ս����)</span> \
<nobr><input type=radio name='range'><span>Զ��</span></nobr> <span class=silver>(Զ������)</span> \
<br/>\
<span class='b'>���±�ѡһ��</span>\
<br/>\
<nobr><input type=checkbox><span>����</span></nobr> \
<nobr><input type=checkbox><span>����</span></nobr> \
<nobr><input type=checkbox><span>����</span></nobr> \
<nobr><input type=checkbox><span>����</span></nobr><span class=silver>(����/��������ֵ����)</span> \
 &nbsp; \
<nobr><input type=checkbox><span>����</span></nobr><span class=silver>(ŭ��/����/����/����/��������)</span> \
<nobr><input type=checkbox><span>��Ѫ</span></nobr> \
<nobr><input type=checkbox><span>����</span></nobr><span class=silver>(ŭ��/����/����/�����ظ�/�����ظ�����)</span>\
<br/>\
<nobr><input type=checkbox><span>������</span></nobr> \
<nobr><input type=checkbox><span>����</span></nobr><span class=silver>(������/�����˺�)</span> \
<nobr><input type=checkbox><span>����</span></nobr> \
<nobr><input type=checkbox><span>��Ѫ</span></nobr><span class=silver>(��Ѫ/ÿ���ظ�����/��ɱ�ظ�����/���ľ����ظ�����)</span> \
<nobr><input type=checkbox><span>��Ч</span></nobr><span class=silver>(����/����/����/�־�/ѣ��/��ä/��Ѫ)</span> \
<br/>\
<nobr><input type=checkbox><span>����</span></nobr> \
<nobr><input type=checkbox><span>ȫ��</span></nobr> \
<nobr><input type=checkbox><span>����</span></nobr><span class=silver>(����/����/��ʥ/����/��˪/��/��)</span> \
<nobr><input type=checkbox><span>����</span></nobr> \
<nobr><input type=checkbox><span>����</span></nobr><span class=silver>(���̱�����ʱ��)</span> \
<nobr><input type=checkbox><span>��ս����</span></nobr><span class=silver>(���ͽ�ս�˺�)</span> \
<nobr><input type=checkbox><span>Զ�̼���</span></nobr><span class=silver>(����Զ���˺�)</span> \
<nobr><input type=checkbox><span>��Ӣ����</span></nobr><span class=silver>(���;�Ӣ���˺�)</span>\
<br/>\
<nobr><input type=checkbox><span>���</span></nobr> \
<nobr><input type=checkbox><span>GF</span></nobr><span class=silver>(��߽�һ�ȡ)</span> \
<nobr><input type=checkbox><span>MF</span></nobr><span class=silver>(���ħ��װ����ȡ��)</span> \
<nobr><input type=checkbox><span>����</span></nobr> \
<nobr><input type=checkbox><span>ʰȡ��Χ</span></nobr> \
<nobr><input type=checkbox><span>������</span></nobr><span class=silver>(���������ظ���)</span> \
<nobr><input type=checkbox><span>����</span></nobr><span class=silver>(���͵ȼ�����)</span> \
<br/>\
<nobr><input type=checkbox><span>����</span></nobr> \
</div>")




else
	var x=_$("<div id='additional_check_120604' class=gray style='line-height:22px'>\
<span class='b'>���±�ѡ</span><br/>\
<span class='red'><nobr><input type=radio name='reign'><span>�Ƿ���</span></nobr> \
<nobr><input type=radio name='reign'><span>�Ƿ�����</span></nobr> \
<nobr><input type=radio name='reign'><span>������</span></nobr> \
<nobr><input type=radio name='reign'><span>��������</span></nobr> \
<nobr><input type=radio name='reign'><span>ŷ����</span></nobr> \
<nobr><input type=radio name='reign'><span>ŷ������</span></nobr></span> \
 &nbsp; BattleTag ��������ϵ��ʽ:<nobr><input name='battletag'></nobr></span> \
</div>")






if(this.title.parentNode.nodeName=='TD')
	this.title.parentNode.appendChild(x)
else
	this.title.parentNode.insertBefore(x,this.content)
}


postfunc.additional_check = function(){
if((this.form.elements.namedItem("fid").value!=401 && this.form.elements.namedItem("fid").value!=404) || this.form.elements.namedItem("tid").value!=0)return true;
var x = $('additional_check_120604'),y = x.getElementsByTagName('nobr'),z = '',u='',v=null,w='', reignU , classU , typeU , slotU , rangeU , pU ,weapon


for (var i=0;i<y.length ; i++){
	v = y[i]
	if (v.firstChild.name=='battletag')
		w=v.firstChild.value
	else if (v.firstChild.checked){
		if(v.firstChild.name=='type'){
			typeU=true
			if(v.firstChild.className=='gold' && this.form.elements.namedItem("fid").value!=404){
				alert('��ҹ�����Ϣ����ר�������������ת����ҹ�����Ϣ������')
				window.location.href='/post.php?fid=404'
				return
				}
			}
		else if(v.firstChild.name=='slot'){
			slotU=true
			if(v.firstChild.className=='weapon')weapon=true
			}
		else if(v.firstChild.name=='range')
			rangeU=true
		else if(v.firstChild.name=='reign')
			reignU=true
		else if(!v.firstChild.name)
			pU=true

		if(v.firstChild.name=='reign')
			u='['+v.lastChild.innerHTML+']'
		else
			z+='['+v.lastChild.innerHTML+']'
		}
	}
this.title.value = this.title.value.replace(/\[.+?\]/g,'')

if(!reignU)
	return alert('������ڵ�����ѡ��һ��')

if(this.form.elements.namedItem("fid").value==401){
	if(!slotU)
		return alert('�������װ��λ����ѡ��һ��')

	if(weapon && !rangeU)
		return alert('�����ѡ��Զ���������ս����')

	if(!pU)
		return alert('�����������������ѡ��һ��')
	}
this.title.value=u+this.title.value+z
//if(this.title.value.toUpperCase().indexOf(w.toUpperCase())==-1)
//	this.title.value+='('+w+')'
if(this.content.value.toUpperCase().indexOf(w.toUpperCase())==-1)
	this.content.value+='\n\n'+u+' '+w
return true

}
