# Sesión 28: Transmisión de sonido y ley de la masa

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="m"></a>**m** | Metro | Longitud | — |
    | <a id="m2"></a>**m²** | Metro cuadrado | Superficie | — |
    | <a id="kg"></a>**kg** | Kilogramo | Masa | — |
    | <a id="tl"></a>**TL** | Transmission Loss | Pérdida por transmisión | \(TL = 10 \log_{10}(1/\tau)\) en dB |
    | <a id="tau"></a>**τ** (tau) | Coeficiente de transmisión | Fracción de energía sonora que atraviesa una partición | 0 ≤ τ ≤ 1. τ = 0.001 → TL = 30 dB |
    | <a id="nr"></a>**NR** | Noise Reduction | Reducción de ruido entre dos recintos | \(NR = L_{\text{fuente}} - L_{\text{receptor}}\) en dB |
    | <a id="stc"></a>**STC** | Sound Transmission Class | Índice de aislamiento a ruido aéreo (single-number rating) | ASTM E413 |
    | <a id="c"></a>**c** | Velocidad del sonido | Velocidad de propagación | ~343 m/s (20°C) |
    | <a id="rho"></a>**ρ** (rho) | Densidad del aire | Masa por unidad de volumen del aire | ~1.21 kg/m³ (20°C) |
    | <a id="ms"></a>**m_s** | Masa superficial | Masa por unidad de área de una partición | kg/m² |

???+ note "¿Cuál es la diferencia entre aislar y absorber?"

    Esta es la confusión #1 en acústica arquitectónica. Los términos NO son intercambiables y confundirlos lleva a soluciones CARAS que no funcionan.

    | Concepto | Definición | ¿Qué hace? | Analogía |
    |---|---|---|---|
    | **Aislamiento (Isolation)** | Impedir que el sonido pase de UN recinto a OTRO | Reduce la energía que ATRAVIESA una barrera | Una pared de concreto entre dos habitaciones. El sonido rebota y se queda en el recinto fuente |
    | **Absorción (Absorption)** | Convertir energía sonora en calor DENTRO de un recinto | Reduce la energía que REBOTA en las superficies del MISMO recinto | Un panel de espuma acústica en la pared. El sonido «desaparece» (se convierte en calor) pero NO impide que pase al vecino |

    !!! warning "La espuma acústica NO aísla"
        Este es el error más costoso y más común. Alguien quiere «insonorizar» su estudio y compra $500 en espuma acústica. Forra las paredes. El vecino sigue escuchando TODO. ¿Por qué? Porque la espuma ABSORBE (reduce reflexiones DENTRO de la sala) pero NO AÍSLA (no impide que el sonido ATRAVIESE la pared). La espuma tiene una masa superficial de ~0.3 kg/m². Una pared de yeso de 10 cm tiene ~70 kg/m². La transmisión de sonido a través de un material depende de su MASA SUPERFICIAL, no de su capacidad absorbente. Para aislar necesitás MASA, RIGIDEZ y HERMETICIDAD. La espuma no aporta NINGUNA de las tres.

    > Insertar **Fig. 1-4** del Everest (o diagrama conceptual equivalente): dos recintos adyacentes separados por una pared. En el recinto fuente, ondas sonoras incidiendo en la pared. Una parte se REFLEJA (absorción insuficiente), una parte se ABSORBE (se convierte en calor DENTRO de la pared), y una parte se TRANSMITE al recinto receptor. Señalar: «Esto es TRANSMISIÓN — lo que llega al receptor es lo que queremos REDUCIR con aislamiento. Las reflexiones en el recinto fuente son lo que reducimos con ABSORCIÓN. Son dos problemas DISTINTOS que requieren soluciones DISTINTAS.»

