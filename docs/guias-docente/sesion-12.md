# Guía Docente — Sesión 12: Diagramas de rayo y reflexión

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, p5.js, puntero láser, espejo pequeño, transportador o app de medición de ángulos, plano de un cuarto de control (provisto por el docente)  
**Referencia:** Everest & Pohlmann, Capítulo 6, pp. 79–95 (Reflection — Specular Reflection, Ray Diagrams, Image Method, Reflection Coefficients) y Capítulo 8, pp. 105–115 (Refraction and Outdoor Ray Tracing)

---

## Objetivo de la sesión

Que el estudiante aplique la ley de reflexión al trazado de diagramas de rayos, utilice el método de la fuente imagen para predecir trayectorias reflejadas, identifique reflexiones tempranas en un cuarto de control y calcule retardos temporales de reflexiones respecto al sonido directo.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 10 min | Demostración con láser y espejo — el sonido rebota igual que la luz |
| **Desarrollo** | 45 min | Teoría guiada: ley de reflexión, diagramas de rayos, método de la imagen |
| **Práctica** | 50 min | Trazado de reflexiones en un plano de cuarto de control + simulación p5.js |
| **Cierre** | 15 min | Discusión: ¿por qué las paredes laterales son las más críticas? + bitácora |

---

## 1. Apertura — El sonido rebota como la luz

### Dinámica

1. Apuntar un puntero láser a un espejo con un ángulo de ~30° respecto a la normal. El punto reflejado aparece en la pared opuesta.
2. Preguntar: «Si en vez de luz tuviera sonido, ¿el parlante reflejado 'sonaría' en ese mismo lugar?» → Sí. Exactamente el mismo principio.
3. Mover el láser: cambiar el ángulo de incidencia y mostrar cómo cambia simétricamente el ángulo de reflexión.
4. Decir: «Hoy vamos a aprender a trazar el camino del sonido como si fueran rayos de luz. No para frecuencias graves (ahí el sonido hace cosas raras), pero para medios y agudos, funciona perfecto. Y esto es lo que usan los diseñadores de estudios y salas de concierto.»

### Preguntas disparadoras

- «¿Por qué cuando estás en el fondo de un teatro escuchás tu propia voz reflejada? Trazá mentalmente el camino.»
- «En un estudio de grabación, ¿por qué las paredes laterales son las PRIMERAS que se tratan acústicamente?»
- «Si ponés un parlante frente a una pared de concreto, ¿el sonido se hace más fuerte o más débil para alguien que está del mismo lado que el parlante?»

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Ley de reflexión: θᵢ = θᵣ** (10 min). Dibujar en la pizarra una superficie plana (línea horizontal), la normal (línea vertical punteada en el punto de impacto), un rayo incidente con ángulo θᵢ = 40° y su correspondiente rayo reflejado con θᵣ = 40°. Enfatizar: **los ángulos se miden desde la NORMAL, no desde la superficie**. Si un rayo llega perpendicular, θᵢ = 0°.

    > Insertar **Fig. 6-1** del Everest: ley de reflexión.

    Demostrar con el láser y el espejo. Pedir a un estudiante que mida los ángulos con un transportador o una app de medición angular para confirmar la simetría.

    Preguntar: «¿Qué pasa si la superficie no es lisa sino rugosa?» → La ley se sigue cumpliendo MICROSCÓPICAMENTE (cada micro-faceta refleja según θᵢ = θᵣ local), pero macroscópicamente los rayos salen en direcciones distintas → reflexión difusa. Mostrar ejemplos: un espejo (especular) vs. una hoja de papel (difusa).

    > Insertar **Fig. 6-3** del Everest: reflexión especular vs. difusa.

2. **Construcción de diagramas de rayos** (10 min). Dibujar un ejemplo práctico: parlante S a 2 m de una pared, receptor R a 4 m de la pared, desplazado 3 m lateralmente. Trazar el rayo reflejado paso a paso:
   
   - Dibujar la normal en el punto de impacto (no sabemos aún dónde está).
   - Usar el **método de la fuente imagen**: reflejar S respecto a la pared → S'. Unir S' con R → donde cruza la pared está el punto de impacto.
   - Medir la distancia S' → R (que es igual a d₁ + d₂ del camino reflejado).
   
   Calcular Δt: si d_directo = 5 m y d_reflejado = 7 m, entonces Δd = 2 m → Δt = 2/343 ≈ 5.8 ms.

   Relacionar con percepción: reflexiones que llegan dentro de los primeros 20-30 ms se integran con el sonido directo (efecto Haas / precedencia) y afectan la localización y el timbre. Reflexiones > 50 ms se perciben como eco.

