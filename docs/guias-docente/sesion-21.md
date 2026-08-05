# Guía Docente — Sesión 21: Reflexiones tempranas y efecto de precedencia

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, parlante, p5.js (simulador de reflexiones y comb filter), DAW con plugin de delay, grabadora (celular), cinta métrica  
**Referencia:** Everest & Pohlmann, Capítulo 6, pp. 114–125 (Reflection, Early Reflections, Ray Tracing) + Capítulo 10, pp. 154–169 (Comb-Filter Effects, Precedence Effect)

---

## Objetivo de la sesión

Que el estudiante identifique las reflexiones tempranas en una respuesta impulsional, calcule el patrón de comb filtering producido por una reflexión simple, explique el efecto de precedencia (Haas) y su ventana de fusión perceptual, y diseñe el tratamiento de puntos de primera reflexión en un cuarto de control.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | «¿Escuchás el eco?» — demostración auditiva del efecto Haas con delay variable |
| **Desarrollo** | 40 min | Teoría guiada: respuesta impulsional, comb filter, efecto de precedencia, RFZ, reflexiones tempranas vs. tardías |
| **Práctica** | 45 min | Mapeo de primera reflexión + simulación de comb filter en p5.js |
| **Cierre** | 20 min | «La sala te está ecualizando la mezcla» + bitácora |

---

## 1. Apertura — «¿Escuchás el eco?»

### Materiales
- DAW o plugin que permita generar un sonido seco (clave, golpe de tambor) con un delay de tiempo y nivel ajustables
- Parlante mono (o par estéreo conmutado a mono para eliminar variables)

### Dinámica

1. Reproducir un sonido seco y corto (clave). Luego reproducir el MISMO sonido con un delay de 5 ms, con nivel igual al directo. Preguntar: «¿Escuchan DOS sonidos? ¿O UNO solo?» → UNO solo. El cerebro fusiona los dos eventos.
2. Subir el delay a 15 ms, mismo nivel. Preguntar: «¿Ahora?» → Sigue siendo UNO solo, pero quizás suena «más grueso» o con una coloración extraña.
3. Subir a 50 ms. Preguntar: «¿Ahora?» → DOS sonidos claramente separados: CLAC... clac. ECO.
4. Preguntar: «¿En qué momento exacto el cerebro dejó de fusionarlos y empezó a escucharlos separados?» → Alrededor de 30-50 ms. Ese es el efecto de precedencia.

5. Repetir el experimento PERO bajando el nivel del delay 10 dB. A 15 ms de delay con −10 dB: «¿Escuchan el delay separado?» → NO. A 50 ms con −10 dB: «¿Y ahora?» → Quizás no. El nivel IMPORTA: una reflexión suave y tardía puede pasar desapercibida.

### Preguntas disparadoras
- «Si el cerebro FUSIONA las reflexiones que llegan dentro de los primeros 30 ms, ¿significa que esas reflexiones NO AFECTAN lo que escuchamos?» → FALSO. Las fusiona perceptualmente como fuente, pero la INTERFERENCIA acústica (comb filtering) ocurre IGUAL. Tu cerebro oye «una sola fuente» pero con un timbre COLOREADO.
- «¿Por qué los ingenieros ponen paneles absorbentes en las paredes laterales del estudio si ni siquiera están en la línea directa entre monitores y oídos?» → Porque esas paredes producen PRIMERAS REFLEXIONES que llegan dentro de los primeros 15-20 ms y colorean el sonido.

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **La respuesta impulsional (IR)** (5 min). Mostrar una imagen de una IR de una sala real (grabada con REW, por ejemplo). Señalar las tres zonas: sonido directo, reflexiones tempranas (discretas, separadas por ms), cola reverberante (continua). Preguntar: «¿Cómo sabés cuál reflexión viene de qué pared?» → Calculás el retardo: Δt = Δd / c. Si una reflexión llega 10 ms después del directo, recorrió 3.43 m MÁS. Midiendo la sala, podés triangular qué superficie la produjo.

   > Insertar **Fig. 6-4** del Everest: respuesta impulsional con reflexiones etiquetadas.

