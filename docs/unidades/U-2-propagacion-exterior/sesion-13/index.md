# Sesión 13: Difracción del sonido

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="db"></a>**dB** | Decibel | Nivel relativo (escala logarítmica) | \( \text{dB} = 10\log_{10}(P/P_0) \) |
    | <a id="spl"></a>**dB SPL** | Sound Pressure Level | Nivel de presión sonora | Referencia: \(p_0 = 20\ \mu\text{Pa}\) |
    | <a id="il"></a>**IL** | Insertion Loss | Pérdida por inserción de una barrera acústica | En dB. IL = SPL sin barrera − SPL con barrera |
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud, distancia | — |
    | <a id="cm"></a>**cm** | Centímetro | Longitud | 1 cm = 0.01 m |
    | <a id="lambda"></a>**λ** (lambda) | Longitud de onda | Distancia por ciclo | λ = c / f |
    | <a id="c"></a>**c** | Velocidad del sonido | Velocidad de propagación en el medio | ~343 m/s a 20°C |

???+ note "¿Qué es la difracción?"

    La **difracción** es la capacidad que tiene una onda sonora para rodear obstáculos y «doblarse» en las esquinas. Es la razón por la cual podés escuchar a alguien hablando en la habitación de al lado aunque no lo veas, o por qué una barrera acústica en una autopista nunca bloquea el 100% del ruido.

    ### El principio físico

    La difracción es un fenómeno puramente ondulatorio. No tiene análogo en el modelo de partículas o rayos. Se explica por el **principio de Huygens**: cada punto de un frente de onda actúa como una fuente secundaria que emite ondas esféricas. Cuando el frente de onda encuentra un obstáculo o una abertura, los puntos del borde se convierten en nuevas fuentes que «rellenan» la región detrás del obstáculo.

    > Insertar **Fig. 7-1** del Everest: difracción en un borde — un frente de onda plano incide sobre un borde rígido (media pantalla). Los frentes de onda detrás del borde se curvan y penetran en la zona que geométricamente debería ser «sombra». El borde actúa como una nueva fuente lineal.

    ### La regla fundamental: λ vs. tamaño del obstáculo

    La magnitud de la difracción depende de la relación entre la longitud de onda λ y el tamaño del obstáculo o abertura:

    \[
    \boxed{\text{Difracción significativa cuando } \lambda \gtrsim \text{tamaño del obstáculo}}
    \]

    | Relación | ¿Cuánto se difracta? | Ejemplo |
    |---|---|---|
    | λ ≫ tamaño del obstáculo | **Máxima** — el sonido rodea el obstáculo como si no estuviera | Un poste de 10 cm con un sonido grave de 100 Hz (λ = 3.4 m): el sonido lo rodea completamente, casi sin atenuación |
    | λ ≈ tamaño del obstáculo | **Moderada** — el sonido se difracta parcialmente, con atenuación | Una columna de 50 cm con un sonido de 680 Hz (λ = 0.5 m): hay zona de sombra parcial |
    | λ ≪ tamaño del obstáculo | **Mínima** — se forma una zona de sombra acústica bien definida | Un edificio de 15 m con un sonido de 4 kHz (λ = 8.6 cm): detrás del edificio hay un silencio casi total en agudos |

    !!! warning "Esta es LA razón por la que los graves «atraviesan paredes»"
        Cuando tus vecinos ponen música, lo que escuchás a través de la pared son CASI SOLO los graves. No es que los graves tengan «más potencia» o que las paredes «absorban mejor los agudos» (aunque algo de eso hay). La razón principal es la **difracción**: los graves (λ grande) rodean los bordes de ventanas, puertas y esquinas. Los agudos (λ pequeña) forman una zona de sombra y no llegan. Una puerta entreabierta de 2 cm es un obstáculo insignificante para 100 Hz (λ = 3.4 m) pero una barrera casi total para 10 kHz (λ = 3.4 cm).

