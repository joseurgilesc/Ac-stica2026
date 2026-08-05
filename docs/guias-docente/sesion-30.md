# Guía Docente — Sesión 30: Privacidad acústica y control de vibraciones

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, sonómetro (app), analizador de espectro (REW o app con RTA), cinta métrica, video de demostración de vibro-aislamiento, catálogo de aisladores (Mason, Kinetics Noise)  
**Referencia:** Everest & Pohlmann, Capítulo 17, pp. 251–275 (HVAC Noise Sources, Duct Silencers, Airflow Velocity Criteria, Vibration Isolation, Source-Path-Receiver Model, Equipment Isolation). IEC 60268-16 (Speech Transmission Index — STI, STIPA). ANSI S3.5-1997 (Speech Intelligibility Index). ASHRAE 2019 Handbook — HVAC Applications, Chapter 48 (Noise and Vibration Control).

---

## Objetivo de la sesión

Que el estudiante evalúe la privacidad acústica entre dos recintos interpretando la relación entre STC de la partición, nivel de voz y ruido de fondo mediante los índices STI y AI, analice un sistema de climatización (HVAC) aplicando el modelo fuente-trayectoria-receptor para identificar las fuentes de ruido, las trayectorias de transmisión aérea y estructural, y las soluciones en cada etapa, y diseñe conceptualmente un sistema de aislamiento de vibraciones para un equipo mecánico calculando la frecuencia natural del aislador y la transmisibilidad resultante.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | «¿Me escuchás?» — demostración de privacidad acústica con voz a través de la puerta del aula |
| **Desarrollo** | 50 min | Teoría guiada: privacidad acústica e inteligibilidad (STI, AI), control de ruido HVAC, aislamiento de vibraciones |
| **Práctica** | 40 min | Análisis fuente-trayectoria-receptor de un sistema HVAC + diseño de aislador de vibraciones |
| **Cierre** | 15 min | «La cadena completa: del ventilador al oído, de la máquina a la losa» + bitácora |

---

## 1. Apertura — «¿Me escuchás?»

### Dinámica

1. Pedir a un estudiante que salga del aula y cierre la puerta. El docente se queda adentro y lee un texto en voz normal (60 dBA). El estudiante afuera debe anotar TODO lo que entiende. Luego el docente sube la voz (75 dBA) y repite otras frases. Finalmente, el docente abre la puerta y lee en voz normal. Preguntar al estudiante:
   - «Con la puerta cerrada y voz normal, ¿entendiste algo? ¿Palabras sueltas? ¿El tema general?»
   - «Con voz alta, ¿mejoró? ¿Cuánto?»
   - «Con la puerta abierta, ¿entendiste todo?»

2. Revelar los datos: «La puerta de esta aula probablemente tiene STC 20-25. Con voz normal (60 dBA), el nivel del otro lado es ≈ 35-40 dBA. Con ruido de fondo en el pasillo de ≈ 35 dBA, la SNR es ≈ 0-5 dB — ininteligible o apenas fragmentos. Con voz alta (75 dBA), el nivel del otro lado sube a ≈ 50-55 dBA → SNR ≈ 15-20 dB → inteligibilidad parcial. Con la puerta abierta, STC = 0 → llegan 60 dBA → SNR ≈ 25 dB → totalmente inteligible. ESTO es privacidad acústica — no un sí/no, sino una PROBABILIDAD de inteligibilidad que depende del nivel de la fuente, la atenuación de la barrera Y el ruido de fondo en el receptor.»

3. Preguntar: «¿Qué pasa si el pasillo está en SILENCIO ABSOLUTO (15 dBA) y la puerta tiene STC 25?» → Voz normal (60 − 25 = 35 dBA), SNR = 35 − 15 = 20 dB → INTELIGIBLE. «Paradójicamente, un receptor más silencioso tiene MENOS privacidad. El ruido de fondo es el ALIADO de la privacidad. Este es el principio del enmascaramiento acústico — el mismo que usan las oficinas abiertas con parlantes en el cielorraso emitiendo ruido rosa para que no escuches la conversación del cubículo de al lado.»

### Preguntas disparadoras

