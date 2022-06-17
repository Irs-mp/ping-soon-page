const email = document.getElementById('email')
const button = document.getElementById('button')
const errorMsg = document.getElementById('error-msg')
const svg = document.getElementById('svg')

function verifyEmail(email){
  const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  let checkOut = regExp.test(email.value)
  if (!checkOut) {
    errorMsg.classList.add('error-visible')
    email.style.outlineColor = 'hsl(354, 100%, 66%)'
    email.value = ''
    email.focus()
  } else {
    email.value = ''
    email.focus()
  }
}

function send(e){
  e.preventDefault()
  verifyEmail(email)
}

button.addEventListener('click', send)