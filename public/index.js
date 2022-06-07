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
    var discussionsButton = document.getElementById('show-discussions')
    var questionsButton = document.getElementById('show-questions')
    var tutorialsButton = document.getElementById('show-tutorials')


    //if they clicked the discussions button, but it was already clicked
    if((event.currentTarget.id === 'show-discussions') && (discussionsButton.classList.value === 'clicked')){
        //clear all current sorted elements prior to sorting
        for (var k = 0; k < duckyCollection.length; k++){
            duckyCollection[k].classList.remove('hidden') // duckyCollection[k].classList.add('hidden')
        }
        //set the button to unclicked
        discussionsButton.classList.remove('clicked')
    }
    else if((event.currentTarget.id === 'show-questions') && (questionsButton.classList.value === 'clicked')){
        //clear all current sorted elements prior to sorting
        for (var k = 0; k < duckyCollection.length; k++){
            duckyCollection[k].classList.remove('hidden')
        }
        //set the button to unclicked
        questionsButton.classList.remove('clicked')
    }
    else if((event.currentTarget.id === 'show-tutorials') && (tutorialsButton.classList.value === 'clicked')){
        //clear all current sorted elements prior to sorting
        for (var k = 0; k < duckyCollection.length; k++){
            duckyCollection[k].classList.remove('hidden')
        }
        //set the button to unclicked
        tutorialsButton.classList.remove('clicked')
    }
    else{
        for (var i = 0; i < duckyCollection.length; i++) {
            if (event.currentTarget.id === 'show-discussions') {
                discussionsButton.classList.add('clicked')
                questionsButton.classList.remove('clicked')
                tutorialsButton.classList.remove('clicked')
                console.log("Showing discussions")
                if ((duckyCollection[i].classList.contains('ducky')) && (duckyCollection[i].classList.contains('discussion'))) {
                    duckyCollection[i].classList.remove('hidden')
                } 
                else {
                    duckyCollection[i].classList.add('hidden')
                }
            } else if (event.currentTarget.id === 'show-questions') {
                questionsButton.classList.add('clicked')
                discussionsButton.classList.remove('clicked')
                tutorialsButton.classList.remove('clicked')
                console.log("Showing questions")
                if ((duckyCollection[i].classList.contains('ducky')) && (duckyCollection[i].classList.contains('question'))) {
                    duckyCollection[i].classList.remove('hidden')
                } else {
                    duckyCollection[i].classList.add('hidden')
                }
            } else if (event.currentTarget.id === 'show-tutorials') {
                tutorialsButton.classList.add('clicked')
                questionsButton.classList.remove('clicked')
                discussionsButton.classList.remove('clicked')
                console.log("Showing tutorials")
                if ((duckyCollection[i].classList.contains('ducky')) && (duckyCollection[i].classList.contains('tutorial'))) {
                    duckyCollection[i].classList.remove('hidden')
                } else {
                    duckyCollection[i].classList.add('hidden')
                }
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

function hideContent()
{
    var duckyContainer = document.getElementById('ducky-container')

    for(var i = 0; i < duckyContainer.children.length; i++)
    {
        duckyContainer.children[i].classList.add("hidden")
    }
}

function addContent()
{
    var duckyContainer = document.getElementById('ducky-container')


    for(var i = 0; i < duckyContainer.children.length; i++)
    {
        if(duckyContainer.children[i].classList.contains("ducky"))
        {
            duckyContainer.children[i].classList.remove("hidden")
            duckyContainer.children[i].children[0].children[2].classList.add("hidden")
        }else{
            duckyContainer.children[i].classList.add("hidden")
        }

    }
}

function hideButtons()
{
    var buttonContainer = document.getElementById('button-container')
    for(var i = 0; i < buttonContainer.children.length; i++)
    {
        if(buttonContainer.children[i].style.display != 'none')
        {
            buttonContainer.children[i].style.display = 'none'
        }else
        {
            buttonContainer.children[i].style.display = 'flex'
        }
    }

    var unhideReply = document.getElementById('add-replies')
    unhideReply.style.display = 'block'
}

function returnHome()
{
    var buttonContainer = document.getElementById('button-container')
    for(var i = 0; i < buttonContainer.children.length; i++)
    {
        if(buttonContainer.children[i].style.display === 'none')
        {
            buttonContainer.children[i].style.display = 'flex'
        }else
        {
            buttonContainer.children[i].style.display = 'none'
        }
    }

    var unhideReply = document.getElementById('add-replies')
    unhideReply.style.display = 'none'

    addContent()
}

var goBackButton = document.getElementById('go-back')
goBackButton.addEventListener('click', returnHome)

function showPost(event) {

    //set any clicked buttons to unclicked
    var discussionsButton = document.getElementById('show-discussions')
    var questionsButton = document.getElementById('show-questions')
    var tutorialsButton = document.getElementById('show-tutorials')
    discussionsButton.classList.remove('clicked')
    questionsButton.classList.remove('clicked')
    tutorialsButton.classList.remove('clicked')

    hideContent()

    event.currentTarget.classList.remove("hidden")

    var repliesContainer = event.currentTarget.nextSibling.nextSibling
    repliesContainer.classList.remove("hidden")

    var duckyText = event.currentTarget.children[0].children[2]
    duckyText.classList.remove("hidden")

    hideButtons()

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
    authorFieldContent = authorFieldContent.replaceAll(' ', '')
    titleFieldContent = titleFieldContent.replaceAll(' ', '')

    var time = new Date()
    var userTime = time.getHours() + ":" + time.getMinutes()

    if ((textFieldContent != '') && (authorFieldContent != '') && (titleFieldContent != '') && (dropField.value != '')) {

        console.log(">> title: ", titleFieldContent)
        console.log(">> text: ", textFieldContent)
        console.log(">> author: ", authorFieldContent)

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

        //unsort all posts
        var duckyCollection = document.getElementsByClassName('ducky')
        var discussionsButton = document.getElementById('show-discussions')
        var questionsButton = document.getElementById('show-questions')
        var tutorialsButton = document.getElementById('show-tutorials')
        for (var k = 0; k < duckyCollection.length; k++){
            duckyCollection[k].style.display = 'block'
        }
        discussionsButton.classList.remove('clicked')
        questionsButton.classList.remove('clicked')
        tutorialsButton.classList.remove('clicked')

    }
    else {
        console.log("It was empty")
        alert("You did not properly fill the title/text/author fields.")
    }
}


var submitPostButton = document.getElementsByClassName('modal-accept-button')
for (var i = 0; i < submitPostButton.length; i++) {
    submitPostButton[i].addEventListener('click', publishPost)
}