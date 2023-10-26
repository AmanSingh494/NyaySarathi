console.log('I am working!')

const author = 'Adarsh Maurya!'

console.log(`Developer ${author}`)

let menuBtnCond = true
let checkLabel = document.getElementById('check-label')
const faqs = document.querySelectorAll('.faqs')

const menuBtnChanger = function () {
  if (menuBtnCond) {
    checkLabel.innerHTML = `<i class='bx bx-x'></i>`
    menuBtnCond = false
  } else {
    checkLabel.innerHTML = `<i class='bx bx-menu'></i>`

    menuBtnCond = true
  }
}
// button on click animation
const btnAnimation = () => {}
faqs.forEach((faq) => {
  const faqsBtn = faq.querySelector('.btn-rotate')
  const faqsInfo = faq.querySelector('.faqs-info')
  faqsBtn.addEventListener('click', (item) => {
    if (item !== faq) {
      faqsInfo.classList.remove('show')
    }
    faqsBtn.classList.toggle('rotate')
    faqsInfo.classList.toggle('show')
  })
})
console.log(faqsDivs)
// faqsBtn.addEventListener('click', btnAnimation)

let menuBtn = document.getElementById('check')
menuBtn.addEventListener('click', menuBtnChanger)
