const notfound = (req, res) => {
  res.status(404).send('404 - not found.')
}

module.exports = notfound
