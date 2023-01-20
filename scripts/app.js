// let genre;
// let pprice;
// let nname = true; //Default 

// function searchBy(a){
//     if(a == 'genre'){
//         nname = false;
//         genre = true;
//         pprice = false;
//         console.log("Genere Click");
//     }
//     else if(a == 'price'){
//         pprice = true;
//         nname = false;
//         genre = false;
//         console.log("Price");
//     }
//     else{
//         nname = true;
//         pprice = false;
//         genre = false;
//     }
    
// }

// var btnContainer = document.getElementById("filter");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

//h2 = name
//h3 = genre
//h4 = price

const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product"); 
    const pname = storeitems.getElementsByTagName("h2");
      
        for(var i = 0 ; i < pname.length; i++){
            let match = product[i].getElementsByClassName('p-name')[0];
            
            if(match){
                let textValue =  match.textContent || match.innerHTML;
                if(textValue.toUpperCase().indexOf(searchbox) > -1){
                    product[i].style.display = "";
                }else{
                    product[i].style.display = "none";
                }
            }
        }
}