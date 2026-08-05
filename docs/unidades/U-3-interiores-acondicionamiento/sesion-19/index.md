# Sesión 19: Reverberación

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
    | <a id="ms"></a>**ms** | Milisegundo | Tiempo | 1 ms = 0.001 s |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="rt60"></a>**RT60** (o T60) | Tiempo de reverberación | Tiempo que tarda el sonido en decaer 60 dB después de apagar la fuente | En segundos |
    | <a id="edt"></a>**EDT** | Early Decay Time | Tiempo de decaimiento temprano (primeros 10 dB de caída × 6) | En segundos |
    | <a id="v"></a>**V** | Volumen | Volumen del recinto | En m³ |
    | <a id="a"></a>**A** | Absorción total | Suma ponderada α·S de todas las superficies | En m² (sabins métricos) |
    | <a id="w"></a>**W** | Watt | Potencia acústica de la fuente | En watts (W) |
    | <a id="alpha"></a>**ᾱ** (alfa barra) | Coeficiente de absorción promedio | Promedio ponderado de α en todo el recinto | ᾱ = A / S_total |

???+ note "¿Qué es la reverberación?"

    La **reverberación** es la persistencia del sonido en un recinto después de que la fuente sonora se apaga. No es un eco — es la acumulación de MILES de reflexiones que llegan tan juntas que nuestro cerebro las fusiona en una «cola sonora» continua y difusa (Everest & Pohlmann, 2009, Cap. 11).

    ### Eco vs. reverberación: no son lo mismo

    | Fenómeno | ¿Qué es? | Retardo típico | ¿El cerebro lo percibe como... |
    |---|---|---|---|
    | **Sonido directo** | El primer sonido que llega, en línea recta fuente → receptor | 0 ms (referencia) | La fuente misma — localización, claridad |
    | **Reflexión temprana** | Primeras reflexiones (1-3 rebotes), llegan dentro de los primeros ~50 ms | 5 – 50 ms | Refuerzo del sonido directo, sensación de «espacio pequeño». Si llegan con mucho nivel y retardo, pueden colorear el sonido |
    | **Eco** | Una reflexión discreta que llega con suficiente retardo (> 50 ms) y nivel como para ser percibida como evento SEPARADO | > 50 ms | Una repetición distinguible del sonido original — «eco» |
    | **Reverberación** | Miles de reflexiones tan densas que se fusionan en una cola continua | A partir de ~80-100 ms, la densidad de reflexiones es tan alta que no se distinguen eventos individuales | «Ambiente», «cola», envoltura espacial. NO se perciben reflexiones individuales |

    !!! info "El tiempo de reverberación NO es un efecto digital"
        La reverberación es un fenómeno FÍSICO que ocurre en TODO espacio cerrado. Cada vez que hablás en una habitación, estás escuchando la reverberación natural de ese espacio. Los plugins de reverb de tu DAW SIMULAN este fenómeno. Entender la física de la reverberación real te permite usar los plugins con criterio, no con presets al azar.

    > Insertar **Fig. 11-1** del Everest: representación del campo sonoro en un recinto, mostrando el sonido directo (rayo único) y las múltiples reflexiones que forman el campo reverberante (muchos rayos rebotando).

???+ note "Crecimiento y decaimiento del sonido en un recinto"

    Imaginá que encendés un parlante dentro de una sala. ¿Qué pasa con el nivel sonoro en el tiempo?

    ### Fase 1: Crecimiento

    Cuando encendés la fuente, el nivel sonoro NO alcanza su valor máximo instantáneamente. La energía debe «llenar» la sala. Cada reflexión agrega energía al campo reverberante, y el nivel crece gradualmente hasta alcanzar un **estado estacionario** (equilibrio):

    \[
    \text{Energía que entra (fuente)} = \text{Energía que se pierde (absorción + transmisión)}
    \]

    En este equilibrio, el nivel sonoro es constante. La energía que la fuente inyecta cada segundo es exactamente igual a la energía que las superficies absorben y transmiten cada segundo.

    ### Fase 2: Decaimiento

    Cuando apagás la fuente, la energía deja de entrar. Pero la energía que YA está en la sala no desaparece instantáneamente — sigue rebotando. Cada vez que una onda choca contra una superficie, una fracción α se absorbe. Después de muchos choques, la energía remanente es tan baja que el sonido se vuelve inaudible.

    Este proceso de «muerte» del sonido es el **decaimiento reverberante**:

    | Reflexión # | Energía remanente (aprox., ᾱ = 0.20) | Nivel relativo |
    |---|---|---|
    | 0 (fuente apagada) | 100% | 0 dB |
    | 1 | 80% | −1.0 dB |
    | 5 | 33% | −4.8 dB |
    | 10 | 11% | −9.7 dB |
    | 20 | 1.2% | −19.3 dB |
    | 40 | 0.013% | −38.7 dB |
    | 60 | 0.00015% | −58.2 dB |
    | **~62** | **~0.0001%** | **−60 dB** → ¡RT60! |

    Cada reflexión reduce la energía en un factor (1 − ᾱ). Si ᾱ = 0.20, cada choque deja el 80% de la energía anterior. Después de N reflexiones, la energía es (0.80)^N de la original.

    **Dos factores controlan cuánto tarda en decaer 60 dB:**
    1. **Cuánta energía se absorbe en cada reflexión** → depende de ᾱ (a MAYOR absorción, MENOS reflexiones para bajar 60 dB)
    2. **Cuánto tiempo pasa entre reflexiones** → depende del camino libre medio (a MAYOR sala, MÁS tiempo entre choques)

    > Insertar **Fig. 11-3** del Everest: curva de decaimiento sonoro — gráfico de nivel (dB) vs. tiempo (s). Mostrar el estado estacionario (nivel constante mientras la fuente está encendida), el momento en que se apaga la fuente, y la caída gradual del nivel. Señalar el punto de −60 dB y la definición de RT60.

