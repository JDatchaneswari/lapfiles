let person={
    name:"elonMusk",
    age:35,
    address:{
        street:"weew",
        city:"chennai",
        zipcode:72728,
        state:"Texass",
        country:"US"
    }

}
console.log(person);
for(let prop in person){
    //console.log(prop);
  console.log(person[prop]);
}

//let div = document.createElement("div");
//div.innerHTML="<h2>Welcome Buddy</h2><p>Hello !";
//document.body.appendChild(div);
//div.id="title";
//console.log(div);

let menu=document.getElementById("menu");
//menu.insertAdjacentHTML("afterbegin","hello");


const newNode = document.createTextNode("Water");
//let menu = document.getElementById("menu").children[0];
//menu.replaceChild(newNode, menu.childNodes[0]);


//menu.after("bingo");
//menu.after("lays","chips");

menu.insertBefore(newNode,menu.firstElementChild);


let box=document.getElementById("user");
console.log(box.attributes);