???+ note "Pérdida por transmisión y la ley de la masa"

    ### Transmisión a través de una partición simple

    Cuando una onda sonora incide sobre una pared, una fracción de la energía la ATRAVIESA y se re-irradia del otro lado. El **coeficiente de transmisión** τ es la fracción de energía transmitida:

    \[
    \tau = \frac{E_{\text{transmitida}}}{E_{\text{incidente}}}
    \]

    La **pérdida por transmisión** (Transmission Loss, TL) es:

    \[
    \boxed{TL = 10 \log_{10}\left(\frac{1}{\tau}\right) = -10 \log_{10}(\tau) \quad \text{dB}}
    \]

    ### Ley teórica de la masa (mass law)

    Para una onda plana incidiendo normalmente (90°) sobre una partición infinita y sin rigidez (limp mass law), la TL teórica es (Everest, Cap. 16):

    \[
    \boxed{TL = 20 \log_{10}(m_s \cdot f) - 47 \quad \text{dB}}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(TL\) | Pérdida por transmisión | dB | Cuánto atenúa la partición. Más alto = mejor aislamiento |
    | \(m_s\) | Masa superficial | kg/m² | Masa por metro cuadrado de la partición. Pared de yeso 10 cm ≈ 70 kg/m². Vidrio 6 mm ≈ 15 kg/m² |
    | \(f\) | Frecuencia | Hz | La TL DEPENDE de la frecuencia — no es un solo número |

    ### La regla del 6-6

    De la fórmula se desprenden dos consecuencias fundamentales:

    | Regla | Significado | Ejemplo |
    |---|---|---|
    | **Duplicar la masa → +6 dB** | Si duplicás la masa superficial (ej. de un panel de yeso de 12.5 mm a dos paneles de 12.5 mm = 25 mm), la TL aumenta 6 dB en TODAS las frecuencias | ms: 8 → 16 kg/m² → +6 dB |
    | **Duplicar la frecuencia → +6 dB** | La TL aumenta 6 dB por cada octava que subís en frecuencia. Las frecuencias altas son MÁS FÁCILES de aislar que las bajas | 125 Hz → 250 Hz → +6 dB; 500 Hz → 1 kHz → +6 dB |

    !!! tip "La intuición física de la ley de masa"
        ¿Por qué más masa = más aislamiento? Imaginá una pelota de ping-pong (poca masa) vs. una bola de boliche (mucha masa). Si les pegás con la misma fuerza, la pelota de ping-pong sale disparada (se mueve fácil → transmite mucha energía). La bola de boliche apenas se mueve (es difícil de mover → transmite poca energía). La pared es igual: una pared LIVIANA vibra fácilmente con la presión sonora y RE-IRRADIA el sonido del otro lado. Una pared PESADA apenas vibra → la energía que pasa al otro lado es mucho menor. La física es newtoniana: F = m·a. La misma fuerza sonora produce menos aceleración (y por tanto menos radiación) en una pared más masiva.

    ### Ejemplo numérico

    | Material | m_s (kg/m²) | TL a 125 Hz (dB) | TL a 500 Hz (dB) | TL a 2 kHz (dB) |
    |---|---|---|---|---|
    | Vidrio 3 mm | 7.5 | 15.4 | 21.4 | 27.5 |
    | Vidrio 6 mm | 15 | 21.4 | 27.5 | 33.5 |
    | Yeso 12.5 mm (1 placa) | 9 | 16.9 | 23.0 | 29.0 |
    | Yeso 25 mm (2 placas) | 18 | 23.0 | 29.0 | 35.0 |
    | Bloque de hormigón 100 mm | 180 | 43.0 | 49.0 | 55.0 |
    | Ladrillo hueco 120 mm | 150 | 41.5 | 47.5 | 53.5 |
    | Puerta de madera maciza 45 mm | 25 | 25.8 | 31.8 | 37.8 |

    !!! info "¿Se cumple exactamente la ley de masa en la práctica?"
        No. La ley de masa es una aproximación teórica que asume una pared INFINITA, SIN RIGIDEZ, con incidencia NORMAL. En la realidad aparecen desviaciones: (a) el **efecto de coincidencia** (coincidence effect): a cierta frecuencia crítica, la velocidad de flexión de la onda en la pared IGUALA la velocidad del sonido en el aire → la pared se vuelve «transparente» y el TL CAE drásticamente (puede bajar 10-15 dB en una banda estrecha). (b) Las **resonancias** propias de la partición producen caídas de TL a frecuencias específicas. (c) La **rigidez** (stiffness) domina a MUY bajas frecuencias (< 50-100 Hz) donde la TL es mayor que la predicha por la ley de masa. (d) El sonido NO llega con incidencia normal — en campo difuso, el promedio sobre todos los ángulos de incidencia reduce la TL ~5 dB respecto a la fórmula de incidencia normal.

    > Insertar **Fig. 16-5** del Everest: gráfico de TL vs. frecuencia para una partición simple. Eje X logarítmico de 50 Hz a 10 kHz, eje Y de 0 a 70 dB. Mostrar TRES regiones: (a) región controlada por rigidez (stiffness-controlled, bajas frecuencias, TL decreciente), (b) región controlada por masa (mass-controlled, TL crece 6 dB/octava siguiendo la línea recta de la ley de masa), (c) región de coincidencia (coincidence dip — caída abrupta en la frecuencia crítica f_c). Señalar que la ley de masa solo describe la región (b).

???+ note "Sound Transmission Class (STC) — el número único"

    La TL varía con la frecuencia — una pared puede aislar 25 dB a 125 Hz y 45 dB a 2 kHz. Para comparar materiales se necesita un NÚMERO ÚNICO. El STC (Sound Transmission Class) según ASTM E413 es ese número.

    ### ¿Cómo se determina el STC?

    1. Se mide la TL de la partición en 16 bandas de tercio de octava (125 Hz a 4 kHz).
    2. Se compara la curva medida con una curva de referencia STC (definida por la norma).
    3. Se «desliza» la curva de referencia verticalmente hasta que se cumplan dos condiciones: (a) la suma de las desviaciones negativas (bandas donde la TL medida está por DEBAJO de la referencia) no excede 32 dB, y (b) ninguna desviación individual excede 8 dB.
    4. El valor STC es el valor de la curva de referencia a 500 Hz en esa posición.

    ### ¿Qué significan los números STC?

    | STC | Descripción | ¿Qué se escucha a través de la pared? |
    |---|---|---|
    | 25 | Muy pobre | Conversación normal perfectamente inteligible. El vecino es parte de tu vida |
    | 30 | Pobre | Conversación en voz normal audible pero no del todo inteligible. Risas y llantos claros |
    | 35 | Regular | Conversación en voz alta audible como murmullo. Música con bajo perceptible |
    | 40 | Aceptable | Conversación en voz alta audible solo como sonido débil. Música con bajo como «tum-tum» |
    | 45 | Bueno | Conversación a gritos apenas audible. Música con bajo percibida como vibración, no como sonido |
    | 50 | Muy bueno | Gritos no audibles. Batería y bajo eléctrico perceptibles como vibración lejana |
    | 55 | Excelente | Instrumentos de percusión fuertes apenas audibles. El vecino puede estar dando un concierto y vos leyendo |
    | 60 | Excepcional | Prácticamente ningún sonido aéreo audible. Solo percusión muy intensa o amplificación extrema |

    !!! tip "STC no cuenta la historia completa"
        El STC es un promedio ponderado que enfatiza las frecuencias de la voz humana (500 Hz – 2 kHz). Dos paredes pueden tener el mismo STC pero comportarse MUY distinto en graves. Ejemplo: una pared de yeso simple (STC 34) y una pared de yeso doble con aislante (STC 34 también pero con mucha mejor performance en graves). Si tu problema es el bajo del vecino, el STC te dice POCO — necesitás mirar la TL en 63 y 125 Hz, no el número único. Por eso las normas más modernas incluyen los términos de adaptación espectral C y Ctr (ISO 717): STC + Ctr aproxima el aislamiento para ruido de tránsito y música (dominante en graves).

    > Insertar **Fig. 16-7** del Everest: gráfico de la curva de referencia STC y una curva de TL medida. Mostrar el «deslizamiento» de la curva de referencia, las desviaciones negativas, la suma de desviaciones ≤ 32 dB, y la lectura del STC a 500 Hz.

???+ note "Reducción de ruido (Noise Reduction): de la teoría a la realidad"

    La TL te dice cuánto atenúa LA PARED. Pero lo que realmente importa es cuánto se reduce el ruido ENTRE LOS DOS RECINTOS. Eso es la **reducción de ruido** (NR):

    \[
    \boxed{NR = L_{\text{fuente}} - L_{\text{receptor}} = TL + 10 \log_{10}\left(\frac{A}{S}\right) \quad \text{dB}}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(NR\) | Reducción de ruido | dB | Diferencia de nivel sonoro entre el recinto fuente y el receptor |
    | \(L_{\text{fuente}}\) | Nivel sonoro en el recinto fuente | dB | Lo que medís en la habitación donde se produce el sonido |
    | \(L_{\text{receptor}}\) | Nivel sonoro en el recinto receptor | dB | Lo que medís en la habitación QUE QUERÉS PROTEGER |
    | \(TL\) | Pérdida por transmisión de la partición | dB | Lo que aisla la pared en sí |
    | \(A\) | Absorción total del recinto receptor | m² (sabins métricos) | Suma de (α_i × S_i) para todas las superficies del recinto receptor |
    | \(S\) | Área de la partición separadora | m² | La superficie de la pared/techo/piso que comparten ambos recintos |

    !!! warning "TL ≠ NR — la absorción en el recinto receptor IMPORTA"
        La NR es SIEMPRE menor o igual que la TL (porque 10·log(A/S) suele ser negativo a menos que A > S). Si el recinto receptor es MUY reverberante (poca absorción, A pequeño), el sonido que logra pasar por la pared REBOTA muchas veces y se ACUMULA → el nivel sonoro en el receptor es MÁS ALTO que si el recinto tuviera absorción. Conclusión: para maximizar el aislamiento ENTRE recintos, necesitás tanto TL (aislar la pared) como ABSORCIÓN en el recinto receptor (para que el sonido que logra pasar no se acumule). Las dos estrategias NO son alternativas — son COMPLEMENTARIAS.

    > Insertar **diagrama conceptual** de dos recintos adyacentes con fuente en uno, receptor en el otro. Mostrar la pared separadora (TL), la absorción en el receptor (A = Σ α_i·S_i), y las fórmulas de NR = L_f − L_r = TL + 10 log(A/S).

???+ note "Flanqueo: cuando el sonido se escapa por donde no mirás"

    El sonido NO solo atraviesa la pared directamente. Busca —y encuentra— caminos alternativos. El **flanqueo** (flanking transmission) es la transmisión de sonido por vías que NO son la partición separadora directa.

    ### Caminos de flanqueo típicos

    | Camino | Descripción | Solución |
    |---|---|---|
    | **Paredes adyacentes** | El sonido vibra la pared del recinto fuente, esa vibración viaja por la ESTRUCTURA hacia paredes laterales, y esas paredes RE-IRRADIAN sonido en el recinto receptor | Desacoplar la partición de las paredes adyacentes (juntas elásticas, montaje flotante) |
    | **Falso plafón (drop ceiling)** | El sonido pasa POR ENCIMA de la pared divisoria a través del plenum sobre el cielo raso | La pared divisoria DEBE extenderse hasta la losa estructural, no solo hasta el cielo falso |
    | **Piso flotante / losa** | La vibración viaja por la losa de concreto que es CONTINUA entre ambos recintos | Piso flotante (floating floor) con capa elástica de desacoplamiento |
    | **Ductos de ventilación** | El sonido viaja por los conductos de aire que conectan ambos recintos | Silenciadores (duct silencers) en los conductos, tramos con absorción interna |
    | **Tomas eléctricas, cajas de luz** | Agujeros en la pared que CREAN UN CAMINO AÉREO DIRECTO | Cajas selladas, masilla acústica, NO alinear tomas en caras opuestas de la misma pared |
    | **Puertas y ventanas** | Son los elementos MÁS DÉBILES de cualquier cerramiento. Una pared de STC 55 con una puerta de STC 25 → STC compuesto ≈ 30 | Puertas acústicas (STC ≥ 40), doble puerta con cámara de aire, burletes perimetrales, sellos inferiores automáticos |
    | **Juntas y grietas** | CUALQUIER abertura, por pequeña que sea, transmite sonido. Una grieta de 1 mm × 1 m de largo en una pared de STC 50 puede reducir el STC compuesto a 30 | Sellar TODAS las juntas con sellador acústico (NO silicona común — debe ser flexible permanentemente). La regla: si pasa luz, pasa sonido. Si pasa aire, pasa sonido |

    !!! warning "La regla del eslabón más débil"
        El aislamiento de un cerramiento COMPUESTO (pared + puerta + ventana + tomas + ductos) está determinado por el elemento MÁS DÉBIL, no por el promedio. Una pared de ladrillo macizo con TL = 55 dB pero con una ventana de vidrio simple de TL = 25 dB que ocupa el 20% del área → el TL compuesto es aproximadamente 32 dB. Gastar dinero en mejorar la pared cuando tenés una ventana simple es como ponerle candado de titanio a una puerta de cartón. La inversión en aislamiento debe atacar PRIMERO los puntos débiles, no reforzar lo que ya es fuerte.

    > Insertar **Fig. 17-2** del Everest: diagrama de una sección constructiva mostrando TODOS los caminos de flanqueo simultáneamente. Fuente en recinto A, receptor en recinto B. Flechas mostrando: (1) transmisión directa por la pared, (2) flanqueo por paredes laterales, (3) flanqueo por cielo raso/plenum, (4) flanqueo por piso/losa, (5) flanqueo por ductos, (6) fuga por juntas y penetraciones. Señalar: «La TL compuesta es menor que la TL de CUALQUIERA de estos caminos individuales si no están tratados.»

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 16, pp. 231–250 (Sound Transmission Loss, Mass Law, STC, Composite Partitions, Flanking Paths). Capítulo 17, pp. 251–275 (Ventilating Systems — Flanking through HVAC, Vibration Isolation, Duct Silencers). ASTM E413 (Classification for Rating Sound Insulation).*
