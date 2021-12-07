// credit goes to that one guy on stack overflow, thank you bro.

var collection=[];
var loadedIndex=0;

function init(audios) {
    for(var i=0;i<audios.length;i++) {
        var audio = new Audio(audios[i]);
        collection.push(audio);
        buffer(audio);
    }
}

function buffer(audio) {
    if(audio.readyState==4)return loaded();
    setTimeout(function(){buffer(audio)},100);
}


function loaded() {
    loadedIndex++;
    if(collection.length==loadedIndex)playLooped();
}


async function playLooped() {
    let audio = Math.floor(Math.random() * (collection.length));
    audio = collection[audio];
    // dont play audio until user has interacted with page
    await new Promise(resolve => {
        document.addEventListener('click', resolve);
    });
    audio.play();
    setTimeout(playLooped, audio.duration * 1000);
}

init([
    '/assets/audio/1.mp3', // fell in luv -carti
    '/assets/audio/2.mp3', // momement -vierre cloud
    '/assets/audio/3.mp3', // new tank -carti
    '/assets/audio/4.mp3', // pain -pink panthers
    '/assets/audio/5.mp3', // rockstar made -carti
    '/assets/audio/6.mp3', // vamp anthem -carti
    '/assets/audio/7.mp3', // wokeuplikethis* -carti
    '/assets/audio/8.mp3', // xo tour life -uzi
]);
