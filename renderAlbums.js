// used three nested loops, first to loop over the artists...in this case there was only one artist, but if wanted to add another artist this would save us time
    // uncomment the second artist below to see if it works!
// the second loop for each album of the artist
// the third loop is for each song in each album
function renderAlbums(albums) {
    let newArtist = '';
    for (let index = 0; index < albums.length; index++){
        let newAlbum = '';
        for (let albumIndex = 0; albumIndex < albums[index].albums.length; albumIndex++){
            let newSong = '';
            for (let songIndex = 0; songIndex < albums[index].albums[albumIndex].songs.length; songIndex++){
                newSong += `
                <div class="song">
                    <div class="row align-items-center justify-content-between">
                        <div class="songTitle playButt d-flex pl-3">
                            <img src="play-button.png" style="width: 30px; height: auto;">
                            <p class="mt-1 pl-2" style="margin: 0;">${albums[index].albums[albumIndex].songs[songIndex].title}</p>
                        </div>
                        <div class="songLength mr-4">
                            ${albums[index].albums[albumIndex].songs[songIndex].length}
                        </div>
                    </div>
                    <hr>
                </div>
                `
            }
            newAlbum += `
            <div class="mt-5">
                <div class="row align-items-end">
                    <img src="${albums[index].albums[albumIndex].albumCover}" 
                        class="align-left pl-3 mr-3" 
                        style="width: 100px; height: auto;">
                    <p style="margin: 0; font-size: 20px;">${albums[index].albums[albumIndex].title}</p>
                </div>
                <hr>
                ${newSong}
            </div>
            `
        }
        newArtist += `
            <div class="artistCont col mt-5">
                <div class="row">
                    <p class="h1 pl-3">${albums[index].artist.toUpperCase()}</p>
                </div>
                <hr style="margin: 0 0 10px 0;">
                ${newAlbum}
            </div>
        `;
    }
    

    return `
        <div class="text-center mt-5 container">
            ${newArtist}
        </div>
    `
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
        ,{
            artist: "Tool",
            albums: [
                {
                    title: "Fear Inoculum",
                    albumCover: "https://upload.wikimedia.org/wikipedia/en/d/d6/Tool_-_Fear_Inoculum.png",
                    songs: [
                        {
                            title: "Fear Inoculum",
                            length: "10:20"
                        },
                        {
                            title: "Pneuma",
                            length: "11:53"
                        },
                        {
                            title: "Invincible",
                            length: "12:44"
                        },
                        {
                            title: "Descending",
                            length: "13:37"
                        },
                        {
                            title: "Culling Voices",
                            length: "10:05"
                        },
                        {
                            title: "Chocolate Chip Trip",
                            length: "4:48"
                        },
                        {
                            title: "7empest",
                            length: "15:43"
                        }
                    ]

                },
                {
                    title: "10,000 Days",
                    albumCover: "https://upload.wikimedia.org/wikipedia/en/f/f8/10000Days.jpg",
                    songs: [
                        {
                            title: "Vicarious",
                            length: "7:06"
                        },
                        {
                            title: "Jambi",
                            length: "7:28"
                        },
                        {
                            title: "Wings for Marie (Pt 1)",
                            length: "6:11"
                        },
                        {
                            title: "10,000 Days (Wings Pt 2)",
                            length: "11:13"
                        },
                        {
                            title: "The Pot",
                            length: "6:21"
                        },
                        {
                            title: "Lipan Conjuring",
                            length: "1:11"
                        },
                        {
                            title: "Lost keys (Blame Hofmann)",
                            length: "3:46"
                        },
                        {
                            title: "Rosetta Stoned",
                            length: "11:11"
                        },
                        {
                            title: "Intension",
                            length: "7:21"
                        },
                        {
                            title: "Right in Two",
                            length: "8:55"
                        },
                        {
                            title: "Viginiti Tres",
                            length: "5:02"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}