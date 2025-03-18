
let amigos = [];


function agregarAmigo() {
  
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); 

  
  if (!nombre) {
    alert("Por favor, inserta un nombre válido.");
    return;
  }

  
  amigos.push(nombre);

  
  input.value = "";

  
  mostrarLista();
}


function mostrarLista() {
  const lista = document.getElementById("listaAmigos");

 
  lista.innerHTML = "";

  
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}


function sortearAmigo() {
  
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  
  const amigoSorteado = amigos[indiceAleatorio];

  
  const resultado = document.getElementById("resultado");

 
  resultado.innerHTML = "";

  
  const li = document.createElement("li");
  li.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;

  
  resultado.appendChild(li);
}
