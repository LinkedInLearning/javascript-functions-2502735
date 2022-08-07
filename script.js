let fibby = function (count) {
    console.log(`Fibby: ${count}`)

    if (count===1) return [0, 1]
    let arr = fibby(count-1)

    let sum = arr[arr.length -1] + arr[arr.length - 2]
    arr.push(sum)
    console.log(arr)

    return arr
}
fibby(8);