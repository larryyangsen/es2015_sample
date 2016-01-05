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
            let string = `You clicked the
`
            alert(`${string}${text} ` + 'button');
        }
    }

    class Person {
        constructor(name) {
            this.name = name;
        }
        describe() {
            return "Person called " + this.name;
        }
    }

    class Student extends Person { //�^��Person
        constructor(name, className) {
            super(name);
            this.className = className;
        }
        describe() {
            return `${super.describe()},who is a student in ${this.className}`
        }
    }

    const a = [1, 2, 3];
    const aas = ['a', 'b', 'c'];
    aas.push(...a); // From apply() to the spread operator (...)
    let [x, y, z] = [3, 2, 1];
    let b = a.map(x => x = x * x);
    let [, year, month, day] = // ��һ�M�հ�׌�؂�����к��Ե�0��
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');


    for (let [index, elem] of aas.entries()) {
        console.log(elem, index);
    }
    console.log([...a, ...aas]) //From concat() to the spread operator (...)
    var print1 = new print('123', '456');
    var print2 = new print();
    var printObj1 = new printObj({ //�]�osecond�r�ɸ����A�Oֵ�oֵ
        first: 4
    });
    printAllArgs(1, 2, 2, 2, 2, 's');
    console.log(printObj1)
    let myclass = new myClass(4);
    let buttons = new buttonsClass();
    let personA = new Person('Larry');
    let studentA = new Student('Larry','MIS');
    myclass.show(2);
    console.log(personA.describe());
    console.log(studentA.describe());

    function print(x = '777', y = '888') { //���A�Oֵ��function
        this.x = x;
        this.y = y;
        console.log(`${x}and${y}`)
    }

    function printObj({
        first = 1,
            second = 2
    }) {
        this.first = first;
        this.second = second;
    }

    function printAllArgs(must, ...args) {
        console.log(must, args)
    }
}
