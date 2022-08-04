info = {
  social: {
    youtube: 'https://youtube.com/planetoftheweb',
    linkedin: 'https://linkedin.com/in/planetoftheweb',
    blog: 'https://raybo.org'
  },
  logSocial: function() {
    for (const key in this.social) {
      console.log(`${key}: ${this.social[key]}`)
    }
  }
}
info.logSocial();