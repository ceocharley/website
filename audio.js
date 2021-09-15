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
    audio.play();
    setTimeout(playLooped, audio.duration * 1000);
}

init([
    '1.mp3',
    '2.mp3',
    '3.mp3',
    '4.mp3',
    '5.mp3',
    '6.mp3',
    '7.mp3',
]);
