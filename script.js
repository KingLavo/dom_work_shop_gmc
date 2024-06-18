 let products_list = document.getElementById("products-list")
 let totalOutPut = document.getElementById("total")



 let products = [
    {
        id: 1,
        productTitle: "Baskets",
        productText: "This is a basket",
        productImg: "/assets/baskets.png",
        unitPrice: 100,
        productQuantity: 0
    },
    {
        id: 2,
        productTitle: "socks",
        productText: "This is a socks",
        productImg: "/assets/socks.png",
        unitPrice: 20,
        productQuantity: 0
    },
    {
        id: 3,
        productTitle: "Bag",
        productText: "This is a Bag",
        productImg: " /assets/bag.png ",
        unitPrice: 50,
        productQuantity: 0
    }
 ]

 let basket = [];

 let genShop = ()=>{

    return ( products_list.innerHTML = products.map( item =>{
        return `
            <div class="card-body" id=item-${ item.id}>
            <div class="card" style="width: 18rem">
              <img src=${item.productImg} class="card-img-top" alt="socks" />
              <div class="card-body">
                <h5 class="card-title">${ item.productTitle}</h5>
                <p class="card-text">${ item.productText}</p>
                <h4 class="unit-price">${ item.unitPrice}</h4>
                <div>
                  <i  class="fas fa-plus-circle" onclick="increment(${item.id}, ${item.unitPrice})"></i>
                  <span class="quantity" id=${item.id}>0</span>
                  <i  class="fas fa-minus-circle" onclick="decrement(${item.id})"></i>
                </div>
                <div>
                  <i onclick="removeItem(${item.id})"  class="fas fa-trash-alt"></i>
                  <i class="fas fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        `
    }).join("")

    );
 }
genShop()

//Increment function
let increment = (id, unitPrice)=>{
    let selectedItem = id  
    let search = basket.find((x)=> x.id === selectedItem);
    if(search === undefined){
        basket.push({ id: selectedItem, item: 1, unitPrice: unitPrice})
    }else{
        search.item +=1;
    } 
    upDate(selectedItem)    
}

//decrement function 
let decrement = (id)=>{
    let selectedItem = id
    let search = basket.find((x)=> x.id === selectedItem)
    if(search === undefined)return
    else if(search.item === 0)return
    else{
        search.item -=1
    }   
    upDate(selectedItem)
}

//update function 
let upDate = (id)=>{
    let search = basket.find((x)=> x.id === id)
    document.getElementById(id).innerHTML = search.item
    calculate()
    totalAmount()
}

//sum/Add up quantity
let calculate = ()=>{
     basket.map( item => item.item).reduce((x, y)=> x +y)
}

let removeItem = (id)=>{ 
    basket = basket.filter((x)=> x.id !== id)
    document.getElementById(id).innerHTML = 0
    totalAmount()
} 

let totalAmount = ()=>{   
    if(basket.length !== 0){
        let amount = basket.map(x =>{
            return x.item * x.unitPrice
        })
         let total = amount.reduce((x, y)=> x + y)
          totalOutPut.innerHTML = `${ total} $`
            }  
}

 
 

var colors = ["red", "teal", "blue", "purple", "brown" ]

var likeBtn = document.querySelectorAll(".fa-heart")

    likeBtn.forEach( item =>{
        item.addEventListener("click", ()=>{
            let colorIndex = parseInt(Math.random() * colors.length)
            item.style.color = colors[colorIndex]
        })
    })
    likeBtn.setAttribute("id", "oga")
    console.log(likeBtn)
        console.log("\t just queryselector")
    var Btn = document.querySelector(".fa-heart")
    Btn.setAttribute("class", "glory")
    Btn.setAttribute("id", "oga")

    console.log(Btn)

 