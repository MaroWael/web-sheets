function removeRepetition(arr:number[])
{
    let array = [0,0,0,0,0,0,0,0,0];
    for(let i = 0; i < arr.length; ++i)
    {
        ++arr[i];
    }
    let out = [];
    for(let i = 0; i < 9; ++i)
    {
        out.push(i)
    }
    return out;
}
console.log(removeRepetition([1,2,2,3,4,4,4,5,5,5,5,6]))