2. **Comb filter: la matemática del desastre** (15 min). Deducir el espaciado entre valles: Δf = c / Δd. Mostrar ejemplos concretos con Δd = 0.5 m (consola), 1.5 m (pared lateral), 3 m (pared trasera). Mientras MÁS CHICA es Δd, MÁS GRANDE es Δf → los valles están más separados → más fácil de oír la coloración.

   > Insertar **Fig. 10-1** del Everest: respuesta de un filtro comb.

   **Demostración en vivo (si hay DAW):**
   - Cargar un ruido blanco en un canal.
   - Duplicar el canal, aplicarle un delay de 1 ms, sumarlos.
   - Insertar un analizador de espectro. Mostrar el peine: primer valle en 500 Hz (Δd = 0.34 m → típico de reflexión de consola).
   - Cambiar el delay a 5 ms: ahora los valles están cada 200 Hz. Preguntar: «¿Cuál suena peor?»

3. **Efecto de precedencia (Haas)** (10 min). Explicar las tres zonas de fusión. El dato CLAVE: la reflexión puede tener HASTA 10 dB MÁS de nivel que el sonido directo y aún así el cerebro LOCALIZA en la dirección del sonido que llegó PRIMERO (¡siempre que Δt < 30 ms!). Esto es contraintuitivo pero cierto. La evolución nos programó para confiar en el primer frente de onda — es la información más confiable sobre dónde está la fuente.

   > Insertar **Fig. 10-3** del Everest: diagrama del efecto Haas.

   Preguntar: «En un home theater 5.1, los parlantes surround están a los costados. ¿Por qué no escuchamos el diálogo viniendo de los costados?» → Porque el sonido de los parlantes frontales (diálogo) llega PRIMERO. El cerebro suprime la localización de lo que llega de los costados y lo fusiona como «ambiente».

4. **RFZ: zona libre de reflexiones** (10 min). Dibujar un cuarto de control en la pizarra. Posición del ingeniero (a 38% de la pared frontal, triángulo equilátero con monitores). Trazar con tiza láser (o dibujar con marcador):
   - El camino directo monitor → oído.
   - El camino monitor → pared lateral → oído. Medir: Δd, Δt. Si Δt < 20 ms → esa pared necesita TRATAMIENTO.
   - El camino monitor → techo → oído.
   - El camino monitor → pared trasera → oído.

   La RFZ se construye absorbiendo en los puntos de PRIMERA reflexión. Las reflexiones de SEGUNDO orden (dos rebotes) y la cola reverberante NO se eliminan — solo se atenúan las PRIMERAS.

---

## 3. Práctica — Mapeo de reflexiones y simulación

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 21 — Reflexiones tempranas y efecto de precedencia

**Instrucciones:**

**Parte A — Mapeo de primeras reflexiones (en el aula o en casa)**

En el espacio que uses para mezclar/grabar (o el aula, si estás en clase):

1. Medí y dibujá un plano en escala de la sala (vista superior). Marcá:
   - La posición de tus monitores (o parlantes)
   - Tu posición de escucha (el «punto dulce»)
   - Las distancias exactas

2. Usando el **método de la imagen** (dibujar la sala «espejada» detrás de cada pared), calculá para CADA superficie (pared lateral izquierda, pared lateral derecha, techo, pared frontal, pared trasera):
   - Distancia del camino reflejado: \(d_{\text{reflejado}}\) (en metros)
   - Distancia del camino directo (ya medida): \(d_{\text{directo}}\)
   - Diferencia de camino: \(\Delta d = d_{\text{reflejado}} - d_{\text{directo}}\) (en metros)
   - Retardo de la reflexión: \(\Delta t = \Delta d / 343\) (en segundos, después convertilo a ms)

