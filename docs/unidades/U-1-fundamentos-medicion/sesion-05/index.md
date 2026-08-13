# Sesión 5: Logaritmos y decibeles

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="db"></a>**dB** | Decibel | Nivel relativo (escala logarítmica) | \( \text{dB} = 10\log_{10}(P/P_0) \) |
    | <a id="spl"></a>**dB SPL** | Sound Pressure Level | Nivel de presión sonora (referido a 20 µPa) | Umbral de audición a 1 kHz = 0 dB SPL |
    | <a id="sil"></a>**dB SIL** | Sound Intensity Level | Nivel de intensidad sonora (referido a 10⁻¹² W/m²) | \( \text{SIL} = 10\log_{10}(I/10^{-12}) \) |
    | <a id="swl"></a>**dB SWL** | Sound Power Level | Nivel de potencia sonora (referido a 10⁻¹² W) | \( \text{SWL} = 10\log_{10}(W/10^{-12}) \) |
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia (ciclos por segundo) | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="upa"></a>**µPa** | Micropascal | Presión sonora | 1 µPa = 10⁻⁶ Pa |
    | <a id="pa"></a>**Pa** | Pascal | Presión | 1 Pa = 1 N/m² |
    | <a id="w"></a>**W** | Watt (Vatio) | Potencia | 1 W = 1 J/s |
    | <a id="log"></a>**log₁₀** | Logaritmo en base 10 | Exponente al que hay que elevar 10 para obtener el número | log₁₀(100) = 2 |
    | <a id="dbfs"></a>**dBFS** | Decibel Full Scale | Nivel digital — 0 dBFS es el máximo antes de distorsión | Todo por debajo es negativo |
    | <a id="dbu"></a>**dBu** | Decibel (voltaje) | Nivel eléctrico profesional | 0 dBu = 0.775 V, nominal +4 dBu |
    | <a id="dbv"></a>**dBV** | Decibel (voltaje) | Nivel eléctrico de consumo | 0 dBV = 1 V, nominal −10 dBV |
    | <a id="lufs"></a>**LUFS** | Loudness Units Full Scale | Sonoridad percibida | Estándar de streaming |
    | <a id="s"></a>**s** | Segundo | Tiempo | — |

???+ note "¿Por qué decibeles? El problema de la escala lineal"

    El oído humano tiene un rango dinámico extraordinario. La presión sonora más tenue que podemos detectar (umbral de audición) es de aproximadamente **20 µPa**. El sonido más fuerte que podemos tolerar sin dolor (umbral de dolor) ronda los **20,000,000 µPa** (20 Pa). 

    Eso es una relación de **1,000,000 a 1** — seis órdenes de magnitud. Si intentáramos graficar esto en una escala lineal, el umbral de audición sería invisible. Peor aún: el oído no percibe los cambios de presión de forma lineal, sino **logarítmica**.

    <figure markdown="span">
      ![Fig. 2-1: Presión sonora RMS y nivel de presión sonora](../../../img/presion_rms_y_nivel_sonoro.svg)
      <figcaption>**Fig. 2-1** — Presión sonora RMS en escala logarítmica y nivel de presión sonora en decibelios, referido a 20 micropascales. La escala logarítmica comprime un rango enorme de presiones en valores manejables.</figcaption>
    </figure>

    [🎛️ **Abrir laboratorio interactivo — La regla que se comprime**](../../../simulacion/logaritmos-decibeles.html){ .md-button }

    Mueve el deslizador para comparar la escala lineal con la logarítmica y ver cómo el logaritmo cuenta saltos de ×10. Observa la relación p/p₀, la presión sonora y el nivel en dB SPL.

    ### La intuición logarítmica

    El oído percibe **razones**, no diferencias:

    | Cambio físico | Percibido como | Relación |
    |---|---|---|
    | De 20 a 40 µPa | «El doble de fuerte» (aproximadamente) | ×2 en presión |
    | De 20 a 200 µPa | «Como 10 veces más» | ×10 en presión |
    | De 20 a 2,000 µPa | «Muchísimo más fuerte» | ×100 |
    | De 20 a 20,000,000 µPa | Dolor | ×1,000,000 |

    Esto significa que un incremento de 100 µPa suena muy distinto si partimos del umbral (20 → 120 µPa, ×6) que si partimos de un nivel alto (20,000 → 20,100 µPa, ×1.005). **El contexto importa — como en la música.**

