# Sesión 21: Reflexiones tempranas y efecto de precedencia

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud | — |
    | <a id="ms"></a>**ms** | Milisegundo | Tiempo | 1 ms = 0.001 s |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="spl"></a>**SPL** | Sound Pressure Level | Nivel de presión sonora | En dB SPL |
    | <a id="c"></a>**c** | Velocidad del sonido | Velocidad de propagación en el aire | ≈ 343 m/s a 20°C |
    | <a id="delta-t"></a>**Δt** | Diferencia de tiempo | Retardo entre sonido directo y reflexión | En ms |
    | <a id="deltad"></a>**Δd** | Diferencia de camino | Diferencia de distancia entre camino directo y reflejado | En m |
    | <a id="lambda"></a>**λ** (lambda) | Longitud de onda | Distancia que recorre un ciclo completo | λ = c / f (en m) |

???+ note "El sonido NO viaja en línea recta: el rol de las reflexiones"

    Cuando escuchás un parlante en una sala, tu cerebro NO recibe un solo sonido. Recibe el sonido directo (el que viajó en línea recta desde el parlante hasta tus oídos) MÁS decenas o cientos de copias retardadas y atenuadas que llegaron después de rebotar en paredes, techo, piso y muebles. Estas copias son las **reflexiones**, y tu cerebro las PROCESA para construir la percepción del espacio (Everest & Pohlmann, 2009, Cap. 6, pp. 114–125).

    ### Las tres zonas temporales de una respuesta impulsional

    Si medimos lo que llega a nuestros oídos después de un impulso sonoro (un «clic»), obtenemos una **respuesta impulsional** (IR, por Impulse Response). Esta IR se divide en tres zonas:

    | Zona | Tiempo típico | ¿Qué contiene? | ¿Cómo lo percibe el cerebro? |
    |---|---|---|---|
    | **Sonido directo** | t = 0 | La señal original sin modificar. Llega en línea recta | «Ahí está la fuente» — localización espacial precisa (izquierda/derecha, cerca/lejos) |
    | **Reflexiones tempranas** | 5 – 80 ms | Las primeras 3-10 reflexiones. Llegan de direcciones específicas (paredes laterales, techo, piso, consola) | REFUERZO del sonido directo. Aportan sensación de «espacio pequeño/mediano». Si llegan con demasiado nivel o en frecuencias desbalanceadas, producen COLORACIÓN (comb filtering) |
    | **Reverberación tardía (cola)** | > 80 ms | Miles de reflexiones tan densas que se fusionan en una cola continua y difusa | Envoltura espacial, «ambiente». Define la sensación de «sala grande/pequeña». NO aporta información direccional precisa |

    !!! info "La frontera invisible: ~80 ms"
        Antes de ~80 ms, el cerebro analiza las reflexiones como EVENTOS DIRECCIONALES. Después de ~80 ms, la densidad de reflexiones es tan alta que el cerebro las fusiona en una «nube» difusa sin dirección. Esta transición de «eventos discretos» a «cola difusa» es la frontera entre reflexiones y reverberación. Por eso en los plugins de reverb, el parámetro «Pre-Delay» (retardo antes de que arranque la cola reverberante) suele estar entre 0 y 80 ms — estás controlando CUÁNTO tiempo dejás que las reflexiones tempranas actúen solas antes de que la cola las tape.

    > Insertar **Fig. 6-4** del Everest: respuesta impulsional de un recinto mostrando el sonido directo, las primeras reflexiones discretas (etiquetadas con la superficie que las produjo) y la cola reverberante continua.