3. Completá la tabla:

    | Superficie | \(d_{\text{directo}}\) (m) | \(d_{\text{reflejado}}\) (m) | Δd (m) | Δt (ms) | ¿Está dentro de la RFZ? (Δt < 20 ms) | ¿Requiere tratamiento? |
    |---|---|---|---|---|---|---|
    | Pared lateral izq. | | | | | | |
    | Pared lateral der. | | | | | | |
    | Techo | | | | | | |
    | Pared frontal (detrás de monitores) | | | | | | |
    | Pared trasera | | | | | | |
    | Piso / consola | | | | | | |

4. Para cada superficie con Δt < 20 ms, calculá la frecuencia del PRIMER VALLE del comb filter que produciría:
   \[
   f_{\text{valle},0} = \frac{c}{2 \cdot \Delta d}
   \]
   Respondé: ¿en qué rango del espectro está este valle? ¿Es probable que afecte decisiones de mezcla?

5. Dibujá sobre tu plano los puntos de primera reflexión (método del espejo) y proponé TRATAMIENTO para cada uno (panel absorbente, difusor, nube acústica, alfombra, angulación de consola). Justificá cada elección.

**Parte B — Simulación de comb filter en p5.js (o DAW)**

1. Abrí el [editor de p5.js](https://editor.p5js.org/) (o usá un DAW). Creá un sketch o sesión que:
   - Genere un barrido de frecuencia (sine sweep) de 20 Hz a 20 kHz en 5 segundos
   - Sume una copia retardada (Δt configurable con un slider)
   - Muestre el ESPECTRO resultante (usando FFT)

2. Experimentá con Δt = 1 ms, 3 ms, 10 ms, 30 ms. Para cada valor:
   - Contá cuántos valles ves en el rango audible (20 Hz – 20 kHz)
   - Medí el espaciado entre valles consecutivos (Δf)
   - Verificá que Δf = 1/Δt

3. Respondé:
   - ¿Qué Δt produce el comb filter MÁS AUDIBLE (más perjudicial para mezcla)? Justificá. (Pista: pensá en la densidad de valles en el rango de frecuencias donde el oído es más sensible, 1-5 kHz.)
   - Si Δt = 30 ms, ¿el espaciado entre valles es suficiente para que un ecualizador paramétrico pueda «corregir» algún valle? ¿Por qué sí o por qué no?

**Parte C — Experimento perceptual: efecto Haas (en casa con auriculares)**

1. En tu DAW, cargá un sonido seco y corto (snare, clave, golpe) en una pista MONO.
2. Duplicá la pista. A la copia, aplicale:
   - Un delay (sin feedback) empezando en 1 ms, paneado 100% a la DERECHA
   - La pista original paneada 100% a la IZQUIERDA
3. Escuchá con auriculares y variá el delay: 1 ms, 5 ms, 10 ms, 20 ms, 30 ms, 50 ms, 80 ms.
4. Para cada valor, anotá:
   - ¿Dónde percibís la fuente? (solo izquierda, centro-izquierda, centro, difusa, dos fuentes separadas)
   - ¿A partir de qué delay empezás a escuchar DOS eventos en lugar de UNO?

5. Repetí el experimento PERO bajando el nivel de la copia retardada 10 dB. Respondé:
   - ¿Cambia el delay al que se percibe el eco? ¿Por qué?

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Mapeo de reflexiones (Parte A) | Plano en escala, 6+ superficies analizadas con Δd/Δt correctos, primer valle calculado, RFZ evaluada, propuesta de tratamiento fundamentada por superficie | Plano presente pero sin escala, errores en 1-2 Δd, propuesta de tratamiento presente pero genérica («poner paneles») sin justificar | Plano incompleto o ausente, cálculo de Δd incorrecto en ≥3 superficies |
| Simulación comb filter (Parte B) | Barrido + FFT funcionando, 4 Δt probados, número de valles contado y Δf medido, análisis de audibilidad del comb filter bien justificado, conclusión sobre EQ vs. comb filter correcta | Simulación hecha pero sin medición de Δf, o análisis superficial de audibilidad | Simulación no funcionando o sin evidencia |
| Experimento Haas (Parte C) | 7 retardos evaluados con descripciones perceptivas, delay de separación identificado (~30-50 ms), efecto del nivel (−10 dB) analizado | Evaluación de retardos presente pero incompleta, delay de separación no identificado | Experimento no realizado o sin registros |

---

## 4. Cierre — «La sala te está ecualizando la mezcla»

### Discusión guiada (15 min)

- «En la Parte A, ¿cuál fue la superficie con la reflexión más TEMPRANA? ¿Y la más DAÑINA?» → Típicamente la consola o escritorio (Δd pequeña → Δt chico → valle en frecuencias medias audibles) y las paredes laterales (Δd media → Δt ~5-15 ms → valle en medios-agudos). La pared trasera suele tener Δt > 30 ms → eco en lugar de comb filter.
- «¿Por qué un valle a 800 Hz es MÁS DAÑINO para una mezcla que un valle a 80 Hz o a 12 kHz?» → El oído humano es MÁXIMAMENTE sensible entre 2-5 kHz (curvas de Fletcher-Munson), y las frecuencias entre 500 Hz y 4 kHz contienen la mayor parte de la información de inteligibilidad de la voz y definición de instrumentos. Un valle en 800 Hz te hace tomar decisiones de EQ incorrectas sobre el elemento MÁS importante de la mezcla (la voz).
- «En la Parte B, ¿se puede corregir un comb filter con un ecualizador?» → NO. El EQ afecta a TODA la señal (directo + reflexión). Si ecualizás para «llenar» un valle del comb filter, estás agregando ganancia en esa frecuencia a la señal DIRECTA también — que NO tenía ese problema. La única corrección real es eliminar la reflexión que causa el filtro comb. Esto es una lección FUNDAMENTAL: hay problemas que se arreglan con procesamiento de señal (EQ, compresión) y hay problemas que se arreglan con ACÚSTICA (tratamiento de sala). Saber distinguirlos es lo que separa a un ingeniero de un aficionado.
- «¿Cuál es el 'punto dulce' de reflexiones? ¿Cuántas reflexiones tempranas son DESEABLES?» → CERO reflexiones fuertes dentro de los primeros 15-20 ms (eso es la RFZ). Después de 20 ms, las reflexiones son DESEABLES porque dan sensación de espacio y naturalidad. El arte del diseño acústico no es hacer una cámara anecoica (que suena horrible para escuchar música) — es controlar CUÁLES reflexiones llegan y CUÁNDO.

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"En un recinto cerrado, lo que llega a nuestros oídos no es solo el sonido directo de la fuente. También llegan reflexiones que rebotaron en paredes, techo, piso y objetos. Las reflexiones se dividen en tempranas (≤ 80 ms, direccionales, discretas) y tardías (> 80 ms, difusas, continuas). Cuando una reflexión simple se suma al sonido directo, produce un patrón de interferencia llamado filtro comb (comb filter): una serie de picos (+6 dB) y valles (−∞ dB en el caso ideal) regularmente espaciados en el espectro. El primer valle está en f = c/(2·Δd) y el espaciado entre valles es Δf = c/Δd. Este filtro comb NO se puede corregir con ecualización porque es un problema en el dominio del tiempo (una reflexión retardada), no en el dominio de la frecuencia. La única solución es eliminar o atenuar la reflexión que lo causa. El efecto de precedencia (efecto Haas) establece que el cerebro localiza el sonido en la dirección del PRIMER frente de onda que llega, suprimiendo la localización de las reflexiones que arriban dentro de los primeros 30 ms. Esto permite que las reflexiones no desplacen la imagen espacial, pero NO elimina la coloración por comb filtering. En un estudio de grabación, el objetivo es crear una zona libre de reflexiones tempranas (RFZ) de al menos 15-20 ms tratando acústicamente los puntos de primera reflexión en paredes laterales, techo y consola."*

---

## Recursos adicionales para el docente

- [Simulador de comb filter en p5.js](https://editor.p5js.org/) — sketch con: generación de ruido blanco o barrido, delay configurable (slider), FFT mostrando el peine en tiempo real, control de nivel de la reflexión. Armar antes de la clase y compartir enlace
- [Video: The Haas Effect explained — Produce Like A Pro](https://www.youtube.com/watch?v=O6zeBXfQCRw) — demostración auditiva y visual del efecto Haas con ejemplos de mezcla
- [LEDE / RFZ concept — history and application](https://www.jhbrandt.net/resources/) — explicación del concepto Live-End-Dead-End y Reflection Free Zone en diseño de estudios
- [REW — Room EQ Wizard](https://www.roomeqwizard.com/) — medir la respuesta impulsional real del aula y mostrar las reflexiones tempranas con su Δt medido
- [Abbey Road Studio 2 impulse response](https://www.waves.com/plugins/abbey-road-studio-3) — IR de un estudio legendario. Mostrar las reflexiones tempranas y la cola. Comparar con la IR del aula
- [Video: Why Your Room is Ruining Your Mixes — Acoustics Insider](https://www.youtube.com/watch?v=GqA5MxkE0cA) — excelente explicación visual de cómo las reflexiones afectan la respuesta en frecuencia en la posición de escucha

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «No entiendo por qué un delay de 1 ms produce un valle a 500 Hz.» | El valle ocurre cuando el desfase es 180° (media longitud de onda). A 500 Hz, λ = 0.686 m. Media λ = 0.343 m → eso recorre el sonido en exactamente 1 ms. Si la reflexión llega 1 ms después (Δd = 0.343 m), a 500 Hz el desfase es 180° → cancelación. Si llega 2 ms después (Δd = 0.686 m), a 500 Hz el desfase es 360° (una vuelta completa) → refuerzo. Dibujar las dos ondas superpuestas en la pizarra ayuda MÁS que cualquier fórmula |
| «Hice el experimento Haas y no escucho diferencia entre 1 ms y 10 ms.» | Con auriculares y paneo 100% L/R, el efecto Haas es MUY evidente. Verificar: ¿el delay está en 100% wet, sin mezcla del original en el canal del delay? ¿Los auriculares son estereofónicos? ¿El sonido es corto y con transitorio claro (snare, clave)? Un sonido sostenido (pad, nota larga) hace difícil percibir la separación temporal |
| «Mis Δt calculados en la Parte A son muy distintos a los de mis compañeros.» | Posible. Las reflexiones dependen MUCHO de la geometría exacta: posición del monitor, posición del oído, altura, distancia. Medir con CUIDADO. Pero si la diferencia es grosera (ej. 5 ms vs. 25 ms para la misma pared), revisar si ambos están midiendo la MISMA reflexión (¿especular vs. difusa?) y si están usando correctamente el método de la imagen |
| «El valle a 800 Hz de mi comb filter está justo donde está la fundamental de la voz. ¿Mi sala me está mintiendo?» | SÍ. Exactamente. Por eso necesitás tratamiento acústico. El comb filter de la consola (Δd ≈ 0.3-0.8 m → valle en 200-600 Hz) cae JUSTO en el rango de la voz humana. Si mezclás voces en una sala sin tratar, estás peleando contra un problema que NO está en la grabación — está en TU cuarto |
| «¿Para qué quiero saber todo esto si uso auriculares para mezclar?» | Aunque mezcles con auriculares, GRABAR requiere una sala. Si grabás una guitarra acústica, un cantante, o incluso un amplificador miked, las reflexiones de la sala quedan impresas en la grabación. Además, los auriculares abiertos (los que se usan para mezcla) DEJAN PASAR el sonido ambiente — incluyendo las reflexiones de tu cuarto. Y eventualmente, todo ingeniero termina trabajando con monitores. Saber qué hace tu sala y cómo corregirlo es una habilidad FUNDAMENTAL |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
