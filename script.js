const data = [

];

const text = document.querySelector("h1")

const audio = new Audio()
const player = document.querySelector("#player")

let status = false
const playStop = document.querySelector("#stop-play")

playStop.onclick = function() {
    status = !status;
    
    if (status) {
        playStop.innerHTML = "stop"
        audio.play()
    }
    else {
        playStop.innerHTML = "start"
        audio.pause()
    }
}



const search = document.querySelector("#btnSearch")
const inpSearch = document.querySelector("#search")

inpSearch.addEventListener('keydown', srch)



function srch() {
    var searchValue = inpSearch.value
    let out = []
    
    for (i = 0; i < data.length; i++) {
        if (data[i].song.toLowerCase().includes(searchValue.toLowerCase()) || 
        data[i].song.toLowerCase().includes(searchValue.toLowerCase())) {
            out.push(data[i])
        }
    }

    render(out)

}


const content = document.querySelector("section")

const blocked = document.querySelector("#blocked")







const open = document.querySelector("#open").onclick = function() {
    blocked.style.display = "flex"
}
const close = document.querySelector("#close").onclick = function() {
    blocked.style.display = "none"
}



const art = document.getElementById("art")
const song = document.getElementById("song")
const file = document.getElementById("file")
const btn = document.getElementById("btn").onclick = function() {
    var img = prompt("URL картинки")
    var inpArt = art.value
    var inpSong = song.value
    var inpFile = file.files[0].name
    var randId = Math.random() * 10000;

    var mus = new Music(img,inpArt,inpSong,inpFile, randId)
    data.push(mus)
    render(data)
}



class Music {
    constructor(img, artist, song, src, id) {
        this.img = img,
        this.artist = artist,
        this.song = song,
        this.src = src,
        this.id = id
    }
}

var m = new Music(
    // "https://i.scdn.co/image/ab6761610000e5eb2a7d76bd32fbf2cebf0bc2ec",
    // "ssshhhiiittt!",
    // "Домой",
    // "./music/название.mp3",
    // 1
    "https://i.ytimg.com/vi/r-7hB8_z3aI/maxresdefault.jpg",
    "Макс Корж",
    "2 типа людей",
    "dw.mp3",
    Math.random() * 1000
)
data.push(m)

var m1 = new Music(
    // "https://i.scdn.co/image/ab6761610000e5eb2a7d76bd32fbf2cebf0bc2ec",
    // "ssshhhiiittt!",
    // "Домой",
    // "./music/название.mp3",
    // 1
    "https://catherineasquithgallery.com/uploads/posts/2021-02/1612914985_48-p-malinovii-zakat-fon-60.jpg",
    "Макс Корж",
    "Малиновый закат",
    "dq.mp3",
    Math.random() * 1000
)
data.push(m1)

var m12 = new Music(
    // "https://i.scdn.co/image/ab6761610000e5eb2a7d76bd32fbf2cebf0bc2ec",
    // "ssshhhiiittt!",
    // "Домой",
    // "./music/название.mp3",
    // 1
    "https://avatars.mds.yandex.net/i?id=83abad226c6caba4eb87efad950fb458-5882901-images-thumbs&n=13",
    "Miyagi & Andy Panda, Mav-d",
    "Marmalade",
    "ds.mp3",
    Math.random() * 1000
)
data.push(m12)

var m123 = new Music(
    // "https://i.scdn.co/image/ab6761610000e5eb2a7d76bd32fbf2cebf0bc2ec",
    // "ssshhhiiittt!",
    // "Домой",
    // "./music/название.mp3",
    // 1
    "https://i.ytimg.com/vi/ocFy5ERHSZA/maxresdefault.jpg",
    "Tones and I",
    "Dance Monkey",
    "da.mp3",
    Math.random() * 1000
)
data.push(m123)


function play(id) {
    for (i = 0; i < data.length; i++) {
        if (id == data[i].id) {
            audio.src = data[i].src
            text.innerHTML = `${data[i]. artist} - ${data[i].song}`
            player.style.background = `url(${data[i].img}) no-repeat center`
            player.style.backgroundSize = `cover`
        }
    }    
}


function render(arr) {
        content.innerHTML = ``
        for (i = 0; i < arr.length; i++) {
            content.innerHTML += `
        <div class="elem" onclick=play(${arr[i].id})>
            <img width = "50px" height  = "50px" src=${arr[i].img} alt="">
            <div class = "text">
                <h3>${arr[i].artist}</h3>
                <h4>${arr[i].song}</h4>
            </div>
        </div>
            `
        }
}
render(data)




