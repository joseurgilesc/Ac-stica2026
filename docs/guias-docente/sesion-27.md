# Guía Docente — Sesión 27: Ruido de fondo

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, sonómetro (app o Clase 2), analizador de espectro (REW, Smaart, ARTA o app con RTA), cinta métrica, acelerómetro (opcional, para ruido estructural)  
**Referencia:** Everest & Pohlmann, Capítulo 16, pp. 231–250 (Control of Interfering Noise — Background Noise, Noise Criteria Curves, RC/NC/NR Standards, HVAC Noise, Noise Measurement Methodology, Source Identification)

---

## Objetivo de la sesión

Que el estudiante identifique y clasifique las fuentes de ruido de fondo de un espacio real según su origen (externo, interno, estructural) y mecanismo de transmisión (aéreo, estructural, flanqueo), interprete una medición de ruido de fondo mediante curvas NC, NR y RC determinando el criterio que corresponde al uso del espacio, calcule la relación señal-ruido (SNR) y evalúe su impacto en la inteligibilidad y calidad de grabación, y construya un presupuesto de ruido jerarquizando las fuentes por su contribución para definir prioridades de intervención.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | «Silencio absoluto vs. silencio funcional» — demostración de ruido de fondo con medición en vivo en el aula |
| **Desarrollo** | 50 min | Teoría guiada: fuentes de ruido, curvas NC/NR/RC, SNR, protocolo de medición |
| **Práctica** | 40 min | Diagnóstico de ruido de fondo: medición, mapeo, presupuesto de ruido y criterios de aceptabilidad |
| **Cierre** | 15 min | «Tu primer inversión en un estudio NO es un micrófono caro — es SILENCIO» + bitácora |

---

## 1. Apertura — «Silencio absoluto vs. silencio funcional»

### Dinámica

1. Pedir a los estudiantes SILENCIO ABSOLUTO durante 30 segundos. Que cierren los ojos. Pasados los 30 segundos, preguntar: «¿Qué escucharon?» → Van a mencionar: el ventilador del proyector, el aire acondicionado, tránsito lejano, el zumbido de las luces, alguien respirando, un pájaro afuera. «Eso que escucharon NO es silencio. Es el RUIDO DE FONDO de esta aula. Y ahora imaginen grabar una guitarra acústica acá — todo eso que acaban de escuchar queda GRABADO.»
2. Mostrar dos mediciones en vivo con un sonómetro (app o hardware):
   - **Aula con todo encendido** (luces, proyector, aire, ventanas abiertas): probablemente 45-55 dBA.
   - **Aula con todo apagado y ventanas cerradas**: probablemente 30-38 dBA.
   - Preguntar: «¿Cuál de estos dos escenarios les permitiría grabar una toma usable?» → El segundo. «¿Y cuál es el nivel OBJETIVO para un estudio profesional?» → NC-15 a NC-20, equivalente a 20-25 dBA. «Este aula está a 20-30 dB de ese objetivo. Cada 10 dB que bajan el ruido de fondo, DUPLICAN el rango dinámico útil de sus grabaciones.»
3. Presentar el concepto de «presupuesto de ruido»: así como un presupuesto financiero asigna gastos a categorías, un presupuesto de ruido asigna decibeles a fuentes. «Hoy van a hacer el presupuesto de ruido de SU espacio. Van a saber exactamente qué aporta cada fuente y en qué orden atacarlas. Porque adivinar es la receta para gastar plata en soluciones que no atacan el problema real.»

### Preguntas disparadoras

