# Sesión 3: Velocidad de propagación del sonido

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
    | <a id="mi"></a>**mi** | Milla (*mile*) | Distancia | 1 mi ≈ 1.609 km |
    | <a id="ms"></a>**m/s** | Metro por segundo | Velocidad | — |
    | <a id="fts"></a>**ft/s** | Pie por segundo | Velocidad | 1 ft/s ≈ 0.3048 m/s |
    | <a id="s"></a>**s** | Segundo | Tiempo | — |
    | <a id="pa"></a>**Pa** | Pascal | Presión | 1 Pa = 1 N/m² |
    | <a id="psi"></a>**lb/in²** (psi) | Libra por pulgada cuadrada | Presión atmosférica | ~14.7 psi = 101,325 Pa |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="deg"></a>**°** | Grado | Ángulo, fase | 360° = 1 ciclo |
    | <a id="celsius"></a>**°C** | Grado Celsius | Temperatura | 0°C = 273.15 K |
    | <a id="lambda"></a>**λ** (lambda) | Longitud de onda | Distancia por ciclo | λ = v / f |
    | <a id="f"></a>**f** | Frecuencia | Ciclos por segundo | f = 1 / T |
    | <a id="v"></a>**v** | Velocidad del sonido | Rapidez de propagación | ~344 m/s en aire a 20°C |
    | <a id="A"></a>**A** | Amplitud | Máximo desplazamiento | — |
    | <a id="T"></a>**T** | Período | Duración de un ciclo | T = 1 / f |

