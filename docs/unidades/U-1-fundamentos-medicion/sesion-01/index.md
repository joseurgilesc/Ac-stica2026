# Sesión 1: Introducción a la acústica aplicada a la producción musical

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia (ciclos por segundo) | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud, distancia | — |
    | <a id="s"></a>**s** | Segundo | Tiempo | — |
    | <a id="pa"></a>**Pa** | Pascal | Presión | 1 Pa = 1 N/m² |
    | <a id="upa"></a>**µPa** | Micropascal | Presión sonora (umbral audición) | 1 µPa = 10⁻⁶ Pa = 0 dB SPL |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="lambda"></a>**λ** (lambda) | Longitud de onda | Distancia por ciclo | λ = v / f |

???+ note "¿Qué es la acústica? Ciencia y sensación"

    La acústica estudia el sonido desde dos perspectivas complementarias (Everest & Pohlmann, 2009, p. 1):

    | Perspectiva | Definición | Campo |
    |---|---|---|
    | **Estímulo físico** | Onda que viaja a través de un medio elástico | Física / Acústica |
    | **Sensación** | Excitación del mecanismo auditivo que produce percepción | Psicoacústica |

    Esta dualidad atraviesa toda la producción musical: el sonido existe como fenómeno físico medible, pero también como experiencia subjetiva. El diseño de un altavoz o una sala de conciertos requiere tanto ingeniería objetiva como criterio perceptual.

    !!! info "Frecuencia ≠ Tono"
        La **frecuencia** es objetiva (se mide en [Hz](#hz)). El **tono** (*pitch*) es subjetivo (cómo el oído la percibe). *"We cannot equate frequency and pitch, but they are analogous."* Lo mismo ocurre con intensidad y sonoridad (*loudness*): no hay relación lineal entre lo físico y lo percibido. Y con forma de onda y timbre: la percepción del timbre es compleja incluso cuando el espectro es conocido.

    ### Campos de aplicación

    | Campo | Desafío acústico |
    |---|---|
    | **Estudios de grabación** | Control de reflexiones, aislamiento, respuesta plana |
    | **Cuartos de control** | Imagen estéreo precisa, tiempo de reverberación controlado |
    | **Salas de ensayo** | Niveles seguros, inteligibilidad, balance tonal |
    | **Auditorios y conciertos** | Proyección natural, cobertura uniforme, envolvente |
    | **Espacios exteriores** | Propagación, ruido ambiental, condiciones climáticas |

???+ note "Movimiento armónico simple y la onda sinusoidal"

    Una masa en un resorte que oscila describe un **movimiento armónico simple**. Si se registra su posición en el tiempo, se obtiene una **onda sinusoidal** — la forma más pura y fundamental en acústica.

    <figure markdown="span">
      ![Fig. 1-1: Masa en un resorte vibrando a su frecuencia natural](../../../img/FIGURE%201-1.png)
      <figcaption>**Fig. 1-1** — Una masa en un resorte vibra a su frecuencia natural por la elasticidad del resorte y la inercia de la masa. Elasticidad e inercia son las dos propiedades que todo medio debe poseer para conducir sonido (Everest & Pohlmann, 2009, p. 2).</figcaption>
    </figure>

    <figure markdown="span">
      ![Fig. 1-2: Trazado de una onda sinusoidal](../../../img/FIGURE%201-2.png)
      <figcaption>**Fig. 1-2** — Un lápiz sujeto a la masa vibrante traza una onda sinusoidal sobre una tira de papel que se mueve a velocidad constante. Muestra la relación entre movimiento armónico simple y la onda sinusoidal (Everest & Pohlmann, 2009, p. 3).</figcaption>
    </figure>

    Una revolución completa equivale a 360° — un ciclo completo. La onda sinusoidal es al sonido lo que el círculo a la geometría: el bloque elemental del que todo se compone (Fourier).

???+ note "El sonido necesita un medio elástico"

    Sin un medio, el sonido no puede propagarse. En el laboratorio, si se coloca un zumbador eléctrico dentro de una campana de vidrio y se extrae el aire, el sonido se vuelve cada vez más tenue hasta desaparecer. El espacio exterior es un vacío casi perfecto: ninguna explosión sería audible fuera de una nave o un traje espacial.

    Dos propiedades indispensables del medio:

    - **Elasticidad**: restaura la posición original de la partícula tras ser desplazada
    - **Inercia**: hace que la partícula sobrepase su posición de equilibrio, iniciando la oscilación

    El sonido se propaga en gases (aire), líquidos (agua) y sólidos (acero, concreto). Cuanto más denso el medio, más rápido viaja el sonido.

    !!! warning "El sonido más tenue"
        El umbral de audición humana (20 [µPa](#upa)) es aproximadamente **5,000 millones de veces menor** que la presión atmosférica (~14.7 lb/in² a nivel del mar). El oído humano es extraordinariamente sensible.

???+ note "Tipos de ondas: cómo se mueven las partículas"

    <figure markdown="span">
      ![Fig. 1-4: Tipos de ondas](../../../img/FIGURE%201-4.png)
      <figcaption>**Fig. 1-4** — Tres formas de movimiento de partículas: (A) circular en la superficie del agua, (B) transversal en una cuerda de violín, (C) longitudinal en el aire (Everest & Pohlmann, 2009, p. 5).</figcaption>
    </figure>

    | Tipo | Movimiento de partícula | Dirección relativa a la onda | Ejemplo |
    |---|---|---|---|
    | **Circular** | Órbitas (en aguas profundas) | Mixta | Ondas en un estanque |
    | **Transversal** | Perpendicular | 90° | Cuerda de guitarra, violín |
    | **Longitudinal** | En la misma dirección | 0° (paralela) | **Sonido en el aire** |

    El sonido en el aire es una **onda longitudinal**: las partículas vibran hacia adelante y atrás en la misma dirección en que viaja la perturbación. Su desplazamiento máximo es de apenas unas diezmilésimas de pulgada, incluso para sonidos fuertes.

???+ note "Compresión y rarefacción"

    Cuando una onda sonora viaja por el aire, crea zonas alternadas de:

    - **Compresión (C)**: moléculas agrupadas → presión ligeramente superior a la atmosférica
    - **Rarefacción (R)**: moléculas separadas → presión ligeramente inferior a la atmosférica

    Las partículas de aire **no viajan con la onda**: vibran localmente mientras la perturbación se propaga. Es como una ola en un campo de trigo: cada tallo se mueve en su sitio mientras la ola avanza. La onda sonora avanza porque las zonas de alta presión «empujan» a las vecinas, transfiriendo momento de partícula a partícula.

???+ note "Velocidad, frecuencia y longitud de onda: la relación fundamental"

    La velocidad del sonido en el aire a temperatura y presión normales es:

    \[
    \boxed{v \approx 344\text{ m/s} \;\approx\; 1,130\text{ ft/s} \;\approx\; 770\text{ mi/h}}
    \]

    La relación fundamental que conecta estos tres conceptos es:

    \[
    \lambda = \frac{v}{f}
    \]

    - A mayor frecuencia, menor [λ](#lambda) — los agudos tienen longitudes de onda de centímetros
    - A menor frecuencia, mayor [λ](#lambda) — los graves tienen longitudes de onda de metros
    - El rango audible humano abarca desde 20 [Hz](#hz) ([λ](#lambda) ≈ 17.2 [m](#m)) hasta 20 [kHz](#khz) ([λ](#lambda) ≈ 1.7 cm)

    !!! tip "¿Por qué importa λ?"
        Si [λ](#lambda) es mucho mayor que un obstáculo, el sonido lo **rodea** (difracción). Si [λ](#lambda) es mucho menor, el sonido se **refleja**. Esto explica por qué los graves viajan tan lejos y son difíciles de contener en espacios pequeños.

???+ note "De lo simple a lo complejo: Fourier y el espectro"

    Un diapasón produce un tono casi puro — una sola frecuencia sinusoidal. Pero la mayoría de los sonidos musicales son **ondas complejas**: contienen una frecuencia fundamental más una serie de armónicos (múltiplos enteros de la fundamental).

    Joseph Fourier demostró que **cualquier onda periódica, sin importar cuán compleja sea, puede descomponerse en una suma de ondas sinusoidales** de diferentes frecuencias, amplitudes y fases. Y a la inversa: sumando sinusoides se puede sintetizar cualquier forma de onda.

    | Concepto | Definición | Ejemplo |
    |---|---|---|
    | **Fundamental** (\(f_1\)) | Frecuencia más baja — determina el tono percibido | La4 = 440 [Hz](#hz) |
    | **Armónicos** (\(2f_1, 3f_1, \ldots\)) | Múltiplos enteros de la fundamental — definen el timbre | 880 [Hz](#hz), 1,320 [Hz](#hz)... |
    | **Parciales** | Componentes frecuenciales de un instrumento (no siempre armónicos) | Campanas, platillos |
    | **Espectro** | Distribución de energía de una señal en frecuencia | Analizador de espectro |
    | **Ruido blanco** | Energía distribuida uniformemente en todo el espectro audible | Estática de TV, lluvia |

    !!! info "Octava: la escala del oído"
        Una **octava** es una relación de frecuencias 2:1. El oído percibe intervalos como razones, no como diferencias aritméticas. Entre 100 y 200 [Hz](#hz) hay una octava; entre 200 y 300 [Hz](#hz) hay solo una quinta. Por eso las escalas de frecuencia en audio son logarítmicas.

    El espectro audible humano abarca aproximadamente 10 octavas (20 [Hz](#hz) a 20 [kHz](#khz)). En acústica aplicada se usan bandas de octava y tercio de octava para analizar y tratar problemas.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 1, pp. 1–16.*
