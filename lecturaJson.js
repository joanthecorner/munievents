const fetchUsuarios = async () => {
    const response = await fetch('usuarios.json');
    const usuarios = await response.json();
    return usuarios;
  };
  