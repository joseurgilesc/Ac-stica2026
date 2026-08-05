# Guía Docente — Sesión 14: Efecto Doppler

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, p5.js, parlante Bluetooth, celular con app de generador de frecuencias (opcional: grabadora de audio para análisis espectral), videos de ejemplos Doppler (YouTube)  
**Referencia:** Everest & Pohlmann, Capítulo 3, pp. 52–57 (Free Field — Doppler Effect, Moving Sources and Receivers)

---

## Objetivo de la sesión

Que el estudiante calcule el desplazamiento de frecuencia por efecto Doppler para fuentes y receptores en movimiento, relacione la compresión/expansión de frentes de onda con el cambio de frecuencia percibida, y analice aplicaciones del efecto Doppler en producción musical, audio para videojuegos y efectos de modulación.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 10 min | Escucha de ejemplos reales: ambulancia, F1, tren (audio + video) |
| **Desarrollo** | 40 min | Teoría guiada: compresión de frentes de onda, fórmula Doppler (3 casos), ejemplos numéricos |
| **Práctica** | 50 min | Simulación p5.js + ejercicios de cálculo + explicación audiovisual |
| **Cierre** | 20 min | Discusión: Doppler en tu DAW y en audio para videojuegos + bitácora |

---

## 1. Apertura — «¿Por qué cambia el sonido cuando pasa?»

### Dinámica

1. Reproducir (sin video, solo audio) tres grabaciones:
   - Una sirena de ambulancia acercándose y alejándose.
   - Un auto de Fórmula 1 pasando frente a cámara a 300 km/h.
   - Un tren haciendo sonar la bocina al cruzar una estación.
2. Preguntar: «¿Qué tienen en común estos tres sonidos?» → Todos cambian de tono: más agudo al acercarse, más grave al alejarse.
3. Preguntar: «¿La frecuencia que emite la sirena realmente cambia? ¿O es una ilusión de nuestros oídos?» → La frecuencia EMITIDA es constante (f₀ fija). La frecuencia PERCIBIDA cambia por el movimiento relativo. No es ilusión: el tímpano recibe físicamente más ciclos por segundo cuando la fuente se acerca.
4. Reproducir el video de la F1 con espectrograma en tiempo real (hay varios en YouTube). Mostrar cómo la frecuencia del motor «se desliza» hacia abajo en el momento exacto en que el auto pasa frente a la cámara.
5. Decir: «Hoy calculamos exactamente cuánto cambia la frecuencia. Y después vemos cómo este mismo principio está presente en el Leslie rotativo de un Hammond y en los motores de audio 3D de los videojuegos.»

### Preguntas disparadoras

- «Si un auto toca la bocina a 440 Hz y viene hacia vos a 100 km/h, ¿escuchás un La o un Si?»
- «¿Qué pasa en el instante EXACTO en que la fuente pasa frente a vos? ¿Qué frecuencia escuchás en ese momento?»
- «¿Un murciélago usa el efecto Doppler para cazar? ¿Cómo?»

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Compresión y expansión de frentes de onda** (10 min). Dibujar en la pizarra:
   - Fuente estática emitiendo pulsos circulares concéntricos equidistantes. λ = c/f₀.
   - Misma fuente, pero avanzando hacia la derecha. Cada pulso se emite desde una posición más adelantada. Los círculos se «amontonan» delante (λ efectiva menor → f' mayor) y se «estiran» detrás (λ efectiva mayor → f' menor).

   Preguntar: «¿Qué pasa si la fuente viaja EXACTAMENTE a la velocidad del sonido?» → f' delante tiende a infinito. Todos los frentes de onda se acumulan en un solo punto — es la **barrera del sonido** (onda de choque, *sonic boom*). Esto NO pasa con ambulancias (v_s ≪ c).

   > Insertar **Fig. 3-6** del Everest: efecto Doppler — frentes de onda comprimidos/expandidos.

