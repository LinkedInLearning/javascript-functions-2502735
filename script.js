info = {
  social: {
    youtube: 'https://youtube.com/planetoftheweb',
    linkedin: 'https://linkedin.com/in/planetoftheweb',
    blog: 'https://raybo.org'
  }
}

function listObject(data) {
  const $ = document.querySelector.bind(document)

  let output = '<ul>'
  for (const key in data) {
    output +=`<li><a href="${data[key]}">${key}</a>`
  }
  output +='</ul>'
  $('#output').innerHTML = output
}

listObject(info.social)