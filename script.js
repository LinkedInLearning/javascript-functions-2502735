function output(data) {
    const $ = document.querySelector.bind(document)
    let output = '<nav><ul>'
    for (const key in data) {
        output +=`<li><a class="bi-${key}" href="${data[key]}"> ${key}</a>`
    }
    output +='</ul></nav>'
    $('#output').innerHTML = output
}