???+ note "Repaso rápido de logaritmos"

    Un logaritmo responde a la pregunta: **¿a qué exponente debo elevar la base para obtener este número?**

    \[
    \log_{10}(x) = y \quad \Longleftrightarrow \quad 10^y = x
    \]

    ### Logaritmos comunes que debés memorizar

    | \(x\) | \(\log_{10}(x)\) | Porque |
    |---|---|---|
    | 1 | **0** | 10⁰ = 1 |
    | 10 | **1** | 10¹ = 10 |
    | 100 | **2** | 10² = 100 |
    | 1,000 | **3** | 10³ = 1,000 |
    | 10,000 | **4** | 10⁴ = 10,000 |
    | 100,000 | **5** | 10⁵ = 100,000 |
    | 1,000,000 | **6** | 10⁶ = 1,000,000 |
    | 0.1 | **−1** | 10⁻¹ = 0.1 |
    | 2 | **~0.301** | 10⁰·³⁰¹ ≈ 2 |
    | 3.16 | **~0.5** | 10⁰·⁵ ≈ 3.16 |

    !!! tip "Regla de oro: log(2) ≈ 0.3"
        Saber que \(\log_{10}(2) \approx 0.301\) te permitirá estimar cualquier valor en dB sin calculadora: 3 dB ≈ ×2 en potencia, 10 dB = ×10. El factor 2 aparece constantemente en acústica.

    ### Propiedades útiles

    \[
    \log(a \cdot b) = \log(a) + \log(b) \qquad
    \log\left(\frac{a}{b}\right) = \log(a) - \log(b) \qquad
    \log(a^n) = n \cdot \log(a)
    \]

???+ note "La definición de decibel"

    Un **decibel** (dB) es una **décima parte de un bel** (en honor a Alexander Graham Bell). Expresa la relación entre dos cantidades en escala logarítmica.

    \[
    \boxed{\text{dB} = 10 \cdot \log_{10}\left(\frac{P}{P_0}\right)}
    \]

    | Símbolo | Nombre | Significado |
    |---|---|---|
    | dB | Decibel | Unidad de nivel — siempre es relativa |
    | \(P\) | Potencia medida | La cantidad que queremos expresar |
    | \(P_0\) | Potencia de referencia | El valor contra el que comparamos |

    ### ¿Por qué 10 log para potencia y 20 log para presión?

    La potencia es proporcional al **cuadrado** de la presión (\(P \propto p^2\)). Por propiedad de logaritmos:

    \[
    10 \cdot \log_{10}\left(\frac{p^2}{p_0^2}\right) = 10 \cdot \log_{10}\left(\left[\frac{p}{p_0}\right]^2\right) = 20 \cdot \log_{10}\left(\frac{p}{p_0}\right)
    \]

    Por eso la fórmula para presión sonora usa el factor 20:

    \[
    \boxed{\text{dB SPL} = 20 \cdot \log_{10}\left(\frac{p}{p_0}\right) \quad \text{donde } p_0 = 20\ \mu\text{Pa}}
    \]

    | Tipo de nivel | Fórmula | Referencia (\(P_0\) o \(p_0\)) |
    |---|---|---|
    | **SPL** (presión sonora) | \(20\log_{10}(p / p_0)\) | \(p_0 = 20\) µPa |
    | **SIL** (intensidad sonora) | \(10\log_{10}(I / I_0)\) | \(I_0 = 10^{-12}\) W/m² |
    | **SWL** (potencia sonora) | \(10\log_{10}(W / W_0)\) | \(W_0 = 10^{-12}\) W |

