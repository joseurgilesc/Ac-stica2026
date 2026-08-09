# Guía Docente — Sesión 4: Señales periódicas y aperiódicas

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** p5.js, Google Classroom, DAW con analizador de espectro (o plugin gratuito), grabaciones de instrumentos  
**Referencia:** Everest & Pohlmann, Capítulo 1 (pp. 7–11: Complex Waves, Harmonics, Phase, Partials) y Capítulo 5 (Signals, Speech, Music, and Noise)

---

## Objetivo de la sesión

Que el estudiante distinga entre tonos puros, ondas complejas y ruido, comprenda el concepto de espectro como «huella digital» del timbre, y relacione la presencia de armónicos y parciales con las características sonoras de instrumentos musicales reales.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | Demostración auditiva + diagnóstico conceptual |
| **Desarrollo** | 45 min | Teoría guiada: Fourier, armónicos, fase, espectro |
| **Práctica** | 45 min | Escucha comparativa, análisis espectral en DAW, síntesis aditiva |
| **Cierre** | 15 min | Discusión + bitácora |

---

## 1. Apertura — Demostración auditiva

### Materiales
- Generador de tonos (app de celular o plugin de DAW)
- Altavoz o sistema de sonido del aula
- Tres grabaciones preparadas: tono puro (440 Hz), misma nota en violín, ruido blanco

### Dinámica
1. Reproducir el tono puro (440 Hz sinusoidal). Preguntar: «¿Qué instrumento suena así?» (respuesta: ninguno real, es sintético).
2. Reproducir la misma nota (A4) en violín. Preguntar: «Es la misma nota, misma frecuencia fundamental. ¿Por qué suena distinto?»
3. Reproducir ruido blanco. Preguntar: «¿Esto tiene una nota definida? ¿Por qué no?»

### Preguntas disparadoras
- Si dos instrumentos tocan la misma nota, ¿qué los hace diferentes?
- ¿Por qué un diapasón suena «puro» y una guitarra no?
- ¿Qué información perdemos si solo miramos la forma de onda y no el espectro?

---

## 2. Desarrollo — Teoría guiada con simulación

### Secuencia sugerida

1. **Fourier: de lo simple a lo complejo** (10 min). Recordar la onda sinusoidal (sesiones 2-3). Plantear la pregunta: «si la naturaleza solo produce sinusoides, ¿cómo explicamos el sonido de una orquesta?». Presentar el teorema de Fourier como la respuesta: toda onda periódica = suma de sinusoides. Mostrar la analogía de la luz blanca descompuesta por un prisma → el espectro es el «prisma» del sonido.

2. **Fundamental, armónicos y parciales** (15 min). Definir la serie armónica: \(f_n = n \cdot f_0\). Mostrar con ejemplos auditivos:
   - Fundamental sola (100 Hz) → sonido «hueco», sin carácter
   - Fundamental + 2° armónico (100 + 200 Hz) → empieza a tener cuerpo
   - Fundamental + armónicos impares (100 + 300 + 500...) → se aproxima a onda cuadrada (sonido de clarinete)
   - Fundamental + todos los armónicos decreciendo como 1/n → diente de sierra (sonido de cuerda frotada)

       Distinguir **armónico** (múltiplo entero exacto) de **parcial** (cualquier componente). Mostrar el espectro de una campana o platillo: tiene parciales inarmónicos → no produce sensación de altura definida.

    **La serie armónica en notación musical.** Proyectar la siguiente imagen que muestra los primeros 8 parciales de la serie armónica sobre Do (C) y su correspondencia con la notación en pentagrama:

    ![Serie armónica sobre Do](../img/serie_armonica.svg)

    Tabla de referencia para los primeros 8 parciales:

    | Parcial | Relación con $f_0$ | Intervalo desde el anterior | Nota (sobre C) |
    |:-------:|:-------------------:|:---------------------------:|:--------------:|
    | 1 | Fundamental | — | C |
    | 2 | Octava | 8.ª justa | C |
    | 3 | Octava + 5.ª | 5.ª justa | G |
    | 4 | Dos octavas | 4.ª justa | C |
    | 5 | Dos octavas + 3.ª mayor | 3.ª mayor (lig. baja) | E |
    | 6 | Dos octavas + 5.ª | 3.ª menor | G |
    | 7 | Dos octavas + 7.ª menor | 3.ª menor (baja) | B♭ |
    | 8 | Tres octavas | 2.ª mayor | C |

    !!! tip "Conexión con la producción musical"
        Los primeros seis parciales forman un acorde mayor. Esto explica por qué un equalizador que realza 3 kHz en una nota grave está reforzando un armónico agudo — no la fundamental. Comprender la serie te permite ecualizar con criterio musical, no solo técnico.

