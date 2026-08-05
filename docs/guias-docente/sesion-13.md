# Guía Docente — Sesión 13: Difracción del sonido

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, p5.js, parlante Bluetooth, sonómetro (app de celular), objetos de distintos tamaños (cartulina, mochila, silla, puerta), cinta métrica  
**Referencia:** Everest & Pohlmann, Capítulo 7, pp. 97–105 (Diffraction — Edge Diffraction, Fresnel Number, Barrier Insertion Loss, Aperture Diffraction)

---

## Objetivo de la sesión

Que el estudiante explique la difracción del sonido en función de la relación entre longitud de onda y tamaño del obstáculo, calcule la pérdida por inserción (IL) de una barrera acústica usando el número de Fresnel, y diseñe una barrera justificando sus parámetros (altura, posición, material) en función de la frecuencia.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 10 min | Demostración: ¿por qué escuchás a alguien detrás de una columna? |
| **Desarrollo** | 40 min | Teoría guiada: principio de Huygens, λ vs. obstáculo, barreras e IL, número de Fresnel |
| **Práctica** | 55 min | Simulación p5.js + diseño de barrera para caso exterior + análisis de variables |
| **Cierre** | 15 min | Discusión: «lo que una barrera puede y NO puede hacer» + bitácora |

---

## 1. Apertura — «¿Por qué escucho si no veo?»

### Dinámica

1. Pedir a un estudiante que se ponga detrás de una columna, puerta entreabierta o pizarra, de modo que no vea al docente.
2. El docente habla en voz normal desde el otro lado. Preguntar al estudiante: «¿Me escuchás?» → Sí. «¿Me ves?» → No.
3. Preguntar a la clase: «¿Por qué el sonido 'dobla la esquina' pero la luz no?» → Anotar hipótesis.
4. Mostrar un parlante Bluetooth reproduciendo un tono grave (100 Hz) y luego un tono agudo (4 kHz), ambos detrás del mismo obstáculo. El grave se escucha claramente; el agudo casi desaparece.
5. Decir: «Esto que acaban de ver NO lo explica el modelo de rayos de la clase pasada. Es difracción — un fenómeno puramente ondulatorio. Hoy aprendemos cómo se diseña una barrera acústica y por qué nunca bloquea todo el sonido.»

### Preguntas disparadoras

- «¿Por qué cuando dejás la puerta de tu cuarto apenas entreabierta, lo que se escucha afuera es puro grave?»
- «Si una barrera acústica en una autopista tiene 3 m de altura, ¿un camión se escucha igual que un auto deportivo?»
- «¿Funcionaría una barrera acústica hecha de tela o de una lona finita? ¿Por qué?»

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Principio de Huygens: cada punto es una fuente** (10 min). Dibujar en la pizarra un frente de onda plano aproximándose a un borde (media pantalla). Explicar el principio de Huygens: cada punto del frente de onda emite ondas esféricas. Los puntos del borde, al no tener puntos vecinos que cancelen sus emisiones laterales, generan ondas que se propagan hacia la zona de sombra.

    > Insertar **Fig. 7-1** del Everest: difracción en un borde.

    Hacer la analogía con ondas en el agua: cuando una ola encuentra un obstáculo con una abertura, del otro lado salen ondas circulares. Si la abertura es grande comparada con la longitud de onda, las ondas salen casi planas. Si es pequeña, salen circulares. Mostrar videos de demostraciones en agua si están disponibles.

2. **La regla de oro: λ vs. tamaño del obstáculo** (10 min). Escribir en la pizarra:

    | λ vs. obstáculo | ¿Difracción? | Consecuencia |
    |---|---|---|
    | λ ≫ obstáculo | Máxima | El sonido rodea el obstáculo sin atenuación apreciable |
    | λ ≈ obstáculo | Parcial | Zona de sombra parcial |
    | λ ≪ obstáculo | Mínima | Zona de sombra bien definida |

    Calcular ejemplos en vivo:
    - Columna de 30 cm: ¿a qué frecuencia empieza a hacer sombra? λ = 30 cm → f = 343/0.3 ≈ 1,143 Hz. Por debajo de ~1 kHz, el sonido rodea la columna. Por encima, se atenúa.
    - Cabeza humana (~18 cm de ancho): ¿a qué frecuencia la cabeza proyecta sombra acústica? λ = 18 cm → f ≈ 1,900 Hz. Por eso girar la cabeza ayuda a localizar sonidos agudos (la oreja lejana queda en zona de sombra) pero no graves.

    Preguntar: «¿Por qué un subwoofer puede estar en cualquier rincón de la sala pero los tweeters tienen que apuntar directo a tus oídos?» (El subwoofer emite λ > 1 m — difracción masiva, llena la sala. El tweeter emite λ < 5 cm — casi no se difracta, es direccional como un rayo láser.)

