# Guía Docente — Sesión 8: Tipos de fuentes sonoras

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, p5.js para visualización de patrones polares, parlante Bluetooth, app de sonómetro, hojas técnicas de micrófonos y altavoces (PDFs)  
**Referencia:** Everest & Pohlmann, Capítulo 3, pp. 31–45 (Sound in the Free Field — Point/Line/Plane Sources, Directivity, Near/Far Fields, Inverse Square Law)

---

## Objetivo de la sesión

Que el estudiante clasifique fuentes sonoras según su geometría (puntual, lineal, plana), interprete patrones polares y factor de directividad (Q), calcule la caída de SPL con la distancia usando la ley del inverso del cuadrado, y relacione estos conceptos con el posicionamiento de monitores, micrófonos y parlantes en estudio y vivo.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | Experimento: moverse alrededor de un parlante + medición a dos distancias |
| **Desarrollo** | 50 min | Teoría guiada: geometría de fuentes, campo cercano/lejano, directividad, Q, ley del inverso del cuadrado |
| **Práctica** | 40 min | Análisis de patrones polares + diseño de posicionamiento para ensayo |
| **Cierre** | 15 min | Discusión: por qué los line arrays existen + bitácora |

---

## 1. Apertura — «¿Por qué el tweeter hay que apuntarlo a los oídos?»

### Materiales
- Un parlante Bluetooth (o monitor de estudio activo)
- App de sonómetro proyectada
- Ruido rosa como señal de prueba
- Cinta métrica

### Dinámica
1. Colocar el parlante en el centro del aula reproduciendo ruido rosa a volumen moderado.
2. Medir el SPL a 50 cm del parlante (de frente, a la altura del tweeter).
3. Manteniendo el micrófono a la misma altura, moverse a 1 m y medir. Preguntar: «¿Cuánto bajó?» (~6 dB).
4. Moverse a 2 m. ¿Cuánto bajó respecto a 1 m? (~6 dB más).
5. Ahora, a 1 m de distancia, moverse en semicírculo: 0° (frente), 45°, 90° (costado), 135°, 180° (atrás). Preguntar: «¿Cambia el nivel? ¿Es igual para graves que para agudos?»

### Preguntas disparadoras
- «¿Por qué en un concierto hay una torre de parlantes colgando y no un solo parlante gigante?»
- «Si el bajo es omnidireccional, ¿por qué los ingenieros discuten tanto sobre dónde poner el subwoofer?»
- «¿Qué pasa si apunto un micrófono cardioide al revés?»

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Geometría de fuentes: puntual, lineal, plana** (15 min). Dibujar en la pizarra tres situaciones:
   - **Puntual**: una esfera expandiéndose. La energía se distribuye sobre una superficie que crece como r² → −6 dB al duplicar distancia. Ejemplo: un parlante pequeño, una persona hablando.
   - **Lineal**: un cilindro expandiéndose. El área crece como r → −3 dB al duplicar. Ejemplo: una columna de altavoces (*line array*), tráfico en una autopista.
   - **Plana**: sin divergencia → ~0 dB en campo cercano. Ejemplo: el campo cercano de un altavoz grande, un pistón en un tubo.

   Enfatizar la transición: una fuente lineal a larga distancia se comporta como puntual (cuando r ≫ longitud de la línea). Una fuente plana también. Toda fuente, suficientemente lejos, se vuelve puntual.

   > Insertar **Fig. 3-1** del Everest: fuente puntual — divergencia esférica y la relación con 1/r².

2. **Campo cercano vs. campo lejano** (10 min). Derivar la fórmula en la pizarra: \(r_{\text{lejano}} = 2d^2 / \lambda\). Mostrar con el ejemplo del monitor de estudio:
   - A 100 Hz → campo lejano a 1.6 cm (básicamente siempre en campo lejano)
   - A 1 kHz → 16 cm (en el borde en posición de mezcla)
   - A 10 kHz → 1.6 m (¡en campo cercano en posición de mezcla!)

   Preguntar: «¿Qué significa esto?» → Que lo agudo es mucho más sensible a la posición de escucha. El sweet spot es real: existe porque el tweeter es direccional y estás en su campo cercano.

3. **Directividad: Q y DI** (15 min). Definir Q como el factor que relaciona cuánta energía se concentra en una dirección. Mostrar que:
   - Q = 1 (0 dB) → omnidireccional
   - Q = 2 (3 dB) → hemiesfera (parlante sobre suelo reflectante)
   - Q = 4 (6 dB) → cuarto de esfera (esquina)
   - Q = 8 (9 dB) → octante (esquina de tres planos)

   > Insertar **Fig. 3-4** del Everest: patrones polares comparando frecuencias bajas vs. altas. Señalar que todas las fuentes se vuelven más direccionales al subir la frecuencia.

   > Insertar **Fig. 3-5** del Everest: Q vs. frecuencia para diferentes geometrías.

