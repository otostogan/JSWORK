'use strict';

const persone = {
    name: 'Alex',
    tel: '+744444444',
    parets: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = (JSON.parse(JSON.stringify(persone)));
clone.parets.mom = 'Ann';
console.log(persone);
console.log(clone);
