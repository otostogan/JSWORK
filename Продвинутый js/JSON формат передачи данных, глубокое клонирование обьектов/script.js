'use strict';

const persone = {
    name: 'alex',
    tel: '+744444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(clone);
console.log(persone);