4. **Patrones polares de micrófonos y parlantes** (10 min). Proyectar los 6 patrones (omni, cardioide, super, hiper, bi, shotgun) con dibujos claros. Para cada uno, preguntar: «¿En qué situación de producción musical usarías este patrón?»

   - **Cardioide**: vocalista en escenario (nulo al monitor de piso)
   - **Bidireccional**: entrevista frente a frente con un solo micrófono de cinta
   - **Omnidireccional**: medición acústica de sala (necesitás respuesta plana en todas direcciones)
   - **Shotgun**: boom de cine, captar diálogo a 2 m sin grabar la calle

5. **Ley del inverso del cuadrado** (opcional si sobra tiempo, 5 min). Derivar: \(\text{SPL}(r_2) = \text{SPL}(r_1) + 20\log(r_1/r_2)\). Aplicación: si un monitor entrega 90 dB a 1 m, ¿cuánto entrega a 2.5 m? 90 + 20·log(1/2.5) = 90 − 8 = 82 dB.

---

## 3. Práctica — Análisis de fuentes y diseño de posicionamiento

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 8 — Tipos de fuentes y directividad

**Instrucciones:**

**Parte A — Análisis de patrones polares (individual)**

Se adjuntan las hojas técnicas de dos micrófonos y dos altavoces:

1. **Micrófono A**: Shure SM58 (dinámico, cardioide)
2. **Micrófono B**: AKG C414 (condensador, multipatrón: cardioide, omni, figura 8, hipercardioide)

3. **Parlante A**: Monitor de estudio de campo cercano (woofer 6.5", tweeter 1")
4. **Parlante B**: Subwoofer activo de 12"

Para cada uno, analizá y respondé:

| Pregunta | Mic A | Mic B | Parl A | Parl B |
|---|---|---|---|---|
| ¿Cuál es su patrón polar (o rango de patrones)? | | | | |
| ¿En qué rango de frecuencias mantiene ese patrón? ¿Qué pasa fuera de ese rango? | | | | |
| ¿Cuál es su Q (o rango de Q) en condiciones típicas de uso? | | | | |
| Sugerí una aplicación concreta en producción musical para este equipo y explicá por qué su patrón polar es adecuado | | | | |
| Sugerí una aplicación DONDE NO USARÍAS este equipo y explicá por qué su patrón lo hace inadecuado | | | | |

**Parte B — Cálculo de SPL vs. distancia (individual)**

Un monitor de estudio activo tiene sensibilidad de 88 dB SPL / 1W / 1m montado en campo libre. Asumí Q ≈ 2 (sobre consola).

1. Calculá el SPL a las siguientes distancias: 0.5 m, 1 m, 1.5 m, 2 m, 3 m, 4 m.
2. Graficá SPL vs. distancia (eje X logarítmico). ¿Qué observás sobre la forma de la curva?
3. El fabricante recomienda una distancia de escucha de 1 a 1.5 m. ¿Por qué creés que recomienda ese rango?
4. Si el ingeniero sube el volumen para que a 2 m el SPL sea igual que el que había a 1 m, ¿cuánta potencia adicional debe entregar el amplificador? (Ayuda: una pérdida de 6 dB requiere ×4 en potencia.)

**Parte C — Diseño de posicionamiento (en parejas)**

Imaginá que debés sonorizar un ensayo de una banda de 5 integrantes en una sala rectangular de 6 × 8 m:

- Batería (centro del fondo, 3 m de la pared trasera)
- Dos guitarras (laterales, cerca de sus amplificadores, a 2 m de la batería)
- Bajo (al lado de la batería)
- Voz principal (al frente, centro)

Diseñá un esquema de posicionamiento (dibujalo, a mano o digital) que indique:

1. Dónde ubicarías los monitores de piso para cada músico (y por qué). Incluí la orientación relativa al micrófono de cada uno.
2. Qué patrón polar de micrófono recomendarías para cada fuente y por qué. (Consultá patrones típicos: batería/bombo → cardioide o supercardioide. Voz → cardioide. Guitarras → cardioide o dinámico direccional. Overheads de batería → cardioide u omni.)
3. Identificá al menos dos posibles problemas acústicos (feedback, enmascaramiento, reflexiones) y explicá cómo tu diseño los mitiga.

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Análisis de patrones (Parte A) | 4 equipos con patrón, rango, Q y aplicaciones correctamente identificados | 3 equipos o algunas aplicaciones inadecuadas | ≤2 equipos o patrón incorrecto |
| Cálculo SPL (Parte B) | 6 distancias calculadas, gráfico correcto, razón de la distancia recomendada y potencia adicional correcta | 5-6 cálculos pero sin gráfico o sin análisis | ≤4 cálculos o errores conceptuales |
| Diseño de posicionamiento (Parte C) | Plano con monitores, micrófonos, orientaciones, 2 problemas identificados y mitigados | Plano parcial o 1 problema identificado | Sin plano o sin mitigaciones |

---

## 4. Cierre — Discusión y bitácora

### Discusión guiada (10 min)

