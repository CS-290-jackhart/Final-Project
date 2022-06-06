var getDuckys = document.getElementsByClassName('ducky')
var duckyStorage = []

duckyStoring()

function duckyStoring() {
    for (var i = 0; i < getDuckys.length; i++) {
        duckyStorage.push(getDuckys[i])
    }
}

function searchDuckys() {
    var userInput = document.getElementById("searchbar").value
    userInput = userInput.toLowerCase()
    var duckyCollection = document.getElementsByClassName('ducky')

    console.log('ducky content:', duckyStorage[i])

    for(var i = 0; i < duckyCollection.length; i++)
    {
        if(!duckyStorage[i].textContent.toLowerCase().includes(userInput))
        {
            duckyCollection[i].style.display = 'none'
        }else
        {
            duckyCollection[i].style.display = 'block'
        }
    }
}

var duckySearch = document.getElementById('searchbar')
duckySearch.addEventListener('input', searchDuckys)

function toggleModal(){
    var duckyModal = document.getElementById('create-ducky-modal')
    var duckyBackdrop = document.getElementById('modal-backdrop')

    duckyModal.classList.toggle('hidden')
    duckyBackdrop.classList.toggle('hidden')

    clearModal()
}

var createPost = document.getElementById("add-content")
createPost.addEventListener('click', toggleModal)

function clearModal(){
    document.getElementById('ducky-text-input').value = ""
    document.getElementById('ducky-author-input').value = ""
    document.getElementById('ducky-type-input').value = ""
}


var closeButton = document.getElementsByClassName('modal-cancel-button')
closeButton[0].addEventListener('click', toggleModal)

var xButton = document.getElementsByClassName('modal-close-button')
xButton[0].addEventListener('click', toggleModal)

function sortDisc(event)
{
    var duckyCollection = document.getElementsByClassName('ducky')

    for(var i = 0; i < duckyCollection.length; i++)
    {
        if(event.currentTarget.id === 'show-discussions')
        {   
            if(duckyCollection[i].classList.value === 'ducky discussion')
            {
                duckyCollection[i].style.display = 'block'
            }else{
                duckyCollection[i].style.display = 'none'
            }
        }else if(event.currentTarget.id === 'show-questions')
        {   
            if(duckyCollection[i].classList.value === 'ducky question')
            {
                duckyCollection[i].style.display = 'block'
            }else{
                duckyCollection[i].style.display = 'none'
            }
        }else if(event.currentTarget.id === 'show-tutorials')
        {   
            if(duckyCollection[i].classList.value === 'ducky tutorial')
            {
                duckyCollection[i].style.display = 'block'
            }else{
                duckyCollection[i].style.display = 'none'
            }
        }
    }
}

var sortDiscButton = document.getElementById('show-discussions')
sortDiscButton.addEventListener('click', sortDisc)

var sortQButton = document.getElementById('show-questions')
sortQButton.addEventListener('click', sortDisc)

var sortTutButton = document.getElementById('show-tutorials')
sortTutButton.addEventListener('click', sortDisc)