- «En una oficina con paredes de vidrio (STC 30) y ruido de fondo de 40 dBA (HVAC + computadoras + conversación lejana), ¿una conversación normal en la oficina de al lado es inteligible?» → Voz 60 dBA − STC 30 = 30 dBA. SNR = 30 − 40 = −10 dB → inaudible. «La privacidad NO viene de la pared — viene del ruido de fondo. El vidrio es un pésimo aislante pero la oficina es ruidosa → hay privacidad. Esa misma pared en una biblioteca silenciosa (ruido de fondo 20 dBA) → SNR = 30 − 20 = 10 dB → parcialmente inteligible.»
- «¿Cuál es la fuente de ruido que MÁS subestiman al diseñar un estudio: el tránsito, los vecinos o el aire acondicionado?» → El HVAC. Porque es CONTINUO, NO se puede apagar y su espectro (63-500 Hz) coincide exactamente con las frecuencias más importantes para la música.

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Privacidad acústica e inteligibilidad del habla** (15 min). Presentar el concepto de que la privacidad NO es binaria (se escucha / no se escucha) sino un continuo de inteligibilidad. Mostrar la tabla de niveles de privacidad (total, normal, marginal, sin privacidad) con sus STI/AI equivalentes. Introducir el STI (Speech Transmission Index): un índice 0–1 que predice la inteligibilidad a partir de la reducción de modulación en 7 bandas de octava × 14 frecuencias de modulación = 98 valores. Explicar que RASTI y STIPA son versiones simplificadas (9 y 14 mediciones respectivamente) para uso en campo. Mostrar la escala de calificación: malo (0–0.30), pobre (0.30–0.45), regular (0.45–0.60), bueno (0.60–0.75), excelente (0.75–1.00). Hacer la conexión STC → privacidad: «Con STC 25, tu pared es de papel. Con STC 45, tu vecino escucha que hablás pero no sabe de qué. Con STC 55, podés dar un concierto y el vecino escucha un murmullo lejano. NO necesitás STC 60 para tener privacidad — necesitás STC 45 + un nivel de ruido de fondo razonable.»

    > Insertar **diagrama conceptual de privacidad del habla**: dos recintos, pared separadora con STC indicado, niveles de voz y ruido de fondo, y el STI resultante con código de color.

2. **Control de ruido en sistemas HVAC** (20 min). Este es el corazón técnico de la sesión. Estructurar en tres partes:

    **a) Los tres mecanismos de ruido HVAC** (5 min): ruido del ventilador (tono puro BPF + banda ancha), ruido de flujo de aire (turbulencia ∝ V⁵), ruido breakout (el ducto como altavoz). Dato de impacto: «Si duplicás la velocidad del aire, el ruido NO se duplica — se multiplica por 32-64×. Por eso los estudios profesionales tienen ductos ENORMES: el espacio extra es la inversión en silencio.»

    **b) El modelo fuente-trayectoria-receptor** (10 min). Dibujar el diagrama en la pizarra. Para cada etapa, preguntar: «¿Qué podemos hacer AQUÍ?» → Fuente: elegir ventilador silencioso (airfoil, < 1200 RPM). Trayectoria: silenciadores + conductos sobredimensionados + codos suaves + juntas flexibles. Receptor: rejillas de gran área + ubicación lejos del punto de escucha. Enfatizar que las intervenciones en la FUENTE son las más efectivas y las del RECEPTOR las menos: «Es mejor no generar el ruido que tratar de eliminarlo después. Elegir un ventilador 15 dB más silencioso cuesta un 20% más. Lograr esos mismos 15 dB con silenciadores y tratamiento cuesta 5× más y ocupa espacio.»

    **c) Diseño paso a paso** (5 min). Recorrer los 6 pasos: (1) definir NC objetivo, (2) seleccionar equipo con datos de ruido, (3) dimensionar conductos para baja velocidad (mostrar el cálculo: caudal = V × A), (4) insertar silenciadores, (5) diseñar rejillas terminales, (6) desacoplar y aislar. Mostrar velocidades recomendadas: ramas terminales < 2.5 m/s, ductos principales < 5 m/s, difusores < 1.5 m/s.

    > Insertar **Fig. 17-6** del Everest: diagrama completo de sistema HVAC para estudio mostrando todos los componentes y puntos de control de ruido.

