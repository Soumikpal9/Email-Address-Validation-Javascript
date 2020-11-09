const emailRegex = RegExp("^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$");

function emailTest(email){
    if(emailRegex.test(email))console.log("Valid Email Address!");
    else throw "Invalid Email Address!";
}

try{
    emailTest("abc.xyz@gmail.co.in");
}catch(e){
    console.error(e);
}

try{
    emailTest("abc@gamil.com.com.in");
}catch(e){
    console.error(e);
}