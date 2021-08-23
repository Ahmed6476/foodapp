let getItems = () => {
    firebase.database().ref('Items').on('child_added', (data) => {


        var card = document.getElementById("box-container")
        card.innerHTML += `<div class="card" style="width: 60%;">
          <div class="card-body">
              <h1 id="textp">${data.val().title}</h1>
              <h3 id="discriptionp"> ${data.val().description}</h3>
              <h3 id="prisep"> ${data.val().prise}</h3>
          </div>
          <img src="https://www.w3schools.com/bootstrap4/img_avatar1.png" class="card-img-top img"
              alt="...">
          
          </div>`

    })
}


let order1 = () => {
    let tasty_burger = document.getElementById("tasty_burger")
    let tasty_burger_price = document.getElementById("tasty_burger_price")

    let costomer_order1 = {
        tasty_burger: tasty_burger.innerText,
        tasty_burger_price: tasty_burger_price.innerText,

    }

    firebase.database().ref('order1').set(costomer_order1)
}

let order2 = () => {

    let tasty_cake = document.getElementById("tasty_cake")
    let tasty_cake_price = document.getElementById("tasty_cake_price")

    let costomer_order2 = {

        tasty_cake: tasty_cake.innerText,
        tasty_cake_price: tasty_cake_price.innerText
    }

    firebase.database().ref('order2').set(costomer_order2)
}
let order3 = () => {

    let tasty_sweets = document.getElementById("tasty_sweets")
    let tasty_sweets_price = document.getElementById("tasty_sweets_price")

    let costomer_order3 = {

        tasty_sweets: tasty_sweets.innerText,
        tasty_sweets_price: tasty_sweets_price.innerText
    }

    firebase.database().ref('order3').set(costomer_order3)
}
let order4 = () => {

    let pan_cake = document.getElementById("pan_cake")
    let pan_cake_price = document.getElementById("pan_cake_price")

    let costomer_order4 = {
        pan_cake: pan_cake.innerText,
        pan_cake_price: pan_cake_price.innerText

    }

    firebase.database().ref('order4').set(costomer_order4)
}
let order5 = () => {

    let cold_drink = document.getElementById("cold_drink")
    let cold_drink_price = document.getElementById("cold_drink_price")

    let costomer_order5 = {
        cold_drink: cold_drink.innerText,
        cold_drink_price: cold_drink_price.innerText

    }

    firebase.database().ref('order5').set(costomer_order5)
}

let order6 = () => {

    let cold_ice = document.getElementById("cold_ice")
    let cold_ice_price = document.getElementById("cold_ice_price")

    let costomer_order6 = {
        cold_ice: cold_ice.innerText,
        cold_ice_price: cold_ice_price.innerText

    }

    firebase.database().ref('order6').set(costomer_order6)
}
let order7 = () => {

    let godzilla = document.getElementById("godzilla")
    let godzilla_price = document.getElementById("godzilla_price")

    let costomer_order7 = {
        godzilla: godzilla.innerText,
        godzilla_price: godzilla_price.innerText

    }
    firebase.database().ref('order7').set(costomer_order7)
}
let order8 = () => {

    let chapli = document.getElementById("chapli")
    let chapli_price = document.getElementById("chapli_price")

    let costomer_order8 = {
        chapli: chapli.innerText,
        chapli_price: chapli_price.innerText

    }
    firebase.database().ref('order8').set(costomer_order8)
}
let order9 = () => {

    let bruster = document.getElementById("bruster")
    let bruster_price = document.getElementById("bruster_price")

    let costomer_order9 = {
        bruster: bruster.innerText,
        bruster_price: bruster_price.innerText

    }
    firebase.database().ref('order9').set(costomer_order9)
}
let order10 = () => {

    let soft_drink = document.getElementById("soft_drink")
    let soft_drink_price = document.getElementById("soft_drink_price")

    let costomer_order10 = {
        soft_drink: soft_drink.innerText,
        soft_drink_price: soft_drink_price.innerText

    }
    firebase.database().ref('order10').set(costomer_order10)
}
let order11 = () => {

    let cola = document.getElementById("cola")
    let cola_price = document.getElementById("cola_price")

    let costomer_order11 = {
        cola: cola.innerText,
        cola_price: cola_price.innerText

    }
    firebase.database().ref('order11').set(costomer_order11)
}
let order12 = () => {

    let mint = document.getElementById("mint")
    let mint_price = document.getElementById("mint_price")

    let costomer_order12 = {
        mint: mint.innerText,
        mint_price: mint_price.innerText

    }
    firebase.database().ref('order12').set(costomer_order12)
}
let order13 = () => {

    let choclate = document.getElementById("choclate")
    let choclate_price = document.getElementById("choclate_price")

    let costomer_order13 = {
        choclate: choclate.innerText,
        choclate_price: choclate_price.innerText

    }
    firebase.database().ref('order13').set(costomer_order13)
}
let order14 = () => {

    let pista = document.getElementById("pista")
    let pista_price = document.getElementById("pista_price")

    let costomer_order14 = {
        pista: pista.innerText,
        pista_price: pista_price.innerText

    }
    firebase.database().ref('order14').set(costomer_order14)
}
let order15 = () => {

    let tutti = document.getElementById("tutti")
    let tutti_price = document.getElementById("tutti_price")

    let costomer_order15 = {
        tutti: tutti.innerText,
        tutti_price: tutti_price.innerText

    }
    firebase.database().ref('order15').set(costomer_order15)
}
let order16 = () => {

    let beast = document.getElementById("beast")
    let beast_price = document.getElementById("beast_price")

    let costomer_order16 = {
        beast: beast.innerText,
        beast_price: beast_price.innerText
    }
    firebase.database().ref('order16').set(costomer_order16)
}
let order17 = () => {

    let cheese = document.getElementById("cheese")
    let cheese_price = document.getElementById("cheese_price")

    let costomer_order17 = {
        cheese: cheese.innerText,
        cheese_price: cheese_price.innerText
    }
    firebase.database().ref('order17').set(costomer_order17)
}
let order18 = () => {

    let bbq = document.getElementById("bbq")
    let bbq_price = document.getElementById("bbq_price")

    let costomer_order18 = {
        bbq: bbq.innerText,
        bbq_price: bbq_price.innerText
    }
    firebase.database().ref('order18').set(costomer_order18)
}