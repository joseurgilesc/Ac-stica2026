# Guía Docente — Sesión 19: Reverberación

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, parlante, sonómetro (app), grabadora (celular), Room EQ Wizard (opcional, para demostración), DAW con plugin de reverberación  
**Referencia:** Everest & Pohlmann, Capítulo 11, pp. 170–197 (Growth and Decay of Sound, Reverberation Time, RT60, Sabine Formula)

---

## Objetivo de la sesión

Que el estudiante defina la reverberación como fenómeno físico, distinga RT60, EDT, T20 y T30 como parámetros de decaimiento, calcule RT60 estimado mediante la fórmula de Sabine, y relacione cualitativamente el tiempo de reverberación con el volumen y la absorción del recinto.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | Escucha comparativa: mismo audio en 4 espacios + palmada en el aula |
| **Desarrollo** | 45 min | Teoría guiada: crecimiento/decaimiento, RT60, Sabine, parámetros de decaimiento |
| **Práctica** | 40 min | Medición de RT60 estimado con palmada + simulación de decaimiento |
| **Cierre** | 20 min | «RT60 en tu DAW» — del plugin a la física + bitácora |

---

## 1. Apertura — «Escuchá la sala»

### Materiales
- 4 grabaciones de la misma palmada (o golpe de tambor) en espacios con RT60 muy distinto:
  - Cabina vocal (RT60 ≈ 0.2 s)
  - Living amueblado (RT60 ≈ 0.6 s)
  - Aula vacía (RT60 ≈ 1.5 s)
  - Iglesia o estacionamiento (RT60 ≈ 4-6 s)
- Si no se consiguen grabaciones, usar ejemplos de librerías de respuestas al impulso (IR) o generar con un plugin de reverb y el mismo sonido seco

### Dinámica

1. Reproducir los 4 sonidos en orden, SIN decir de qué espacio son. Preguntar: «¿En qué espacio estamos? ¿Cómo lo saben?»
2. Revelar los espacios. Preguntar: «¿Qué cambia entre el primer y el último sonido? ¿El golpe original es distinto?» → No. Lo que cambia es lo que la SALA le agrega al sonido: la reverberación.
3. Dar una palmada en el centro del aula. Pedir a todos que cierren los ojos y estimen mentalmente cuánto dura el sonido hasta desaparecer. Preguntar: «¿1 segundo? ¿2 segundos? ¿Menos?»
4. Presentar el concepto de RT60 como una MEDICIÓN, no una opinión: «Hoy vamos a medir exactamente cuánto tarda este sonido en desaparecer, y vamos a entender POR QUÉ tarda lo que tarda.»

### Preguntas disparadoras

- «¿Por qué en un concierto sinfónico la reverberación es deseable (1.8–2.2 s) pero en una grabación de voz es un problema (debe ser < 0.3 s)?»
- «¿Qué pasa si RT60 es muy distinto en graves que en agudos?»
- «¿Los plugins de reverb inventan la reverberación o la simulan?»

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Eco vs. reverberación** (5 min). Recordar la diferencia: eco = reflexión discreta (retardo > 50 ms), reverberación = miles de reflexiones fusionadas. Mostrar un esquema temporal: sonido directo → primeras reflexiones → reverberación temprana → reverberación tardía → cola. Preguntar: «¿Cuándo dejamos de percibir reflexiones individuales y empezamos a percibir reverberación?» → Cuando la densidad de reflexiones supera ~10 reflexiones/ms (aproximadamente a partir de 80-100 ms en una sala típica).

2. **Crecimiento y decaimiento** (10 min). Dibujar el gráfico clásico en la pizarra: nivel (dB) vs. tiempo. Tres zonas:
   - **Crecimiento** (fuente se enciende): el nivel sube hasta estabilizarse.
   - **Estado estacionario**: nivel constante. La energía que entra = energía que se pierde.
   - **Decaimiento** (fuente se apaga): el nivel baja gradualmente. La pendiente de la caída depende de ᾱ y V.

   Preguntar: «¿Por qué la caída es una RECTA en escala logarítmica (dB)?» → Porque en cada reflexión se pierde una FRACCIÓN FIJA de la energía remanente: decaimiento exponencial. En dB, el exponencial se convierte en una línea recta. La pendiente de esa recta = velocidad de decaimiento.

   > Insertar **Fig. 11-3** del Everest: curva de decaimiento completa.

