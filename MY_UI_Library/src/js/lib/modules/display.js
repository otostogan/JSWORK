import $ from '../core';

$.prototype.show = function(display = ''){
    if(display !== 'none'){
        for(let i=0; i < this.length; i++) {
            if(!this[i].style){
                continue;
            }
            this[i].style.display = `${display}`;
        }
        return this;
    } else {
        throw new Error('You cannot call this method with "Display:none"');
    }
};

$.prototype.hide = function(){
    for(let i=0; i < this.length; i++) {
        if(!this[i].style){
            continue;
        }
        this[i].style.display = 'none';
    }
    return this;
};

$.prototype.toggle = function(){
    for(let i=0; i < this.length; i++) {
        if(!this[i].style){
            continue;
        }

        if(this[i].style.display === 'none'){
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }
    return this;
};
