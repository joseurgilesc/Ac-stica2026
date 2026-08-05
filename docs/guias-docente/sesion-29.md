# Guía Docente — Sesión 29: Estructuras compuestas y cerramientos acústicos

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, calculadora, catálogo de materiales de construcción (online), imágenes de cortes constructivos (paredes simples, dobles, puertas acústicas, ventanas), planos de sección arquitectónica  
**Referencia:** Everest & Pohlmann, Capítulo 17, pp. 251–275 (Double-Leaf Partitions, Mass-Air-Mass Resonance, Floating Floors, Acoustic Doors and Windows, Structural Bridges, Flanking Transmission, Sound Transmission Class); Capítulo 16, pp. 231–250 (Composite Transmission Loss); ASTM E90 (Laboratory Measurement of Airborne Sound Transmission Loss); ASTM E413 (STC Determination)

---

## Objetivo de la sesión

Que el estudiante calcule la frecuencia de resonancia masa-aire-masa de una partición doble y determine el rango de frecuencias donde el desacoplamiento ofrece una ventaja real sobre una partición simple de igual masa total, analice cortes constructivos de cerramientos compuestos (paredes dobles, pisos flotantes, puertas y ventanas acústicas) identificando capas funcionales, desacoplamientos y puntos débiles, detecte y proponga soluciones para puentes acústicos y transmisión lateral en un caso real, y diseñe conceptualmente una propuesta constructiva para un cerramiento acústico evaluando el balance entre eficacia, costo y complejidad.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | «Una pared simple de 1 metro de concreto vs. dos paredes de yeso con 10 cm de aire — ¿cuál gana?» |
| **Desarrollo** | 50 min | Teoría guiada: sistema masa-aire-masa, paredes dobles, pisos flotantes, puertas y ventanas acústicas, puentes acústicos, transmisión lateral |
| **Práctica** | 40 min | Análisis de cortes constructivos, detección de puntos débiles, diseño de propuesta constructiva para un caso real |
| **Cierre** | 15 min | «El aislamiento no es un material — es un SISTEMA» + bitácora |

---

## 1. Apertura — «Una pared de 1 m de concreto vs. dos paredes de yeso con aire»

### Dinámica

1. Mostrar dos imágenes lado a lado: (a) un búnker militar con paredes de 1 metro de concreto armado, y (b) la sección de una pared doble de yeso estándar (dos hojas de 12.5 mm separadas por 90 mm de cámara de aire con lana mineral). Preguntar: «¿Cuál aísla mejor, kilo por kilo?» → Dar datos:
   - Pared de concreto: m_s ≈ 2400 kg/m², TL a 500 Hz ≈ 75 dB, pero PESA 2.4 toneladas por m².
   - Pared doble de yeso con aislante: m_s ≈ 20 kg/m² (total ambas hojas), TL a 500 Hz ≈ 55 dB, pero PESA solo 20 kg por m².
   - «La pared de concreto aísla 20 dB más, pero pesa 120 VECES más. La relación aislamiento/peso de la pared doble es MUY superior. ¿Por qué? Porque el desacoplamiento (la cámara de aire) rompe el camino de transmisión mecánica. El sonido tiene que 'saltar' de una hoja a la otra a través del aire — y esa discontinuidad es más efectiva que simplemente agregar masa.»

2. Demostración conceptual: tomar dos libros gruesos. Golpear uno contra el otro (contacto directo → la vibración pasa instantáneamente). Ahora separarlos 2 cm y golpear solo uno — el otro apenas vibra. «Eso es el principio masa-aire-masa. Las dos hojas están MECÁNICAMENTE DESACOPLADAS por la cámara de aire. La primera hoja vibra con el sonido incidente, pero esa vibración tiene que atravesar el AIRE para llegar a la segunda hoja — y el aire es un pésimo transmisor de vibración mecánica.»

