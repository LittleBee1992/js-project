import * as storage from './storage'
// constructor
class Item {
    constructor(id,name,money,category){
        this.id = id
        this.name=name
        this.money = money
        this.category = category
    }
}
// data objects
const data ={
    // items:[
    //     {id:0,name:"zakupy",money:1000,category:'fas fa-money-bill-wave'},
    //     {id:1,name:"wycieczka",money:1600,category:'fas fa-money-bill-wave'},
    //     {id:2,name:"rower",money:1400,category:'fas fa-money-bill-wave'}
    // ],
    items: storage.getCookies(),
    currentItem:null,
    totalMoney:0
}
// get items from data items
const getItems =()=>{
    return data.items
}
// add item to data items
const addItem=(name,money,category,categoryIncludes)=>{
    // money to number
    money = parseInt(money)
    
    if(categoryIncludes.includes('-')){
        money =-money
    }else{
        money = money
    }

   
    let ID;
    // create item id
    if(data.items.length >0){
        ID = data.items[data.items.length -1].id +1
    }else{
        ID = 0
    }

    // create new item
    const newItem = new Item(ID,name,money,category)
    // push new item to data structure
    data.items.push(newItem)

    return newItem
}

// get item by id
const getElementByID=(id)=>{
    let found

    data.items.forEach(item=>{
        if(item.id === id){
            found = item
        }
    })
    return found
}
// update item
const updateItem = (name,money,category,categoryIncludes)=>{
    // money to number
    money = parseInt(money)
    if(categoryIncludes.includes('-')){
        money = -money
    }else{
        money = money * -1
       
    }

    let found

    data.items.forEach(item=>{
        if(item.id === data.currentItem.id){
            item.name = name,
            item.money = money,
            item.category = category,
            found = item
        }
    })
    return found

}
// delete item
const deleteItem =(id)=>{
    // get items id
    // const ids = data.items.map(item=>{
    //     return item.id
    // })
    // // get index of item
    // const index = ids.indexOf(id)
    // // delete item
    // data.items.splice(index,1)

    data.items.forEach((item,index)=>{
        if(item.id === id){
            data.items.splice(index,1)
        }
    })


}
// remove all data items
const removeItems =()=>{
    data.items =[]
}
// set current item
const setCurrentItem =(item)=>{
    data.currentItem = item
}
// get current item
const currentItem =()=>{
    return data.currentItem
}

// sum total money
const getTotalMoney =()=>{
    // creat arr of money
    let arr = [0]
    // push item money to arr
    data.items.forEach(item=>{
        arr.push(item.money)
    })
    // sum total money
    data.totalMoney = arr.reduce((a,b)=>a+b)

    return data.totalMoney
}


const logData = ()=>{
    return data
}


export {
    logData,
    getItems,
    addItem,
    getTotalMoney,
    getElementByID,
    setCurrentItem,
    currentItem,
    updateItem,
    deleteItem,
    removeItems
   
}