- «Si tu vecino pone música a 80 dBA en su departamento y tu pared atenúa 40 dB, ¿cuánto escuchás vos?» → 40 dBA. «¿Es suficiente para grabar?» → No, necesitás ≤ 25 dBA de ruido de fondo. «¿Cuánta atenuación extra necesitás?» → 15 dB más. «¿Duplicando la masa de la pared?» → Solo ganás 6 dB. Necesitás más que eso.
- «¿Cuál creen que es la fuente de ruido MÁS SUBESTIMADA en un estudio casero?» → El sistema de ventilación / aire acondicionado. Porque no lo podés apagar (necesitás respirar) y porque es CONTINUO — el ruido intermitente (tránsito) es más tolerable que un zumbido constante de 35 dBA justo en 125 Hz.

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Las dos caras del ruido de fondo: enmascaramiento y molestia** (10 min). Dibujar en la pizarra un gráfico de nivel sonoro vs. tiempo. Trazar una línea horizontal: el ruido de fondo. Mostrar una señal (voz, instrumento) por encima. Explicar: «Todo lo que esté por DEBAJO de esta línea es INAUDIBLE. Si tu ruido de fondo es 40 dBA y tu guitarra grabada tiene pasajes en pianissimo a 35 dBA, esos pasajes NO EXISTEN en la grabación. Los perdiste. Para siempre.» Presentar la tabla SNR: < 0 (ininteligible), 0-10 (comprensión difícil), 10-20 (clara con esfuerzo), 20-30 (buena), 30-40 (muy buena), > 40 (excelente). Preguntar: «¿Qué SNR necesitan para grabar una voz hablada (60 dBA)? ¿Y una guitarra acústica tocada suavemente (50 dBA)?» → Para 50 dBA con ruido de 35 dBA, SNR = 15 dB → clara con esfuerzo, detalles finos perdidos. Necesitás ruido ≤ 20 dBA para SNR ≥ 30 dB.

    > Insertar **Fig. 16-1** del Everest: diagrama del balance energético mostrando la señal deseada, el ruido de fondo (interno + externo), y la SNR resultante.

2. **El mapa de los enemigos: clasificación de fuentes de ruido** (15 min). Proyectar la tabla de fuentes por origen (externo/tránsito, externo/aéreo, externo/urbano, interno/HVAC, interno/equipos, interno/plomería, interno/eléctrico, interno/ocupantes, estructural) con rangos típicos en dBA y característica espectral. Para cada fuente, preguntar: «¿En SU espacio, esta fuente aplica? ¿Cuánto aporta?» Hacer énfasis en los TRES mecanismos de transmisión: aéreo, estructural y flanqueo. Mostrar que la solución depende del mecanismo: ruido aéreo → barrera con TL. Ruido estructural → desacoplamiento. Flanqueo → sellado de caminos alternativos. «Curar el ruido aéreo con desacoplamiento es como operar la rodilla cuando el problema es el hombro. Hay que diagnosticar BIEN antes de intervenir.»

    > Insertar **Fig. 16-4** del Everest: esquema HVAC mostrando los tres mecanismos de transmisión simultáneos.

3. **Curvas de criterio: ¿cuánto silencio es suficiente?** (15 min). Mostrar el gráfico de curvas NC superpuestas (NC-15 a NC-65) en bandas de octava de 63 Hz a 8 kHz. Explicar que el NC de un espacio es la curva MÁS BAJA que no es excedida en NINGUNA banda. Ejemplo: si tu ruido excede NC-25 en 125 Hz pero no en el resto, tu espacio es NC-30 (la siguiente curva hacia arriba). Presentar la tabla de aplicaciones: NC 15-20 (estudio profesional), NC 20-25 (sala de control), NC 25-30 (aula, sala de conferencia), NC 30-35 (oficina privada). Introducir las curvas RC como EVOLUCIÓN de las NC: RC-30(N) vs. RC-25(R) vs. RC-35(H). «Dos estudios con NC-25 pueden sonar COMPLETAMENTE distintos si uno tiene zumbido de 50 Hz y el otro siseo de 8 kHz. Las curvas RC capturan esa diferencia con los clasificadores R, H, RV. Para un estudio, queremos RC-20(N): bajo nivel Y balance neutral.»

    > Insertar **Fig. 16-2** del Everest: curvas NC con espectro HVAC superpuesto y determinación del NC.

