
let getDuckys = document.getElementsByClassName('ducky')
let duckyStorage = []

let duckyCollection = document.getElementsByClassName('ducky')
let discussionsButton = document.getElementById('show-discussions')
let questionsButton = document.getElementById('show-questions')
let tutorialsButton = document.getElementById('show-tutorials')

for (let i = (getDuckys.length - 1); i >= 0; i--) {
    duckyStorage.push(getDuckys[i])
}

function getTimeStr() {
    let time = new Date()
    let minutes = time.getMinutes()
    let hours = time.getHours()

    //format minutes
    if (minutes < 10) {
        minutes = "0" + minutes.toString()
    }

    if (hours >= 12) {
        if(hours === 12){
            hours = hours.toString()
        }
        else{
            hours = (hours - 12).toString()
        }
        minutes = minutes + " P.M."
    } else {
        minutes = minutes + " A.M."
    }

    return hours + ":" + minutes
}

function searchDuckys() {
    let userInput = document.getElementById("searchbar").value
    userInput = userInput.toLowerCase()
    let duckyCollection = document.getElementsByClassName('ducky')

    let duckyAuthor = document.getElementsByClassName('ducky-author')
    let duckyTitles = document.getElementsByClassName('ducky-title')

    
    for (let i = 0; i < duckyCollection.length; i++) {
        if (
            (duckyAuthor[i].textContent.toLowerCase().includes(userInput)) ||
            (duckyTitles[i].textContent.toLowerCase().includes(userInput))) {
            duckyCollection[i].classList.remove('hidden')
        } else {
            duckyCollection[i].classList.add('hidden')
        }
    }
}

function toggleModal() {
    let duckyModal = document.getElementById('create-ducky-modal')
    let duckyBackdrop = document.getElementById('modal-backdrop')

    duckyModal.classList.toggle('hidden')
    duckyBackdrop.classList.toggle('hidden')

    clearModal()
}

function clearModal() {
    document.getElementById('ducky-text-input').value = ""
    document.getElementById('ducky-author-input').value = ""
    document.getElementById('ducky-type-input').value = ""
    document.getElementById('ducky-title-input').value = ""
}

function filterDuckies(element, type) {
    if (element.classList.contains('ducky') && element.classList.contains(type)) {
        element.classList.remove('hidden')
    } else {
        element.classList.add('hidden')
    }
}

function sortDuckys(event) {

    if (event.currentTarget.classList.value == 'clicked') {
        //clear all current sorted elements prior to sorting
        for (let k = 0; k < duckyCollection.length; k++) {
            duckyCollection[k].classList.remove('hidden') // duckyCollection[k].classList.add('hidden')
        }

        //set the button to unclicked
        event.currentTarget.classList.remove('clicked')
    } else {
        discussionsButton.classList.remove('clicked')
        questionsButton.classList.remove('clicked')
        tutorialsButton.classList.remove('clicked')

        for (let i = 0; i < duckyCollection.length; i++) {
            if (event.currentTarget.id === 'show-discussions') {
                discussionsButton.classList.add('clicked')
                filterDuckies(duckyCollection[i], 'discussion')

            } else if (event.currentTarget.id === 'show-questions') {
                questionsButton.classList.add('clicked')
                filterDuckies(duckyCollection[i], 'question')

            } else if (event.currentTarget.id === 'show-tutorials') {
                tutorialsButton.classList.add('clicked')
                filterDuckies(duckyCollection[i], 'tutorial')
            }
        }
    }
}

function hideContent() {
    let duckyContainer = document.getElementById('ducky-container')

    for (let i = 0; i < duckyContainer.children.length; i++) {
        duckyContainer.children[i].classList.add("hidden")
    }
}

function addContent() {
    let duckyContainer = document.getElementById('ducky-container')


    for (let i = 0; i < duckyContainer.children.length; i++) {
        if (duckyContainer.children[i].classList.contains("ducky")) {
            duckyContainer.children[i].classList.remove("hidden")
            duckyContainer.children[i].children[0].children[2].classList.add("hidden")
        } else {
            duckyContainer.children[i].classList.add("hidden")
        }

    }
}

function hideButtons() {
    let buttonContainer = document.getElementById('button-container')
    for (let i = 0; i < buttonContainer.children.length; i++) {
        if (!buttonContainer.children[i].classList.contains('hidden')) {
            buttonContainer.children[i].classList.add('hidden')
        } else {
            buttonContainer.children[i].classList.remove('hidden')
        }
    }

    let unhideReply = document.getElementById('add-replies')
    unhideReply.classList.remove('hidden')
}

function postDuckyHTML (ducky) {
    var outerArticle = document.createElement('a')
    outerArticle.classList.add('ducky-link')

    outerArticle.insertAdjacentHTML('afterbegin', ducky)

    let duckyContainer = document.getElementById('ducky-container')
    duckyContainer.insertAdjacentElement('afterbegin', outerArticle)

    outerArticle.href = "/posts/" + (duckyStorage.length + 1)

    duckyStorage.push(duckyContainer.firstChild)

    toggleModal()

    //unsort all posts
    for (let k = 0; k < duckyCollection.length; k++) {
        duckyCollection[k].classList.remove('hidden')
    }
    discussionsButton.classList.remove('clicked')
    questionsButton.classList.remove('clicked')
    tutorialsButton.classList.remove('clicked')
}