3. **Barreras acústicas y pérdida por inserción (IL)** (15 min). Dibujar el esquema clásico: fuente S, barrera de altura h, receptor R. La diferencia de camino δ = (a + b) − d (distancia por encima de la barrera menos distancia en línea recta) es lo que determina la atenuación.

    > Insertar **Fig. 7-3** del Everest: pérdida por inserción de barrera.

    Escribir la fórmula de Maekawa: IL ≈ 10·log₁₀(3 + 20N), con N = 2δ/λ = 2fδ/c.

    Hacer un ejemplo numérico paso a paso:
    - Barrera de 2 m de altura. Fuente a 10 m de la barrera, a 0.5 m del suelo. Receptor a 20 m detrás de la barrera, a 1.5 m del suelo.
    - Calcular δ: distancia directa ≈ 30 m; distancia por encima ≈ √(10² + 2²) + √(20² + 2²) ≈ 10.2 + 20.1 = 30.3 m → δ ≈ 0.3 m.
    - Para 500 Hz: N = 2·0.3/0.686 ≈ 0.87 → IL ≈ 10·log₁₀(3 + 17.5) ≈ 13.1 dB.
    - Para 125 Hz: N = 2·0.3/2.74 ≈ 0.22 → IL ≈ 10·log₁₀(3 + 4.4) ≈ 8.7 dB.

    Conclusión: la misma barrera es ~4.4 dB más efectiva a 500 Hz que a 125 Hz. **Las barreras siempre atenúan más los agudos que los graves.**

    > Insertar **Fig. 7-4** del Everest: ejemplos reales de barreras con mediciones.

4. **Paradoja y limitaciones** (5 min). Mencionar las limitaciones prácticas:
    - **Nunca IL > 25 dB**: por más alta que sea la barrera, la atmósfera misma dispersa y difracta el sonido.
    - **El sonido se cuela por todos lados**: si la barrera no es suficientemente larga, el sonido la rodea por los extremos (*flanking* lateral).
    - **El viento y la temperatura arruinan la predicción**: una inversión térmica (sesión 11) puede curvar el sonido por ENCIMA de la barrera, reduciendo drásticamente la IL.
    - **La barrera en sí puede vibrar y re-irradiar**: si es muy liviana (chapa fina), actúa como un panel radiante y transmite sonido.

---

## 3. Práctica — Simulación y diseño de barrera

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 13 — Difracción y diseño de barrera acústica

**Instrucciones:**

**Parte A — Simulación p5.js de difracción (individual)**

1. Abrí el simulador p5.js de difracción por borde (provisto por el docente).
2. Configurá una onda plana de frecuencia ajustable que incide sobre un borde (media pantalla).
3. Para cada frecuencia de la tabla, medí visualmente qué tan lejos «penetra» la onda en la zona de sombra geométrica. Usá la escala de colores de la simulación (rojo = alta presión, azul = baja presión) para determinar la profundidad de penetración:

    | Frecuencia | λ (m) | ¿Penetra en la zona de sombra? | Profundidad aproximada de penetración |
    |---|---|---|---|
    | 125 Hz | 2.74 | | |
    | 500 Hz | 0.69 | | |
    | 2 kHz | 0.17 | | |
    | 8 kHz | 0.043 | | |

4. Respondé:
   - ¿Qué relación observás entre λ y la penetración en la zona de sombra?
   - Si quisieras construir una barrera que bloquee EFICAZMENTE el ruido de tráfico (mayoría de energía entre 100 Hz y 2 kHz), ¿qué frecuencias van a ser las más difíciles de atenuar? ¿Por qué?

**Parte B — Diseño de barrera para un escenario exterior (en parejas)**

Leé el siguiente escenario:

