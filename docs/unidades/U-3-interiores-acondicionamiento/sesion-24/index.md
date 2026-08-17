# Sesión 24: Modos de sala

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud | — |
    | <a id="m2"></a>**m²** | Metro cuadrado | Superficie | — |
    | <a id="m3"></a>**m³** | Metro cúbico | Volumen | — |
    | <a id="s"></a>**s** | Segundo | Tiempo | — |
    | <a id="c"></a>**c** | Velocidad del sonido | Velocidad de propagación | ~343 m/s (20°C) |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="l"></a>**λ** (lambda) | Longitud de onda | Distancia que recorre un ciclo | λ = c/f, en m |
    | <a id="schroeder"></a>**f_S** | Frecuencia de Schroeder | Transición entre comportamiento modal y estadístico | \(f_S \approx 2000 \cdot \sqrt{RT60 / V}\) |
    | <a id="l-w-d"></a>**L, W, H** | Dimensiones de la sala | Largo, ancho, alto | En m |
    | <a id="n"></a>**n_x, n_y, n_z** | Números de modo | Cuántas medias longitudes de onda caben en cada eje | Enteros no negativos (0, 1, 2, 3…) |

???+ note "¿Qué es un modo de sala?"

    Una **sala** no es un espacio vacío que «contiene» sonido — es un **resonador tridimensional**. Así como una cuerda de guitarra tiene frecuencias a las que vibra naturalmente, una sala tiene frecuencias a las que RESUENA. Esas frecuencias se llaman **modos de sala** (room modes) o **resonancias modales** (Everest & Pohlmann, 2009, Cap. 13, pp. 242–275).

    ### El problema físico

    Entre cada par de paredes paralelas pueden formarse ondas estacionarias (Sesión 23). Pero una sala tiene TRES pares de paredes (x, y, z), más combinaciones entre ellas. El resultado: un conjunto de frecuencias de resonancia que dependen de las DIMENSIONES de la sala.

    **Analogía**: una sala es como TRES cuerdas de guitarra perpendiculares entre sí, todas sonando al mismo tiempo, cada una con sus propios armónicos, y con acoples entre ellas. El resultado es complejo, pero predecible.

    ### Los tres tipos de modos

    | Tipo | ¿Qué involucra? | ¿Cuántos ejes usa? | Notación | Energía relativa | Ejemplo visual |
    |---|---|---|---|---|---|
    | **Axial** | Solo UN par de paredes paralelas | 1 eje (x, y, o z) | \(n_x, 0, 0\) | **Máxima** (~100%) | Como la vibración de un tubo: nodos en las dos paredes, antinodos entre ellas |
    | **Tangencial** | DOS pares de paredes (esquinas y superficies) | 2 ejes | \(n_x, n_y, 0\) | **Media** (~50%) | El sonido «rebota» en espiral entre 4 paredes (sin tocar piso ni techo) |
    | **Oblicuo** | LOS TRES pares de paredes | 3 ejes | \(n_x, n_y, n_z\) | **Mínima** (~25%) | El sonido viaja en zigzag tridimensional, rebotando en las 6 superficies |

    !!! info "¿Por qué los modos axiales son los más importantes?"
        Porque involucran solo DOS reflexiones (ida y vuelta entre dos paredes paralelas) y por lo tanto pierden MENOS energía por absorción en cada ciclo. Un modo oblicuo, en cambio, rebota en 6 superficies por ciclo → más absorción → se amortigua más rápido. En la práctica, los modos axiales son los que DOMINAN la respuesta en graves de cualquier sala. Si solo corregís los axiales, ya resolviste el 70% del problema.

    > Insertar **Fig. 13-1** del Everest: representación tridimensional de los tres tipos de modos — axial (entre dos paredes), tangencial (entre cuatro paredes), oblicuo (entre las seis superficies). Incluir las trayectorias del rayo sonoro para cada tipo.

    [🎛️ **Abrir simulación interactiva — Explorador de modos de sala**](../../../simulacion/modos-sala.html){ .md-button }

    Cambia las dimensiones y el modo (nₓ, n_y, n_z). Observa el mapa de presión con sus nodos y antinodos, mueve la fuente y el oyente, y escucha el tono correspondiente.

