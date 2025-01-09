const validate=()=>{
    const cmd  = new MobileDetect(window.navigator.userAgent);
    console.log("Información del mobil:", cmd.mobile());
    alert("Información del mobil:", cmd.mobile());
}
validate()
