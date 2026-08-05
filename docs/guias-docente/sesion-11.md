# Guía Docente — Sesión 11: Efecto del suelo, temperatura y viento

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, p5.js, parlante Bluetooth, sonómetro, termómetro (puede ser de celular si tiene sensor), datos meteorológicos del día  
**Referencia:** Everest & Pohlmann, Capítulo 3, pp. 31–57 (Free Field, Atmospheric Effects) y Capítulo 8, pp. 105–115 (Refraction — Temperature and Wind Gradients, Acoustic Shadows, Ground Effects)

---

## Objetivo de la sesión

Que el estudiante explique la refracción del sonido por gradientes de temperatura y viento, identifique condiciones que producen zonas de sombra acústica, analice el efecto del tipo de suelo sobre la propagación, y prediga cualitativamente cómo varía la propagación exterior según la hora del día y las condiciones meteorológicas.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 10 min | Pregunta empírica: «¿Escuchaste alguna vez un tren o concierto de noche que de día no se oía?» |
| **Desarrollo** | 50 min | Teoría guiada: velocidad del sonido vs. T, gradientes, refracción, viento, suelo, zona de sombra |
| **Práctica** | 45 min | Simulación p5.js + diagramas de rayos + caso de concierto al aire libre |
| **Cierre** | 15 min | Discusión: ¿por qué los festivales suenan distinto a las 14:00 que a las 22:00? + bitácora |

---

## 1. Apertura — «De día no se oía, de noche sí»

### Dinámica

1. Preguntar a la clase: «¿Alguna vez notaron que un sonido lejano (un tren, una ruta, un concierto, una fábrica) se escucha mucho mejor de noche que de día?» Casi todos levantarán la mano.
2. Preguntar: «¿Por qué pasa esto?» Anotar las hipótesis en la pizarra. Típicas respuestas:
   - «De noche hay menos ruido de fondo» → correcto pero insuficiente (la diferencia puede ser 20-30 dB — más que el ruido de fondo).
   - «El aire está más quieto» → parcialmente correcto (el viento también curva el sonido).
   - «El sonido viaja mejor en el frío» → incorrecto (viaja más LENTO en el frío, no mejor).
3. Decir: «Hoy vamos a descubrir la física DETRÁS de este fenómeno. No es magia — es refracción, gradientes de temperatura y perfiles de viento.»

### Preguntas disparadoras

- «Si estás haciendo la prueba de sonido de un festival a las 15:00 (pleno sol) y el show es a las 21:00 (noche), ¿deberías recalibrar el sistema? ¿Por qué?»
- «¿Qué es una zona de sombra acústica y por qué un sonidista le tiene miedo?»
- «¿Por qué los conciertos al aire libre en verano a veces se escuchan a 5 km de distancia y otras veces a 500 m ya no se oyen?»

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **La velocidad del sonido depende de la temperatura** (5 min). Escribir en la pizarra: \(c(T) \approx 331.4 + 0.6 \cdot T\). Preguntar: «A 35°C, ¿cuánto más rápido viaja el sonido que a 5°C?» (331.4 + 21 = 352.4 vs. 331.4 + 3 = 334.4 → diferencia de 18 m/s, ~5% más rápido). «Parece poco, pero es suficiente para curvar trayectorias a larga distancia.»

2. **Refracción: cuando el sonido no viaja en línea recta** (15 min). Dibujar en la pizarra:
   - **Día soleado (gradiente negativo)**: el suelo está caliente, el aire arriba está frío. Dibujar el perfil de temperatura (T alta abajo, baja arriba) y el perfil de velocidad (c alta abajo, baja arriba). Una onda que viaja horizontalmente tiene su parte superior en aire más lento → se curva hacia ARRIBA.
   - **Noche despejada (gradiente positivo, inversión térmica)**: el suelo está frío, el aire arriba está caliente. La onda se curva hacia ABAJO.

    > Insertar **Fig. 8-1** del Everest: refracción de rayos por gradiente de temperatura.

    Enseñar la regla nemotécnica: **«El sonido siempre se curva hacia donde viaja más lento»**. Es análogo a la ley de Snell: \(\sin\theta_1 / c_1 = \sin\theta_2 / c_2\).

    > Insertar **Fig. 8-4** del Everest: zona de sombra acústica — dónde se forma y por qué el nivel cae abruptamente.

