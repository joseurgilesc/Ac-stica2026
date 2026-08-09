# Sesión 2: Naturaleza física del sonido

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia (ciclos por segundo) | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud, distancia | — |
    | <a id="cm"></a>**cm** | Centímetro | Longitud | 1 cm = 0.01 m |
    | <a id="ft"></a>**ft** | Pie (*foot*) | Longitud | 1 ft ≈ 0.3048 m |
    | <a id="in"></a>**in** | Pulgada (*inch*) | Longitud | 1 in ≈ 2.54 cm |
    | <a id="mi"></a>**mi** | Milla (*mile*) | Distancia | 1 mi ≈ 1.609 km |
    | <a id="ms"></a>**m/s** | Metro por segundo | Velocidad | — |
    | <a id="fts"></a>**ft/s** | Pie por segundo | Velocidad | 1 ft/s ≈ 0.3048 m/s |
    | <a id="mih"></a>**mi/h** | Milla por hora | Velocidad | 1 mi/h ≈ 1.609 km/h |
    | <a id="s"></a>**s** | Segundo | Tiempo | — |
    | <a id="mss"></a>**ms** | Milisegundo | Tiempo | 1 ms = 0.001 s |
    | <a id="pa"></a>**Pa** | Pascal | Presión | 1 Pa = 1 N/m² |
    | <a id="upa"></a>**µPa** | Micropascal | Presión sonora (umbral audición) | 1 µPa = 10⁻⁶ Pa = 0 dB SPL |
    | <a id="psi"></a>**lb/in²** (psi) | Libra por pulgada cuadrada | Presión atmosférica | ~14.7 psi = 101,325 Pa |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="rad"></a>**rad** | Radián | Ángulo, fase | 2π rad = 360° |
    | <a id="deg"></a>**°** | Grado | Ángulo, fase | 360° = 1 ciclo |
    | <a id="lambda"></a>**λ** (lambda) | Longitud de onda | Distancia por ciclo | λ = v / f |
    | <a id="T"></a>**T** | Período | Duración de un ciclo | T = 1 / f |
    | <a id="phi"></a>**φ** (phi) | Fase inicial | Desplazamiento temporal | En radianes o grados |
    | <a id="A"></a>**A** | Amplitud | Máximo desplazamiento | — |
    | <a id="f"></a>**f** | Frecuencia | Ciclos por segundo | f = 1 / T |
    | <a id="v"></a>**v** | Velocidad del sonido | Rapidez de propagación | ~344 m/s en aire a 20°C |

???+ note "El sonido como onda mecánica"

    El sonido puede entenderse de dos maneras complementarias (Everest & Pohlmann, 2009, p. 1):

    | Perspectiva | Definición | Campo |
    |---|---|---|
    | **Estímulo físico** | Onda que viaja a través de un medio elástico | Física / Acústica |
    | **Sensación** | Excitación del mecanismo auditivo que produce percepción | Psicoacústica |

    !!! info "Frecuencia ≠ Tono"
        La **frecuencia** es objetiva (se mide en Hz). El **tono** (*pitch*) es subjetivo (cómo el oído la percibe). *"We cannot equate frequency and pitch, but they are analogous."*

    Para que un medio propague sonido, necesita dos propiedades: **elasticidad** (restaura la posición) e **inercia** (resiste el cambio). Sin ambas, no hay oscilación posible.

???+ note "Movimiento armónico simple y la onda sinusoidal"

    Una masa en un resorte que oscila arriba y abajo describe un **movimiento armónico simple**. Si se registra su posición en el tiempo, se obtiene una **onda sinusoidal** — la forma de onda más pura y fundamental en acústica.

    Una revolución completa equivale a 360° — un ciclo. La onda sinusoidal es al sonido lo que el círculo a la geometría: el elemento básico del que todo se compone (Fourier).

    [🎯 **Abrir simulación interactiva — Figuras 1-1 y 1-2**](../../../simulacion/mas.html){ .md-button }

