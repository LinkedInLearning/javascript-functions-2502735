const $ = document.querySelector.bind(document)
info = {
  name: 'Ray Villalobos',
  twitter: '@planetoftheweb',
  youtube: 'youtube.com/planetoftheweb',
  linkedin: 'linkedin.com/in/planetoftheweb'
}
function displayCard(myObj) {
  return (
    `<b>Name</b>: ${myObj.name}<br>
     <b>Twitter</b>: ${myObj.twitter}<br>    
    `
  )
}
$('#output').innerHTML = displayCard(info)