???+ note "Ejemplos numéricos paso a paso"

    ### Ejemplo 1: ¿Cuántos dB SPL produce una presión de 0.2 Pa?

    \[
    \begin{aligned}
    p &= 0.2\ \text{Pa} = 200,000\ \mu\text{Pa} \\[4pt]
    p_0 &= 20\ \mu\text{Pa} \\[4pt]
    \frac{p}{p_0} &= \frac{200,000}{20} = 10,000 \\[4pt]
    \log_{10}(10,000) &= 4 \\[4pt]
    \text{dB SPL} &= 20 \cdot 4 = \mathbf{80\ \text{dB SPL}}
    \end{aligned}
    \]

    ### Ejemplo 2: ¿Qué presión corresponde a 60 dB SPL?

    \[
    \begin{aligned}
    60 &= 20 \cdot \log_{10}\left(\frac{p}{20}\right) \\[4pt]
    3 &= \log_{10}\left(\frac{p}{20}\right) \\[4pt]
    10^3 &= \frac{p}{20} \\[4pt]
    p &= 20 \cdot 1,000 = 20,000\ \mu\text{Pa} = \mathbf{0.02\ \text{Pa}}
    \end{aligned}
    \]

    ### Ejemplo 3: Duplicar la presión — ¿cuántos dB?

    \[
    20 \cdot \log_{10}(2) = 20 \cdot 0.301 \approx \mathbf{+6\ \text{dB}}
    \]

    !!! warning "¡Cuidado con la confusión más común!"
        ×2 en **presión sonora** = +6 dB (factor 20). ×2 en **potencia/intensidad** = +3 dB (factor 10). ×2 en **sonoridad percibida** ≈ +10 dB (aproximadamente). Son tres conceptos distintos que usan la misma palabra: «el doble».

### Reglas prácticas de dB que debés saber

| Cambio en dB | ¿Qué significa en potencia/intensidad? | ¿Qué significa en presión? | Percepción aproximada |
|---|---|---|---|
| +3 dB | ×2 | ×1.41 | Apenas perceptible |
| +6 dB | ×4 | ×2 | Claramente más fuerte |
| +10 dB | ×10 | ×3.16 | «El doble de fuerte» |
| +20 dB | ×100 | ×10 | Mucho más fuerte |
| −3 dB | ÷2 | ÷1.41 | Apenas más suave |
| −6 dB | ÷4 | ÷2 | Claramente más suave |
| −10 dB | ÷10 | ÷3.16 | «La mitad de fuerte» |
| 0 dB | ×1 | ×1 | Igual a la referencia |

???+ note "Tabla de niveles sonoros típicos"

    | dB SPL | Ejemplo cotidiano | Sensación subjetiva |
    |---|---|---|
    | 0 | Umbral de audición (1 kHz) | Silencio absoluto (cámara anecoica) |
    | 10 | Respiración normal, hojas movidas por brisa | Apenas audible |
    | 20 | Estudio de grabación vacío, susurro | Muy silencioso |
    | 30 | Biblioteca silenciosa, dormitorio nocturno | Silencioso |
    | 40 | Conversación en tono bajo, refrigerador | Tranquilo |
    | 50 | Lluvia moderada, oficina tranquila | Normal |
    | 60 | Conversación normal a 1 m | Cómodo |
    | 70 | Aspiradora, tráfico urbano, TV con volumen normal | Ruidoso pero tolerable |
    | 80 | Calle con mucho tráfico, despertador, restaurante lleno | Muy ruidoso |
    | 85 | **Límite de exposición laboral (8 h/día)** — fábrica, cortadora de césped | Riesgo de daño |
    | 90 | Tráfico de camión, sierra eléctrica | Daño acumulativo |
    | 100 | Concierto de rock, discoteca, martillo neumático | Incómodo, daño en <30 min |
    | 110 | Concierto en primera fila, taladro pesado | Muy incómodo, daño en <2 min |
    | 120 | Umbral de dolor, despegue de avión (a 30 m) | Dolor físico |
    | 130 | Explosión cercana, motor a reacción (a 10 m) | Dolor intenso |
    | 140+ | Arma de fuego, explosión | Daño inmediato e irreversible |

    !!! warning "Escucha segura"
        La exposición a 85 dB SPL durante más de 8 horas diarias produce daño auditivo acumulativo. Por cada +3 dB, el tiempo de exposición segura se reduce a la **mitad**: a 88 dB → 4 horas, a 91 dB → 2 horas, a 100 dB → ~15 minutos. Los conciertos pueden superar los 110 dB — usá protección.

