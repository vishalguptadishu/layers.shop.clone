let iphoneobj=[
    {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-avengers-monogram--back.jpg?v=1677081147&width=1080",
     name:"iPhone 14 Pro Max Avengers Monogram"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-dr-strange--back.jpg?v=1677081146&width=1080",
     name:"iPhone 14 Pro Max Dr Strange"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-wolverine-on-bike--back.jpg?v=1677081144&width=1080",
     name:"iPhone 14 Pro Max Wolverine On Bike"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-thor-monogram--back.jpg?v=1676970036&width=1080",
     name:"iPhone 14 Pro Max Thor Monogram"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-thor-silhouette--back.jpg?v=1676970035&width=1080",
     name:"iPhone 14 Pro Max Thor Silhouette"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-thor-attack--back.jpg?v=1676970034&width=1080",
     name:"iPhone 14 Pro Max Thor Attack"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-the-incredible-hulk--back.jpg?v=1676970033&width=1080",
     name:"iPhone 14 Pro Max The Incredible Hulk"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-marvel-fanfare--back.jpg?v=1676970032&width=1080",
     name:"iPhone 14 Pro Max Marvel Fanfare"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-ironman-kawai--back.jpg?v=1676970030&width=1080",
     name:"iPhone 14 Pro Max Iron Man Kawaii"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-ironman-silhouette--back.jpg?v=1676970030&width=1080",
     name:"iPhone 14 Pro Max Iron Man Silhouette"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-ironman-in-action--back.jpg?v=1676970028&width=1080",
     name:"iPhone 14 Pro Max Iron Man In Action"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-ironman-gaze--back.jpg?v=1676970024&width=1080",
     name:"iPhone 14 Pro Max Ironman Gaze"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-ironman-for-duty--back.jpg?v=1676970024&width=1080",
     name:"iPhone 14 Pro Max Iron Man For Duty"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-hulk-silhouette--back.jpg?v=1676970021&width=1080",
     name:"iPhone 14 Pro Max Hulk Silhouette"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-captain-america-silhouette--back.jpg?v=1676970021&width=1080",
     name:"iPhone 14 Pro Max Captain America"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-comic-style--back.jpg?v=1676970019&width=1080",
     name:"iPhone 14 Pro Max Comic Style"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-captain-america--back.jpg?v=1676970018&width=1080",
     name:"iPhone 14 Pro Max Captain America"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-ca-shield-monogram--back.jpg?v=1676970017&width=1080",
     name:"iPhone 14 Pro Max CA Shield Monogram"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-avengers-comic_style--back.jpg?v=1676970015&width=1080",
     name:"iPhone 14 Pro Max Avengers Comic Style"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-all-aboard--back.jpg?v=1676970013&width=1080",
     name:"iPhone 14 Pro Max All Aboard"},
     {src:"https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-widow_s-sting--back_ea0914b5-966d-4d14-9604-55d7251d8576.jpg?v=1676702800&width=1080",
     name:"iPhone 14 Pro Max Widow'S Sting"}
]

let product2=document.querySelector(".product2")
iphoneobj.map((elem)=>{
    let cart2=document.createElement("div")
    cart2.className="cart2"
    let img=document.createElement("img")
    img.src=elem.src
    let p=document.createElement("p")
    p.innerText=elem.name
    let div=document.createElement("div")
    div.className="price"
    let p1=document.createElement("p")
    p1.innerText="₹ 599.00"
    let s=document.createElement("s")
    
    let p2=document.createElement("p2")
    p2.innerText="₹ 699.00"
    let div2=document.createElement("div")
    div2.className="btn"
    let btn1=document.createElement("button")
    btn1.className="btn1"
    btn1.innerText="ADD TO CART"
    let btn2=document.createElement("button")
    btn2.innerText="BUY NOW"
    
    img.addEventListener("click", () => {
        localStorage.setItem("productDetails", JSON.stringify(elem));
        
        window.location.href ="about.html";
    });

    btn1.addEventListener("click", () => {
        localStorage.setItem("productDetails", JSON.stringify(elem));
        let img1= JSON.parse(localStorage.getItem("productDetails")) || null;

        let buy_img =document.querySelector(".buy_img")
        buy_img.src=img1.src
        let p1=document.querySelector(".p1").innerText=img1.name
        // window.location.href ="";
    });

    btn2.addEventListener("click", () => {
        localStorage.setItem("productDetails", JSON.stringify(elem));
        window.location.href ="Buy_now.html";
    });
    s.append(p2)
    div.append(p1,s)
    div2.append(btn1,btn2)
    cart2.append(img,div,div2)
    product2.append(cart2)

})

let btn1=document.querySelectorAll(".btn1")
let Add_To_Cart=document.querySelector(".Add_To_Cart")
let first_p=document.querySelector(".first_p")

for (let i = 0; i < btn1.length; i++) {
    btn1[i].addEventListener("click", function() {
        Add_To_Cart.classList.toggle("Add_To_Cart_2");
    });
}

first_p.addEventListener("click",function(){
    location.reload()
})

 function check_out(){
    window.location.href ="Buy_now.html";
 }


// add_to_cart





  
