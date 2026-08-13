# Sesión 6: Nivel de Presión Sonora (SPL)

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="db"></a>**dB** | Decibel | Nivel relativo (escala logarítmica) | \( \text{dB} = 10\log_{10}(P/P_0) \) |
    | <a id="spl"></a>**dB SPL** | Sound Pressure Level | Nivel de presión sonora | Referencia: \(p_0 = 20\ \mu\text{Pa}\) |
    | <a id="sil"></a>**dB SIL** | Sound Intensity Level | Nivel de intensidad sonora | Referencia: \(I_0 = 10^{-12}\ \text{W/m}^2\) |
    | <a id="swl"></a>**dB SWL** | Sound Power Level | Nivel de potencia sonora | Referencia: \(W_0 = 10^{-12}\ \text{W}\) |
    | <a id="upa"></a>**µPa** | Micropascal | Presión sonora | 1 µPa = 10⁻⁶ Pa |
    | <a id="pa"></a>**Pa** | Pascal | Presión | 1 Pa = 1 N/m² |
    | <a id="w"></a>**W** | Watt (Vatio) | Potencia | 1 W = 1 J/s |
    | <a id="wm2"></a>**W/m²** | Watt por metro cuadrado | Intensidad sonora | Potencia por unidad de área |
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="s"></a>**s** | Segundo | Tiempo | — |
    | <a id="log"></a>**log₁₀** | Logaritmo en base 10 | Exponente al que hay que elevar 10 para obtener el número | log₁₀(100) = 2 |

???+ note "SPL, SIL y SWL: tres formas de medir el sonido"

    En la sesión anterior aprendimos que el decibel es una relación logarítmica. Pero relaciona **dos cantidades del mismo tipo** — y hay tres magnitudes físicas distintas que podemos medir en un campo sonoro:

    | Nivel | Símbolo | ¿Qué mide? | Analogía |
    |---|---|---|---|
    | **Presión sonora** | dB SPL | La presión que ejerce la onda sobre una superficie (el tímpano, un micrófono) | Voltaje en un circuito — lo que «sentís» en un punto |
    | **Intensidad sonora** | dB SIL | La energía que atraviesa un metro cuadrado por segundo | Corriente — cuánta energía fluye |
    | **Potencia sonora** | dB SWL | La energía total que emite la fuente por segundo | La potencia nominal de un amplificador — independiente de la distancia |

    !!! info "La presión es lo que medimos, la potencia es lo que emite la fuente"
        En la práctica, casi siempre trabajamos con dB SPL porque los micrófonos y sonómetros miden presión. La intensidad (SIL) se usa en aplicaciones especializadas (mapeo acústico, arrays de intensidad). La potencia (SWL) es una propiedad de la fuente — no cambia con la distancia ni con la sala. Si un altavoz emite 100 dB SWL, emite esa potencia esté a 1 m o a 100 m.

???+ note "El Nivel de Presión Sonora (SPL) en detalle"

    El SPL es la medida más común en acústica práctica. Se define como:

    \[
    \boxed{\text{SPL} = 20 \cdot \log_{10}\left(\frac{p}{p_0}\right) \quad \text{donde } p_0 = 20\ \mu\text{Pa}}
    \]

    | Símbolo | Nombre | Valor | Significado |
    |---|---|---|---|
    | \(p\) | Presión sonora medida | Variable — depende de la fuente y la distancia | La presión instantánea o RMS en el punto de medición |
    | \(p_0\) | Presión de referencia | \(20\ \mu\text{Pa}\) = 0.00002 Pa | Umbral de audición humana a 1 kHz — el sonido más tenue detectable |

    ### ¿Por qué 20 µPa?

    El valor de 20 µPa no es arbitrario: es la presión sonora mínima que un oído humano sano puede detectar a 1,000 Hz en condiciones ideales. Equivale a un desplazamiento de las partículas de aire de aproximadamente \(10^{-11}\) metros — menor que el diámetro de un átomo. El oído humano es un instrumento de medición extraordinario:

    | Referencia | Presión | SPL | Qué significa |
    |---|---|---|---|
    | \(p_0 = 20\ \mu\text{Pa}\) | 0.00002 Pa | 0 dB SPL | Umbral de audición — silencio absoluto en cámara anecoica |
    | Presión atmosférica | 101,325 Pa | ~194 dB SPL | La presión del aire en reposo al nivel del mar |

    <figure markdown="span">
      ![Fig. 2-1: Presión sonora RMS y nivel de presión sonora](../../../img/presion_rms_y_nivel_sonoro.svg)
      <figcaption>**Fig. 2-1** — Presión sonora RMS en escala logarítmica y nivel de presión sonora en decibelios, referido a 20 micropascales. La relación entre 20 µPa y 20 Pa (1,000,000:1) se comprime a tan solo 120 dB en la escala logarítmica.</figcaption>
    </figure>

