<!-- 
var jst = new jsTemplates();
jst.templates['readrepeat'] = "\
<table class='forumbox postbox' cellspacing='1px'>\
	<tr id='post1strow{$l}' class='row{$bg} postrow'>\
		<td class='c1'>\
			<span class='green right'>[{$l} ¥]</span><a name='l{$l}'></a>\
			<strong id='postauthor{$l}'>{$author}</strong>\
		</td>\
		<td class='c2'>\
			<span class='right' style='line-height:12px;margin:-3px'>\
				{$btngenargs}\
			</span>\
			<span class='numeric' id='postdate{$l}'>{$date}</span>\
		</td>\
	</tr>\
	<tr class='row{$bg} postrow'>\
		<td class='c1' style='vertical-align:top;text-align:center'>\
			<div id='postportrait{$l}' class='portrait'>\
				{$face}\
			</div>\
			<span class='silver'>{$honor}</span>\
			<div class='stat' title=' ע��ʱ��: {$regdate} &#10; ����½: {$lastlogin} '>\
				<img class='gimg' src='/image/nga_classic/level/{$lpic}.gif'>\
				<span class='gimg'>{$ipfrom}</span>\
				<span class='gimg'>{$ip}</span>\
				����: <span>{$level}</span><br/>\
				����: <span class='numericl'>{$postnum}</span><br/>\
				����: <span id='posterpg{$l}' class='numericl'>{$rvrc}</span><br/>\
				{$money}\
			</div>\
		</td>\
		<td class='c2 pc{$gid}' style='vertical-align:top'>\
			{$icon}<h3 id='postsubject{$l}'>{$subject}</h3><br/>\
			<span id='postcontent{$l}'>{$content}</span>\
			<br/>\
			{$addon}\
			{$mark}\
			<div id='postsign{$l}'>\
				<span class='sigline'>BBS.NGACN.CC</span>\
				<div class='sign' id='postsigncontent{$l}'>\
					{$sign}\
				</div>\
			</div>\
		</td>\
	</tr>\
</table>\
";
jst.additionalFunctions['readrepeat'] = new Array;
jst.additionalFunctions['readrepeat']['content'] = function (c)
{
return bbscode_core(c)
}
//fe
jst.additionalFunctions['readrepeat']['sign'] = function (c)
{
return bbscode_core(c)
}
//fe
jst.additionalFunctions['readrepeat']['mark'] = function (m)
{
	if (m)
		{
			return "<table class='quote'><tr><td>����������,������ּ�¼ "+m+"</td></tr></table>";
		}
	else
		{
			return '';
		}
}
//fe
jst.additionalFunctions['readrepeat']['money'] = function (c)
{
c = parseInt(c)
if (c <= 0)
	{
		return ('');
	}
g = Math.floor(c / 10000);
s = Math.floor(c / 100) - g * 100;
c = c - g * 10000 - s * 100;
if (g)
	{
		g = g + "<img alt='���' style='margin:2px 2px -2px 2px' src='/image/nga_classic/g.gif'/>";
	}
else
	{
		g = '';
	}
if (s)
	{
		s = s + "<img alt='����' style='margin:2px 2px -2px 2px' src='/image/nga_classic/s.gif'>";
	}
else
	{
		s = '';
	}
if (c)
	{
		c = c + "<img alt='ͭ��' style='margin:2px 2px -2px 2px' src='/image/nga_classic/c.gif'/>";
	}
else
	{
		c = '';
	}
return("�Ƹ�: <span class='numericl'>"+g+s+c+'</span><br/>');
}
//fe

