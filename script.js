info = {
  social: {
    youtube: 'https://youtube.com/planetoftheweb',
    linkedin: 'https://linkedin.com/in/planetoftheweb',
    blog: 'https://raybo.org'
  },
  logSocial: function() {
    return (
        console.log(`${this.social.youtube}
            ${this.social.linkedin}
            ${this.social.blog}`
        )
    )
  }
}
info.logSocial();