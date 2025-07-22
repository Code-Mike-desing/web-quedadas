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


  const mensajeRegistro = document.getElementById('mensajeRegistro');


  registerForm.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();

    const inputs = registerForm.querySelectorAll('input, select');
    let valido = true;
    let mensaje = '';

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('error');
        input.classList.remove('success');
        valido = false;
        mensaje = 'Por favor, completa todos los campos.';
      } else {
        input.classList.remove('error');
        input.classList.add('success');
      }
    });

    const password = registerForm.querySelector('input[type="password"]');
    if (password.value.trim().length < 6) {
      password.classList.add('error');
      password.classList.remove('success');
      valido = false;
      mensaje = 'La contraseña debe tener al menos 6 caracteres.';
    }

    if (valido) {
      mensajeRegistro.style.color = 'green';
      mensajeRegistro.textContent = 'Registro exitoso ✅';
      registerForm.reset();
      inputs.forEach(input => input.classList.remove('success'));
    } else {
      mensajeRegistro.style.color = 'red';
      mensajeRegistro.textContent = mensaje;
    }
  });



  const mensajeLogin = document.getElementById('mensajeLogin');


  loginForm.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();

    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    let valido = true;
    let mensaje = '';

    if (!emailInput.value.trim()) {
      emailInput.classList.add('error');
      emailInput.classList.remove('success');
      valido = false;
      mensaje = 'Correo requerido.';
    } else {
      emailInput.classList.remove('error');
      emailInput.classList.add('success');
    }

    if (!passwordInput.value.trim()) {
      passwordInput.classList.add('error');
      passwordInput.classList.remove('success');
      valido = false;
      mensaje = 'Contraseña requerida.';
    } else if (passwordInput.value.trim().length < 6) {
      passwordInput.classList.add('error');
      passwordInput.classList.remove('success');
      valido = false;
      mensaje = 'La contraseña debe tener al menos 6 caracteres.';
    } else {
      passwordInput.classList.remove('error');
      passwordInput.classList.add('success');
    }

    if (valido) {
      mensajeLogin.style.color = 'green';
      mensajeLogin.textContent = 'Inicio de sesión exitoso ✅';
      loginForm.reset();
      [emailInput, passwordInput].forEach(input => input.classList.remove('success'));
    } else {
      mensajeLogin.style.color = 'red';
      mensajeLogin.textContent = mensaje;
    }
  });




})