???+ note "RT60: la medida universal de la reverberación"

    El **tiempo de reverberación RT60** (o T60) es el parámetro más importante en acústica de salas. Se define como:

    > **RT60 = tiempo que tarda el nivel de presión sonora en decaer 60 dB después de que la fuente se apaga.**

    ¿Por qué 60 dB? Porque 60 dB corresponde aproximadamente al rango dinámico entre un sonido forte (fuerte) y la inaudibilidad en una sala de conciertos. Es decir, RT60 mide cuánto tarda un sonido fuerte en «desaparecer» completamente. Y 60 dB equivale a una reducción de energía de 1 millón de veces (10^(60/10) = 1,000,000).

    ### Valores típicos de RT60

    | Recinto | Volumen típico | RT60 recomendado | ¿Cómo se percibe? |
    |---|---|---|---|
    | **Cabina vocal / locución** | 10 – 30 m³ | **0.2 – 0.4 s** | Muy seco. Cada sílaba se escucha aislada. Ideal para voz hablada |
    | **Home studio (mezcla)** | 30 – 60 m³ | **0.3 – 0.5 s** | Seco pero natural. Las decisiones de ecualización y compresión son precisas porque la sala no «ensucia» el sonido |
    | **Sala de control profesional** | 60 – 150 m³ | **0.2 – 0.4 s** | Extremadamente controlado. Diseñado para que TODAS las frecuencias decaigan de manera uniforme |
    | **Sala de ensayo** | 50 – 150 m³ | **0.5 – 1.0 s** | Vivo pero controlado. Los músicos se escuchan entre sí sin que el sonido sea un caos |
    | **Aula de clases** | 150 – 500 m³ | **0.6 – 0.8 s** | Buena inteligibilidad de la palabra. El profesor se entiende sin esfuerzo |
    | **Sala de conciertos (música de cámara)** | 1,000 – 5,000 m³ | **1.2 – 1.6 s** | Cálido, envolvente. La reverberación «une» las notas y da sensación de espacio |
    | **Sala de conciertos (orquesta sinfónica)** | 10,000 – 25,000 m³ | **1.8 – 2.2 s** | Majestuoso. La reverberación larga es parte del sonido orquestal |
    | **Catedral gótica** | 30,000 – 100,000 m³ | **3.0 – 8.0 s** | Inmenso. La palabra hablada es ininteligible. La música coral y el órgano se benefician de la reverberación extrema |
    | **Estacionamiento subterráneo** | > 10,000 m³ | **4.0 – 8.0 s** | Incontrolado. Ininteligible. Las frecuencias graves retumban durante varios segundos después de un portazo |

    !!! warning "RT60 depende de la frecuencia"
        El RT60 NO es un solo número. Al igual que α, se mide por bandas de frecuencia. Una sala puede tener RT60 = 0.4 s a 1 kHz pero RT60 = 1.5 s a 63 Hz. Este desbalance espectral es uno de los problemas más comunes en estudios de grabación. Lo ideal es que RT60 sea aproximadamente constante en todas las frecuencias (o ligeramente más alto en graves para salas de concierto).

    > Insertar **Fig. 11-5** del Everest: medición de RT60 — gráfico de nivel (dB) vs. tiempo (s) mostrando la curva de decaimiento experimental. Señalar los puntos de −5 dB y −35 dB (rango típico de medición T20), y −5 dB a −65 dB (rango para T60, menos usado por limitaciones de ruido de fondo). Incluir la línea de ruido de fondo como referencia.

