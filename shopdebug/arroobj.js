var man = [

{
id:1,
name:"The Cosmo (Đen) Quần short khaki",
code:"TC1025011BA",
price:"250.000",
image:"https://product.hstatic.net/1000253775/product/qu_n_short_nam_khakis_icondenim_cargo_garment_dye_7e47e8de73bd45ebb49976c7cce62a20.jpg"
},

{
id:2,
name:"Quần baggy đen sang trọng QQ",
code:"TC1025011BA",
price:"398.000",
image:"https://cf.shopee.vn/file/sg-11134201-22100-0yuz4vojyxive5"
},

{
id:3,
name:"The Cosmo (Đen) Quần short khaki",
code:"TC1025011BA",
price:"300.000",
image:"https://dz3aw12iizk17.cloudfront.net/cache/catalog/Weekend_Offender/weekend_offender_fun_factory_leaf_fucia_4-1-870x1110.jpg"
},

{
id:4,
name:"The Cosmo (Đen) Quần short khaki",
code:"TC1025011BA",
price:"300.000",
image:"https://dz3aw12iizk17.cloudfront.net/cache/catalog/Weekend_Offender/weekend_offender_high_desert_leaf_2-870x1110.jpg"
}

];



var woment = [

{
id:1,
name:"Váy Fashion",
code:"TC1025011BA",
price:"250.000",
image:"https://lamia.com.vn/storage/anh-seo/dam-cup-nguc-2-day-dang-xoe-3.jpg"
},

{
id:2,
name:"Áo thun phối váy ngắn",
code:"TC1025011BA",
price:"398.000",
image:"https://dongphuchaianh.vn/wp-content/uploads/2022/09/mix-chan-vay-tennis-phoi-ao-voan.jpg"
},

{
id:3,
name:"Áo khoác",
code:"TC1025011BA",
price:"300.000",
image:"https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpv0j4fn1az6a8"
},

{
id:4,
name:"Áo thun",
code:"TC1025011BA",
price:"300.000",
image:"http://bizweb.dktcdn.net/thumb/grande/100/315/239/products/z3294366461506-48426ab4bc5f92960f47cfd93825ef3a.jpg?v=1674740637683"
}

];



function listProducts(){

for(let i=0;i<=man.length-1;i++){

var demo = '<div class="col-3">';

demo += '<div class="card" style="width:18rem;">';

demo += '<img src="'+man[i].image+'" class="card-img-top" style="height:350px;object-fit:cover";">';

demo += '<div class="card-body">';

demo += '<h5>'+man[i].name+'</h5>';

demo += '<p>'+man[i].price+'</p>';

demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';

demo += '</div>';

demo += '</div>';

demo += '</div>';

document.getElementById("men").innerHTML += demo;

}



for(let i=0;i<=woment.length-1;i++){

var demo = '<div class="col-3">';

demo += '<div class="card" style="width:18rem;">';

demo += '<img src="'+woment[i].image+'" class="card-img-top" style="height:400px;">';

demo += '<div class="card-body">';

demo += '<h5>'+woment[i].name+'</h5>';

demo += '<p>'+woment[i].price+'</p>';

demo += '<a href="#" class="btn" style="background:pink;color:white" onclick="oder()">Đặt mua</a>';

demo += '</div>';

demo += '</div>';

demo += '</div>';

document.getElementById("woment").innerHTML += demo;

}

}



function oder(){

alert("Thank you your order");

}