3. **RT60: la definición** (10 min). Escribir la definición formal y los valores típicos (ver tabla en index.md). Preguntas para reflexionar:
   - «¿Por qué 60 dB y no 40 o 80?» → 60 dB ≈ rango dinámico típico entre forte y pianissimo en música orquestal. Es el rango audible relevante.
   - «Si una sala tiene RT60 = 0.3 s a 1 kHz pero RT60 = 1.5 s a 63 Hz, ¿cómo va a sonar una mezcla?» → Los graves van a «retumbar» mientras los agudos están secos. La mezcla va a sonar embarrada en graves y sin brillo. El ingeniero tenderá a cortar graves de más para compensar la sala → la mezcla no se traduce bien a otros sistemas.

4. **Fórmula de Sabine** (10 min). Escribir en la pizarra: RT60 = 0.161 · V / A. Explicar la intuición:
   - «¿Qué pasa si duplico el volumen?» → RT60 se duplica (más espacio para que el sonido rebote).
   - «¿Qué pasa si duplico la absorción?» → RT60 se reduce a la mitad (cada rebote «mata» más energía).
   - Calcular en vivo: V = 80 m³, A = 40 m² → RT60 = 0.161 × 80/40 = 0.32 s. Preguntar: «¿Es un buen valor para un estudio?» → Sí, excelente.

   Advertir: la fórmula simple de Sabine es una aproximación. Funciona bien para salas «normales» con ᾱ no muy alto (≤ 0.3). Para salas muy absorbentes (ᾱ > 0.4), la fórmula de Eyring (RT60 = 0.161 · V / [−S · ln(1−ᾱ)]) es más precisa. Lo veremos en la Sesión 20.

   > Insertar **Fig. 11-5** del Everest: medición de T20/T30.

5. **EDT, T20, T30** (10 min). Presentar los parámetros complementarios. La clave: EDT ≠ RT60. EDT mide los primeros 10 dB (percepción inmediata de reverberación); RT60 mide la cola completa (extinción total). En salas bien diseñadas, EDT ≈ RT60. Cuando son muy distintos, la sala tiene un problema de distribución de absorción.

   Preguntar: «Si EDT = 0.2 s pero RT60 = 0.8 s, ¿cómo se siente la sala?» → Se siente «seca» al principio (las primeras reflexiones se absorben rápido) pero tiene una cola audible larga. Puede pasar si hay mucha absorción localizada (nube sobre la mesa) pero el resto de la sala es reflectante.

---

## 3. Práctica — Medición y simulación

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 19 — Reverberación

**Instrucciones:**

**Parte A — Estimación de RT60 con palmada (grupal, en el aula)**

1. Un integrante del grupo da una palmada fuerte y seca en el centro del aula.
2. Otro integrante graba la palmada con el celular (grabadora de voz, calidad aceptable).
3. Abran la grabación en Audacity (gratuito) o cualquier editor de audio que muestre la forma de onda.
4. Observen la forma de onda: identifiquen el pico inicial (la palmada) y la «cola» que le sigue. Midan aproximadamente el tiempo desde el pico hasta que la cola se pierde en el ruido de fondo.
5. Respondan:
   - Tiempo estimado hasta que la cola desaparece: ___ segundos.
   - ¿Podemos decir que este tiempo es el RT60 del aula? ¿Por qué sí o por qué no? (Pista: la palmada NO tiene 60 dB de rango dinámico — probablemente solo podemos medir ~30-40 dB de caída antes de que el ruido de fondo tape el resto.)
   - ¿Qué necesitaríamos para medir RT60 correctamente?

**Parte B — Cálculo con fórmula de Sabine (individual)**

Usando los datos de la Sala A (aula sin acondicionar, 10 m × 8 m × 3 m) que calculaste en la Sesión 18, Parte A:

1. Calculá el volumen V del aula.
2. Usando la absorción total A que calculaste para cada banda de frecuencia, estimá RT60 para cada banda:

    | Banda | A (m²) — de Sesión 18 | RT60 = 0.161 · V / A (s) |
    |---|---|---|
    | 125 Hz | | |
    | 250 Hz | | |
    | 500 Hz | | |
    | 1 kHz | | |
    | 2 kHz | | |
    | 4 kHz | | |

