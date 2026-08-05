# Guía Docente — Sesión 23: Interferencia y ondas estacionarias

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** DAW (Reaper, Ableton, etc.), dos parlantes, generador de tonos, p5.js (simulador de ondas estacionarias), REW (opcional)  
**Referencia:** Everest & Pohlmann, Capítulo 10, pp. 154–169 (Comb-Filter and Reflection Effects — Superposition, Constructive/Destructive Interference, Standing Waves, Phase and Polarity) + Capítulo 13, pp. 242–275 (Modal Resonances — Axial Modes)

---

## Objetivo de la sesión

Que el estudiante analice el fenómeno de interferencia como resultado de la superposición de ondas sonoras, distinga entre interferencia constructiva y destructiva en función de la diferencia de camino y la fase, explique la formación de ondas estacionarias con nodos y antinodos, y diagnostique problemas de fase y filtro comb en contextos reales de grabación y monitoreo.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | Demostración auditiva: refuerzo y cancelación con dos parlantes + tono puro |
| **Desarrollo** | 50 min | Teoría guiada: superposición, ondas estacionarias, filtro comb, fase vs. polaridad |
| **Práctica** | 40 min | Experimento comb filter en DAW + mapeo de ondas estacionarias en el aula |
| **Cierre** | 15 min | «¿Fase o polaridad?» — diagnóstico de 3 casos reales + bitácora |

---

## 1. Apertura — «El sonido que desaparece»

### Dinámica

1. **Setup**: dos parlantes idénticos enfrentados a ~50 cm de distancia, ambos reproduciendo un tono puro de 440 Hz (generador de tonos en DAW o app). Volumen moderado.
2. Pedir a los estudiantes que caminen LENTAMENTE a lo largo de la línea que une los dos parlantes (de un parlante al otro).
3. Preguntar: «¿Qué escuchan?» → El volumen SUBE y BAJA. En algunos puntos el tono casi DESAPARECE. En otros suena MÁS FUERTE que con un solo parlante.
4. Explicar: «Lo que acaban de experimentar es INTERFERENCIA. Las ondas de los dos parlantes se encuentran en el aire. Donde llegan en fase, se SUMAN (más fuerte). Donde llegan en contrafase, se CANCELAN (silencio). A 440 Hz, λ ≈ 0.78 m. Cada λ/2 ≈ 39 cm, encontrás un nodo (silencio) o un antinodo (refuerzo máximo).»
5. Repetir con 220 Hz (λ ≈ 1.56 m, nodos cada 78 cm) y 880 Hz (λ ≈ 0.39 m, nodos cada 19.5 cm). Preguntar: «¿Por qué los nodos están más juntos a 880 Hz?»

### Preguntas disparadoras

- «Si dos ondas pueden cancelarse, ¿a dónde se fue la energía?» → No desapareció. Se redistribuyó. Donde hay un nodo (cancelación), DEBE haber un antinodo (refuerzo) en otro punto. La energía total del sistema se conserva.
- «En un estudio, ¿cuándo ocurre interferencia sin que pongamos dos parlantes?» → Cada reflexión de una superficie crea una «segunda fuente virtual». El sonido directo + la reflexión = interferencia.

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Principio de superposición** (10 min). Dibujar dos ondas sinusoidales viajando en la misma dirección. Sumarlas punto a punto: misma fase → suma, contrafase → resta. Formalizar: \(p_{\text{total}}(t) = p_1(t) + p_2(t)\). Condición constructiva: Δd = n·λ. Condición destructiva: Δd = (2n+1)·λ/2.

2. **Ondas estacionarias** (15 min). Cambiar el escenario: dos ondas de IGUAL frecuencia viajando en DIRECCIONES OPUESTAS (incidente + reflejada). El patrón NO viaja — está FIJO en el espacio. Introducir nodos (presión = 0) y antinodos (presión = máx). Distancia nodo-nodo = λ/2. Derivar la fórmula para una dimensión: \(f_n = n·c/(2L)\).

   > Insertar **Fig. 10-4** del Everest: onda estacionaria con nodos y antinodos etiquetados.

   Preguntar: «En el experimento de los dos parlantes, ¿eran ondas estacionarias?» → NO. Las ondas viajaban en la MISMA dirección (una hacia la otra, en realidad, pero el patrón de interferencia es entre dos fuentes emitiendo hacia afuera). Una onda estacionaria requiere que las ondas viajen EXACTAMENTE en direcciones opuestas (incidente + reflejada en la MISMA línea). El experimento de los dos parlantes produce un PATRÓN DE INTERFERENCIA, no ondas estacionarias.