3. **Aislamiento de vibraciones** (15 min). Empezar con la diferencia ruido aéreo vs. estructural: «El ruido aéreo lo frenás con masa. El ruido estructural lo frenás con DESACOPLAMIENTO.» Presentar el modelo masa-resorte: f_n = (1/2π)·√(k/m). Mostrar la fórmula de la deflexión estática: f_n ≈ 15.8/√δ (δ en mm). «Más deflexión = f_n más baja = mejor aislamiento en graves. Pero más deflexión = resortes más blandos = la máquina se mueve más al arrancar → necesitás una base inercial (masa extra) para estabilizar.» Derivar la transmisibilidad η = 1/|(f/f_n)² − 1| y dibujar la curva en la pizarra, señalando las TRES regiones: resonancia (η ≫ 1 — ¡peligro!), sin aislamiento (f < f_n, η ≈ 1), y aislamiento efectivo (f > √2·f_n, η < 1). «Para que el aislador funcione, necesitás f_n < f_excitación / 3. Para un motor de 1750 RPM (≈29 Hz), necesitás f_n < 9.7 Hz → deflexión > 2.7 mm. Para un ventilador de 900 RPM (15 Hz), necesitás f_n < 5 Hz → deflexión > 10 mm → resortes helicoidales, no neopreno.» Mostrar la tabla de tipos de aisladores con sus rangos de f_n y aplicaciones. Enfatizar el error #1: aislás la máquina pero las cañerías y ductos están rígidos → la vibración se escapa por las conexiones. «El aislamiento de vibraciones es un SISTEMA: resortes + juntas flexibles + base inercial. Si falta UNA pieza, el sistema falla.»

    > Insertar **Fig. 17-4** del Everest: diagrama de aislamiento de vibraciones completo con máquina, resortes, base inercial y juntas flexibles.

---

## 3. Práctica — Diagnosticá el HVAC y diseñá un aislador

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 30 — Privacidad acústica, HVAC y vibraciones

**Instrucciones:**

**Parte A — Análisis de privacidad en un escenario real (individual)**

1. Elegí DOS recintos adyacentes que conozcas (dos habitaciones de tu casa, dos aulas, estudio + sala de estar, oficina + pasillo). Para cada uno, estimá o medí:
   - STC aproximado de la pared/puerta separadora (usá la tabla de materiales de la Sesión 28 como referencia)
   - Nivel de voz típico en el recinto fuente (conversación normal = 60 dBA, voz alta = 70 dBA, grito = 80 dBA)
   - Ruido de fondo en el recinto receptor (medí con sonómetro o app)

2. Calculá el nivel de voz que LLEGA al recinto receptor: L_receptor ≈ L_fuente − STC.

3. Calculá la SNR en el receptor: SNR = L_receptor − L_ruido_fondo.

4. Determiná la privacidad resultante usando la tabla de la clase:
   - SNR < 0 dB → privacidad total (voz enmascarada por ruido de fondo, inaudible)
   - SNR 0–10 dB → privacidad normal (voz audible pero sin palabras distinguibles)
   - SNR 10–20 dB → privacidad marginal (fragmentos inteligibles con concentración)
   - SNR > 20 dB → sin privacidad (conversación claramente inteligible)

5. Respondé: ¿Qué cambio produciría el MAYOR impacto en la privacidad: (a) mejorar la pared +10 dB STC, o (b) aumentar el ruido de fondo +10 dB (ej. con un ventilador silencioso)? Justificá numéricamente.

**Parte B — Análisis fuente-trayectoria-receptor de un sistema HVAC (individual o en parejas)**

1. Identificá un sistema de climatización REAL que conozcas (el aire acondicionado de tu casa, el HVAC del aula, el split de tu estudio). Documentalo: tipo de equipo (split, central, ventiloconvector), ubicación de la unidad interior, recorrido de los conductos (si los hay), ubicación de las rejillas.

