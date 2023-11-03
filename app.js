let string = "";
let buttons = document.querySelectorAll('.button-text');
let inputField = document.querySelector('input');
let heading = document.querySelector('.calc');
Array.from(buttons).forEach((button) => 
{
    button.addEventListener('click', (e) => 
    {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
            inputField.style.backgroundColor = 'black';
            inputField.style.paddingRight = '3.5rem';
            heading.style.color = 'grey';
        }

        else if (e.target.innerHTML == 'RESET') {
            string = ""
            document.querySelector('input').value = string;
            inputField.style.backgroundColor = '#181F32';
            heading.style.color = 'white';
        }

        else if (e.target.innerHTML == 'DEL'){
            string = string.slice(0 , -1)
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML == 'x'){
            string = string + '*'
            document.querySelector('input').value = string;
        }

        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})


