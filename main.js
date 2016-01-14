import HelloWorld from './greeting.js';

( ()=> {

    console.log("started!");
    let hw = new HelloWorld();
    let welcomeBtn = document.getElementById("welcomeBtn");
    let welcomeMsg = document.getElementById("welcomeMsg");


    welcomeBtn.addEventListener('click',  () => {
        hw.addGreeting(welcomeMsg)
    });

})();