???+ note "La velocidad del sonido en el aire"

    La velocidad del sonido en el aire a 20°C y presión atmosférica normal es:

    \[
    \boxed{v \approx 344\text{ m/s} \;\approx\; 1,130\text{ ft/s} \;\approx\; 770\text{ mi/h}}
    \]

    Donde \(v\) es la velocidad de propagación de la onda sonora en el aire.

    Para ponerlo en perspectiva:

    | Referencia | Velocidad | Mach* |
    |---|---|---|
    | Sonido en aire (20°C) | 344 [m/s](#ms) ≈ 770 [mi/h](#mi) | Mach 1.0 |
    | Boeing 787 (crucero) | ~561 [mi/h](#mi) | Mach 0.85 |
    | Velocidad de la luz | ~670,616,629 [mi/h](#mi) | — |

    *Mach mide la velocidad relativa a la del sonido en ese medio.

    !!! info "Velocidad del sonido ≠ velocidad de partícula"
        La **velocidad del sonido** (\(v\)) determina qué tan rápido viaja la energía sonora a través de un medio — es constante para condiciones dadas. La **velocidad de partícula** es el movimiento local de las moléculas de aire vibrando — determinado por la intensidad (volumen) del sonido. Para un sonido fuerte, la velocidad de partícula es menor a 0.5 in/s.

    La velocidad del sonido en el rango audible **no depende** apreciablemente de:
    - La frecuencia del sonido
    - La intensidad (volumen)
    - Cambios en la presión atmosférica

???+ note "Propagación: compresión y rarefacción"

    [🎮 **Abrir simulación interactiva — Figuras 1-5 y 1-6**](../../../simulacion/){ .md-button }

    Las moléculas de aire se agrupan en zonas de **compresión (C)** y se separan en zonas de **rarefacción (R)**. La simulación muestra ambos paneles: la distribución de partículas y la onda de presión sonora, con las líneas punteadas que conectan las crestas con las compresiones y los valles con las rarefacciones.

    La onda sonora se propaga por **transferencia de momento** de una partícula a otra. Cada molécula vibra localmente; lo que viaja es la perturbación, no la materia.

???+ note "Velocidad del sonido en diferentes medios"

    El sonido viaja más rápido en medios más densos porque las moléculas están más próximas y transfieren energía con mayor eficiencia:

    | Medio | Velocidad | vs. Aire (20°C) |
    |---|---|---|
    | Aire (20°C) | 344 [m/s](#ms) | 1× |
    | Aire (0°C) | 331 [m/s](#ms) | 0.96× |
    | Agua dulce | ~1,490 [m/s](#ms) | ~4.3× |
    | Agua de mar | ~1,530 [m/s](#ms) | ~4.4× |
    | Madera (pino) | ~3,300 [m/s](#ms) | ~9.6× |
    | Acero | ~5,090 [m/s](#ms) | ~14.8× |
    | Vidrio | ~5,200 [m/s](#ms) | ~15.1× |
    | Aluminio | ~6,320 [m/s](#ms) | ~18.4× |

    !!! tip "Experimento mental"
        Si golpeás un riel de tren con una piedra, escucharás **dos** sonidos: primero el que viaja por el acero (~5,090 [m/s](#ms)), y una fracción de segundo después el que viaja por el aire (~344 [m/s](#ms)). El sonido en el acero llega ~15 veces más rápido.

???+ note "Efecto de la temperatura sobre la velocidad del sonido"

    La velocidad del sonido en el aire **aumenta con la temperatura**. Aproximadamente:

    \[
    v \approx 331.3 + (0.606 \cdot T) \quad \text{[m/s]}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(v\) | Velocidad del sonido | [m/s](#ms) | Velocidad de propagación en el aire |
    | \(T\) | Temperatura | [°C](#celsius) | Temperatura del aire |
    | 331.3 | Velocidad a 0°C | [m/s](#ms) | Velocidad base de referencia |
    | 0.606 | Coeficiente térmico | (m/s)/°C | Incremento por cada grado Celsius |

    Esto equivale a aproximadamente **+0.6 [m/s](#ms) por cada °C** (~1.1 [ft/s](#fts) por °F).

    La **humedad** también afecta la velocidad: el aire más húmedo es menos denso (el vapor de agua desplaza moléculas de nitrógeno y oxígeno, que son más pesadas), por lo que el sonido viaja ligeramente más rápido. El efecto es pequeño comparado con la temperatura.

???+ note "Relación fundamental: velocidad, frecuencia y longitud de onda"

    La ecuación más importante en acústica aplicada:

    \[
    \lambda = \frac{v}{f}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(\lambda\) | Longitud de onda | [m](#m) | Distancia que recorre la onda en un ciclo completo |
    | \(v\) | Velocidad del sonido | [m/s](#ms) | Depende del medio y la temperatura |
    | \(f\) | Frecuencia | [Hz](#hz) | Ciclos por segundo |

    ### Fórmulas derivadas

    \[
    f = \frac{v}{\lambda} \qquad\qquad T = \frac{1}{f} = \frac{\lambda}{v}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(T\) | Período | [s](#s) | Duración de un ciclo completo |
    | \(f\) | Frecuencia | [Hz](#hz) | Ciclos por segundo (\(f = 1/T\)) |

    > Insertar **Fig. 1-7** del Everest: la longitud de onda λ es la distancia entre dos puntos correspondientes en ciclos sucesivos. Puede medirse entre picos consecutivos o entre dos cruces por cero equivalentes.

    > Insertar **Fig. 1-8** del Everest: dos nomogramas para determinar gráficamente la longitud de onda en aire a partir de una frecuencia conocida (o viceversa), basados en \(v = 1,130\) ft/s.

???+ note "Longitudes de onda de frecuencias musicales"

    Usando \(v = 344\) [m/s](#ms) (aire a 20°C):

    \[
    \lambda = \frac{344}{f} \quad \text{[m]}
    \]

    | Frecuencia | λ (aire, 20°C) | Referencia musical | ¿Qué implica? |
    |---|---|---|---|
    | 20 [Hz](#hz) | 17.2 [m](#m) | Límite inferior audible | Más largo que un bus |
    | 50 [Hz](#hz) | 6.88 [m](#m) | Subgrave (sintetizador) | Más largo que una sala típica |
    | 100 [Hz](#hz) | 3.44 [m](#m) | Grave de bajo eléctrico | Similar al largo de un auto |
    | 261 [Hz](#hz) | 1.32 [m](#m) | Do central (C4) | Similar a una mesa |
    | 440 [Hz](#hz) | 0.78 [m](#m) | **La central (A4)** — afinación estándar | Similar al brazo de una guitarra |
    | 1,000 [Hz](#hz) ≈ 1 [kHz](#khz) | 0.34 [m](#m) = 34 [cm](#cm) | Referencia de medición | Similar a una regla escolar |
    | 4,000 [Hz](#hz) | 8.6 [cm](#cm) | Presencia vocal | Cabe un puño |
    | 10,000 [Hz](#hz) | 3.4 [cm](#cm) | Brillo / «aire» | Tamaño de un pulgar |
    | 20,000 [Hz](#hz) | 1.7 [cm](#cm) | Límite superior audible | Tamaño de una uña |

    !!! warning "¿Por qué los graves son difíciles de controlar?"
        La longitud de onda de 50 [Hz](#hz) es de casi **7 metros**. En una cabina de 3×3 [m](#m), esa onda ni siquiera completa un ciclo antes de rebotar en las paredes. El sonido está en un régimen de **presión**, no de onda viajera. Por eso los graves se acumulan en esquinas y requieren tratamiento especializado (trampas de graves).

    Por el contrario, un sonido de 10 [kHz](#khz) tiene [λ](#lambda) de apenas 3.4 [cm](#cm): es altamente direccional, se refleja con facilidad y puede absorberse con materiales delgados.

???+ note "Onda sinusoidal: parámetros y simulación"

    Una onda sinusoidal se describe matemáticamente como:

    \[
    y(t) = A \cdot \sin(2\pi f t + \phi)
    \]

    | Símbolo | Nombre | Unidad | Significado físico |
    |---|---|---|---|
    | \(y(t)\) | Desplazamiento | [m](#m) | Posición de la partícula en el instante \(t\) |
    | \(A\) | Amplitud | [m](#m) | Máximo desplazamiento desde el equilibrio |
    | \(f\) | Frecuencia | [Hz](#hz) | Ciclos por segundo — determina el tono |
    | \(t\) | Tiempo | [s](#s) | Instante de observación |
    | \(\phi\) | Fase inicial | rad o [°](#deg) | Desplazamiento horizontal de la onda (0 a \(2\pi\)) |
    | \(T = 1/f\) | Período | [s](#s) | Duración de un ciclo completo |

    <iframe src="../sesion-02/simulacion-mas.html" width="100%" height="290" style="border: none; border-radius: 8px;"></iframe>

---

## Simulación interactiva

Modificá los parámetros y activá/desactivá capas para analizar cada fenómeno:

- **Desplazamiento** — movimiento sinusoidal de las partículas (línea continua)
- **Presión** — derivada de la posición, máxima en los cruces por cero (línea punteada)
- **Partículas** — puntos coloreados por zona de compresión o rarefacción
- **Densidad** — fondo graduado según concentración molecular

<iframe src="../sesion-02/simulacion.html" width="100%" height="400" style="border: none; border-radius: 8px;"></iframe>

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 1, pp. 1–16.*
