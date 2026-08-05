# Guía Docente — Sesión 28: Transmisión de sonido y ley de la masa

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, calculadora (planilla o p5.js), sonómetro (app), cinta métrica, catálogo de materiales de construcción con masas superficiales (online)  
**Referencia:** Everest & Pohlmann, Capítulo 16, pp. 231–250 (Sound Transmission Loss, Mass Law, STC, Composite Partitions, Noise Reduction, Flanking Paths). Capítulo 17, pp. 251–275 (Ventilating Systems — Flanking through HVAC, Vibration Isolation). ASTM E413 (Classification for Rating Sound Insulation). ISO 717-1:2020 (Rating of Sound Insulation in Buildings — Airborne Sound Insulation)

---

## Objetivo de la sesión

Que el estudiante calcule la pérdida por transmisión (TL) de particiones simples usando la ley de masa teórica e interprete sus limitaciones (efecto de coincidencia, rigidez a bajas frecuencias, campo difuso), determine el STC de una partición a partir de su TL por bandas de frecuencia y evalúe su adecuación para distintos escenarios de ruido, calcule la reducción de ruido (NR) entre recintos incorporando el efecto de la absorción en el recinto receptor, e identifique y jerarquice los caminos de flanqueo en una construcción real proponiendo soluciones para cada punto débil.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | «La espuma acústica NO aísla» — demostración con dos recintos y la diferencia absorción vs. aislamiento |
| **Desarrollo** | 50 min | Teoría guiada: TL y ley de masa, STC, NR, flanqueo y regla del eslabón más débil |
| **Práctica** | 40 min | Cálculo de TL para materiales reales, análisis de una partición compuesta, identificación de flanqueo |
| **Cierre** | 15 min | «El aislamiento es tan fuerte como su punto MÁS DÉBIL» + bitácora |

---

## 1. Apertura — «La espuma acústica NO aísla»

### Dinámica

1. Mostrar dos productos lado a lado: (a) un panel de espuma acústica de 5 cm de espesor (precio: $40), y (b) una placa de yeso de 12.5 mm (precio: $8). Preguntar: «¿Cuál de estos dos productos va a evitar que el vecino escuche tu música?» → La mayoría va a decir la espuma, porque es «acústica». Revelar la verdad: la espuma tiene una masa superficial de ~0.3 kg/m². La placa de yeso tiene ~9 kg/m². La TL a 500 Hz de la espuma es < 1 dB. La de la placa de yeso es ~23 dB. La espuma ABSORBE (reduce reflexiones DENTRO de la sala). La placa de yeso AÍSLA (impide que el sonido ATRAVIESE la pared). «La industria de la espuma acústica ha hecho fortunas vendiendo el producto equivocado para el problema equivocado. Hoy van a aprender cuándo necesitan absorción, cuándo aislamiento, y — lo más importante — cuánto aislamiento necesitan para CADA situación.»

2. Demostración en vivo (si hay dos aulas o pasillos adyacentes): poner música a 85 dBA en un recinto, medir en el recinto adyacente con la puerta abierta vs. cerrada. La diferencia es la reducción de ruido (NR) de la puerta — típicamente 15-20 dB para una puerta hueca, 25-30 dB para una maciza. Preguntar: «¿Qué porcentaje de la energía sonora pasó al otro lado con la puerta cerrada?» → Si NR = 20 dB, la energía se redujo 100× (pasó 1%). «Con un vecino tocando batería a 110 dBA, esos 90 dBA que recibís son todavía MÁS FUERTES que una conversación normal. La reducción de 20 dB NO es suficiente. ¿Cuánto necesitarían?»

3. Plantear el problema real: un estudio de grabación en un departamento. La sala de estar del vecino está separada de tu estudio por una pared de yeso de 10 cm. El vecino ve televisión a 70 dBA. Tu estudio necesita ≤ 25 dBA de ruido de fondo para grabar. NR necesaria = 70 − 25 = 45 dB. La pared de yeso tiene TL ≈ 30-35 dB. «Faltan 10-15 dB. ¿Cómo los conseguís? Eso es lo que vamos a resolver hoy.»

