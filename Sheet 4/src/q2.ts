function strFunc(s: string)
{
    let arr = s.split('')
    let i = 0, j = 2;
    while(i < s.length && j < s.length)
    {
        let x = arr[i];
        arr[i] = arr[j]
        arr[j] = x
        i += 4;
        j += 4
    }
    return arr.join('')
}
console.log(strFunc('abcdefghi'))
console.log('cbadgfehi')