???+ note "Barreras acústicas: cómo bloquear el sonido (parcialmente)"

    Una **barrera acústica** es cualquier obstáculo sólido colocado entre una fuente y un receptor para reducir el nivel sonoro. Las barreras nunca bloquean el 100% del sonido — la difracción en el borde superior siempre permite que algo de energía «se cuele» hacia la zona de sombra.

    ### Pérdida por inserción (*Insertion Loss*, IL)

    La efectividad de una barrera se mide con la **pérdida por inserción** (IL), definida como la diferencia de nivel sonoro en el receptor CON y SIN la barrera:

    \[
    \boxed{IL = L_{p,\ \text{sin barrera}} - L_{p,\ \text{con barrera}} \quad [\text{dB}]}
    \]

    | Símbolo | Nombre | Significado |
    |---|---|---|
    | \(IL\) | Insertion Loss (pérdida por inserción) | En dB. Valores típicos: 5-15 dB para barreras prácticas |
    | \(L_{p,\ \text{sin barrera}}\) | Nivel de presión sonora SIN barrera | Medido en el receptor sin la barrera instalada, en dB SPL |
    | \(L_{p,\ \text{con barrera}}\) | Nivel de presión sonora CON barrera | Medido en el receptor con la barrera instalada, en dB SPL |

    Una barrera práctica bien diseñada puede lograr IL = 10-15 dB. Lograr más de 20 dB es extremadamente difícil y costoso (requiere barreras muy altas, muy largas y con tratamiento absorbente en la cara expuesta).

    > Insertar **Fig. 7-3** del Everest: pérdida por inserción de una barrera — diagrama mostrando una fuente puntual, una barrera de altura h, y el receptor en la zona de sombra. La diferencia de camino δ = (a + b) − d determina la IL a través del número de Fresnel N = 2δ/λ.

    ### Factores que determinan la efectividad de una barrera

    | Factor | ¿Cómo afecta la IL? | Regla práctica |
    |---|---|---|
    | **Altura de la barrera** | A mayor altura, mayor IL | Duplicar la altura agrega ~3-6 dB de IL adicional (no es lineal) |
    | **Frecuencia** | A mayor frecuencia, mayor IL (λ más pequeña → menos difracción) | Una barrera es mucho más efectiva en agudos que en graves |
    | **Distancia fuente-barrera** | Cuanto más cerca esté la fuente de la barrera, mayor IL | Poner la barrera lo más cerca posible de la fuente o del receptor (no en el medio) |
    | **Longitud de la barrera** | Debe extenderse lateralmente más allá de la línea de visión fuente-receptor | Si la barrera es demasiado corta, el sonido la rodea por los costados |
    | **Absorción en la cara de la barrera** | Un recubrimiento absorbente reduce las reflexiones que podrían sumarse en el receptor | Importante cuando el receptor está cerca de la barrera |
    | **Continuidad** | Sin huecos ni juntas | Un hueco del 1% del área puede reducir la IL en 5-10 dB (el sonido se cuela por cualquier rendija) |

    ### Cálculo simplificado de IL (método de Maekawa)

    Para una barrera delgada en campo libre, una aproximación práctica es:

    \[
    \boxed{IL \approx 10\log_{10}(3 + 20N) \quad [\text{dB}]}
    \]

    Donde \(N\) es el **número de Fresnel**:

    \[
    \boxed{N = \frac{2\delta}{\lambda} = \frac{2f\delta}{c}}
    \]

    | Símbolo | Nombre | Significado |
    |---|---|---|
    | \(N\) | Número de Fresnel | Adimensional. Determina cuánto se atenúa el sonido por difracción |
    | \(\delta\) | Diferencia de camino | δ = (distancia fuente → borde → receptor) − (distancia fuente → receptor en línea recta) [m] |
    | \(f\) | Frecuencia | En Hz |
    | \(c\) | Velocidad del sonido | ~343 m/s a 20°C |

    | N | IL aproximada | Interpretación |
    |---|---|---|
    | 0 | 0 dB | Sin obstáculo (δ = 0) |
    | 0.1 | ~5 dB | Barrera apenas efectiva |
    | 0.5 | ~10 dB | Barrera moderada |
    | 1.0 | ~13 dB | Buena barrera |
    | 5.0 | ~20 dB | Barrera excelente |
    | 10.0 | ~23 dB | Muy difícil de lograr en la práctica |

    !!! info "Ejemplo práctico"
        Una autopista tiene un muro de 3 m de altura. Un receptor está a 50 m del borde de la autopista, al mismo nivel del suelo. Para una frecuencia de 500 Hz (λ = 0.686 m), si la diferencia de camino δ = 0.5 m, entonces N = 2·0.5/0.686 ≈ 1.46, y IL ≈ 10·log₁₀(3 + 20·1.46) ≈ 10·log₁₀(32.2) ≈ 15 dB. Esa barrera reduce 15 dB a 500 Hz. Pero a 100 Hz (λ = 3.43 m), N = 2·0.5/3.43 ≈ 0.29, IL ≈ 10·log₁₀(3 + 5.8) ≈ 9.4 dB — menos efectiva en graves, como siempre.

