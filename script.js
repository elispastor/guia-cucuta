// ===== 75 NEGOCIOS =====
const negocios = [
    { nombre: "Fajas Edi", url: "https://fajasedi.netlify.app/", categoria: "belleza" },
    { nombre: "La Estación de la Calidad", url: "https://wa.me/584244259543?text=Hola%2C%20quiero%20contactar%20La%20Estaci%C3%B3n%20de%20la%20Calidad", categoria: "accesorios" },
    { nombre: "Ferretería La 17", url: "https://ferreteria-la-17.pages.dev/", categoria: "ferreterias" },
    { nombre: "Tracto Auto M.F.", url: "https://tracto-auto-mf.pages.dev/", categoria: "mecanica" },
    { nombre: "Taller Barney", url: "https://taller-barney.netlify.app/", categoria: "mecanica" },
    { nombre: "Autotaller Murillo", url: "https://autotallermurillo.netlify.app/", categoria: "mecanica" },
    { nombre: "Taller Mecánico TS", url: "https://taller-mecanico-ts.netlify.app/", categoria: "mecanica" },
    { nombre: "Mecánica Willson y Gustavo", url: "https://mecanicaautomotrizwillsonygustavo.netlify.app/", categoria: "mecanica" },
    { nombre: "Taller Osama", url: "https://wa.me/584244259543?text=Hola%2C%20quiero%20contactar%20Taller%20Osama", categoria: "mecanica" },
    { nombre: "Multiservicios Los Torres", url: "https://multiserviciosautomotrizlostorres.netlify.app/", categoria: "mecanica" },
    { nombre: "Electroauto El Rolo", url: "https://electroautoelrolo.netlify.app/", categoria: "mecanica" },
    { nombre: "Papa Barney", url: "https://papa-barney.netlify.app/", categoria: "mecanica" },
    { nombre: "Cone Junior Torrado", url: "https://wa.me/584244259543?text=Hola%2C%20quiero%20contactar%20Cone%20Junior%20Torrado", categoria: "mecanica" },
    { nombre: "Gustavo Rojas", url: "https://wa.me/584244259543?text=Hola%2C%20quiero%20contactar%20Gustavo%20Rojas", categoria: "mecanica" },
    { nombre: "Jhon Rubio III", url: "https://wa.me/584244259543?text=Hola%2C%20quiero%20contactar%20Jhon%20Rubio", categoria: "mecanica" },
    { nombre: "Motores Jesús", url: "https://motores-motoreductores-jesus.netlify.app/", categoria: "motores" },
    { nombre: "Embobinados Dacoor", url: "https://embobinadosdacoor.netlify.app/", categoria: "motores" },
    { nombre: "Montallantas El Indio", url: "https://montallantas-el-indio.netlify.app/", categoria: "llantas" },
    { nombre: "Ruedas y Rodamientos El Shaddai", url: "https://ruedasyrodamientoselshaddai.netlify.app/", categoria: "llantas" },
    { nombre: "Servigomas", url: "https://servigomas.netlify.app/", categoria: "llantas" },
    { nombre: "Herrería Duarte", url: "https://tallerdeherreriaduarte.netlify.app/", categoria: "herreria" },
    { nombre: "Acero y Gas", url: "https://aceroygas.netlify.app/", categoria: "herreria" },
    { nombre: "Aceros PC", url: "https://acerospc.netlify.app/", categoria: "herreria" },
    { nombre: "Herramientas El Segundazo", url: "https://herramientas-el-segundazo.netlify.app/", categoria: "herreria" },
    { nombre: "Muebles RQ", url: "https://mueblesrq.netlify.app/", categoria: "tapiceria" },
    { nombre: "La Clínica del Mueble", url: "https://laclinicadelmueble.netlify.app/", categoria: "tapiceria" },
    { nombre: "Carpintería JK", url: "https://carpinteriajk.netlify.app/", categoria: "tapiceria" },
    { nombre: "Carpintería 10 con 2da", url: "https://carpinteria10con2da.netlify.app/", categoria: "tapiceria" },
    { nombre: "Muebles Diseños y Punto", url: "https://mueblesdisenosypunto.netlify.app/", categoria: "tapiceria" },
    { nombre: "TOYOMACK", url: "https://toyomack.pages.dev/", categoria: "accesorios" },
    { nombre: "WAHL · Servicio Técnico", url: "https://wa.me/584244259543?text=Hola%2C%20quiero%20contactar%20WAHL%20Servicio%20T%C3%A9cnico", categoria: "accesorios" },
    { nombre: "Quincallería Blanca", url: "https://quincalleriablanca.netlify.app/", categoria: "accesorios" },
    { nombre: "Fabrigomas", url: "https://fabrigomas.netlify.app/", categoria: "accesorios" },
    { nombre: "Otoniel Acarreos", url: "https://otoniel-acarreos.netlify.app/", categoria: "acarreos" },
    { nombre: "Acarreos Carlos", url: "https://acarreoscarlos.netlify.app/", categoria: "acarreos" },
    { nombre: "Acarreos y Viajes Luis Díaz", url: "https://wa.me/584244259543?text=Hola%2C%20quiero%20contactar%20Acarreos%20Luis%20D%C3%ADaz", categoria: "acarreos" },
    { nombre: "Acarreos Luis Bueno", url: "https://acarreosluisbueno.netlify.app/", categoria: "acarreos" },
    { nombre: "Acarreos Isidro", url: "https://acarreos-isidro.netlify.app/", categoria: "acarreos" },
    { nombre: "Gatos Hidráulicos María", url: "https://gatoshidraulicosmaria.netlify.app/", categoria: "acarreos" },
    { nombre: "Servipuertas", url: "https://servipuertas.netlify.app/", categoria: "puertas" },
    { nombre: "Cerrajería El Mago", url: "https://cerrajeriaelmago.netlify.app/", categoria: "puertas" },
    { nombre: "Marianacell", url: "https://marianacell.netlify.app/", categoria: "celulares" },
    { nombre: "Davidcell", url: "https://davidcell.netlify.app/", categoria: "celulares" },
    { nombre: "KATA - Servicio Técnico Celular", url: "https://wa.me/584244259543?text=Hola%2C%20quiero%20contactar%20KATA%20Servicio%20T%C3%A9cnico", categoria: "celulares" },
    { nombre: "HDMovil2", url: "https://hdmovil2.netlify.app/", categoria: "celulares" },
    { nombre: "Esbedcell", url: "https://esbedcell.netlify.app/", categoria: "celulares" },
    { nombre: "Mis Antojos", url: "https://mis-antojos-restaurante.netlify.app/", categoria: "restaurantes" },
    { nombre: "Restaurante La Mano de Dios", url: "https://restaurantlamanodedios.netlify.app/", categoria: "restaurantes" },
    { nombre: "Charcutería Jireh", url: "https://charcuteriajireh.netlify.app/", categoria: "restaurantes" },
    { nombre: "Restaurante El Sabor de Doña Rosa", url: "https://restauranteelsabordedonarosa.netlify.app/", categoria: "restaurantes" },
    { nombre: "Proyecto Comedor NGE", url: "https://proyecto-comedor-nge.netlify.app/", categoria: "restaurantes" },
    { nombre: "El Punto de Jack", url: "https://elpuntode-jack.netlify.app/", categoria: "maquinas" },
    { nombre: "Hotel La Puerta del Sol", url: "https://hotel-lapuertadelsol.netlify.app/", categoria: "hoteles" },
    { nombre: "Salón D'Steffy", url: "https://salondebellezadsteffy.pages.dev/", categoria: "belleza" },
    { nombre: "Liam Stylos Peluquería", url: "https://liam-stylos-peluqueria.netlify.app/", categoria: "belleza" },
    { nombre: "Ciclorepuestos Biker10", url: "https://ciclorepuestosbiker10.netlify.app/", categoria: "bicicletas" },
    { nombre: "Bicicletas Alex", url: "https://bicicletas-alex.netlify.app/", categoria: "bicicletas" },
    { nombre: "Frioaire Vásquez", url: "https://frioaire-vasquez.netlify.app/", categoria: "refrigeracion" },
    { nombre: "Hidrotec Cúcuta", url: "https://hidrotec-cucuta.netlify.app/", categoria: "hidraulica" },
    { nombre: "Comercializadora El Campo", url: "https://comercializadoraelcampo.netlify.app/", categoria: "comercializadoras" },
    { nombre: "Autodiagnóstico y Cerrajería CJI", url: "https://autodiagnostico-ferreteria-cji.pages.dev/", categoria: "puertas" },
    { nombre: "Hidrocool", url: "https://hidrocool.pages.dev/", categoria: "hidraulica" },
    { nombre: "Polarizados Julio", url: "https://polarizados-julio.pages.dev/", categoria: "accesorios" },
    { nombre: "AUTO REPUESTOS MUNDO CHINO", url: "https://auto-repuestos-mundochino.netlify.app", categoria: "repuestos", icono: "🚗" },
    { nombre: "Taller El Gaterito", url: "https://taller-el-gaterito.netlify.app", categoria: "mecanica", icono: "🔧" },
    { nombre: "Repuestos Taller César", url: "https://repuestos-taller-cesar.netlify.app", categoria: "repuestos", icono: "🔩" },
    { nombre: "GRUPO OCCIDENTAL", url: "https://grupooccidental.netlify.app", categoria: "tramites", icono: "📄" },
    { nombre: "Generador de Ingresos NGE", url: "https://generador-de-ingresos-nge.netlify.app", categoria: "emprendimiento", icono: "💰" },
    { nombre: "EmprendeWorld NGE", url: "https://gane-dinero-con-la-publicidad.netlify.app", categoria: "publicidad", icono: "📢" },
    { nombre: "Tarjeta Digital Online", url: "https://tarjetaonline.netlify.app", categoria: "tarjetas digitales", icono: "💳" },
    { nombre: "Metalicas VALDERRAMA", url: "https://metalicas-valderrama.vercel.app", categoria: "soldadura", icono: "🔨" },
    { nombre: "Alex Mariachi", url: "https://wa.me/584244259543?text=Hola%2C%20quiero%20contactar%20Alex%20Mariachi", categoria: "eventos" },
    { nombre: "FULL MOBILE", url: "https://wa.me/584244259543?text=Hola%2C%20quiero%20contactar%20FULL%20MOBILE", categoria: "celulares", icono: "📱" },
];

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
    { id: "eventos", nombre: "🎵 Eventos y Música" },
];

