

let arr=()=>{

   let Fruits=[1,2,3,4,5,6]
   let Fruits2=["Grapes",363,74]

 let newarr=Fruits.map(e=>{
    
      return e*2;
})

console.log(newarr)

    // Fruits.pop();
    // Fruits.push("Grapes")
    // Fruits.shift();
    // Fruits.unshift("Grapes","Pineapple")
    // console.log(Fruits.slice(0,1)) 
     //(starting index, end index-1)
//   Fruits.splice(2,0,"Grapes")
     //(index where to add , items to delete, what to add )
    // console.log(Fruits.concat(Fruits2))
   
}

arr();