function publishPost(event) {
    let textField = document.getElementById('ducky-text-input')
    let authorField = document.getElementById('ducky-author-input')
    let titleField = document.getElementById('ducky-title-input')
    let dropField = document.getElementById('ducky-type-input')

    let textFieldContent = textField.value
    let authorFieldContent = authorField.value
    let titleFieldContent = titleField.value

    textFieldContent = textFieldContent.replaceAll(' ', '')
    authorFieldContent = authorFieldContent.replaceAll(' ', '')
    titleFieldContent = titleFieldContent.replaceAll(' ', '')

    let userTime = getTimeStr()

    if ((textFieldContent != '') && (authorFieldContent != '') && (titleFieldContent != '') && (dropField.value != '')) {

        fetch('/store', {
            method: 'POST',
            body: JSON.stringify({
                title: titleField.value,
                text: textField.value,
                time: userTime,
                author: authorField.value,
                label: dropField.value.charAt(0).toUpperCase()+dropField.value.slice(1),
                type: dropField.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.status == 200) {
                let ducky = Handlebars.templates.ducky({
                    showText: false,
                    title: titleField.value,
                    text: textField.value,
                    time: userTime,
                    author: authorField.value,
                    label: dropField.value.charAt(0).toUpperCase()+dropField.value.slice(1),
                    type: dropField.value
                })

                postDuckyHTML(ducky)
            } else {
                alert("An error ocurred saving your photo card.")
            }
        })
    } else {
        alert("You did not properly fill the title/text/author fields.")
    }
}

function replyPost(event) {
    let textField = document.getElementById('reply-text-input')
    let titleField = document.getElementById('reply-title-input')

    let textFieldContent = textField.value
    let titleFieldContent = titleField.value

    textFieldContent = textFieldContent.replaceAll(' ', '')
    titleFieldContent = titleFieldContent.replaceAll(' ', '')

    let userTime = getTimeStr()

    if ((textFieldContent != '') && (titleFieldContent != '')) {
        let position = parseInt(window.location.href.substring(28))

        let reply = Handlebars.templates.reply({
            replyText: titleField.value,
            replyAuthor: textField.value,
            replyTime: userTime,
        })

        fetch('/storeReply', {
            method: 'POST',
            body: JSON.stringify({
                replyText: titleField.value,
                replyAuthor: textField.value,
                replyTime: userTime,
                position: position
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let replyContainer = document.getElementsByClassName('response-container')
        replyContainer[0].insertAdjacentHTML('beforeend', reply)
    }

    toggleModalReply()

}

function clearModalReply() {
    document.getElementById('reply-title-input').value = ""
    document.getElementById('reply-text-input').value = ""
}

function toggleModalReply() {
    let replyModal = document.getElementById('create-reply-modal')
    let duckyBackdrop = document.getElementById('modal-backdrop')

    replyModal.classList.toggle('hidden')
    duckyBackdrop.classList.toggle('hidden')

    clearModalReply()
}

//wait until dom is loaded to do all this stuff
window.addEventListener('DOMContentLoaded', () => {

    let searchbar = document.getElementById('searchbar')
    if (searchbar)
        searchbar.addEventListener('input', searchDuckys)

    let createpost = document.getElementById("add-content")
    if (createpost)
        createpost.addEventListener('click', toggleModal)

    //Modal close and cancel
    let modalcancel = document.getElementsByClassName('modal-cancel-button')
    if (modalcancel[0])
        modalcancel[0].addEventListener('click', toggleModal)

    let modalclose = document.getElementsByClassName('modal-close-button')
    if (modalclose[0])
        modalclose[0].addEventListener('click', toggleModal)

    //Sorting buttons
    if (discussionsButton)
        discussionsButton.addEventListener('click', sortDuckys)

    if (questionsButton)
        questionsButton.addEventListener('click', sortDuckys)

    if (tutorialsButton)
        tutorialsButton.addEventListener('click', sortDuckys)

    let submitPostButton = document.getElementsByClassName('modal-accept-button')
    if (submitPostButton)
        for (let i = 0; i < submitPostButton.length; i++) {
            submitPostButton[i].addEventListener('click', publishPost)
        }

    let replyModal = document.getElementById('add-replies')

    if(replyModal)
        replyModal.addEventListener('click', toggleModalReply)

    let closeButton2 = document.getElementsByClassName('reply-modal-cancel-button')
    if(closeButton2[0])
        closeButton2[0].addEventListener('click', toggleModalReply)

    let xButton2 = document.getElementsByClassName('reply-modal-close-button')
    if(xButton2[0])
        xButton2[0].addEventListener('click', toggleModalReply)

    let submitReplyButton = document.getElementsByClassName("reply-modal-accept-button")
    if(submitReplyButton)
        for (let i = 0; i < submitReplyButton.length; i++) {
            submitReplyButton[i].addEventListener('click', replyPost)
        }
})