3. **El viento: no empuja, curva** (10 min). Aclarar el error conceptual más común: «El viento no 'arrastra' el sonido como arrastra una hoja. El sonido viaja a 343 m/s, el viento a 10 m/s. Es como querer empujar un auto de F1 con una bicicleta.» Lo que hace el viento es crear un gradiente de velocidad: más rápido arriba que abajo (por fricción con el suelo).

    Dibujar:
    - **Viento a favor**: \(c_{\text{efectiva}} = c + v_{\text{viento}}\). Como \(v_{\text{viento}}\) es mayor arriba, la onda viaja más rápido arriba → se curva hacia ABAJO → llega mejor al receptor.
    - **Viento en contra**: mismo gradiente pero la fuente está del otro lado → la onda se curva hacia ARRIBA → zona de sombra.

    > Insertar **Fig. 8-5** del Everest: efecto del viento — curvatura hacia abajo (a favor) y hacia arriba (en contra).

4. **Efecto del suelo: no todos los suelos son iguales** (10 min). Mostrar tabla de tipos de suelo y su reflectividad. Explicar la interferencia suelo-directa: dos caminos (directo y reflejado) que se suman en el receptor. La diferencia de camino produce refuerzos y cancelaciones que dependen de la frecuencia y la geometría.

    > Insertar **Fig. 8-3** del Everest: perfiles de temperatura diurna vs. nocturna y efecto neto sobre la propagación.

    Mostrar el *ground dip* como fenómeno real y medible: caída de 10-15 dB en medios (200-500 Hz) a 30-100 m sobre pasto.

5. **Síntesis: la noche perfecta** (5 min, gancho para el cierre). Combinar los tres factores que se alinean de noche: (1) inversión térmica curva el sonido hacia abajo, (2) menor viento reduce curvatura adversa, (3) mayor HR reduce absorción de agudos. Resultado: sonido que viaja 2-5 veces más lejos, con mejor fidelidad. Esto explica el fenómeno de la pregunta inicial.

---

## 3. Práctica — Simulación, diagramas y caso real

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 11 — Refracción, suelo y zona de sombra

**Instrucciones:**

**Parte A — Simulación p5.js de refracción (individual)**

1. Abrí el simulador p5.js de refracción atmosférica (provisto por el docente).
2. Configurá tres escenarios y capturá la trayectoria de los rayos sonoros:

   | Escenario | Gradiente de T | Viento | Distancia fuente-receptor | ¿El receptor está en zona de sombra? | SPL recibido vs. SPL predicho por campo libre |
   |---|---|---|---|---|---|
   | Mediodía soleado (suelo 35°C, aire a 10 m: 25°C) | Negativo (−1°C/m) | Calma | 300 m | | |
   | Noche despejada (suelo 10°C, aire a 10 m: 18°C) | Positivo (+0.8°C/m) | Calma | 300 m | | |
   | Día ventoso (perfil de viento: 2 m/s a 1 m, 8 m/s a 10 m) | Isotermo (sin gradiente T) | En contra (desde receptor hacia fuente) | 300 m | | |

3. Respondé:
   - En el escenario de mediodía, ¿a qué altura aproximada pasa el rayo sonoro sobre la cabeza del receptor?
   - ¿Qué cambiaría si el suelo fuera asfalto (muy caliente) en vez de pasto?

**Parte B — Diagrama de rayos a mano (individual)**

Dibujá (a mano alzada, foto con celular o digital) un diagrama de rayos para cada una de estas tres situaciones. Cada diagrama debe incluir: fuente S (parlante), receptor R (persona), perfil de temperatura (eje vertical: altura, eje horizontal: T), perfil de viento si aplica, y al menos 3 rayos sonoros mostrando la curvatura:

1. **Festival de día**: 14:00, sol pleno, suelo de pasto a 45°C, temperatura del aire a 5 m: 30°C. Viento en calma. Distancia fuente-receptor: 200 m.
2. **Festival de noche**: 22:00, cielo despejado, suelo a 15°C, temperatura del aire a 5 m: 20°C. Viento suave (3 m/s) a favor.
3. **Concierto con viento cruzado**: 18:00, temperatura uniforme (20°C en todas las alturas). Viento fuerte de izquierda a derecha (10 m/s). Fuente al oeste, receptor al este.

Para cada diagrama, indicá si el receptor está en zona de sombra y estimá cualitativamente si el SPL recibido es mayor, menor o igual que la predicción de campo libre.

**Parte C — Caso integrador: «El festival de la Quebrada» (en parejas)**

Leé el siguiente escenario realista:

