const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let html = ""

const mainEl = document.getElementById('main')

    posts.forEach(post => {
       html = `<section class="section-1 title-box">
            <img class="avatar" src="${post.avatar}" alt="icon of Vincent Van Gogh">

            <div class="title-item">
                <p class="title">${post.name}</p>
                <p class="location">${post.location}</p>
            </div>

        </section>
           
        <section class="section-2">
          <img class="section2-image" src="${post.post}" alt="Vincent Van Gogh">
        </section>
    
        <section class="section-3">
            <figure class="social-box">
                <img class="icon" src="images/icon-heart.png" alt="">
                <img class="icon" src="images/icon-comment.png" alt="">
                <img class="icon" src="images/icon-dm.png" alt="">
            </figure>
            <strong><h3>${post.likes} likes</h3></strong>
            <p><strong><span>${post.username}</span></strong>${post.comment}</p>

        </section>`
        mainEl.innerHTML += html
    
    } )










