document.addEventListener('DOMContentLoaded', () => {
  const commentList = document.querySelector('#comment-list');
  const form = document.querySelector('#new-form');
  const deleteButton = document.querySelector('#delete-all');


  const handleForm = function (event) {
    event.preventDefault();
    const form = event.target;
    const nameInput = form.name.value;
    const contactInput = form.contact_details.value;
    const commentInput = form.comment.value;
    const text = `I want to read: ${nameInput} from the author: ${contactInput} that belongs to ${commentInput}`;

    const name = document.createElement('p');
    name.textContent = text;
    commentList.append(name);
    const contact = document.createElement('p');
    contact.textContent = text;
    commentList.append(contact);
    const comment = document.createElement('p');
    comment.textContent = text;
    commentList.append(comment);
    form.reset();

  }

  const resetForm = function (event) {
    commentList.innerHTML = "";
  }

  form.addEventListener('submit', handleForm);
  deleteButton.addEventListener('click', resetForm);
})
