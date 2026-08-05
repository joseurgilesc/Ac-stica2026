# Guía Docente — Sesión 24: Modos de sala

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, calculadora modal en p5.js (o amroc / ANDE), REW (opcional, para demo), cinta métrica, sonómetro (app)  
**Referencia:** Everest & Pohlmann, Capítulo 13, pp. 242–275 (Modal Resonances — Axial/Tangential/Oblique Modes, Room Mode Formula, Mode Density and Distribution, Bonello Criterion, Room Proportions)

---

## Objetivo de la sesión

Que el estudiante distinga los tres tipos de modos de sala (axial, tangencial, oblicuo) según su trayectoria y energía relativa, calcule frecuencias modales con la fórmula tridimensional, evalúe la distribución modal de un recinto real mediante el criterio de Bonello, y recomiende proporciones de sala que minimicen la degeneración y acumulación modal en bajas frecuencias.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | «¿Por qué el bajo suena distinto en cada rincón?» — demostración con tono grave caminando por el aula |
| **Desarrollo** | 45 min | Teoría guiada: tipos de modos, fórmula tridimensional, densidad modal, criterio de Bonello, proporciones recomendadas |
| **Práctica** | 45 min | Cálculo de modos de una sala real + diagnóstico Bonello + propuesta de rediseño |
| **Cierre** | 15 min | «¿Mi dormitorio es un cubo?» — las proporciones importan + bitácora |

---

## 1. Apertura — «¿Por qué el bajo suena distinto en cada rincón?»

### Dinámica

1. Reproducir un tono grave (~50-80 Hz) con un parlante ubicado en una esquina del aula. Volumen moderado-alto.
2. Pedir a los estudiantes que se distribuyan por la sala. Que caminen LENTAMENTE de una esquina a otra, de una pared a otra, del centro a la esquina.
3. Pedir que en CADA posición anoten mentalmente: ¿el bajo suena FUERTE, MEDIO o DÉBIL?
4. Reunir al grupo y mapear rápido en la pizarra: «En la esquina NE, ¿cómo sonaba? ¿Y en el centro? ¿Y pegado a la pared del fondo?»
5. Revelar: «Lo que acaban de experimentar NO es un parlante defectuoso ni un problema de oídos. Son los MODOS DE SALA. La sala misma está 'afilando' ciertas frecuencias y 'tragándose' otras, y el patrón cambia según dónde estés parado. No es magia — es FÍSICA, y hoy vamos a aprender a PREDECIRLO.»

### Preguntas disparadoras

- «En la Sesión 23 vimos ondas estacionarias entre DOS paredes. ¿Qué pasa cuando tenemos TRES pares de paredes?» → Los modos dejan de ser unidimensionales y se vuelven tridimensionales.
- «¿Por qué los modos solo molestan en GRAVES y no en agudos?» → Porque a bajas frecuencias los modos están AISLADOS (uno cada varios Hz). A frecuencias altas hay TANTOS modos superpuestos que el oído ya no los distingue individualmente — el comportamiento se vuelve estadístico (campo difuso).

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Los tres tipos de modos** (15 min). Dibujar en la pizarra un prisma rectangular representando la sala. Modo axial (1,0,0): solo entre dos paredes, un eje → máxima energía. Modo tangencial (1,1,0): rebota en cuatro paredes → energía media. Modo oblicuo (1,1,1): zigzag tridimensional → energía mínima. Preguntar: «¿Cuál es el más problemático?» → El axial. No solo por su energía, sino porque involucra superficies paralelas — justo lo que abunda en construcciones rectangulares.

   > Insertar **Fig. 13-1** del Everest: representación de los tres tipos de modos.

