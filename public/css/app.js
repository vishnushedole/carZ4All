document.querySelector('#signin').addEventListener("click",function()
{
    document.querySelector(".loginDiv").style.visibility="visible";
});
document.querySelector(".loginDiv .close-btn").addEventListener("click", function()
    {
        document.querySelector(".loginDiv").style.visibility="hidden"
    });


function next()
{
    /* let currentPath = window.location.pathname; */
    const cars = ["images/slavia.jpg", "images/virtus.jpg", "images/venue.jpg", "images/tigor.jpg", "images/scorpio.jpg"];
    let curr = document.getElementById("image").src;
   
    let modified = curr.replace(`http://localhost:3000/`, "");
    let index = cars.indexOf(modified);
    let nextIndex  = (index+1)%5;
    
    let path = "http://localhost:3000/"+cars[nextIndex];
    
    document.getElementById("image").setAttribute("src",path);
  setCaption(nextIndex);
}

function prev()
{
    const cars = ["images/slavia.jpg", "images/virtus.jpg", "images/venue.jpg", "images/tigor.jpg", "images/scorpio.jpg"];
    let curr = document.getElementById("image").src;
    let modified = curr.replace("http://localhost:3000/", "");
    let index = cars.indexOf(modified);
    let nextIndex;
    if(index==0)
    {
        nextIndex = 0;
    }
    else{
        nextIndex = index-1;
    }
    
    let path = "http://localhost:3000/"+cars[nextIndex];
    document.getElementById("image").setAttribute("src",path);
    setCaption(nextIndex);
} 
function setCaption(nextIndex)
{
    switch(nextIndex)
    {
        case 0:
            document.querySelector(".imgcaption").innerHTML = "Skoda Slavia";
            break;
        case 1:
            document.querySelector(".imgcaption").innerHTML = "Volkswagen Virtus";
            break;
        case 2:
            document.querySelector(".imgcaption").innerHTML = "Hyundai Venue";
            break;
        case 3:
            document.querySelector(".imgcaption").innerHTML = "Tata Tigor";
            break;
        case 4:
            document.querySelector(".imgcaption").innerHTML = "Mahindra Scorpio-n";
            break;
    }
};
 function check_profile()
 {
    let ele=document.getElementById('uprofile').style.visibility;
    if(ele=="hidden")
    document.getElementById('uprofile').style.visibility="visible";
    else
    document.getElementById('uprofile').style.visibility="hidden";
 }
 