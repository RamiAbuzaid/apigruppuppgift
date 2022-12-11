const fetchPromise = fetch(
  "https://blog-api-assignment.up.railway.app/posts"
);
const content = document.getElementById("apiContent");

content.innerHTML = "<p>Loading...";
fetchPromise
  .then((res) => {
    return res.json();
  })
  .then((posts) => {
    content.innerHTML = showApiContent(posts);
  });
function showApiContent(posts) {
  const apiContent = posts?.map((post) => `
  

  <div>
  <h2>${post.title}</h2>
  <h3>${post.author}</h3>
  <h4>${post.date}</h4>
  <p>${post.content.substring(1, 100)}</p>
  <a href="post.html">Read more</a> 
  <h6>${post.tags}</h6>
  </div>`
  
  );
  return `<ul>${apiContent}</ul>`;
}

