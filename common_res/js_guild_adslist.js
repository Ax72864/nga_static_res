/*
========================
FOR NGACN ONLY
------------
(c) 2005 Zeg All Rights Reserved
========================
bbs.ngacn.cc ����б� v1.00
written by zeg 20051010
========================

bbs_ads1 ��̳ȫҳ�涥��ͨ�� 900*60
bbs_ads1x ��̳ȫҳ�涥��ͨ���ڶ���

bbs_ads2 �����������A ��̳��ҳ���� 190*400
bbs_ads8 �����������A ��̳�Ķ�����ҳ�棨��������һ���Ҳ�190*400
bbs_ads16 �����������A ��̳�����б�ҳ�棨���棩�ײ����ٷ����Ҳ� 190*400

bbs_ads17 �����������B ��̳�Ķ�����ҳ�棨�������ڶ����Ҳ�190*400
bbs_ads13 �����������B ��̳��ҳ����190*400

bbs_ads9 ͨ�����A ��̳�����б�ҳ�棨���棩��ͨ�� 900*60
bbs_ads10 ͨ�����A ��̳�Ķ�����ҳ�棨��������һ����ͨ�� 900*60
bbs_ads11 ͨ�����A ��̳��ҳ��ͨ��#1 900��60

bbs_ads14 ͨ�����B ��̳ȫҳ����ͨ�� 900��60

bbs_ads12 ��̳ȫҳ����ת 600*360

bbs_ads15 ��̳�Ķ�����ҳ�棨���������ֹ��

*/

var fAds = new Array;
var j = 0;
/*�����*/
fAds[j] = new Array;
fAds[j]['file'] = __IMG_BASE+'/misc/self/f/f1.jpg';
fAds[j]['url'] = '/thread.php?fid=200';
j++;
/*����*/
fAds[j] = new Array;
fAds[j]['file'] = __IMG_BASE+'/misc/self/f/f2.jpg';
fAds[j]['url'] = '/thread.php?fid=102';
j++;
/*ʥ��*/
fAds[j] = new Array;
fAds[j]['file'] = new Array(
__IMG_BASE+'/misc/self/f/f184a.jpg',
__IMG_BASE+'/misc/self/f/f3.jpg');
fAds[j]['url'] = '/thread.php?fid=184';
j++;
/*ħ��*/
fAds[j] = new Array;
fAds[j]['file'] = __IMG_BASE+'/misc/self/f/f4.jpg';
fAds[j]['url'] = '/thread.php?fid=182';
j++;
/*����*/
fAds[j] = new Array;
fAds[j]['file'] = new Array(
__IMG_BASE+'/misc/self/f/f187a.jpg',
__IMG_BASE+'/misc/self/f/f5.jpg');
fAds[j]['url'] = '/thread.php?fid=187';
j++;
/*��ʦ*/
fAds[j] = new Array;
fAds[j]['file'] = __IMG_BASE+'/misc/self/f/f6.jpg';
fAds[j]['url'] = '/thread.php?fid=183';
j++;
/*��ʿ*/
fAds[j] = new Array;
fAds[j]['file'] = __IMG_BASE+'/misc/self/f/f7.jpg';
fAds[j]['url'] = '/thread.php?fid=188';
j++;
/*der*/
fAds[j] = new Array;
fAds[j]['file'] = __IMG_BASE+'/misc/self/f/f8.jpg';
fAds[j]['url'] = '/thread.php?fid=186';
j++;
/*�ؾ�*/
fAds[j] = new Array;
fAds[j]['file'] = __IMG_BASE+'/misc/self/f/f9.jpg';
fAds[j]['url'] = '/thread.php?fid=191';
j++;
/*����*/
fAds[j] = new Array;
fAds[j]['file'] = __IMG_BASE+'/misc/self/f/f10.jpg';
fAds[j]['url'] = '/thread.php?fid=272';
j++;
/*սʿ*/
fAds[j] = new Array;
fAds[j]['file'] = new Array(
__IMG_BASE+'/misc/self/f/f12.jpg',
__IMG_BASE+'/misc/self/f/f181a.jpg');
fAds[j]['url'] = '/thread.php?fid=181';
j++;
/*����*/
fAds[j] = new Array;
fAds[j]['file'] = __IMG_BASE+'/misc/self/f/f185.jpg';
fAds[j]['url'] = '/thread.php?fid=185';
j++;
/*��*/
fAds[j] = new Array;
fAds[j]['file'] = new Array(
__IMG_BASE+'/misc/self/f/f189a.jpg',
__IMG_BASE+'/misc/self/f/f189.jpg');
fAds[j]['url'] = '/thread.php?fid=189';
j++;
/*����*/
fAds[j] = new Array;
fAds[j]['file'] = __IMG_BASE+'/misc/self/f/f11.jpg';
fAds[j]['url'] = '/thread.php?fid=190';

