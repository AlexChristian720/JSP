let now_playing=document.querySelector('.now-playing');
let track_art=document.querySelector('.track-art');
let track_artist=document.querySelector(".track-artist");
let track_name=document.querySelector(".track-name");

let prev_btn=document.querySelector('.prev-track');
let next_trc=document.querySelector('.next-track');
let plapause_track=document.querySelector('.playpause-track');

let curr_time=document.querySelector('.current-time');
let total_dur=document.querySelector('.total-duration');
let seek_slider=document.querySelector('.seek-slider');
let volume_slider=document.querySelector('.volume-slider');

let track_index=0;
let isplaying=false;
let updateTimer;

let curr_track=document.createElement('audio');

let track_list=[
    {
        name:"name-I",
        artist:"artist-I",
        image:"Image-I",
        path:"Path-I"
    },
    {
        name:"name-II",
        artist:"artist-II",
        image:"Image-II",
        path:"Path-II"
    },
    {
        name:"name-III",
        artist:"artist-III",
        image:"Image-III",
        path:"Path-III"
    },

];


function random_bg_color(){
    let red=Math.floor(Math.random()*256)+64;
    let blue=Math.floor(Math.random()*256)+64;
    let green=Math.floor(Math.random()*256)+64;

    bgColor="url("+ red+ ","+ blue+","+ green+","+")";

    document.body.style.backgroundImage=bgColor;
};

function load_track(track_index){
    setInterval(updateTimer);
    resetValues();
    curr_track.src=track_list[track_index].path;
    curr_track.load()

    now_playing.textContent="PLAYING " + (track_index+1)+ " OF " + track_list.length;
    track_name.textContent=track_list[track_index].name;
    track_artist.textContent=track_list[track_index].artist;
    track_art.style.backgroundImage="url("+ track_list[track_index].image+")";

    setInterval(seekUpdate,1000);
    curr_track.addEventListener("ended",nextTrack);
    random_bg_color();
};

loadTrack(track_index);


function resetValues(){
    curr_track.textContent="00:00";
    total_dur.textContent="00:00";
    prev_btn.innerHTML="<i class=fa fa-pause-circle fa-5x></i>";
}

function playpauseTrack(){
    if(!isplaying) playTrack();
    else pauseTrack();
}

function playTrack(){
    isplaying=true;
    curr_track.play();
    playpause_btn.innerHTML="<i class=fa fa-pause-circle fa-5x></i>";
}

function pauseTrack(){
    curr_track.pause();
    isplaying=false;
    playpause_btn.innerHTML="i class= fa fa-play-circle fa-5x></i>";
}

function nextTrack(){
    if(track_index< track_list.length-1){
        track_index+=1;
    }else{
        track_index=0;
        loadTrack(track_index);
        playTrack();
    }

}
