console.log("welcome to spotify");
//Initialize the variable
let songIndex=0;
let audioElement = new Audio('asserts/songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let masterSongName=document.getElementById('masterSongName');
let gif=document.getElementById("gif");
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName : "Let me Love You" , filePath: "asserts/songs/1.mp3",coverPath : "asserts/covers/1.jpg"},
    {songName : "Despacito" , filePath: "asserts/songs/2.mp3",coverPath : "asserts/covers/2.jpg"},
    {songName : "Memories" , filePath: "asserts/songs/3.mp3",coverPath : "asserts/covers/3.jpg"},
    {songName : "Arcade" , filePath: "asserts/songs/4.mp3",coverPath : "asserts/covers/4.jpg"},
    {songName : "Love me Like you do" , filePath: "asserts/songs/5.mp3",coverPath : "asserts/covers/5.jpg"},
    {songName : "Safari" , filePath: "asserts/songs/6.mp3",coverPath : "asserts/covers/6.jpg"},
    {songName : "Kalyana Malai" , filePath: "asserts/songs/7.mp3",coverPath : "asserts/covers/7.jpg"},
    {songName : "Bella Ciao" , filePath: "asserts/songs/8.mp3",coverPath : "asserts/covers/8.jpg"},
    {songName : "WallerMan" , filePath: "asserts/songs/9.mp3",coverPath : "asserts/covers/9.jpg"},
    {songName : "Bad Boy" , filePath: "asserts/songs/10.mp3",coverPath : "asserts/covers/10.jpg"}
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//event listeners
//handle playpause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeUpdate');
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=Math.floor((myProgressBar.value*audioElement.duration)/100);
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        masterSongName.innerText=songs[songIndex-1].songName;
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`asserts/songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex==10) songIndex=1;
    else songIndex+=1
    audioElement.src=`asserts/songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText=songs[songIndex-1].songName;
});
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1) songIndex=10;
    else songIndex-=1
    audioElement.src=`asserts/songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText=songs[songIndex-1].songName;
});