3. Graficá RT60 vs. frecuencia (gráfico de barras agrupadas por banda).
4. Respondé:
   - ¿El RT60 es constante en todas las frecuencias o varía?
   - ¿En qué banda es más larga la reverberación? ¿Por qué?
   - Según la tabla de valores recomendados, ¿esta aula es adecuada para dar clase? Justificá.

**Parte C — Repetí para la Sala B (aula acondicionada)** de la Sesión 18, Parte A. Graficá RT60 para Sala A y Sala B en el mismo gráfico. Respondé:
   - ¿Cuánto bajó RT60 en cada banda al acondicionar la sala?
   - ¿El RT60 de la Sala B es más UNIFORME entre frecuencias que el de la Sala A? ¿Por qué es importante la uniformidad?

**Parte D — Simulación conceptual (individual, breve)**

Imaginá un recinto cúbico vacío de 5 m × 5 m × 5 m con paredes de concreto (α ≈ 0.02 en todas las frecuencias). Calculá:
   - V = ?
   - S_total = 6 × (5 × 5) = ?
   - A = α · S_total = ?
   - RT60 estimado = ?

Ahora imaginá que cubrís el 50% de las paredes con lana mineral de 100 mm (α ≈ 0.70 promedio). Recalculá A y RT60. Respondé:
   - ¿Qué pasó con RT60? ¿Por qué cambió tanto (o tan poco)?
   - ¿Qué limitación de la fórmula de Sabine se manifiesta en este caso extremo? (Pista: ᾱ pasó de 0.02 a ~0.36 — ¿la fórmula simple sigue siendo precisa?)

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Medición palmada (Parte A) | Grabación analizada, tiempo estimado, reflexión crítica sobre la diferencia entre «cola visible» y RT60 real, necesidades para medición correcta | Tiempo medido pero sin reflexión sobre limitaciones del método | Sin grabación o sin análisis |
| Cálculo Sabine (Parte B) | RT60 calculado para 6 bandas con datos de Sesión 18, gráfico generado, responde las 3 preguntas con evidencia | Errores en 1-2 bandas o análisis superficial | Cálculos incorrectos o sin usar datos previos |
| Comparación A/B (Parte C) | RT60 Sala B calculado, ambos en mismo gráfico, cuantifica mejora por banda, analiza uniformidad | Comparación presente pero sin datos numéricos | Sin comparación |
| Simulación conceptual (Parte D) | Cálculos correctos para ambos casos, identifica que RT60 bajó drásticamente, reconoce la limitación de Sabine para α alto | Cálculos correctos pero no identifica la limitación de la fórmula | Cálculos incorrectos |

---

## 4. Cierre — «RT60 en tu DAW»

### Discusión guiada (10 min)

- «Cuando abrís un plugin de reverberación (Valhalla, FabFilter Pro-R, Altiverb, Lexicon) y ves 'Decay Time = 2.0 s', ¿qué estás controlando exactamente?» → Estás controlando el RT60 SIMULADO. El plugin aplica un algoritmo (o una convolución con una IR real) que produce una cola de decaimiento de 60 dB en el tiempo que vos seteás.
- «¿Por qué un plugin de reverb de convolución suena más 'real' que uno algorítmico?» → Porque la convolución usa una **respuesta al impulso (IR)** grabada en un espacio REAL. Esa IR contiene TODA la información acústica del espacio: RT60 por frecuencia, reflexiones tempranas, coloración, difusión. El plugin simplemente «aplica» esa firma acústica a tu sonido. Un plugin algorítmico sintetiza todo eso matemáticamente — puede ser muy bueno, pero no es una sala real.
- «Si grabás voces en una sala con RT60 = 1.2 s, ¿podés 'sacarle' la reverberación en la mezcla con un plugin?» → NO. La reverberación está MEZCLADA con la señal directa. No podés separar el sonido directo de la reverberación una vez que se sumaron (es como tratar de separar la leche del café después de mezclarlos). Podés atenuar la reverberación con expansores de rango dinámico o plugins tipo «de-reverb», pero NUNCA vas a recuperar la señal perfectamente seca. De ahí la importancia de grabar en un espacio acústicamente controlado.

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"La reverberación es la persistencia del sonido en un recinto debido a las múltiples reflexiones en las superficies. No es un eco (reflexión discreta), sino miles de reflexiones fusionadas en una cola continua y difusa. El tiempo de reverberación RT60 mide cuánto tarda el nivel sonoro en decaer 60 dB después de apagar la fuente. La fórmula de Sabine (RT60 = 0.161 · V / A) relaciona el tiempo de reverberación con el volumen (a más volumen, más RT60) y la absorción total (a más absorción, menos RT60). RT60 varía con la frecuencia: una sala bien diseñada debe tener RT60 aproximadamente uniforme en todo el espectro. El EDT mide el decaimiento temprano (primeros 10 dB) y correlaciona mejor con la percepción subjetiva de reverberación. Los plugins de reverb simulan este fenómeno físico mediante algoritmos o convolución con respuestas al impulso reales. Grabar en una sala con RT60 inadecuado no se puede 'arreglar' completamente en la mezcla: la sala queda impresa en la grabación."*

