let buttoms =  document.querySelectorAll(".buttoms span");
let input = document.getElementById("inp");
let resulets = document.querySelector(".resulets > span");

let inputLength = input.value;

buttoms.forEach(span=>{
    span.addEventListener("click",e=>{
        
        if(e.target.classList.contains("Add")){
            AddItem();
        }

        if(e.target.classList.contains("chek")){
            chekItem();
        }

        if(e.target.classList.contains("reomve")){
            reomveItem();
        }

        if(e.target.classList.contains("clear")){
            clearItem();
        }

        if(e.target.classList.contains("show")){
            showItem();
        }
    })
});


function AddItem(){
    if(input.value !==""){
           localStorage.setItem(`${input.value}`,`${input.value}`)
           resulets.innerHTML = `تم اضافه القيمه <span class = "del">${input.value}</span> بنجاح`
           input.value = "";
    }else{
            resulets.innerHTML = `قيمه الحقل فارغه`
    }
}

function reomveItem(){
    if(input.value !==""){
                if(localStorage.getItem(`${input.value}`)){
                         localStorage.removeItem(`${input.value}`);
            resulets.innerHTML = "النتائج هنا"
            resulets.innerHTML = `تم حذف القيمه <span class = "del">${input.value}</span> بنجاح`
                       input.value = "";

                }else{
                    resulets.innerHTML = `هذه القيمه <span class = "del"> ${input.value}</span> غير موجوده`
                }

            }else{
                resulets.innerHTML = `قيمه الحقل فارغه`
             }
}

function clearItem(){
    if(localStorage.length){
       localStorage.clear();
         resulets.innerHTML = ` تم حذف كل القيم <span class = "del"> بنجاح </span>` 

    }else{
         resulets.innerHTML = `لا  يوجد  قيم  يتم  حذفها`
    }
}


           function  showItem(){
               if(localStorage.length){
                resulets.innerHTML = ""
                for(let[key,value] of Object.entries(localStorage)){
                    resulets.innerHTML += `<div class = "showele">${value}</div>`
                }
            }else{
                resulets.innerHTML = `لا يوجد قيم لعرضها`
            }
           }




function chekItem(){
if(input.value !==""){
    if(localStorage.getItem(`${input.value}`)){
        resulets.innerHTML = `   هذه القيمه  <span class = "del">${input.value}</span>    موجوده بالفعل `
                   input.value = "";


        }else{
        resulets.innerHTML = `هذه القيمه  <span class = "del">${input.value}</span>  غير موجوده  `
                   input.value = "";


        }
    }else{
        resulets.innerHTML = `لا يوجد قيم لعرضها`
        

    }
}

window.onload = input.focus()