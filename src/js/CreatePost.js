// JSON API
const jsonAPI = 'https://api.npoint.io/eb8e1dce2b75fe4abcaa';

//JSON validator: https://jsonlint.com/

// Local JSON file
const jsonFile = 'src/js/posts.json';

fetch(jsonAPI)
    .then(response => response.json())
    .then(data => {
        const postsArray = data.posts;
        for (let i = 0; i < postsArray.length; i++) {
            const post = postsArray[i];
            createPost(post);
        }
    })
    
function createPost(post) {
  
    const postsContainer = document.getElementById("divMiddle");
    
    const postContainer = document.createElement('div');
    postContainer.classList.add('NewPost');

    const header = document.createElement('header');

    const logoLink = document.createElement('a');
    logoLink.classList.add('logo');
    const logoImage = document.createElement('img');
    logoImage.src = 'res/images/logo.png';
    logoImage.width = 25;
    logoImage.height = 25;
    logoImage.alt = 'Logo';
    logoLink.appendChild(logoImage);

    const dateElement = document.createElement('p');
    dateElement.classList.add('date');
    dateElement.textContent = post.createTime;

    header.appendChild(logoLink);
    header.appendChild(dateElement);

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    postContainer.appendChild(header);
    postContainer.appendChild(contentElement);

    if (post.image) {
        const imageContainer = document.createElement('div');

        const imageElement = document.createElement('img');
        imageElement.src = post.image;
        imageElement.alt = 'Post Image';

        imageElement.id = 'postImage';
        imageElement.style.margin = '10px';

        imageContainer.appendChild(imageElement);
        postContainer.appendChild(imageContainer);
    }

    postsContainer.appendChild(postContainer);
}
