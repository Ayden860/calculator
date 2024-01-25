function addition(){
    let boo = 0;
    console.log("Press 1 to Add\n");
    console.log("Press 2 to Subtract\n");
    console.log("Press 3 to Multiply\n");
    console.log("Press 4 to Division\n");
    // var response;
    let many;
    const list = [];
    do
    {
       var response = prompt("Enter a value ", "1");
    }
    while(response > 5 && response >= 1)
    many = prompt("How many? ", "2")
    for(let i = 0; i < many; i++)
    {
        list[i] = prompt("Your number ")
    }
    if(response === '1'){
        for(let m = 0; m < many; m++){
            boo += parseFloat(list[m]);
        }
        // var msg = boo;
        // document.getElementById("demo").innerHTML = "10";
        document.getElementById("demo").innerText = boo;
        console.log(boo);
        // return boo;
    }
    if(response === '2'){
        for(let p = 0; p < many; p++){
            boo = boo - parseFloat(list[p]);
        }
        document.getElementById("demo").innerHTML = boo;
        // return boo;
    }
    if(response === '3'){
        for(let l = 0; l < many; l++){
            boo = boo * parseFloat(list[l]);
        }
        document.getElementById("demo").innerHTML = boo;
        // return boo;
    }
    if(response === '4'){
        for(let k = 0; k < many; k++){
            boo = boo / parseFloat(list[k]);
        }
        document.getElementById("demo").innerHTML = boo;
        // return boo;
    }
    document.getElementById("demo").innerHTML = boo;
    // return boo;
}

// console.log(addition(1));