
function renderTweets(tweets) {
    let letsTweet = '';
    let checkCircle;
    for (let index = 0; index < tweets.length; index++){
        
        // check circle logic
        if (tweets[index].user.isVerified){
            checkCircle = "width: 8px; height: auto;"
        } else{
            checkCircle = "display: none;"
        }

        letsTweet += `
        <div class="tweet m-5" style="background-color: rgb(230, 230, 230)">
            <div class="row align-items-start">
                <img class="col-1" src="${tweets[index].user.profilePic}">
                <div class="col-4">
                    <div class="row align-items-center">
                        <p class="font-weight-bold" style="margin: 0;">${tweets[index].user.username}</p>
                        <img src="./twitterIcons/check-circle.svg" style=${checkCircle}>
                    </div>
                    <div class="row align-items-center">
                        ${tweets[index].user.handle}
                    </div>
                </div>
            </div>
            <div class="row align-items-start">
                <div class="col-6">
                    <p class="font-weight-bold " style="margin: 0; ">${tweets[index].text}</p>
                    <hr class="">
                </div>
            </div>
            <div class="row ml-1 justify-content-start">
                <div class="col-2">
                    <div class="row  mr-3 align-items-center">
                        <img src="./twitterIcons/message-circle.svg">
                        <p style="margin: 0; ">${tweets[index].replies}</p>
                    </div>
                </div>
                <div class="col-2">
                    <div class="row  mr-3 align-items-center">
                        <img src="./twitterIcons/repeat.svg">
                        <p style="margin: 0; ">${tweets[index].retweets}</p>
                    </div>
                </div>
                <div class="col-2">
                    <div class="row  mr-3 align-items-center">
                        <img src="./twitterIcons/heart.svg">
                        <p style="margin: 0; ">${tweets[index].likes}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    
    return `
        <div class="mt-5">
            ${letsTweet}
        </div>
    `
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}