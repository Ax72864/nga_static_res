if (!window.commonui)commonui = new Object

commonui._reputation_functions = new Object
commonui._r_f = commonui._reputation_functions
commonui._r_f.getTranslateTable = function(){
if (window.__CUSTOM_LEVEL)
	return __CUSTOM_LEVEL
else
	return [
{r:-21000,n:'���'},
{r:-3000,n:'�䵭'},
{r:0,n:'����'},
{r:3000,n:'����'},
{r:6000,n:'��'},
{r:12000,n:'�羴'},
{r:21000,n:'���'}
]
}//fe

commonui._r_f.translate = function(v)
{
var l=this.getTranslateTable()
v = parseFloat(v);
for (var i=0;i<l.length;i++){
	if (v>=l[i].r){
		return l[i].n
		}
	}
}

commonui._r_f.drawSelector=function(onchange)
{
var l=this.getTranslateTable()
var x="<option value=''>...</option>";
for (var i=0;i<l.length;i++){
	x+="<option value='"+l[i].r+"'>"+l[i].n+"</option>"
	}
if (typeof(onchange)=='function')
	{
	var s = document.createElement('select')
	s.onchange=onchange
	s.innerHTML=x
	return s
	}
else 
	{
	return "<select onchange='"+onchange+"'>"+x+"</select>"
	}
}