j = Math.floor(Math.random()*(j+1));
if (typeof(fAds[j]['file'])=='object')
	{
		fAds[j]['file'] = fAds[j]['file'][ Math.floor(Math.random()*fAds[j]['file'].length)]
	}

/*--------------------*/
var googleAD = new Array;
var ngaAds = new Array;
var i = 0;

/* �����������A ��̳��ҳ���� 190*400			bbs_ads2*/

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads2';
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/090120.jpg';
ngaAds[i]['url'] = 'http://bbs.ngacn.cc/read.php?tid=2148616&fpage=1';
ngaAds[i]['width'] = 190;
ngaAds[i]['height'] = 400;
ngaAds[i]['type'] = '';
ngaAds[i]['date'] = '1/20/2009-2/1/2009';
ngaAds[i]['rate'] = 80;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads2';										/*���λID*/
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/20060830.jpg';		/*�ļ� ͼƬ��flash*/
ngaAds[i]['url'] = '';												/*���ӵ�ַ flash������д*/
ngaAds[i]['title'] = '��߷�����ʶ�������ʺŰ�ȫ';				/*ͼƬ˵�� flash������д*/
ngaAds[i]['width'] = '';											/*��� ͼƬ������д*/
ngaAds[i]['height'] = '';											/*�߶� ͼƬ������д*/
ngaAds[i]['date'] = 'all';											/*����(���ղ���ʾ�������) ���� 2/15/2006 7/1/2006-7/31/2006 8/1/2006-8/31/2006 ��Ϊ��2��15�պ�7����8����ʾ ����all��Ϊһֱ��ʾ*/
ngaAds[i]['rate'] = 4;											/*��ʾ�ļ��ʣ��ٷֱȣ���ͬһ�����λ�����й����ʾ�������Ӧ������100*/
ngaAds[i]['nolog'] = 1;					/* ����¼��� */
i++;


function bbs_ads2_load()
{
if (ngaAds['bbs_ads2'] && checkindex() && window.location.href.indexOf('/g/')==-1)
	{
		put(ngaAds.genAds(ngaAds['bbs_ads2']));
	}
}
function bbs_ads2()
{
if (ngaAds['bbs_ads2'] && checkindex() && window.location.href.indexOf('/g/')==-1)
	{
	id2e('menu').style.marginRight = '210px';
	id2e('m_cate5').style.marginRight = '210px';
	id2e('m_stat_top').style.marginRight = '210px';
	id2e('adsc2').style.display = 'block';
	}
}

/* �����������A ��̳�Ķ�����ҳ�棨��������һ���Ҳ�190*400		bbs_ads8*/

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads8';
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/090120.jpg';
ngaAds[i]['url'] = 'http://bbs.ngacn.cc/read.php?tid=2148616&fpage=1';
ngaAds[i]['width'] = 190;
ngaAds[i]['height'] = 400;
ngaAds[i]['type'] = '';
ngaAds[i]['date'] = '1/20/2009-2/1/2009';
ngaAds[i]['rate'] = 80;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads8';
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/20081209.jpg';
ngaAds[i]['url'] = 'http://www.ngacn.cc/t_wlk/';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 40;
ngaAds[i]['nolog'] = 1;
i++;

/* �����������B ��̳�Ķ�����ҳ�棨�������ڶ����Ҳ�190*400		bbs_ads17*/

//����
ngaAds[i] = new Array;
ngaAds[i]['file'] = fAds[j]['file'];
ngaAds[i]['url'] = fAds[j]['url'];
ngaAds[i]['id'] = 'bbs_ads17';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 30;
ngaAds[i]['nolog'] = 1;
i++;

//self
ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads17';
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/20060830.jpg';
ngaAds[i]['title'] = '��߷�����ʶ�������ʺŰ�ȫ';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 4;
ngaAds[i]['nolog'] = 1;
i++;

