const content = document.getElementById("postContent");

content.innerHTML = "<p>Loading...";
content.innerHTML = showApiContent(window.history.state);
function showApiContent(state) {
 
  console.log(state);
  if (state) {
    const { _id, title, date, content, author, tags } = state;
    const stateContent = `
    
      <div>
      <h2>${title}</h2>
      <h3>${author}</h3>
      <h4>${date}</h4>
      <p>${content}</p>  
      <h6>${tags}</h6>
      </div>`;
    return `<ul>${stateContent}</ul>`;
  }
}
