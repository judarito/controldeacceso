const validate=()=>{
    const cmd  = new MobileDetect(navigator.userAgent);
    console.log("Información del mobil:", cmd.mobile());
    
}


function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}



setCookie("usuario", "Juan", 7);
validate()