> Una vivienda está ubicada a 80 m del escenario de un festival de música electrónica. El escenario está a 1.5 m de altura sobre el terreno (plataforma), con los altavoces principales (line array) a 8 m de altura. El terreno entre el escenario y la vivienda es plano (pasto). No hay obstáculos naturales. Los vecinos se quejan de que el nivel en su propiedad alcanza 75 dBA durante los shows (el límite legal nocturno es 55 dBA).
>
> El predio del festival termina a 30 m del escenario. De los 30 m a los 80 m (donde está la vivienda) hay un terreno que NO pertenece al festival, pero el municipio autoriza construir una barrera acústica temporal justo en el límite del predio (a 30 m del escenario).

Diseñá una barrera acústica temporal para reducir el nivel en la vivienda de 75 dBA a ≤ 55 dBA (IL requerida ≥ 20 dB). Tu diseño debe incluir:

1. **Cálculo de δ mínimo necesario**: asumí que la frecuencia crítica (la más difícil de atenuar) es 125 Hz. Calculá el δ necesario para lograr IL ≥ 20 dB a 125 Hz usando la fórmula de Maekawa.
2. **Altura de la barrera**: con el δ calculado y la geometría dada (fuente a 8 m de altura a 30 m de distancia, receptor a 50 m detrás de la barrera a 1.5 m del suelo), determiná la altura mínima de la barrera.
3. **Longitud de la barrera**: estimá cuánto debe extenderse lateralmente para evitar que el sonido la rodee por los costados (regla práctica: extender al menos 30° más allá de la línea de visión a cada lado).
4. **Material**: proponé un material viable para una barrera TEMPORAL (se monta y desmonta en 2 días). Justificá por densidad superficial y por capacidad de absorción en la cara expuesta.
5. **Limitaciones**: enumerá al menos DOS fenómenos físicos (vistos en sesiones 9-12) que podrían reducir la efectividad real de tu barrera respecto al cálculo teórico. Explicá cómo afectarían y qué harías para mitigarlos.

**Parte C — Análisis de variables (individual)**

Sin necesidad de simulación, respondé cualitativamente (justificando con λ, δ, N o las relaciones estudiadas):

| Cambio | ¿La IL aumenta, disminuye o se mantiene? | ¿Por qué? |
|---|---|---|
| Se duplica la altura de la barrera | | |
| Se aleja la barrera de la fuente (estaba a 5 m, ahora a 20 m) | | |
| La fuente emite más agudos y menos graves (mismo SPL total) | | |
| La barrera tiene huecos en la base (separación del suelo de 5 cm) | | |
| Hay viento fuerte en contra (del receptor hacia la fuente) | | |
| Se recubre la cara expuesta de la barrera con material absorbente | | |

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Simulación (Parte A) | Tabla completa para 4 frecuencias, responde ambas preguntas con relación λ-penetración | Tabla parcial o respuestas vagas | Datos incorrectos o sin respuestas |
| Diseño de barrera (Parte B) | Calcula δ correctamente, altura geométrica justificada, longitud y material viables, 2 limitaciones bien identificadas | Cálculo con errores menores o limitaciones incompletas | Sin cálculo de IL o altura incorrecta |
| Análisis de variables (Parte C) | 6 filas completas con justificación física en cada una | 4-5 filas o justificaciones débiles | < 4 filas o análisis incorrecto |
| Terminología | Usa correctamente: difracción, principio de Huygens, IL, número de Fresnel, δ (diferencia de camino), zona de sombra | Algunos términos imprecisos | Sin terminología técnica |

---

## 4. Cierre — Discusión y bitácora

### Discusión guiada (10 min)

