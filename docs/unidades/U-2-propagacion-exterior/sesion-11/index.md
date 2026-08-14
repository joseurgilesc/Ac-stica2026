# Sesión 11: Efecto del suelo, temperatura y viento

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="db"></a>**dB** | Decibel | Nivel relativo (escala logarítmica) | \( \text{dB} = 10\log_{10}(P/P_0) \) |
    | <a id="spl"></a>**dB SPL** | Sound Pressure Level | Nivel de presión sonora | Referencia: \(p_0 = 20\ \mu\text{Pa}\) |
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="m"></a>**m** | Metro | Longitud, distancia | — |
    | <a id="km"></a>**km** | Kilómetro | Longitud | 1 km = 1,000 m |
    | <a id="c"></a>**°C** | Grado Celsius | Temperatura | — |
    | <a id="ms"></a>**m/s** | Metro por segundo | Velocidad | — |
    | <a id="v_s"></a>**c (o v_s)** | Velocidad del sonido | Depende de la temperatura | \(c \approx 331.4 + 0.6 \cdot T\) [m/s] |
    | <a id="lambda"></a>**λ** (lambda) | Longitud de onda | Distancia por ciclo | λ = c / f |
    | <a id="grad"></a>**∇T** (nabla T) | Gradiente de temperatura | Variación de temperatura con la altura | En °C/m. Positivo = T sube con altura, negativo = T baja con altura |

???+ note "La velocidad del sonido NO es constante"

    Hasta ahora asumimos que el sonido viaja a \(c = 344\) m/s en todas las condiciones. Pero la velocidad del sonido depende de la temperatura del aire:

    \[
    \boxed{c(T) \approx 331.4 + 0.6 \cdot T \quad [\text{m/s}]}
    \]

    | Símbolo | Nombre | Significado |
    |---|---|---|
    | \(c(T)\) | Velocidad del sonido | En m/s, para temperatura \(T\) |
    | \(T\) | Temperatura del aire | En °C |
    | 331.4 | Velocidad del sonido a 0°C | Referencia |
    | 0.6 | Coeficiente térmico | La velocidad aumenta ~0.6 m/s por cada °C adicional |

    | Temperatura | Velocidad del sonido | ¿Qué implica? |
    |---|---|---|
    | −10°C (invierno frío) | ~325 m/s | Sonido más lento |
    | 0°C (punto de congelación) | ~331 m/s | |
    | 20°C (temperatura ambiente estándar) | ~343 m/s | **Referencia estándar para cálculos** |
    | 30°C (día caluroso) | ~349 m/s | |
    | 40°C (verano extremo) | ~355 m/s | Sonido más rápido |

    !!! info "La dependencia con la temperatura es la clave de la refracción"
        Cuando el aire NO tiene temperatura uniforme — es decir, cuando distintas capas de aire están a distinta temperatura — las ondas sonoras viajan a distinta velocidad en cada capa. Esto curva sus trayectorias. Es exactamente el mismo principio por el que la luz se curva al pasar de aire a agua (ley de Snell). En acústica, este fenómeno se llama **refracción**.