//self
ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads17';
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/20070728b.png';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 2;
ngaAds[i]['nolog'] = 1;
i++;

//self
ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads17';
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/20060829.jpg';
ngaAds[i]['title'] = 'ֹͣ�����ң��õ���������ͼ';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 4;
ngaAds[i]['nolog'] = 1;
i++;

//self
ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads17';
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/20081209a.jpg';
ngaAds[i]['url'] = 'http://atlas.ngacn.cc';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 25;
ngaAds[i]['nolog'] = 1;
i++;

//self
ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads17';
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/sc20080407.jpg';
ngaAds[i]['url'] = 'http://bbs.sc2.cc';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 5;
ngaAds[i]['nolog'] = 1;
i++;

var ads8notshow = true;
function bbs_ads8_load(id)
{
if (ngaAds['bbs_ads8'] && id==0 && checkurl('/read.php'))
	{
		ngaAds['bbs_ads8']['ads8show'] = id+1;
		put(ngaAds.genAds(ngaAds['bbs_ads8']));
	}
if (ngaAds['bbs_ads17'] && id==1 && checkurl('/read.php'))
	{
		ngaAds['bbs_ads17']['ads17show'] = id+1;
		put(ngaAds.genAds(ngaAds['bbs_ads17']));
	}
}
function bbs_ads8()
{
if (ngaAds['bbs_ads8'] && ngaAds['bbs_ads8']['ads8show'] && checkurl('/read.php'))
	{
		id2e('postads'+(ngaAds['bbs_ads8']['ads8show']-1)).className = 'adsc5';
	}
if (ngaAds['bbs_ads17'] && ngaAds['bbs_ads17']['ads17show'] && checkurl('/read.php'))
	{
		id2e('postads'+(ngaAds['bbs_ads17']['ads17show']-1)).className = 'adsc5';
	}
}


/*�����������B ��̳��ҳ����190*400*/

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads13';										/*���λID*/
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/20060830.jpg';		/*�ļ� ͼƬ��flash*/
ngaAds[i]['url'] = '';												/*���ӵ�ַ flash������д*/
ngaAds[i]['title'] = '��߷�����ʶ�������ʺŰ�ȫ';				/*ͼƬ˵�� flash������д*/
ngaAds[i]['width'] = '';											/*��� ͼƬ������д*/
ngaAds[i]['height'] = '';											/*�߶� ͼƬ������д*/
ngaAds[i]['date'] = 'all';											/*����(���ղ���ʾ�������) ���� 2/15/2006 7/1/2006-7/31/2006 8/1/2006-8/31/2006 ��Ϊ��2��15�պ�7����8����ʾ ����all��Ϊһֱ��ʾ*/
ngaAds[i]['rate'] = 4;											/*��ʾ�ļ��ʣ��ٷֱȣ���ͬһ�����λ�����й����ʾ�������Ӧ������100*/
ngaAds[i]['nolog'] = 1;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads13';
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/20060829.jpg';
ngaAds[i]['title'] = 'ֹͣ�����ң��õ���������ͼ';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 4;
ngaAds[i]['nolog'] = 1;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads13';
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/20070728b.png';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 2;
ngaAds[i]['nolog'] = 1;
i++;

//����
ngaAds[i] = new Array;
ngaAds[i]['file'] = fAds[j]['file'];
ngaAds[i]['url'] = fAds[j]['url'];
ngaAds[i]['id'] = 'bbs_ads13';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 30;
ngaAds[i]['nolog'] = 1;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads13';
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/20081209a.jpg';
ngaAds[i]['url'] = 'http://atlas.ngacn.cc';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 20;
ngaAds[i]['nolog'] = 1;
i++;

//self
ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads13';
ngaAds[i]['file'] = __IMG_BASE+'/misc/self/sc20080407.jpg';
ngaAds[i]['url'] = 'http://bbs.sc2.cc';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 10;
ngaAds[i]['nolog'] = 1;
i++;

function bbs_ads13()
{
function makespace()
{
	id2e('m_cate2').style.marginLeft = '210px';
	if (id2e('m_cate2_title'))
		{
			id2e('m_cate2_title').style.marginLeft = '210px';
		}
}
if (ngaAds['bbs_ads13'] && checkindex() && window.location.href.indexOf('/g/')==-1)
	{
		makespace();
		id2e('adsc_cate_block2').innerHTML = ngaAds.genAds(ngaAds['bbs_ads13']);
		id2e('adsc_cate_block2').style.display = 'block';
	}
}



