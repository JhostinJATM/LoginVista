const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');

const loginForm = document.getElementById('authForm');
const registerForm = document.getElementById('registerForm');
const forgotForm = document.getElementById('forgotForm');

const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLoginFromRegister');
const showForgotLink = document.getElementById('showForgot');
const showLoginFromForgotLink = document.getElementById('showLoginFromForgot');
const showRegisterFromForgotLink = document.getElementById('showRegisterFromForgot');

const togglePassBtns = document.querySelectorAll('.toggle-pass');

function showForm(formToShow) {
  [loginForm, registerForm, forgotForm].forEach(f => {
    f.classList.remove('active');
  });
  formToShow.classList.add('active');
}

function togglePanelsForForm(formToShow) {
  if (formToShow === registerForm) {
    leftPanel.classList.add('swap');
    rightPanel.classList.add('swap');
  } else if (formToShow === loginForm) {
    leftPanel.classList.remove('swap');
    rightPanel.classList.remove('swap');
  }
}

showRegisterLink.addEventListener('click', e => {
  e.preventDefault();
  showForm(registerForm);
  togglePanelsForForm(registerForm);
});

showLoginLink.addEventListener('click', e => {
  e.preventDefault();
  showForm(loginForm);
  togglePanelsForForm(loginForm);
});

showForgotLink.addEventListener('click', e => {
  e.preventDefault();
  showForm(forgotForm);
});

showLoginFromForgotLink.addEventListener('click', e => {
  e.preventDefault();
  showForm(loginForm);
  togglePanelsForForm(loginForm);
});

showRegisterFromForgotLink.addEventListener('click', e => {
  e.preventDefault();
  showForm(registerForm);
  togglePanelsForForm(registerForm);
});

togglePassBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    if (!targetId) return;

    const input = document.getElementById(targetId);
    if (!input) return;

    if (input.type === 'password') {
      input.type = 'text';
      btn.textContent = 'Ocultar';
    } else {
      input.type = 'password';
      btn.textContent = 'Mostrar';
    }
  });
});
