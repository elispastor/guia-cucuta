// ===== SCRIPT PRINCIPAL DE LA GUÍA DIGITAL =====

let negocios = [];
let categoriaActual = "todos";

// 1. Cargar los negocios desde el archivo JSON
async function cargarNegocios() {
  try {
    const respuesta = await fetch('negocios.json');
    negocios = await respuesta.json();
    generarFiltros();
    mostrarNegocios("todos");
  } catch (error) {
    console.error("Error cargando los negocios:", error);
    document.getElementById("lista-negocios").innerHTML = '<div class="col-span-2 text-center py-8 text-gray-400">Error al cargar el directorio. Recarga la página.</div>';
  }
}

// 2. Mostrar los negocios en el directorio
function mostrarNegocios(categoria) {
  const contenedor = document.getElementById("lista-negocios");
  if (!contenedor) return;

  const filtrados = categoria === "todos" ? negocios : negocios.filter(n => n.categoria === categoria);
  
  if (filtrados.length === 0) {
    contenedor.innerHTML = '<div class="col-span-2 text-center py-8 text-gray-400">Aún no hay negocios en esta categoría.</div>';
    return;
  }

  contenedor.innerHTML = filtrados.map(n => {
    // Si el negocio tiene teléfono, creamos el botón de WhatsApp
    let botonWhatsApp = '';
    if (n.telefono && n.telefono.trim() !== "") {
      const linkWhatsApp = `https://wa.me/${n.telefono.replace(/\s+/g, '')}?text=Hola,%20vi%20tu%20negocio%20en%20la%20Guía%20Digital%20de%20Cúcuta`;
      botonWhatsApp = `<a href="${linkWhatsApp}" target="_blank" class="btn btn-wsp">💬 WhatsApp</a>`;
    }

    return `
      <div class="taller-card">
        <h3 class="text-xl font-bold text-[#fbbf24]">
          <a href="${n.link || n.url}" target="_blank" style="text-decoration: none; color: inherit;">${n.nombre}</a>
        </h3>
        <p class="text-sm text-gray-300 mb-3">${obtenerNombreCategoria(n.categoria)}</p>
        <div class="flex gap-3 flex-wrap">
          <a href="${n.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sitio">🔗 Ver sitio</a>
          ${botonWhatsApp}
        </div>
      </div>
    `;
  }).join("");
}

// 3. Categorías y filtros
function obtenerNombreCategoria(catId) {
  const categorias = [
    { id: "todos", nombre: "🔧 Todos" },
    { id: "ferreterias", nombre: "🏪 Ferreterías" },
    { id: "mecanica", nombre: "🚗 Mecánica" },
    { id: "motores", nombre: "⚙️ Motores" },
    { id: "llantas", nombre: "🛞 Llantas" },
    { id: "herreria", nombre: "🔩 Herrería" },
    { id: "tapiceria", nombre: "🪑 Tapicería" },
    { id: "accesorios", nombre: "🔧 Accesorios" },
    { id: "acarreos", nombre: "🚛 Acarreos" },
    { id: "puertas", nombre: "🚪 Puertas" },
    { id: "celulares", nombre: "📱 Celulares" },
    { id: "restaurantes", nombre: "🍽️ Restaurantes" },
    { id: "maquinas", nombre: "🧵 Máquinas de coser" },
    { id: "hoteles", nombre: "🏨 Hoteles" },
    { id: "belleza", nombre: "💇 Belleza" },
    { id: "bicicletas", nombre: "🚴 Bicicletas" },
    { id: "refrigeracion", nombre: "❄️ Refrigeración" },
    { id: "hidraulica", nombre: "💧 Hidráulica" },
    { id: "comercializadoras", nombre: "🏪 Comercializadoras" },
    { id: "eventos", nombre: "🎵 Eventos y Música" }
  ];
  const cat = categorias.find(c => c.id === catId);
  return cat ? cat.nombre : catId;
}

