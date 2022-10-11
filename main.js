menu = ["Pizza Vegetariana", "Pizza Portuguesa", "Banana com Bacon", "Pizza Calabresa", "Pizza de Queijo"
                    ];

function getMenu(){
    var htmldata = "";
    menu.sort();
    for(var i = 0; i < menu.length; i++){
        htmldata = htmldata + menu[i] + "<br>"
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menu.sort();
htmldata = "";
for(var i=0;i<menu.length;i++){
    htmldata = htmldata + imgtags + menu[i] + "<br>";
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
var item = document.getElementById("addItem").value;
menu.push(item);
addItem();
}