2. **La fórmula tridimensional** (10 min). Escribir la fórmula completa y desglosarla: si dos n son cero → axial; si uno es cero → tangencial; si ninguno es cero → oblicuo. Calcular los primeros 10 modos para la sala 6×4×3 m.

   Señalar la coincidencia (2,0,0) = (0,0,1) = 57.2 Hz → degeneración modal. Preguntar: «¿Es grave que dos modos coincidan?» → SÍ. La energía a esa frecuencia se DUPLICA (+3 dB). Si coinciden tres modos: +5 dB. Si coinciden más: la sala «dispara» esa frecuencia de forma desproporcionada.

3. **Densidad modal y frecuencia de Schroeder** (10 min). Mostrar cómo la densidad de modos (cuántos modos por Hz) CRECE con la frecuencia: ∝ f² aproximadamente. Explicar que por debajo de f_S (~130 Hz para una sala de 72 m³), los modos son AUDIBLES como picos/valles individuales. Por encima, se funden. Esta es la razón fundamental por la que el tratamiento acústico en graves es DIFERENTE al de medios/agudos.

4. **Criterio de Bonello y proporciones** (10 min). Presentar el criterio: en cada banda de tercio de octava, el número de modos NUNCA debe disminuir. Si disminuye → «agujero modal». Mostrar cómo una mala proporción (ej. cubo 3×3×3 m) viola catastróficamente Bonello (un solo modo en la primera banda, degeneración triple). Mostrar proporciones recomendadas (Sepmeyer, Louden).

   > Insertar **Fig. 13-5** del Everest: distribución de modos vs. frecuencia.

---

## 3. Práctica — Diagnosticá tu sala

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 24 — Modos de sala

**Instrucciones:**

**Parte A — Calculá los modos de tu espacio (individual)**

1. Elegí UN espacio real (tu dormitorio, tu estudio, el living, el aula). Medí con cinta métrica sus tres dimensiones interiores (largo L, ancho W, alto H) en metros con precisión de ±5 cm.
2. Calculá TODOS los modos axiales, tangenciales y oblicuos desde 20 Hz hasta 300 Hz usando la fórmula:

    \[
    f_{n_x, n_y, n_z} = \frac{343}{2} \cdot \sqrt{\left(\frac{n_x}{L}\right)^2 + \left(\frac{n_y}{W}\right)^2 + \left(\frac{n_z}{H}\right)^2}
    \]

    donde \(n_x, n_y, n_z = 0, 1, 2, 3, \ldots\) (probá combinaciones hasta que f > 300 Hz).

