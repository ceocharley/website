const b = document.getElementById('discord')
const c = document.getElementById('copy')

b.addEventListener('click', () => {
    navigator.clipboard.writeText('charley#0001')
    c.style.visibility = 'visible'
    setTimeout(() => {
        c.style.visibility = 'hidden'
    }, 1000)
})