4. **Medición y diagnóstico: el protocolo** (10 min). Mostrar los parámetros a medir: Leq (promedio energético), L₁₀ (picos típicos), L₉₀ (ruido de fondo estadístico), L_max y L_min. Explicar la diferencia: «El Leq te dice el promedio. Pero el L₁₀ te dice cuánto ruido hay CUANDO HAY RUIDO — eso es lo que te arruina una toma. Y el L₉₀ te dice el PISO real — lo que queda cuando todo está 'tranquilo'.» Describir el experimento de «apagar todo»: medir ruido residual (TODO apagado), luego encender una fuente a la vez y medir su contribución. La suma logarítmica da el total. «Así construís tu presupuesto de ruido. Y con ese presupuesto, sabés EXACTAMENTE qué atacar primero.»

    > Insertar **Fig. 16-3** del Everest: espectro de ruido típico con contribución de cada fuente por banda de frecuencia.

---

## 3. Práctica — Diagnosticá el ruido de fondo de TU espacio

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 27 — Diagnóstico de ruido de fondo

**Instrucciones:**

**Parte A — Medición y mapeo de ruido (individual o en parejas)**

1. Elegí un espacio real que uses o puedas usar para grabar/mezclar (tu habitación, sala de ensayo, aula, estudio). Describilo brevemente: dimensiones aproximadas, tipo de construcción (paredes de yeso/ladrillo/hormigón, piso flotante o losa, tipo de ventanas), y uso previsto (grabación, mezcla, ambas).

2. Realizá una medición de ruido de fondo en el peor escenario REALISTA (horario de mayor ruido, equipos encendidos como estarían durante una sesión). Usá un sonómetro (app calibrada o hardware). Registrá al menos:
   - **Leq** (1 minuto) en dBA y dBC
   - **L₁₀** y **L₉₀** en dBA
   - **L_max** y **L_min** en dBA

3. Si tenés acceso a un analizador de espectro (REW, app con RTA), medí el espectro en bandas de octava (63 Hz, 125 Hz, 250 Hz, 500 Hz, 1 kHz, 2 kHz, 4 kHz, 8 kHz). Si no, estimá cualitativamente: «El ruido suena más grave que agudo» o «domina un zumbido en frecuencias medias».

4. Dibujá un plano esquemático de tu espacio (vista en planta). Marcá al menos 4 puntos de medición: tu posición de escucha/grabación, y 3 puntos adicionales cerca de posibles entradas de ruido (ventana, puerta, pared colindante con vecino, ducto de ventilación). Anotá el Leq en cada punto. Identificá puntos calientes (mayor nivel) y puntos de entrada de ruido.

**Parte B — Presupuesto de ruido (individual o en parejas)**

1. Hacé el experimento de «apagar todo» en tu espacio (o simulalo si no es posible apagar equipos críticos). Listá CADA fuente de ruido identificable. Para cada una, estimá su contribución en dBA:
   - Si podés medirla individualmente (apagás todo menos esa fuente), anotá el valor medido.
   - Si no podés aislarla, estimá basándote en la tabla de fuentes de la clase y tu percepción subjetiva.

2. Construí una tabla de presupuesto de ruido:

    | Fuente | Tipo (ext/int/est) | Mecanismo (aéreo/estructural/flanqueo) | Nivel estimado (dBA) | ¿Controlable? (Sí/No/Parcial) |
    |---|---|---|---|---|
    | Tránsito por ventana | Externo | Aéreo | 38 | Parcial (ventana) |
    | Aire acondicionado | Interno | Aéreo + estructural | 33 | Sí |
    | ... | | | | |

3. Calculá el nivel total combinado usando suma logarítmica:
    \[
    L_{\text{total}} = 10 \log_{10}\left(10^{L_1/10} + 10^{L_2/10} + \cdots + 10^{L_n/10}\right)
    \]
    Compará el resultado con tu Leq medido en la Parte A. ¿Cierran los números? Si hay una diferencia > 3 dB, ¿qué fuente podrías estar subestimando u omitiendo?

4. Jerarquizá las fuentes: ordenalas de mayor a menor contribución. Identificá las 3 fuentes que MÁS APORTAN al ruido de fondo total. Estas son tus prioridades de intervención.

**Parte C — Evaluación según curvas de criterio (individual)**