???+ note "La fórmula de los modos de sala"

    La frecuencia de cualquier modo (axial, tangencial u oblicuo) en una sala rectangular está dada por:

    \[
    \boxed{f_{n_x, n_y, n_z} = \frac{c}{2} \cdot \sqrt{\left(\frac{n_x}{L}\right)^2 + \left(\frac{n_y}{W}\right)^2 + \left(\frac{n_z}{H}\right)^2}}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(f_{n_x, n_y, n_z}\) | Frecuencia del modo | Hz | Frecuencia de resonancia para la combinación \((n_x, n_y, n_z)\) |
    | \(c\) | Velocidad del sonido | m/s | ~343 m/s a 20°C |
    | \(L, W, H\) | Dimensiones de la sala | m | Largo (length), ancho (width), alto (height) |
    | \(n_x, n_y, n_z\) | Números de modo | — | Enteros no negativos (0, 1, 2, 3…). Al menos uno debe ser > 0 (si los tres son 0, f = 0 → no es un modo) |

    ### Cómo leer la fórmula

    - **Si \(n_y = 0\) y \(n_z = 0\)**: modo **axial en x**. La fórmula se reduce a \(f = c/(2L) \cdot n_x\). Solo involucra la distancia entre dos paredes.
    - **Si \(n_z = 0\)**: modo **tangencial en xy**. Involucra dos pares de paredes.
    - **Si los tres \(n > 0\)**: modo **oblicuo**. Involucra las seis superficies.

    ### Ejemplo: sala de control 6 m × 4 m × 3 m

    Calculemos los primeros modos axiales, tangenciales y oblicuos:

    | \(n_x\) | \(n_y\) | \(n_z\) | Tipo | Frecuencia (Hz) | Cálculo |
    |---|---|---|---|---|---|
    | 1 | 0 | 0 | Axial (eje x) | 28.6 | \(c/(2\times 6)\) |
    | 0 | 1 | 0 | Axial (eje y) | 42.9 | \(c/(2\times 4)\) |
    | 0 | 0 | 1 | Axial (eje z) | 57.2 | \(c/(2\times 3)\) |
    | 2 | 0 | 0 | Axial (eje x) | 57.2 | \(2c/(2\times 6)\) |
    | 1 | 1 | 0 | Tangencial (xy) | 51.5 | \(\frac{c}{2}\sqrt{(1/6)^2 + (1/4)^2}\) |
    | 0 | 1 | 1 | Tangencial (yz) | 71.3 | \(\frac{c}{2}\sqrt{(1/4)^2 + (1/3)^2}\) |
    | 1 | 0 | 1 | Tangencial (xz) | 64.1 | \(\frac{c}{2}\sqrt{(1/6)^2 + (1/3)^2}\) |
    | 1 | 1 | 1 | Oblicuo (xyz) | 70.0 | \(\frac{c}{2}\sqrt{(1/6)^2 + (1/4)^2 + (1/3)^2}\) |

    !!! warning "¡El modo (2,0,0) = 57.2 Hz y el modo (0,0,1) = 57.2 Hz son IGUALES!"
        Cuando dos modos distintos tienen la MISMA frecuencia, se dice que hay **degeneración modal**. La energía a esa frecuencia se ACUMULA porque DOS modos están resonando al mismo tiempo. Esto produce un pico de +6 dB en esa frecuencia — el doble de grave que un modo aislado. Es uno de los peores escenarios acústicos y se evita con proporciones de sala adecuadas (ver criterio de Bonello más abajo).

    > Insertar **Fig. 13-5** del Everest: gráfico de distribución de modos en función de la frecuencia para una sala de dimensiones típicas. Eje X: frecuencia (Hz), eje Y: cada modo representado como una línea vertical. Señalar la acumulación en graves (muchas líneas juntas) vs. la dispersión en agudos.

???+ note "Distribución modal y criterio de Bonello"

    Las frecuencias modales NO se distribuyen uniformemente. A bajas frecuencias, los modos están MUY separados (podés tener un modo en 28 Hz y el siguiente en 43 Hz: 15 Hz de separación). A frecuencias altas, la DENSIDAD de modos crece RÁPIDAMENTE con la frecuencia (a 1 kHz, una sala de 72 m³ tiene cientos de modos solapados).

    ### Densidad modal: ¿cuántos modos hay a cada frecuencia?

    La cantidad de modos por debajo de una frecuencia \(f\) se aproxima con:

    \[
    N(f) \approx \frac{4\pi V}{3c^3} \cdot f^3 + \frac{\pi S}{4c^2} \cdot f^2 + \frac{L_{\text{total}}}{8c} \cdot f
    \]

    | Término | Significado |
    |---|---|
    | \(\frac{4\pi V}{3c^3} f^3\) | Contribución de los modos OBLICUOS (domina a altas frecuencias, crece con f³) |
    | \(\frac{\pi S}{4c^2} f^2\) | Contribución de los modos TANGENCIALES (crece con f²) |
    | \(\frac{L_{\text{total}}}{8c} f\) | Contribución de los modos AXIALES (crece linealmente con f) |

    La densidad modal \(dN/df\) (modos por Hz) es la DERIVADA de \(N(f)\) — nos dice CUÁNTOS modos nuevos aparecen por cada Hz adicional. Para la sala de 72 m³ a 100 Hz: ~2 modos/Hz. A 1 kHz: ~200 modos/Hz.

    ### El criterio de Bonello

    Oscar Bonello (ingeniero argentino, 1981) propuso un criterio para evaluar si una sala tiene una distribución modal «saludable» en bajas frecuencias:

    > **Criterio de Bonello**: «El número de modos en cada banda de tercio de octava debe ser IGUAL O MAYOR que en la banda anterior, SIN disminuciones. La frecuencia del primer modo debe ser lo más baja posible.»

    En criollo: si en la banda de 40-50 Hz tenés 3 modos y en la banda de 50-63 Hz tenés solo 2, la sala VIOLA el criterio de Bonello. Esa «caída» en la densidad modal produce una banda de frecuencia donde hay poca energía modal — la sala va a sonar «hueca» en ese rango.

    | Banda (Hz) | Bueno (pasa) | Malo (no pasa) |
    |---|---|---|
    | 20-25 | 1 | 0 |
    | 25-31.5 | 2 (≥1 ✓) | 1 (≥1 ✓) |
    | 31.5-40 | 3 (≥2 ✓) | 1 (≥1 ✓) |
    | 40-50 | 4 (≥3 ✓) | 3 (≥1 ✓) |
    | 50-63 | 5 (≥4 ✓) | 2 (≥3 ✗ — disminuye) |

    !!! tip "Cómo usar Bonello en la práctica"
        Calculás los modos de tu sala (hasta ~300 Hz), los agrupás en bandas de tercio de octava, y verificás que el conteo NUNCA baje. Si baja: tu sala tiene un «agujero modal». La solución es cambiar las proporciones (si estás diseñando desde cero) o tratar agresivamente los modos problemáticos con trampas de graves sintonizadas (si la sala ya está construida).

???+ note "¿Cuándo los modos dejan de ser un problema? La frecuencia de Schroeder"

    Por debajo de cierta frecuencia, el sonido en una sala está DOMINADO por modos individuales (comportamiento modal). Por encima, los modos son tantos y tan cercanos que se superponen y el comportamiento se vuelve ESTADÍSTICO (campo difuso). La transición la marca la **frecuencia de Schroeder**:

    \[
    \boxed{f_S \approx 2000 \cdot \sqrt{\frac{RT60}{V}}}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(f_S\) | Frecuencia de Schroeder | Hz | Por debajo de f_S, los modos individuales dominan la respuesta. Por encima, el campo es difuso |
    | \(RT60\) | Tiempo de reverberación | s | RT60 promedio de la sala (típicamente en bandas de 500 Hz - 1 kHz) |
    | \(V\) | Volumen de la sala | m³ | Volumen interior |

    **Ejemplo**: sala de control 6 m × 4 m × 3 m → V = 72 m³, RT60 ≈ 0.3 s:

    \[
    f_S = 2000 \cdot \sqrt{0.3 / 72} = 2000 \cdot \sqrt{0.00417} = 2000 \times 0.0645 = \mathbf{129\ \text{Hz}}
    \]

    **Interpretación**: por debajo de ~130 Hz, CADA MODO ES AUDIBLE COMO UN «PICO» O «VALLE» INDIVIDUAL en la respuesta en frecuencia. Por encima, los modos se funden y el comportamiento es difuso. Esto explica por qué el tratamiento acústico en GRAVES (< 150 Hz) es cualitativamente DISTINTO al tratamiento en medios y agudos: estás lidiando con fenómenos modales, no con campo difuso.

???+ note "Dimensiones problemáticas: ¿cuáles son las peores proporciones?"

    No todas las salas son igual de problemáticas. Las dimensiones que producen ACUMULACIONES de modos (varios modos a la misma frecuencia o en bandas muy estrechas) son las peores para producción musical.

    ### Proporciones a EVITAR

    | Proporción (L:W:H) | Problema |
    |---|---|
    | **1:1:1** (cubo perfecto) | LOS TRES modos axiales fundamentales coinciden en la MISMA frecuencia. Degeneración triple → pico de +9 dB. Pesadilla acústica absoluta |
    | **1:1:2** | Dos ejes idénticos → degeneración doble en TODOS los armónicos de esos dos ejes |
    | **1:2:2** | Similar al anterior. El eje más largo es múltiplo exacto de los cortos |
    | **Múltiplos enteros** (ej. 3:4:6) | Los armónicos de los ejes cortos coinciden con los modos fundamentales de los largos → acumulación periódica |
    | **2:3:4** (típica de muchas construcciones) | Mejor que las anteriores, pero el armónico 2 de 3 m (1.5 m → 114 Hz) coincide con el modo fundamental real |

    ### Proporciones RECOMENDADAS

    | Proporción (L:W:H) | Referencia | Característica |
    |---|---|---|
    | **1.00 : 1.40 : 1.90** | Sepmeyer (1965) — mejor ratio A | Buena dispersión en todo el espectro. Muy usada en estudios profesionales |
    | **1.00 : 1.28 : 1.54** | Sepmeyer — ratio B | Similar a la A, ligeramente más compacta |
    | **1.00 : 1.60 : 2.33** | Louden (1971) — mejor ratio global | Considerada por muchos como la MEJOR distribución modal en bajas frecuencias. Sala más alargada |
    | **1.00 : 1.50 : 2.10** | Bolt (1946), área óptima | Buena. Fácil de construir porque se aproxima a dimensiones estándar |

    ### ¿Cómo se usan?

    1. Fijás UNA dimensión (ej. altura H = 3 m por restricción constructiva).
    2. Calculás las otras dos: L = 2.33 × H = 6.99 m, W = 1.60 × H = 4.80 m (proporción Louden).
    3. Calculás TODOS los modos hasta 300 Hz y verificás el criterio de Bonello.
    4. Si hay acumulaciones, ajustás fino (±10 cm) y recalculás.

    !!! tip "Si tu sala YA está construida y no podés cambiar sus dimensiones"
        No todo está perdido. Las proporciones importan más en el DISEÑO que en la CORRECCIÓN. Si tu sala tiene dimensiones problemáticas, podés:
        1. Usar trampas de graves sintonizadas a las frecuencias de los modos problemáticos (helmholtz, panel resonante).
        2. Romper el paralelismo con paneles inclinados o difusores (reduce la eficiencia del modo, aunque no lo elimina).
        3. Posicionar monitores y oídos en puntos donde los modos problemáticos tengan MENOS presión (evitar antinodos).
        La regla de oro: **más vale una sala imperfecta bien medida y tratada que una sala 'perfecta' en papel pero nunca verificada.**

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 13, pp. 242–275 (Modal Resonances — Axial/Tangential/Oblique Modes, Room Mode Formula, Mode Density, Schroeder Frequency, Bonello Criterion, Room Proportions).*