3. **Fase: mismo espectro, distinta forma de onda** (10 min). Proyectar las Figs. 1-9 y 1-11 del Everest. Mostrar que dos ondas con idénticos componentes frecuenciales y amplitudes pueden verse completamente diferentes si cambia la fase. Aclarar: el oído es poco sensible a la fase en estado estacionario, pero la fase es crítica en la suma de señal directa + reflejada y en la localización espacial.

4. **Dominio temporal vs. frecuencial** (10 min). Abrir un analizador de espectro (plugin gratuito de DAW o Voxengo SPAN). Reproducir una nota de guitarra. Señalar: la forma de onda (dominio temporal) es un «garabato» que se repite; el espectro (dominio frecuencial) muestra picos en \(f_0, 2f_0, 3f_0\ldots\). Preguntar: «¿Cuál de las dos representaciones te dice más sobre el timbre?» (el espectro).

5. **Ruido blanco, rosa y marrón** (opcional, 5 min). Si hay tiempo, reproducir los tres tipos de ruido. Conectar con aplicaciones: ruido rosa para ecualizar salas y sistemas de sonido, ruido blanco para enmascarar conversaciones, ruido marrón para relajación.

---

## 3. Práctica — Análisis espectral y síntesis

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 4 — Espectro y timbre

**Instrucciones:**

**Parte A — Análisis espectral con DAW (individual)**

1. Cargá en tu DAW (o en Audacity, gratuito) las cuatro pistas de audio que se adjuntan. Cada una contiene la misma nota (A4 = 440 Hz) tocada en un instrumento diferente: diapasón, violín, piano, guitarra eléctrica limpia.
2. Insertá un analizador de espectro en cada pista (SPAN, Fruity Parametric EQ 2, EQ Eight, o equivalente).
3. Capturá una imagen del espectro de cada instrumento y pegala en un documento.
4. Para cada instrumento, identificá y anotá:
   - La frecuencia fundamental (\(f_0\))
   - Los primeros 5 armónicos visibles y su amplitud relativa aproximada (en dB)
   - ¿Hay parciales inarmónicos visibles?
   - ¿Qué rango de frecuencias concentra más energía?

**Parte B — Síntesis aditiva (individual)**