### Preguntas disparadoras

- «¿Por qué una pared de ladrillo macizo (m_s ≈ 150 kg/m²) aísla mejor que una de yeso (m_s ≈ 8 kg/m²)?» → Ley de masa: TL = 20·log(m_s·f) − 47. El doble de masa → +6 dB. 150 vs. 8 es 18.75× más masa → 20·log(18.75) ≈ +25 dB extra.
- «Si duplicar la masa suma 6 dB, ¿por qué no ponemos simplemente paredes de 2 metros de concreto en todos lados?» → Porque el espacio, el costo y la carga estructural crecen. Y porque a partir de cierto punto, el flanqueo domina y agregar masa a la pared ya no mejora el aislamiento compuesto.

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Aislar vs. absorber: la confusión #1 en acústica** (10 min). Dibujar dos recintos adyacentes. Mostrar los tres destinos de la energía que incide en la pared: reflexión, absorción (dentro de la pared), transmisión. Preguntar: «¿Qué pasa si pongo espuma acústica en la pared del recinto fuente?» → Aumenta la absorción → baja el nivel sonoro DENTRO del recinto fuente (menos reflexiones) → pero la energía que ATRAVIESA la pared hacia el vecino prácticamente NO cambia. «¿Y si pongo la espuma DENTRO de la cavidad de una pared doble?» → Ahí SÍ: la espuma absorbe la energía que entró a la cavidad antes de que llegue a la segunda hoja. La absorción ayuda al aislamiento SOLO cuando está DENTRO del camino de transmisión, no en la superficie del recinto fuente.

    > Insertar **Fig. 1-4** del Everest: diagrama conceptual de reflexión, absorción y transmisión en una partición.

2. **TL y la ley de la masa: la física newtoniana del aislamiento** (15 min). Derivar conceptualmente: F = m·a → más masa → menos aceleración para la misma presión sonora → menos vibración de la pared → menos re-radiación del otro lado. Presentar la fórmula TL = 20·log(m_s·f) − 47. Calcular ejemplos en la pizarra en tiempo real, pidiendo a los estudiantes que calculen con sus calculadoras:
   - Yeso 12.5 mm (m_s = 9 kg/m²) a 125 Hz → TL = 20·log(1125) − 47 = 20·(3.05) − 47 = 61 − 47 = 14 dB
   - Yeso 12.5 mm a 500 Hz → TL = 20·log(4500) − 47 = 20·(3.65) − 47 = 73 − 47 = 26 dB
   - Yeso 12.5 mm a 2 kHz → TL = 20·log(18000) − 47 = 20·(4.26) − 47 = 85.1 − 47 = 38.1 dB

   Mostrar la regla del 6-6: duplicar masa → +6 dB, duplicar frecuencia → +6 dB. Explicar las desviaciones de la ley de masa en la realidad: efecto de coincidencia (la pared se vuelve «transparente» a una frecuencia crítica f_c), resonancias de la partición, rigidez a muy bajas frecuencias.

    > Insertar **Fig. 16-5** del Everest: gráfico TL vs. frecuencia mostrando las tres regiones (rigidez, masa, coincidencia).

3. **STC: el número que miente** (10 min). Presentar el método ASTM E413: medir TL en 16 tercios de octava, comparar con curva de referencia, deslizar hasta que suma de desviaciones negativas ≤ 32 dB y ninguna > 8 dB. Mostrar la tabla de percepción: STC 25 (conversación inteligible), 35 (murmullo), 45 (gritos apenas audibles), 55 (batería como vibración lejana), 60 (prácticamente nada). Advertir: «Dos paredes con STC 35 pueden comportarse MUY DISTINTO en graves. Una pared de yeso doble con lana mineral (STC 35) atenúa 10-15 dB MÁS en 63-125 Hz que una pared de yeso simple con canal metálico (STC 35 también). El STC fue diseñado para voz humana (500 Hz – 2 kHz). Si tu problema es el bajo del vecino, necesitás mirar la TL en 63 y 125 Hz, no el STC.»

    > Insertar **Fig. 16-7** del Everest: curva de referencia STC con curva medida superpuesta y deslizamiento.

