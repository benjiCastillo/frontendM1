
function createTweet() {
    //obtenemos el valor del tweet por el Id del elemento y el valor
    var tweet = document.getElementById("tweet").value;
    // obtenemos al contenedor principal
    var containerMain = document.getElementById("container-main");
    // creamos el contenedor  tweet
    var tweetContainer = document.createElement("div");
    //creamos el atributo de class
    var tweetContainerAtribute = document.createAttribute("class");
    //le asignamos un valor al atributo 
    tweetContainerAtribute.value = "container-tweet";
    // asignamos el atributo class con valor al contenedor tweet
    tweetContainer.setAttributeNode(tweetContainerAtribute);
    // anadimos la estructura del tweet al contenedor de tweet
    tweetContainer.innerHTML = '<div class="tweet">' +
        '<div class="account">' +
        '<div class="profile-img">' +
        '</div>' +
        '<span class="name">Benji C</span>' +
        '<span class="userName">@Firebase</span>' +
        '<small class="time"> 6h</small>' +
        '</div>' +
        '<div class="tweet-text">' +
        ' <p>' + tweet + '</p>' +
        '</div>' +
        '</div>';
    //insertar antes
    firstTweet = containerMain.getElementsByClassName('container-tweet')[0];
    containerMain.insertBefore(tweetContainer, firstTweet);

    //insertar al ultimo
    // containerMain.appendChild(tweetContainer);
}