1. Determiná el NC (Noise Criteria) de tu espacio. Usá tu espectro medido en bandas de octava (Parte A) o, si no tenés datos espectrales, usá la tabla de referencia de la clase para estimar. Recordá: el NC es la curva MÁS BAJA que NO es excedida en ninguna banda.

2. Compará tu NC con el criterio RECOMENDADO para el uso que le das a tu espacio:
   - Grabación profesional → NC 15-20
   - Mezcla / sala de control → NC 20-25
   - Ensayo → NC 25-30
   - Aula / conferencia → NC 25-30
   - Uso recreativo → NC 30-35

3. Calculá la BRECHA: ¿cuántos dB (o cuántos puntos NC) te separan del objetivo? Si tu espacio es NC-35 y necesitás NC-20, hay una brecha de 15 dB: tus prioridades de la Parte B deberían sumar al menos 15 dB de reducción para alcanzar el objetivo.

4. Clasificá tu ruido según RC (Room Criteria): ¿es (N) neutral, (R) rumble, (H) hiss, o (RV) rumble + vibration? Justificá basándote en tu percepción subjetiva o en el espectro medido.

5. Reflexión final (3-5 oraciones): ¿Es FACTIBLE alcanzar el NC objetivo en tu espacio con intervenciones realistas? ¿Cuál sería la intervención con mayor relación beneficio/costo? Si la brecha es muy grande (> 15 dB), ¿qué usos alternativos (grabar solo de día, usar auriculares para mezcla de graves, aceptar un NC más alto) serían más realistas que intentar alcanzar NC-20 en un departamento con ventanas a una avenida?

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Medición y mapeo (Parte A) | Medición completa con Leq, L₁₀, L₉₀, L_max, L_min; espectro por bandas de octava (medido o estimado con justificación); plano con ≥ 4 puntos de medición y puntos calientes identificados | Medición incompleta (faltan parámetros) o plano con < 4 puntos | Sin medición cuantitativa o plano ausente |
| Presupuesto de ruido (Parte B) | Tabla completa con ≥ 5 fuentes identificadas, tipo y mecanismo correctos, niveles consistentes con la medición, suma logarítmica calculada, jerarquización con 3 prioridades claras | Tabla con 3-4 fuentes o suma logarítmica ausente | Fuentes no identificadas correctamente o niveles inconsistentes con la medición |
| Curvas de criterio (Parte C) | NC estimado correctamente, comparación con criterio recomendado, brecha calculada, RC clasificado con justificación, reflexión realista sobre factibilidad | NC estimado pero sin comparación o sin reflexión de factibilidad | NC no estimado o criterio recomendado incorrecto para el uso declarado |
| Rigor diagnóstico | Diferenciación clara entre Leq, L₁₀ y L₉₀; comprensión de que miden cosas distintas; experimento de «apagar todo» realizado o simulado con lógica | Parámetros medidos pero sin distinguir su significado | Confunde Leq con L₁₀ o no entiende qué representa cada parámetro |

---

## 4. Cierre — «Tu primera inversión NO es un micrófono caro — es SILENCIO»

### Discusión guiada (10 min)

- «Levanten la mano los que descubrieron que su espacio tiene un NC superior a 30.» → La mayoría. «Esto es NORMAL en espacios no tratados. Lo importante es que ahora SABEN cuál es su punto de partida. No pueden mejorar lo que no miden.»

- «¿Cuál fue la fuente de ruido que más los sorprendió?» → Típicamente el HVAC o el ruido estructural (vecinos caminando = vibración que viaja por la losa). «El ruido de HVAC es el villano #1. No lo podés apagar. La solución no es más espuma en las paredes — es rediseñar el sistema de ventilación con baja velocidad de aire, silenciadores en ductos y rejillas de gran área. Y eso cuesta MÁS que todo el tratamiento acústico de la sala junto.»

- «Dato importante: el ruido de fondo NO se corrige con EQ, noise gates ni plugins de noise reduction. Esas herramientas atenúan el ruido CUANDO NO HAY SEÑAL (gates) o intentan sustraerlo espectralmente (plugins). Pero cuando el ruido y la señal OCUPAN LA MISMA FRECUENCIA AL MISMO TIEMPO — como el zumbido de 60 Hz del transformador durante una nota grave de bajo — ninguna herramienta puede separarlos sin dañar la señal. La ÚNICA solución es reducir el ruido en la fuente o en el camino de transmisión. La física no se negocia con plugins.»