/*��̳ȫҳ����ͨ�� 900��60		bbs_ads1*/


// intel
ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads1';
ngaAds[i]['file'] = __IMG_BASE+'/misc/intel/090206/bbs_900_90xx.swf';
ngaAds[i]['url'] = 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=744263&PluID=0&ord=[timestamp]';
ngaAds[i]['type'] = '';
ngaAds[i]['width'] = '900';
ngaAds[i]['height'] = '90';
ngaAds[i]['date'] = '2/6/2009-2/8/2009 2/19/2009-2/22/2009 3/5/2009-3/8/2009';
ngaAds[i]['rate'] = 100;
i++;

function bbs_ads1()
{
if (ngaAds['bbs_ads1'])
	{
		document.write ("ADVERTISEMENT<br/>");
		document.write (ngaAds.genAds(ngaAds['bbs_ads1']));
		if (ngaAds['bbs_ads1x'])
			{
				document.write ("<br style='height:10px;line-height:10px'/>");
				document.write (ngaAds.genAds(ngaAds['bbs_ads1x']));
			}
		id2e('adsc1').style.display='block';
	}
}

/*�ڶ�����̳ȫҳ����ͨ�� 900��60		bbs_ads1x

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads1x';
ngaAds[i]['file'] = 'http://uencn.com/res/sc90060.gif';
ngaAds[i]['url'] = 'http://uencn.com';
ngaAds[i]['width'] = '900';
ngaAds[i]['height'] = '60';
ngaAds[i]['date'] = '';
ngaAds[i]['rate'] = 70;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads1x';
ngaAds[i]['file'] = 'http://uencn.com/res/sc90060.jpg';
ngaAds[i]['url'] = 'http://uencn.com';
ngaAds[i]['width'] = '900';
ngaAds[i]['height'] = '60';
ngaAds[i]['date'] = '';
ngaAds[i]['rate'] = 30;
i++;
*/

/*��̳ͨ�����A ��̳�����б�ҳ�棨���棩��ͨ�� 900*60		bbs_ads9 */


// intel
ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads9';
ngaAds[i]['file'] = __IMG_BASE+'/misc/intel/090206/bbs_900_90_2xx.swf';
ngaAds[i]['url'] = 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=744264&PluID=0&ord=[timestamp]';
ngaAds[i]['type'] = '';
ngaAds[i]['width'] = '900';
ngaAds[i]['height'] = '90';
ngaAds[i]['date'] = '2/12/2009-2/15/2009 2/26/2009-2/28/2009 3/1/2009';
ngaAds[i]['rate'] = 100;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads9';
ngaAds[i]['file'] = 'http://uencn.com/res/sc90060.gif';
ngaAds[i]['url'] = 'http://uencn.com';
ngaAds[i]['width'] = '900';
ngaAds[i]['height'] = '60';
ngaAds[i]['date'] = '';
ngaAds[i]['rate'] = 15;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads9';
ngaAds[i]['file'] = 'http://uencn.com/res/sc90060.jpg';
ngaAds[i]['url'] = 'http://uencn.com';
ngaAds[i]['width'] = '900';
ngaAds[i]['height'] = '60';
ngaAds[i]['date'] = '';
ngaAds[i]['rate'] = 15;
i++;

