{
    class myClass {
        constructor(x) {
            this.x = x;
        }
        show(y) {
            let sum = this.x + y;
            console.log(`${this.x}+${y}=` + sum);
        }
    }

    class buttonsClass {
        constructor() {
            let buttons = document.querySelectorAll('button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', () => {
                    this.handleClick(buttons[i].innerText);
                });
            }

        }
        handleClick(text) {
            let string = `You clicked 
          `
            alert(`${string}${text}`);
        }
    }

    const a = [1, 2, 3];
    let [x, y, z] = [3, 2, 1];
    let b = a.map(x => x = x * x);
    let [, year, month, day] = //第一組空白讓回傳的陣列忽略第0個
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');

    const lines = `dd 
                  d`

    function print(x, y) {

        alert(`${x}and${y}`)
    }
    console.log(a, b, lines)
    print('123', '456')

    let myclass = new myClass(4);
    let buttons = new buttonsClass();
    myclass.show(2);

}