3. Organizá los modos en una tabla. Para CADA modo, indicá: (n_x, n_y, n_z), tipo (axial / tangencial / oblicuo), frecuencia (Hz). Ordenalos por frecuencia ascendente.

   **Tip práctico**: podés usar [amroc — ANDE Room Mode Calculator](https://amcoustics.com/tools/amroc) o programar una planilla de Google Sheets con la fórmula. Si usás amroc, verificá que los resultados coincidan con TU cálculo manual para los primeros 5 modos — no confíes ciegamente en la herramienta sin validar.

4. Marcá con color ROJO los modos que estén DEGENERADOS (dos o más combinaciones (n_x, n_y, n_z) que den la MISMA frecuencia, con tolerancia de ±1 Hz).

5. Respondé:
   - ¿Cuál es la frecuencia del primer modo (la más baja)? ¿A qué eje corresponde?
   - ¿Hay modos degenerados? ¿En qué frecuencia(s)?
   - ¿Cuál es tu frecuencia de Schroeder \(f_S\)? (Usá RT60 estimado: 0.3 s para sala amoblada, 0.8 s para sala vacía, 1.5 s para sala muy reverberante.)

**Parte B — Aplicá el criterio de Bonello (individual)**

1. Con los modos de la Parte A, agrupalos en bandas de tercio de octava desde 20 Hz hasta 315 Hz:

    | Banda (Hz) | Frecuencias centrales de los modos en esta banda | Cantidad de modos |
    |---|---|---|
    | 20–25 | | |
    | 25–31.5 | | |
    | 31.5–40 | | |
    | 40–50 | | |
    | … (continuar hasta 250–315 Hz) | | |

2. Graficá: barras con cantidad de modos (eje Y) vs. banda de frecuencia (eje X).

3. Verificá el criterio de Bonello: ¿la cantidad de modos AUMENTA o se MANTIENE en cada banda respecto a la anterior? ¿Hay alguna banda donde DISMINUYE?

4. Respondé:
   - ¿Tu sala PASA o NO PASA el criterio de Bonello?
   - Si no pasa: ¿en qué banda(s) hay «agujero modal»? ¿Qué consecuencia auditiva tendría eso?
   - Si pasa: ¿hasta qué frecuencia tuviste que llegar para que la densidad modal sea «estable»?

**Parte C — Rediseño (individual)**

1. Suponé que tenés libertad para rediseñar tu espacio manteniendo el MISMO volumen que en la Parte A (V = L × W × H). Elegí UNA de las proporciones recomendadas (Sepmeyer A, Sepmeyer B o Louden) y calculá las nuevas dimensiones L', W', H' que preserven V.

   **Ayuda**: si H es fijo (por restricción constructiva), calculá el factor de escala \(k = H / H_{\text{referencia}}\) donde \(H_{\text{referencia}}\) es la altura de la proporción elegida (ej. 1.00 para Sepmeyer A). Luego \(L' = k \times L_{\text{referencia}}\), \(W' = k \times W_{\text{referencia}}\). Verificá que L' × W' × H ≈ V.

2. Calculá los primeros 20 modos del nuevo diseño y aplicá el criterio de Bonello. Compará:
   - ¿Mejoró la distribución modal respecto al diseño original?
   - ¿Desaparecieron las degeneraciones?
   - ¿El primer modo es más grave o más agudo que en el diseño original?

3. Reflexión final: «Si tuvieras que elegir entre tu espacio ACTUAL (con sus dimensiones reales) y el espacio REDISEÑADO (con proporciones ideales pero quizás menos práctico constructivamente), ¿cuál elegirías para mezclar? ¿Qué otros factores (además de los modos) influyen en esa decisión?»

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Cálculo de modos (Parte A) | ≥40 modos calculados (hasta 300 Hz), tipos correctamente clasificados, degeneraciones identificadas con ±1 Hz, f_S calculada con RT60 justificado | 20-39 modos, clasificación correcta pero faltan oblicuos/tangenciales, f_S calculada | < 20 modos o errores sistemáticos en la fórmula |
| Criterio de Bonello (Parte B) | Modos agrupados en TODAS las bandas hasta 315 Hz, gráfico de barras, verificación explícita de disminuciones, diagnóstico auditivo fundamentado | Agrupación correcta pero sin gráfico o sin diagnóstico auditivo | Bandas incorrectas o verificación errónea |
| Rediseño (Parte C) | Proporción recomendada aplicada, factor de escala correcto, verificación V ≈ V', 20 modos del nuevo diseño, comparación Bonello ANTES/DESPUÉS, reflexión sobre trade-offs | Rediseño correcto pero comparación superficial | Dimensiones no preservan V o proporción incorrecta |
| Calidad del análisis | Identifica degeneraciones como problema crítico, conecta Bonello con audibilidad de modos, relaciona f_S con estrategia de tratamiento | Análisis correcto pero sin conexiones conceptuales | Solo cálculos, sin interpretación |

---

## 4. Cierre — «¿Mi dormitorio es un cubo?»

### Discusión guiada (10 min)

- «Levanten la mano los que su espacio de la Parte A tiene al menos DOS dimensiones iguales o casi iguales (diferencia < 10 cm).» → La mayoría de dormitorios y estudios caseros tienen pares de dimensiones problemáticas. «No están solos. Casi NADIE construye su casa pensando en modos de sala. Por eso el tratamiento acústico EXISTE.»

- «El criterio de Bonello fue desarrollado por un ARGENTINO, Oscar Bonello, en 1981. Es usado mundialmente en diseño de estudios. Dato curioso: Bonello también fundó Solidyne, una empresa argentina que fabrica consolas y procesadores de audio usados en radios de todo el mundo. La acústica tiene (y tuvo) referentes latinoamericanos de primer nivel.»

- «Pregunta para pensar: si tu sala no pasa Bonello y no podés cambiar sus dimensiones, ¿qué hacés?» → (a) Trampas de graves sintonizadas a las frecuencias de los modos problemáticos, (b) absorber en las esquinas (donde TODOS los modos tienen antinodos de presión), (c) usar múltiples subwoofers distribuidos (técnica de Welti/Devantier) para excitar los modos de forma más uniforme, (d) posicionar monitores y oídos en puntos de baja presión modal. La lección no es «mi sala es mala, me rindo» sino «mi sala tiene ESTOS modos específicos, voy a tratarlos.»

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Una sala es un resonador tridimensional. Entre cada par de paredes paralelas pueden formarse ondas estacionarias cuyas frecuencias dependen de las dimensiones L, W, H según la fórmula: \(f_{n_x,n_y,n_z} = (c/2) \cdot \sqrt{(n_x/L)^2 + (n_y/W)^2 + (n_z/H)^2}\). Los modos AXIALES (un solo eje, ej. n_x,0,0) tienen la mayor energía porque pierden menos por absorción. Los TANGENCIALES (dos ejes, ej. n_x,n_y,0) tienen energía media. Los OBLICUOS (tres ejes) tienen la menor energía. A bajas frecuencias, los modos están aislados y son audibles como picos y valles individuales en la respuesta. A frecuencias altas, la densidad modal es tan alta que el comportamiento se vuelve estadístico (campo difuso). La frecuencia de Schroeder \(f_S \approx 2000 \sqrt{RT60/V}\) marca la transición. El criterio de Bonello establece que una buena distribución modal requiere que el número de modos en cada banda de tercio de octava NUNCA disminuya respecto a la banda anterior. Proporciones como 1.00:1.40:1.90 (Sepmeyer) o 1.00:1.60:2.33 (Louden) minimizan la degeneración y acumulación modal. Si la sala ya está construida y tiene mala distribución modal, el tratamiento con trampas de graves sintonizadas a las frecuencias problemáticas es la solución principal."*

---

## Recursos adicionales para el docente

- [amroc — ANDE Room Mode Calculator](https://amcoustics.com/tools/amroc) — calculadora modal online con visualización 3D de la sala. Ingresás dimensiones y te muestra TODOS los modos hasta la frecuencia que elijas, con gráfico de distribución y criterio de Bonello automático
- [Calculadora modal en p5.js](https://editor.p5js.org/) — sketch con sliders para L, W, H. Muestra modos como líneas verticales en un gráfico de frecuencia, actualizado en tiempo real al mover las dimensiones
- [Bob Golds — Absorption Coefficients](https://www.acoustic.ua/st/832) — tabla de coeficientes de absorción por material y frecuencia. Necesaria para el cálculo de RT60 de la Parte C
- [REW — Room EQ Wizard](https://www.roomeqwizard.com/) — medir la respuesta real del aula. El espectro de baja frecuencia mostrará los picos modales. Comparar frecuencias MEDIDAS (REW) vs. CALCULADAS (fórmula)
- [Video: Room Modes Explained — Audio University](https://www.youtube.com/watch?v=wqK_pIcdUB4) — explicación visual de los modos axiales, tangenciales y oblicuos con animaciones 3D
- [Artículo: Bonello Criterion — Acoustic Fields](https://www.acousticfields.com/bonello-criterion/) — explicación detallada del criterio con ejemplos de salas que pasan y no pasan
- [ISO 3382-1:2009 — Measurement of room acoustic parameters](https://www.iso.org/standard/40979.html) — norma internacional para medición de parámetros acústicos en salas. Referencia para RT60, EDT, Dc, etc.

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «Calculé los modos de mi sala y la mayoría están por debajo de 45 Hz. ¿Eso es malo? ¿Los escucho?» | Los modos por debajo de ~35-40 Hz son problemáticos porque la mayoría de los monitores de estudio NO los reproducen (su respuesta cae rápido debajo de 40-50 Hz). Si el primer modo de tu sala está en 28 Hz pero tus monitores no bajan de 45 Hz, ¡ese modo NUNCA se excita! No es un problema porque no hay energía para activarlo. Los modos que IMPORTA tratar son los que están DENTRO del rango de operación de tus monitores. Si tus monitores llegan hasta 45 Hz (−3 dB), enfocate en modos de 45-300 Hz. Para los modos infra-sónicos (< 35 Hz): no gastes plata en trampas — no se activan con monitores de campo cercano. |
| «En mi sala hay 10 modos entre 60 y 70 Hz. ¿Eso es normal?» | Depende del volumen. En una sala MUY pequeña (ej. 3×2.5×2.4 m = 18 m³), la densidad modal en graves es BAJÍSIMA. Podés tener solo 2 o 3 modos en todo el rango 60-70 Hz. Si tenés 10 modos en esa banda, es porque tu sala es GRANDE (V grande → más modos) o porque estás incluyendo armónicos altos (n_x, n_y, n_z grandes) que en la práctica tienen poca energía. Enfocate en modos con n ≤ 3 para cada eje — los modos de orden alto tienen amplitudes mucho menores porque la absorción en cada reflexión los atenúa. |
| «Hice el cálculo de modos y TODOS me dan frecuencias distintas a las que mide REW. ¿Fórmula equivocada?» | La fórmula de modos ASUME: (a) paredes PERFECTAMENTE rígidas (impedancia infinita), (b) geometría PERFECTAMENTE rectangular, (c) sin muebles, (d) sin aberturas, (e) velocidad del sonido fija a 343 m/s. En la realidad: las paredes TIENEN flexibilidad (bajan la frecuencia modal ~5-15%), los muebles modifican el volumen efectivo, las puertas/ventanas rompen el paralelismo, y c varía con temperatura y humedad. Las discrepancias de hasta ~10% entre cálculo y medición son NORMALES. La fórmula te da una PREDICCIÓN — la medición te da la REALIDAD. Creéle a la medición. |
| «No entiendo por qué la densidad modal crece con f² o f³. ¿No debería ser lineal?» | Imaginá el «espacio de números de modo» (n_x, n_y, n_z) como una rejilla 3D. Cada punto de la rejilla con coordenadas enteras no negativas representa un modo. La frecuencia f es proporcional a la DISTANCIA del punto al origen en esa rejilla. La cantidad de puntos dentro de una esfera de radio R (proporcional a f) es ~(4/3)πR³ ∝ f³. Por eso la densidad CRECE con el volumen de esa esfera. No es intuitivo a primera vista, pero sale directo de geometría 3D. |
| «¿Por qué el criterio de Bonello usa bandas de TERCIO DE OCTAVA y no bandas lineales?» | Porque el oído humano percibe la frecuencia LOGARÍTMICAMENTE, no linealmente. Una diferencia de 10 Hz entre 30 y 40 Hz es AUDITIVAMENTE enorme (más de una tercera mayor). La misma diferencia de 10 Hz entre 1,000 y 1,010 Hz es INAUDIBLE. Las bandas de tercio de octava escalan logarítmicamente → reflejan cómo ESCUCHAMOS. Un criterio de distribución modal que use bandas lineales (ej. cada 10 Hz) no tendría sentido perceptual — castigaría bandas graves (donde 10 Hz es mucho) y premiaría bandas agudas (donde 10 Hz es nada). |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