function bbs_ads9()
{
if (ngaAds['bbs_ads9'] && checkurl('/thread.php'))
	{
		document.write ("<thead><tr><th colspan='5' style='height:3px'></th></tr></thead><tbody><tr><td id='adsc9' colspan='5' class='adsc'>");
		if (ngaAds['bbs_ads9']['file'] == 'google')
			{
				var i = googleAD.length;
				googleAD[i] = new Array;
				googleAD[i]['google_ad_client'] = "pub-2693756330642707"
				googleAD[i]['google_ad_width'] = 467;
				googleAD[i]['google_ad_height'] = 60;
				googleAD[i]['google_ad_format'] = "468x60_as";
				googleAD[i]['google_ad_type'] = "text";
				googleAD[i]['google_ad_channel'] = "";
				googleAD[i]['google_color_border'] = "FFEEBB";
				googleAD[i]['google_color_bg'] = "FFF5D7";
				googleAD[i]['google_color_link'] = "1D2A63";
				googleAD[i]['google_color_text'] = "121C46";
				googleAD[i]['google_color_url'] = "1D2A63";
				googleAD[i]['container'] = 'adsc9';
				googleAD[i]['id'] = i;
				if (getClientWidth() >= 800)
					{
						i = googleAD.length;
						googleAD[i] = new Array;
						googleAD[i]['google_ad_client'] = "pub-2693756330642707"
						if (getClientWidth() >= 1024)
							{
								googleAD[i]['google_ad_width'] = 467;
								googleAD[i]['google_ad_height'] = 60;
								googleAD[i]['google_ad_format'] = "468x60_as";
							}
						else
							{
								googleAD[i]['google_ad_width'] = 234;
								googleAD[i]['google_ad_height'] = 60;
								googleAD[i]['google_ad_format'] = "234x60_as";
							}
						googleAD[i]['google_ad_type'] = "text";
						googleAD[i]['google_ad_channel'] = "";
						googleAD[i]['google_color_border'] = "FFEEBB";
						googleAD[i]['google_color_bg'] = "FFF5D7";
						googleAD[i]['google_color_link'] = "1D2A63";
						googleAD[i]['google_color_text'] = "121C46";
						googleAD[i]['google_color_url'] = "1D2A63";
						googleAD[i]['container'] = 'adsc9';
						googleAD[i]['id'] = i;
					}

			}
		else
			{
				document.write (ngaAds.genAds(ngaAds['bbs_ads9']));
			}
		document.write ("</td></tr></tbody>");
	}
}


/*ͨ�����A ��̳�Ķ�����ҳ�棨��������һ����ͨ�� 900*60		bbs_ads10 */


// intel
ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads10';
ngaAds[i]['file'] = __IMG_BASE+'/misc/intel/090206/bbs_900_90_2xx.swf';
ngaAds[i]['url'] = 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=744264&PluID=0&ord=[timestamp]';
ngaAds[i]['type'] = '';
ngaAds[i]['width'] = '900';
ngaAds[i]['height'] = '90';
ngaAds[i]['date'] = '2/12/2009-2/15/2009 2/26/2009-2/28/2009 3/1/2009';
ngaAds[i]['rate'] = 100;
i++;

function bbs_ads10()
{
if (ngaAds['bbs_ads10'] && checkurl('/read.php'))
	{
		document.write ("<div id='adsc10' class='adsc'>");
		if (ngaAds['bbs_ads10']['file'] == 'google')
			{
				var i = googleAD.length;
				googleAD[i] = new Array;
				googleAD[i]['google_ad_client'] = "pub-2693756330642707"
				googleAD[i]['google_ad_width'] = 467;
				googleAD[i]['google_ad_height'] = 60;
				googleAD[i]['google_ad_format'] = "468x60_as";
				googleAD[i]['google_ad_type'] = "text";
				googleAD[i]['google_ad_channel'] = "";
				googleAD[i]['google_color_border'] = "e1e5eb";
				googleAD[i]['google_color_bg'] = "edf2f8";
				googleAD[i]['google_color_link'] = "1D2A63";
				googleAD[i]['google_color_text'] = "121C46";
				googleAD[i]['google_color_url'] = "1D2A63";
				googleAD[i]['container'] = 'adsc10';
				googleAD[i]['id'] = i;
				if (getClientWidth() >= 800)
					{
						i = googleAD.length;
						googleAD[i] = new Array;
						googleAD[i]['google_ad_client'] = "pub-2693756330642707"
						if (getClientWidth() >= 1024)
							{
								googleAD[i]['google_ad_width'] = 467;
								googleAD[i]['google_ad_height'] = 60;
								googleAD[i]['google_ad_format'] = "468x60_as";
							}
						else
							{
								googleAD[i]['google_ad_width'] = 234;
								googleAD[i]['google_ad_height'] = 60;
								googleAD[i]['google_ad_format'] = "234x60_as";
							}
						googleAD[i]['google_ad_type'] = "text";
						googleAD[i]['google_ad_channel'] = "";
						googleAD[i]['google_color_border'] = "e1e5eb";
						googleAD[i]['google_color_bg'] = "edf2f8";
						googleAD[i]['google_color_link'] = "1D2A63";
						googleAD[i]['google_color_text'] = "121C46";
						googleAD[i]['google_color_url'] = "1D2A63";
						googleAD[i]['container'] = 'adsc10';
						googleAD[i]['id'] = i;
					}

			}
		else
			{
				document.write (ngaAds.genAds(ngaAds['bbs_ads10']));
			}
		document.write ("</div>");
	}
}


