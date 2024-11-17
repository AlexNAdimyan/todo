'use strict'

window.addEventListener('DOMContentLoaded', () => {

    const toDoHeader = document.querySelector('.todo-header');
    const toDoApp = document.querySelector('.todo-app');
    const form  = document.querySelector('form');
    let input = document.querySelector('input[type="text"]');
    const toDoFooter = document.querySelector('.todo-footer');
    const toDoItems = document.createElement('div');
    
    toDoItems.classList.add('todo-list-items')
    toDoItems.classList.add('hide')
    toDoApp.append(toDoItems)
    let a = 0
    let indecator = 0
    let indecator2 = 0

    toDoHeader.addEventListener('submit', function(e) {
        e.preventDefault()
        if (a == 0) {
            toDoItems.classList.remove('hide')
            toDoItems.classList.add('show2')
        }


        if (input.value != '') {
            const toDoItem = document.createElement('div');
            toDoItem.classList.add('todo-list-item')
            toDoItem.innerHTML = `
                <label>
                   <input type="checkbox">
                    <span>${input.value}</span>
                </label>
                <button>Remove</button>
            `
            

            toDoItems.append(toDoItem)
            
            form.reset()
            

            
            indecator++

            if (a == 0) {
                toDoFooter.classList.remove('hide')
                toDoFooter.classList.add('show1')
                a++
            }
            toDoFooter.innerHTML = `
                <span>${0} / ${indecator}</span>
                <button>Clear all completed</button>
            `
            const checkBox = toDoItem.querySelector('input')
            checkBox.addEventListener('change', () => {
                if (checkBox.checked) {
                    indecator2++
                } else {
                    indecator2--
                }

                toDoFooter.querySelector('span').textContent = `${indecator2} / ${indecator}`;
            })


            const removeButton = toDoItem.querySelector('button');
            removeButton.addEventListener('click', () => {
                toDoItem.remove()
                indecator--
                indecator2--
    
    
                toDoFooter.querySelector('span').textContent = `${indecator2} / ${indecator}`;

                if (indecator == 0) {
                    toDoItems.classList.add('hide')
                    toDoItems.classList.remove('show2')
                    toDoFooter.classList.add('hide')
                    toDoFooter.classList.remove('show1')
                    a = 0
                }
            });
            

            const buttonAllRemove = toDoFooter.querySelector('button')
            buttonAllRemove.addEventListener('click', () => {
                const allItems = document.querySelectorAll('.todo-list-item');
                allItems.forEach(item => {
                    const checkBox = item.querySelector('input')
                    if (checkBox.checked) {
                        item.remove()
                        indecator--
                        indecator2--
                        
                    }

                })
                toDoFooter.querySelector('span').textContent = `${indecator2} / ${indecator}`;

                if (indecator == 0) {
                    toDoItems.classList.add('hide')
                    toDoItems.classList.remove('show2')
                    toDoFooter.classList.add('hide')
                    toDoFooter.classList.remove('show1')
                    a = 0
                }
            })
        }
    })

    



})