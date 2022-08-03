const $ = document.querySelector.bind(document)
info = {
  name: 'Ray Villalobos',
  twitter: '@planetoftheweb',
  youtube: 'youtube.com/planetoftheweb',
  linkedin: 'linkedin.com/in/planetoftheweb'
}
function displayCard() {
}
$('#output').innerHTML = displayCard(info)