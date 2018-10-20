document.body.onload = createTweet;
function createTweet() {
    var containerMain = document.getElementById("container-main");
    
    var tweetContainer = document.createElement("div");
    var tweetContainerAtribute = document.createAttribute("class");
    tweetContainerAtribute.value = "container-tweet";
    tweetContainer.setAttributeNode(tweetContainerAtribute);

    tweetContainer.innerHTML = '<div class="tweet">' +
        '<div class="account">' +
        '<div class="profile-img">' +
        '</div>' +
        '<span class="name">Benji C</span>' +
        '<span class="userName">@Firebase</span>' +
        '<small class="time"> 6h</small>' +
        '</div>' +
        '<div class="tweet-text">' +
        ' <p>Hola' +
        '</p>' +
        '</div>' +
        '</div>';
    //insertar antes
    firstTweet = containerMain.getElementsByClassName('container-tweet')[0];
    containerMain.insertBefore(tweetContainer, firstTweet);

    //insertar al ultimo
    // containerMain.appendChild(tweetContainer);
}