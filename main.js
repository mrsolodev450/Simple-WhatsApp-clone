const TAB_BUTTON = {
  one: document.getElementById('one'),
  two: document.getElementById('two'),
  three: document.getElementById('three')
}
const CONTENT = document.getElementById('content')

TAB_BUTTON.one.addEventListener('click', e => {
  TAB_BUTTON.one.classList.add('active')
  TAB_BUTTON.two.classList.remove('active')
  TAB_BUTTON.three.classList.remove('active')
})

TAB_BUTTON.two.addEventListener('click', e => {
  TAB_BUTTON.one.classList.remove('active')
  TAB_BUTTON.two.classList.add('active')
  TAB_BUTTON.three.classList.remove('active')
})

TAB_BUTTON.three.addEventListener('click', e => {
  TAB_BUTTON.one.classList.remove('active')
  TAB_BUTTON.two.classList.remove('active')
  TAB_BUTTON.three.classList.add('active')
})