???+ note "El filtro comb (comb filter): cuando las reflexiones DESTRUYEN tu sonido"

    Cuando un sonido directo y UNA reflexión se suman en el oído del oyente (o en un micrófono), NO se suman limpiamente. Como la reflexión llega retardada, las dos señales están desfasadas. Para algunas frecuencias, el desfase produce REFUERZO (+6 dB). Para otras, CANCELACIÓN (−∞ dB en el caso ideal).

    Esto crea un patrón de «peine» en la respuesta en frecuencia: picos y valles regularmente espaciados. De ahí el nombre: **filtro comb** (comb filter).

    \[
    \boxed{f_{\text{valle}, n} = \frac{(2n + 1) \cdot c}{2 \cdot \Delta d}, \quad n = 0, 1, 2, ...}
    \]

    \[
    \boxed{f_{\text{pico}, n} = \frac{n \cdot c}{\Delta d}, \quad n = 0, 1, 2, ...}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(f_{\text{valle}, n}\) | Frecuencia del n-ésimo valle (cancelación) | Hz | Frecuencias donde el desfase destructivo anula la señal |
    | \(f_{\text{pico}, n}\) | Frecuencia del n-ésimo pico (refuerzo) | Hz | Frecuencias donde el desfase constructivo suma +6 dB |
    | \(\Delta d\) | Diferencia de camino | m | Distancia extra que recorre la reflexión: \(\Delta d = d_{\text{reflejado}} - d_{\text{directo}}\) |
    | \(c\) | Velocidad del sonido | m/s | ≈ 343 m/s |
    | \(n\) | Orden del valle/pico | — | n = 0: primer valle/pico; n = 1: segundo; etc. |

    ### Ejemplo concreto: reflexión de la consola de mezcla

    Tus monitores están a 1.2 m de tus oídos (camino directo). La consola de mezcla está debajo, y el sonido que rebota en ella recorre 1.2 m (monitor → consola) + 0.8 m (consola → oído) = 2.0 m.

    \[
    \Delta d = 2.0 - 1.2 = 0.8\ \text{m}
    \]

    | n | \(f_{\text{valle}}\) (Hz) | \(f_{\text{pico}}\) (Hz) |
    |---|---|---|
    | 0 | \(1 \times 343 / (2 \times 0.8) = \mathbf{214}\ \text{Hz}\) | 0 Hz (DC) |
    | 1 | \(3 \times 343 / (2 \times 0.8) = \mathbf{643}\ \text{Hz}\) | \(1 \times 343 / 0.8 = \mathbf{429}\ \text{Hz}\) |
    | 2 | \(5 \times 343 / (2 \times 0.8) = \mathbf{1,072}\ \text{Hz}\) | \(2 \times 343 / 0.8 = \mathbf{858}\ \text{Hz}\) |
    | 3 | \(7 \times 343 / (2 \times 0.8) = \mathbf{1,501}\ \text{Hz}\) | \(3 \times 343 / 0.8 = \mathbf{1,286}\ \text{Hz}\) |

    El resultado: la respuesta en frecuencia que llega a tus oídos tiene «peines» — valles en 214, 643, 1072, 1501 Hz y picos en 429, 858, 1286 Hz. Lo que escuchás NO es lo que el monitor está reproduciendo. Es el monitor MÁS el filtro comb que la reflexión de la consola está aplicando.

    !!! warning "Esto NO se ecualiza"
        Un filtro comb es un problema en el DOMINIO DEL TIEMPO (una reflexión retardada que interfiere), no en el dominio de la frecuencia. Podés ver los valles en un analizador de espectro y tener la tentación de «subir esas frecuencias con un EQ». NO LO HAGAS. Estarías ecualizando la SUMA del sonido directo + reflexión, y esa ecualización aplicaría a TODO (incluyendo el sonido directo). La única solución a un filtro comb es eliminar la reflexión que lo causa: absorber, redirigir o difundir la primera reflexión. Tratar el filtro comb con EQ es como tratar de arreglar una foto borrosa cambiando los colores de la imagen — no estás atacando la CAUSA del problema.

    > Insertar **Fig. 10-1** del Everest: respuesta en frecuencia de un filtro comb (comb filter). Gráfico de amplitud (dB) vs. frecuencia (Hz) mostrando la serie regular de picos y valles. Señalar que el espaciado entre valles consecutivos es Δf = c / Δd.

???+ note "El efecto de precedencia (efecto Haas)"

    En 1949, Helmut Haas descubrió algo fascinante sobre cómo nuestro cerebro procesa las reflexiones tempranas. Lo que encontró desafía la intuición:

    ### El experimento de Haas

    Imaginá dos parlantes emitiendo el MISMO sonido. El parlante A está directamente frente a vos. El parlante B está a un costado, y su sonido llega con un pequeño retardo (por ejemplo, 10 ms). ¿Qué escuchás?

    **Intuición incorrecta**: «Voy a escuchar dos fuentes — una al frente y otra al costado.»

    **Lo que REALMENTE escuchás**: Un SOLO sonido, localizado en la dirección del PRIMER parlante (A). El segundo parlante (B) es prácticamente INAUDIBLE como fuente separada — su sonido se fusiona perceptualmente con el primero.

    Esto es el **efecto de precedencia** (también llamado **efecto Haas** o **ley del primer frente de onda**): el cerebro humano suprime la localización de las reflexiones que llegan dentro de una cierta ventana temporal después del sonido directo, y «atribuye» toda la imagen espacial al sonido que llegó PRIMERO.

    ### Las tres zonas del efecto Haas

    | Retardo de la reflexión (Δt) | ¿Qué percibe el cerebro? | Implicancia práctica |
    |---|---|---|
    | **0 – 1 ms** | Fusión completa. El cerebro no distingue la reflexión como evento separado. La localización es precisa hacia la primera fuente | Suma acústica: puede haber refuerzo o cancelación sin que lo notes como «eco». La coloración por comb filter puede ser sutil pero REAL |
    | **1 – 30 ms** | La reflexión se percibe como parte del MISMO evento sonoro. La localización sigue anclada en la fuente directa. La reflexión aporta «cuerpo» y «espaciosidad» pero NO desplaza la imagen | **ZONA DE FUSIÓN**. Las reflexiones en esta ventana NO dañan la imagen estéreo. Los ingenieros de mezcla usan delays de 10-30 ms para «engordar» sin desenfocar |
    | **30 – 50 ms** | La reflexión empieza a separarse perceptualmente. Si tiene suficiente nivel, puede «ensanchar» la imagen (el sonido parece venir de una zona más amplia, no de un punto). La localización puede volverse difusa | **ZONA DE TRANSICIÓN**. Útil para crear sensación de amplitud en mezclas (Haas panning). Pero cuidado: demasiada energía en esta zona «desdibuja» la imagen estéreo |
    | **> 50 ms** | La reflexión se percibe como un EVENTO SEPARADO. El cerebro escucha: sonido directo → silencio → eco. La localización puede saltar entre fuente directa y reflexión | **ECO**. Generalmente indeseable en música grabada (salvo como efecto creativo). En salas de concierto, un eco > 50 ms se considera un defecto de diseño |

    !!! tip "La regla de oro para estudios de grabación"
        Las reflexiones tempranas dentro de los primeros **20 ms** NO deben llegar con más de **10 dB por debajo** del sonido directo. Si una reflexión de la pared lateral llega a los 8 ms con solo −3 dB respecto al directo, el cerebro la fusiona pero la COLORACIÓN (comb filtering) es severa. El objetivo del tratamiento acústico en puntos de primera reflexión es ATENUAR estas reflexiones para que el cerebro reciba el sonido directo LIMPIO y la sala no «ensucie» la imagen estéreo.

    > Insertar **Fig. 10-3** del Everest: diagrama del efecto de precedencia. Mostrar dos fuentes con retardo Δt y la ventana de fusión (1-30 ms). Señalar la zona donde la localización está dominada por la primera fuente que llega, independientemente del nivel relativo de la reflexión.

???+ note "Reflexiones tempranas vs. tardías: quién hace qué"

    No todas las reflexiones son iguales. Las reflexiones tempranas y las tardías cumplen roles PERCEPTUALES completamente distintos:

    | Característica | Reflexiones tempranas (≤ 80 ms) | Reflexiones tardías / reverberación (> 80 ms) |
    |---|---|---|
    | **Origen** | Primeros 3-10 rebotes. Superficies grandes cercanas (paredes laterales, techo, piso, consola) | Miles de reflexiones acumuladas de todos los rebotes sucesivos |
    | **Direccionalidad** | ALTAMENTE direccionales. Cada reflexión viene de una dirección específica | NO direccional. La energía llega de TODAS direcciones por igual (campo difuso) |
    | **Información que aportan** | Tamaño de la sala, distancia a superficies, «intimidad» o «amplitud». El patrón de retardos y direcciones es una FIRMA ACÚSTICA del espacio | Sensación de «envoltura», calidez, «vida» del espacio. La pendiente de decaimiento (RT60) define si la sala es «seca» o «viva» |
    | **Efecto sobre la imagen estéreo** | PUEDEN DAÑARLA si son muy intensas o muy tempranas. El comb filtering desplaza la localización aparente y colorea el timbre | No afectan la localización (son difusas), pero pueden ENMASCARAR detalles finos (transitorios, reverberación de la propia grabación) |
    | **Se controlan con...** | Absorción en puntos de primera reflexión (side walls, ceiling cloud), difusores, angulación de superficies (RFZ — Reflection Free Zone) | Absorción distribuida uniformemente, difusores, geometría de la sala (evitar superficies paralelas) |
    | **Ejemplo en tu DAW** | Un delay de 15 ms con feedback 0, paneado a un lado, simula una reflexión temprana lateral | Un plugin de reverb con Pre-Delay = 40 ms y Decay Time = 1.5 s modela la separación entre reflexiones tempranas y cola |

    ### El concepto de RFZ (Reflection Free Zone)

    En un estudio de grabación o sala de control, el objetivo NO es eliminar TODAS las reflexiones (eso sería una cámara anecoica, que suena artificial e incómoda). El objetivo es crear una **zona libre de reflexiones tempranas** (RFZ) alrededor de la posición de escucha:

    - **Dentro de la RFZ** (≈ primeros 15-20 ms después del sonido directo): NO deben llegar reflexiones con nivel significativo. El oyente escucha el sonido directo LIMPIO, sin coloración.
    - **Después de la RFZ**: las reflexiones y la cola reverberante SON deseables. Aportan sensación de espacio y naturalidad. Pero deben llegar con suficiente retardo (> 20 ms) y nivel controlado.

    Esto se logra tratando los «puntos de primera reflexión»: los lugares en paredes, techo y piso donde una reflexión rebotaría directamente hacia la posición de escucha. Lo veremos en la práctica.

???+ note "Aplicación al mundo real: ¿por qué tu mezcla suena distinta en el auto?"

    Entender las reflexiones tempranas explica uno de los grandes misterios del audio: por qué una mezcla que suena INCREÍBLE en tu estudio suena HORRIBLE en otros sistemas.

    Cuando mezclás en tu estudio, estás escuchando:

    \[
    \text{Lo que llega a tus oídos} = \text{Monitores} + \text{Reflexiones de TU sala (comb filtering)}
    \]

    Si hay un filtro comb produciendo un valle en 800 Hz (por la reflexión de la consola), tu cerebro compensa: «acá falta 800 Hz» → subís 800 Hz en el ecualizador. Pero ese valle SOLO existe en TU posición de escucha. En cualquier otro sistema (auriculares, auto, living del cliente), ese valle NO ESTÁ — y ahora tenés 800 Hz de más.

    **Las reflexiones tempranas de tu sala están ECUALIZANDO tus mezclas sin que te des cuenta.** Cada decisión de EQ, compresión y paneo que tomás está influenciada por el comb filtering de TU sala. Si tu sala no está tratada, estás mezclando a ciegas — corrigiendo problemas que solo existen en tu cuarto.

    | Problema de sala | Lo que escuchás | Lo que hacés | Consecuencia en otros sistemas |
    |---|---|---|---|
    | Valle en 800 Hz (comb filter) | «Falta presencia en la voz» | Subís 800 Hz en la voz | La voz suena nasal y agresiva |
    | Pico en 120 Hz (modo de sala) | «El bajo retumba» | Bajás 120 Hz en el bajo | El bajo desaparece, la mezcla suena sin cuerpo |
    | RT60 alto en agudos | «La mezcla suena 'abierta' y 'aire'» | No agregás brillo | La mezcla suena apagada y oscura |
    | RT60 bajo en graves | «Los graves son 'tight' y controlados» | No controlás el sub-bajo | Los graves son un desastre abajo de 60 Hz |

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 6, pp. 114–125 (Reflection — Early Reflections, Ray Tracing, Specular Reflection). Capítulo 10, pp. 154–169 (Comb-Filter Effects, Precedence Effect, Reflection and Image Shift).*
