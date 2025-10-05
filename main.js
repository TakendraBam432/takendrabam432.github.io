// Get posts from localStorage
function getPosts() {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  return posts;
}

// Save posts to localStorage
function savePosts(posts) {
  localStorage.setItem('posts', JSON.stringify(posts));
}

// Add post from Posts page
function addPostPage() {
  const title = document.getElementById('postTitle').value.trim();
  const image = document.getElementById('postImage').value.trim();
  
  if (!title || !image) {
    alert("Please provide both a title and an image URL!");
    return;
  }

  const posts = getPosts();
  posts.unshift({ title, image });
  savePosts(posts);

  displayPosts('postsContainer');
  document.getElementById('postTitle').value = '';
  document.getElementById('postImage').value = '';
}

// Display posts on any page
function displayPosts(containerId) {
  const posts = getPosts();
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  if(posts.length === 0){
    container.innerHTML = '<p style="text-align:center; color:#777;">No posts yet. Add some on the Posts page!</p>';
    return;
  }

  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <h3>${post.title}</h3>
    `;
    container.appendChild(postDiv);
  });
}
