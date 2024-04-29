function createCalculator() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        start() {
            this.clickBottons();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizeOperation();
                }
            });
        },

        realizeOperation() {
            let operation = this.display.value;

            try {
                operation = eval(operation);
                if (!operation) {
                    alert('Caractere inválido');
                    return;
                } else {
                    this.display.value = String(operation);
                }

            } catch(e) {
                alert('Caractere inválido');
                return;
            };
        },


        clearDisplay() {
            this.display.value = '';
        },

        deleteDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },



        clickBottons() {
            // this -> calculadora
            document.addEventListener('click', function(e){
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText); 
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteDisplay();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizeOperation();
                }

                this.display.focus();
                
            }.bind(this));
        },

        btnForDisplay(value){
            this.display.value += value;
        }
    };
}

const calculator = createCalculator();
calculator.start();