3. Mostrar una radiografía de pared con un ERROR DE OBRA CLÁSICO: un clavo que une las dos hojas de una pared doble. «Esto es un PUENTE ACÚSTICO. Ese clavo — 3 mm de acero — convierte tu pared doble de STC 55 en una pared simple de STC 40. Un solo clavo. El aislamiento no es un MATERIAL — es un SISTEMA. Y el sistema es tan fuerte como su punto más débil. Hoy van a aprender a diseñar sistemas, no a elegir materiales.»

### Preguntas disparadoras

- «En la Sesión 28 aprendiste que duplicar la masa de una pared simple suma 6 dB. Pero, ¿qué pasa si en vez de poner el doble de yeso EN LA MISMA HOJA, lo ponés en una SEGUNDA HOJA separada por aire?» → Ganás mucho más que 6 dB. Por encima de la frecuencia de resonancia del sistema, la TL crece a 12 dB por octava (en vez de 6 dB). Es el «bonus» del desacoplamiento.
- «¿Qué es más importante en una pared doble: la masa de las hojas o la distancia entre ellas?» → Ambas. La frecuencia de resonancia masa-aire-masa baja cuando aumentás la masa O la distancia. Querés que la resonancia quede POR DEBAJO del rango de frecuencias que querés aislar (< 80 Hz idealmente). Si la cámara es muy chica (2-3 cm), la resonancia sube a 200-300 Hz y la pared doble no aísla mejor que una simple en ese rango — PEOR todavía, puede aislar MENOS en la resonancia.

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Sistema masa-aire-masa: la física de la pared doble** (15 min). Dibujar el modelo: dos masas m₁ y m₂ conectadas por un resorte (el aire en la cavidad). Deducir conceptualmente la frecuencia de resonancia:

    \[
    f_0 = \frac{c}{2\pi} \sqrt{\frac{\rho}{d} \left(\frac{1}{m_1} + \frac{1}{m_2}\right)}
    \]

    Donde d es la distancia entre hojas (m), m₁ y m₂ son las masas superficiales (kg/m²), ρ es la densidad del aire (~1.21 kg/m³) y c es la velocidad del sonido (~343 m/s). Si las dos hojas son iguales (m₁ = m₂ = m): f₀ = (c/2π)·√(2ρ/(m·d)).

    Ejemplo numérico en pizarra: dos hojas de yeso de 12.5 mm (m = 9 kg/m² cada una), d = 90 mm (0.09 m):
    f₀ = (343/2π)·√(2×1.21/(9×0.09)) = 54.6·√(2.42/0.81) = 54.6·√2.99 = 54.6×1.73 = 94.5 Hz.

    «Esto significa que POR DEBAJO de 94 Hz, la pared doble aísla IGUAL que una pared simple de masa total 18 kg/m². POR ENCIMA de 94 Hz, la TL crece a 12 dB/octava — el DOBLE de rápido que la ley de masa simple. Y en la resonancia (alrededor de 94 Hz), la TL CAE drásticamente — puede ser MENOR que la de una pared simple. Este es el precio del desacoplamiento: ganás en casi todo el espectro, pero perdés en una banda estrecha alrededor de f₀.»

    Preguntar: «¿Cómo bajamos f₀ para que la resonancia no caiga en el rango audible de graves musicales (40-100 Hz)?» → Aumentar m (hojas más pesadas) o aumentar d (más separación). Si d = 150 mm (0.15 m) en vez de 90 mm: f₀ = (343/2π)·√(2.42/(9×0.15)) = 54.6·√1.79 = 54.6×1.34 = 73 Hz. Si además usamos yeso de 15 mm (m = 12 kg/m²): f₀ = 54.6·√(2.42/(12×0.15)) = 54.6·√1.34 = 54.6×1.16 = 63 Hz.

    > Insertar **diagrama conceptual**: modelo masa-aire-masa con dos masas y resorte, mostrando la entrada (presión sonora incidente), la transmisión a través del resorte, y la salida (presión re-irradiada). Superponer la curva TL vs. frecuencia de una pared simple y una doble de igual masa TOTAL, mostrando la caída en f₀ y la ventaja por encima de f₀.