function generarFiltros() {
  const categorias = [
    { id: "todos", nombre: "🔧 Todos" },
    { id: "ferreterias", nombre: "🏪 Ferreterías" },
    { id: "mecanica", nombre: "🚗 Mecánica" },
    { id: "motores", nombre: "⚙️ Motores" },
    { id: "llantas", nombre: "🛞 Llantas" },
    { id: "herreria", nombre: "🔩 Herrería" },
    { id: "tapiceria", nombre: "🪑 Tapicería" },
    { id: "accesorios", nombre: "🔧 Accesorios" },
    { id: "acarreos", nombre: "🚛 Acarreos" },
    { id: "puertas", nombre: "🚪 Puertas" },
    { id: "celulares", nombre: "📱 Celulares" },
    { id: "restaurantes", nombre: "🍽️ Restaurantes" },
    { id: "maquinas", nombre: "🧵 Máquinas de coser" },
    { id: "hoteles", nombre: "🏨 Hoteles" },
    { id: "belleza", nombre: "💇 Belleza" },
    { id: "bicicletas", nombre: "🚴 Bicicletas" },
    { id: "refrigeracion", nombre: "❄️ Refrigeración" },
    { id: "hidraulica", nombre: "💧 Hidráulica" },
    { id: "comercializadoras", nombre: "🏪 Comercializadoras" },
    { id: "eventos", nombre: "🎵 Eventos y Música" }
  ];
  
  const contenedor = document.getElementById("filtros");
  if (!contenedor) return;

  contenedor.innerHTML = categorias.map(cat => `<button class="btn-categoria ${cat.id === categoriaActual ? 'activo' : ''}" data-categoria="${cat.id}">${cat.nombre}</button>`).join("");
  
  document.querySelectorAll(".btn-categoria").forEach(btn => {
    btn.addEventListener("click", () => {
      categoriaActual = btn.dataset.categoria;
      mostrarNegocios(categoriaActual);
      document.querySelectorAll(".btn-categoria").forEach(b => b.classList.remove("activo"));
      btn.classList.add("activo");
    });
  });
}

// 4. Resto de la página (Menú, Carrusel de promoción, Formularios, etc.)
document.getElementById('menu-btn')?.addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('open');
});
document.querySelectorAll('#mobile-menu a, #mobile-menu button').forEach(el => {
  el.addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('open'));
});

// CARRUSEL DE PROMOCIÓN (EL DE 3 DIAPOSITIVAS)
const carruselInner = document.getElementById('carruselInner');
const slides = document.querySelectorAll('.carrusel-slide');
const totalSlides = slides.length;
let currentIndex = 0;

function updateCarrusel() {
  if (!carruselInner) return;
  carruselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  document.querySelectorAll('.indicator').forEach((ind, i) => {
    i === currentIndex ? ind.classList.add('active') : ind.classList.remove('active');
  });
}
function nextSlide() { currentIndex = (currentIndex + 1) % totalSlides; updateCarrusel(); }
function prevSlide() { currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; updateCarrusel(); }

const indicadores = document.getElementById('indicadores');
if (indicadores) {
  for (let i = 0; i < totalSlides; i++) {
    const ind = document.createElement('span');
    ind.classList.add('indicator');
    if (i === 0) ind.classList.add('active');
    ind.onclick = () => { currentIndex = i; updateCarrusel(); };
    indicadores.appendChild(ind);
  }
}
document.getElementById('prevBtn')?.addEventListener('click', prevSlide);
document.getElementById('nextBtn')?.addEventListener('click', nextSlide);
setInterval(nextSlide, 5000);

// COMPARTIR
const NUEVA_URL = 'https://cucuta.guia-digital.com';
function compartirSitio() {
  if (navigator.share) {
    navigator.share({ title: 'Guía Digital de Cúcuta', text: 'Directorio de negocios en Cúcuta', url: NUEVA_URL });
  } else {
    navigator.clipboard.writeText(NUEVA_URL);
    alert('📋 Enlace copiado.');
  }
}