- «La pregunta final: ¿cuánto silencio necesitan REALMENTE? NC-15 es el estándar de Abbey Road. ¿Necesitan Abbey Road en su dormitorio? Probablemente no. NC-25 es un objetivo realista y profesional para un estudio de proyecto (project studio). NC-30 es aceptable para preproducción y composición. Definir el objetivo correcto es tan importante como alcanzarlo — porque cada 5 dB extra de reducción de ruido DUPLICA el costo de la intervención.»

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"El ruido de fondo es el nivel sonoro presente en un espacio cuando no hay fuentes intencionales activas. Constituye el piso acústico del recinto: todo sonido útil por debajo de ese nivel es inaudible. Las fuentes de ruido se clasifican por origen (externo, interno, estructural) y por mecanismo de transmisión (aéreo, estructural por vibración, flanqueo por caminos alternativos). Las curvas NC (Noise Criteria), NR (Noise Rating) y RC (Room Criteria) permiten evaluar el ruido en bandas de octava y compararlo con criterios normalizados para distintos usos. Las curvas RC introducen un clasificador espectral (N, R, H, RV) que distingue entre ruido con balance neutral, exceso de graves, exceso de agudos o vibración estructural. La relación señal-ruido (SNR) determina la inteligibilidad y el rango dinámico útil: SNR ≥ 30 dB es necesario para grabación profesional. El diagnóstico de ruido de fondo requiere medición de Leq (promedio), L₁₀ (picos típicos) y L₉₀ (ruido base), idealmente por bandas de octava, y la construcción de un presupuesto de ruido que jerarquice las fuentes por su contribución. El ruido de HVAC es la fuente interna más importante y la más difícil de controlar porque es continua y no puede eliminarse apagando equipos. La primera inversión en un estudio no es un micrófono — es silencio."*

---

## Recursos adicionales para el docente

