function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

let sampleObject = {};
alert(isEmpty(sampleObject)); // should get true
sampleObject["name"] = "Aayush";
alert(isEmpty(sampleObject)); // should get false