> Un festival de música folklórica se realiza en la Quebrada de Humahuaca (Jujuy, Argentina), a 3,000 m de altura. El escenario está montado en el fondo de la quebrada (valle), con el público distribuido en una ladera inclinada que asciende desde los 0 m (pie del escenario) hasta los 80 m de altura respecto al escenario, a una distancia horizontal de 200-400 m.
>
> Día 1: soleado, 28°C a las 15:00 (prueba de sonido). El sonidista ajusta el sistema para que en la zona más alejada (400 m, +80 m de altura) el nivel sea 85 dBA. Todo suena bien.
>
> Día 1 a las 21:00 (show): 12°C, cielo despejado, viento calmo. El mismo sistema, con los mismos ajustes, produce un SPL de 92 dBA en la zona alejada — 7 dB más de lo esperado. Además, en un pueblo a 3 km de distancia, los vecinos se quejan de que «el concierto retumba y no los deja dormir», algo que NUNCA había pasado en ediciones anteriores del festival realizadas al mediodía.
>
> Día 2: nublado, 18°C constante todo el día, viento fuerte del norte (en contra del público, que mira al sur hacia el escenario). El sonidista mantiene los mismos ajustes que la noche anterior. En la zona alejada, el SPL es de solo 78 dBA y el sonido suena «apagado, sin brillo».

Redactá un informe técnico de 400-500 palabras que analice:
1. ¿Por qué el nivel fue 7 dB mayor de noche (día 1, 21:00) que de día (día 1, 15:00)? Explicá el mecanismo físico.
2. ¿Por qué los vecinos a 3 km escuchaban el concierto de noche pero no de día? ¿Es solo por el menor ruido de fondo nocturno? Justificá con los tres factores estudiados.
3. ¿Por qué el día 2 (nublado, viento en contra) el nivel fue tan bajo (78 dBA) comparado con la noche anterior (92 dBA)? Explicá cómo el viento en contra y la ausencia de inversión térmica (día nublado → temperatura uniforme) afectan la propagación.
4. Si fueras el sonidista, ¿qué ajustes harías al sistema para cada condición (día soleado, noche despejada, día nublado con viento en contra) para mantener 85 dBA en la zona alejada?
5. ¿Cómo afecta la altura (3,000 m) a la absorción atmosférica comparada con el nivel del mar? (Repaso de sesión 10: menor densidad → menor absorción.)

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Simulación (Parte A) | 3 escenarios con tabla completa, responde ambas preguntas con razonamiento físico | Tabla parcial o respuestas imprecisas | Datos incorrectos o sin respuestas |
| Diagramas (Parte B) | 3 diagramas con fuente, receptor, perfil, rayos y curvatura correcta. Zona de sombra bien indicada | 2 diagramas o curvaturas incorrectas en uno | 1 o ningún diagrama |
| Caso integrador (Parte C) | Analiza los 3 momentos con los 3 mecanismos (refracción T, viento, absorción), ajustes propuestos, corrección por altura | Analiza 2 de los 3 momentos, ajustes vagos | Sin análisis de mecanismos o ajustes incorrectos |
| Terminología | Usa correctamente: refracción, gradiente de temperatura, inversión térmica, zona de sombra acústica, perfil de viento, *ground effect* | Algunos términos imprecisos | Sin terminología técnica |

---

## 4. Cierre — Discusión y bitácora

### Discusión guiada (10 min)

- «Entonces, ¿por qué el tren se escucha de noche y no de día?» (Síntesis: inversión térmica curva el sonido hacia abajo + menos viento + mayor humedad = sonido que viaja más lejos y con más fidelidad.)
- «Imaginá que sos el ingeniero de sonido de un festival en verano. Llegás a las 14:00, hacés la prueba de sonido con 38°C y sol. El show es a las 22:00 con 20°C. ¿Qué hacés?» (Guardar dos perfiles de DSP: uno para prueba de sonido y otro para el show, ajustados según condiciones meteorológicas previstas. Y medir SPL en la torre de delay ANTES de que empiece el show para verificar.)
- «¿Qué es peor para un sonidista de exteriores: un día muy soleado o un día con viento fuerte en contra?» (Ambos son problemáticos, pero el viento fuerte en contra es peor porque la zona de sombra puede ser muy pronunciada y las ráfagas son impredecibles. En un día soleado sin viento, al menos podés predecir y compensar.)

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"El sonido en exteriores no viaja en línea recta. La velocidad del sonido depende de la temperatura (c ≈ 331.4 + 0.6·T), y cuando hay capas de aire a distinta temperatura, las ondas se curvan — es el fenómeno de refracción. De día, con el suelo caliente, el sonido se curva hacia arriba y crea zonas de sombra acústica donde el nivel puede ser 20-30 dB menor que la predicción de campo libre. De noche, con inversión térmica, el sonido se curva hacia abajo y viaja mucho más lejos. El viento también curva las trayectorias (hacia abajo a favor, hacia arriba en contra) por el gradiente de velocidad con la altura. El tipo de suelo (reflectante como concreto, absorbente como pasto) modifica el espectro por interferencia entre el camino directo y el reflejado. Un ingeniero de sonido en exteriores debe conocer y anticipar estos tres factores para ecualizar y ajustar correctamente el sistema."*

