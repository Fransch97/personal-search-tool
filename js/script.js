

const input = document.querySelector('input');
const buttonSearch = document.querySelector('button');

// console.log(buttonSearch)
// console.log(input)

buttonSearch.addEventListener('click' , ()=>{
    const inputValue = input.value.toLowerCase();
    const span = document.getElementsByClassName('brand');
    const contenitore = document.querySelector('.container');
    // console.log('span', span);
    // console.log('input', inputValue);

    
    for(let i = 0; i < span.length; i++){
        const spanText = span[i].innerText.toLowerCase()
        console.log(span[i]);
        
        if(inputValue === spanText){

            console.log('questa é la card', span[i].parentNode);
            const bana = span[i].parentNode
            const bana2 = bana.parentNode
            console.log('bana2',bana2)
            contenitore.innerHTML = ' ';
            contenitore.append(bana2);

        }
        console.log('spantext', spanText);
        console.log('input', inputValue);
    }

});

// francesco