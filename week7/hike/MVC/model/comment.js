class Comment {
    constructor(type) {
      this.type = type;
      this.comments = readFromLS(this.type) || [];
    }

    getComments(theComment = null) {
      if (q === null) {
        return this.comments;
      } else {
        return this.comments.filter(element => element.name === theComment);
      }
    }
  
    addComment(postName, comment) {
      const newComment = {
        name: postName,
        comment: comment,
        date: new Date()
      };
      this.comments.push(newComment);
      writeToLocalStorage(this.type, this.comments);
    }
  }
  
  function writeToLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  
  function readFromLS(key) {
    return JSON.parse(window.localStorage.getItem(key));
  }

  function renderCommentList(element, comments) {
    element.innerHTML = '';
    comments.forEach(comment => {
      let item = document.createElement('li');
      item.innerHTML = `
        ${comment.name}: ${comment.comment}`;
        comment.appendChild(item);
    });
  }

  export default Comment;