
var ID =['0','1','2'];
var Z =[];
function leftrotate(){
    var i;
    for(i=0;i<3;i++)
    {
        var z=document.getElementById(ID[i]).style.visibility;
       if(z=="hidden")
       document.getElementById(ID[i]).style.visibility="visible"
       
    }
    var firstvalue=Z[0];
    for(i=0;i<2;i++)
    {
        Z[i]=Z[i+1];
    }
    Z[2]=firstvalue;
    for(i=0;i<3;i++)
    {
        var ele=document.getElementById(ID[i]).style; 
        ele.zIndex=Z[i];
        // console.log(Z[i]);
    }
}