// WHATSAPP Y BUSCADOR
const WHATSAPP = '584227159158';
const btnBuscar = document.getElementById('btnBuscarLocal');
const inputBuscar = document.getElementById('buscadorLocal');
const resultadosDiv = document.getElementById('resultadosBusqueda');

if (btnBuscar) {
  btnBuscar.addEventListener('click', function() {
    const termino = inputBuscar.value.trim().toLowerCase();
    if (termino === '') { alert('Escribe lo que quieres buscar'); return; }
    const resultados = negocios.filter(n => n.nombre.toLowerCase().includes(termino) || obtenerNombreCategoria(n.categoria).toLowerCase().includes(termino));
    
    if (resultados.length === 0) {
      resultadosDiv.innerHTML = `<div class="mt-4 p-4 bg-black/30 rounded-xl text-center text-gray-300">❌ No encontramos "${termino}" en nuestra guía.</div>`;
    } else {
      resultadosDiv.innerHTML = `<div class="mt-4 p-4 bg-black/30 rounded-xl"><h3 class="text-lg font-bold text-amber-400 mb-3">📋 Resultados para "${termino}":</h3><div class="grid md:grid-cols-2 gap-3">${resultados.map(n => `<div class="bg-black/50 p-3 rounded-xl flex justify-between items-center"><div><p class="font-bold text-white">${n.nombre}</p><p class="text-xs text-gray-400">${obtenerNombreCategoria(n.categoria)}</p></div><a href="${n.url}" target="_blank" class="btn btn-sitio text-sm py-1 px-3">Ver</a></div>`).join('')}</div></div>`;
    }
    resultadosDiv.classList.remove('hidden');
  });
}

// FORMULARIOS
function abrirFormulario(tipo) {
  const ids = { local: 'formLocal', influencer: 'formInfluencer', impulsador: 'formImpulsador', disenador: 'formDisenador' };
  Object.values(ids).forEach(id => document.getElementById(id)?.classList.add('hidden'));
  const form = document.getElementById(ids[tipo]);
  if (form) {
    form.classList.remove('hidden');
    setTimeout(() => {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      form.classList.add('destello');
      setTimeout(() => form.classList.remove('destello'), 2000);
    }, 100);
  }
}

function cerrarFormulario(tipo) {
  const ids = { local: 'formLocal', influencer: 'formInfluencer', impulsador: 'formImpulsador', disenador: 'formDisenador' };
  document.getElementById(ids[tipo])?.classList.add('hidden');
}

