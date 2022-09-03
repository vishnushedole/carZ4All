
var ID =['0','1','2'];
var ID1 =['0e','1e','2e']
var dele=0;

document.querySelector('#signin').addEventListener("click",function()
{
    document.querySelector(".loginDiv").style.visibility="visible";
});
document.querySelector(".loginDiv .close-btn").addEventListener("click", function()
    {
        document.querySelector(".loginDiv").style.visibility="hidden"
    });
    
function leftrotate(s){
    var i,index,id;
    
    for(i=0;i<3;i++)
    {
        id=(s==0)?ID[i]:ID1[i];
        var z=document.getElementById(id).style.visibility;
        
       if(z=="visible")
       {
        document.getElementById(id).style.visibility="hidden";
        index=i;
        break;
       }
       
    }
    index=(index+1)%3;
    id=(s==0)?ID[index]:ID1[index];
    document.getElementById(id).style.visibility="visible";
    
}
function rightrotate(s){
    var i,index,id;
    
    for(i=0;i<3;i++)
    {
        id=(s==0)?ID[i]:ID1[i];
        var z=document.getElementById(id).style.visibility;
        
       if(z=="visible")
       {
        document.getElementById(id).style.visibility="hidden";
        index=i;
        break;
       }
       
    }
    if(index)
    index=(index-1)%3;
    else
    index=2;

    id=(s==0)?ID[index]:ID1[index];
    document.getElementById(id).style.visibility="visible";
    
}
function confirmdelete(){
    
   
    document.getElementById("conf").style.visibility="visible";

//     while(dele==0)
//     {

//    // wait for the user resopnse;
//     }
   
//     if(dele==1) return true;
//     else if(dele==2) return false;
//     else  return false;
return false;
    
}
function Delete(d)
{
    console.log(d);
   dele=d;
}

function hide1()
{
    const elem = document.getElementById('box1');
    elem.style.visibility = "hidden";

    document.getElementById('caricon1').style.visibility = "visible";
}

function hide2()
{
    const elem = document.getElementById('box2');
    elem.style.visibility = "hidden";

    document.getElementById('caricon2').style.visibility = "visible";
}

function dis1()
{
    const elem = document.getElementById('box1');
    elem.style.visibility = "visible";

    document.getElementById('caricon1').style.visibility = "hidden";
}

function dis2()
{
    const elem = document.getElementById('box2');
    elem.style.visibility = "visible";

    document.getElementById('caricon2').style.visibility = "hidden";
}
function readm1(){
    let model1=document.getElementById('mm1').value; 
    document.getElementById('m1').value=model1;
}
function readc1()
{
    let car1=document.getElementById('cc1').value;
    document.getElementById('c1').value=car1;
   
}
function readm2()
{
    let model2=document.getElementById('mm2').value;
    document.getElementById('m2').value=model2;

}
function readc2()
{
    let car2=document.getElementById('cc2').value;
    document.getElementById('c2').value=car2;
   
}
function chk()
{
   
    let c1=document.getElementById('c1').value;
    let c2=document.getElementById('c2').value;
    let m1=document.getElementById('m1').value;
    let m2=document.getElementById('m2').value;
    
    if(c1.length==0 || c2.length==0 || m1.length==0 || m2.length==0)
    {
        return false;
    }
    else if(c1==c2)
    return false;
    
    
    return true;
}
function srtsid()
{
    let v=document.getElementById('sortcars').style.visibility;
    if(v=="visible")
    document.getElementById('sortcars').style.visibility="hidden";
    else
    document.getElementById('sortcars').style.visibility="visible";
}
function mov()
{
    
    document.getElementById('cbox').style.top="1200px";
    document.getElementById('cmp').style.top="1280px";
    document.getElementById('R').style.top="1320px";
    document.getElementById('RH').style.top="1290px";
    document.getElementById('f').style.top="1250px";
    document.getElementById('c').style.top="1220px";
}
function check_profile()
 {
    console.log("hi");
    let ele=document.getElementById('uprofile').style.visibility;
    console.log(ele);
    if(ele=="hidden")
    {
        document.getElementById('uprofile').style.visibility="visible";
        
    }
    else
    document.getElementById('uprofile').style.visibility="hidden";
 }



