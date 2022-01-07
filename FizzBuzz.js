const result= function(num){

    if(typeof num !=='number'){
        return ("Please enter a number")
    }

    if(num%3===0 && num%5===0){
        return "FIZZBUZZZ"
    }else if(num%3===0){
        return "FIZZZ"
    }else if(num%5==0){
        return "BUZZZ"
    }else{
        return "Its an odd number" + num
    }

}

console.log(result(88))