let categoriaActual = "todos";

function mostrarNegocios(categoria) {
  const contenedor = document.getElementById("lista-negocios");
  const filtrados = categoria === "todos" ? negocios : negocios.filter(n => n.categoria === categoria);
  if (filtrados.length === 0) {
    contenedor.innerHTML = '<div class="col-span-2 text-center py-8 text-gray-400">Aún no hay negocios en esta categoría.</div>';
    return;
  }
  contenedor.innerHTML = filtrados.map(n => `
    <div class="taller-card">
      <h3 class="text-xl font-bold text-[#fbbf24]">${n.nombre}</h3>
      <p class="text-sm text-gray-300 mb-3">${obtenerNombreCategoria(n.categoria)}</p>
      <div class="flex gap-3 flex-wrap">
        <a href="${n.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sitio">🔗 Ver sitio</a>
      </div>
    </div>
  `).join("");
}

function obtenerNombreCategoria(catId) {
  const cat = categorias.find(c => c.id === catId);
  return cat ? cat.nombre : catId;
}

function generarFiltros() {
  const contenedor = document.getElementById("filtros");
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

generarFiltros();
mostrarNegocios("todos");

// MENÚ MÓVIL
document.getElementById('menu-btn')?.addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('open');
});
document.querySelectorAll('#mobile-menu a, #mobile-menu button').forEach(el => {
  el.addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('open'));
});

// CARRUSEL
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

// WHATSAPP
const WHATSAPP = '584244259543';

// BUSCADOR
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

// SALUDO DEL PULPO
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
