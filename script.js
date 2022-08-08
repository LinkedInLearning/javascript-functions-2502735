async function getSocial() {
    const res = await fetch('./social.json')
    const data = await res.json()
    return data
}

async function doSocial() {
    const social = await getSocial()
    console.log(social)
}

doSocial()