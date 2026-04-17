function hey ( name,callback){
    console.log("hey" +" "+ name);
    callback();
}

function saybye(){
    console.log("goodbye");
}
hey("yuvraj",saybye);