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
    const nameFilled = `Name: ${nameInput}`;
    const contactFilled = `Contact info: ${contactInput}`;
    const commentFilled = `${commentInput}`;

    const name = document.createElement('p');
    name.textContent = nameFilled;
    commentList.append(name);
    const contact = document.createElement('p');
    contact.textContent = contactFilled;
    commentList.append(contact);
    const comment = document.createElement('p');
    comment.textContent = commentFilled;
    commentList.append(comment);
    const breaker = document.createElement('hr');
    commentList.append(breaker);
    form.reset();

  }

  const resetForm = function (event) {
    commentList.innerHTML = "";
  }

  form.addEventListener('submit', handleForm);
  deleteButton.addEventListener('click', resetForm);
})