3. **Reflexiones tempranas en un cuarto de control** (15 min). Proyectar o dibujar en la pizarra el plano de un cuarto de control típico (dimensiones ~4 m × 3 m, monitores en la pared frontal, posición de mezcla a ~1.5 m de la pared frontal).

   Trazar colectivamente:
   - Rayo directo: monitor izquierdo → ingeniero.
   - Reflexión en pared lateral izquierda.
   - Reflexión en techo.
   - Reflexión en consola/escritorio.
   - Reflexión en pared trasera.

   Para cada rayo, calcular Δd y Δt aproximados usando el método de la imagen.

   | Superficie | Δd estimado | Δt estimado | ¿Crítica? | ¿Por qué? |
   |---|---|---|---|---|
   | Pared lateral izq. | 2.5 m | 7.3 ms | ✅ Sí | Llega al oído opuesto — ensancha imagen estéreo |
   | Techo | 1.8 m | 5.2 ms | ✅ Sí | Coloración en frecuencias medias |
   | Consola | 0.7 m | 2.0 ms | ✅ Muy crítica | Filtro comb en agudos |
   | Pared trasera | 4.2 m | 12.2 ms | ⚠️ Media | Si se absorbe, es beneficio (elimina reflexión tardía) |

   > Insertar **Fig. 6-4** del Everest: diagrama de rayos en sala de control.

   Preguntar: «¿Por qué no se tratan igual todas las superficies?» → Las paredes laterales y el techo requieren absorción (para eliminar primeras reflexiones que colorean el sonido). La pared trasera requiere difusión (para mantener energía en la sala sin crear una reflexión especular fuerte). El suelo no se trata porque es difícil y costoso, pero la consola actúa como reflector.

4. **Reflexión en exteriores** (10 min). Extender el concepto a exteriores: una fuente frente a una fachada, un escenario con muro posterior, un patio con paredes reflectantes. Mostrar cómo la presencia de superficies reflectantes cerca de la fuente aumenta el factor de directividad Q (sesión 8) y por lo tanto el SPL en el receptor.

   Ejemplo numérico: fuente con SWL = 100 dB, a 10 m de distancia en espacio libre → SPL ≈ 100 − 20·log₁₀(10) − 11 = 69 dB. La misma fuente a 1 m de una fachada reflectante → Q = 4 (suelo + fachada) → SPL ≈ 100 − 20·log₁₀(10) − 11 + 10·log₁₀(4) = 69 + 6 = 75 dB.

   **El diagrama de rayos explica POR QUÉ**: el parlante que «miraría» hacia atrás ahora se refleja hacia adelante.

---

## 3. Práctica — Trazado de rayos en un plano real

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 12 — Diagramas de rayos y reflexiones en un cuarto de control

**Instrucciones:**

**Parte A — Trazado de reflexiones en un cuarto de control (en parejas)**

Se te entrega el plano en planta de un cuarto de control (dimensiones: 5.0 m × 3.5 m, altura de techo: 2.7 m). La posición de mezcla está a 1.8 m de la pared frontal. Los monitores están a 0.5 m de las paredes laterales, a 1.2 m de altura, orientados hacia la posición de mezcla.

Usando el método de la fuente imagen (podés hacerlo a mano, en software de dibujo, o en p5.js), trazá y medí:

1. **Rayo directo** desde el monitor izquierdo hasta el oído del ingeniero (asumí que el oído está en la posición de mezcla, a 1.2 m de altura). Medí la distancia.
2. **Reflexión de primer orden en la pared lateral izquierda**. Usá la fuente imagen S' (monitor reflejado respecto a la pared lateral). Trazá la línea S' → receptor. Marcá el punto de impacto en la pared. Medí la distancia total del camino reflejado.
3. **Reflexión de primer orden en el techo**. Reflejá el monitor respecto al techo. Trazá S' → receptor. Medí distancia.
4. **Reflexión en la consola/escritorio**. La consola está a 0.8 m del suelo, justo frente al ingeniero. Trazá la reflexión monitor → consola → oído del ingeniero.