Usá el [simulador de síntesis aditiva de p5.js](https://editor.p5js.org/) (se proporciona enlace) para crear tres timbres diferentes modificando la cantidad y amplitud de los armónicos:

| Parámetro | Timbre A (brillante) | Timbre B (oscuro) | Timbre C (hueco) |
|---|---|---|---|
| Armónicos presentes | 1, 2, 3, 4, 5, 6, 7, 8 | Solo 1, 2, 3 | Solo 1, 3, 5, 7 |
| Amplitud relativa de armónicos | Decreciente (1/n) | Armónicos 2 y 3 a −12 dB | Todos igual amplitud |

Capturá la forma de onda y el espectro de cada timbre. Escribí una breve descripción de cómo suena cada uno.

**Parte C — Reflexión (150 palabras)**

Redactá un comentario técnico que responda: ¿por qué dos instrumentos que tocan la misma nota suenan diferente? Usá los conceptos de **fundamental, armónicos, parciales, espectro y timbre**. Mencioná al menos un ejemplo concreto de los instrumentos que analizaste.

**Fecha de entrega:** [definir según calendario]

**Parte D — Serie armónica a mano (individual)**

1. En papel pentagramado, escribí las series armónicas de cuatro notas fundamentales: **G (Sol)**, **D (Re)**, **B♭ (Si bemol)** y **F (Fa)**.
2. Para cada fundamental, dibujá los primeros **8 parciales** en redondas sobre un pentagrama en clave de sol.
3. Etiquetá cada parcial con su número (1 a 8) debajo de la nota.
4. Entregá una foto clara o escaneo de las cuatro series.

| Parcial | G (Sol) | D (Re) | B♭ (Sib) | F (Fa) |
|:-------:|:-------:|:------:|:--------:|:------:|
| 1 | G3 | D3 | B♭2 | F2 |
| 2 | G4 | D4 | B♭3 | F3 |
| 3 | D5 | A4 | F4 | C4 |
| 4 | G5 | D5 | B♭4 | F4 |
| 5 | B5 | F♯5 | D5 | A4 |
| 6 | D6 | A5 | F5 | C5 |
| 7 | F6 | C6 | A♭5 | E♭5 |
| 8 | G6 | D6 | B♭5 | F5 |

!!! note "Objetivo de este ejercicio"
    Escribir la serie a mano obliga al estudiante a internalizar la relación entre la serie armónica (concepto físico) y la notación musical (herramienta del músico). Al hacerlo para cuatro fundamentales distintas, se refuerza el patrón de intervalos sin depender de una sola tonalidad.

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Análisis espectral (Parte A) | 4 instrumentos analizados, f₀ y ≥5 armónicos identificados, amplitudes anotadas | 3 instrumentos o faltan algunos armónicos | ≤2 instrumentos o sin identificar armónicos |
| Síntesis aditiva (Parte B) | 3 timbres creados con capturas de forma de onda + espectro + descripción | 2 timbres o capturas incompletas | 1 timbre o sin capturas |
| Comentario técnico (Parte C) | Usa ≥4 conceptos (fundamental, armónico, parcial, espectro, timbre) con ejemplos concretos | Usa 2-3 conceptos, ejemplos vagos | No usa terminología de la sesión o sin ejemplos |

---

## 4. Cierre — Discusión y bitácora

### Discusión guiada (10 min)

- «¿Por qué un ingeniero de mezcla necesita un analizador de espectro y no solo sus oídos?»
- «Si el oído es poco sensible a la fase, ¿por qué nos preocupamos por la alineación de fase al grabar con múltiples micrófonos?»
- «Un sintetizador puede imitar un violín generando los mismos armónicos. ¿Qué le falta para sonar exactamente igual?» (envolvente dinámica, ruido de arco, variaciones microtonales, formantes)

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Hoy aprendí que todo sonido periódico puede descomponerse en ondas sinusoidales (Fourier). El timbre de un instrumento depende de qué armónicos están presentes, con qué intensidad relativa y cómo evolucionan en el tiempo. El espectro es como una huella digital: dos instrumentos pueden compartir la misma nota fundamental pero tener espectros completamente diferentes. El ruido no tiene frecuencia definida porque su espectro es continuo, sin líneas discretas."*

---

## Recursos adicionales para el docente

- [Simulación interactiva de la sesión 2](../unidades/U-1-fundamentos-medicion/sesion-02/simulacion.html) — para visualizar ondas
- [p5.js Web Editor](https://editor.p5js.org/) — para modificar o crear sketches de síntesis aditiva
- [Voxengo SPAN](https://www.voxengo.com/product/span/) — analizador de espectro gratuito (VST/AU/AAX)
- [Audacity](https://www.audacityteam.org/) — editor de audio gratuito con vista de espectro (menú Analyze → Plot Spectrum)
- [Academo: Spectrum Analyzer](https://academo.org/demos/spectrum-analyzer/) — analizador online, sin instalar nada
- [Music Lab: Harmonics](https://musiclab.chromeexperiments.com/Harmonics/) — experimento interactivo de Chrome sobre la serie armónica

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «No entiendo la diferencia entre parcial y armónico» | Todo armónico es un parcial. Pero un parcial puede ser inarmónico (no es múltiplo entero). Mostrar espectro de campana vs. violín: el violín tiene líneas en 440, 880, 1320... (armónicos); la campana tiene líneas en frecuencias «raras» como 440, 935, 1480... (parciales inarmónicos) |
| «¿Para qué sirve saber esto en producción musical?» | Tres aplicaciones directas: (1) Ecualización: entendés qué estás cortando o realzando en el espectro. (2) Elección de micrófonos: cada micrófono tiene una respuesta en frecuencia distinta. (3) Capas en mezcla: si dos instrumentos compiten en el mismo rango espectral, entendés por qué se enmascaran |
| El estudiante no tiene DAW instalado | Usar Audacity (gratuito, multiplataforma) + plugin SPAN gratuito. O usar el analizador online de Academo como alternativa mínima |
| Confusión entre espectro de línea (periódico) y continuo (ruido) | Dibujar ambos en la pizarra: el espectro de una nota de violín tiene «peines» (líneas verticales espaciadas regularmente), el ruido es una «alfombra» continua. Las líneas indican periodicidad — si no hay líneas, no hay tono definido |
| Dificultad para leer dB negativos en el analizador | Recordar de la sesión 5 (si ya se dio) o adelantar: 0 dB en el analizador es el pico más alto; los armónicos más débiles aparecen como valores negativos (−6 dB, −12 dB, −24 dB). Son relativos, no absolutos |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