4. **NR: de la pared al recinto real** (10 min). Presentar la fórmula NR = TL + 10·log(A/S). Explicar con ejemplo: pared de TL = 35 dB, área S = 10 m². Si el recinto receptor tiene A = 5 m² (muy reverberante, sin tratamiento): NR = 35 + 10·log(5/10) = 35 + (−3) = 32 dB. Si el recinto receptor tiene A = 50 m² (con tratamiento acústico): NR = 35 + 10·log(50/10) = 35 + 7 = 42 dB. «Misma pared, misma TL, pero 10 dB MÁS de reducción de ruido en el recinto tratado. La absorción en el recinto receptor es un multiplicador GRATIS de tu aislamiento. No necesitás mejorar la pared — necesitás tratar el recinto receptor.»

    > Insertar **diagrama conceptual** de dos recintos con pared separadora, mostrando TL, A, S y la fórmula NR.

5. **Flanqueo: cuando el sonido se escapa** (5 min). Mostrar la tabla de caminos de flanqueo: paredes adyacentes, falso plafón, losa/piso, ductos de ventilación, cajas eléctricas, puertas/ventanas, juntas y grietas. Presentar la regla del eslabón más débil: «Una pared de STC 55 con una puerta de STC 25 que ocupa el 20% del área → STC compuesto ≈ 30. Gastar plata en mejorar la pared cuando tenés una puerta hueca es como comprar llantas de fibra de carbono para un auto sin motor.»

    > Insertar **Fig. 17-2** del Everest: sección constructiva con TODOS los caminos de flanqueo simultáneos.

---

## 3. Práctica — Calculá, compará, diagnosticá

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 28 — Transmisión de sonido y aislamiento

**Instrucciones:**

**Parte A — Cálculo de TL con la ley de masa (individual)**

1. Para cada uno de los siguientes materiales, calculá la TL a 125 Hz, 500 Hz y 2 kHz usando la ley de masa teórica (incidencia normal). Presentá los resultados en una tabla:

    | Material | m_s (kg/m²) | TL a 125 Hz (dB) | TL a 500 Hz (dB) | TL a 2 kHz (dB) |
    |---|---|---|---|---|
    | Vidrio 3 mm | 7.5 | | | |
    | Vidrio 6 mm | 15 | | | |
    | Yeso 12.5 mm (1 placa) | 9 | | | |
    | Yeso 25 mm (2 placas) | 18 | | | |
    | Bloque de hormigón 100 mm | 180 | | | |
    | Ladrillo hueco 120 mm | 150 | | | |
    | Puerta de madera maciza 45 mm | 25 | | | |
    | Puerta hueca (MDF 3 mm) | 5 | | | |

2. Verificá la regla del 6-6 en dos casos de la tabla: (a) compará Vidrio 3 mm vs. Vidrio 6 mm (doble de masa) y (b) compará Yeso 12.5 mm a 125 Hz vs. 500 Hz (doble de frecuencia). ¿Se cumple la regla en tus cálculos? Si hay diferencias, ¿a qué se deben? (Pista: errores de redondeo en los logaritmos.)

3. Estimá la TL de una PARED REAL que conozcas (la de tu casa, la del estudio, la del aula). Identificá el material constructivo, buscá o estimá su masa superficial (kg/m²), y calculá la TL a 125, 500 y 2 kHz. Si es una pared compuesta (ej. yeso + cámara de aire + ladrillo), calculá solo para la hoja simple más representativa. Compará tu resultado con la tabla de percepción STC de la clase: ¿qué esperarías escuchar del otro lado?

**Parte B — Evaluación STC y adecuación al uso (individual)**