3. **Filtro comb** (15 min). Conectarlo con la práctica de producción. Sonido directo + reflexión retardada = comb filter en frecuencia. Derivar la fórmula de frecuencias de cancelación: \(f_{\text{null}} = (2k+1)·c/(2Δd)\). Ejemplo concreto: reflexión de consola, Δd = 0.4 m → valles en 429, 1286, 2144 Hz.

   > Insertar **Fig. 10-1** del Everest: respuesta en frecuencia de un filtro comb.

   Preguntar: «Si escuchás un valle a 429 Hz en tu posición de mezcla, ¿lo ecualizás?» → NO. El comb filter es un problema temporal. El EQ no elimina el retardo. Lo corregís tratando la superficie reflectante.

4. **Fase vs. Polaridad** (10 min). Esta distinción es CRÍTICA y se confunde CONSTANTEMENTE en producción musical. Polaridad = inversión fija (× −1), todas las frecuencias, independiente de f. Fase = desplazamiento en el tiempo, DEPENDE de la frecuencia. Botón Ø = polaridad, no fase. Regla 3:1 para grabación multimicrófono.

   Hacer la demostración en DAW: (a) duplicar una pista, invertir polaridad de una → silencio total (cancelación en todo el espectro); (b) duplicar una pista, desplazar 1 ms → NO hay silencio total. Algunas frecuencias se cancelan, otras se refuerzan (comb filter).

---

## 3. Práctica — Laboratorio de interferencia

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 23 — Interferencia y ondas estacionarias

**Instrucciones:**

**Parte A — Construí tu propio comb filter (individual, en DAW)**

1. En tu DAW, creá una pista con ruido blanco (generador de señal).
2. Duplicá la pista. A la copia, aplicale un delay de exactamente 2 ms, 100% wet, sin feedback. Mezclá ambas pistas al mismo nivel.
3. Insertá un analizador de espectro (Voxengo SPAN, FabFilter Pro-Q en modo analyzer, o el nativo de tu DAW) y observá la respuesta.
4. Capturá la pantalla y anotá:
   - Frecuencia del PRIMER valle (cancelación). Verificá con la fórmula: \(f_{\text{null}}(0) = c/(2 \cdot \Delta d)\) con Δd = c × 2 ms = 0.686 m.
   - Separación entre valles consecutivos (Δf). Verificá: Δf = c/Δd.
5. Repetí con delays de: 0.5 ms, 1 ms, 5 ms, 10 ms. Para cada uno, capturá el espectro y respondé:
   - ¿A partir de qué delay los valles son tan cercanos que el oído ya no los percibe como «agujeros» individuales sino como una «coloración» general?
   - ¿Qué delay produce el primer valle exactamente en 1 kHz? (Despejá Δd de la fórmula).
   - ¿Qué pasa si la copia retardada está a −10 dB en lugar de 0 dB? ¿Desaparece el comb filter? (No, pero se atenúa: la profundidad de los valles es menor.)
6. Reflexión: «Si un delay de 2 ms produce cancelación en 250 Hz, ¿qué superficie en tu estudio podría estar causando ese delay? ¿A qué distancia tendría que estar para Δd = 0.686 m?»

**Parte B — Mapeo de ondas estacionarias en el aula (grupal)**

1. Midan la distancia entre dos paredes paralelas del aula. Calculen las primeras 5 frecuencias de modo axial: \(f_n = n·c/(2L)\).
2. Con un generador de tonos (app o DAW + parlante), emitan la frecuencia del primer modo (f₁). Con un sonómetro (app), midan el SPL en 5 puntos equidistantes entre las dos paredes. Registren: posición (m), SPL (dB).
3. Grafiquen SPL vs. posición. Marquen: ¿dónde están los nodos? ¿Dónde los antinodos? ¿Coinciden con lo que predice la teoría?
4. Respondan:
   - ¿La diferencia entre nodo y antinodo es de ~20 dB como predice la teoría para una sala poco amortiguada, o es menor? Si es menor, ¿por qué? (Absorción de las paredes reduce la amplitud de la onda reflejada → la cancelación no es total.)
   - ¿Escuchaste la diferencia al caminar entre las posiciones? ¿Fue tan dramática como el experimento de los dos parlantes? (Probablemente menos, porque la onda reflejada tiene menos amplitud que la incidente.)
   - Si pusieras un panel absorbente en UNA de las dos paredes, ¿qué le pasaría a la onda estacionaria? (La onda reflejada tendría menos amplitud → la diferencia nodo-antinodo se reduciría.)
5. Opcional: repetí para f₂ y f₃ si el tiempo lo permite.

**Parte C — Casos de diagnóstico fase/polaridad (individual)**

Para cada caso, determiná si el problema es de FASE o de POLARIDAD y proponé la solución:

