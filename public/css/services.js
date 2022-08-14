let mywindow;
const cartypes =['hatchback','sedan','suv','luxury sedan','luxury suv'];
const cost =['3000','6000','10000','20000','30000'];
function cost1(){
    var val = document.getElementById('cars1');
    var selectedText = val.options[val.selectedIndex].innerHTML;
    var estimatedcost;

    for(let i=0;i<5;i++)
    {
        if(selectedText==cartypes[i])
        {
            estimatedcost=cost[i];
            break;
        }
    }
document.getElementById('estcost').innerHTML=`The estimated cost is ${estimatedcost}`;
document.getElementById('conf').style.visibility="visible";

    // if(selectedText == 'hatchback')
    //     alert("The estimated service cost is 3000");
    // else if(selectedText == 'sedan')
    //     alert("The estimated service cost is 6000");
    // else if(selectedText == 'suv')
    //     alert("The estimated service cost is 10000");
    // else if(selectedText == 'luxury sedan')
    //     alert("The estimated service cost is 20000");
    // else if(selectedText == 'luxury suv')
    //     alert("The estimated service cost is 30000");
}

function cost2(){
    var val = document.getElementById('cars1');
    var selectedText = val.options[val.selectedIndex].innerHTML;
    var estimatedcost;

    for(let i=0;i<5;i++)
    {
        if(selectedText==cartypes[i])
        {
            estimatedcost=cost[i];
            break;
        }
    }
document.getElementById('estcost').innerHTML=`The estimated cost is ${estimatedcost}`;
document.getElementById('conf').style.visibility="visible";
    // if(selectedText == 'hatchback')
    //     alert("The estimated service cost is 1000");
    // else if(selectedText == 'sedan')
    //     alert("The estimated service cost is 2000");
    // else if(selectedText == 'suv')
    //     alert("The estimated service cost is 5000");
    // else if(selectedText == 'luxury sedan')
    //     alert("The estimated service cost is 7000");
    // else if(selectedText == 'luxury suv')
    //     alert("The estimated service cost is 10000");
}

function cost3(){
    var val = document.getElementById('cars1');
    var selectedText = val.options[val.selectedIndex].innerHTML;
    var estimatedcost;

    for(let i=0;i<5;i++)
    {
        if(selectedText==cartypes[i])
        {
            estimatedcost=cost[i];
            break;
        }
    }
document.getElementById('estcost').innerHTML=`The estimated cost is ${estimatedcost}`;
document.getElementById('conf').style.visibility="visible";
    // if(selectedText == 'hatchback')
    //     alert("The estimated service cost is 300");
    // else if(selectedText == 'sedan')
    //     alert("The estimated service cost is 600");
    // else if(selectedText == 'suv')
    //     alert("The estimated service cost is 1000");
    // else if(selectedText == 'luxury sedan')
    //     alert("The estimated service cost is 2000");
    // else if(selectedText == 'luxury suv')
    //     alert("The estimated service cost is 3000");
}
function closediv()
{
    console.log('hi');
    document.getElementById('conf').style.visibility="hidden";
}