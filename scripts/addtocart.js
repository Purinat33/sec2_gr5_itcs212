const product = [
    {
        id: 0,
        image: 'image/Ark.jpg',
        title: 'ARKL Survival Evolved',
        price: 289.00,
        stock: 0
    },
    {
        id: 1,
        image: 'image/Candy.jpg',
        title: 'Candy Crush Saga',
        price: 0.00,
        stock: 0
    },
    {
        id: 2,
        image: 'image/Dbd.jpg',
        title: 'Dead By Daylight',
        price: 369.00,
        stock: 0
    },
    {
        id: 3,
        image: 'image/God.webp',
        title: 'God Of War Ragnarok',
        price: 2290.00,
        stock: 0
    },
    {
        id: 4,
        image: 'image/Ow2.webp',
        title: 'Overwatch 2',
        price: 0.00,
        stock: 0
    },
    {
        id: 5,
        image: 'image/R6.jpg',
        title: 'Rainbow Six® Siege',
        price: 540.00,
        stock: 0
    },
    {
        id: 6,
        image: 'image/Raft.jpg',
        title: 'Raft',
        price: 369.00,
        stock: 0
    },
    {
        id: 7,
        image: 'image/Devil.jpg',
        title: 'The Devil in me',
        price: 1190.00,
        stock: 0
    },
    {
        id: 8,
        image: 'image/sim.png',
        title: 'The Sim 4',
        price: 0.00,
        stock: 0
    },
    {
        id: 9,
        image: 'image/Elden.webp',
        title: 'Elden Ring',
        price: 1490.00,
        stock: 0
    },
    {
        id: 10,
        image: 'image/call.webp',
        title: 'Call of Duty:Modern Walfare',
        price: 2322.00,
        stock: 0
    },
    {
        id: 11,
        image: 'image/cyber.webp',
        title: 'Cypherpunk 2077',
        price: 1799.00,
        stock: 0
    },
    {
        id: 12,
        image: 'image/GTA.png',
        title: 'Grand Theft Auto V',
        price: 939.00,
        stock: 0
    },
    {
        id: 13,
        image: 'image/Rust.jpg',
        title: 'Rust',
        price: 699.00,
        stock: 0
    },
    {
        id: 14,
        image: 'image/Star.jpg',
        title: 'Stardew Valley',
        price: 315.00,
        stock: 0
    },
    {
        id: 15,
        image: 'image/phas.jpg',
        title: 'Phasmophobia',
        price: 229.00,
        stock: 0
    },
    {
        id: 16,
        image: 'image/tf2.webp',
        title: 'Team Fortress 2',
        price: 0.00,
        stock: 0
    },
    {
        id: 17,
        image: 'image/l4d2.jpg',
        title: 'Left 4 Dead 2',
        price: 220.00,
        stock: 0
    },
    {
        id: 18,
        image: 'image/tof.jpg',
        title: 'Tower of Fantasy',
        price: 0.00,
        stock: 0
    },
    {
        id: 19,
        image: 'image/re4.jpg',
        title: 'Resident Evil 4',
        price: 647.00,
        stock: 0
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>${price}.00THB</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = 0+".00" + "THB";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = total+".00" + "THB";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image} width="300" height=200>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>${price}.00THB</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