/*ͨ�����A ��̳��ҳ��ͨ��#1 900��60			bbs_ads11 */


// intel
ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads11';
ngaAds[i]['file'] = __IMG_BASE+'/misc/intel/090206/bbs_900_90_2xx.swf';
ngaAds[i]['url'] = 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=744264&PluID=0&ord=[timestamp]';
ngaAds[i]['type'] = '';
ngaAds[i]['width'] = '900';
ngaAds[i]['height'] = '90';
ngaAds[i]['date'] = '2/12/2009-2/15/2009 2/26/2009-2/28/2009 3/1/2009';
ngaAds[i]['rate'] = 100;
i++;

function bbs_ads11()
{
if (ngaAds['bbs_ads11'])
	{
		document.write ("<div id='adsc11' class='adsc'>");
		document.write ("ADVERTISEMENT<br/>");
		document.write (ngaAds.genAds(ngaAds['bbs_ads11']));
		document.write ("</div>");
	}
}

/*ͨ�����B ��̳ȫҳ����ͨ�� 900��60	bbs_ads14*/


// baidu
ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads14_2';
ngaAds[i]['file'] = 'http://cpro.baidu.com/cpro/ui/cp.js';//cpro_client
ngaAds[i]['ads_container_id'] = 'bbs_ads14'
ngaAds[i]['type'] = 'baidu';
ngaAds[i]['date'] = '';
ngaAds[i]['width'] = 468;
ngaAds[i]['height'] = 15;
ngaAds[i]['rate'] = 100;
ngaAds[i]['args'] = new Array
ngaAds[i]['args']['cpro_client']='haozi8011_43942_cpr';
ngaAds[i]['args']['cpro_flush']=4; 
ngaAds[i]['args']['cpro_w']=468; 
ngaAds[i]['args']['cpro_h']=15; 
ngaAds[i]['args']['cpro_template']='wlink_default_468_15'; 
ngaAds[i]['args']['cpro_cbd']='#e7d5aa'; 
ngaAds[i]['args']['cpro_cbg']='#e7d5aa'; 
ngaAds[i]['args']['cpro_ctitle']='#1d2a63'; 
ngaAds[i]['args']['cpro_cflush']='#e10900'; 
ngaAds[i]['args']['cpro_uap']=1;
ngaAds[i]['args']['cpro_cad']=1;
i++;

function bbs_ads14()
{
if (ngaAds['bbs_ads14'])
	{
		document.write ("<div class='adsc_cate' id='bbs_ads14' style='display:block'>");
		document.write ("<span class='xxtxt'>ADVERTISEMENT<br/></span><div>");
		document.write (ngaAds.genAds(ngaAds['bbs_ads14']));
		if (ngaAds['bbs_ads14_2'])
			{
			document.write (ngaAds.genAds(ngaAds['bbs_ads14_2']));
			}
		document.write ("</div><div class='clear'></div>");
		document.write ('</div>')
	}
}

/*��̳ȫҳ����ת			bbs_ads12*/

// intel
ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads12';
ngaAds[i]['refreshid'] = 'intel';
ngaAds[i]['file'] = __IMG_BASE+'/misc/intel/081122/600_360.swf';
ngaAds[i]['url'] = 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=687715&pi=0&ord=[timestamp]';
ngaAds[i]['width'] = '600';
ngaAds[i]['height'] = '360';
ngaAds[i]['date'] = '11/24/2008 11/25/2008 11/27/2008';
ngaAds[i]['rate'] = 100;
i++;



