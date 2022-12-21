const singlePost = document.getElementById("singlePost");
const POST_URL = "https:blog-api-assignment.up.railway.app/posts/";

let urlParams = new URLSearchParams(window.location.search);
const clickedId = urlParams.get("id");

let apiData;

function showApiContent() {
  const { title, author, date, content, tags } = apiData;

  const post = `

   <div>
   <h2>${title}</h2>
   <h3>${author}</h3>
   <h4>${date}</h4>
   <p>${content}</p>
   <h6>${tags}</h6>
   </br>
   </div>`;
  return `<ul>${post}</ul>`;
}

const getPost = async () => {
  try {
    const res = await fetch(`${POST_URL}/${clickedId}`);
    const data = await res.json();
    console.log(data);
    apiData = data;

    if (apiData) {
      singlePost.innerHTML = showApiContent();
    }
  } catch (e) {
    console.warn(e);
  }
};

getPost();