| # | Situación | ¿Fase o polaridad? | Solución |
|---|---|---|---|
| 1 | Grabaste una guitarra acústica con dos micrófonos (uno al puente, otro al mástil). Al sumar los canales a mono, el sonido se vuelve «hueco» y pierde graves. | | |
| 2 | Tu monitor izquierdo y derecho están a distinta distancia de tus oídos (1.0 m y 1.3 m). Escuchás que la imagen estéreo está «torcida» hacia la izquierda, y ciertas frecuencias altas suenan raro. | | |
| 3 | Estás mezclando. Presionás el botón Ø en el canal de bombo para alinearlo con el bajo. Notás que en unas frecuencias suma y en otras cancela. | | |
| 4 | Grabás una batería con overheads en par estéreo. Al hacer solo los overheads en mono, los platillos casi desaparecen. | | |
| 5 | Caminás por tu estudio y notás que a 1 m de la pared trasera el bajo SUENA FUERTÍSIMO pero en el centro de la sala casi no se escucha. | | |

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Comb filter (Parte A) | 5 delays probados, espectros capturados, f_null verificado con fórmula, Δf medido, diferencias con −10 dB analizadas, delay para 1 kHz calculado correctamente | 3-4 delays, espectros capturados pero verificación incompleta | < 3 delays o sin capturas |
| Ondas estacionarias (Parte B) | 5 frecuencias calculadas, f₁ medida en 5 puntos con sonómetro, gráfico SPL vs. posición con nodos/antinodos identificados, discrepancia con teoría analizada | Mediciones hechas pero gráfico incompleto o sin análisis de discrepancia | Sin mediciones o sin gráfico |
| Diagnóstico fase/polaridad (Parte C) | 5/5 casos diagnosticados correctamente con justificación técnica y solución viable | 3-4/5 correctos o soluciones incompletas | ≤2/5 correctos o confusión fase/polaridad |
| Registro audiovisual | Capturas de espectro (Parte A) nítidas, video corto (30 s) caminando entre nodo y antinodo (Parte B) | Capturas presentes pero borrosas, sin video | Sin evidencia visual |

---

## 4. Cierre — «¿Fase o polaridad?»

### Discusión guiada (10 min)

- Repasar los 5 casos de la Parte C. Preguntar: «¿Cuál fue el más difícil de diagnosticar?» → Típicamente el #5: no es ni fase ni polaridad — es una ONDA ESTACIONARIA (interferencia entre incidente y reflejada en una sala). La solución no es eléctrica (no es un cable, no es un botón Ø) — es ACÚSTICA (tratamiento de la sala).

- «El caso #3 es el más sutil. El botón Ø invierte polaridad (180° fijos a TODAS las frecuencias). Si bombo y bajo comparten frecuencias (60-100 Hz), una inversión de polaridad puede sumar o cancelar dependiendo de la fase RELATIVA entre ambos instrumentos en ese rango. La polaridad es una herramienta, pero no reemplaza la alineación temporal fina (mover la región unos samples).»

- «Llevense esto: la interferencia es el fenómeno, el comb filter es la manifestación en frecuencia, y la onda estacionaria es el caso extremo donde el patrón se vuelve permanente. Los tres son el MISMO fenómeno físico visto desde distintos ángulos. Si entendiste la superposición, entendiste los tres.»

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Cuando dos o más ondas sonoras coinciden en el mismo punto, sus presiones se suman algebraicamente (principio de superposición). Si las ondas llegan en fase (Δd = n·λ), la interferencia es constructiva (refuerzo). Si llegan en contrafase (Δd = (2n+1)·λ/2), la interferencia es destructiva (cancelación). Cuando una onda incidente y su reflexión viajan en direcciones opuestas con la misma frecuencia, el patrón de interferencia queda fijo en el espacio: es una onda estacionaria, con nodos (presión mínima) cada λ/2 y antinodos (presión máxima) entre ellos. En el dominio de la frecuencia, la superposición de un sonido directo y su reflexión retardada produce un filtro comb: picos en f = k·c/Δd y valles en f = (2k+1)·c/(2Δd). La polaridad es una inversión fija de 180° independiente de la frecuencia; la fase es un desplazamiento temporal que varía con la frecuencia. El botón Ø invierte polaridad, no fase. El comb filter NO se corrige con ecualización — es un problema de dominio temporal que requiere tratamiento acústico de la superficie reflectante."*

---

## Recursos adicionales para el docente