1. Para la pared de tu espacio de la Parte A, estimá el STC aproximado. Sugerencia: usá la TL a 500 Hz como punto de partida (el STC suele estar cerca de la TL a 500 Hz para materiales homogéneos, pero puede diferir hasta ±5 dB). Compará tu STC estimado con esta tabla de adecuación:

    | Uso | STC mínimo recomendado |
    |---|---|
    | Pared entre dormitorios | 45 |
    | Pared entre estudio de grabación y sala de estar | 55 |
    | Pared entre sala de ensayo y aula | 60 |
    | Ventana a calle con tránsito moderado | 35 |
    | Ventana a calle con tránsito intenso | 40 |
    | Puerta de entrada a estudio | 35 |
    | Puerta entre estudio y sala de máquinas | 45 |

2. Imaginá que querés usar tu espacio para DOS escenarios distintos. Para cada escenario, calculá la NR necesaria y determiná si tu pared actual es suficiente:

    **Escenario A — Grabación de voces**: La fuente (voz) produce 75 dBA en el recinto fuente. El recinto receptor necesita ≤ 25 dBA de ruido de fondo. La pared tiene S = 12 m². El recinto receptor tiene una absorción total A = 8 m² (sin tratamiento). Calculá:
    - NR necesaria
    - TL necesaria de la pared (despejando de NR = TL + 10·log(A/S))
    - ¿Tu pared actual cumple?

    **Escenario B — Batería en ensayo**: La fuente (batería) produce 110 dBA. El recinto receptor es un aula que necesita ≤ 35 dBA. La pared tiene S = 15 m². El aula tiene A = 30 m² (con algo de tratamiento). Repetí los cálculos. ¿Tu pared actual cumple? ¿Qué pasa si la pared actual es de yeso simple (TL ≈ 30 dB a 500 Hz)?

3. Para el escenario que NO cumple (probablemente el B), proponé una MEJORA viable: ¿cambiás la pared? ¿Agregás una segunda hoja? ¿Mejorás la absorción en el recinto receptor? ¿Cuánto ganás con cada opción? Cuantificá la mejora en dB.

**Parte C — Cazador de flanqueo (individual o en parejas)**

1. Volvé al plano de tu espacio del diagnóstico de ruido (Sesión 27, Parte A). Ahora identificá TODOS los posibles caminos de flanqueo. Para cada uno, respondé:

    | Camino de flanqueo | ¿Existe en tu espacio? (Sí/No) | Si existe, ¿qué transmite? | ¿Cómo lo corregirías? | Costo relativo ($ / $$ / $$$) |
    |---|---|---|---|---|
    | Paredes adyacentes que transmiten vibración | | | | |
    | Falso plafón / plenum sobre el cielo raso | | | | |
    | Piso / losa continua | | | | |
    | Ductos de ventilación compartidos | | | | |
    | Cajas eléctricas / tomacorrientes en pared compartida | | | | |
    | Puertas | | | | |
    | Ventanas | | | | |
    | Juntas, grietas, penetraciones | | | | |

2. Jerarquizá los caminos de flanqueo de MAYOR a MENOR impacto estimado en el aislamiento compuesto de tu espacio. ¿Cuál es tu eslabón más débil?

