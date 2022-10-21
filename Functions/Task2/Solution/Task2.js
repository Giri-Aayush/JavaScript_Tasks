function minimum(a,b){
    
    let answer = a>=b ? b:a;
    return answer;
}

alert(minimum(2,5));
alert(minimum(3,-1));
alert(minimum(1,1));