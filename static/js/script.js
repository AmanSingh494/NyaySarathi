console.log('I am working!')

const author = 'Adarsh Maurya!'

console.log(`Developer ${author}`)

let menuBtnCond = true
let checkLabel = document.getElementById('check-label')
const faqs = document.querySelectorAll('.faqs')
const helpDivs = document.querySelectorAll('.help-clients article')
const menuBtnChanger = function () {
  if (menuBtnCond) {
    checkLabel.innerHTML = `<i class='bx bx-x'></i>`
    menuBtnCond = false
  } else {
    checkLabel.innerHTML = `<i class='bx bx-menu'></i>`

    menuBtnCond = true
  }
}
// faqs button on click animation
const btnAnimation = () => {}
faqs.forEach((faq) => {
  const faqsBtn = faq.querySelector('.btn-rotate')
  const faqsInfo = faq.querySelector('.faqs-info')
  faqsBtn.addEventListener('click', () => {
    // if (item !== faq) {
    //   faqsInfo.classList.remove('show')
    // }
    faqsBtn.classList.toggle('rotate')
    faqsInfo.classList.toggle('show')
  })
})
// help btn onclick
console.log(helpDivs)
helpDivs.forEach((helpDiv) => {
  const helpBtn = helpDiv.querySelector('.help-btn')
  const helpDetails = helpDiv.querySelector('.help-details')
  const XBtn = helpDiv.querySelector('.x-btn')
  helpBtn.addEventListener('click', () => {
    console.log('clicked')
    helpDetails.classList.add('show')
  })
  XBtn.addEventListener('click', () => {
    helpDetails.classList.remove('show')
  })
})

let menuBtn = document.getElementById('check')
menuBtn.addEventListener('click', menuBtnChanger)