3. Aplicá la regla del eslabón más débil: si tu pared es STC 50 pero identificaste una ventana de vidrio simple (STC 25) que ocupa el 15% de la superficie de la pared, calculá el STC compuesto aproximado. La fórmula simplificada para un elemento débil de área S_débil en una partición de área S_total:

    \[
    \tau_{\text{compuesto}} = \frac{S_{\text{pared}} \cdot \tau_{\text{pared}} + S_{\text{débil}} \cdot \tau_{\text{débil}}}{S_{\text{total}}}
    \]

    \[
    TL_{\text{compuesto}} = -10 \log_{10}(\tau_{\text{compuesto}})
    \]

    Calculá τ = 10^(−TL/10) para cada elemento, luego τ_compuesto, luego TL_compuesto. ¿Cuánto bajó el TL compuesto respecto al TL de la pared sola?

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Cálculo de TL (Parte A) | Tabla completa con 8 materiales, TL correcta en 3 frecuencias, verificación de regla 6-6 en 2 casos, estimación de pared real con masa superficial justificada | 1-2 errores de cálculo o pared real sin justificación de masa superficial | Fórmula mal aplicada, errores sistemáticos en logaritmos, o más de 3 valores incorrectos |
| Evaluación STC y escenarios (Parte B) | STC estimado correctamente, NR necesaria calculada para ambos escenarios, TL necesaria despejada algebraicamente, mejora propuesta cuantificada | Cálculos correctos pero mejora propuesta sin cuantificar o sin alternativas | Confunde NR con TL, no despeja TL de la fórmula, o mejora propuesta es cualitativa |
| Caza de flanqueo (Parte C) | Tabla completa con ≥ 6 caminos analizados, existe/no existe correcto, corrección con criterio técnico, costo relativo realista, jerarquización coherente, STC compuesto calculado con fórmula τ | Tabla con 4-5 caminos o correcciones poco específicas | Menos de 4 caminos identificados o sin criterio técnico en las correcciones |
| Aplicación de conceptos | Diferencia clara entre TL, STC y NR en los cálculos; usa τ para el compuesto; entiende que el eslabón más débil define el aislamiento | Usa los conceptos correctamente pero sin distinguir TL vs. NR | Confunde TL con NR o STC con TL en los cálculos |

---

## 4. Cierre — «El aislamiento es tan fuerte como su punto MÁS DÉBIL»

### Discusión guiada (10 min)

- «Levanten la mano los que descubrieron que su espacio necesita mejoras de aislamiento de 15 dB o más.» → La mayoría. «Ahora saben por qué el vecino escucha todo. Y saben que la solución NO es más espuma acústica — es MASA, HERMETICIDAD y DESACOPLAMIENTO.»

- «¿Cuál fue el eslabón más débil más frecuente?» → Ventanas y puertas. «Una ventana de vidrio simple en una pared de ladrillo macizo es una burla acústica: la pared atenúa 50 dB, la ventana atenúa 25 dB. El sonido NO elige el camino difícil — busca el camino FÁCIL. Y lo encuentra. Sellá primero los puntos débiles, después reforzá los fuertes.»

- «Dato importante sobre la ley de masa: funciona, pero es CARA. Cada 6 dB extra de aislamiento requieren DUPLICAR la masa superficial. Pasar de una pared de yeso simple (STC 30) a una aceptable para estudio (STC 50) requiere aumentar la masa en un factor de 10×. Eso significa pasar de 9 kg/m² a 90 kg/m² — equivalente a una pared de hormigón de 12 cm de espesor. Por eso los estudios serios usan paredes DOBLES desacopladas (masa-aire-masa): la TL del sistema doble es MUCHO mayor que la suma de las TL de cada hoja por separado. Eso lo van a ver en la Sesión 29 — pero la clave ya la saben: desacoplar es MÁS EFICIENTE que agregar masa.»

