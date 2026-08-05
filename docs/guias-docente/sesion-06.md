# Guía Docente — Sesión 6: Nivel de Presión Sonora (SPL)

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, sonómetro (app de celular: NIOSH SLM, Decibel X o Sound Meter), parlante Bluetooth, cinta métrica  
**Referencia:** Everest & Pohlmann, Capítulo 2, pp. 17–25 (Sound Levels and the Decibel — SPL, SIL, SWL, Sound Level Meters, Weighting Networks)

---

## Objetivo de la sesión

Que el estudiante opere correctamente un sonómetro, distinga las magnitudes SPL, SIL y SWL, interprete las curvas de ponderación A, C y Z, y comprenda la escala de niveles sonoros típicos en el contexto de la producción musical y la seguridad auditiva.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | Medición en vivo + diagnóstico de concepciones erróneas |
| **Desarrollo** | 45 min | Teoría guiada: SPL/SIL/SWL, sonómetro, ponderación A/C/Z |
| **Práctica** | 45 min | Mediciones en campo + plano acústico del aula |
| **Cierre** | 15 min | Discusión sobre seguridad auditiva + bitácora |

---

## 1. Apertura — El sonómetro como herramienta de producción

### Materiales
- App de sonómetro proyectada en pantalla (el docente opera, los estudiantes observan)
- Parlante Bluetooth con tono de prueba (1 kHz sinusoidal desde un generador online)

### Dinámica
1. Proyectar el sonómetro en pantalla. Medir el nivel del aula en silencio (~40-50 dBA).
2. Pedir a un estudiante que hable a 1 m del micrófono (~60-65 dBA). Pedir que grite (~80-85 dBA).
3. Preguntar al resto: «El grito fue el doble de fuerte, ¿el número se duplicó?» (No — de 60 a 80 dB solo +20 dB, que es ×10 en presión.)
4. Cambiar la ponderación de A a C y a Z. Reproducir un tono grave (60 Hz). Preguntar: «¿Por qué marca distinto en cada modo?»

### Preguntas disparadoras
- «Si medimos en dBA y en dBC, ¿cuál es la medición 'correcta'?»
- «Un parlante que usamos en el estudio dice 'sensibilidad: 90 dB SPL / 1W / 1m'. ¿Qué significa cada parte?»
- «¿Por qué un teléfono no puede reemplazar un sonómetro profesional?»

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Las tres magnitudes del sonido** (15 min). Recordar de la sesión 5 que dB = relación logarítmica. Ahora la pregunta es: ¿relación de QUÉ? Dibujar en la pizarra una fuente sonora (parlante) y un receptor (micrófono). Señalar:
   - **SWL**: lo que sale de la fuente (potencia total emitida, en vatios). Es una propiedad de la fuente — no cambia con la distancia ni con la sala. Como los watts RMS de un amplificador.
   - **SIL**: la energía que atraviesa 1 m² por segundo en un punto (intensidad, en W/m²). Tiene dirección — es un vector.
   - **SPL**: la presión que ejerce la onda sobre el micrófono (en Pa). Es lo que medimos con un sonómetro y lo que «escucha» el tímpano.

   Anotar las tres fórmulas con sus referencias en la pizarra y dejarlas visibles:

   \[
   \text{SPL} = 20\log_{10}(p / 20\mu\text{Pa}) \qquad
   \text{SIL} = 10\log_{10}(I / 10^{-12}\ \text{W/m}^2) \qquad
   \text{SWL} = 10\log_{10}(W / 10^{-12}\ \text{W})
   \]

   Mostrar la conversión 94 dB SPL = 1 Pa en la pizarra como punto de referencia.

2. **SPL en profundidad: la fórmula y sus implicaciones** (10 min). Derivar ejemplos numéricos en vivo:
   - Una presión de 2 Pa → ¿SPL? → 2,000,000 µPa / 20 µPa = 100,000 → log(100,000) = 5 → 20 × 5 = 100 dB SPL.
   - 80 dB SPL → ¿presión? → 80/20 = 4 → 10⁴ = 10,000 → 10,000 × 20 = 200,000 µPa = 0.2 Pa.
   - Duplicar distancia → la presión cae a la mitad (ley del inverso de la distancia, para fuente puntual en campo libre) → −6 dB SPL.

   > Insertar **Fig. 2-1** del Everest: escala logarítmica — mostrar la compresión visual: la distancia entre 0 y 10 dB es igual que entre 110 y 120 dB. Sin esta compresión, graficar niveles SPL sería imposible.