Completá la tabla:

| Reflexión | d_directo (m) | d_reflejado (m) | Δd (m) | Δt (ms) | ¿Crítica? (< 30 ms) | ¿Recomendación de tratamiento? |
|---|---|---|---|---|---|---|
| Pared lateral izquierda | | | | | | |
| Techo | | | | | | |
| Consola | | | | | | |

**Parte B — Simulación p5.js de reflexiones (individual)**

1. Abrí el simulador p5.js de diagramas de rayos (provisto por el docente).
2. Configurá una fuente S y un receptor R en un espacio rectangular de 6 m × 4 m.
3. Activá las 4 paredes como superficies reflectantes.
4. Observá todas las reflexiones de primer orden que llegan al receptor.
5. Modificá el coeficiente de absorción de una pared (por ejemplo, pared lateral derecha con α = 0.8) y observá cómo cambia la intensidad del rayo reflejado.
6. Capturá dos configuraciones distintas y respondé:
   - ¿Cuántas reflexiones de primer orden llegan al receptor en un espacio rectangular con 4 paredes?
   - ¿Qué pasa con la reflexión de la pared lateral derecha cuando aumentás su absorción? ¿El rayo desaparece o solo se atenúa?
   - ¿En qué parte del espectro (graves, medios, agudos) el modelo de rayos es más fiable? Justificá con λ.

**Parte C — Plano marcado de un espacio real (individual)**

Elegí UNO de los siguientes espacios (el que tengas disponible) y dibujá un plano en planta (vista superior) a escala aproximada:

- Tu habitación o dormitorio.
- La sala de estar de tu casa.
- Un aula de la universidad.
- Un café o restaurante que frecuentes.

En el plano, marcá:
1. La posición de una fuente sonora (podés asumir una: parlante Bluetooth, tele, persona hablando).
2. La posición de un receptor (donde normalmente escuchás).
3. **Trazá el rayo directo** (línea recta fuente → receptor, en color verde).
4. **Trazá al menos TRES reflexiones de primer orden** (fuente → pared/suelo/techo → receptor, en color rojo). Usá el método de la fuente imagen para determinar el punto de impacto correcto.
5. Para cada reflexión, calculá Δd y Δt aproximados (medí las distancias en tu plano).

Respondé:
- ¿Hay alguna reflexión que llegue con Δt < 30 ms? ¿Cómo afecta eso a lo que escuchás en ese espacio?
- Si tuvieras que mejorar la acústica de ese espacio con un presupuesto limitado, ¿qué superficie tratarías primero y por qué?

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Trazado de reflexiones (Parte A) | 4 reflexiones con método de la imagen, distancias correctas, tabla completa con Δt y recomendaciones | 2-3 reflexiones o tabla incompleta | 1 o ninguna reflexión, distancias incorrectas |
| Simulación (Parte B) | 2 configuraciones contrastadas, responde las 3 preguntas con razonamiento | 1 configuración o respuestas incompletas | Sin simulación o respuestas incorrectas |
| Plano real (Parte C) | Plano reconocible, fuente y receptor marcados, 3+ reflexiones con método de imagen, Δt calculados | Plano simplificado, 2 reflexiones, Δt aproximados | Sin plano o reflexiones mal trazadas |
| Terminología | Usa correctamente: ley de reflexión, normal, fuente imagen, Δt, reflexión especular/difusa, coeficiente de reflexión | Algunos términos imprecisos | Sin terminología técnica |

---

## 4. Cierre — Discusión y bitácora

### Discusión guiada (10 min)

