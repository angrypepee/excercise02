
//1. check whether the number is odd(ganjil) or even (genap)

    let _x :number = 5; //global data

    if ((_x % 2) == 1){ 
        const _aksi = "Ganjil";
        console.log(_aksi);
        
    } else {
        const _aksi = "Genap"
        console.log(_aksi);
    }

//2. check whether the number is prime number or not
let _y: number = 11;

 for (let _y:number = 10; _y >0; _y--) {
    if (_y % 2 !== 2) continue;
    const _aksi = ("Bilangan Prima");
    console.log(_y);
 }