- [Simulador de ondas estacionarias en p5.js](https://editor.p5js.org/) — sketch interactivo con dos ondas viajando en direcciones opuestas. Slider para frecuencia → ver cómo cambia la distancia entre nodos. Slider para amplitud de la onda reflejada → ver cómo la cancelación deja de ser total
- [Voxengo SPAN (gratuito)](https://www.voxengo.com/product/span/) — analizador de espectro gratuito para DAW. Ideal para visualizar el comb filter de la Parte A en tiempo real
- [Video: Phase vs Polarity — Audio University](https://www.youtube.com/watch?v=Nt6qTMOeONQ) — explicación visual con osciloscopio de la diferencia entre fase y polaridad
- [Video: Comb Filtering Explained — FabFilter](https://www.youtube.com/watch?v=0g7c0jV6WWA) — demostración en Pro-Q3 de cómo se ve y se escucha un comb filter
- [REW — Room EQ Wizard](https://www.roomeqwizard.com/) — medir la respuesta al impulso del aula. El espectro de frecuencia mostrará los picos y valles del comb filter y los modos de sala
- [Simulador de interferencia de dos fuentes — PhET (University of Colorado)](https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_en.html) — simulación interactiva de interferencia de ondas (agua y sonido)

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «Hice el experimento de los dos parlantes y no escuché cancelación total. ¿Hice algo mal?» | La cancelación TOTAL solo ocurre si: (a) las dos ondas tienen EXACTAMENTE la misma amplitud, (b) llegan EXACTAMENTE en contrafase (180°), y (c) tienen EXACTAMENTE la misma frecuencia. En la práctica, los parlantes no son idénticos, la sala agrega reflexiones, y la posición exacta de contrafase puede estar entre dos pasos. Lo que DEBERÍAS escuchar es una REDUCCIÓN DRAMÁTICA del volumen (10-20 dB menos), no silencio absoluto. Para mejorar: usá un tono puro de frecuencia baja (~200 Hz) donde la longitud de onda es más larga y los nodos son más anchos y fáciles de encontrar. |
| «En la Parte A, mi DAW no deja poner un delay de 0.5 ms — el mínimo es 1 ms.» | La mayoría de los DAWs permiten desplazar muestras (samples) manualmente. A 44.1 kHz, 1 muestra = 1/44100 ≈ 0.023 ms. Para 0.5 ms necesitás ~22 muestras. Buscá la función «nudge» o desplazamiento de región. Si tu DAW no lo permite, usá un plugin de delay con control fino (ej. Voxengo Sound Delay, gratuito). Alternativa: medí distancias reales. Δd = 0.17 m → Δt = 0.5 ms. Poné un parlante y un micrófono. La reflexión en una superficie a 8.5 cm adicionales del camino directo produce ese delay. |
| «En la Parte B, el SPL apenas varía entre posiciones. ¿Dónde está la onda estacionaria?» | Posibles causas: (a) las paredes del aula no son suficientemente rígidas y la mayor parte de la energía las ATRAVIESA en lugar de reflejarse (poca amplitud de la onda reflejada → interferencia débil); (b) hay muchas aberturas (puertas, ventanas) que rompen el paralelismo perfecto; (c) el ruido de fondo (tráfico, pasillo, ventilación) enmascara las variaciones de SPL. Solución: hacé la medición en la banda de 100-300 Hz donde las paredes típicas reflejan mejor. Usá un tono puro, no ruido. Medí en dB(C) o dB(Z), no dB(A), porque dB(A) atenúa los graves. |
| «Me cuesta distinguir el caso #1 del caso #4 en la Parte C. En los dos el sonido se vuelve 'hueco' al sumar a mono.» | Ambos involucran cancelación, pero por causas distintas: Caso #1: ∆d entre los dos micrófonos y la fuente. El mic del puente y el mic del mástil capturan la misma cuerda pero a distinta distancia → DIFERENCIA DE FASE. Caso #4: si los overheads están cableados con polaridad invertida entre sí, la cancelación al sumar a mono es de POLARIDAD (todo el espectro). Clave para distinguir: en el caso #1, si movés UN micrófono unos cm, el sonido mono MEJORA (porque cambia Δd y por lo tanto las frecuencias donde cancela). En el caso #4, mover los micrófonos NO cambia nada — el problema está en el cableado. |
| «¿Por qué el botón Ø se llama 'phase invert' si en realidad invierte polaridad?» | Porque es un error histórico de nomenclatura que la industria nunca corrigió. En los años 50-60, los ingenieros llamaban «phase» a lo que hoy llamamos polaridad. El nombre se quedó. En audio profesional, cuando alguien dice «invertile la fase a ese canal», técnicamente debería decir «invertile la POLARIDAD». Pero vas a escuchar «fase» el 95% del tiempo. Lo importante es que vos SEPAS la diferencia, aunque los demás usen mal el término. |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