2. **Paredes dobles, pisos flotantes y la anatomía de un cerramiento acústico** (10 min). Proyectar un corte constructivo de una pared doble profesional (estudio de grabación):
   - Hoja exterior: yeso 2×15 mm (m_s = 24 kg/m²)
   - Estructura independiente con montantes metálicos (studs) con canal elástico (resilient channel)
   - Cavidad: 150 mm con lana mineral de 50 kg/m³ (80-100 mm espesor)
   - Hoja interior: yeso 2×15 mm (m_s = 24 kg/m²)
   - Sellador acústico en TODO el perímetro (uniones con piso, techo y paredes adyacentes)
   - Cinta acústica (backer rod + sellador) en juntas

   Señalar cada capa y su función:
   - **Hojas de yeso**: masa superficial (impedancia mecánica)
   - **Montantes independientes**: desacoplamiento estructural — las dos hojas NO comparten estructura
   - **Canal elástico (resilient channel)**: desacoplamiento adicional en instalaciones donde no es posible estructura independiente
   - **Lana mineral en cavidad**: absorción DENTRO de la cavidad (reduce ondas estacionarias entre hojas) + amortiguamiento (reduce la transmisión en f₀)
   - **Sellador perimetral**: elimina flanqueo aéreo por el perímetro
   - **Doble placa de yeso por hoja**: masa adicional + las juntas entre placas se solapan (staggered) para eliminar fugas

   Repetir para un piso flotante: losa estructural → capa elástica (lana de roca de alta densidad, neopreno, resortes helicoidales) → losa flotante de concreto → piso de acabado. «El principio es el MISMO: masa + desacoplamiento + absorción en la cavidad. Cambian los materiales, no la física.»

3. **Puertas y ventanas acústicas: los puntos críticos** (10 min). Mostrar que las puertas y ventanas son INVARIABLEMENTE los eslabones más débiles. Para una puerta acústica de estudio:
   - Masa: núcleo macizo (MDF 45 mm o madera + plancha de acero), m_s ≥ 25 kg/m²
   - Sello perimetral: burlete magnético (como heladera) o doble burlete de neopreno en todo el perímetro
   - Sello inferior: barrido automático retráctil (automatic drop seal) que baja al cerrar
   - Marco: macizo, anclado a la estructura de la pared, NO a la hoja de yeso
   - Umbral: metálico o de madera dura, con sello
   - Doble puerta con cámara de aire (vestíbulo acústico) para máximo aislamiento (STC > 55)

   Para ventana acústica:
   - Doble vidrio con cámara de aire (al menos 100-150 mm entre vidrios para bajar f₀)
   - Vidrios de DISTINTO espesor (ej. 6 mm exterior + 10 mm interior) para que no coincidan sus frecuencias críticas
   - Vidrio laminado (PVB interlayer) para amortiguamiento adicional
   - Marco con rotura de puente térmico-acústico (perfiles separados para cada vidrio)
   - Sello perimetral con burlete continuo

