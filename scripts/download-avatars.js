const fs = require('fs')
const fetch = require('node-fetch')

const avatars = require('../data/instagram-avatars')

async function downloadAvatar (filename, url) {
  const response = await fetch(url)
  const buffer = await response.buffer()

  fs.writeFile(
    `../static/avatars/${filename}`,
    buffer,
    // eslint-disable-next-line no-console
    () => console.log(`Downloaded: ${filename}`)
  )
}

Object.entries(avatars).forEach(([name, url]) => {
  downloadAvatar(`${name}.jpg`, url)
})