jst.additionalFunctions['readrepeat']['btngenargs'] = function (arg)
{
arg = arg.split(',');
var admincheck = arg[0];
var groupid = arg[1];
var markable = arg[2];
var banuser = arg[3];
var modother = arg[4];
var topofthepage = arg[5];
var lou = arg[6];
var fid = arg[7];
var tid = arg[8];
var pid = arg[9];
var authorid = arg[10];
var oicq = arg[0];
var r = '';
if(admincheck || (groupid!='5' && markable=='1'))
	{
		r = r+"<a href='masingle.php?action=showping&fid="+fid+"&tid="+tid+"&pid="+pid+"'><img src='/image/nga_classic/score.gif' title='����' alt='����'/></a> ";
	}
if(admincheck || (groupid!='5' && banuser=='1'))
	{
		r = r+"<a href='masingle.php?action=banuser&fid="+fid+"&uid="+authorid+"'><img src='/image/nga_classic/mute.gif' title='����' alt='����'/></a> ";
	}
if(groupid!='5' && banuser=='1')
	{
		r = r+"<a href='nuke.php?func=nukestep1&&id="+authorid+"' target='_blank'><img src='/image/nga_classic/nuke1.gif' title='NUKE' alt='Nuke'/></a> ";
		r = r+"<a href='nuke.php?func=csstep1&&id="+authorid+"' target='_blank'><img src='/image/nga_classic/nuke4.gif' title='����ǩ��' alt='CS'/></a> ";
		r = r+"<a href='nuke.php?func=cpstep1&&id="+authorid+"' target='_blank'><img src='/image/nga_classic/nuke4.gif' title='����ͷ��' alt='CP'/></a> ";
	}
if(admincheck || (groupid!='5' && modother=='1'))
	{
		r = r+"<a href='javascript:lessernuke(\""+tid+"\",\""+pid+"\",1,\""+lou+"\")'><img src='/image/nga_classic/nuke2.gif' title='��������' alt='LN'/></a> ";
		r = r+"<a href='javascript:lessernuke(\""+tid+"\",\""+pid+"\",2,\""+lou+"\")'><img src='/image/nga_classic/nuke2.gif' title='�������� ��һ����' alt='LN'/></a> ";
		r = r+"<a href='javascript:lessernuke(\""+tid+"\",\""+pid+"\",3,\""+lou+"\")'><img src='/image/nga_classic/nuke2.gif' title='��������' alt='LN'/></a> ";
		r = r+"<a href='javascript:lessernuke(\""+tid+"\",\""+pid+"\",4,\""+lou+"\")'><img src='/image/nga_classic/nuke2.gif' title='�������� �۶�����' alt='LN'/></a> ";
		r = r+"<a href='javascript:logpost(\""+tid+"\",\""+lou+"\")'><img src='/image/nga_classic/bad.gif' title='�㱨����������' alt='LG'/></a> ";
		if(topofthepage)
			{
				r = r+"<a href='#' onclick='this.document.delatc.submit();'><img src='/image/nga_classic/recycle1.gif' title='ɾ��ѡ���Ļظ�' alt='DCR'/></a> ";
			}
		if (lou != 0)
			{
				r = r+"<input type='checkbox' name='delatc[]' value='"+pid+"' title='ɾ��ѡ���Ļظ�' style='vertical-align:6px'/>";
				r = r+"<a href='javascript:delsinglereply(\""+tid+"\",\""+pid+"\")'><img src='/image/nga_classic/recycle2.gif' title='ɾ���˻ظ�����ظ��и�����ʹ�ô˹���' alt='DTR'/></a> ";
			}
		else
			{
				r = r+"<a href='javascript:recommend(\""+tid+"\",10)'><img src='/image/nga_classic/good.gif' title='�Ƽ�������⣨�Ӿ����ö������󡢸ı������ɫ�����������߼��������Զ��Ƽ���' alt='RD'/></a> ";
			}
	}
/*
if($db_showonline)
	{
		if($read['thisvisit']+$db_onlinetime*1.5>$timestamp)
			{
				document.write("����");
			}
		else
			{
				document.write("������");
			}
	}
*/
r = r+"<a href='profile.php?action=show&uid="+authorid+"'><img src='/image/nga_classic/member.gif' title='�鿴��������' alt='����'/></a> ";
r = r+"<a href='message.php?action=write&touid="+authorid+"'><img src='/image/nga_classic/pm.gif' title='���Ͷ���Ϣ' alt='PM'/></a> ";
r = r+"<a href='post.php?action=modify&fid="+fid+"&tid="+tid+"&pid="+pid+"&article="+lou+"'><img src='/image/nga_classic/post.gif' title='�༭' alt='�༭'/></a> ";
r = r+"<a href='post.php?action=quote&fid="+fid+"&tid="+tid+"&pid="+pid+"&article="+lou+"'><img src='/image/nga_classic/quote.gif' title='���ûظ��������' alt='����'/></a> ";
r = r+"<a href='javascript:scroll(0,0)'><img src='/image/nga_classic/top.gif' title='�ص�����' alt='����'/></a>";
return (r);
}
//fe
-->