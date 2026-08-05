# Sesión 23: Interferencia y ondas estacionarias

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud | — |
    | <a id="ms"></a>**ms** | Milisegundo | Tiempo | 1 ms = 0.001 s |
    | <a id="cm"></a>**cm** | Centímetro | Longitud | 1 cm = 0.01 m |
    | <a id="db"></a>**dB** | Decibel | Nivel (relativo) | Escala logarítmica |
    | <a id="l"></a>**λ** (lambda) | Longitud de onda | Distancia que recorre un ciclo completo | En m (λ = c/f) |
    | <a id="f"></a>**f** | Frecuencia | Ciclos por segundo | En Hz |
    | <a id="c"></a>**c** | Velocidad del sonido | Velocidad de propagación | ~343 m/s (20°C) |
    | <a id="delta"></a>**Δd** | Diferencia de camino | Diferencia de distancia entre dos trayectorias | En m |
    | <a id="phi"></a>**φ** (phi) | Ángulo de fase | Desplazamiento relativo entre dos ondas | En radianes (rad) o grados (°) |
    | <a id="t"></a>**T** | Período | Duración de un ciclo | T = 1/f, en segundos |

???+ note "El principio de superposición: cuando dos ondas se encuentran"

    En acústica de interiores, el sonido NO viaja por UN solo camino desde la fuente hasta el oyente. Viaja por MÚLTIPLES caminos: el directo y las reflexiones en cada superficie. Cada uno de esos caminos tiene una longitud distinta, y por lo tanto un tiempo de llegada distinto y una FASE distinta.

    Cuando dos (o más) ondas coinciden en el mismo punto del espacio en el mismo instante, NO colisionan ni se destruyen — **se superponen**. El principio de superposición establece que la presión sonora resultante en ese punto es la SUMA ALGEBRAICA de las presiones individuales (Everest & Pohlmann, 2009, Cap. 10, pp. 154–169):

    \[
    p_{\text{total}}(t) = p_1(t) + p_2(t) + p_3(t) + \ldots
    \]

    ### Interferencia constructiva

    Si dos ondas de la MISMA frecuencia llegan EN FASE (diferencia de fase = 0°, 360°, 720°…), las crestas coinciden con crestas y los valles con valles. Las amplitudes se SUMAN:

    \[
    A_{\text{total}} = A_1 + A_2
    \]

    El resultado es un REFUERZO: el sonido es MÁS FUERTE en ese punto. Si las dos ondas tienen amplitud idéntica, la amplitud resultante es el DOBLE (equivale a +6 dB).

    **Condición para interferencia constructiva**: la diferencia de camino Δd debe ser un múltiplo ENTERO de la longitud de onda:

    \[
    \Delta d = n \cdot \lambda \quad (n = 0, 1, 2, 3, \ldots)
    \]

    ### Interferencia destructiva

    Si dos ondas de la MISMA frecuencia llegan EN CONTRAFASE (diferencia de fase = 180°, 540°, 900°…), la cresta de una coincide con el valle de la otra. Las amplitudes se RESTAN:

    \[
    A_{\text{total}} = |A_1 - A_2|
    \]

    El resultado es una CANCELACIÓN: el sonido es MÁS DÉBIL en ese punto. Si las dos ondas tienen amplitud idéntica, la cancelación es TOTAL (silencio teórico en ese punto).

    **Condición para interferencia destructiva**: la diferencia de camino Δd debe ser un múltiplo IMPAR de media longitud de onda:

    \[
    \Delta d = (2n + 1) \cdot \frac{\lambda}{2} \quad (n = 0, 1, 2, 3, \ldots)
    \]

    !!! warning "La interferencia NO destruye energía"
        La energía total del sistema se CONSERVA. Si en un punto hay cancelación (interferencia destructiva), en OTRO punto DEBE haber refuerzo (interferencia constructiva). La energía no desaparece — se REDISTRIBUYE espacialmente. Esto es crucial: no podés «eliminar» un modo de sala con interferencia destructiva en UN punto; la energía se fue a otro lado.

    > Insertar **Fig. 10-2** del Everest: dos ondas sinusoidales de igual frecuencia. Panel superior: ondas EN FASE → suma constructiva (amplitud doble). Panel inferior: ondas EN CONTRAFASE → suma destructiva (cancelación total si A₁ = A₂). Panel intermedio: diferencia de fase arbitraria → suma parcial.