3. **El sonómetro: cómo funciona y cómo usarlo** (10 min). Mostrar un diagrama en bloques simplificado en la pizarra: micrófono → preamplificador → filtro de ponderación (A/C/Z) → detector RMS → pantalla. Explicar cada etapa.

   **Ponderación A, C y Z**: dibujar las tres curvas superpuestas. Enfatizar:
   - **A**: atenúa mucho los graves. A 100 Hz, −19 dB. Por eso un concierto con mucho subgrave puede medir 95 dBA pero 110 dBC.
   - **C**: casi plana. Útil para medir el espectro completo, especialmente en música.
   - **Z**: plana total. Solo para laboratorio.

   **Constantes de tiempo**: Fast (125 ms), Slow (1 s), Peak (~50 µs). Fast es el estándar para monitoreo de producción musical.

4. **Tabla de niveles SPL y seguridad auditiva** (10 min). Proyectar la tabla completa de niveles SPL con tiempos de exposición segura. Enfatizar la regla: **+3 dB = mitad del tiempo seguro**. Conectar con la realidad del estudiante:
   - Ensayo de batería: ~100-105 dBA → 5-15 minutos seguros sin protección.
   - Mezcla con auriculares: típicamente 80-90 dBA → riesgo acumulativo si es 8+ horas diarias.
   - Concierto: 100-110 dBA → tapones obligatorios si estás en primeras filas.

---

## 3. Práctica — Medición en campo y plano acústico

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 6 — SPL: medición y plano acústico

**Instrucciones:**

**Parte A — Mediciones con sonómetro (en parejas)**

1. Instalá una app de sonómetro calibrada en tu celular (NIOSH SLM recomendado, o Decibel X).
2. Medí el nivel de presión sonora en **seis puntos** del aula:
   - Esquina delantera izquierda (cerca del parlante del profesor)
   - Centro del aula (posición de escucha típica)
   - Esquina trasera derecha
   - Fondo del aula (lado opuesto al parlante)
   - A 30 cm de un parlante reproduciendo ruido rosa a volumen moderado
   - A 3 m del mismo parlante

3. Para cada punto, registrá **tres** valores: dBA, dBC y dBZ (si la app lo permite; si no, dBA y dBC al menos).

4. Completá la tabla:

| Punto de medición | Distancia a la fuente | dBA | dBC | dBZ | Observaciones |
|---|---|---|---|---|---|
| | | | | | |

5. Calculá:
   - El promedio lineal de las mediciones en dBA (convertí cada dB a presión lineal, promediá, reconvertí a dB)
   - La diferencia en dB entre el punto más cercano y el más lejano a la fuente. ¿Se aproxima a la predicción de −6 dB por duplicación de distancia?

**Parte B — Plano acústico del aula**

Dibujá un plano simple del aula (vista de planta, a mano alzada o digital) que incluya:
- La ubicación de los 6 puntos de medición (numerados)
- El nivel en dBA de cada punto anotado sobre el plano
- Una escala de colores (verde < 50 dBA, amarillo 50-65 dBA, naranja 65-80 dBA, rojo > 80 dBA)
- La ubicación de la fuente (parlante del profesor o parlante usado en la medición)
- Una flecha indicando la dirección de mayor a menor nivel

**Parte C — Informe breve (200-300 palabras)**

Redactá un informe que incluya:
1. ¿Hay diferencias significativas entre dBA y dBC en las mediciones? ¿En qué puntos y por qué?
2. ¿El nivel en el aula cumple con criterios de confort acústico para una clase (recomendado: < 50 dBA de ruido de fondo)?
3. ¿Qué limitaciones encontraste al usar el celular como sonómetro? (precisión, calibración, respuesta en frecuencia del micrófono, rango dinámico)
4. ¿Qué recomendación harías para mejorar la acústica del aula basándote en tus mediciones?

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Mediciones (Parte A) | 6 puntos con ≥2 tipos de ponderación, tabla completa, promedio calculado correctamente | 4-5 puntos o falta algún tipo de ponderación | ≤3 puntos o sin ponderación |
| Plano acústico (Parte B) | Plano legible, 6 puntos numerados con niveles, escala de colores, fuente y dirección | Plano incompleto (faltan niveles o colores) | Sin plano o ilegible |
| Informe (Parte C) | Responde 4 preguntas con datos concretos de las mediciones y terminología de la sesión | Responde 2-3 preguntas, vago o sin datos | Respuestas sin respaldo en mediciones |

---

## 4. Cierre — Discusión y bitácora

### Discusión guiada (10 min)

