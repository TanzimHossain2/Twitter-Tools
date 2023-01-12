Go to: https://twitter.com/{username}/likes
Open the console and run the following JavaScript code:
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="unlike"]')) {
    d.click()
  }
  window.scrollTo(0, document.body.scrollHeight)
}, 1000)




------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Or , It Works  Slow


setInterval(() => {
for (const d of document.querySelectorAll('div[data-testid="unlike"]')) {
d.click()
}
window.scrollTo(0, window.pageYOffset+300)
}, 10000)



------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let's Enjoy