2. Construí una TABLA de análisis fuente-trayectoria-receptor para este sistema:

    | Etapa | Elemento específico | Tipo de ruido que genera (tono BPF, banda ancha, breakout, vibración) | Nivel estimado (dBA) en el punto de escucha | Solución posible | ¿Es factible? (Sí/No/Parcial) |
    |---|---|---|---|---|---|
    | **Fuente** | Ventilador de la unidad interior | Tono puro BPF (~200-400 Hz) + banda ancha | 42 | Reemplazar por equipo con ventilador airfoil de menor RPM | Parcial (costo alto) |
    | **Fuente** | Compresor de la unidad exterior | Vibración estructural a 50 Hz + armónicos | — (no audible dentro, pero vibra la pared) | Aislar con resortes o neopreno | Sí |
    | **Trayectoria** | Conducto de impulsión de 150 mm, 2 codos a 90° | Turbulencia en codos + breakout a través de pared del ducto | 35 | Codos de radio amplio (> 1.5× diámetro) + recubrir ducto con mass-loaded vinyl | Parcial |
    | **Trayectoria** | Difusor terminal de 20×20 cm | Silbido por velocidad de salida > 3 m/s | 30 | Reemplazar por difusor de 40×40 cm (¼ de la velocidad → 15-18 dB menos) | Sí |
    | **Receptor** | Posición de escucha a 1.5 m del difusor | Suma de todos los ruidos anteriores | 43 (total combinado) | Reubicar difusor al lado OPUESTO de la sala | Sí |

3. Jerarquizá las intervenciones propuestas por relación BENEFICIO/COSTO. ¿Cuál harías PRIMERO? ¿Por qué?

4. Si tuvieras presupuesto para UNA sola intervención, ¿cuál elegirías y qué reducción de ruido esperarías? Justificá.

**Parte C — Diseño de un aislador de vibraciones (individual)**

Seleccioná UNO de los siguientes casos y diseñá el sistema de aislamiento:

**Caso 1 — Compresor de aire acondicionado residencial**: masa = 80 kg, velocidad de operación = 2900 RPM (≈48.3 Hz). Está montado sobre una losa de concreto en la azotea. El vecino del piso de abajo se queja de un zumbido continuo cuando el AC está encendido.

**Caso 2 — Ventilador de extracción en estudio**: masa = 45 kg, velocidad = 1150 RPM (≈19.2 Hz). Está montado sobre una pared de yeso en un entrepiso. La vibración se transmite a TODA la pared y se re-irradia como un zumbido grave en la sala de grabación.

Para el caso elegido:

1. Calculá la frecuencia de excitación: f = RPM / 60.
2. Determiná la frecuencia natural MÁXIMA permitida para el aislador: f_n < f / 3.
3. Calculá la deflexión estática MÍNIMA necesaria: δ = (15.8 / f_n)² mm.
4. Seleccioná el TIPO de aislador adecuado (neopreno, resorte helicoidal, base inercial con resortes) y justificá tu elección basándote en la deflexión requerida.
5. Calculá la transmisibilidad η a la frecuencia de operación.
6. Calculá cuánta fuerza vibratoria LLEGA a la estructura: F_transmitida = η × F_aplicada. Compará con el caso sin aislador (η = 1).
7. Propuesta adicional: ¿Recomendarías añadir una base inercial? ¿De qué masa (como múltiplo de la masa del equipo: 1×, 1.5×, 2×)? Justificá considerando el comportamiento durante el arranque (cuando la máquina PASA por la resonancia).
8. Mencioná al menos DOS conexiones (cañerías, cables, ductos) que necesitarían juntas flexibles y por qué.

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Análisis de privacidad (Parte A) | STC estimado justificadamente, SNR calculada correctamente, privacidad clasificada según tabla, comparación numérica entre mejorar pared vs. aumentar ruido de fondo | STC y SNR calculados pero clasificación de privacidad incorrecta o comparación ausente | Sin estimación de STC o cálculo de SNR incorrecto |
| HVAC fuente-trayectoria-receptor (Parte B) | Tabla completa con ≥5 filas cubriendo las 3 etapas, tipo de ruido identificado correctamente para cada elemento, soluciones factibles, jerarquización beneficio/costo justificada | Tabla con 3-4 filas o clasificación incorrecta de algún mecanismo de ruido | Menos de 3 filas o confusión entre ruido aéreo y vibración estructural |
| Diseño de aislador (Parte C) | Frecuencia natural calculada correctamente, deflexión mínima determinada, tipo de aislador seleccionado con justificación basada en deflexión requerida, η calculada correctamente, base inercial evaluada con criterio, conexiones flexibles identificadas | Cálculos correctos pero selección de aislador sin justificación o sin evaluar base inercial | Frecuencia de excitación mal calculada, confusión entre RPM y Hz, o fórmula de transmisibilidad incorrecta |
| Rigor ingenieril | Unidades correctas en todos los cálculos, diferenciación clara entre mecanismos de ruido HVAC (ventilador vs. flujo vs. breakout), comprensión de que el aislamiento de vibración es un SISTEMA (no solo el aislador) | Cálculos correctos pero sin análisis sistémico (ej. propone aislador pero ignora conexiones) | Errores de unidades, confunde frecuencia natural con frecuencia de excitación, o no diferencia entre los tipos de aisladores |

