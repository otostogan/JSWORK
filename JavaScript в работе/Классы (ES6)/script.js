'use strict';

class Rectangle{
    constructor(height, width){
        this.width = width;
        this.height = height;
    }

    calcArea(){
        return this.height * this.width;   
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps(){
        console.log(`Текст:${this.text}, цвет:${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'hello', 'red');

div.showMyProps();
console.log(div.calcArea());


// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);


// console.log(square.calcArea());
// console.log(long.calcArea());


const forms = document.querySelectorAll('form');

    const messages = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            //Сообщение пользователю при отправке формы
            const statusMessage = document.createElement('img');
            statusMessage.src = messages.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            request.setRequestHeader('Content-Type', 'application/json');
            const formData = new FormData(form);

            const object = {};

            formData.forEach(function (value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', (e) => {
                if(request.status === 200){
                    console.log(request.response);
                    showThanksModal(messages.success);
                    form.reset();
                    statusMessage.remove();
                }else {
                    showThanksModal(messages.failure);
                }
            });
        });
    }
    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>X</div>
            <div class="modal__title">${message}</div>
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() =>{
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 5000);
    }

    forms.forEach(item => {
        postData(item);
    });