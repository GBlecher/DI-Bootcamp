// Daily challenge: Stars

let n = prompt("how many rows do you want?");
let star= "*"

for(let i = 0; i<n ; i ++)
{
    let row=''
    for(let j = 0; j<=i  ; j ++)
    {
        row += star
    }
    console.log(row)
}