/*��̳��������			bbs_ads15*/

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads15';
ngaAds[i]['file'] = '<span class="blue">[</span> <a href="http://ngacn.cc/t_wlk/" target="_blank">WLK���������츳ģ����</a> <span class="silver">]</span>';
ngaAds[i]['type'] = 'txt';
ngaAds[i]['date'] = '12/01/2008-1/1/2009';
ngaAds[i]['rate'] = 50;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads15';
ngaAds[i]['file'] = '<span class="silver">[</span> <a href="http://atlas.'+__AJAX_DOMAIN+'" target="_blank">Atlas.NGACN.CC</a> <span class="silver">]</span> ħ�����������ٲ�'
ngaAds[i]['type'] = 'txt';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 10;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads15';
ngaAds[i]['file'] = '<span class="silver">[</span> <a href="http://wiki.'+__AJAX_DOMAIN+'" target="_blank">Wiki.NGACN.CC</a> <span class="silver">]</span> ħ������ά�� 5�����ɱ༭';
ngaAds[i]['type'] = 'txt';
ngaAds[i]['date'] = 'all';
ngaAds[i]['rate'] = 10;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads15';
ngaAds[i]['file'] = '<span class="silver">[</span> <a href="http://bbs.sc2.cc/read.php?tid=557" target="_blank">�Ǽ�2Terran�¾ɿƼ����Ƚ�</a> <span class="silver">]</span>';
ngaAds[i]['type'] = 'txt';
ngaAds[i]['date'] = '7/1/2008-8/26/2008';
ngaAds[i]['rate'] = 10;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads15';
ngaAds[i]['file'] = '<span class="silver">[</span> <a href="http://bbs.sc2.cc/read.php?tid=104" target="_blank">�Ǽ��������ϻ���</a> <span class="silver">]</span>';
ngaAds[i]['type'] = 'txt';
ngaAds[i]['date'] = '7/26/2008-8/6/2008';
ngaAds[i]['rate'] = 10;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads15';
ngaAds[i]['file'] = '<span class="silver">[</span> <a href="http://bbs.sc2.cc/read.php?tid=503" target="_blank">�Ǽ�����2�ٷ�Q&A ��42�� ���߻ع�Tier1.5�Ƽ�!</a> <span class="silver">]</span>';
ngaAds[i]['type'] = 'txt';
ngaAds[i]['date'] = '7/26/2008-8/6/2008';
ngaAds[i]['rate'] = 10;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads15';
ngaAds[i]['file'] = '<span class="silver">[</span> <a href="http://bbs.sc2.cc/read.php?tid=29" target="_blank">�Ǽ�����2����-Pre Alpha��P/T��ȫ����������</a> <span class="silver">]</span>';
ngaAds[i]['type'] = 'txt';
ngaAds[i]['date'] = '7/26/2008-8/6/2008';
ngaAds[i]['rate'] = 10;
i++;


function bbs_ads15(l)
{
if (ngaAds['bbs_ads15'] && l)
	{
		document.write ("<div class='postfloattxtads'>");
		document.write (ngaAds.genAds(ngaAds['bbs_ads15']));
		document.write ('</div>')
	}
}

/*�����������A ��̳�����б�ҳ�棨���棩�ײ����ٷ����Ҳ� 190*400*/


ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads16';
ngaAds[i]['file'] = __IMG_BASE+'/misc/gt/lotr2.jpg';
ngaAds[i]['url'] = 'http://bbs.178.com/thread-18200-1-1.html';
ngaAds[i]['width'] = 190;
ngaAds[i]['height'] = 400;
ngaAds[i]['type'] = '';
ngaAds[i]['date'] = '2/3/2009 2/9/2009';
ngaAds[i]['rate'] = 12;
i++;

ngaAds[i] = new Array;
ngaAds[i]['id'] = 'bbs_ads16';
ngaAds[i]['file'] = 'http://www.dayofday.cn/google/190x400/Noname2.html';
ngaAds[i]['width'] = 190;
ngaAds[i]['height'] = 400;
ngaAds[i]['type'] = 'iframe';
ngaAds[i]['date'] = '';
ngaAds[i]['rate'] = 100;
i++;

function bbs_ads16()
{
if (ngaAds['bbs_ads16'] && checkurl('/thread.php'))
	{
		var ad = ngaAds.genAds(ngaAds['bbs_ads16']);
		var ad0 = ad.substr(0,3);
		var ad1 = ad.substr(ad.length-3,3);
		document.write ("<div class='adsc5'>");
		document.write (ad0+ad.substr(3,ad.length-6)+ad1);
		document.write ('</div>')
	}
}

/*��̳��ͨ���� 468��15			bbs_ads18*/


function bbs_ads18()
{
if (ngaAds['bbs_ads18'])
	{
		document.getElementById('menu').style.marginBottom = '-44px'
		document.write ("<div class='adsc_cate' id='bbs_ads18' style='display:block;height:15px'>");
		document.write ("<div>");
		document.write (ngaAds.genAds(ngaAds['bbs_ads18']));
		document.write ("</div><div class='clear'></div>");
		document.write ('</div>')
	}
}