- «De todas las superficies en un cuarto de control, ¿cuál es la MÁS traicionera?» (La consola/escritorio: está MUY cerca del oído, Δt ≈ 1-3 ms, produce un filtro comb pronunciado en agudos. Muchos ingenieros ponen foam absorbente sobre la consola durante la mezcla.)
- «¿Por qué no se puede usar el modelo de rayos para frecuencias graves?» (λ larga — a 100 Hz, λ = 3.4 m, que es comparable al tamaño de la sala. El sonido no «viaja en línea recta» — se comporta como una onda estacionaria. Veremos esto en la Unidad 3.)
- «Si estás diseñando un home studio, ¿qué es más importante tratar primero: las paredes laterales o la pared trasera?» (Las laterales: sus reflexiones llegan antes y afectan la imagen estéreo. La pared trasera puede esperar o resolverse con difusión.)

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"El sonido se refleja en superficies grandes siguiendo la misma ley que la luz: el ángulo de incidencia es igual al ángulo de reflexión (θᵢ = θᵣ), medidos desde la normal a la superficie. Para predecir trayectorias reflejadas, se usa el método de la fuente imagen: se refleja simétricamente la fuente respecto a la superficie reflectante y se traza una línea recta desde la fuente imagen hasta el receptor. La diferencia de camino Δd entre el sonido reflejado y el directo produce un retardo temporal Δt = Δd/c. Las reflexiones que llegan dentro de los primeros 20-30 ms (primeras reflexiones) son críticas porque el oído las integra con el sonido directo y afectan la localización y el timbre. En un cuarto de control, las paredes laterales, el techo y la consola son las superficies que requieren tratamiento prioritario. El modelo de rayos es válido para frecuencias medias y altas (λ ≪ dimensiones de la sala) pero falla en graves, donde domina el comportamiento ondulatorio."*

---

## Recursos adicionales para el docente

- [Simulador p5.js de reflexiones y método de la imagen](https://editor.p5js.org/) — sketch interactivo con fuente móvil, paredes con absorción ajustable y visualización de rayos directos y reflejados
- [Ejemplo: Image Source Method animation](https://www.youtube.com/watch?v=jp0rHTf4oXk) — video animado del método de la fuente imagen para acústica de salas
- [Acoustics Engineering — Ray Tracing](https://www.acoustics.asn.au/) — introducción visual al trazado de rayos en acústica arquitectónica
- [Plano descargable de cuarto de control típico](https://www.johnlsayers.com/) — planos reales de estudios de grabación con dimensiones
- [Calculadora de Δt y distancia de reflexiones](http://www.sengpielaudio.com/calculator-reflectionpath.htm) — ingresás geometría y calcula diferencia de camino y retardo

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «No entiendo por qué se mide desde la normal y no desde la superficie» | Mostrar con el láser: si medís desde la superficie, un rayo perpendicular tendría θ = 90° (ilógico — debería ser 0° porque no se desvía). La normal es la referencia natural porque es el eje de simetría del rebote |
| «Me cuesta dibujar la fuente imagen» | Procedimiento paso a paso: (1) medí la distancia perpendicular de la fuente a la pared, (2) marcá un punto del otro lado de la pared a la misma distancia, (3) ese punto es S'. La línea que une S con S' es perpendicular a la pared. Practicar con un espejo real o con la cámara selfie del celular — el reflejo está a la misma distancia detrás del espejo que el objeto delante |
| «¿Cómo sé si una reflexión es especular o difusa?» | Regla práctica: si la rugosidad de la superficie es < λ/4, la reflexión es especular. Si es comparable a λ, es difusa. Ejemplo: una pared de ladrillo visto tiene irregularidades de ~5 mm → es especular para λ > 2 cm (f < 17 kHz) pero difusa para ultrasonido. En la práctica audible, casi siempre es especular |
| «¿El método de la imagen funciona para varias reflexiones?» | Sí. Para una reflexión de segundo orden (rebota en dos paredes), creás la fuente imagen de la fuente imagen: S' (reflejada en pared 1), S'' (reflejando S' en pared 2). Unís S'' con R. La intersección con la pared 2 es el segundo punto de impacto; unís ese punto con S' y la intersección con pared 1 es el primer impacto |
| «¿Por qué Q = 2 para una fuente en el suelo?» | Porque el suelo es un reflector. La energía que iría hacia abajo se refleja hacia arriba. La fuente imagen emite la misma potencia hacia el hemiespacio superior. El receptor recibe el doble de intensidad que si la fuente estuviera suspendida en espacio libre. Es la aplicación más directa del método de la imagen: fuente real + fuente imagen = dos fuentes coherentes sumándose en el hemiespacio superior |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
