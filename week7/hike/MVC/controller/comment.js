  class Comments {
    constructor(type, commentElementId) {
      this.type = type;
      this.commentElementId = commentElementId;
      this.obj = new Comment(this.type);
    }
  
    addSubmitListener(name) {
      document.getElementById('commentSubmit').ontouchend = () => {
        this.model.addComment(name, document.getElementById('commentEntry').value);
        document.getElementById('comment-item').value = '';
        this.showCommentList(name);
      };
    }
    showCommentList(q = null) {
      try {
        const parent = document.getElementById(this.commentElementId);
        if (!parent) throw new Error('parent not found');
        if (parent.innerHTML === '') {
          parent.innerHTML = commentUI;
        }
        if (q !== null) {
          document.querySelector('.addComment').style.display = 'block';
          this.addSubmitListener(q);
        } else {
          document.querySelector('.addComment').style.display = 'none';
        }
        let comments = this.model.getComments(q);
        if (comments === null) {
          comments = [];
        }
        renderCommentList(parent.lastChild, comments);
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  export default Comments;