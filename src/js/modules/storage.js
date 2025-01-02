import { updateItem } from "./item";

const setCookies =(item)=>{
    let cookies;

   if(localStorage.getItem('cookies')==null){
     cookies = []

     cookies.push(item)
     localStorage.setItem('cookies',JSON.stringify(cookies))
   }else{
    cookies = JSON.parse(localStorage.getItem('cookies'))

    cookies.push(item)
    localStorage.setItem('cookies',JSON.stringify(cookies))
   }
}
const getCookies =()=>{
    let cookies;

    if(localStorage.getItem('cookies')==null){
      cookies = []
 
      
    }else{
     cookies = JSON.parse(localStorage.getItem('cookies'))
 
     
    }
    return cookies
}
// update cookies
const updateCookies =(updateItem)=>{
    const cookies = JSON.parse(localStorage.getItem('cookies'))
    cookies.forEach((item,index) => {
        if(item.id === updateItem.id){
            console.log(updateItem.id);
            console.log(item.id);
            cookies.splice(index,1,updateItem)
        }
    });

    localStorage.setItem('cookies',JSON.stringify(cookies))
}
// delte cookies
const deleteCookies =(id)=>{
    const cookies = JSON.parse(localStorage.getItem('cookies'))
    cookies.forEach((item,index) => {
        if(item.id === id){
            
            cookies.splice(index,1)
        }
    });

    localStorage.setItem('cookies',JSON.stringify(cookies))
}
// delete all cookies from local storage
const removeLocalStorage = ()=>{
    localStorage.removeItem('cookies')
}
export {
    setCookies,
    getCookies,
    updateCookies,
    deleteCookies,
    removeLocalStorage,
}