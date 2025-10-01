// 1. Seleccionar elementos del DOM
const input = document.getElementById("pokemonInput");
const buscarBtn = document.getElementById("searchBtn");
const pokedex = document.getElementById("pokedex");
const modoBtn = document.getElementById("themeBtn");

// 2. Evento para buscar Pokémon
// ❓ Pregunta: ¿A qué elemento debemos agregar el evento "click" para iniciar la búsqueda?
// ❓ Pregunta: ¿Qué valor debemos obtener del input para pasarlo a la API?

/* COMPLETAR: agregar el evento al botón de búsqueda */ ("click", () => {
  const inputValor =pokemonInput.inputValor.toLowerCase().trim();
/* COMPLETAR: obtener el valor del input y pasarlo a minúsculas */;
  if (inputValor) {
    // ❓ Pregunta: ¿Qué hace fetch en este contexto? Inicia un petición http get a la Api 
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValor}`)
      .then(response => {
        if (!response.ok) {
       throw new Error('Pokémon no encontrado o error de API'); }

        // ❓ Pregunta: ¿Qué debemos hacer con la respuesta antes de usarla?
       // Debemos pasar la respuesta a Json para usarla 
        return response.json(); /* COMPLETAR: convertir respuesta a JSON */;
      })
      .then(data => {
        // ❓ Pregunta: ¿Qué propiedades de "data" necesitamos para mostrar el Pokémon?
        // R: Necesitamos data.name, data.sprites.front_default, data.height y data.weight.
            const heightInMeters = (data.height / 10).toFixed(1); // de decímetros a metros
            const weightInKg = (data.weight / 10).toFixed(1);     // de hectogramos a kilogramos
        pokedex.innerHTML = `
          <h2>${data.name.toUpperCase}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p><strong>Altura:</strong> ${heightInMaters}</p>
          <p><strong>Peso:</strong> ${weightInKg}</p>
        `;
      })
      .catch(error => {
        // ❓ Pregunta: ¿Por qué es importante manejar errores aquí?
        // Es importante para poder avisarle al usuario cuando la petición falla 
        console.error('Error:', error);
        pokedex.innerHTML = `<p class="error">⚠️ Pokémon no encontrado</p>`;
      });
    } else {
        // Caso: Input vacío
        pokedexDisplay.innerHTML = `<p class="error">Por favor, ingrese un nombre o ID.</p>`;
    }
});
  
// 3. Botón de modo oscuro/claro

// // ? Pregunta: ¿Qué clase debemos alternar en el body para cambiar entre temas?
// // R: Generalmente, una clase como 'dark-mode' o simplemente 'dark', 
// // mientras que la ausencia de esta clase implica el modo claro ('light').
// // Usaremos 'dark' y 'light'.

// // ? Pregunta: ¿Cómo podemos actualizar el texto del botón según el modo activo?
// // R: Usamos una sentencia 'if/else' y verificamos qué clase tiene el body.

const themeBtn = document.getElementById('mode-toggle'); // Asumiendo este ID
const body = document.body;

themeBtn.addEventListener("click", () => {
    
    // COMPLETA LA LÓGICA DE ALTERNANCIA (TOGGLE)
    
    // Alternamos entre las clases "dark" y "light" en el body.
    body.classList.toggle('dark');
    body.classList.toggle('light');

    // Comprobamos el estado actual para actualizar el texto del botón
    if (body.classList.contains('dark')) {
        // El modo oscuro está activo, el botón debe ofrecer el cambio al modo claro.
        themeBtn.textContent = "Cambiar a modo claro";
    } else {
        // El modo claro está activo, el botón debe ofrecer el cambio al modo oscuro.
        themeBtn.textContent = "Cambiar a modo oscuro";
    }
});

// // Iniciamos con tema claro por defecto
// COMPLETA: agregar la clase inicial "light" al body
body.classList.add('light'); 
themeBtn.textContent = "Cambiar a modo oscuro"; // Texto inicial del botón

// Nota: Asegúrate de que tu CSS define los estilos para las clases .light y .dark 
// para que el cambio sea visible.

// Iniciamos con tema claro por defecto
/* COMPLETAR: agregar la clase inicial "light" al body */
