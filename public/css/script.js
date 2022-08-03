
var ID =['0','1','2'];
var ID1 =['0e','1e','2e']
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