---

## Recursos adicionales para el docente

- [Simulador p5.js de refracción atmosférica](https://editor.p5js.org/) — sketch interactivo con sliders para gradiente de T, velocidad del viento, distancia. Dibuja trayectorias curvas de rayos sonoros y calcula SPL en el receptor
- [Sengpielaudio: Dependence of Speed of Sound on Temperature](http://www.sengpielaudio.com/calculator-speedsound.htm) — calculadora y tabla de c(T)
- [Diagramas de zonas de sombra acústica](https://www.acoustics.asn.au/) — ejemplos visuales de la Australian Acoustical Society
- [NOAA Weather Data](https://www.weather.gov/) — para obtener perfiles de temperatura y viento en tiempo real durante la clase
- [Paper: Review of Outdoor Sound Propagation Models](https://www.sciencedirect.com/) — resumen académico de todos los factores que afectan la propagación exterior
- [Video: Sound Refraction Demonstration](https://www.youtube.com/watch?v=9GkZgJxT9Dc) — demostración visual con láser y gelatina (análogo a la refracción acústica)
- [Video: Wind Effects on Sound](https://www.youtube.com/watch?v=9GkZgJxT9Dc) — simulación de propagación con viento

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «No visualizo cómo el sonido se curva. ¿No debería ir en línea recta?» | Usar la analogía de la luz: cuando un rayo de luz pasa de aire a agua, se curva (refracción) porque cambia la velocidad. Lo mismo pasa con el sonido cuando pasa de una capa de aire caliente a una fría. Mostrar la imagen del lápiz «quebrado» en un vaso de agua — todos lo han visto. La diferencia es que en acústica el gradiente de velocidad es continuo (muchas capas finitas), no abrupto |
| «¿Cómo 'sabe' el sonido hacia dónde curvarse?» | No «sabe» nada. Es geometría de frentes de onda (principio de Huygens): cada punto del frente de onda actúa como una fuente secundaria. En la parte del frente que está en aire más lento, esas fuentes secundarias generan ondas que viajan más lento → el frente de onda se inclina. Dibujar el principio de Huygens con 5-6 puntos alineados verticalmente, cada uno con distinta velocidad |
| Confusión: «¿El sonido viaja más rápido en aire frío o caliente?» | Más rápido en aire CALIENTE. Esto es lo opuesto a muchos otros fenómenos (en sólidos, el sonido viaja más rápido en frío porque el material es más rígido). En gases, la velocidad depende de la agitación térmica de las moléculas: a más temperatura, más energía cinética, más rápido se transmite la vibración |
| «¿Por qué el sonido se curva hacia donde viaja más lento?» | Es la ley de Snell para refracción continua. Imaginate una fila de soldados marchando que pasa de asfalto (rápido) a arena (lento) en diagonal. Los soldados que pisan la arena primero reducen la velocidad mientras los demás siguen rápido → la fila gira hacia la arena. La onda sonora hace exactamente lo mismo cuando encuentra un cambio de velocidad |
| «¿Cómo mido el gradiente de temperatura sin equipo meteorológico?» | Con dos termómetros baratos: uno a 10 cm del suelo y otro a 2 m de altura. La diferencia dividida por la diferencia de altura es el gradiente aproximado. O usar datos de una estación meteorológica cercana (muchas ciudades tienen datos públicos de temperatura a 2 m y a 10 m) |
| «En el caso del festival, ¿por qué la altura (3,000 m) reduce la absorción atmosférica?» | A menor presión atmosférica, menor densidad del aire → menos moléculas por m³ → menos colisiones moleculares → menos disipación de energía acústica. La corrección es proporcional a la presión. A 3,000 m, la presión es ~70% de la del nivel del mar → la absorción atmosférica es ~30% menor que al nivel del mar para la misma T y HR. Es una de las razones por las que el sonido viaja tan lejos en el Altiplano |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