???+ note "El sonómetro y la medición en campo"

    Un **sonómetro** (Sound Level Meter, SLM) es el instrumento estándar para medir SPL. Consta de un micrófono (convierte presión en voltaje), un amplificador, filtros de ponderación y un detector RMS que promedia la señal.

    ### Ponderación frecuencial: A, C y Z

    El oído humano no es igual de sensible a todas las frecuencias: oímos mucho mejor entre 2 y 5 kHz que en los extremos. Para que las mediciones reflejen la **percepción humana** (no solo la física), los sonómetros aplican filtros de ponderación:

    | Ponderación | Curva | ¿Qué simula? | ¿Cuándo se usa? |
    |---|---|---|---|
    | **A** (dBA) | Invertida de la curva de igual sonoridad de 40 phon | La sensibilidad del oído a niveles bajos y moderados | Ruido ambiental, normativa laboral, la mayoría de las mediciones cotidianas |
    | **C** (dBC) | Casi plana, con atenuación solo en extremos (<31 Hz, >8 kHz) | La sensibilidad del oído a niveles altos | Ruido de impacto, monitoreo de conciertos, medición de graves |
    | **Z** (dBZ) | Plana (sin ponderación, *Zero weighting*) | Respuesta lineal del micrófono — sin filtro | Análisis de laboratorio, cuando se necesita la medición física real, sin corrección perceptual |

    !!! warning "dBA ≠ dB SPL lineal"
        Una medición en dBA **no** es lo mismo que dB SPL sin ponderar. A 100 Hz, la ponderación A atenúa casi 20 dB respecto a la medición lineal. Un ventilador ruidoso puede medir 60 dB SPL (lineal) pero solo 40 dBA — y esto tiene sentido: el oído realmente lo percibe mucho más bajo. En normativas legales, dBA es el estándar porque se correlaciona con el riesgo de daño auditivo.

    ### Parámetros de medición temporal

    Además de la ponderación en frecuencia, el sonómetro aplica constantes de tiempo que determinan qué tan rápido responde la aguja (o la pantalla) a los cambios de nivel:

    | Constante | Tiempo de integración | ¿Cuándo se usa? |
    |---|---|---|
    | **Fast (F)** | 125 ms | Medición general, respuesta rápida — la aguja «baila» con la música |
    | **Slow (S)** | 1 s | Fuentes estables, promedios — la aguja se mueve lentamente |
    | **Impulse (I)** | 35 ms (subida), 1.5 s (bajada) | Sonidos impulsivos (golpes, disparos, martillazos) |
    | **Peak** | ~50 µs | Picos instantáneos — para proteger el oído de transitorios dañinos |

    En producción musical, la respuesta **Fast** es la más útil para medir niveles de monitoreo y detectar picos momentáneos.

???+ note "Tabla de niveles SPL típicos (ponderación A)"

    | dBA | Ejemplo cotidiano | Sensación subjetiva | Tiempo seguro de exposición |
    |---|---|---|---|
    | 0 | Umbral de audición (1 kHz) | Silencio absoluto (cámara anecoica) | Ilimitado |
    | 10 | Respiración normal, hojas movidas por brisa | Apenas audible | Ilimitado |
    | 20 | Estudio de grabación vacío, susurro a 1 m | Muy silencioso | Ilimitado |
    | 30 | Biblioteca silenciosa, dormitorio nocturno | Silencioso | Ilimitado |
    | 40 | Refrigerador, conversación en tono bajo | Tranquilo | Ilimitado |
    | 50 | Lluvia moderada, oficina tranquila | Normal | Ilimitado |
    | 60 | Conversación normal a 1 m | Cómodo | Ilimitado |
    | 70 | Aspiradora, tráfico urbano, televisión | Ruidoso pero tolerable | Ilimitado |
    | 80 | Calle con mucho tráfico, restaurante lleno | Muy ruidoso | Ilimitado |
    | **85** | **Límite de exposición laboral (8 h/día)** | Riesgo de daño acumulativo | **8 horas** |
    | 90 | Tráfico de camión, sierra eléctrica, cortadora de césped | Muy ruidoso | 2.5 horas |
    | 95 | Taladro manual, motocicleta acelerando | Incómodo | 47 minutos |
    | 100 | Concierto de rock, discoteca, martillo neumático | Muy incómodo | 15 minutos |
    | 105 | Concierto en primera fila, sirena de ambulancia | Doloroso | 5 minutos |
    | 110 | Batería acústica tocada con fuerza, taladro pesado | Muy doloroso | 1.5 minutos |
    | 120 | Umbral de dolor, despegue de avión (a 30 m) | Dolor físico | < 30 segundos |
    | 130 | Explosión cercana, motor a reacción (a 10 m) | Dolor intenso, daño inmediato | Sin protección: daño instantáneo |
    | 140+ | Arma de fuego, explosión cercana | Daño irreversible inmediato | Protección obligatoria |

    !!! warning "La regla de los 3 dB"
        Por cada aumento de **3 dB**, el tiempo de exposición segura se reduce a la **mitad**. Esto no es una recomendación — es la ley de exposición ocupacional (OSHA, NIOSH). Si mezclás a 85 dBA podés trabajar 8 horas. Si subís a 88 dBA, solo 4 horas. A 91 dBA, 2 horas. Los monitores de estudio de campo cercano a 1 m suelen entregar entre 85 y 95 dBA según el volumen — **medí tu entorno de trabajo**.

