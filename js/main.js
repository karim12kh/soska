var urls=[];


if(localStorage.getItem("myURLS")  !==null)
 {
  urls=JSON.parse(localStorage.getItem("myURLS"));
  dispaly();
 }
 

function add(){
    if(validateData('bookMarkNameId','nameAlert')&&validateData('bookMarkUrlId','urlAlert')){


 var bookMark ={
        nameMark: document.getElementById("bookMarkNameId").value,
        nameMarkUrl:document.getElementById("bookMarkUrlId").value,
    };
   urls.push(bookMark);
   localStorage.setItem("myURLS" ,JSON.stringify(urls))
   dispaly()
   clear()



    }
   else{
alert(`Site Name or Url is not valid, Please follow the rules below :

Site name must contain at least 3 characters
Site URL must be a valid one`)
   }
}
function dispaly(){
     var box ="";
for( var i =0 ; i < urls.length ; i++){
    box += `
      <tr>
            <td>${i+1}</td>
            <td>${urls[i].nameMark}</td>
            <td>  <a class="btn btn-success" href="${urls[i].nameMarkUrl}
" role="button"><i class="fa-solid fa-eye"></i>
Link</a>

</td>
 
            <td> <button onclick="Delete(${i})"  class="btn btn-danger"><i class="fa-solid fa-trash"></i>Delete</button></td>
        </tr>
    `;
}
document.getElementById("dataBody").innerHTML=box;

}
function clear(){
     nameMark: document.getElementById("bookMarkNameId").value=null;
        nameMarkUrl:document.getElementById("bookMarkUrlId").value=null;
}
 function Delete (pIndex){
 urls.splice(pIndex,1)
 dispaly();
   localStorage.setItem("myURLS" ,JSON.stringify(urls))


 }

 var allRegex={
    bookMarkNameId:/[A-Za-z0-9]{3,}$/,
    bookMarkUrlId:/\b((?:https?|ftp):\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)?/,
}
 function validateData(inputId,alertID){


 var  userValue=document.getElementById(inputId).value;

    
    if(allRegex[inputId].test(userValue)){
       document.getElementById(inputId).classList.add("is-valid")
       document.getElementById(inputId).classList.remove("is-invalid")
       document.getElementById(alertID).classList.add("d-none")
       return true
    }
    else{
        document.getElementById(inputId).classList.add("is-invalid")
       document.getElementById(inputId).classList.remove("is-valid")
       document.getElementById(alertID).classList.remove("d-none")
       return false
    }
 }