- [REW — Room EQ Wizard](https://www.roomeqwizard.com/) — software gratuito de medición acústica. Incluye RTA (analizador de espectro en tiempo real), medición de SPL con ponderación A/C/Z, y generador de señales. Fundamental para las Partes A y B.
- [NIOSH Sound Level Meter App](https://www.cdc.gov/niosh/topics/noise/app.html) — app de sonómetro gratuita desarrollada por el instituto de salud ocupacional de EE.UU. Calibrada para iPhone, con ponderación A/C/Z. Mucho más precisa que apps genéricas.
- [ANSI S12.2-2008 — Criteria for Evaluating Room Noise](https://webstore.ansi.org/standards/asa/ansisasas12-2008) — norma que define las curvas RC, NC y el método de evaluación. Referencia técnica para entender la diferencia entre NC y RC.
- [ISO 1996-1:2016 — Description, Measurement and Assessment of Environmental Noise](https://www.iso.org/standard/59765.html) — norma internacional que define las curvas NR y los procedimientos de medición de ruido ambiental.
- [Engineering Toolbox — NC Curves](https://www.engineeringtoolbox.com/nc-noise-criterion-d_725.html) — tabla de referencia rápida con los valores numéricos de las curvas NC en bandas de octava. Útil para que los estudiantes busquen su NC sin interpolar gráficos.
- [Artículo: HVAC Noise Control for Studios — Sound on Sound](https://www.soundonsound.com/techniques/studio-sos-designing-studio-hvac-systems) — guía práctica de diseño de sistemas HVAC silenciosos para estudios, con velocidades de aire recomendadas, tipos de silenciadores y ejemplos de instalación.
- [Video: How to Measure Room Noise — Siemens/Simcenter](https://www.youtube.com/watch?v=9Xj6fO3LH9Y) — demostración de un protocolo profesional de medición de ruido de fondo con sonómetro Clase 1 y analizador.

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «Medí con una app de celular y me dio 25 dBA en una sala que claramente tiene más ruido. ¿Está bien?» | Muy probablemente NO. Los micrófonos de los celulares tienen un piso de ruido propio de 25-35 dBA — no pueden medir por debajo de su propio ruido. Además, la mayoría de las apps genéricas no están calibradas y pueden tener errores de ±10 dB. Para mediciones serias (< 35 dBA), necesitás un sonómetro Clase 2 con micrófono externo o una app calibrada (NIOSH para iPhone). Si no tenés acceso, medí en dBC y dBA: una diferencia grande (> 10 dB) entre dBC y dBA confirma que hay mucho ruido en graves (que la app en dBA puede estar subestimando). Regla práctica: si PODÉS ESCUCHAR el ruido claramente, es al menos 30-35 dBA, aunque la app diga 25. |
| «Hice el presupuesto de ruido y la suma logarítmica me da 10 dB menos que el Leq medido. ¿Dónde está el error?» | Tres posibilidades: (a) Subestimaste alguna fuente. La suma logarítmica es dominada por las fuentes MÁS FUERTES — si tu fuente principal es 38 dBA y la estimaste en 33 dBA, el total cambia de 40.1 a 39.0 dBA. Revisá las fuentes con mayor nivel. (b) Olvidaste una fuente importante. ¿Mediste el ruido del disco duro de la computadora? ¿El zumbido de las luces? ¿El refrigerador en la cocina adyacente? (c) Hay ruido estructural que no se manifiesta como fuente aérea individual. Un vecino caminando produce vibración en la losa que se re-irradia como sonido en tu espacio — no es una «fuente aérea» identificable pero suma al Leq. |
| «No tengo analizador de espectro. ¿Cómo determino el NC sin datos por banda de octava?» | Sin datos espectrales, NO podés determinar el NC con precisión. Pero podés hacer una estimación conservadora: medí en dBA y dBC. Si dBC ≈ dBA (±3 dB), el ruido es de banda ancha y el NC ≈ dBA − 5 aproximadamente. Si dBC > dBA + 10 dB, tenés mucho ruido en graves → el NC va a estar dominado por las bandas de 63-125 Hz → tu NC real es probablemente 5-10 puntos MÁS ALTO que lo que sugeriría el dBA solo. Para un diagnóstico preliminar, esto es suficiente para identificar si tenés un problema de ruido en graves. Para un diagnóstico profesional, necesitás el espectro. |
| «¿Cómo distingo ruido aéreo de ruido estructural sin un acelerómetro?» | La prueba del contacto: poné la palma de la mano o la yema de los dedos contra la superficie sospechosa (pared, piso, tubería). ¿Sentís VIBRACIÓN? Si la respuesta es SÍ y la vibración coincide temporalmente con el ruido que escuchás (ej. sentís vibración en la pared cuando pasa un camión), es ruido ESTRUCTURAL. Si NO sentís vibración pero escuchás el ruido igual, es AÉREO. Otra técnica: tapate UN oído con el dedo y presioná el otro oído contra la superficie. Si el ruido se escucha MÁS FUERTE a través del contacto directo que por el aire, es estructural. Si se escucha igual o más fuerte sin contacto, es aéreo. |
| «Mi espacio necesita NC-20 pero está a NC-38. La brecha es enorme. ¿Por dónde empiezo?» | Empezá por las fuentes de MAYOR contribución en TU presupuesto de ruido. Si la ventana que da a la calle aporta 35 dBA, sellarla o reemplazarla por una ventana acústica (STC ≥ 40) puede bajar 15-20 dB — eso solo te lleva de NC-38 a NC-25 aproximadamente. Si el HVAC aporta 30 dBA, rediseñar el sistema de ventilación puede bajar otros 10 dB. La regla es: atacá PRIMERO la fuente más fuerte, después la segunda, y así sucesivamente. No intentes bajar 2 dB de cada fuente simultáneamente — es ineficiente. Y aceptá que quizás no llegues a NC-20: NC-25 ya es un estudio perfectamente profesional. La diferencia entre NC-25 y NC-20 es marginal en la práctica — la perciben ingenieros de mastering, no músicos grabando. |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
