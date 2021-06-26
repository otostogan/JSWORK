function myModule(){
    this.hello = function(){
        console.log('Helo');
    };
    this.goodbye = function(){
        console.log('goodbye');
    };
}

module.exports = myModule;