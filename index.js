var bjp=0;
    function Bjpfun(){
     bjp++
     var divData=document.getElementById("bjp count");
     divData.innerHTML= +bjp ;
}
var congress =0;
function Congfun(){
    congress++
    var divData=document.getElementById("congress count");
    divData.innerHTML= +congress ;
}
var mns=0;
function Mnsfun(){
    mns++
    var divData=document.getElementById("mns count");
    divData.innerHTML= +mns ;
}
function Subfun(){
    divData=document.getElementById("Total count");
    divData.innerHTML= bjp+congress+mns;
}

