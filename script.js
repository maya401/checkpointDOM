var box= document.getElementsByClassName("box")
for(let i=0; i<box.length; i++){
    let btnPlus=box[i].children[4].children[2]
    let btnMoins=box[i].children[4].children[0]
    let nombre=box[i].children[4].children[1]
    let total=box[i].children[3].children[1]
    let prixU=box[i].children[2].children[1]
    let del=box[i].children[5].children[1].children[0].children[0]
    let like=box[i].children[5].children[0].children[0]

    console.log(like);
    
    let number=parseInt(nombre.innerText)
    let prixunit=parseInt(prixU.innerText)
    
    btnPlus.addEventListener('click', function(){
        number++;
        nombre.innerText=number;
        total.innerText=prixunit*number;
        somme()
        
    })
    btnMoins.addEventListener('click', function(){
        if(number>0)
            number--;
        nombre.innerText=number;
        total.innerText=prixunit*number;
        somme()
    })
    
    let produit=box[i]
    console.log(produit);
    if(produit){
        del.addEventListener("click",function(){
            produit.remove()
        })
    }
    like.addEventListener("click",function(){
        if(like.style.color=="red"){
            like.style.color="black"
        }
        else{
            like.style.color="red"
        }
    })
   

  
    }
    var btn=document.getElementsByClassName("sammba");
    
    function somme() {
        let totalcommande=0;
        for(let i=0; i<box.length;i++) {
            let commande= box[i].children[3].children[1];
            totalcommande += parseInt(commande.innerText);
        
        }
            document.getElementById("tyu").innerHTML=totalcommande;
        
    }
     
    

