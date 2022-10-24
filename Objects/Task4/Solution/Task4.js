function multiplyBy2(obj){
    for(let key in obj){
        if(!isNaN(obj[key])){
            obj[key] = obj[key] *2;
        }
    }
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };

let message = JSON.stringify(menu);
alert(message);
multiplyBy2(menu);
message = JSON.stringify(menu);
alert(message);

/*
The Window.alert() method displays a dialog with the specified content.

Printing an object using the Window.alert() method will display [object Object] as the output. 
To get the proper string representation of the object, the idea is to convert the object into a string 
first using the JSON.stringify() method.
*/