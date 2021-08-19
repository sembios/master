const input = document.querySelector('#inp')
const btn = document.querySelector('#btn')
const wrapper = document.querySelector('.wrapper')
const count = document.querySelector('#countTodo')
i = 0

btn.addEventListener('click', function () {
    i++
    count.textContent = i
    let newP = document.createElement('p')
    if(!input.value) return
    newP.textContent = input.value
    wrapper.append(newP)
    input.value = ''
    
    let btnD = document.createElement('button')
    btnD.className = 'btnDel'
    btnD.textContent = 'Удалить'
    newP.append(btnD)
    
    btnD.addEventListener('click', function (e) {
        i--
        count.textContent = i
        wrapper.removeChild(newP)
    })
    
    newP.addEventListener('click', function () {
        newP.classList.toggle('active')
    })
    

})