- «La pregunta final: ¿cuánto aislamiento necesitan REALMENTE? No es infinito. Aislamiento de estudio profesional (STC 55-65) cuesta entre $500 y $2000 por metro cuadrado de pared. Para un estudio casero, STC 45-50 es un objetivo realista y alcanzable con pared doble de yeso + lana mineral + sellado cuidadoso. La diferencia entre STC 55 y STC 65 es de 10 dB — cuesta el TRIPLE y solo la nota un ingeniero de mastering. Definan su objetivo según su PRESUPUESTO, su NIVEL DE RUIDO EXTERNO y su TOLERANCIA del vecino. No busquen Abbey Road en un dormitorio alquilado.»

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Cuando una onda sonora incide sobre una partición, una fracción de la energía se refleja, otra se absorbe dentro del material y otra se transmite al recinto adyacente. El coeficiente de transmisión τ es la fracción de energía transmitida y la pérdida por transmisión (Transmission Loss, TL) es TL = 10·log(1/τ) dB. La ley teórica de la masa para una partición simple con incidencia normal establece que TL = 20·log(m_s·f) − 47 dB. De esta ley se derivan dos consecuencias fundamentales: duplicar la masa superficial aumenta la TL en 6 dB, y duplicar la frecuencia también aumenta la TL en 6 dB (regla del 6-6). En la práctica, la ley de masa se desvía por tres efectos: la rigidez domina a muy bajas frecuencias (TL mayor que la predicha), el efecto de coincidencia produce una caída abrupta de TL cuando la velocidad de flexión iguala la velocidad del sonido en el aire, y en campo difuso el promedio sobre todos los ángulos de incidencia reduce la TL ~5 dB respecto a la incidencia normal. El STC (Sound Transmission Class, ASTM E413) es un número único que resume la TL en 16 tercios de octava; STC < 30 implica conversación inteligible a través de la pared, STC > 55 es necesario para aislamiento entre un estudio y un espacio habitable. Sin embargo, el STC enfatiza las frecuencias de la voz (500 Hz – 2 kHz) y puede subestimar deficiencias en graves. La reducción de ruido real entre recintos (NR) depende tanto de la TL de la partición como de la absorción en el recinto receptor: NR = TL + 10·log(A/S). El flanqueo — transmisión por caminos alternativos como paredes adyacentes, plenum sobre cielo raso, losas continuas, ductos y penetraciones — es el enemigo silencioso del aislamiento. El aislamiento compuesto de un cerramiento está determinado por su eslabón MÁS DÉBIL, no por el promedio: una pared de STC 55 con una puerta de STC 25 que ocupa el 20% del área puede tener un STC compuesto de apenas 30. La primera inversión en aislamiento debe atacar los puntos débiles, no reforzar lo que ya es fuerte."*

---

## Recursos adicionales para el docente

