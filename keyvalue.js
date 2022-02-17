let colours={
    red: "#FF0000",
     green: "#00FF00",
      white: "#FFFFFF"
}

let result= (Object.entries(colours))
for(let i=0;i < result.length;i++){
    for(let j= 0; j< result[i].length;j++)
    console.log(result[i][j] + " ")
}


// another method

let ss=Object.keys(colours).map(function(item){
    return `${item} : ${colours[item]}`
})

console.log(ss)



