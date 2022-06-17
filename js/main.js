const email = document.getElementById('email')
const button = document.getElementById('button')
const errorMsg = document.getElementById('error-msg')

function verifyEmail(email){
  const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  let checkOut = regExp.test(email.value)
  if (!checkOut) {
    errorMsg.classList.add('error-visible')
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