4. **Puentes acústicos y transmisión lateral: los asesinos silenciosos** (10 min). Definir puente acústico: cualquier conexión MECÁNICA RÍGIDA entre las dos hojas de una partición doble o entre una partición y la estructura del edificio. Ejemplos:
   - Un clavo o tornillo que atraviesa ambas hojas
   - Un tomacorriente montado en ambas hojas con la misma caja
   - Un caño que atraviesa la cavidad tocando ambas hojas
   - Montantes compartidos entre las dos hojas (el error #1 en construcción económica)
   - La hoja de yeso atornillada DIRECTAMENTE a los montantes (sin canal elástico) — el montante es el puente

   Mostrar el impacto: un solo puente acústico puede reducir el STC de una pared doble de 55 a 42. «Es como tener un agujero de 5 cm de diámetro en una pared de concreto. La energía NO necesita mucha área para pasar — necesita UNA conexión rígida. Y la encuentra.»

   Transmisión lateral (flanking): el sonido viaja por caminos que NO cruzan directamente la partición separadora:
   - Pared A fuente → losa de piso → pared B receptora (vía estructural continua)
   - Cielo raso suspendido → plenum → cielo raso del recinto adyacente
   - Ducto de ventilación compartido

   > Insertar **diagrama de sección** mostrando TODOS los caminos de transmisión: directa (pared separadora), flanqueo por losa, flanqueo por paredes laterales, flanqueo por cielo raso, y puentes acústicos. Señalar: «La TL compuesta es menor que la TL de cualquiera de estos caminos no tratados.»

5. **Clases de transmisión de ruido: STC, IIC, OITC** (5 min). Breve mención para completar el panorama: STC (ruido aéreo), IIC (Impact Insulation Class — ruido de impacto, ej. pasos sobre losa), OITC (Outdoor-Indoor Transmission Class — ruido de tránsito y aviones, enfatiza bajas frecuencias). «Cada tipo de ruido tiene su métrica. No usen STC para evaluar aislamiento de pisos contra pasos — para eso está el IIC.»

---

## 3. Práctica — Analizá, diagnosticá y diseñá

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 29 — Estructuras compuestas y diseño de cerramientos

**Instrucciones:**

**Parte A — Análisis de cortes constructivos (individual)**

1. Se te presentan tres cortes constructivos de paredes (descritos a continuación). Para cada uno, identificá:
   - Número de hojas
   - Masa superficial de cada hoja
   - Ancho de la cámara de aire
   - Presencia/ausencia de material absorbente en la cavidad
   - Tipo de desacoplamiento (estructura independiente, canal elástico, o montantes compartidos)
   - Puentes acústicos visibles
   - STC estimado (bajo: 30-40, medio: 40-50, alto: 50-60, muy alto: > 60)

   **Corte A — Pared estándar residencial**: Yeso 12.5 mm → montantes metálicos compartidos a 400 mm → cámara 90 mm con lana de vidrio 50 mm → yeso 12.5 mm.

   **Corte B — Pared mejorada**: Yeso 2×12.5 mm → canal elástico (resilient channel) → montantes metálicos → cámara 150 mm con lana mineral 80 mm (50 kg/m³) → yeso 2×12.5 mm.

   **Corte C — Pared de estudio profesional**: Yeso 2×15 mm → estructura independiente (studs separados, sin contacto entre sí) → cámara 200 mm con doble capa de lana mineral 100 mm (50 kg/m³ cada una, total 200 mm) → yeso 2×15 mm. Sellador acústico en TODO el perímetro.

2. Para el Corte A, calculá la frecuencia de resonancia masa-aire-masa f₀. ¿En qué rango musical cae? ¿Qué instrumentos o notas se verían afectados?

3. Para el Corte C, calculá f₀. Compará con el Corte A. ¿Cuánto más baja es la resonancia en el diseño profesional? ¿Por qué esto es crítico para un estudio de grabación?

4. ¿Por qué el Corte B usa 2 placas de yeso por hoja en vez de una placa más gruesa? (Pista: pensá en la frecuencia crítica de coincidencia f_c para yeso de 12.5 mm vs. 25 mm.)

**Parte B — Detección de puntos débiles (individual o en parejas)**

1. Se describe el siguiente escenario REAL de un estudio casero con problemas de aislamiento. Leé atentamente y diagnosticá:

   > *«Mi estudio está en una habitación de 3×4 m. Mandé a construir una pared doble de yeso en el lado que da al living del vecino. La pared tiene dos hojas de yeso de 12.5 mm con montantes metálicos cada 400 mm y 90 mm de cámara de aire con lana de vidrio. Pero el vecino sigue escuchando la música, especialmente el bajo. Contraté a un acústico que midió y descubrió que: (1) los montantes SON LOS MISMOS para ambas hojas — las dos hojas están atornilladas a los mismos montantes, (2) hay 4 tomacorrientes en la pared, 2 de cada lado, y comparten las mismas cajas (atraviesan la cavidad), (3) la pared no llega hasta la losa del techo — se detiene a 5 cm, donde empieza el cielo raso de yeso suspendido, (4) el piso es de madera flotante sobre la losa original de hormigón, pero las dos habitaciones comparten la misma losa SIN junta de dilatación ni corte. El acústico midió STC 32 en la pared, cuando la constructora había prometido STC 50+.»*

   Para cada problema numerado (1-4), identificá:
   - Tipo de falla (puente acústico, flanqueo, fuga aérea, transmisión estructural)
   - Mecanismo físico por el cual transmite sonido
   - Solución correcta (técnicamente específica, no genérica)

2. Jerarquizá los 4 problemas de MAYOR a MENOR impacto en el STC compuesto. Justificá tu orden.

3. Para el problema #1 (montantes compartidos), estimá cuánto mejoraría el STC si se corrigiera SOLO ese problema (los otros 3 permanecen). ¿Vale la pena corregir el más grave solamente, o es necesario corregir TODOS para alcanzar STC 50+? Justificá con el concepto de eslabón más débil.

**Parte C — Diseño conceptual de un cerramiento (individual)**

1. **Caso aplicado**: Una escuela de música quiere construir una sala de ensayo para batería y bajo eléctrico (nivel máximo 115 dBA) colindante con un aula donde se dictan clases de teoría musical (nivel máximo aceptable: 30 dBA). La sala de ensayo mide 5×6 m y el aula 5×8 m. Comparten una pared de 5 m de largo. La construcción es nueva (no hay que adaptar nada existente). El presupuesto es medio (ni mínimo, ni ilimitado).

2. Diseñá conceptualmente LA PARED SEPARADORA. Tu propuesta debe incluir:
   - Número de hojas y material de cada una (especificá tipo y espesor)
   - Ancho de la cámara de aire
   - Material absorbente en la cavidad (tipo, espesor, densidad)
   - Tipo de desacoplamiento (estructura independiente, canal elástico, o el más adecuado)
   - Tratamiento del perímetro (uniones con piso, techo y paredes laterales)
   - STC estimado de tu diseño

3. Calculá la frecuencia de resonancia f₀ de tu diseño. ¿Dónde cae? ¿Es aceptable para los instrumentos que se van a tocar (batería: fundamental del bombo ≈ 50-60 Hz; bajo eléctrico: fundamental de la cuerda más grave ≈ 41 Hz)?

4. Proponé DOS alternativas a tu diseño principal, variando UN parámetro cada vez (ej. más masa pero menos cámara, o más cámara pero menos masa), y compará las tres opciones en esta tabla:

    | Propuesta | f₀ (Hz) | STC est. | Espesor total (cm) | Complejidad (Alta/Media/Baja) | Costo relativo ($/$$/$$$) |
    |---|---|---|---|---|---|
    | Principal | | | | | |
    | Alternativa A (más masa, misma cámara) | | | | | |
    | Alternativa B (misma masa, más cámara) | | | | | |

5. ¿Cuál de las tres propuestas recomendarías a la escuela de música? Justificá considerando: eficacia acústica (NR alcanzable), restricciones de espacio (la pared le «roba» superficie a ambos recintos), costo, y complejidad constructiva (riesgo de errores de obra que arruinen el diseño).

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Análisis de cortes (Parte A) | Tres cortes analizados correctamente: hojas, masas, cámara, absorbente, desacoplamiento y puentes identificados; f₀ calculada para Cortes A y C con comparación; justificación de doble placa por frecuencia crítica | Análisis correcto pero f₀ mal calculada o sin comparación | Confunde montantes compartidos con independientes o errores graves en f₀ |
| Diagnóstico de fallas (Parte B) | Cuatro problemas correctamente diagnosticados (tipo + mecanismo + solución), jerarquización justificada, análisis de impacto de corregir solo el más grave | Diagnósticos correctos pero soluciones genéricas («arreglar la pared») o jerarquización sin justificación | No identifica puentes acústicos o confunde flanqueo con fuga aérea |
| Diseño conceptual (Parte C) | Pared diseñada con parámetros específicos, f₀ calculada y evaluada contra instrumentos, 3 propuestas comparadas con tabla completa, recomendación justificada con múltiples criterios | Diseño correcto pero genérico (sin espesores), o f₀ no calculada, o comparación incompleta | Diseño sin desacoplamiento (pared simple para batería), f₀ > 100 Hz sin justificación |
| Visión sistémica | Trata la pared como SISTEMA (hojas + cavidad + absorbente + desacoplamiento + perímetro), identifica interacciones entre subsistemas, reconoce que el eslabón más débil define el resultado | Considera algunos elementos del sistema pero omite el perímetro o el desacoplamiento | Diseña «materiales» sin considerar cómo se integran en un sistema |

---

## 4. Cierre — «El aislamiento no es un material — es un SISTEMA»

### Discusión guiada (10 min)

- «¿Cuál fue la falla más frecuente que encontraron en el diagnóstico de la Parte B?» → Montantes compartidos y pared que no llega a la losa. «Esos son los DOS ERRORES más comunes en construcción de estudios caseros. Y son errores de DISEÑO, no de materiales. Podés comprar el yeso más caro del mercado — si lo atornillás a los mismos montantes que la otra hoja, tiraste la plata.»

- «La lección más importante de esta sesión: una pared doble NO es 'el doble de una simple'. Es un sistema DISTINTO con física DISTINTA. Por debajo de f₀, aísla IGUAL que una simple. En f₀, aísla PEOR. Por encima de f₀, aísla MUCHO mejor. Si no calculás f₀, no sabés si tu pared doble está funcionando en el rango que necesitás o si está PERJUDICANDO justo donde tenías el problema (los graves).»

- «Dato importante sobre el material absorbente en la cavidad: no está ahí para 'absorber el sonido que pasa' — está ahí para (a) amortiguar la resonancia masa-aire-masa (reduce la caída de TL en f₀ en 5-10 dB), y (b) absorber las ondas estacionarias que se forman DENTRO de la cavidad entre las dos hojas (como los modos de una sala, pero en miniatura). Sin lana mineral, la cavidad de 150 mm tiene modos axiales a f = c/(2d) = 343/(2×0.15) ≈ 1143 Hz, 2286 Hz, etc. Esos modos producen caídas de TL en esas frecuencias. La lana los elimina. La absorción en la cavidad NO es opcional en un diseño profesional.»

- «¿Cuánto espacio están dispuestos a sacrificar? Una pared de estudio profesional (Corte C de la Parte A) ocupa 25-30 cm de espesor. En una sala de 3×4 m con paredes dobles en TODO el perímetro, perdés aproximadamente 1.5 m² de superficie — casi un 13% del área total. Y con piso flotante + cielo raso desacoplado, también perdés altura. El aislamiento OCUPA ESPACIO. No hay pared doble de 5 cm que aísle 60 dB. La física no se negocia. Si tu sala es chica y necesitás mucho aislamiento, algo va a ceder — o el espacio, o el aislamiento, o el presupuesto. Elegí DOS. Los tres juntos no existen.»

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Cuando una partición simple no proporciona suficiente aislamiento, se recurre a estructuras compuestas, típicamente sistemas masa-aire-masa (MAM). Una pared doble consiste en dos hojas masivas separadas por una cámara de aire, idealmente con material absorbente en su interior. El sistema tiene una frecuencia de resonancia f₀ = (c/2π)·√(ρ/d · (1/m₁ + 1/m₂)) determinada por las masas superficiales de las hojas y la distancia entre ellas. Por debajo de f₀, la pared doble se comporta como una simple de masa total equivalente. En f₀, la TL cae drásticamente — puede ser menor que la de una pared simple. Por encima de f₀, la TL crece a aproximadamente 12 dB/octava (el doble de la pendiente de la ley de masa simple). Para maximizar el aislamiento en el rango audible, f₀ debe ubicarse por debajo de la frecuencia más baja de interés (idealmente < 80 Hz para estudios musicales), lo cual se logra aumentando la masa de las hojas, la separación entre ellas, o ambas. El desacoplamiento mecánico entre las hojas es ESENCIAL: cualquier conexión rígida (puente acústico) — un montante compartido, un clavo, un tomacorriente que atraviesa la cavidad — crea un camino de transmisión sólido que anula la ventaja del sistema doble. Las puertas y ventanas son los eslabones más débiles de cualquier cerramiento y requieren diseños específicos: puertas con núcleo macizo, burletes magnéticos y sellos inferiores automáticos; ventanas con doble vidrio de DISTINTO espesor (para desacoplar sus frecuencias críticas) y cámara de aire de al menos 100-150 mm. La transmisión lateral (flanking) ocurre cuando el sonido viaja por caminos estructurales que evitan la partición separadora: losa continua, cielo raso suspendido, paredes adyacentes, ductos. Un cerramiento acústico no es un material — es un SISTEMA integrado de masa, desacoplamiento, absorción en cavidad y sellado perimetral. Su desempeño está determinado por el eslabón más débil, y las fallas de diseño (puentes acústicos, ausencia de sellado, montantes compartidos) pueden reducir el STC en 10-20 dB respecto al valor teórico. La métrica adecuada depende del tipo de ruido: STC para ruido aéreo, IIC para ruido de impacto (pisadas), OITC para ruido exterior (tránsito)."*

---

## Recursos adicionales para el docente

- [IR-761 — Gypsum Board Walls: Sound Transmission Loss Data (NRC Canada)](https://nrc-publications.canada.ca/eng/view/object/?id=66f1a8e6-6a8a-4fe6-91d0-489cd8a60c93) — 300+ configuraciones de paredes de yeso con TL medida en laboratorio. Referencia indispensable para la Parte A y C. Incluye gráficos de TL vs. frecuencia para paredes simples, dobles, con y sin canal elástico, con distintos tipos de aislante en cavidad.
- [Kinetics Noise — Acoustic Design Guides](https://www.kineticsnoise.com/) — guías de diseño de cerramientos acústicos, pisos flotantes, y sistemas de desacoplamiento. Incluye detalles de canales elásticos (resilient channels), soportes de neopreno, y sistemas de aislamiento de vibración.
- [Mason Industries — Architectural Acoustics](https://www.mason-uk.com/) — catálogo de productos para desacoplamiento acústico (resortes, neoprenos, pads elásticos, colgadores antivibratorios) con curvas de TL para cada sistema.
- [STC Calculator for Composite Walls (Acoustical Surfaces)](https://www.acousticalsurfaces.com/stc-calculator/) — calculadora interactiva que permite combinar distintos elementos (paredes, puertas, ventanas) y calcular el STC compuesto. Ideal para verificar la regla del eslabón más débil de la Parte B.
- [ISO 10140 — Acoustics: Laboratory Measurement of Sound Insulation of Building Elements](https://www.iso.org/standard/43265.html) — serie de normas que definen cómo se mide la TL en laboratorio. La Parte 2 cubre ruido aéreo; la Parte 3 cubre ruido de impacto.
- [Video: How a Recording Studio Wall is Built — John H. Brandt](https://www.youtube.com/watch?v=9rvc_ZBQ6KY) — documental paso a paso de la construcción de una pared doble para un estudio profesional, mostrando estructura independiente, sellador perimetral, cajas eléctricas aisladas, y pruebas de STC antes y después.
- [Artículo: Common Mistakes in Studio Soundproofing — Sound on Sound](https://www.soundonsound.com/techniques/practical-studio-soundproofing) — recopilación de los errores más comunes en insonorización de estudios con fotos reales de obras mal ejecutadas. Excelente para la Parte B.

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «Calculé f₀ y me da 150 Hz. ¿Es aceptable o hay que bajarla?» | Para un estudio de música (donde se tocan y graban instrumentos con contenido espectral por debajo de 150 Hz), f₀ = 150 Hz es DEMASIADO ALTA. La TL en la resonancia cae 10-15 dB — justo en el rango del bombo, bajo eléctrico y fundamentales de sintetizadores. Además, por debajo de 150 Hz no hay ventaja de la pared doble. Para bajarla a < 80 Hz tenés tres opciones: (a) aumentar la masa de las hojas (usá yeso de 15 mm en vez de 12.5 mm, o doble placa), (b) aumentar la separación d (de 90 a 150-200 mm), (c) ambas. Con m = 18 kg/m² (doble placa de 12.5 mm por hoja) y d = 200 mm: f₀ = 54.6·√(2.42/(18×0.2)) = 54.6·√0.672 = 44.7 Hz. ¡Mucho mejor! La resonancia ahora cae por debajo del rango audible de casi todos los instrumentos. |
| «¿Por qué las dos hojas del Corte C tienen yeso de 15 mm y no de 12.5 mm? Es solo 2.5 mm de diferencia.» | Dos razones: (a) Masa superficial: yeso 15 mm tiene m_s ≈ 12 kg/m² vs. 9 kg/m² para 12.5 mm → 33% más masa → f₀ más baja y mayor TL en todo el espectro. (b) Frecuencia crítica de coincidencia f_c: para yeso de 12.5 mm, f_c ≈ 2.5-3.5 kHz (justo en el rango de máxima sensibilidad del oído). Para yeso de 15 mm, f_c baja a ≈ 2-2.5 kHz. Usar dos placas de distinto espesor (ej. 12.5 mm + 15 mm en cada hoja) «desacopla» las frecuencias críticas de cada placa — el valle de coincidencia de una ocurre a una frecuencia distinta que el de la otra. Resultado: la caída de TL combinada es menos profunda. Este mismo principio se usa en vidrios de distinto espesor en ventanas acústicas. |
| «En mi diseño puse canal elástico (resilient channel). ¿Eso basta o necesito estructura independiente?» | El canal elástico es un desacoplamiento PARCIAL. Mejora el STC en 5-10 dB respecto a atornillar directo a montantes compartidos, pero NO alcanza el rendimiento de una estructura verdaderamente independiente (studs separados). El canal elástico es una solución de compromiso para rehabilitación (donde no podés construir otra estructura). Para obra nueva, SIEMPRE preferí estructura independiente. El costo adicional es marginal comparado con la ganancia de aislamiento (8-15 dB extra vs. canal elástico). La trampa: la instalación del canal elástico es MUY sensible a errores. Un solo tornillo que atraviese el canal y toque el montante de atrás → puente acústico → el canal no sirvió de nada. En obra real, pasa MUCHO. |
| «Diseñé la pared perfecta pero el presupuesto no alcanza. ¿Qué puedo sacrificar con el menor impacto?» | Sacrificá en este orden (de menor a mayor impacto): (1) Espesor de la lana mineral en cavidad — con 50 mm en vez de 100 mm perdés 2-3 dB de amortiguamiento en f₀ pero mantenés la ventaja del desacoplamiento. (2) Una placa de yeso en vez de dos en cada hoja — perdés masa → f₀ sube y TL baja. (3) Ancho de cámara — pasar de 200 a 100 mm sube f₀. (4) Estructura independiente — NUNCA sacrifiques el desacoplamiento. Pared doble con montantes compartidos NO es pared doble — es una pared simple más gruesa con una cavidad que puede resonar. Lo que NUNCA debés sacrificar: el sellador perimetral. Cuesta $10 en materiales y puede sumar 5-10 dB. Es la mejor relación costo/beneficio en aislamiento acústico. |
| «¿Cómo verifico que la pared que construí realmente tiene el STC que diseñé?» | La verificación REAL requiere medición en laboratorio (ASTM E90) o in situ (ASTM E336). Pero podés hacer una verificación aproximada con herramientas accesibles: (a) Poné un parlante reproduciendo ruido rosa a 90 dBA en el recinto fuente. Medí con sonómetro en el recinto receptor en bandas de octava. La diferencia es tu NR medida. (b) Estimá A (absorción total) del recinto receptor midiendo RT60 aproximado con un globo (reventalo y medí el decaimiento con REW o app con espectrograma). Con A y S conocidos, despejá TL = NR − 10·log(A/S). (c) Compará tu TL estimada por banda con las curvas de referencia STC para obtener un STC aproximado. Si tu STC medido está a más de 5 puntos del diseño, hay un problema: puente acústico, fuga no detectada, o error de instalación. Buscalo con un estetoscopio de contacto (o el oído pegado a la pared) — recorré TODA la superficie escuchando dónde el sonido «se cuela». Donde suena más fuerte, hay una fuga. |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
