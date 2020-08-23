// navbar scroll down
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('header').addClass('header-down')
  } else {
    $('header').removeClass('header-down')
  }
})

// navbar in mobile width
$(document).ready(function () {
  $('#header_responsive_icon').click(function () {

    $('.menu').toggleClass('active')
    // console.log('click')
  })
})

// scroll down after search and after to popular
const path = window.location.pathname

if (path === '/') {
  const title = document.querySelector('.highlight-text')
  window.addEventListener('load', () => {
    title.scrollIntoView({ behavior: 'smooth' })
  })
}

if (path === '/favorite') {
  const title = document.querySelector('.highlight-text')
  window.addEventListener('load', () => {
    title.scrollIntoView({ behavior: 'smooth' })
  })
}

if (path === '/search') {
  const footer = document.querySelector('.footer')
  window.addEventListener('load', () => {
    footer.scrollIntoView({ behavior: 'smooth' })
  })
}
if (path === '/popular') {
  const content = document.querySelector('.wrapper')
  window.addEventListener('load', () => {
    content.scrollIntoView({ behavior: 'smooth' })
  })
}

if (path === '/new') {
  const content = document.querySelector('.container')
  window.addEventListener('load', () => {
    content.scrollIntoView({ behavior: 'smooth' })
  })
}
if (path.match('edit')) {
  const content = document.querySelector('.container')
  window.addEventListener('load', () => {
    content.scrollIntoView({ behavior: 'smooth' })
  })
}

if (path.match('/restaurants')) {
  const content = document.querySelector('.container')
  window.addEventListener('load', () => {
    content.scrollIntoView({ behavior: 'smooth' })
  })
}

if (path.match('/sort')) {
  const content = document.querySelector('.content')
  window.addEventListener('load', () => {
    content.scrollIntoView({ behavior: 'smooth' })
  })
}

// confirm

function deleteOrnot() {
  return window.confirm('資料將永久刪除，確定繼續？')
}

function deletefromfavoriteOrnot() {
  return window.confirm(`確定要從收藏移除？`)
}

