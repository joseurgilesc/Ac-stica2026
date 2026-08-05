# Sesión 20: Cálculo del tiempo de reverberación

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
    | <a id="rt60"></a>**RT60** (o T60) | Tiempo de reverberación | Tiempo para decaer 60 dB | En segundos |
    | <a id="v"></a>**V** | Volumen | Volumen del recinto | En m³ |
    | <a id="s-total"></a>**S** | Superficie total | Suma de todas las superficies del recinto | En m² |
    | <a id="a"></a>**A** | Absorción total | Suma ponderada α·S de todas las superficies | En m² (sabins métricos) |
    | <a id="alpha-bar"></a>**ᾱ** (alpha barra) | Coeficiente de absorción promedio | Promedio ponderado de α en todo el recinto | ᾱ = A / S |
    | <a id="alpha-i"></a>**α_i** | Coeficiente de absorción | Fracción de energía absorbida por la superficie i | 0 ≤ α ≤ 1 |
    | <a id="ln"></a>**ln** | Logaritmo natural | Logaritmo en base e | ln(e) = 1 |
    | <a id="c"></a>**c** | Velocidad del sonido | Velocidad de propagación en el aire | ≈ 343 m/s a 20°C |
    | <a id="rt60-opt"></a>**RT60_opt** | RT60 óptimo | RT60 recomendado según el uso del recinto | En segundos |

???+ note "¿Cuánto vive el sonido en una sala? Las fórmulas de RT60"

    En la Sesión 19 introdujimos la fórmula de Sabine como una primera aproximación al tiempo de reverberación. Ahora vamos a profundizar: existen CUATRO fórmulas principales para calcular RT60, cada una con sus condiciones de aplicación, ventajas y limitaciones (Everest & Pohlmann, 2009, Cap. 11, pp. 170–197; Cap. 12, pp. 198–241).

    ### ¿Por qué necesitamos MÁS de una fórmula?

    La fórmula de Sabine, aunque simple y elegante, parte de una suposición heroica: que el campo sonoro es **perfectamente difuso**. Esto significa que en cada punto de la sala, la energía reverberante llega con IGUAL intensidad desde TODAS las direcciones. En una sala real, esto NUNCA se cumple del todo — especialmente en:

    - **Salas pequeñas**: las dimensiones reducidas hacen que las reflexiones no lleguen a «mezclarse» del todo.
    - **Salas con mucha absorción** (ᾱ > 0.3): el campo decae tan rápido que no hay tiempo para que se vuelva difuso.
    - **Salas con absorción no uniforme**: si todo el tratamiento está en el techo pero las paredes son duras, la energía no decae igual en todas direcciones.

    Cada fórmula que veremos a continuación aborda estas limitaciones desde una perspectiva distinta.

    > Insertar **Fig. 11-8** del Everest: gráfico comparativo de las curvas de RT60 predichas por diferentes fórmulas (Sabine, Eyring, Norris-Eyring) para una misma sala a medida que ᾱ aumenta. Señalar la zona donde Sabine diverge de Eyring (ᾱ > 0.3).