---

## 4. Cierre — «La cadena completa»

### Discusión guiada (10 min)

- «Levanten la mano los que, después de hacer la Parte A, se dieron cuenta de que su 'estudio' no tiene NINGUNA privacidad.» → La mayoría. «Esto es lo normal. La buena noticia es que ahora saben POR QUÉ. No es magia — es SNR. Y la SNR se mejora con STC de la pared O con ruido de fondo en el receptor. A veces, la solución más barata es un ventilador silencioso que mantenga el ruido de fondo en 35 dBA — suficiente para enmascarar la voz pero no tanto como para molestar al grabar.»

- «En el análisis HVAC, ¿cuál fue la intervención con mejor relación beneficio/costo?» → Típicamente: bajar la velocidad del ventilador (si es ajustable), rejillas más grandes, o codos de radio amplio. «Lo más caro (reemplazar el equipo) es lo MÁS efectivo. Pero lo más BARATO (rejillas más grandes) puede dar 5-10 dB de mejora por casi nada de dinero. La ingeniería acústica no es gastar mucho — es gastar INTELIGENTE.»

- «Del diseño de aisladores: ¿quién eligió neopreno y quién resortes? ¿Por qué?» → Discutir las diferencias. Para el compresor a 2900 RPM (48 Hz), neopreno alcanza (f_n ≈ 10-16 Hz → f/f_n ≈ 3-5× → η ≈ 0.04-0.11, excelente). Para el ventilador a 1150 RPM (19 Hz), necesitamos f_n < 6.3 Hz → deflexión > 6.3 mm → resortes. «El neopreno es más barato y fácil de instalar. Pero NO sirve para bajas frecuencias. Hay que calcular ANTES de comprar. La hoja de datos del fabricante NO miente: si la deflexión máxima es 3 mm, f_n mínima es ~9 Hz. Si necesitás menos, necesitás resortes.»

- «La lección más importante de hoy: el aislamiento acústico NO es un producto que comprás — es un SISTEMA que diseñás. La privacidad depende de TRES variables (nivel de voz, STC, ruido de fondo), no de UNA. El HVAC silencioso depende de decisiones en CADA etapa del modelo fuente-trayectoria-receptor. El aislamiento de vibraciones funciona solo si los resortes Y las conexiones flexibles Y la base inercial están presentes. Si falta UNA pieza, el sistema falla. Ser ingeniero acústico es entender el SISTEMA completo, no memorizar productos.»

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"La privacidad acústica no es un estado binario (se escucha / no se escucha) sino un continuo de inteligibilidad determinado por la relación señal-ruido (SNR) entre la voz que atraviesa una partición y el ruido de fondo en el recinto receptor. Índices objetivos como el STI (Speech Transmission Index, 0–1) y el AI (Articulation Index) permiten predecir y medir la inteligibilidad a partir de la reducción de modulación en múltiples bandas de frecuencia. Paradojalmente, el ruido de fondo moderado es un ALIADO de la privacidad porque enmascara la voz residual — principio utilizado en sistemas de enmascaramiento acústico. El control de ruido en sistemas HVAC se analiza con el modelo fuente-trayectoria-receptor: el ruido del ventilador (tono BPF + banda ancha), el ruido de flujo (proporcional a V⁵-V⁶) y el ruido breakout (el ducto como altavoz) requieren soluciones distintas en cada etapa. La velocidad del aire es el parámetro crítico de diseño: reducirla a la mitad baja el ruido de flujo 15-18 dB. El aislamiento de vibraciones utiliza el modelo masa-resorte con frecuencia natural f_n = (1/2π)·√(k/m) ≈ 15.8/√δ. La transmisibilidad η cae para f > √2·f_n, y un diseño efectivo requiere f_n < f_excitación/3. El tipo de aislador (neopreno para deflexiones < 5 mm y f_n > 7 Hz, resortes para deflexiones > 10 mm y f_n < 5 Hz) se selecciona según la frecuencia de excitación. El aislamiento de vibraciones es un SISTEMA que incluye aisladores, base inercial y juntas flexibles en todas las conexiones — si falta una pieza, falla todo."*

