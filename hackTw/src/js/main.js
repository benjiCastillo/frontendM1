

var store = {
    get:function(key){
        var data = localStorage.getItem(key);
        if(data === undefined){
            return null;
        }else{
            return JSON.parse(data);
        }
    },
    set:function(key, tweet){
        var data = this.get(key);
        var tweets = [];
        if(data){
            data.push(tweet);
            return localStorage.setItem(key,Json.stringify(data));
        }else{
            tweets.push(tweet);
            return localStorage.setItem(key, JSON.stringify(tweets));
        }
    },
    remove:function(key){
        return localStorage.removeItem(key);
    }
}

this.render();


function addTweet() {
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

function render(){
    var listTweet = document.getElementById("listTweets");
    var tweets = this.store.get("tweets");
    if(tweets){
        listTweet.innerHTML = "";
        for (var index = 0; index < tweets.length; index++) {
            var tweet = tweets[index];
            listTweet.innerHTML +='<div class="container-tweet">'+
            '<div class="tweet">' +
            '<div class="account">' +
            '<div class="profile-img">' +
            '</div>' +
            '<span class="name">'+tweet.name+'</span>' +
            '<span class="userName">'+tweet.username+'</span>' +
            '<small class="time">'+tweet.time+'</small>' +
            '</div>' +
            '<div class="tweet-text">' +
            ' <p>' + tweet.tweet + '</p>' +
            '</div>' +
            '</div>'+
            '</div>';
        }

    }else{
        listTweet.innerHTML = "<p class='empty-tweets'> : ( </p>";
    }

}

function createTweet(){
    var tweetInput = document.getElementById("tweet");
    var tweet = {
        name:"Benji Castillo",
        username:"@benjiCastilloE",
        time:new Date(),
        tweet:tweetInput.value
    }
    this.store.set("tweets",tweet);
    tweetInput.value = "";
    this.render();
}