- «¿Por qué en los grandes conciertos cuelgan torres de parlantes (line arrays) y no usan un solo parlante enorme?» (Ley del inverso del cuadrado: un parlante puntual pierde 6 dB por duplicación. Un line array bien diseñado solo 3 dB. Para cubrir 100 m de profundidad con nivel uniforme, un line array necesita mucha menos potencia total.)
- «El subwoofer es omnidireccional. Entonces, ¿por qué la ubicación del subwoofer SÍ importa?» (Porque aunque la emisión directa es omnidireccional, las reflexiones en la sala crean modos y cancelaciones que dependen de la posición. No es la directividad de la fuente, es la acústica de la sala.)
- «¿Por qué los monitores de estudio se llaman 'de campo cercano'?» (Porque están diseñados para que la posición de escucha esté dentro de la región donde el campo directo del parlante domina sobre las reflexiones de la sala. Idealmente, a ~1-1.5 m.)

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Hoy clasifiqué las fuentes sonoras según su geometría: puntuales (−6 dB por duplicación de distancia), lineales (−3 dB) y planas (~0 dB en campo cercano). El campo cercano de un parlante es la región donde el nivel fluctúa con la posición y no se cumple la ley del inverso del cuadrado — a 10 kHz puedo estar en campo cercano a 1.6 m de un monitor típico. La directividad se mide con Q: cuánta energía se concentra en una dirección vs. una fuente omnidireccional. Los patrones polares cambian con la frecuencia: todos los parlantes se vuelven más direccionales en agudos. Elegir el patrón polar correcto (cardioide, supercardioide, omni, bidireccional) es fundamental para evitar feedback en vivo y para capturar el sonido deseado en estudio."*

---

## Recursos adicionales para el docente

- [Visualización de patrones polares interactiva](https://academo.org/demos/microphone-polar-patterns/) — rota un micrófono y ve cómo cambia el nivel captado en tiempo real (excelente para proyectar)
- [JBL Line Array Calculator](https://jblpro.com/en/softwares/line-array-calculator-3) — software gratuito para simular cobertura de line arrays
- [p5.js sketch: Polar Pattern Visualizer](https://editor.p5js.org/) — los estudiantes pueden crear un sketch que grafique patrones polares y los modifique interactivamente
- [Calculadora de campo cercano/lejano](http://www.sengpielaudio.com/calculator-distance.htm) — ingresá frecuencia y tamaño, devuelve distancia de transición
- [Shure SM58 Datasheet](https://www.shure.com/en-US/products/microphones/sm58) — hoja técnica con patrón polar y respuesta en frecuencia del micrófono vocal más usado del mundo
- [Manual de monitores de estudio Yamaha HS Series](https://usa.yamaha.com/products/proaudio/speakers/hs_series/) — incluye especificaciones de directividad y recomendaciones de posicionamiento
- [Video: Why Line Arrays?](https://www.youtube.com/watch?v=9GkZgJxT9Dc) — explicación de la diferencia entre fuente puntual y lineal en refuerzo sonoro

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «No entiendo la diferencia entre campo cercano y lejano — ¿no es lo mismo que 'cerca' y 'lejos'?» | No exactamente. Campo cercano no es «a poca distancia», es una región donde la interferencia entre distintas partes de la fuente domina. Podés estar a 5 cm y en campo lejano (si la frecuencia es muy baja), o a 2 m y en campo cercano (si la frecuencia es muy alta y la fuente es grande). La fórmula \(r = 2d^2/\lambda\) es la que manda, no la intuición |
| «¿Por qué Q usa 10·log si es una relación de presiones?» | Porque Q es una relación de intensidades (W/m²), no de presiones. La intensidad es potencia por área — como la potencia, usa el factor 10 |
| El estudiante confunde patrón polar del micrófono con el del parlante | Ambos se describen con el mismo gráfico polar, pero significan cosas opuestas: el patrón de un micrófono muestra cuánto capta en cada dirección; el patrón de un parlante muestra cuánto emite. Son «recíprocos»: un micrófono omnidireccional capta igual de todas direcciones; un parlante omnidireccional emite igual en todas direcciones |
| «Si los subwoofers son omnidireccionales, ¿por qué poner dos subwoofers separados?» | En una sala real, un solo subwoofer excita los modos de la sala de manera desigual — hay zonas donde el bajo retumba y otras donde desaparece. Dos (o más) subwoofers en posiciones estratégicas suavizan la respuesta modal. Es un problema de acústica de salas, no de directividad de la fuente — se profundiza en la unidad 3 |
| «¿Line array es lo mismo que 'parlante de columna'?» | Conceptualmente sí (fuente lineal), pero un line array profesional moderno usa DSP para controlar cada elemento individualmente y crear un frente de onda coherente. La física de base es la misma: fuente cilíndrica → −3 dB por duplicación |
| «¿Para qué necesito esto como productor musical?» | (1) Posicionar monitores de estudio: saber que el tweeter debe apuntar directo a los oídos y que la distancia recomendada (1-1.5 m) existe por una razón física. (2) Elegir micrófonos: saber cuándo usar un cardioide, un omni o un bidireccional según la fuente y la sala. (3) Leer fichas técnicas: entender qué significan los gráficos polares y de Q vs. frecuencia. (4) Sonido en vivo: comprender por qué el ingeniero de PA elige ciertas cajas y ciertas posiciones |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
