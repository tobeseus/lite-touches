/* Lite Touches
 * Copyright LiteTouches 
 * Free for both personal and commercial use*/

document.addEventListener('DOMContentLoaded', function() {
  // navbar
  const navToggle = document.getElementsByClassName('nav-toggle')[0]
  const navLinks = document.getElementsByClassName('nav-links')[0]

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('toggle');
  });


  // file input
  const fileBtn = document.getElementsByClassName('file-btn');
  const fileDisplay = document.getElementsByClassName('file-display');

  for (i = 0; i < fileBtn.length; i++) {
    fileBtn[i].addEventListener('change',
      function() {
        let key = Object.keys(fileBtn).find(key => fileBtn[key] === this);

        if (this.files.length > 1) {
          return fileDisplay[key].textContent = `${this.files.length} files`;
        }
        fileDisplay[key].textContent = this.files[0].name;
      });
  }

  // modal
  const modal = document.getElementsByClassName("modal");
  const modalBtn = document.getElementsByClassName("modal-btn");
  const modalClose = document.getElementsByClassName("modal-close");

  for (i = 0; i < modal.length; i++) {
    modalBtn[i].onclick = function() {
      let modalBtnKey = Object.keys(modalBtn).find(modalBtnKey => modalBtn[modalBtnKey] === this);
      modal[modalBtnKey].style.display = "block";
    }

    modalClose[i].onclick = function() {
      let modalCloseKey = Object.keys(modalClose).find(modalCloseKey => modalClose[modalCloseKey] === this);
      modal[modalCloseKey].style.display = "none";
    }

    modal[i].onclick = function() {
      let modalKey = Object.keys(modal).find(modalKey => modal[modalKey] === this);
      window.onclick = function(event) {
        if (event.target == modal[modalKey]) {
          modal[modalKey].style.display = "none";
        }
      }
    }
  }
});