???+ note "Difracción por aberturas: cuando el sonido pasa por un hueco"

    Así como un obstáculo bloquea parcialmente el sonido, una **abertura** en una pared permite que el sonido pase parcialmente. El comportamiento depende, otra vez, de la relación λ vs. tamaño de la abertura:

    | Situación | ¿Qué pasa? | Ejemplo |
    |---|---|---|
    | λ ≫ tamaño de la abertura (abertura muy pequeña comparada con λ) | El sonido se difracta fuertemente: la abertura actúa como una fuente puntual que irradia en todas direcciones | Una rendija de 2 cm con 100 Hz (λ = 3.4 m) → el sonido sale en todas direcciones como si fuera una fuente nueva |
    | λ ≈ tamaño de la abertura | La abertura actúa como una fuente direccional: irradia más hacia adelante, menos hacia los lados | Una puerta de 1 m de ancho con 340 Hz (λ = 1 m) |
    | λ ≪ tamaño de la abertura (abertura mucho mayor que λ) | El sonido atraviesa la abertura casi sin difractarse: se propaga como un haz | Una puerta de 1 m de ancho con 4 kHz (λ = 8.6 cm) → el sonido sale casi en línea recta |

    > Insertar **Fig. 7-2** del Everest: difracción por una abertura — una onda plana incide sobre una pared con una abertura. Para λ grande (comparada con la abertura), la abertura actúa como fuente puntual omnidireccional. Para λ pequeña, el sonido se propaga como un haz direccional.

    ### Consecuencia práctica: las puertas entreabiertas

    Una puerta entreabierta 5 cm deja pasar mucho más sonido grave que agudo. Si estás en una sala de ensayo y dejás la puerta apenas entreabierta, lo que se escucha afuera es un «boom boom» de graves y bombo — casi no se filtran los agudos de la guitarra o la voz. Esto es difracción en estado puro.

???+ note "Aplicación: barreras acústicas en entornos reales"

    ### Barreras en autopistas y vías férreas

    Las barreras acústicas en autopistas son la aplicación más visible de la difracción. Una barrera típica tiene 2-6 m de altura y está hecha de concreto, metal, madera tratada o paneles absorbentes. El diseño debe considerar:

    | Parámetro de diseño | Valor típico | Justificación |
    |---|---|---|
    | Altura | 2-6 m | Determinada por la IL deseada y la geometría fuente-receptor |
    | Longitud | Se extiende al menos 50-100 m más allá del receptor en cada dirección | Evitar que el sonido rodee la barrera por los extremos |
    | Material | Concreto, metal con absorción, madera, paneles compuestos | Masa para bloquear + absorción en la cara expuesta para no reflejar hacia el otro lado |
    | Forma del borde superior | Recto, en T, o absorbente | Un borde en T o con material absorbente puede agregar 2-3 dB de IL adicional |
    | Separación del suelo | Debe ser continua hasta el suelo, sin huecos | Un hueco de 2 cm en la base puede arruinar la IL en toda la banda de frecuencia |

    ### Barreras en recintos de conciertos al aire libre

    En festivales y conciertos al aire libre, las barreras no solo protegen a los vecinos del ruido — también protegen al público de fuentes de ruido externas (tráfico, obras, otras carpas).

    | Estrategia | ¿Cómo funciona? |
    |---|---|
    | Barrera perimetral | Muro o valla alta alrededor del predio |
    | Contenedores apilados | Solución temporal común en festivales: contenedores marítimos apilados como barrera masiva |
    | Pantallas acústicas móviles | Paneles sobre ruedas que se posicionan entre escenarios y zonas sensibles |
    | Topografía natural | Aprovechar colinas, taludes y depresiones del terreno como barreras naturales |
    | Vegetación densa | Los árboles y arbustos NO son barreras acústicas efectivas (ofrecen < 3 dB de atenuación), pero tienen valor psicológico (si la gente NO VE la fuente, percibe menos ruido) |

    > Insertar **Fig. 7-4** del Everest: ejemplos reales de barreras acústicas — perfil de una autopista con barrera, mediciones de SPL con y sin barrera a varias distancias, mostrando la IL en función de la frecuencia.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 7, pp. 97–105 (Diffraction — Edge Diffraction, Fresnel Number, Barrier Insertion Loss, Aperture Diffraction, Acoustic Barriers).*