2. **Caso 1: fuente en movimiento** (10 min). Escribir la fórmula en la pizarra:

   \[
   f' = f_0 \cdot \frac{c}{c \mp v_s}
   \]

   Resolver en vivo el ejemplo de la ambulancia (800 Hz, 30 m/s):
   - Acercándose: f' = 800 × 343/(343−30) = 800 × 343/313 ≈ 876 Hz.
   - Alejándose: f' = 800 × 343/(343+30) = 800 × 343/373 ≈ 735 Hz.

   Preguntar: «¿Por qué el cambio no es simétrico?» (+76 Hz al acercarse, −65 Hz al alejarse). Porque la fórmula es un cociente, no una suma. La compresión es más pronunciada que la expansión para la misma velocidad.

3. **Caso 2: receptor en movimiento** (5 min). Escribir:

   \[
   f' = f_0 \cdot \frac{c \pm v_r}{c}
   \]

   Preguntar: «Si camino hacia un parlante a 1.5 m/s, ¿noto el Doppler?» Calcular: f' = f₀ × (343+1.5)/343 ≈ f₀ × 1.0044 → para 1,000 Hz, solo 4.4 Hz de diferencia. Imperceptible. El Doppler es NOTORIO cuando v_s es una fracción apreciable de c.

4. **Caso general: ambos en movimiento** (5 min). Escribir:

   \[
   f' = f_0 \cdot \frac{c \pm v_r}{c \mp v_s}
   \]

   Dar la regla nemotécnica: «Numerador: + si el receptor se acerca. Denominador: − si la fuente se acerca. Ambos movimientos que REDUCEN distancia AUMENTAN f'.»

5. **Doppler en el mundo real del audio** (10 min). Transición a aplicaciones:
   - **Leslie rotativo**: parlante físico girando. Mostrar video de un Leslie abierto. Calcular el Δf para un giro típico: parlante a 0.3 m del eje, girando a 6 rev/s → v_tangencial = 2π × 0.3 × 6 ≈ 11.3 m/s → Δf ≈ ±3.3% (para 1,000 Hz, ±33 Hz). Es un vibrato + trémolo combinados.
   - **Audio 3D para videojuegos**: motores como Wwise o FMOD calculan Doppler en tiempo real. El programador define la velocidad del objeto, el motor aplica pitch shifting proporcional.
   - **Grabación de SFX**: si grabás un auto pasando, ¿dónde ponés el micrófono? → No en la trayectoria directa (el Doppler es muy extremo). Mejor a 10-20 m de distancia lateral para una transición más suave.

---

## 3. Práctica — Simulación, ejercicios y producción audiovisual

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 14 — Efecto Doppler

**Instrucciones:**

**Parte A — Simulación p5.js de efecto Doppler (individual)**

1. Abrí el simulador p5.js de efecto Doppler (provisto por el docente). La simulación muestra una fuente que se mueve horizontalmente, los frentes de onda que emite, y un receptor estático que mide la frecuencia instantánea.
2. Configurá los siguientes escenarios y completá la tabla:

    | Escenario | f₀ (Hz) | v_s (m/s) | f' calculada (acercándose) | f' calculada (alejándose) | f' medida en simulación | Δf total |
    |---|---|---|---|---|---|---|
    | Ambulancia | 800 | 30 | | | | |
    | Auto deportivo | 400 | 20 | | | | |
    | Avión comercial (pasando bajo) | 200 | 80 | | | | |
    | Persona en bicicleta con parlante | 1,000 | 5 | | | | |

3. Ajustá la velocidad de la fuente al máximo permitido por la simulación y observá los frentes de onda. Respondé:
   - ¿Qué pasa con la separación entre frentes de onda DELANTE de la fuente cuando v_s se aproxima a c?
   - ¿Qué escucharía un receptor justo DELANTE de la fuente si v_s = c? ¿Es físicamente posible que una fuente viaje a la velocidad del sonido?

**Parte B — Ejercicios de cálculo (individual)**

Resolvé estos 4 ejercicios mostrando el desarrollo completo (fórmula, sustitución, resultado, interpretación):

1. **Bocina de tren**: Un tren viaja a 25 m/s y hace sonar su bocina a 300 Hz. Calculá f' para un observador en el andén cuando el tren: a) se acerca, b) se aleja. ¿El cambio es perceptible?

2. **Corriendo hacia la música**: Estás trotando a 3 m/s hacia un parlante que emite 2,000 Hz. ¿Qué frecuencia escuchás? ¿Y si trotás alejándote?