---

## Recursos adicionales para el docente

- [Kinetics Noise Control — Vibration Isolation Selection Guide](https://www.kineticsnoise.com/) — catálogo técnico con curvas de selección de aisladores, deflexiones recomendadas por tipo de equipo (compresores, bombas, ventiladores, chillers) y bases inerciales pre-diseñadas.
- [Mason Industries — Vibration Isolation Products](https://www.masonindustries.com/) — referencia de la industria con especificaciones de resortes helicoidales, almohadillas de neopreno, y conectores flexibles. Incluye calculadora online de frecuencia natural.
- [ASHRAE 2019 Handbook — HVAC Applications, Chapter 48: Noise and Vibration Control](https://www.ashrae.org/) — la referencia definitiva para diseño de HVAC silencioso. Incluye curvas NC/RC recomendadas por tipo de espacio, velocidades de aire máximas, atenuación de silenciadores por banda de octava, y criterios de vibración para equipos mecánicos.
- [IEC 60268-16:2020 — Sound System Equipment, Part 16: Objective Rating of Speech Intelligibility by Speech Transmission Index](https://webstore.iec.ch/publication/1214) — norma que define el STI, STIPA y STITEL. Incluye la matriz de modulación completa (98 valores) y las tablas de calificación.
- [NTi Audio — STIPA Measurement Guide](https://www.nti-audio.com/) — guía práctica de medición de inteligibilidad con analizadores portátiles. Explica la diferencia entre STI, STIPA y RASTI con ejemplos de campo.
- [REW — Room EQ Wizard](https://www.roomeqwizard.com/) — software gratuito que incluye generador de señales y RTA (analizador de espectro en tiempo real). Útil para medir el espectro de ruido HVAC en bandas de octava y comparar con curvas NC.
- [Engineering Toolbox — Vibration Isolation](https://www.engineeringtoolbox.com/vibration-isolation-d_1792.html) — calculadora online de transmisibilidad y frecuencia natural. Permite a los estudiantes verificar sus cálculos manuales y explorar el efecto de cambiar parámetros.

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «No entiendo la diferencia entre STI, RASTI y STIPA. ¿Son lo mismo?» | Son variantes del mismo concepto con distinta complejidad. STI: 98 mediciones, método de laboratorio (completo pero lento). STIPA: 14 mediciones, método de campo para sistemas de refuerzo sonoro (el estándar actual). RASTI: 9 mediciones, método obsoleto (solo 2 bandas de octava, no captura bien distorsión ni ruido en graves). Analogía: STI es como una resonancia magnética (diagnóstico completo), STIPA es una radiografía (rápida y suficiente para la mayoría de los casos), RASTI es como tomar la temperatura (da una idea pero no es suficiente para diagnóstico serio). Para el aula, usamos el concepto de STI en forma cualitativa — no necesitan calcular los 98 valores. La tabla STI/calificación es suficiente para entender la relación entre atenuación de la pared y privacidad. |
| «Medí el ruido del HVAC en mi casa y me dio 42 dBA. Según la tabla NC, eso es NC-35. ¿Es bueno o malo?» | Depende del USO del espacio. NC-35 es aceptable para una vivienda, restaurante u oficina abierta. Es INADECUADO para un estudio de grabación (necesita NC-15 a 20), una sala de control (NC-20 a 25) o un aula (NC-25 a 30). El mismo nivel de ruido puede ser «silencioso» para un uso y «ruidoso» para otro. La clave es definir el criterio OBJETIVO según el uso ANTES de evaluar. Para tu estudio: si mediste NC-35 y necesitás NC-20, tenés una brecha de 15 dB → tus intervenciones HVAC deben sumar al menos 15 dB de reducción. Si no podés llegar por restricciones de presupuesto o espacio, necesitás replantear el uso del espacio (ej. componer con auriculares, grabar solo de noche cuando el HVAC está en modo bajo). |
| «En el modelo fuente-trayectoria-receptor, ¿cómo sé si el ruido que escucho es del ventilador, del flujo de aire o breakout?» | Tres pistas de diagnóstico: (a) **Tono puro (BPF)**: si escuchás un zumbido con tono definido que cambia con la velocidad del ventilador, es ruido del ventilador. La frecuencia BPF = (# de álabes × RPM / 60). Si el ventilador tiene 6 álabes y gira a 1200 RPM, BPF = 120 Hz. Podés verificarlo con un analizador de espectro (pico estrecho en los armónicos de BPF). (b) **Ruido de flujo**: es banda ancha, como un «shhhhh» o soplido, que aumenta MUCHO al acercarte a la rejilla. Si cubrís PARCIALMENTE la rejilla con la mano y el ruido CAMBIA (típicamente se vuelve más agudo/turbulento), es ruido de flujo. (c) **Breakout**: si el ruido es más fuerte al lado del DUCTO (tocando la pared del conducto) que en la rejilla, es breakout. El ducto está actuando como altavoz. Solución: masa (recubrir con mass-loaded vinyl) + desacoplar el ducto de la estructura. |
| «Calculé f_n = 4.1 Hz para un ventilador de 900 RPM (15 Hz). f/f_n = 3.66 → η ≈ 0.08 (8%). Pero los resortes que necesito tienen deflexión de 15 mm y el fabricante dice que la deflexión máxima es 12 mm. ¿Qué hago?» | No podés exceder la deflexión máxima del aislador — se daña o pierde sus propiedades elásticas. Opciones: (a) Buscar resortes con mayor deflexión (hay resortes de 25-50 mm de deflexión para aplicaciones de baja frecuencia). (b) Añadir una base inercial que AUMENTE la masa total. Con más masa, para la MISMA rigidez, la deflexión AUMENTA (δ = mg/k). Si duplicás la masa con una base inercial, duplicás la deflexión. Pero CUIDADO: si la deflexión se duplica, tu f_n BAJA (f_n ∝ 1/√δ). Verificá que la nueva f_n no quede demasiado baja (podrías acercarte a la resonancia de la estructura del edificio, típicamente 2-5 Hz para losas de concreto). (c) Si ninguna opción funciona, reconsiderá el ventilador: uno de 600 RPM tendría f_excitación = 10 Hz → f_n necesaria < 3.3 Hz → deflexión > 23 mm → resortes especiales o colchones de aire. A veces la solución es cambiar el equipo, no el aislador. |
| «¿Qué diferencia hay entre una almohadilla de neopreno y un resorte helicoidal encapsulado (spring isolator with cup)?» | El resorte helicoidal simple tiene MUY POCO amortiguamiento (ξ < 0.01). Esto significa que en la resonancia (durante el arranque o parada), la amplitud de vibración puede ser 50-100× la amplitud de operación normal. La máquina «salta» al pasar por f_n — esto puede dañar conexiones y ser peligroso. El resorte encapsulado en neopreno (housed spring) combina el resorte (para baja f_n) con el neopreno (para amortiguamiento). El neopreno agrega amortiguamiento (ξ ≈ 0.05-0.10) que reduce la amplitud en resonancia a niveles seguros. Además, el neopreno actúa como aislante de alta frecuencia (por encima de ~50 Hz, donde los resortes metálicos pueden transmitir vibración por efecto de «cortocircuito» acústico a través de las espiras). La regla: para equipos rotativos (ventiladores, bombas) → resortes encapsulados. Para equipos alternativos (compresores de pistón) → neopreno de alta deflexión o resortes con amortiguador externo. |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