---

## Recursos adicionales para el docente

- [Room EQ Wizard (REW)](https://www.roomeqwizard.com/) — software gratuito para medición acústica. Permite medir RT60, T20, T30, respuesta en frecuencia, waterfall, espectrograma. Imprescindible para demostraciones en vivo
- [Video: Measuring RT60 with REW — tutorial paso a paso](https://www.youtube.com/watch?v=8sCu7L3kUq8) — cómo medir tiempo de reverberación con micrófono de medición y REW
- [Simulador de decaimiento en p5.js](https://editor.p5js.org/) — se puede crear un sketch simple que muestre una barra de nivel (dB) decreciendo exponencialmente con una pendiente configurable (RT60)
- [IR Library — Open AIR](https://www.openairlib.net/) — biblioteca gratuita de respuestas al impulso de espacios reales: auditorios, iglesias, estudios, exteriores
- [Valhalla DSP — Reverb plugins con RT60 configurable](https://valhalladsp.com/) — demostrar cómo RT60, predelay y difusión temprana interactúan en un plugin real
- [Video: How Does Reverb Work? — Tech Ingredients](https://www.youtube.com/watch?v=UqWBrK5oEQ4) — excelente explicación física de la reverberación con demostraciones prácticas

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «¿Por qué 60 dB? ¿De dónde sale ese número?» | 60 dB es el rango dinámico típico entre un pasaje forte y el umbral de audibilidad en una sala de conciertos. En términos de energía, 60 dB = factor 1,000,000. Es decir, RT60 mide cuánto tarda la energía en reducirse a una MILLONÉSIMA parte. Es un valor convenido históricamente, pero no es arbitrario — cubre el rango audible relevante |
| «En la práctica, ¿cómo se mide RT60 si el ruido de fondo tapa los últimos dB?» | Excelente pregunta. En la práctica NO se mide la caída completa de 60 dB. Se mide T20 (caída de −5 a −25 dB, multiplicado ×3) o T30 (−5 a −35 dB, ×2). Estos rangos están por encima del ruido de fondo y se extrapolan linealmente. La norma ISO 3382 especifica estos métodos |
| «La fórmula de Sabine me da RT60 = 0.1 s en una cabina muy tratada — ¿es realista?» | Probablemente NO. La fórmula de Sabine asume campo difuso (energía uniforme en todas direcciones). En salas muy absorbentes, el campo NO es difuso y Sabine subestima RT60. La fórmula de Eyring (que usa −ln(1−ᾱ)) es más precisa para ᾱ altos. Lo veremos en la Sesión 20 |
| «¿RT60 y EDT deberían ser iguales?» | En una sala bien diseñada con absorción distribuida uniformemente, EDT ≈ RT60 (o EDT ligeramente menor). Si EDT es mucho MENOR que RT60, significa que las primeras reflexiones se absorben rápido (material absorbente cerca de la fuente o el receptor) pero la cola reverberante sobrevive más tiempo. Si EDT es MAYOR que RT60, es raro e indica un problema de medición o una sala con anomalías acústicas |
| «¿Para qué quiero saber RT60 si al final mezclo con auriculares?» | Incluso si mezclás con auriculares, RT60 importa al GRABAR. Si grabás una guitarra acústica en una sala con RT60 = 1.5 s, la reverberación de la sala queda impresa en la grabación. Además, los auriculares no eliminan la sala: las reflexiones del cuarto llegan a tus oídos IGUAL (los auriculares abiertos dejan pasar sonido ambiente). Y si algún día trabajás con monitores, RT60 es EL parámetro que define si tus decisiones de mezcla son confiables o estás compensando los problemas de la sala |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