???+ note "Niveles de referencia en producción musical"

    En audio profesional se usan varios estándares de nivel. No son dB SPL (presión en el aire), pero comparten la misma lógica logarítmica:

    | Estándar | Referencia | Uso típico |
    |---|---|---|
    | **dBu** | 0 dBu = 0.775 V (sin carga) | Equipos profesionales (nivel nominal +4 dBu) |
    | **dBV** | 0 dBV = 1 V | Equipos de consumo (−10 dBV) |
    | **dBFS** | 0 dBFS = máximo digital (Full Scale) | DAWs, interfaces de audio |
    | **dB SPL** | 0 dB SPL = 20 µPa (umbral de audición) | Medición acústica con sonómetro |
    | **LUFS** | Sonoridad percibida | Streaming (Spotify, YouTube) |

    !!! tip "No mezcles las referencias"
        0 dB SPL es el umbral de audición (silencio casi absoluto). 0 dBFS es el máximo nivel digital posible antes de distorsión (lo más fuerte que permite el sistema). Son escalas completamente distintas — la confusión es una fuente frecuente de errores en estudiantes principiantes.

### ¿Qué tipo de dB ves en el mezclador? dBFS

    Cuando abrís la DAW (Pro Tools, Logic, Ableton), los **faders y medidores usan dBFS**, no dB SPL. La escala funciona **al revés** de lo que uno espera:

    | Valor | Significado en dBFS |
    |---|---|
    | **0 dBFS** | Techo digital — si lo pasás, la señal se recorta (*clipping*) |
    | −6 dBFS | Nivel alto, con poco margen |
    | −12 dBFS | Nivel cómodo |
    | −18 dBFS | **≈ 0 VU en consola analógica** — referencia clásica de trabajo |
    | −60 dBFS | Señal muy tenue, cerca del ruido de fondo |
    | −∞ dBFS | Silencio digital absoluto |

    En dB SPL, "0" es el silencio y subís hacia 120 (dolor). En dBFS, "0" es el **techo** y bajás hacia −∞ (silencio). Son referencias opuestas.

    ### El headroom: la regla de oro del digital

    En digital hay que **alejarse del 0 dBFS**. Se deja margen (*headroom*):

    - Grabación: picos alrededor de **−18 dBFS** (equivale a 0 VU)
    - Mezcla: picos alrededor de **−6 dBFS**, dejando espacio al mastering
    - Streaming: las plataformas normalizan a unos **−14 LUFS**

    !!! warning "El error del principiante"
        Muchos estudiantes suben el fader hasta que el meter toca 0 dBFS "para que suene fuerte". Eso solo genera distorsión digital (clipping) sin aportar calidad. En digital, el volumen final se controla en la **escucha** (bajando/subiendo el volumen del monitor en dB SPL), no pegando la señal al techo de dBFS.

    ### De la sala al DAW: el camino completo

    ```
    Monitor emite potencia (SWL)
         ↓
    La sala recibe intensidad (SIL)
         ↓
    Mi oído percibe presión (SPL)  ← medido con sonómetro
         ↓
    El micrófono convierte a voltaje (dBu)
         ↓
    La DAW lo digitaliza (dBFS)    ← lo que ves en el mezclador
    ```

    | Magnitud | Referencia | ¿Dónde aparece? |
    |---|---|---|
    | **SWL** | 10⁻¹² W | Ficha técnica del monitor |
    | **SIL** | 10⁻¹² W/m² | Cálculo de energía |
    | **SPL** | 20 µPa | Sonómetro, protección auditiva |
    | **dBu/dBV** | Voltaje | Consola, outboard |
    | **dBFS** | Full scale digital | Faders y meters de la DAW |
    | **LUFS** | Sonoridad | Plataformas de streaming |


---


*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 2, pp. 17–30 (Sound Levels and the Decibel).*
