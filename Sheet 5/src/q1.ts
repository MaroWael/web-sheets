function removeRepetition(arr:number[])
{
    let map = {};
    for(let i = 0; i < arr.length; ++i)
    {
        if(isNaN(map[arr[i]]))
            map[arr[i]] = 0
        ++map[arr[i]]
    }
    let k = Object.keys(map);
    let v = Object.values(map);
    let out = [];
    for(let i = 0; i < k.length; ++i)
    {
        if(v[i] < 3)
            out.push(k[i])
    }
    return out;
}
console.log(removeRepetition([1,2,2,3,4,4,4,5,5,5,5,6]))