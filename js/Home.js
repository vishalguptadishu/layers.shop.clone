 function slid1(){

 
 let ArrOfImg=[
        "https://www.layers.shop/cdn/shop/files/desktop_v2.png?v=1682513351&width=1540",
        "https://www.layers.shop/cdn/shop/files/8_eff7d432-be32-4b96-aa9e-95e881cb6cb4.png?v=1681994691&width=1540",
        "https://www.layers.shop/cdn/shop/files/7_6b760627-1b8c-470b-b0d9-6b9cc06cc36d.png?v=1681995347&width=1540",
        "https://www.layers.shop/cdn/shop/files/1_c24ff4e9-0173-4669-b666-e0beb6305ab6.png?v=1681977210&width=1540",
        "https://www.layers.shop/cdn/shop/files/4_cdfff5e4-b11c-4e9f-ab29-5bb57050556b.png?v=1681884253&width=1540",
    ]

    let img=document.querySelector("#img")
    let index=1;

  function slider(){
    console.log(index)
    if(index==5){
        index=0
        img.src=ArrOfImg[index++]
    }else {
        img.src=ArrOfImg[index++]
        console.log(index) 
    }  
  }
setInterval(slider,3000);
 }
 slid1()
function slid2(){


let ArrOfImg2=[
    "https://www.layers.shop/cdn/shop/files/3_ef3305d8-72a0-4681-b047-daaf6ee78e2a.png?v=1682064150&width=1540",
    "https://www.layers.shop/cdn/shop/files/5_1a8c7b4b-6689-482e-bfa7-ecfeb9c31549.png?v=1681884340&width=1540",
]

let img2=document.querySelector("#img2")
let index2=1;

function slider2(){

if(index2==2){
    index2=0
    img2.src=ArrOfImg2[index2++]
}else {
    img2.src=ArrOfImg2[index2++]
   
}  
}
setInterval(slider2,2000);
}

slid2()