???+ note "Propagación: compresión y rarefacción"

    Las partículas de aire **no viajan con la onda**: vibran localmente mientras la perturbación se propaga. El movimiento alternado crea:

    - **Compresión (C)**: moléculas agrupadas → presión superior a la atmosférica (~14.7 lb/in²)
    - **Rarefacción (R)**: moléculas separadas → presión inferior a la atmosférica

    !!! warning "Escala minúscula"
        El sonido más tenue detectable (20 µPa) es ~**5,000 millones de veces menor** que la presión atmosférica. El oído humano es extraordinariamente sensible.

???+ note "Movimiento de partículas: ondas longitudinales"

    Existen tres tipos de movimiento ondulatorio, pero el sonido en el aire es una **onda longitudinal**: las partículas vibran en la misma dirección en que viaja la onda. Su desplazamiento máximo es de apenas unas diezmilésimas de pulgada, incluso para sonidos fuertes.

???+ note "Velocidad del sonido"

    \[
    \boxed{v \approx 344\text{ m/s} \;\approx\; 1,130\text{ ft/s} \;\approx\; 770\text{ mi/h}}
    \]

    Donde \(v\) es la velocidad del sonido en el aire a 20°C y presión atmosférica normal.

    | Medio | Velocidad | vs. Aire |
    |---|---|---|
    | Aire (20°C) | 344 m/s | 1× |
    | Agua dulce | ~1,490 m/s | ~4.3× |
    | Acero | ~5,090 m/s | ~14.8× |

    La velocidad del sonido aumenta con la temperatura (~\(+0.6\text{ m/s}\) por °C), con la humedad (ligeramente), y con la densidad del medio. No depende de la frecuencia ni de la intensidad.

???+ note "Amplitud, frecuencia, fase y longitud de onda"

    Una onda sinusoidal se describe matemáticamente como:

    \[
    y(t) = A \cdot \sin(2\pi f t + \phi)
    \]

    | Símbolo | Nombre | Unidad | Significado físico |
    |---|---|---|---|
    | \(y(t)\) | Desplazamiento | m | Posición de la partícula en el instante \(t\) |
    | \(A\) | Amplitud | m | Máximo desplazamiento desde el equilibrio |
    | \(f\) | Frecuencia | Hz (1/s) | Ciclos por segundo — determina el tono |
    | \(t\) | Tiempo | s | Instante de observación |
    | \(\phi\) | Fase inicial | rad | Desplazamiento horizontal de la onda (0 a \(2\pi\)) |
    | \(T = 1/f\) | Período | s | Duración de un ciclo completo |

    **La relación fundamental de la acústica:**

    \[
    \lambda = \frac{v}{f}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(\lambda\) | Longitud de onda | m | Distancia que recorre la onda en un ciclo |
    | \(v\) | Velocidad del sonido | m/s | ~344 m/s en aire a 20°C |
    | \(f\) | Frecuencia | Hz | Ciclos por segundo |

    | Frecuencia | Longitud de onda (aire, 20°C) | Referencia musical |
    |---|---|---|
    | 20 Hz | \(\lambda \approx 17.2\) m | Límite inferior audible |
    | 50 Hz | \(\lambda \approx 6.88\) m | Subgrave |
    | 100 Hz | \(\lambda \approx 3.44\) m | Grave de bajo |
    | 440 Hz | \(\lambda \approx 0.78\) m | **La central (A4)** |
    | 1,000 Hz | \(\lambda \approx 0.34\) m | Referencia |
    | 4,000 Hz | \(\lambda \approx 8.6\) cm | Presencia vocal |
    | 10,000 Hz | \(\lambda \approx 3.4\) cm | Brillo / aire |
    | 20,000 Hz | \(\lambda \approx 1.7\) cm | Límite superior audible |

    !!! tip "¿Por qué importa \(\lambda\)?"
        Si \(\lambda\) es mucho mayor que un obstáculo, el sonido lo **rodea** (difracción). Si \(\lambda\) es mucho menor, el sonido se **refleja**. Esto explica por qué los graves (\(\lambda\) grande) son difíciles de controlar en recintos pequeños.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 1, pp. 1–16.*