- «Medimos 65 dBA en el centro del aula durante la clase. ¿Es un nivel que permite concentrarse?» (Sí: está dentro del rango de conversación normal. Pero si el ruido de fondo sin clase es >50 dBA, hay un problema de aislamiento.)
- «¿Por qué un ingeniero de mezcla necesita saber medir SPL y no solo 'escuchar'?» (Fatiga auditiva: después de 30 minutos a 90 dBA, tu percepción cambia y ya no mezclás igual. Medir es objetivo; el oído se cansa.)
- «Si tuvieras que comprar monitores de estudio, ¿qué especificación en dB te interesaría?» (Sensibilidad: dB SPL / 1W / 1m. SPL máximo. Y el ruido propio en dB.)

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Hoy operé un sonómetro por primera vez y entendí la diferencia entre SPL, SIL y SWL. SPL es presión en un punto (lo que mide el sonómetro y lo que 'oye' el tímpano), SIL es energía por unidad de área, y SWL es la potencia total que emite una fuente. La ponderación A imita la sensibilidad del oído a niveles bajos, la C a niveles altos. La regla de los +3 dB = mitad del tiempo seguro es crítica: no es una sugerencia, es salud auditiva. Un calibrador genera 94 dB SPL = 1 Pa."*

---

## Recursos adicionales para el docente

- [NIOSH Sound Level Meter](https://www.cdc.gov/niosh/topics/noise/app.html) — sonómetro gratuito del instituto oficial de salud de EE.UU. (iOS, recomendado como referencia para estudiantes)
- [Decibel X](https://skypaw.com/decibelx.html) — sonómetro con gráficos de espectro en tiempo real (iOS/Android)
- [Sengpielaudio: Sound Level Meters](http://www.sengpielaudio.com/Calculations03.htm) — calculadora y referencia de ponderación A, C y Z
- [Tabla de exposición ocupacional al ruido (OSHA)](https://www.osha.gov/noise) — referencia normativa de tiempos de exposición
- [Generador de tonos online](https://www.szynalski.com/tone-generator/) — para generar tonos de prueba (1 kHz, ruido rosa) durante la demostración
- [Video: How to Use a Sound Level Meter](https://www.youtube.com/watch?v=9GkZgJxT9Dc) — demostración práctica de medición en campo

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «¿Cuál es la diferencia práctica entre SPL, SIL y SWL?» | Analogía: SWL → los watts que dice la caja del amplificador. SIL → la energía que llega a una pared de la sala. SPL → lo que marca el sonómetro. Si medís a 1 m de un parlante en campo libre, SPL ≈ SIL. Pero SWL es siempre mayor (porque es la potencia total, no por metro cuadrado) |
| «El celular marca cualquier cosa, no confío en la medición» | Mostrar una tabla de comparación de apps de sonómetro (NIOSH SLM tiene error <2 dB respecto a un sonómetro profesional en iPhone; en Android varía mucho). Explicar que el micrófono del celular tiene respuesta limitada en graves (<100 Hz) y agudos (>8 kHz). Para trabajo profesional se necesita un sonómetro Clase 2 como mínimo |
| Confusión entre A, C y Z | Regla práctica: dBA = lo que «molesta» (normativa). dBC = lo que «sentís en el pecho» (graves). dBZ = lo que realmente hay (laboratorio). Si medís un concierto con subgraves: dBA = 95, dBC = 110. Esa diferencia de 15 dB son las frecuencias graves que la ponderación A ignora pero la C preserva |
| «¿Por qué 94 dB SPL es el estándar de calibración?» | 94 dB SPL = 1 Pa exacto. Es un valor redondo en presión (1 Pa) que además está en un rango cómodo (ni muy bajo con riesgo de ruido de fondo, ni muy alto que moleste). Muchos calibradores también ofrecen 114 dB SPL (10 Pa) |
| El estudiante no puede instalar la app de sonómetro | Llevar un sonómetro físico si está disponible (muchas universidades tienen). Alternativa: trabajar en grupos de 3-4 con un solo celular que tenga la app. O usar la actividad como trabajo de campo extra-áulico |
| «¿Para qué necesito esto como músico/productor?» | Tres razones: (1) Calibrar monitores de estudio a un nivel de referencia (típicamente 79-85 dB SPL en la posición de escucha). (2) Saber si estás mezclando a un volumen seguro (después de 30 min a 90 dB, tu oído comprime la percepción y mezclás con exceso de agudos). (3) Leer fichas técnicas: sensibilidad de monitores (dB SPL/W/m), SPL máximo, relación señal/ruido de micrófonos. Todo está en dB SPL |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