- «¿Por qué una barrera de 10 m de altura no te da 50 dB de atenuación?» (La IL no crece linealmente con la altura — la fórmula de Maekawa tiene un logaritmo. Además, a cierta altura la atmósfera misma dispersa el sonido. Hay un límite físico de ~25 dB.)
- «¿Qué es más efectivo para reducir ruido de tráfico: una barrera de 4 m o dos barreras de 2 m separadas 20 m?» (Dos barreras pueden ser más efectivas que una sola si la separación es suficiente — el sonido que difracta en la primera barrera encuentra la segunda. Pero requiere más espacio y es más costoso. En general, una sola barrera más alta es más costo-efectiva.)
- «Imaginá que sos el ingeniero acústico de una autopista nueva que pasa a 100 m de un barrio residencial. El municipio te pide 'eliminar el ruido'. ¿Qué le respondés?» («No se puede eliminar, solo reducir. Con una barrera bien diseñada podemos bajar 10-15 dB, que perceptual y legalmente es una gran diferencia. Pero nunca va a ser silencio absoluto. Además, hay que considerar el viento, la temperatura, y el flanking por los extremos.»)

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"La difracción es la capacidad de una onda sonora para rodear obstáculos y doblar esquinas. Se explica por el principio de Huygens: cada punto del frente de onda actúa como fuente secundaria. La magnitud de la difracción depende de la relación entre la longitud de onda λ y el tamaño del obstáculo: cuando λ es grande comparada con el obstáculo, el sonido lo rodea sin atenuación; cuando λ es pequeña, se forma una zona de sombra acústica. Por eso las barreras acústicas atenúan más los agudos que los graves. La efectividad de una barrera se mide con la pérdida por inserción IL = Lp(sin barrera) − Lp(con barrera). La IL se puede estimar con el número de Fresnel N = 2δ/λ, donde δ es la diferencia de camino por encima de la barrera. Una barrera práctica logra IL entre 5 y 15 dB; más de 20 dB es muy difícil. Factores como huecos, viento, inversión térmica y difracción lateral degradan la efectividad real."*

---

## Recursos adicionales para el docente

- [Simulador p5.js de difracción por borde y abertura](https://editor.p5js.org/) — sketch interactivo con frecuencias ajustables, visualización de frentes de onda y zona de sombra
- [Calculadora de IL por barrera (Maekawa)](http://www.sengpielaudio.com/calculator-barriereffect.htm) — ingresás geometría y frecuencia, devuelve IL
- [Video: Acoustic Diffraction Demonstration](https://www.youtube.com/watch?v=1LPkZ7z1K3Y) — demostración con parlante, micrófono y obstáculos
- [FHWA Highway Noise Barrier Design Handbook](https://www.fhwa.dot.gov/environment/noise/) — manual de diseño de barreras acústicas para autopistas (referencia técnica completa)
- [Ripple tank simulation (PhET)](https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_en.html) — simulación de ondas en agua que muestra difracción visualmente

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «¿Por qué la difracción no la explica el modelo de rayos?» | Porque el modelo de rayos asume propagación rectilínea. La difracción es justamente lo que pasa cuando esa suposición falla. Es como preguntar «¿por qué la óptica geométrica no explica los patrones de interferencia?». El modelo de rayos es una aproximación de alta frecuencia; la difracción es un fenómeno ondulatorio que emerge a bajas frecuencias (λ comparable al obstáculo) |
| «¿Cómo puede ser que una barrera más alta no siempre dé más atenuación?» | Sí da más, pero no linealmente. Pasar de 2 m a 4 m de altura puede agregar 3-5 dB. Pasar de 4 m a 8 m agrega otros 2-3 dB. Hay retornos decrecientes. Además, la IL está limitada por la dispersión atmosférica (~25 dB máximo práctico) |
| «No entiendo δ (diferencia de camino) — ¿no es simplemente la altura de la barrera?» | No. δ es cuánto más largo es el camino que rodea la barrera comparado con la línea recta. Depende de TRES cosas: altura de la barrera, distancia fuente-barrera Y distancia barrera-receptor. Una barrera de 3 m puesta justo al lado de la fuente produce más δ (y más IL) que la misma barrera puesta en el medio entre fuente y receptor |
| «¿Por qué una lona o tela no funciona como barrera?» | Porque tiene poca masa superficial. El sonido la hace vibrar y se transmite al otro lado casi sin pérdida. Una barrera efectiva necesita masa (kg/m²). Regla: ≥ 10 kg/m² para empezar a ser efectiva, ≥ 20 kg/m² para IL respetable. Una lona de plástico tiene < 1 kg/m² |
| «Si pongo una barrera acústica, ¿el sonido no rebota y molesta al otro lado?» | Sí, es un problema real. Las barreras reflectantes pueden aumentar el nivel en el lado opuesto (donde no hay receptores) o reflejar hacia arriba. Por eso las barreras modernas tienen material absorbente en al menos una cara (la que da a la fuente) |
| «¿Funcionan las barreras 'vegetales' (árboles, arbustos)?» | Muy poco. Una franja densa de árboles de 30 m de ancho puede dar 2-4 dB de atenuación — mucho menos que una barrera sólida de 2 m. Los árboles tienen valor psicológico (si no ves la autopista, te molesta menos) pero NO son una solución acústica efectiva. La IL de la vegetación es casi insignificante comparada con una barrera sólida |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
