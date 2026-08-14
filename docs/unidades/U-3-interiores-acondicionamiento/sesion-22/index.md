# Sesión 22: Campo directo, campo reverberante y distancia crítica

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
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="spl"></a>**SPL** | Sound Pressure Level | Nivel de presión sonora | En dB SPL (re 20 µPa) |
    | <a id="swl"></a>**SWL** (o Lw) | Sound Power Level | Nivel de potencia sonora | En dB (re 10⁻¹² W) |
    | <a id="dc"></a>**Dc** (\(r_c\)) | Distancia crítica | Distancia donde campo directo = campo reverberante | En m |
    | <a id="q"></a>**Q** | Factor de directividad | Concentración de energía en una dirección vs. radiación omnidireccional | Adimensional (1, 2, 4, 8...) |
    | <a id="di"></a>**DI** | Directivity Index | Q expresado en dB | DI = 10·log(Q) |
    | <a id="rt60"></a>**RT60** | Tiempo de reverberación | Tiempo para decaer 60 dB | En segundos |
    | <a id="a"></a>**A** | Absorción total | A = Σ α_i · S_i | En m² (sabins métricos) |
    | <a id="w"></a>**W** | Watt | Potencia acústica de la fuente | En watts (W) |

???+ note "Los dos campos sonoros en un recinto cerrado"

    Cuando una fuente sonora emite dentro de una sala, el sonido que llega a un punto cualquiera NO es uniforme. Está compuesto por DOS contribuciones con comportamientos físicos completamente distintos (Everest & Pohlmann, 2009, Cap. 3, pp. 52–57; Cap. 11, pp. 170–197):

    ### Campo directo (\(L_d\))

    Es la energía que viaja en LÍNEA RECTA desde la fuente hasta el receptor, SIN HABER REBOTADO en ninguna superficie. Sigue la **ley del inverso del cuadrado**: cada vez que duplicás la distancia, el nivel baja 6 dB.

    \[
    \boxed{L_d = L_w + 10 \cdot \log\left(\frac{Q}{4\pi r^2}\right) + 0.1}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(L_d\) | Nivel de presión sonora del campo directo | dB SPL | Lo que medirías si no existieran reflexiones (campo libre) |
    | \(L_w\) | Nivel de potencia sonora de la fuente | dB (re 10⁻¹² W) | Cuánta energía acústica TOTAL emite la fuente en todas direcciones |
    | \(Q\) | Factor de directividad | — | Cuánto concentra la fuente en la dirección del receptor (Q=1: omnidireccional) |
    | \(r\) | Distancia fuente → receptor | m | Distancia en línea recta |
    | 0.1 | Corrección atmosférica (T=20°C, p=1 atm) | dB | Prácticamente despreciable para distancias cortas. Incluye ρc de referencia |

    Comportamiento: \(L_d\) cae 6 dB por cada duplicación de distancia.

    ### Campo reverberante (\(L_r\))

    Es la energía que llega al receptor DESPUÉS de haber rebotado múltiples veces en las superficies de la sala. Como las reflexiones vienen de TODAS direcciones y son tantas que se fusionan, el nivel reverberante es (idealmente) CONSTANTE en toda la sala — no depende de la distancia a la fuente.

    \[
    \boxed{L_r = L_w + 10 \cdot \log\left(\frac{4}{A}\right) + 0.1}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(L_r\) | Nivel de presión sonora del campo reverberante | dB SPL | Nivel (idealmente constante) en cualquier punto del campo reverberante |
    | \(A\) | Absorción total de la sala | m² (sabins) | \(A = \sum \alpha_i \cdot S_i\) |

    Comportamiento: \(L_r\) NO depende de \(r\). Si medís SPL en el centro de la sala o en una esquina, el nivel reverberante es el MISMO.

    !!! info "¿Por qué L_r es constante en toda la sala?"
        Porque el campo reverberante es la suma de MILES de reflexiones que llegan de todas direcciones. Aunque algunas reflexiones individuales recorran más distancia y lleguen más atenuadas, la DENSIDAD de reflexiones es tan alta que el promedio espacial se vuelve uniforme. Es como la luz en una habitación con paredes blancas: aunque estés más lejos de la lámpara, las paredes reflejan luz de todas direcciones y el nivel de iluminación ambiente es aproximadamente constante.

    > Insertar **Fig. 3-8** del Everest: gráfico de SPL vs. distancia logarítmica desde la fuente. Mostrar la curva del campo directo (recta con pendiente −6 dB/doble distancia), la línea horizontal del campo reverberante (constante), y la suma total (directo + reverberante). Señalar el punto de cruce: la distancia crítica Dc.

    [🎛️ **Abrir simulación interactiva — Distancia crítica**](../../../simulacion/distancia-critica.html){ .md-button }

    Ajusta L_w, Q y A. Observa las curvas del campo directo, reverberante y total, con la línea vertical en D_c y el indicador del campo dominante según la distancia.

???+ note "La distancia crítica (Dc): donde chocan dos mundos"

    La **distancia crítica** (Dc, también llamada \(r_c\)) es la distancia desde la fuente donde el NIVEL del campo directo IGUALA al nivel del campo reverberante:

    \[
    L_d(r = D_c) = L_r
    \]

    Despejando:

    \[
    \boxed{D_c = \sqrt{\frac{Q \cdot A}{16 \pi}} \approx 0.141 \cdot \sqrt{Q \cdot A}}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(D_c\) (o \(r_c\)) | Distancia crítica | m | Distancia donde campo directo = campo reverberante |
    | \(Q\) | Factor de directividad de la fuente (en la dirección del receptor) | — | Q=1 (omnidireccional), Q=2 (semi-espacio, ej. piso), Q=4 (cuarto de espacio, ej. esquina piso-pared), Q=8 (octavo de espacio, ej. esquina triédrica) |
    | \(A\) | Absorción total de la sala | m² (sabins) | \(A = \sum \alpha_i \cdot S_i\) |
    | 0.141 | Constante derivada | — | \(1 / \sqrt{16\pi}\) |

    ### ¿Qué significa Dc en la práctica?

    | Tu posición respecto a Dc (\(r\)) | ¿Qué domina lo que escuchás? | Implicancia |
    |---|---|---|
    | **\(r < D_c\)** (cerca de la fuente) | El **campo directo**. El sonido conserva las características de la fuente. Las reflexiones existen pero no dominan | Buena inteligibilidad, buena localización. Como escuchar a alguien hablando a 1 metro en una sala viva — lo escuchás bien aunque la sala tenga reverb |
    | **\(r = D_c\)** | Ambos campos contribuyen IGUAL | Punto de transición. La claridad empieza a perderse |
    | **\(r > D_c\)** (lejos de la fuente) | El **campo reverberante**. La energía reflejada acumulada SUPERA al sonido directo | La inteligibilidad cae rápido. Las sílabas se solapan. El timbre está dominado por la respuesta de la sala, no por la fuente. Como tratar de entender a alguien que habla al fondo de una iglesia |

    !!! tip "Regla práctica en producción musical"
        - **Para GRABAR**: posicioná el micrófono a \(r < D_c\). Querés capturar el sonido DIRECTO del instrumento/voz, con la mínima contribución posible de la sala. La sala la vas a agregar después con plugins de reverb (y podés elegir CUÁL sala, en lugar de quedarte con la que tenés).
        - **Para MEZCLAR**: tu posición de escucha debe estar a \(r < D_c\) de los monitores. Necesitás que el campo directo de los monitores DOMINE sobre la reverberación de la sala. Si estás a \(r > D_c\), estás escuchando más la REVERBERACIÓN DE TU SALA que el sonido DIRECTO de los monitores → tus decisiones de mezcla NO son confiables.
        - **Para ESCUCHAR (sala de conciertos)**: el público está a \(r > D_c\) (lejos de la orquesta). En una sala bien diseñada, el campo reverberante NO es un defecto — ES PARTE DEL DISEÑO. La reverberación «une» el sonido de los instrumentos y da la sensación de majestuosidad que el público espera.

    > Insertar **Fig. 11-6** del Everest: gráfico de SPL vs. distancia mostrando Dc para diferentes valores de Q y RT60. Señalar cómo Dc AUMENTA cuando Q crece (fuente más directiva) o cuando RT60 baja (sala más absorbente).

???+ note "¿De qué depende Dc? Las tres palancas"

    \[
    D_c \propto \sqrt{Q \cdot A}
    \]

    Dc NO es una propiedad fija de la sala — depende de TRES factores:

    ### Palanca 1: La absorción total (A)

    Cuanto MÁS absorbente es la sala (A más grande), MÁS LEJOS llega el campo directo antes de ser superado por el reverberante. Esto es intuitivo: si las paredes «se tragan» la energía, el campo reverberante es MÁS DÉBIL y el campo directo domina hasta distancias mayores.

    **Ejemplo extremo**: en una cámara anecoica (A → ∞, RT60 → 0), NO HAY campo reverberante. Dc → ∞. El campo directo domina a CUALQUIER distancia. Escuchás SOLO la fuente, nunca la sala.

    ### Palanca 2: La directividad de la fuente (Q)

    Cuanto MÁS DIRECTIVA es la fuente (Q más grande), MÁS LEJOS llega el campo directo. Una fuente muy directiva «apunta» la energía hacia el receptor, aumentando el campo directo sin afectar el campo reverberante (que, al ser difuso, recibe la energía total de la fuente sin importar su directividad).

    | Tipo de fuente | Q típico | DI = 10·log(Q) | Ejemplo |
    |---|---|---|---|
    | **Omnidireccional** (esfera pulsante en espacio libre) | 1 | 0 dB | Fuente de referencia para mediciones, dodecaedro |
    | **Semi-espacio** (fuente sobre un plano rígido infinito, ej. piso) | 2 | 3 dB | Parlante sobre el piso, persona hablando de pie |
    | **Cuarto de espacio** (intersección de dos planos, ej. piso + pared) | 4 | 6 dB | Parlante en esquina piso-pared |
    | **Octavo de espacio** (intersección de tres planos, ej. esquina triédrica) | 8 | 9 dB | Subwoofer en esquina de la sala |
    | **Parlante típico de estudio (bafle bass-reflex frontal)** | 2 – 4 | 3 – 6 dB | Monitor de campo cercano típico |
    | **Line array (columna de parlantes)** | 10 – 50 | 10 – 17 dB | Refuerzo sonoro en conciertos |
    | **Fuente muy directiva (shotgun, megáfono)** | > 20 | > 13 dB | Parlante de trompeta, shotgun microphone (en reversa) |

    !!! tip "El 'truco' del subwoofer en la esquina"
        Ponés el subwoofer en una esquina (intersección de piso + 2 paredes = Q ≈ 8). El campo directo en la dirección del oyente se refuerza 9 dB (10·log(8)) respecto a si estuviera flotando en espacio libre. Esto no es magia — es que la energía que se iría hacia ATRÁS y hacia los COSTADOS se redirige hacia adelante porque las paredes la reflejan. La potencia total emitida ES LA MISMA, pero se concentra en 1/8 del espacio.

    ### Palanca 3: La frecuencia (indirectamente, a través de A y Q)

    Dc VARÍA con la frecuencia porque tanto A como Q dependen de f:
    - **A**: los materiales absorbentes suelen ser menos efectivos en graves → A(f) es más chica en bajas frecuencias → Dc es MÁS CORTA en graves.
    - **Q**: la directividad de parlantes y fuentes reales varía con la frecuencia. Un parlante tweeter es más directivo en agudos, menos en graves.

    Consecuencia práctica: Dc en 125 Hz puede ser MUCHO más corta que Dc en 4 kHz. Si posicionás tus monitores a 2 m y Dc(125 Hz) = 1.5 m pero Dc(4 kHz) = 4 m, estás ESCUCHANDO más sala que monitores en graves pero más monitores que sala en agudos. Tu percepción del balance espectral está distorsionada por la sala.

???+ note "Ejemplo de cálculo completo: sala de control"

    Volvamos a la sala de control de la Sesión 20: 6 m × 4 m × 3 m, V = 72 m³, S = 108 m², A(500 Hz) = 40.06 sabins, RT60_Eyring(500 Hz) = 0.27 s.

    Calculamos Dc para un monitor de estudio típico (Q ≈ 3, asumiendo montaje en pie, lejos de paredes):

    \[
    D_c = 0.141 \cdot \sqrt{Q \cdot A} = 0.141 \cdot \sqrt{3 \times 40.06} = 0.141 \cdot \sqrt{120.18} = 0.141 \times 10.96 = \mathbf{1.55\ \text{m}}
    \]

    ### Interpretación

    Si tus oídos están a MENOS de 1.55 m de los monitores (lo típico en campo cercano: 1.0–1.2 m), estás en la **zona de campo directo dominante**. Bien. Escuchás más los monitores que la sala.

    Si tus oídos están a MÁS de 1.55 m, el campo reverberante empieza a dominar. A 3 m de distancia, el nivel reverberante supera al directo por varios dB. Tus decisiones de mezcla están influenciadas por la sala.

    !!! question "¿Y si subo el volumen de los monitores?"
        Subir el volumen SUBE AMBOS CAMPOS por igual (ambos dependen de \(L_w\)). La relación directo/reverberante NO cambia con el volumen. Dc es independiente del nivel. Si a 3 m estás escuchando más sala que monitores, ponerlos más fuerte solo hace que la sala suene MÁS FUERTE — la proporción directo/reverberante sigue siendo la misma.

    ### Variación con la frecuencia

    Calculemos Dc por bandas usando los valores de A de la tabla de materiales (Sesión 20) y Q del monitor:

    | Banda | A (sabins) | Q (monitor) | Dc (m) | ¿Estás dentro de Dc a 1.2 m? |
    |---|---|---|---|---|
    | 125 Hz | ~25 | ~2 | \(0.141 \cdot \sqrt{2 \times 25} = 0.99\) | **No** — necesitás estar a < 1 m |
    | 250 Hz | ~30 | ~2.5 | \(0.141 \cdot \sqrt{2.5 \times 30} = 1.22\) | Apenas — justo en el límite |
    | 500 Hz | 40.06 | 3 | 1.55 | Sí — margen de 0.35 m |
    | 1 kHz | ~45 | ~3.5 | \(0.141 \cdot \sqrt{3.5 \times 45} = 1.77\) | Sí — buen margen |
    | 2 kHz | ~48 | ~4 | \(0.141 \cdot \sqrt{4 \times 48} = 1.95\) | Sí — margen amplio |
    | 4 kHz | ~50 | ~5 | \(0.141 \cdot \sqrt{5 \times 50} = 2.23\) | Sí — margen muy amplio |

    **Diagnóstico**: En esta sala, a 1.2 m de distancia, estás BÁSICAMENTE en campo directo en agudos pero EN CAMPO REVERBERANTE (o en el límite) en graves. Esto significa que:
    1. Las frecuencias graves de tu mezcla están siendo dictadas MÁS por la sala que por los monitores.
    2. Tu percepción de «cuánto bajo hay» está distorsionada.
    3. Necesitás más absorción en graves (más A en 125-250 Hz) para empujar Dc hacia afuera.

    > Insertar **Fig. 11-6** del Everest: gráfico de Dc vs. frecuencia para diferentes configuraciones de sala. Mostrar cómo Dc colapsa en graves en salas sin tratamiento específico de baja frecuencia.

???+ note "Aplicación práctica: ¿dónde pongo el micrófono?"

    ### Grabación de voz

    Querés grabar una voz en una sala con RT60 = 0.6 s, V = 60 m³, S = 90 m². La voz humana tiene Q ≈ 2 (boca dirigida hacia adelante sobre el cuerpo). Calculamos:

    \[
    A \text{ (de RT60)}: A = 0.161 \cdot V / RT60 = 0.161 \times 60 / 0.6 = 16.1\ \text{sabins}
    \]

    \[
    D_c = 0.141 \cdot \sqrt{2 \times 16.1} = 0.141 \cdot \sqrt{32.2} = 0.141 \times 5.67 = \mathbf{0.80\ \text{m}}
    \]

    **Recomendación**: posicioná el micrófono a MENOS de 0.80 m del cantante (típicamente 15-30 cm para voz). A 15 cm, la relación directo/reverberante es excelente: el campo directo supera al reverberante por ~15 dB.

    Si necesitás alejar el micrófono (ej. para capturar más «cuerpo» de la voz), estás a \(r > D_c\) → la reverberación de la sala va a ser MUY evidente en la grabación. Solución: tratá la sala para bajar RT60 → aumentar A → incrementar Dc.

    ### Grabación de un ensemble

    Querés grabar un cuarteto de cuerdas en una sala de 200 m³ con RT60 = 1.2 s. Cada instrumento tiene Q ≈ 2.

    \[
    A = 0.161 \times 200 / 1.2 = 26.8\ \text{sabins}
    \]

    \[
    D_c = 0.141 \cdot \sqrt{2 \times 26.8} = 0.141 \cdot \sqrt{53.6} = \mathbf{1.03\ \text{m}}
    \]

    **Recomendación**: colocá micrófonos cercanos (spot mics) a < 1 m de cada instrumento para capturar el sonido directo limpio. Agregá un par estéreo ambiental a > 3 m para capturar la reverberación natural de la sala (el «sonido de la sala» que vas a mezclar con los spots). La combinación de close mics (campo directo) + room mics (campo reverberante) te da control total sobre la mezcla final.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 3, pp. 52–57 (Free Field — Directivity, Q, DI, Near/Far Field). Capítulo 11, pp. 170–197 (Reverberation — Direct and Reverberant Fields, Critical Distance, Room Constant).*
