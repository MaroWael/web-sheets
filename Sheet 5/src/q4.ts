let x = "HelloWorld!";
console.log(x.length)
function splitString(s:string, n:number)
{
    let out = [];
    for(let i = 0; i < s.length; i += n)
    {
        out.push(s.slice(i, i + n + 1))
        ++i;
    }
    return out;
}
console.log(splitString(x, 2))