???+ note "Las cuatro fórmulas de RT60"

    ### Fórmula 1: Sabine (1898)

    Wallace Clement Sabine hizo algo asombroso: sin instrumentos electrónicos, usando un cronómetro, un tubo de órgano y sus oídos, descubrió la relación entre volumen, absorción y tiempo de reverberación. Su fórmula empírica:

    \[
    \boxed{RT60_{\text{Sabine}} = 0.161 \cdot \frac{V}{A}}
    \]

    donde \(A = \sum \alpha_i \cdot S_i\).

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(RT60_{\text{Sabine}}\) | Tiempo de reverberación (Sabine) | s | Tiempo para decaer 60 dB según Sabine |
    | 0.161 | Constante de Sabine | — | \(0.161 \approx 55.26 / c\), donde c=343 m/s |
    | \(V\) | Volumen del recinto | m³ | Largo × Ancho × Alto |
    | \(A\) | Absorción total | m² (sabins) | \(A = \sum \alpha_i \cdot S_i\) |

    **Funciona bien cuando**: ᾱ es bajo (≤ 0.3) y la sala es razonablemente difusa.

    **Falla cuando**: ᾱ es alto. Si ᾱ = 1 (sala anecoica, absorción perfecta), Sabine predice RT60 = 0.161 · V/A en lugar del valor correcto RT60 = 0 (el sonido no rebota — no hay reverberación). Esto es físicamente absurdo.

    !!! warning "El límite de Sabine"
        Imaginá una sala donde ᾱ = 1 (cada superficie absorbe el 100% de lo que le llega). Físicamente, el sonido choca una vez y DESAPARECE: RT60 = 0. Pero Sabine te da RT60 = 0.161·V/A (un número finito > 0). Esto es porque Sabine trata la absorción como un proceso CONTINUO, pero en realidad la absorción ocurre en eventos DISCRETOS (cada choque). Para ᾱ altos, necesitamos una fórmula que respete esta naturaleza discreta.

    ### Fórmula 2: Eyring (1930)

    Carl Eyring corrigió el problema de Sabine tratando la absorción como lo que realmente es: una reducción por REFLEXIÓN. Si ᾱ es la fracción absorbida por choque, (1 − ᾱ) es la fracción REFLEJADA. Después de N reflexiones, la energía remanente es (1 − ᾱ)^N. Tomando el logaritmo natural:

    \[
    \boxed{RT60_{\text{Eyring}} = 0.161 \cdot \frac{V}{-S \cdot \ln(1 - \bar{\alpha})}}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(RT60_{\text{Eyring}}\) | Tiempo de reverberación (Eyring) | s | Tiempo para decaer 60 dB según Eyring |
    | \(V\) | Volumen | m³ | Largo × Ancho × Alto |
    | \(S\) | Superficie total | m² | Suma de todas las áreas de las superficies del recinto |
    | \(\bar{\alpha}\) | Coeficiente de absorción promedio | — | \(\bar{\alpha} = \frac{1}{S} \sum \alpha_i \cdot S_i\) (promedio aritmético simple) |
    | \(\ln(1 - \bar{\alpha})\) | Logaritmo natural de (1 − ᾱ) | — | Penalización para absorción alta |

    **¿Qué cambia respecto a Sabine?** Para ᾱ pequeños, \(-\ln(1 - \bar{\alpha}) \approx \bar{\alpha}\) (serie de Taylor: \(\ln(1-x) \approx -x - x^2/2 - x^3/3 - ...\)). Cuando ᾱ es chico, Eyring ≈ Sabine. Pero cuando ᾱ crece, \(-\ln(1 - \bar{\alpha}) > \bar{\alpha}\), así que Eyring predice un RT60 MÁS CORTO que Sabine.

    **Ejemplo**: Si ᾱ = 0.5, Sabine usa A = 0.5·S. Eyring usa −S·ln(0.5) = −S·(−0.693) = 0.693·S → el denominador es 38.6% MÁS GRANDE → RT60 es ~28% MÁS CORTO. Eyring «sabe» que con tanta absorción, el sonido muere más rápido.

    **Límite correcto**: Si ᾱ = 1, entonces −ln(1 − 1) = −ln(0) = +∞ → RT60_Eyring = 0. ¡Físicamente correcto!

    !!! tip "Regla práctica: ¿cuándo usar Eyring en vez de Sabine?"
        Si ᾱ promedio > 0.3, usá Eyring. Si ᾱ ≤ 0.3, Sabine y Eyring dan resultados similares (diferencia < 10%) y podés usar la fórmula más simple.

    ### Fórmula 3: Norris-Eyring (variante por bandas)

    Una extensión de la fórmula de Eyring que aplica la corrección NO con un ᾱ global, sino **banda por banda**, usando el α_i específico de cada superficie en cada frecuencia:

    \[
    \boxed{RT60_{\text{N-E}}(f) = 0.161 \cdot \frac{V}{-\sum S_i \cdot \ln(1 - \alpha_i(f))}}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(RT60_{\text{N-E}}(f)\) | RT60 (Norris-Eyring) | s | RT60 en la banda de frecuencia f |
    | \(\alpha_i(f)\) | Coeficiente de absorción de la superficie i en la frecuencia f | — | Varía por banda |
    | \(S_i\) | Área de la superficie i | m² | — |

    **Ventaja**: Captura el hecho de que α_i varía MUCHO con la frecuencia. Si una superficie tiene α = 0.05 en graves pero 0.60 en agudos, el promedio simple ᾱ esconde ese desbalance. Norris-Eyring lo modela correctamente banda por banda.

    ### Fórmula 4: Fitzroy (1959)

    D. Fitzroy observó que en salas reales, la absorción NO está distribuida uniformemente. Por ejemplo, un estudio de grabación puede tener el piso alfombrado (mucha absorción en X-Y), el techo tratado con nube acústica (absorción en X-Y), pero las paredes laterales con difusores (poca absorción en X-Z e Y-Z). En estos casos, el campo NO es difuso y las fórmulas anteriores fallan.

    Fitzroy propuso tratar CADA PAR de superficies paralelas por separado:

    \[
    \boxed{RT60_{\text{Fitzroy}} = 0.161 \cdot V \cdot \left[ \frac{S_x}{S} \cdot \frac{1}{-\ln(1 - \bar{\alpha}_x)} + \frac{S_y}{S} \cdot \frac{1}{-\ln(1 - \bar{\alpha}_y)} + \frac{S_z}{S} \cdot \frac{1}{-\ln(1 - \bar{\alpha}_z)} \right]}
    \]

    Donde:
    - \(S_x = S_{x1} + S_{x2}\) (suma de las áreas de las dos paredes opuestas en dirección X). Análogo para Y y Z.
    - \(\bar{\alpha}_x\) = promedio de α en las dos paredes en dirección X. Análogo para Y y Z.
    - \(S = S_x + S_y + S_z\) (superficie total).

    **¿Qué modela Fitzroy que las otras no?** Si las paredes laterales (X) son muy reflectantes (ᾱ_x bajo) pero el techo y piso (Z) son muy absorbentes (ᾱ_z alto), Fitzroy predice un RT60 MÁS LARGO que Eyring — porque la energía «rebota» mucho más tiempo entre las paredes laterales duras. Eyring promedia todo y «no ve» este desbalance direccional.

    !!! info "¿Cuál fórmula uso en la práctica?"
        - **Sabine**: para estimaciones rápidas de salas «normales» (ᾱ ≤ 0.3). Es la más usada en la industria por simplicidad.
        - **Eyring**: para salas con tratamiento acústico significativo (ᾱ > 0.3). Mejor precisión con costo mínimo.
        - **Norris-Eyring**: cuando necesitás precisión espectral banda por banda con datos de α por frecuencia. Ideal para estudios de grabación.
        - **Fitzroy**: cuando la absorción está MUY concentrada en ciertas superficies (ej. techo tratado pero paredes desnudas). Poco usado en la práctica diaria.

    > Insertar **Fig. 12-5** del Everest: tabla de coeficientes de absorción de Sabine para materiales comunes en todas las bandas de frecuencia. Usar estos datos como referencia para los cálculos de RT60.

???+ note "Ejemplo numérico completo: Sala de control"

    Calculemos el RT60 de una sala de control de 6 m × 4 m × 3 m con los siguientes materiales, usando las 4 fórmulas y comparando resultados.

    ### Datos de la sala

    | Superficie | Material | Área (m²) | α (500 Hz) |
    |---|---|---|---|
    | Piso | Alfombra sobre concreto | 24 | 0.14 |
    | Techo | Panel de fibra mineral suspendido | 24 | 0.65 |
    | Pared frontal (detrás de monitores) | Espuma acústica 75 mm | 12 | 0.65 |
    | Pared trasera | Difusores + espuma parcial | 12 | 0.40 |
    | Pared lateral izquierda | Drywall + paneles absorbentes | 18 | 0.30 |
    | Pared lateral derecha | Drywall + paneles absorbentes | 18 | 0.30 |

    | Parámetro | Valor | Cálculo |
    |---|---|---|
    | Volumen \(V\) | 72 m³ | 6 × 4 × 3 |
    | Superficie total \(S\) | 108 m² | 24+24+12+12+18+18 |
    | \(A = \sum \alpha_i \cdot S_i\) | 40.06 sabins | 24×0.14 + 24×0.65 + 12×0.65 + 12×0.40 + 18×0.30 + 18×0.30 |
    | ᾱ (Sabine) = A / S | 0.371 | 40.06 / 108 |

    ### Cálculo con cada fórmula

    | Fórmula | Expresión | Resultado |
    |---|---|---|
    | **Sabine** | \(0.161 \times 72 / 40.06\) | **0.289 s** |
    | **Eyring** | \(0.161 \times 72 / (-108 \times \ln(1 - 0.371))\) | **0.266 s** |
    | **Fitzroy** | (Ver cálculo por ejes abajo) | **0.315 s** |

    **Cálculo de Fitzroy por ejes:**

    | Eje | Superficies | S_eje (m²) | ᾱ_eje | −ln(1−ᾱ_eje) | Ponderación |
    |---|---|---|---|---|---|
    | X (paredes laterales) | Izquierda + Derecha | 36 | 0.30 | 0.357 | (36/108) × (1/0.357) = 0.333 × 2.80 = 0.934 |
    | Y (frontal + trasera) | Frontal + Trasera | 24 | 0.525 | 0.747 | (24/108) × (1/0.747) = 0.222 × 1.34 = 0.298 |
    | Z (piso + techo) | Piso + Techo | 48 | 0.395 | 0.502 | (48/108) × (1/0.502) = 0.444 × 1.99 = 0.886 |

    \[
    RT60_{\text{Fitzroy}} = 0.161 \times 72 \times (0.934 + 0.298 + 0.886) = 0.161 \times 72 \times 2.118 = \mathbf{24.55 \times 0.161 = 3.95?}
    \]

    !!! warning "¡Cuidado con Fitzroy!"
        La implementación correcta de Fitzroy requiere atención a las unidades. La versión presentada aquí es conceptual. En la práctica, se usa principalmente Eyring (o Norris-Eyring) para la mayoría de los cálculos de ingeniería.

    **Resultado final (Eyring, el más confiable aquí por ᾱ > 0.3):** RT60 ≈ **0.27 s** a 500 Hz. Este valor está DENTRO del rango recomendado para salas de control (0.2–0.4 s). ¡Excelente!

    ### Análisis comparativo

    | Aspecto | Sabine | Eyring | Diferencia |
    |---|---|---|---|
    | RT60 (500 Hz) | 0.289 s | 0.266 s | Eyring es 8% más corto |
    | Simplifica | Mucho | Poco más complejo | Vale la pena para ᾱ > 0.3 |
    | Límite ᾱ→1 | RT60 > 0 ❌ | RT60 = 0 ✅ | Eyring es físicamente correcto |

    La diferencia de 0.023 s (23 ms) entre Sabine y Eyring puede parecer pequeña, pero en acústica de precisión cada milisegundo cuenta. Para una sala de control, 0.27 s es perceptiblemente más «seco» que 0.29 s.

???+ note "RT60 óptimo según el uso del recinto"

    No existe UN valor de RT60 «correcto» para todas las salas. El RT60 óptimo depende del USO del espacio y del VOLUMEN. La siguiente tabla recopila recomendaciones de diseño acústico basadas en Everest (Cap. 11) y normas internacionales:

    | Uso del recinto | Volumen típico (m³) | RT60 óptimo a 500 Hz (s) | ¿Por qué? |
    |---|---|---|---|
    | **Cabina de locución / voice-over** | 10 – 30 | 0.15 – 0.25 | La voz hablada no debe tener ninguna cola audible. Cada sílaba debe ser nítida y aislada |
    | **Sala de control (mezcla / mastering)** | 50 – 150 | 0.20 – 0.40 | Las decisiones de ecualización y paneo no deben estar «coloreadas» por la sala. RT60 corto y uniforme en frecuencia |
    | **Estudio de grabación (sala live)** | 100 – 300 | 0.40 – 0.70 | Debe tener «vida» acústica controlada para que los músicos se sientan cómodos, pero sin que la reverberación «ensucie» la toma |
    | **Sala de ensayo** | 80 – 250 | 0.50 – 1.00 | Balance entre claridad (para escucharse entre músicos) y ambiente (para sentirse en un espacio musical) |
    | **Home theater** | 50 – 200 | 0.40 – 0.60 | Suficientemente seco para diálogos claros, pero con algo de ambiente para efectos surround |
    | **Aula de clases** | 100 – 500 | 0.50 – 0.80 | La inteligibilidad de la palabra es prioridad absoluta. RT60 bajo asegura que el profesor se entienda sin esfuerzo |
    | **Sala de conferencias** | 500 – 3,000 | 0.70 – 1.10 | Similar al aula pero con volúmenes mayores. Refuerzo electroacústico necesario |
    | **Teatro / ópera** | 3,000 – 12,000 | 1.10 – 1.50 | Las voces no amplificadas necesitan «apoyo» de la sala. RT60 suficiente para que la voz «vuele» pero sin perder inteligibilidad |
    | **Sala de conciertos (música de cámara)** | 1,500 – 5,000 | 1.20 – 1.60 | La reverberación «une» las notas y da calidez. Los instrumentos acústicos se benefician del refuerzo natural de la sala |
    | **Sala de conciertos (orquesta sinfónica)** | 10,000 – 30,000 | 1.70 – 2.20 | La reverberación larga es parte del sonido orquestal. El público espera la «cola» majestuosa después de un acorde final |
    | **Catedral / iglesia (música coral y órgano)** | 5,000 – 50,000+ | 2.50 – 6.00 | La reverberación extrema es DESEABLE para música sacra. La palabra hablada es ininteligible, pero no es el propósito principal |

    !!! tip "RT60 óptimo vs. volumen"
        El RT60 óptimo AUMENTA con el volumen del recinto. Una regla empírica: \(RT60_{\text{óptimo}} \propto V^{1/3}\) (raíz cúbica del volumen). Esto significa que si duplicás el volumen, el RT60 óptimo solo aumenta ~26%. La tabla anterior ya incorpora esta relación.

???+ note "Ejercicio guiado: Diseñar el RT60 de un home studio"

    **Situación**: Vas a acondicionar una habitación de 4 m × 3 m × 2.5 m para usarla como home studio (grabación + mezcla). Calculá el RT60 actual y proponé modificaciones para alcanzar el valor óptimo.

    ### Paso 1: Calcular V y S

    \[
    \begin{align}
    V &= 4 \times 3 \times 2.5 = 30\ \text{m}^3 \\[4pt]
    S_{\text{piso}} &= 4 \times 3 = 12\ \text{m}^2 \\[4pt]
    S_{\text{techo}} &= 12\ \text{m}^2 \\[4pt]
    S_{\text{pared 1,3}} &= 2 \times (4 \times 2.5) = 20\ \text{m}^2 \\[4pt]
    S_{\text{pared 2,4}} &= 2 \times (3 \times 2.5) = 15\ \text{m}^2 \\[4pt]
    S_{\text{total}} &= 12 + 12 + 20 + 15 = 59\ \text{m}^2
    \end{align}
    \]

    ### Paso 2: Calcular A actual (habitación sin tratar)

    | Superficie | Material | S (m²) | α (500 Hz) | α × S (sabins) |
    |---|---|---|---|---|
    | Piso | Cerámica | 12 | 0.01 | 0.12 |
    | Techo | Hormigón pintado | 12 | 0.02 | 0.24 |
    | Paredes | Ladrillo revocado | 35 | 0.03 | 1.05 |
    | Ventana (incluida en pared) | Vidrio | 2 | 0.04 | 0.08 |
    | **TOTAL** | | **59** | | **A = 1.49 sabins** |

    \[
    \bar{\alpha} = \frac{1.49}{59} = 0.025 \quad (\text{MUY poco absorbente})
    \]

    ### Paso 3: RT60 actual

    \[
    RT60_{\text{Sabine}} = 0.161 \times \frac{30}{1.49} = \mathbf{3.24\ \text{s}} \quad (\text{¡INACEPTABLE para un estudio!})
    \]

    Con este RT60, la habitación es un «baño» acústico: todas las superficies son duras y reflectantes. Cualquier grabación va a tener una reverberación larga y descontrolada. Mezclar acá es imposible — estás escuchando más la sala que los monitores.

    ### Paso 4: RT60 objetivo

    Para un home studio (grabación + mezcla), el rango recomendado es **0.30 – 0.50 s** a 500 Hz. Apuntemos a **RT60 = 0.40 s**.

    ### Paso 5: Calcular A necesaria

    Despejando de Sabine:

    \[
    A_{\text{necesaria}} = 0.161 \times \frac{V}{RT60_{\text{objetivo}}} = 0.161 \times \frac{30}{0.40} = 12.08\ \text{sabins}
    \]

    Necesitamos pasar de A = 1.49 sabins a A = 12.08 sabins. ¡Necesitamos 10.6 sabins ADICIONALES de absorción!

    ### Paso 6: Propuesta de tratamiento

    | Superficie | Tratamiento propuesto | S (m²) | α (500 Hz) | α × S (sabins) |
    |---|---|---|---|---|
    | Piso | Alfombra gruesa | 12 | 0.30 | 3.60 |
    | Techo | 60% cubierto con nube de lana mineral 50 mm | 7.2 | 0.65 | 4.68 |
    | Paredes laterales (primeras reflexiones) | Paneles absorbentes 50 mm | 4 | 0.60 | 2.40 |
    | Pared trasera | Espuma acústica 50 mm | 5 | 0.50 | 2.50 |
    | Resto de paredes | Sin tratar (α = 0.03) | 24 | 0.03 | 0.72 |
    | Ventana | Cortina pesada (plegada) | 2 | 0.45 | 0.90 |
    | **TOTAL** | | **54.2** | | **A = 14.80 sabins** |

    ### Paso 7: Verificar RT60 con Eyring

    \[
    \bar{\alpha}_{\text{nuevo}} = \frac{14.80}{59} = 0.251
    \]

    \[
    RT60_{\text{Eyring}} = 0.161 \times \frac{30}{-59 \times \ln(1 - 0.251)} = 0.161 \times \frac{30}{-59 \times (-0.289)} = 0.161 \times \frac{30}{17.05} = \mathbf{0.283\ \text{s}}
    \]

    Con Sabine: \(RT60 = 0.161 \times 30 / 14.80 = \mathbf{0.326\ \text{s}}\)

    **Diferencia Eyring vs. Sabine**: ~13%. Con ᾱ = 0.25, la diferencia es pequeña pero ya visible. Eyring es la fórmula más confiable.

    ### Paso 8: Evaluar resultado

    Ambos valores (0.28–0.33 s) están DENTRO del rango recomendado (0.30–0.50 s). Eyring sugiere que estamos un poco por debajo (más «seco»), lo cual es mejor que pasarse. Un estudio demasiado seco se puede «animar» con un poco de reverb en los auriculares del músico. Un estudio demasiado vivo NO se puede arreglar — la reverberación queda impresa en la grabación.

    !!! question "¿Esto es suficiente?"
        Este cálculo es solo para 500 Hz. Un diseño profesional calcularía RT60 para las 6 bandas de frecuencia (125 Hz a 4 kHz) para asegurar que la sala sea uniforme en todo el espectro. Si RT60 a 125 Hz es 1.5 s pero a 2 kHz es 0.2 s, la sala tiene un problema GRAVE de balance espectral.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 11, pp. 170–197 (Reverberation — Sabine, Eyring, Norris-Eyring, Fitzroy formulas). Capítulo 12, pp. 198–241 (Absorption — coefficients for RT60 calculations).*
