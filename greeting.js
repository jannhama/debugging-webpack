

export default class HelloWorld {

    constructor() {
        this.message = "Hello World!";

        }
    addGreeting (aElement)  {
        aElement.innerHTML = this.message;
    };

}


module.exports = HelloWorld;
