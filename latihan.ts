
//1. check whether the number is odd(ganjil) or even (genap)
    let _number1:number = 23;
        if (_number1 % 2 == 0) {
            console.log(`${_number1} -> Even Number`)
        } else {
            console.log(`${_number1} -> Odd Number`)
        }

    //option 2 itenary
    console.log( 
        _number1 % 2 === 0 
        ? `${_number1} -> Even number`
        : `${_number1} -> odd number`
    );

//2. check whether the number is prime number or not
    const n2: number = 6;
    let isPrime: boolean = true;

    for (let i: number = 2; i < n2; i++ ) {
        if (n2 % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);

// Soal 3 
    const _number3 : number = 3;
    let _sum: number =0;
    let _hasil: string = `${_number3} ->`

    for (let i = 1; i <= _number3; i++) {
        _sum += i;
        _hasil += i === _number3 ? `${i} = ${_sum}` : `${i} + `
    }
    console.log(_hasil);

// Soal 4
    const _number4 : number = 4;
    _hasil = `${_number4}! -> ${_number4} X`;
    let _fact = _number4;
    for (let i = _number4 - 1 ; i >= 1; i--){
        _fact *= i;
        _hasil += i ===1 ? `${i} = ${_fact}` : `${i} X `;
    }

    console.log(_hasil);


    const _number5 :number = 6;
    let _hasilFact = `${_number5}! -> ${_number5} x`;
    let _fact = _number5;
    for (let i = _number5 - 1; i >= 1; i--) {
        _hasilFact *= i;
        _hasil += i === 1 ? `${i} = ${_hasilFact}` : `${i} x `;
    }
    console.log(_hasilFact);
    

// soal 5 Fibonanci
    const _number6: number = 15;
    let _fib : number= 0;
    let _n1 : number = 0;
    let _n2 : number = 1;
    let _hasilFibonanci = `${_number6} -> `;

    for (let i = 1; i < _number6; i++) {
        _fib = _n1 + _n2;
        _n1 = _n2;
        _n2 = _fib;
        _hasilFibonanci += i == _number6 ? `${_n1}` : `${_n1}, `;
    }

    console.log(_hasilFibonanci);