???+ note "Relación entre SPL, SIL y SWL"

    Las tres magnitudes están vinculadas físicamente, pero no son intercambiables:

    \[
    \text{SPL} \approx \text{SIL} \quad \text{(en campo libre, para ondas planas progresivas, a temperatura y presión normales)}
    \]

    ### Fórmulas de referencia

    | Nivel | Fórmula | Referencia (\(P_0\) o \(p_0\)) | Factor |
    |---|---|---|---|
    | **SPL** (Sound Pressure Level) | \(20 \cdot \log_{10}(p / p_0)\) | \(p_0 = 20\ \mu\text{Pa}\) | 20 (presión) |
    | **SIL** (Sound Intensity Level) | \(10 \cdot \log_{10}(I / I_0)\) | \(I_0 = 10^{-12}\ \text{W/m}^2\) | 10 (potencia/intensidad) |
    | **SWL** (Sound Power Level) | \(10 \cdot \log_{10}(W / W_0)\) | \(W_0 = 10^{-12}\ \text{W}\) | 10 (potencia) |

    ### ¿Cuándo usar cada una?

    | Situación | Magnitud correcta | Por qué |
    |---|---|---|
    | Medir el ruido de fondo en un estudio | **SPL** | Porque el micrófono mide presión en ese punto |
    | Comparar dos altavoces — ¿cuál es más eficiente? | **SWL** | La potencia emitida es independiente de la distancia y la sala |
    | Mapear la distribución de energía en una sala | **SIL** | La intensidad tiene dirección (es un vector) — permite ubicar reflexiones y fugas |
    | Verificar el cumplimiento de normativa de ruido | **SPL (dBA)** | Las leyes se basan en la presión percibida por el oído |

    !!! tip "SPL, SIL y SWL no se pueden sumar directamente"
        Son magnitudes físicas distintas. Sumar dB SPL con dB SWL no tiene sentido físico, como sumar voltios con vatios. Siempre asegurate de estar trabajando con la misma magnitud antes de operar con niveles.

???+ note "Ejemplos de conversión entre presión y SPL"

    ### Ejemplo 1: De presión a SPL

    Un micrófono mide una presión RMS de 0.1 Pa. ¿Cuál es el SPL?

    \[
    \begin{aligned}
    p &= 0.1\ \text{Pa} = 100,000\ \mu\text{Pa} \\[4pt]
    \frac{p}{p_0} &= \frac{100,000}{20} = 5,000 \\[4pt]
    \log_{10}(5,000) &\approx 3.699 \\[4pt]
    \text{SPL} &= 20 \cdot 3.699 = \mathbf{73.98 \approx 74\ \text{dB SPL}}
    \end{aligned}
    \]

    ### Ejemplo 2: De SPL a presión

    Un sonómetro indica 94 dB SPL (nivel de calibración estándar). ¿Cuál es la presión?

    \[
    \begin{aligned}
    94 &= 20 \cdot \log_{10}\left(\frac{p}{20}\right) \\[4pt]
    4.7 &= \log_{10}\left(\frac{p}{20}\right) \\[4pt]
    10^{4.7} &\approx 50,119 \\[4pt]
    p &= 50,119 \cdot 20 = 1,002,380\ \mu\text{Pa} \approx \mathbf{1\ \text{Pa}}
    \end{aligned}
    \]

    !!! tip "94 dB SPL = 1 Pa"
        Este es un valor de referencia que conviene memorizar. Muchos calibradores de sonómetros generan exactamente 94 dB SPL (1 Pa) a 1 kHz. Si tu sonómetro lee 94 dB con el calibrador puesto, está correcto.

    ### Ejemplo 3: Una conversación normal

    Una conversación a 1 m produce una presión de aproximadamente 0.02 Pa. ¿Cuál es el SPL?

    \[
    \frac{0.02\ \text{Pa}}{20\ \mu\text{Pa}} = \frac{20,000}{20} = 1,000 \quad\Rightarrow\quad \log_{10}(1000) = 3 \quad\Rightarrow\quad 20 \cdot 3 = \mathbf{60\ \text{dB SPL}}
    \]

---

## Simulación interactiva

Modificá los parámetros y activá/desactivá capas para analizar cada fenómeno:

- **Desplazamiento** — movimiento sinusoidal de las partículas (línea continua)
- **Presión** — derivada de la posición, máxima en los cruces por cero (línea punteada)
- **Partículas** — puntos coloreados por zona de compresión o rarefacción
- **Densidad** — fondo graduado según concentración molecular

<iframe src="../sesion-02/simulacion.html" width="100%" height="400" style="border: none; border-radius: 8px;"></iframe>

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 2, pp. 17–25 (Sound Levels and the Decibel — SPL, SIL, SWL, Sound Level Meters, Weighting Networks).*
