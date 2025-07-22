window.addEventListener("load", () => {
  const modal = document.getElementById('authModal');
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  openBtn.onclick = () => modal.classList.remove('hidden');
  closeBtn.onclick = () => modal.classList.add('hidden');

  loginTab.onclick = () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
  };

  registerTab.onclick = () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  };


  //const registerForm = document.getElementById('registerForm');
  const mensajeRegistro = document.getElementById('mensajeRegistro');

  registerForm.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();

    const inputs = registerForm.querySelectorAll('input, select');
    let valido = true;
    let mensaje = '';

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valido = false;
        mensaje = 'Por favor, completa todos los campos.';
      }
    });

    if (valido) {
      const password = registerForm.querySelector('input[type="password"]').value.trim();
      if (password.length < 6) {
        valido = false;
        mensaje = 'La contraseña debe tener al menos 6 caracteres.';
      }
    }

    if (valido) {
      mensajeRegistro.style.color = 'green';
      mensajeRegistro.textContent = 'Registro exitoso ✅';
      registerForm.reset();
    } else {
      mensajeRegistro.style.color = 'red';
      mensajeRegistro.textContent = mensaje;
    }
  });



  const mensajeLogin = document.getElementById('mensajeLogin');

  loginForm.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();

    if (!email || !password) {
      mensajeLogin.style.color = 'red';
      mensajeLogin.textContent = 'Correo y contraseña requeridos.';
      return;
    }

    if (password.length < 6) {
      mensajeLogin.style.color = 'red';
      mensajeLogin.textContent = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }

    mensajeLogin.style.color = 'green';
    mensajeLogin.textContent = 'Inicio de sesión exitoso ✅';

    loginForm.reset();
  });


})