???+ note "Refracción por gradientes de temperatura"

    ### ¿Qué es un gradiente de temperatura?

    Un gradiente de temperatura ∇T describe cómo cambia la temperatura con la altura sobre el suelo. En condiciones normales, el suelo (calentado por el sol o enfriado de noche) está a distinta temperatura que el aire a unos metros de altura, y esto crea capas con distinta velocidad del sonido.

    | Condición | Gradiente | El suelo está... | El aire arriba está... | Velocidad del sonido arriba vs. abajo |
    |---|---|---|---|---|
    | **Día soleado** (gradiente negativo) | ∇T < 0°C/m | Más caliente (sol) | Más frío | Más lenta arriba (el aire frío transmite más lento) |
    | **Noche despejada** (gradiente positivo, inversión térmica) | ∇T > 0°C/m | Más frío (irradia calor al espacio) | Más caliente | Más rápida arriba (el aire caliente transmite más rápido) |

    ### Efecto sobre las trayectorias del sonido

    > [Everest & Pohlmann (2009), Cap. 8, *Refraction*] — refracción de rayos sonoros por gradiente de temperatura: un rayo que viaja horizontalmente encuentra capas con distinta velocidad y se curva. El principio es: **el sonido siempre se curva hacia la capa donde viaja más lento**.

    | Condición | ¿Hacia dónde se curva el sonido? | Consecuencia audible | Ejemplo |
    |---|---|---|---|
    | **Día soleado** (aire caliente abajo, frío arriba) | Hacia ARRIBA (el sonido se escapa hacia el cielo, donde viaja más lento) | El sonido se aleja del suelo — se forma una **zona de sombra acústica** donde el nivel es mucho menor de lo esperado | Un tractor trabajando a 500 m no se escucha bien de día, pero sí de noche |
    | **Noche despejada** (inversión: aire frío abajo, caliente arriba) | Hacia ABAJO (el sonido se curva hacia el suelo más frío) | El sonido «rebota» en el suelo y vuelve a curvarse — se propaga a mayor distancia con menos pérdida | Concierto al aire libre: el sonido se escucha a varios km de distancia durante la noche |
    | **Atardecer** (transición, atmósfera isoterma) | Sin curvatura (velocidad uniforme) | Propagación en línea recta, como predice el modelo de campo libre | Condición ideal para mediciones acústicas en exterior |

    !!! warning "La zona de sombra acústica NO la predice la ley del inverso del cuadrado"
        En condiciones de gradiente negativo fuerte (día soleado), una persona a 300 m puede recibir 20-30 dB MENOS de lo que predice la divergencia geométrica. No es que la energía desaparezca — es que el sonido se curvó hacia arriba y literalmente «pasó por encima» del receptor. Es como si el sonido tuviera un «techo invisible» que lo desvía.

    > [Everest & Pohlmann (2009), Cap. 8] — zona de sombra acústica: diagrama con la fuente, la trayectoria curvada hacia arriba y la región en el suelo donde el nivel cae abruptamente. La sombra no es una línea nítida — hay una transición gradual — pero la caída de nivel puede ser dramática.

???+ note "El efecto del viento: el sonido viaja mejor a favor que en contra"

    El viento también curva las trayectorias del sonido, pero por un mecanismo distinto al de la temperatura. El viento NO «arrastra» el sonido (el sonido viaja a ~343 m/s, el viento a ~5-10 m/s — no puede empujarlo significativamente). Lo que hace es crear un **gradiente de velocidad efectiva**.

    ### El perfil logarítmico del viento

    Cerca del suelo (0-10 m), la velocidad del viento es mucho menor que a 50-100 m de altura, debido a la fricción con la superficie (árboles, edificios, terreno). Esto crea capas donde la velocidad efectiva del sonido (c + v_viento) varía con la altura:

    | Dirección del viento respecto al receptor | Velocidad efectiva arriba vs. abajo | ¿Cómo se curva el sonido? | Consecuencia |
    |---|---|---|---|
    | **A favor** (desde la fuente hacia el receptor) | Mayor arriba (c + v_viento), menor abajo (c) | Hacia ABAJO (hacia donde viaja más lento) | El sonido «baja» al suelo — llega mejor al receptor |
    | **En contra** (desde el receptor hacia la fuente) | Mayor arriba, menor abajo | Hacia ARRIBA (el gradiente es al revés) | El sonido se «escapa» hacia arriba — el receptor recibe menos nivel |
    | **Perpendicular** (viento cruzado) | Sin efecto de curvatura en el plano fuente-receptor | Sin curvatura significativa | El sonido puede «desplazarse» lateralmente, pero la atenuación es mínima |

    ### Magnitud del efecto

    Una diferencia de velocidad de viento de 5 m/s entre suelo y 10 m de altura puede desviar un rayo sonoro varios metros verticalmente a 500 m de distancia. Con viento en contra fuerte, la atenuación adicional puede ser de 10-20 dB respecto a la predicción de campo libre.

    > [Everest & Pohlmann (2009), Cap. 8] — efecto del viento en la propagación: comparación entre propagación a favor del viento (curvatura hacia abajo, nivel más alto en el receptor) y en contra (curvatura hacia arriba, zona de sombra).

