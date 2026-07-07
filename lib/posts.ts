export type Post = {
  slug: string
  date: string
  categories: string[]
  title: string
  excerpt: string
  img: string
  content: string[]
}

export const posts: Post[] = [
  {
    slug: 'rutina-de-piel-con-criterio',
    date: '02 JULIO 2026',
    categories: ['Skin Expertise', 'Rutina'],
    title: 'Cómo diseñar una rutina de piel con criterio, no por moda',
    excerpt: 'Por qué copiar la rutina de 10 pasos de las redes sociales no siempre es la respuesta, y qué preguntar antes de sumar un producto nuevo a tu día a día...',
    img: '/service_01.jpg',
    content: [
      'Cada semana aparece una nueva rutina "milagrosa" en redes sociales: diez pasos, dobles limpiezas, sérums apilados uno sobre otro. El problema no es la curiosidad por probar cosas nuevas, sino sumar productos sin entender primero qué necesita realmente tu piel.',
      'En La Clinique empezamos siempre por un diagnóstico: tipo de piel, barrera cutánea, sensibilidad, objetivos reales y hábitos de vida. Solo así una rutina deja de ser una lista de productos de moda y se convierte en una estrategia que funciona a mediano y largo plazo.',
      'Una rutina bien diseñada suele ser más simple de lo que se piensa: limpieza adecuada, un activo con evidencia para el objetivo específico, hidratación y protección solar diaria. Todo lo demás se suma solo si hay una razón clínica para hacerlo.',
      'Antes de incorporar un producto nuevo, pregúntate: ¿qué problema específico resuelve?, ¿es compatible con lo que ya uso?, ¿mi piel está lista para tolerarlo? Si no puedes responder con claridad, probablemente no sea el momento de agregarlo.',
    ],
  },
  {
    slug: 'toxina-botulinica-mitos-y-realidades',
    date: '24 JUNIO 2026',
    categories: ['Medicina Estética', 'Toxina Botulínica'],
    title: 'Toxina botulínica: mitos y realidades que debes conocer',
    excerpt: 'Desmontamos las ideas más comunes sobre la toxina botulínica y explicamos qué esperar realmente de un tratamiento bien indicado y con criterio médico...',
    img: '/service_03.jpg',
    content: [
      'Pocas herramientas de medicina estética generan tantos mitos como la toxina botulínica. Se le atribuye desde "dejar la cara congelada" hasta ser un tratamiento exclusivo para eliminar arrugas ya marcadas, cuando su verdadero valor está en la prevención y el manejo del movimiento muscular.',
      'Bien indicada, la toxina botulínica suaviza líneas de expresión sin quitarle naturalidad al rostro. El objetivo nunca es la inmovilidad, sino equilibrar la actividad muscular para que la piel no se marque de forma repetitiva en los mismos puntos.',
      'Los resultados dependen enormemente de la dosis, la técnica y, sobre todo, del criterio de quien aplica el tratamiento. Por eso en La Clinique cada plan se define tras una valoración individual del rostro, su musculatura y sus gestos naturales.',
      'El efecto suele notarse entre los 3 y 7 días posteriores, con una duración habitual de 3 a 4 meses. Un buen seguimiento permite ajustar dosis futuras y mantener resultados consistentes en el tiempo.',
    ],
  },
  {
    slug: 'primera-consulta-que-sucede',
    date: '15 JUNIO 2026',
    categories: ['El Método', 'Consulta'],
    title: 'La primera consulta: qué sucede antes de cualquier tratamiento',
    excerpt: 'En La Clinique todo empieza con una escucha real. Te contamos cómo es el proceso de valoración antes de definir cualquier estrategia personalizada...',
    img: '/approach.jpg',
    content: [
      'Antes de hablar de tratamientos, en La Clinique hablamos contigo. La primera consulta es un espacio para entender tu historia, tus preocupaciones y qué significa para ti sentirte bien con tu piel, no solo verse "diferente".',
      'Durante esa valoración inicial revisamos el estado real de la piel, antecedentes médicos relevantes y expectativas. Es también el momento de aclarar mitos, explicar alternativas y ser honestas sobre lo que un tratamiento puede o no puede lograr.',
      'Solo después de esa conversación se diseña una estrategia personalizada, que puede incluir uno o varios procedimientos, o simplemente ajustes en la rutina de cuidado en casa. No todo caso necesita intervención inmediata.',
      'Este orden —escuchar primero, tratar después— es la base del Método La Clinique: decisiones clínicas con criterio, nunca por presión estética ni por seguir una tendencia.',
    ],
  },
  {
    slug: 'radiesse-firmeza-resultados-realistas',
    date: '06 JUNIO 2026',
    categories: ['Bioestimulación', 'Radiesse'],
    title: 'Radiesse y la firmeza de la piel: qué resultados son realistas',
    excerpt: 'Hablamos de tiempos, expectativas y cuidados posteriores a un tratamiento de bioestimulación de colágeno con resultados progresivos...',
    img: '/service_04.jpg',
    content: [
      'Radiesse es un bioestimulador de colágeno: no rellena de forma inmediata como otros productos, sino que activa la propia capacidad de la piel para producir colágeno nuevo con el paso de las semanas.',
      'Esto significa que los resultados son progresivos. El efecto inicial se debe en parte al volumen del producto, pero la firmeza real se construye entre las 4 y 12 semanas posteriores, a medida que el colágeno se regenera.',
      'Los cuidados posteriores son sencillos pero importantes: evitar exposición solar directa los primeros días, masajear según indicación médica y mantener hidratación adecuada para acompañar el proceso natural de la piel.',
      'Establecer expectativas realistas es parte esencial del tratamiento. Radiesse no sustituye una rutina de cuidado ni corrige flacidez severa, pero es una excelente aliada para recuperar firmeza de forma natural y progresiva.',
    ],
  },
  {
    slug: 'cuidado-de-piel-como-ritual',
    date: '29 MAYO 2026',
    categories: ['Membresía', 'Ritual'],
    title: 'Por qué el cuidado de la piel funciona mejor como ritual, no evento',
    excerpt: 'La constancia cambia los resultados. Así acompaña la Membresía Première el proceso a largo plazo de cada clienta que confía en nosotros...',
    img: '/stats_01.jpg',
    content: [
      'Uno de los errores más comunes en el cuidado de la piel es tratarlo como una serie de eventos aislados: un tratamiento antes de una ocasión especial, una rutina intensiva por dos semanas y luego el abandono hasta la próxima "emergencia".',
      'La piel responde mejor a la constancia. Los cambios reales —en textura, firmeza y luminosidad— se construyen con hábitos sostenidos en el tiempo, no con soluciones puntuales pensadas para un evento específico.',
      'Por eso diseñamos la Membresía Première: un acompañamiento continuo que combina seguimiento clínico, tratamientos programados y ajustes periódicos según la evolución de cada piel, en lugar de citas aisladas sin continuidad.',
      'Convertir el cuidado de la piel en un ritual no significa complicarlo, sino sostenerlo. Es esa constancia, más que cualquier producto o procedimiento individual, la que realmente cambia los resultados a largo plazo.',
    ],
  },
  {
    slug: 'naturalidad-criterio-detras-de-cada-tratamiento',
    date: '18 MAYO 2026',
    categories: ['Armonización Facial', 'Criterio'],
    title: 'Naturalidad ante todo: el criterio detrás de cada tratamiento',
    excerpt: 'Qué significa realmente "verse natural" y cómo se traduce ese principio en cada decisión clínica que tomamos junto a cada clienta...',
    img: '/service_06.jpg',
    content: [
      '"Verse natural" es una de las frases más repetidas en medicina estética, pero pocas veces se explica qué significa realmente en la práctica clínica del día a día.',
      'Para nosotros, naturalidad significa respetar la anatomía y los rasgos propios de cada rostro, en lugar de imponer un estándar externo. Cada tratamiento busca realzar lo que ya está ahí, no transformar la identidad facial de la persona.',
      'Ese criterio se traduce en decisiones concretas: dosis conservadoras, evaluación individual de proporciones faciales y, muchas veces, la recomendación de no intervenir cuando no existe una necesidad clínica real.',
      'La armonización facial, bien entendida, no busca que todas las clientas terminen pareciéndose entre sí, sino que cada una se reconozca en el espejo, solo que con su mejor versión.',
    ],
  },
]

export function getPostBySlug(slug: string) {
  return posts.find(post => post.slug === slug)
}

export function getRecentPosts(excludeSlug: string, limit = 4) {
  return posts.filter(post => post.slug !== excludeSlug).slice(0, limit)
}

export function getCategories() {
  const counts = new Map<string, number>()
  for (const post of posts) {
    for (const category of post.categories) {
      counts.set(category, (counts.get(category) ?? 0) + 1)
    }
  }
  return Array.from(counts.entries()).map(([name, count]) => ({ name, count }))
}
