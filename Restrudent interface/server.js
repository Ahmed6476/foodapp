let insertButton = () => {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var prise = document.getElementById("prise").value

    if (title && description && prise != '') {

        const obj = {
            title: title,
            description: description,
            prise: prise
        }

        let key = Math.round(Math.random() * 136598937);

        firebase.database().ref('Items/take' + key).set(obj)
            .then(() => {
                alert("New item added")
            })

    } else {
        alert("Enter some item")
    }
}

// var list = document.getElementById("list");
// const listOforder = () => {


//     firebase.database().ref(`order1`).on('child_added', (data) => {
//         console.log(data.val().tasty_burger)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().tasty_burger}</p></li>`
//     })

//     firebase.database().ref(`order2`).on('child_added', (data) => {
//         console.log(data.val().tasty_cake)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().tasty_cake}</p></li>`
//     })

//     firebase.database().ref(`order3`).on('child_added', (data) => {
//         console.log(data.val().tasty_sweets)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().tasty_sweets}</p></li>`
//     })
//     firebase.database().ref(`order4`).on('child_added', (data) => {
//         console.log(data.val().pan_cake)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().pan_cake}</p></li>`

//     })

//     firebase.database().ref(`order5`).on('child_added', (data) => {
//         console.log(data.val().cold_drink)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().cold_drink}</p></li>`

//     })
//     firebase.database().ref(`order6`).on('child_added', (data) => {
//         console.log(data.val().cold_ice)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().cold_ice}</p></li>`

//     })
//     firebase.database().ref(`order7`).on('child_added', (data) => {
//         console.log(data.val().godzilla)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().godzilla}</p></li>`

//     })
//     firebase.database().ref(`order8`).on('child_added', (data) => {
//         console.log(data.val().chapli)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().chapli}</p></li>`

//     })

//     firebase.database().ref(`order9`).on('child_added', (data) => {
//         console.log(data.val().bruster)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().bruster}</p></li>`

//     })
//     firebase.database().ref(`order10`).on('child_added', (data) => {
//         console.log(data.val().soft_drink)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().soft_drink}</p></li>`

//     })

//     firebase.database().ref(`order11`).on('child_added', (data) => {
//         console.log(data.val().cola)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().cola}</p></li>`

//     })

//     firebase.database().ref(`order12`).on('child_added', (data) => {
//         console.log(data.val().mint)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().mint}</p></li>`

//     })
//     firebase.database().ref(`order13`).on('child_added', (data) => {
//         console.log(data.val().choclate)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().choclate}</p></li>`

//     })
//     firebase.database().ref(`order14`).on('child_added', (data) => {
//         console.log(data.val().pista)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().pista}</p></li>`

//     })
//     firebase.database().ref(`order15`).on('child_added', (data) => {
//         console.log(data.val().tutti)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().tutti}</p></li>`

//     })
//     firebase.database().ref(`order16`).on('child_added', (data) => {
//         console.log(data.val().beast)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().beast}</p></li>`

//     })
//     firebase.database().ref(`order17`).on('child_added', (data) => {
//         console.log(data.val().cheese)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().cheese}</p></li>`

//     })
//     firebase.database().ref(`order18`).on('child_added', (data) => {
//         console.log(data.val().bbq)

//         let list = document.getElementById("list");
//         list.innerHTML += `<li class="li1"><p>${data.val().bbq}</p></li>`

//     })




// }