???+ note "La fórmula de Sabine (introducción)"

    Wallace Clement Sabine, considerado el padre de la acústica arquitectónica, descubrió a finales del siglo XIX la relación fundamental entre el volumen de una sala, la absorción total y el tiempo de reverberación. Su fórmula empírica es sorprendentemente simple:

    \[
    \boxed{RT60 \approx 0.161 \cdot \frac{V}{A}}
    \]

    Donde \(A = \sum \alpha_i \cdot S_i\) (la absorción total que calculamos en la Sesión 18).

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(RT60\) | Tiempo de reverberación | s | Tiempo para decaer 60 dB |
    | \(V\) | Volumen del recinto | m³ | Largo × Ancho × Alto |
    | \(A\) | Absorción total | m² (sabins) | \(A = \sum \alpha_i \cdot S_i\) |
    | 0.161 | Constante de Sabine | — | Derivada de la velocidad del sonido: \(0.161 \approx 55.26 / c\) |

    !!! tip "La intuición detrás de la fórmula"
        - A MAYOR volumen (\(V\)), MÁS tiempo de reverberación. Una sala grande «almacena» más energía, y los choques contra las paredes están más espaciados.
        - A MAYOR absorción (\(A\)), MENOS tiempo de reverberación. Cada choque «mata» más energía, así que se necesitan menos reflexiones para decaer 60 dB.
        - Si duplicás el volumen (manteniendo A constante), RT60 se duplica. Si duplicás la absorción (manteniendo V constante), RT60 se reduce a la mitad.

    ### Ejemplo rápido

    Una sala de control tiene \(V = 80\) m³ y una absorción total promedio \(A = 40\) m². ¿Cuál es el RT60 estimado?

    \[
    RT60 \approx 0.161 \cdot \frac{80}{40} = 0.161 \cdot 2 = 0.32\ \text{s}
    \]

    Este valor (~0.3 s) está en el rango recomendado para una sala de control profesional.

    !!! warning "Limitaciones de la fórmula simple"
        La fórmula de Sabine asume que el campo sonoro es DIFUSO (la energía reverberante es igual en todas direcciones y en todos los puntos). Esta condición NO se cumple bien en salas pequeñas o con mucha absorción. Para esos casos existen fórmulas más refinadas (Eyring, Fitzroy) que veremos en detalle en la Sesión 20.

???+ note "Más allá del RT60: otros parámetros de decaimiento"

    Aunque RT60 es el estándar histórico, no cuenta toda la historia. Los ingenieros acústicos modernos usan parámetros complementarios:

    ### EDT (Early Decay Time)

    El **EDT** mide el decaimiento TEMPRANO — los primeros 10 dB de caída, extrapolados a 60 dB (multiplicando por 6). Es más sensible a las primeras reflexiones y correlaciona MEJOR con la percepción subjetiva de «reverberación» que el RT60 en salas pequeñas.

    \[
    \boxed{EDT = 6 \times T_{10\ \text{dB}}}
    \]

    | Parámetro | ¿Qué mide? | ¿Qué refleja? |
    |---|---|---|
    | **RT60** | Toda la cola de decaimiento (caída completa de 60 dB) | La «extinción» total del sonido. Dominado por el campo reverberante tardío |
    | **EDT** | Los primeros 10 dB de caída | La sensación INMEDIATA de reverberación. Más relevante para la percepción de «vivacidad» |
    | **T20** | Caída de −5 dB a −25 dB, extrapolada ×3 | RT60 estimado con buena inmunidad al ruido de fondo |
    | **T30** | Caída de −5 dB a −35 dB, extrapolada ×2 | RT60 estimado — estándar en mediciones ISO 3382 |

    !!! info "¿Por qué EDT y RT60 pueden ser diferentes?"
        En una sala con mucha absorción localizada (ej. nube acústica sobre la mesa de mezcla), las primeras reflexiones decaen MUY rápido (EDT bajo), pero las reflexiones tardías que «sobreviven» en otras partes de la sala decaen más lento (RT60 más alto). EDT bajo + RT60 alto → la sala se siente «seca» pero tiene una cola audible larga. Es una sensación extraña.

???+ note "Escuchá la reverberación: ejercicios de percepción auditiva"

    ### Ejercicio 1 — Mismo audio, distintas RT60

    Escuchá (o imaginá) una palmada seca. Ahora imaginá esa misma palmada en:
    - Una cabina vocal (RT60 ≈ 0.2 s) → la palmada es un «clac» seco, casi sin cola.
    - Un living (RT60 ≈ 0.6 s) → la palmada tiene una cola corta pero audible.
    - Una iglesia (RT60 ≈ 4.0 s) → la palmada se convierte en un «CLAaaaaa...» que dura varios segundos.

    El sonido original es el mismo. Lo que cambia es la SALA.

    ### Ejercicio 2 — ¿Por qué un depto vacío «hace eco»?

    Cuando te mudás y el departamento está vacío (sin muebles, sin cortinas, sin alfombra), todas las superficies son duras y reflectantes (paredes desnudas, piso de cerámica o madera). El α promedio es bajísimo (~0.05). Con A pequeño y V fijo, la fórmula de Sabine te da un RT60 alto. Ni bien ponés muebles tapizados, cortinas, alfombra, la absorción A AUMENTA drásticamente y el RT60 baja. La misma habitación «viva» se vuelve «muerta».

    ### Ejercicio 3 — Inteligibilidad de la palabra vs. RT60

    Cuanto más larga es la reverberación, más se solapan las sílabas. En una catedral con RT60 = 6 s, la sílaba que estás pronunciando ahora se mezcla con las últimas 30 sílabas que dijiste. El resultado: no se entiende NADA. Por eso en espacios con RT60 alto, los oradores hablan MÁS LENTO y con pausas MÁS LARGAS (para dar tiempo a que la reverberación baje entre sílabas).

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 11, pp. 170–197 (Reverberation — Growth and Decay of Sound, RT60, Sabine Formula, Sound Decay Curves).*
