function addition(boo){
    boo = '0';
    console.log("Press 1 to Add\n");
    console.log("Press 2 to Subtract\n");
    console.log("Press 3 to Multiply\n");
    console.log("Press 4 to Division\n");
    // var response;
    let many;
    const list = [];
    // do
    // {
       var response = prompt("Enter a Vaue ", "1");
    // }
    // while(response > 5 && response >= 1)
    many = prompt("How many? ")
    for(let i = 0; i < many; i++)
    {
        list[i] = prompt("Your number ")
    }
    if(response === 1){
        for(let m = 0; m < many; m++){
            boo = boo + list[m];
        }
        return boo;
    }

    const cars = [];
    return boo;
}

console.log(addition(1));