- [Engineering Toolbox — Sound Transmission Loss](https://www.engineeringtoolbox.com/sound-transmission-loss-d_74.html) — calculadora online de TL para varios materiales con la ley de masa. Útil para verificar los cálculos de la Parte A rápidamente.
- [STC Calculator by Acoustical Surfaces](https://www.acousticalsurfaces.com/stc-calculator/) — calculadora interactiva de STC compuesto para particiones con elementos de distinta TL. Ideal para la Parte C (eslabón más débil).
- [National Research Council Canada — Sound Transmission Loss Database](https://nrc-publications.canada.ca/eng/search/?q=sound+transmission+loss) — base de datos de mediciones de TL de laboratorio para cientos de materiales y configuraciones constructivas, con gráficos TL vs. frecuencia.
- [IR-761 — Gypsum Board Walls: Sound Transmission Loss Data](https://nrc-publications.canada.ca/eng/view/object/?id=66f1a8e6-6a8a-4fe6-91d0-489cd8a60c93) — informe de referencia con datos de TL medidos para más de 300 configuraciones de paredes de yeso. Estándar de la industria para especificar aislamiento en construcción liviana.
- [ISO 717-1:2020 — Rating of Airborne Sound Insulation](https://www.iso.org/standard/73165.html) — norma internacional que define el índice de aislamiento acústico ponderado (Rw) y los términos de adaptación espectral C y Ctr (equivalentes internacionales del STC).
- [Video: Understanding STC and IIC Ratings — National Gypsum](https://www.youtube.com/watch?v=YpP8ZI5HfO0) — explicación visual de cómo se mide y calcula el STC en laboratorio, con ejemplos de diferentes configuraciones de paredes de yeso.
- [Artículo: Flanking Sound Transmission in Buildings — Acoustical Society](https://asa.scitation.org/doi/abs/10.1121/1.2029899) — artículo técnico sobre los mecanismos de flanqueo y su cuantificación en edificaciones.

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «Calculé la TL y me da negativa a 125 Hz para la puerta hueca (m_s = 5 kg/m²). ¿Es posible?» | Sí, la ley de masa para materiales muy livianos a bajas frecuencias puede dar valores negativos o muy cercanos a cero. TL negativa NO significa amplificación — significa que la fórmula teórica no aplica en ese rango. En la práctica, una puerta hueca tiene TL ≈ 10-15 dB a 125 Hz por rigidez, no por masa. La ley de masa SOLO es válida en la región controlada por masa (frecuencias por encima de la primera resonancia y por debajo de la frecuencia crítica). Para materiales livianos (< 10 kg/m²), usá la TL medida en laboratorio, no la teórica. |
| «Hice el cálculo de NR = TL + 10·log(A/S) y me da más dB que la TL. Eso no puede ser, ¿no?» | Puede ser, y es correcto. Si A > S (el recinto receptor tiene MUCHA absorción), el término 10·log(A/S) es POSITIVO, y NR > TL. Esto es físicamente posible: la absorción en el receptor «traga» el sonido que logró pasar, evitando que se acumule por reverberación. Ejemplo: TL = 30 dB, S = 10 m², A = 40 m² → NR = 30 + 6 = 36 dB. La NR MÁXIMA posible en un recinto anecoico (A → ∞) está limitada solo por la TL, pero en recintos reales la absorción siempre ayuda. No es magia — es física. |
| «¿Por qué la TL calculada con la ley de masa es distinta a la TL medida en laboratorio que encuentro en internet?» | La ley de masa es una simplificación teórica. Las mediciones de laboratorio incluyen: (a) incidencia en campo difuso (promedio sobre todos los ángulos) → 5 dB menos que incidencia normal, (b) resonancias y efecto de coincidencia → caídas de TL en frecuencias específicas, (c) condiciones de borde reales (la pared no es infinita — está montada en un marco). Además, la ley de masa usa m_s nominal; en la realidad, la rigidez a la flexión del material también influye. Regla práctica: la TL medida es 3-8 dB MENOR que la ley de masa teórica para frecuencias medias. Para cálculos de diseño, usá la ley de masa como estimación inicial y luego verificá con datos de laboratorio. |
| «Calculé el STC compuesto con la fórmula de τ y me da un número más bajo que el STC del elemento más débil. ¿Está bien?» | Sí, y es la lección más importante. Si tu pared tiene STC = 55 (τ = 10^(−55/10) = 3.16×10⁻⁶) y tu puerta STC = 25 (τ = 10^(−25/10) = 3.16×10⁻³), la puerta transmite 1000 VECES más energía por unidad de área que la pared. Aunque la puerta ocupe solo el 10% del área total, domina el τ compuesto. Ejemplo: S_pared = 9 m², S_puerta = 1 m², S_total = 10 m². τ_compuesto = (9×3.16×10⁻⁶ + 1×3.16×10⁻³)/10 = (2.84×10⁻⁵ + 3.16×10⁻³)/10 = 3.19×10⁻⁴. TL_compuesto = −10·log(3.19×10⁻⁴) = 35.0 dB. La pared por sí sola era STC 55. La puerta por sí sola era STC 25. El compuesto es STC 35 — MÁS CERCA de la puerta que de la pared. Esto NO es un error de cálculo: es la realidad física de que la energía busca el camino de menor resistencia. |
| «Mi espacio es alquilado. No puedo construir paredes dobles. ¿Hay algo que pueda hacer para mejorar el aislamiento sin obra?» | Limitado, pero no nulo. Opciones sin obra estructural: (a) Sellar TODAS las juntas, grietas y penetraciones con sellador acústico flexible (esto solo puede sumar 3-10 dB según cuántas fugas tengas — es lo MÁS rentable por dB ganado). (b) Burletes acústicos en puertas + sello inferior automático (retráctil) — puede sumar 5-10 dB si la puerta actual cierra mal. (c) Cortinas acústicas pesadas (mass-loaded vinyl + tela decorativa) sobre ventanas — 5-10 dB adicionales, especialmente en agudos. (d) Páneles absorbentes gruesos (10-15 cm) en el recinto receptor — no mejoran la TL de la pared, pero aumentan A y por tanto la NR. (e) Alfombras gruesas + underlay de goma en el piso — reduce ruido de impacto y algo de aéreo. Nada de esto reemplaza una pared doble, pero la combinación de sellado + burletes + cortinas pesadas puede sumar 10-15 dB efectivos de NR, lo cual puede ser la diferencia entre «el vecino escucha todo» y «el vecino escucha un murmullo lejano que no molesta». |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
