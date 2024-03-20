function createElement (type, props, ...children) {
  const $el = document.createElement(type)
  Object.keys(props).forEach(prop => $el[prop] = props[prop])
  $el.append(...children)
  return $el
}

const $gallery = document.getElementById('gallery')
const $dialog = document.getElementById('dialog')

$gallery.addEventListener('click', function (e) {
  const $picture = e.target.closest('picture')

  if ($picture) {
    const $img = createElement('img', {src: $picture.dataset.hdimage})
    $dialog.innerHTML = ''
    $dialog.classList.remove('open')
    $dialog.append($img)
    $dialog.showModal()
    $dialog.classList.add('open')
  }
})

$dialog.addEventListener('click', function () {
  $dialog.close()
})