???+ note "Efecto del suelo: reflexión e interferencia"

    El suelo no es un espejo acústicamente neutro. Dependiendo de su naturaleza, refleja el sonido con distinta eficiencia y modifica el espectro que llega al receptor.

    ### Suelo reflectante vs. suelo absorbente

    | Tipo de suelo | Impedancia acústica relativa al aire | Reflectividad | ¿Qué frecuencias refleja mejor? | Ejemplo |
    |---|---|---|---|---|
    | **Duro y liso** (concreto, asfalto, agua) | Muy alta | Alta — casi un espejo acústico | Todas (reflexión especular) | Estacionamiento, lago, calle asfaltada |
    | **Blando y poroso** (pasto, tierra, nieve) | Baja | Baja — absorbe parte de la energía | Solo frecuencias bajas (<500 Hz); las altas se absorben | Parque, campo de cultivo, bosque |
    | **Mixto** (grava, ripio) | Media | Media | Frecuencias medias | Camino de ripio, jardín con grava |

    ### Interferencia suelo-directa (*ground effect*)

    Cuando el sonido llega al receptor por dos caminos — directo (línea recta fuente → receptor) y reflejado (fuente → suelo → receptor) — ambas ondas se suman en el receptor. Dependiendo de la diferencia de camino y la frecuencia, pueden sumarse en fase (+6 dB) o en contrafase (cancelación parcial o total).

    \[
    \boxed{\Delta L = \text{longitud del camino reflejado} - \text{longitud del camino directo}}
    \]

    Cuando \(\Delta L = n\lambda\) (múltiplo entero de la longitud de onda) → refuerzo (+6 dB si el suelo es perfectamente reflectante).
    Cuando \(\Delta L = (n + 0.5)\lambda\) → cancelación.

    | Frecuencia | Efecto típico del suelo | ¿Por qué? |
    |---|---|---|
    | **Graves (< 250 Hz)** | Refuerzo (el suelo suma energía) | λ larga → la diferencia de camino es pequeña comparada con λ → siempre están casi en fase |
    | **Medios (500-2,000 Hz)** | Interferencia variable con la distancia. A ciertas distancias se cancelan, a otras se refuerzan | λ comparable a la diferencia de camino |
    | **Agudos (> 4,000 Hz)** | El suelo blando absorbe; el suelo duro refleja | λ muy corta → si el suelo es pasto o tierra, la energía se disipa; si es concreto, se refleja |

    !!! info "En la práctica: *ground dip*"
        En mediciones al aire libre sobre pasto, es común ver una caída de 10-15 dB entre 200 y 500 Hz a distancias de 30-100 m. Esto se debe a la interferencia destructiva suelo-directa y se conoce como *ground effect dip*. No es que la fuente no emita esas frecuencias — es que el suelo las cancela selectivamente en esa posición.

???+ note "La noche: cuando todos los efectos se alinean"

    De noche, especialmente en noches despejadas, coinciden TRES fenómenos que mejoran la propagación del sonido a larga distancia:

    | Fenómeno | Mecanismo | Efecto |
    |---|---|---|
    | 1. **Inversión térmica** | Suelo frío, aire caliente arriba → gradiente positivo | El sonido se curva hacia ABAJO — las trayectorias «rebotan» entre el suelo y las capas de aire caliente, creando un ducto acústico |
    | 2. **Menor viento** | De noche el viento suele calmarse | Menos curvatura por viento, menos ruido de fondo por viento en el micrófono |
    | 3. **Mayor humedad relativa** | El aire frío tiene HR más alta → menor absorción atmosférica | Los agudos viajan mejor |

    El resultado neto: el sonido puede viajar 2-5 veces más lejos de noche que de día, y con mayor fidelidad espectral (los agudos no se pierden tanto).

    > [Everest & Pohlmann (2009), Cap. 8] — gradientes de temperatura diurnos y nocturnos: un mismo paisaje sonoro (autopista, fábrica, concierto) medido de día y de noche muestra diferencias apreciables a gran distancia. La magnitud exacta depende de la intensidad de la inversión térmica y de la topografía; no hay una cifra única.

???+ note "Resumen: el modelo completo de propagación exterior"

    La atenuación total entre una fuente y un receptor en exteriores se compone de:

    \[
    \boxed{L_p(r) = L_W - \underbrace{20\log_{10}(r) - 11}_{\text{divergencia esférica}} - \underbrace{\alpha \cdot r}_{\text{absorción atmosférica}} - \underbrace{A_{\text{suelo}}}_{\text{efecto del suelo}} - \underbrace{A_{\text{refracción}}}_{\text{temperatura y viento}} - \underbrace{A_{\text{barrera}}}_{\text{obstáculos}}}
    \]

    | Término | Sesión donde se estudia | ¿Siempre está presente? |
    |---|---|---|
    | Divergencia esférica | Sesión 9 | Sí — siempre. Es el piso mínimo de atenuación |
    | Absorción atmosférica | Sesión 10 | Sí — despreciable a corta distancia, significativa a larga |
    | Efecto del suelo | Sesión 11 | Sí — depende del tipo de suelo |
    | Refracción (T y viento) | Sesión 11 | Sí — especialmente relevante a >100 m |
    | Barreras y obstáculos | Sesiones 12 (rayos) y 13 (difracción) | Solo si hay obstáculos presentes |

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 3, pp. 31–57 (Free Field, Atmospheric Effects) y Capítulo 8, pp. 105–115 (Refraction — Temperature Gradients, Wind Gradients, Acoustic Shadows, Nighttime Propagation).*
