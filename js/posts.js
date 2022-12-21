const apiContent = document.getElementById("apiContent");

let apiData;

const POSTS_URL = "https:blog-api-assignment.up.railway.app/posts";

function showApiContent() {
  const content = apiData?.map(
    (post) => `

   <div>
   <h2>${post.title}</h2>
   <h3>${post.author}</h3>
   <h4>${post.date}</h4>
   <p>${post.content.substring(1, 100) + "..."}</p>
   <h6>${post.tags}</h6>
   <a class="read-more" href="post.html?id=${post._id}" data-id='${
      post._id
    }'> read more...</a>
   </br>
   </div>`
  );
  return `<ul>${content}</ul>`;
}

const getData = async () => {
  try {
    const res = await fetch(POSTS_URL);
    const data = await res.json();
    apiData = data;
    console.log(apiData.map((s) => s));

    if (apiData) {
      apiContent.innerHTML = showApiContent();
    }
  } catch (e) {
    console.warn(e);
  }
};
