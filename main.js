var menuArray = ["Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Tikka Pizza", "Deluxe Veggie Pizza"]

function getmenu(){
    var htmldata="<ol class='menulist'>"
    menuArray.sort();
    for(var i = 0; i<menuArray.length;i++){
        htmldata=htmldata+'<li>' + menuArray[i]+'</li>'
    }
    htmldata=htmldata+'</ol>';
    document.getElementById("displaymenu").innerHTML = htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menuArray.push(item);
    menuArray.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menuArray.length;i++){
        htmldata=htmldata+'<div class="card">'+' <img class="img-responsive"  src="images/pizzaImg.png"/>'+menuArray[i]+'</div>';
    }
    htmldata=htmldata+"</section>";
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}