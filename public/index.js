var getDuckys = document.getElementsByClassName('ducky')
var duckyStorage = []

duckyStoring()

function duckyStoring() {
    duckyStorage = []
    for (var i = 0; i < getDuckys.length; i++) {
        duckyStorage.push(getDuckys[i])
    }

    console.log("Goofy ahh shit >>", duckyStorage)
}

function searchDuckys() {
    var userInput = document.getElementById("searchbar").value
    userInput = userInput.toLowerCase()
    var duckyCollection = document.getElementsByClassName('ducky')

    console.log('ducky content:', duckyStorage[i])

    for (var i = 0; i < duckyCollection.length; i++) {
        if (!duckyStorage[i].textContent.toLowerCase().includes(userInput)) {
            duckyCollection[i].style.display = 'none'
        } else {
            duckyCollection[i].style.display = 'block'
        }
    }
}

var duckySearch = document.getElementById('searchbar')
duckySearch.addEventListener('input', searchDuckys)

function toggleModal() {
    var duckyModal = document.getElementById('create-ducky-modal')
    var duckyBackdrop = document.getElementById('modal-backdrop')

    duckyModal.classList.toggle('hidden')
    duckyBackdrop.classList.toggle('hidden')

    clearModal()
}

var createPost = document.getElementById("add-content")
createPost.addEventListener('click', toggleModal)

function clearModal() {
    document.getElementById('ducky-text-input').value = ""
    document.getElementById('ducky-author-input').value = ""
    document.getElementById('ducky-type-input').value = ""
    document.getElementById('ducky-title-input').value = ""
}


var closeButton = document.getElementsByClassName('modal-cancel-button')
closeButton[0].addEventListener('click', toggleModal)

var xButton = document.getElementsByClassName('modal-close-button')
xButton[0].addEventListener('click', toggleModal)

function sortDuckys(event) {
    var duckyCollection = document.getElementsByClassName('ducky')

    for (var i = 0; i < duckyCollection.length; i++) {
        if (event.currentTarget.id === 'show-discussions') {
            console.log("Showing discussions")
            if (duckyCollection[i].classList.value === 'ducky discussion') {
                duckyCollection[i].style.display = 'block'
            } else {
                duckyCollection[i].style.display = 'none'
            }
        } else if (event.currentTarget.id === 'show-questions') {
            console.log("Showing questions")
            if (duckyCollection[i].classList.value === 'ducky question') {
                duckyCollection[i].style.display = 'block'
            } else {
                duckyCollection[i].style.display = 'none'
            }
        } else if (event.currentTarget.id === 'show-tutorials') {
            console.log("Showing tutorials")
            if (duckyCollection[i].classList.value === 'ducky tutorial') {
                duckyCollection[i].style.display = 'block'
            } else {
                duckyCollection[i].style.display = 'none'
            }
        }
    }
}

var sortDiscButton = document.getElementById('show-discussions')
sortDiscButton.addEventListener('click', sortDuckys)

var sortQButton = document.getElementById('show-questions')
sortQButton.addEventListener('click', sortDuckys)

var sortTutButton = document.getElementById('show-tutorials')
sortTutButton.addEventListener('click', sortDuckys)




function showPost(event) {

    console.log("I'm showing a post")

}

var duckyPosts = document.getElementsByClassName('ducky')
for (var i = 0; i < duckyPosts.length; i++) {
    duckyPosts[i].addEventListener('click', showPost)
}

function publishPost(event) {
    var textField = document.getElementById('ducky-text-input')
    var authorField = document.getElementById('ducky-author-input')
    var titleField = document.getElementById('ducky-title-input')
    var dropField = document.getElementById('ducky-type-input')

    console.log("Title Field >>", dropField.value)

    var textFieldContent = textField.value
    var authorFieldContent = authorField.value
    var titleFieldContent = titleField.value

    textFieldContent = textFieldContent.replaceAll(' ', '')
    authorFieldContent = textFieldContent.replaceAll(' ', '')
    titleFieldContent = textFieldContent.replaceAll(' ', '')

    var time = new Date()
    var userTime = time.getHours() + ":" + time.getMinutes()

    if ((textFieldContent != '') && (authorFieldContent != '') && titleFieldContent != '') {

        var ducky = Handlebars.templates.ducky({
            showText: false,
            title: titleField.value,
            text: textField.value,
            time: userTime,
            author: authorField.value,
            label: dropField.value.toUpperCase(),
            type: dropField.value
        })

        var duckyContainer = document.getElementById('ducky-container')
        console.log(duckyContainer)
        duckyContainer.insertAdjacentHTML('beforeend', ducky)

        duckyStoring()

        toggleModal()


    }
    else {
        console.log("It was empty")
        alert("You did not properly fill the text/author fields.")
    }
}


var submitPostButton = document.getElementsByClassName('modal-accept-button')
for (var i = 0; i < submitPostButton.length; i++) {
    submitPostButton[i].addEventListener('click', publishPost)
}