???+ note "Ondas estacionarias: cuando la interferencia «se queda quieta»"

    Una **onda estacionaria** (standing wave) es un caso ESPECIAL de interferencia que ocurre cuando dos ondas de IGUAL frecuencia y amplitud viajan en DIRECCIONES OPUESTAS. En una sala, esto sucede cuando una onda incidente y su reflexión desde una pared se superponen.

    A diferencia de una onda viajera (que AVANZA), una onda estacionaria PARECE no moverse: el patrón de presión está FIJO en el espacio.

    ### Nodos y antinodos

    | Elemento | ¿Qué es? | ¿Qué pasa ahí? |
    |---|---|---|
    | **Nodo** (node) | Punto donde la presión sonora es SIEMPRE cero (idealmente) | Las dos ondas llegan siempre en contrafase. Cancelación total permanente. Ahí NO hay sonido |
    | **Antinodo** (antinode) | Punto donde la presión sonora es MÁXIMA | Las dos ondas llegan siempre en fase. Refuerzo total permanente. Ahí el sonido es MÁS FUERTE |

    La distancia entre dos nodos consecutivos (o dos antinodos consecutivos) es SIEMPRE **λ/2** (media longitud de onda).

    !!! tip "Visualizá una onda estacionaria"
        Imaginá una cuerda de guitarra vibrando. Los extremos están fijos (nodos). El centro vibra con máxima amplitud (antinodo). La cuerda NO parece viajar — simplemente «ondula en el lugar». Una onda estacionaria de sonido en una sala es conceptualmente lo mismo: la presión oscila fuertemente en ciertos puntos fijos y no oscila en otros.

    ### Ondas estacionarias entre dos paredes paralelas

    En una sala, cada PAR de paredes paralelas puede alojar ondas estacionarias. La condición es que la distancia entre paredes sea un múltiplo de media longitud de onda:

    \[
    L = n \cdot \frac{\lambda}{2} \quad \Rightarrow \quad \lambda = \frac{2L}{n} \quad \Rightarrow \quad \boxed{f_n = \frac{n \cdot c}{2L}}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(f_n\) | Frecuencia del n-ésimo modo | Hz | Frecuencia a la que se forma la onda estacionaria |
    | \(n\) | Número de modo | — | n = 1, 2, 3, … (cuántas medias longitudes de onda «caben» entre las dos paredes) |
    | \(c\) | Velocidad del sonido | m/s | ~343 m/s a 20°C |
    | \(L\) | Distancia entre paredes | m | Dimensión de la sala en ese eje |

    **Ejemplo**: sala con L = 4 m entre paredes paralelas.

    | n | f_n (Hz) | ¿Qué significa? |
    |---|---|---|
    | 1 | \(f_1 = 343/(2\times 4) = 42.9\) Hz | Una media longitud de onda «cabe» entre las paredes. Nodo en cada pared, UN antinodo en el centro |
    | 2 | \(f_2 = 85.8\) Hz | Dos medias longitudes de onda. Nodos en las paredes y en el centro. Dos antinodos a 1/4 y 3/4 de L |
    | 3 | \(f_3 = 128.6\) Hz | Tres medias longitudes de onda. Tres antinodos, cuatro nodos (incluyendo paredes) |
    | 4 | \(f_4 = 171.4\) Hz | Cuatro medias longitudes de onda |

    ### El patrón espacial: ¿dónde escucho qué?

    Para un modo axial de primer orden (n = 1) entre paredes separadas 4 m:

    - **Paredes (0 m y 4 m)**: NODOS de presión (la presión es siempre la presión atmosférica, no oscila). Las partículas de aire, en cambio, tienen MÁXIMO desplazamiento en las paredes.
    - **Centro (2 m)**: ANTINODO de presión. La presión oscila con máxima amplitud. Las partículas de aire están QUIETAS (nodo de velocidad).
    - **A 1 m y 3 m**: presión intermedia.

    **Consecuencia práctica brutal**: si tus oídos están en un ANTINODO de 43 Hz, escuchás esa frecuencia 10-15 dB MÁS FUERTE de lo que realmente está sonando. Si están en un NODO, escuchás esa frecuencia 20-30 dB MÁS BAJA. Las dos posiciones están en la MISMA sala, escuchando los MISMOS monitores, pero el balance espectral es COMPLETAMENTE DISTINTO.

    > Insertar **Fig. 10-4** del Everest: onda estacionaria entre dos paredes paralelas mostrando los nodos (presión cero) y antinodos (presión máxima). Incluir el perfil de presión a lo largo de la distancia entre paredes.

???+ note "El filtro comb (comb filter): interferencia en el dominio de la frecuencia"

    Cuando un sonido llega con un RETARDO respecto a su copia (ej. sonido directo + su reflexión en una superficie), la superposición NO es uniforme en frecuencia: algunas frecuencias se REFUERZAN y otras se CANCELAN, creando un patrón periódico de «dientes de peine» en el espectro. De ahí el nombre **comb filter** (filtro peine).

    ### Mecanismo

    El sonido directo recorre la distancia \(d_{\text{directo}}\). La reflexión recorre una distancia MAYOR: \(d_{\text{reflejada}}\). La diferencia de camino es:

    \[
    \Delta d = d_{\text{reflejada}} - d_{\text{directo}}
    \]

    El retardo temporal correspondiente:

    \[
    \Delta t = \frac{\Delta d}{c}
    \]

    ### Frecuencias de cancelación (valles, nulls)

    La cancelación ocurre cuando la diferencia de camino es un múltiplo IMPAR de media longitud de onda:

    \[
    \boxed{f_{\text{null}}(k) = \frac{(2k + 1) \cdot c}{2 \cdot \Delta d}} \quad k = 0, 1, 2, \ldots
    \]

    ### Frecuencias de refuerzo (picos, peaks)

    El refuerzo ocurre cuando la diferencia de camino es un múltiplo ENTERO de la longitud de onda:

    \[
    \boxed{f_{\text{peak}}(k) = \frac{k \cdot c}{\Delta d}} \quad k = 0, 1, 2, \ldots
    \]

    ### Ejemplo concreto: la reflexión de la consola

    Tu monitor está a 1.2 m de tus oídos (sonido directo). La consola de mezcla (superficie reflectante) está a 0.8 m debajo de la línea directa monitor→oído. El camino reflejado monitor→consola→oído recorre 1.6 m (ida y vuelta a la consola). Diferencia de camino: Δd = 1.6 − 1.2 = 0.4 m.

    | k | f_null (Hz) — cancelación | f_peak (Hz) — refuerzo |
    |---|---|---|
    | 0 | \(f = 343 / (2 \times 0.4) = 429\) Hz | \(f = 0\) Hz (DC) |
    | 1 | \(f = 3 \times 343 / (2 \times 0.4) = 1,286\) Hz | \(f = 343 / 0.4 = 858\) Hz |
    | 2 | \(f = 5 \times 343 / (2 \times 0.4) = 2,144\) Hz | \(f = 2 \times 343 / 0.4 = 1,715\) Hz |
    | 3 | 3,001 Hz | 2,573 Hz |

    Resultado: el espectro tiene «agujeros» en 429, 1,286, 2,144, 3,001 Hz… y «montañas» en 858, 1,715, 2,573 Hz… La separación entre valles consecutivos es constante: Δf = c/Δd = 343/0.4 = 858 Hz.

    !!! warning "NO ecualices un comb filter"
        Si medís tu sala con REW y ves estos picos y valles, tu instinto va a ser agarrar un ecualizador y «corregirlos». **No funciona.** El comb filter es un problema de DOMINIO TEMPORAL (una reflexión retardada), no de respuesta en frecuencia. Si ecualizás el valle a 429 Hz, estás cambiando TANTO el sonido directo como el reflejado. La cancelación se va a seguir produciendo porque el EQ no elimina el retardo. Peor aún: movés la cabeza 10 cm y el patrón de interferencia cambia completamente — el EQ que «corregía» en una posición ahora CREA un problema nuevo en otra.

        La solución correcta es TRATAR la superficie reflectante (absorción, difusión o reorientación), no ecualizar.

    > Insertar **Fig. 10-1** del Everest: respuesta en frecuencia de un filtro comb. Eje X: frecuencia (lineal), eje Y: amplitud (dB). Mostrar los «dientes» periódicos de cancelación y refuerzo, y cómo la separación entre valles (Δf) depende de Δd.

???+ note "Fase y polaridad: dos conceptos que TODO ingeniero de audio debe distinguir"

    En producción musical, «fase» y «polaridad» se usan como sinónimos constantemente. **Son conceptos distintos** y confundirlos causa decisiones técnicas incorrectas.

    ### Polaridad (polarity)

    Es una INVERSIÓN FIJA (180°) de la señal, independiente de la frecuencia: todo el espectro se invierte a la vez. Ocurre por:
    - Un cable balanceado con los pines 2 y 3 intercambiados.
    - El botón «phase invert» (Ø) de una consola o preamplificador (que en realidad invierte polaridad, no fase).
    - Un micrófono cableado al revés.

    La inversión de polaridad afecta a TODAS las frecuencias por igual. Si dos micrófonos capturan la misma fuente con polaridad opuesta, la suma produce cancelación en TODO el espectro (sonido «hueco», pérdida de graves, imagen estéreo colapsada).

    ### Fase (phase)

    Es un DESPLAZAMIENTO EN EL TIEMPO que VARÍA CON LA FRECUENCIA. Ocurre por:
    - Diferencia de distancia entre dos micrófonos (Δd → Δt = Δd/c).
    - Reflexiones en la sala (comb filter).
    - Procesamiento digital (filtros, conversores, plugins).

    La fase es DEPENDIENTE de la frecuencia: un retardo de 1 ms produce 180° de desfase a 500 Hz (cancelación total) pero solo 36° de desfase a 100 Hz (cancelación parcial apenas perceptible).

    ### Tabla comparativa

    | Aspecto | Polaridad | Fase |
    |---|---|---|
    | ¿Qué es? | Inversión de signo (multiplicar por −1) | Desplazamiento en el tiempo |
    | ¿Depende de la frecuencia? | NO — afecta todo el espectro por igual | SÍ — el mismo Δt produce distinto Δφ para cada f |
    | Causa típica | Cableado invertido, botón Ø | Distancia, reflexiones, filtros |
    | ¿Se corrige con EQ? | No | No |
    | ¿Se corrige con alineación temporal? | No (eso es fase) | Sí |
    | ¿Se corrige con botón Ø? | Sí | Solo a UNA frecuencia específica |

    !!! tip "La regla 3:1 para grabación multimicrófono"
        Para minimizar problemas de fase entre dos micrófonos que capturan la misma fuente, la distancia entre micrófonos debe ser AL MENOS 3 VECES la distancia de cada micrófono a su fuente. Ejemplo: si el mic 1 está a 30 cm del cantante, el mic 2 debe estar al menos a 90 cm del mic 1. Esto asegura que la diferencia de nivel entre lo que capta cada micrófono del OTRO sea ≥ 9 dB, suficiente para que la interferencia de fase sea poco perceptible.

???+ note "Ejemplo integrador: diagnosticá tu posición de escucha"

    Volvamos a la sala de control de sesiones anteriores: 6 m × 4 m × 3 m. Vamos a analizar qué ondas estacionarias se forman y cómo afectan tu percepción.

    ### Paso 1: Modos axiales entre paredes

    | Eje | L (m) | f₁ (Hz) | f₂ (Hz) | f₃ (Hz) | f₄ (Hz) | f₅ (Hz) |
    |---|---|---|---|---|---|---|
    | **Longitudinal (x)** | 6.0 | 28.6 | 57.2 | 85.8 | 114.3 | 142.9 |
    | **Transversal (y)** | 4.0 | 42.9 | 85.8 | 128.6 | 171.5 | 214.4 |
    | **Vertical (z)** | 3.0 | 57.2 | 114.3 | 171.5 | 228.7 | 285.8 |

    ### Paso 2: ¿Dónde están los nodos y antinodos?

    Para el modo longitudinal f₁ = 28.6 Hz (eje x, 6 m):

    - **Nodo de presión** en las paredes x = 0 m y x = 6 m.
    - **Antinodo de presión** en el centro x = 3 m.
    - Si tus oídos están a ~1.5 m de la pared frontal (x = 1.5 m), estás a λ/4 del antinodo → presión aprox. 70% del máximo. Escuchás 28.6 Hz con refuerzo significativo (no máximo, pero cerca).

    Para el modo vertical f₁ = 57.2 Hz (eje z, 3 m):

    - **Antinodo de presión** en z = 1.5 m (justo a la altura de los oídos si la sala tiene 3 m de alto y estás sentado a ~1.2 m).
    - En z = 1.2 m, estás a 0.3 m del antinodo (que está en z = 1.5 m). λ/2 = 3 m, así que λ/4 = 0.75 m. A 0.3 m del antinodo → presión ~90% del máximo. **Escuchás 57.2 Hz MUY reforzado.**

    ### Paso 3: Diagnóstico

    En esta sala, los modos de 28.6 Hz, 42.9 Hz y 57.2 Hz se superponen entre 28 y 60 Hz. Si además los modos y (42.9 Hz) y z (57.2 Hz) tienen antinodos cerca de tu posición de escucha, estás escuchando un REFUERZO ACUMULADO en graves que NO está en la grabación — lo está creando TU SALA.

    **La pregunta que todo ingeniero debe hacerse**: «¿El bajo que estoy escuchando está en la mezcla o en mi sala?»

    ---

    *Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 10, pp. 154–169 (Comb-Filter and Reflection Effects — Superposition, Constructive/Destructive Interference, Standing Waves, Comb Filtering, Phase and Polarity). Capítulo 13, pp. 242–275 (Modal Resonances — Axial Modes and Standing Wave Patterns).*