3. **Doble desplazamiento (ecolocalización)**: Un murciélago vuela a 6 m/s hacia una pared y emite un pulso de 50,000 Hz. Calculá:
   a) La frecuencia con que el pulso llega a la pared.
   b) La frecuencia del eco que recibe el murciélago (la pared actúa como fuente estacionaria que «reemite» a la frecuencia que recibe, y el murciélago es ahora el receptor en movimiento).
   
4. **Leslie rotativo**: El parlante de un Leslie gira a 6 revoluciones por segundo, con un radio de giro de 0.25 m. Si emite un tono de 880 Hz (La₅), ¿cuál es el rango de frecuencias que escucha un micrófono estacionario cercano? Calculá f'_max y f'_min.

**Parte C — Explicación audiovisual breve (individual o en parejas)**

Creá un video o una animación de máximo 2 minutos que explique el efecto Doppler de forma creativa. Opciones:
- Grabarte con el celular explicando con dibujos o un pizarrón.
- Usar la simulación p5.js para narrar el fenómeno.
- Hacer una animación simple con PowerPoint, Canva o similar.
- Grabar un ejemplo real (auto, moto, tren) y analizarlo con un espectrograma (app como Spectroid o Audacity).

Tu explicación debe incluir:
1. Por qué cambia la frecuencia (compresión/expansión de frentes de onda).
2. La fórmula para fuente en movimiento (mostrarla y explicar los signos).
3. Un ejemplo numérico con cálculo (el que elijas).
4. Una aplicación en audio/música (Leslie, audio 3D, SFX).

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Simulación (Parte A) | 4 escenarios con f' calculadas correctamente, medidas de simulación, responde ambas preguntas | 2-3 escenarios o cálculos con errores menores | Sin cálculos o datos incorrectos |
| Ejercicios (Parte B) | 4 ejercicios con desarrollo completo (fórmula, sustitución, resultado, interpretación) | 3 ejercicios o falta interpretación en alguno | < 3 ejercicios o resultados incorrectos |
| Explicación audiovisual (Parte C) | ≤ 2 min, incluye los 4 elementos requeridos, explica con claridad y creatividad | Falta 1 elemento o la explicación es confusa | No entrega o faltan ≥ 2 elementos |
| Terminología | Usa correctamente: efecto Doppler, f₀, f', v_s, v_r, compresión de frentes de onda, desplazamiento de frecuencia | Algunos términos imprecisos | Sin terminología técnica |

---

## 4. Cierre — Discusión y bitácora

### Discusión guiada (10 min)

- «¿Por qué en Star Wars el sonido de las naves cambia al pasar? ¿Hay sonido en el espacio?» (En el espacio no hay medio — el sonido no se propaga. Pero en el universo de Star Wars, el diseño de sonido usa Doppler intensamente para dar sensación de velocidad. Ben Burtt, el diseñador de sonido original, creó el sonido del Halcón Milenario mezclando aviones, motores y efectos Doppler.)
- «Si un auto toca la bocina a 440 Hz y pasa frente a vos a 30 m/s, la frecuencia 'baja' de ~480 Hz a ~405 Hz. ¿Cómo sonaría eso musicalmente?» (Como un glissando/portamento de casi un tono y medio hacia abajo. Si quisieras recrearlo en un sintetizador, usarías un pitch bend de ~300 cents.)
- «¿Por qué los sonidistas de Fórmula 1 ponen el micrófono lejos de la pista?» (Para que la velocidad radial — la componente hacia el micrófono — sea menor y el Doppler no produzca un cambio tan extremo que suene antinatural. Un auto de F1 a 300 km/h (83 m/s) pasando a 5 m del micrófono produce un Doppler violento que en grabación suena exagerado.)

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"El efecto Doppler es el cambio en la frecuencia percibida de una onda cuando hay movimiento relativo entre la fuente y el receptor. No es una ilusión auditiva: el movimiento comprime los frentes de onda delante de la fuente (aumentando la frecuencia) y los expande detrás (reduciéndola). La fórmula para fuente en movimiento es f' = f₀ · c/(c ∓ v_s), donde el signo − aplica cuando la fuente se acerca (f' > f₀) y el signo + cuando se aleja (f' < f₀). El efecto es más notorio cuanto mayor es la velocidad de la fuente en relación a la velocidad del sonido. En producción musical, el efecto Doppler aparece físicamente en el parlante giratorio Leslie y se simula digitalmente en motores de audio 3D para videojuegos (Wwise, FMOD) y en plugins de efectos. Entender el Doppler permite diseñar sonidos verosímiles para medios audiovisuales y evita errores en grabaciones de campo con fuentes en movimiento."*