function enviarFormulario(e, tipo) {
  e.preventDefault();
  const form = e.target;
  const datos = new FormData(form);
  let texto = '';
  if (tipo === 'local') texto = `🏪 NUEVO LOCAL\n\nNombre: ${datos.get('nombre')}\nDirección: ${datos.get('direccion')}\nTeléfono: ${datos.get('telefono')}\nMensaje: ${datos.get('mensaje') || ''}`;
  else if (tipo === 'influencer') texto = `📊 NUEVO INFLUENCER\n\nNombre: ${datos.get('nombre')}\nRedes: ${datos.get('redes')}\nSeguidores: ${datos.get('seguidores')}\nTeléfono: ${datos.get('telefono')}`;
  else if (tipo === 'impulsador') texto = `💪 NUEVO IMPULSADOR\n\nNombre: ${datos.get('nombre')}\nTeléfono: ${datos.get('telefono')}\nExperiencia: ${datos.get('experiencia') || ''}\nMotivación: ${datos.get('motivacion') || ''}`;
  else if (tipo === 'disenador') texto = `🎨 NUEVO DISEÑADOR\n\nNombre: ${datos.get('nombre')}\nTeléfono: ${datos.get('telefono')}\nPortafolio: ${datos.get('portafolio') || ''}\nConocimientos: ${datos.get('conocimientos') || ''}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank');
  alert('✅ Solicitud enviada.');
  form.reset();
  cerrarFormulario(tipo);
}

// SALUDO DEL PULPO Y VOZ
function mostrarSaludo() {
  const ahora = new Date();
  const hora = ahora.getHours();
  let saludo = "";
  if (hora < 12) saludo = "🌞 Buenos días";
  else if (hora < 19) saludo = "☀️ Buenas tardes";
  else saludo = "🌙 Buenas noches";
  const el = document.getElementById("mensajePulpito");
  if (el) el.innerHTML = `🐙 ${saludo}, EL PULPO CORDIAL te da la bienvenida a la Guía Digital de Cúcuta 🔍`;
}
mostrarSaludo();

document.getElementById('pulpitoImg')?.addEventListener('click', function() {
  const mensaje = "Hola, vecino, soy el pulpo de la Guía Digital. Conexión total para todos los negocios de nuestra amada ciudad de Cúcuta. ¡Bienvenido, al directorio digital de esta Nueva Era!";
  const voz = new SpeechSynthesisUtterance(mensaje);
  voz.lang = 'es-CO';
  voz.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(voz);
});

document.getElementById('portadaImg')?.addEventListener('click', function() {
  const mensaje = "Bienvenido a la Guía Digital de Cúcuta. Soy el pulpo cordial, tu guía en este ecosistema digital. Explora los negocios, descubre la ruleta y haz parte de nuestra causa. ¡Todos ganamos aquí!";
  const voz = new SpeechSynthesisUtterance(mensaje);
  voz.lang = 'es-CO';
  voz.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(voz);
});

// CHAT DE EMPLEO
let pasoChat = 0;
function respuestaChat(valor) {
  const chatMensajes = document.getElementById('chatMensajes');
  const textoRespuesta = valor.replace('_', ' ');
  chatMensajes.innerHTML += `<div class="bg-blue-600/30 p-3 rounded-xl text-sm text-right">👉 ${textoRespuesta}</div>`;
  pasoChat++;
  if (pasoChat === 1) {
    document.getElementById('preguntaTexto').innerHTML = '📍 ¿En qué zona de Cúcuta buscas empleo?';
    document.getElementById('preguntaOpciones').innerHTML = `<button onclick="respuestaChat('Centro')" class="btn-sitio text-sm py-2 px-4 rounded-full">🏛️ Centro</button><button onclick="respuestaChat('La Merced')" class="btn-sitio text-sm py-2 px-4 rounded-full">📍 La Merced</button><button onclick="respuestaChat('Pescadero')" class="btn-sitio text-sm py-2 px-4 rounded-full">🐟 Pescadero</button><button onclick="respuestaChat('Cualquiera')" class="btn-sitio text-sm py-2 px-4 rounded-full">🚗 Cualquiera</button>`;
  } else if (pasoChat === 2) {
    chatMensajes.innerHTML += `<div class="bg-amber-400/20 p-3 rounded-xl text-sm mt-2"><p class="font-bold text-white">¡Perfecto! Aquí tienes ofertas para ti:</p><div class="flex flex-wrap justify-center gap-2 mt-3"><a href="https://www.computrabajo.com.co/trabajo-en-cucuta" target="_blank" class="btn-sitio text-xs py-1 px-3 rounded-full">Computrabajo</a><a href="https://co.indeed.com/ofertas?l=C%C3%BAcuta" target="_blank" class="btn-sitio text-xs py-1 px-3 rounded-full">Indeed</a><a href="https://www.linkedin.com/jobs/search/?location=C%C3%BAcuta" target="_blank" class="btn-sitio text-xs py-1 px-3 rounded-full">LinkedIn</a></div></div>`;
    document.getElementById('chatPregunta').classList.add('hidden');
  }
  chatMensajes.scrollTop = chatMensajes.scrollHeight;
}

// CONTADOR DE VISITAS
let visitas = localStorage.getItem("contadorGuiaCucuta");
if (visitas === null) {
  visitas = 100;
} else {
  visitas = Number(visitas) + 1;
}
localStorage.setItem("contadorGuiaCucuta", visitas);
document.getElementById("numeroVisitas").innerText = visitas;

// ¡INICIAR TODO!
cargarNegocios();
