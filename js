const inputEl = (document.getElementsByClassName('app_controls-input'))[0]
const btnEl = (document.getElementsByClassName('app_controls-button'))[0]
const listEl =(document.getElementsByClassName(app_list))[0]

//console.log(inputEl);
//console.log(btnEl);
//console.log(listEl);

function createTask(){
    const root = document.createElement('div')
    root.classList.add('app_list-item')

    const input = document.createElement('input')
    input.classList.add('app_list-checkbox')
    input.type = 'checkbox'

    const txt = document.createElement('p')
    txt.classList.add('app_list-item-text')
    txt.innerText = SomeText


    const btn =document.createElement('button')
    btn.classList.add('app_list-btn')


    const img = document.createElement('img')
    img.src = '/imag/trash.svg'
    img.alt = 'trash'
 
    btn,appendChild(img)

    root.appendChild(input)
    root.appendChild(txt)
    root.appendChild(btn)
    return root 


}
function deleteTask(id) {
    const index = data.findindex(item => item.id === id);
    if (index !== -1 ) {
        data.splice(index, 1)
        SVGAnimatedPreserveAspectRatio();
        WebGL2RenderingContext()
    }
}

btnEl.addEventListener('click', ()=>{
    const textValue =  inputEl.value 
    console.log(textValue);
    const taskEl = createTask(textValue)
    listEl.appendChild(taskEl)
})