---

## Recursos adicionales para el docente

- [Simulador p5.js de efecto Doppler](https://editor.p5js.org/) — sketch interactivo con fuente móvil, frentes de onda y display de frecuencia
- [Video: Doppler Effect Demonstration (MIT Physics)](https://www.youtube.com/watch?v=Kg9F5pU5F6c) — demostración con fuente giratoria y micrófono + espectrograma
- [Video: F1 Car Doppler Effect (espectrograma)](https://www.youtube.com/watch?v=8vZu4E3QRGM) — auto de Fórmula 1 pasando con análisis espectral en tiempo real
- [Video: How a Leslie Speaker Works](https://www.youtube.com/watch?v=5a2S4I1kHhI) — interior de un parlante Leslie, mostrando los rotores físicos
- [Audio Programming: Doppler in Wwise](https://www.audiokinetic.com/library/) — documentación del motor de audio sobre cómo se implementa Doppler en videojuegos
- [App: Spectroid (Android) / Spectrum Analyzer (iOS)](https://play.google.com/) — analizador de espectro en tiempo real para capturar Doppler en grabaciones de campo
- [Waves Doppler Plugin](https://www.waves.com/plugins/doppler) — plugin profesional que simula efecto Doppler para postproducción de audio

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «¿Por qué la fórmula usa c − v_s en el denominador y no c + v_s cuando se acerca?» | Porque al restar v_s en el denominador, el cociente se hace MAYOR (f' > f₀). Si te acercás, la frecuencia aumenta. La intuición es: el denominador se reduce porque los frentes de onda están más juntos. La velocidad relativa EFECTIVA entre cada frente de onda y el receptor es menor porque la fuente «persigue» sus propias ondas |
| «¿No es lo mismo que la fuente se mueva hacia el receptor que el receptor hacia la fuente?» | **No**. Las fórmulas son distintas (caso 1 vs. caso 2) y los resultados NO son idénticos para la misma velocidad relativa. La razón es que el medio (aire) es el marco de referencia. Cuando la fuente se mueve, los frentes de onda se comprimen FÍSICAMENTE en el medio. Cuando el receptor se mueve, los frentes de onda están inalterados — simplemente el receptor los «atraviesa» más rápido. La compresión de frentes de onda (fuente móvil) produce un efecto más pronunciado |
| «¿Qué pasa si v_s > c?» | La fórmula «se rompe» (f' se vuelve negativa o infinita). Físicamente, la fuente supera la velocidad del sonido y genera una **onda de choque** (*sonic boom*). Los frentes de onda se acumulan en un cono (cono de Mach) detrás de la fuente. El receptor escucha un «estampido» cuando el cono lo atraviesa, no un tono continuo |
| «¿El efecto Doppler afecta la afinación musical?» | En condiciones normales, no (las velocidades relativas en un escenario o estudio son insignificantes comparadas con c). Pero si grabás desde un vehículo en movimiento o con la fuente moviéndose rápido, SÍ. De ahí la importancia de mantener distancias fijas durante la grabación |
| «¿Por qué un Leslie suena tan distinto a un chorus normal?» | Porque el Leslie combina TRES efectos simultáneos: (1) Doppler real por el parlante giratorio (modulación de frecuencia), (2) modulación de amplitud (el parlante apunta hacia vos y después hacia otro lado — trémolo), y (3) reflexiones cambiantes dentro de la caja. Un chorus solo hace (1) electrónicamente, sin los otros dos |
| «En el ejercicio del murciélago, ¿por qué hay dos desplazamientos Doppler?» | Porque el sonido hace un viaje de ida y vuelta: murciélago → pared (Doppler 1: fuente móvil) y pared → murciélago (Doppler 2: receptor móvil). Es el mismo principio del radar Doppler: el doble desplazamiento codifica la velocidad del objeto. El murciélago «escucha» la velocidad de la pared en el cambio de frecuencia del eco |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
