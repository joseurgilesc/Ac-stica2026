# Sesión 27: Ruido de fondo

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="dba"></a>**dBA** | Decibel A-ponderado | Nivel sonoro con filtro que simula la sensibilidad del oído humano | Atenúa graves (< 1 kHz) y agudos extremos (> 8 kHz) |
    | <a id="dbc"></a>**dBC** | Decibel C-ponderado | Nivel sonoro con filtro casi plano (solo atenúa extremos) | Usado para mediciones de pico y graves |
    | <a id="spl"></a>**SPL** | Sound Pressure Level | Nivel de presión sonora | Medido en dB re 20 µPa |
    | <a id="leq"></a>**Leq** | Nivel continuo equivalente | Promedio energético del nivel sonoro en un período | \(L_{eq} = 10 \log\left(\frac{1}{T}\int_0^T \frac{p^2(t)}{p_0^2} dt\right)\) |
    | <a id="l10"></a>**L₁₀** | Nivel excedido el 10% del tiempo | Nivel de pico estadístico — representa el ruido «alto» típico | Medido en dB |
    | <a id="l90"></a>**L₉₀** | Nivel excedido el 90% del tiempo | Nivel de fondo estadístico — representa el ruido «base» | Medido en dB |
    | <a id="nc"></a>**NC** | Noise Criteria | Curva de criterio de ruido (estándar americano) | ANSI S12.2 |
    | <a id="nr"></a>**NR** | Noise Rating | Curva de criterio de ruido (estándar ISO) | ISO 1996 |
    | <a id="rc"></a>**RC** | Room Criteria | Curva de criterio de ruido moderna (incluye balance espectral) | ANSI S12.2-2008 |

???+ note "¿Qué es el ruido de fondo y por qué importa?"

    El ruido de fondo es el nivel sonoro presente en un espacio cuando NO hay fuentes sonoras intencionales activas (Everest & Pohlmann, 2009, Cap. 16, pp. 231–250). Es el «piso» acústico del recinto: el nivel por debajo del cual ningún sonido útil puede ser percibido.

    ### Las dos caras del ruido de fondo

    | Dimensión | Descripción | Relevancia |
    |---|---|---|
    | **Enmascaramiento** | El ruido de fondo tapa sonidos de bajo nivel. Si tu ruido de fondo es 40 dBA, cualquier detalle musical por debajo de ese nivel es INAUDIBLE | Crítico para grabación, mezcla y escucha crítica |
    | **Molestia (annoyance)** | El ruido puede ser audible sin enmascarar — pero DISTRAE, fatiga y reduce la concentración | Crítico para espacios de trabajo, estudio y descanso |

    ### Relación señal-ruido (SNR)

    \[
    \boxed{SNR = L_{\text{señal}} - L_{\text{ruido}}}
    \]

    | SNR (dB) | Percepción | ¿Suficiente para…? |
    |---|---|---|
    | < 0 | Señal enterrada en ruido. Ininteligible | Nada útil |
    | 0 – 10 | Señal apenas perceptible sobre el ruido. Comprensión difícil | Conversación forzada |
    | 10 – 20 | Clara pero con esfuerzo. Detalles finos perdidos | Reuniones, clases |
    | 20 – 30 | Buena. Detalles audibles pero los pianissimo pueden perderse | Escucha casual, oficina |
    | 30 – 40 | Muy buena. Rango dinámico amplio | Grabación profesional, mezcla |
    | > 40 | Excelente. El ruido de fondo es irrelevante | Mastering, escucha crítica, mediciones de laboratorio |

    !!! warning "El enemigo silencioso"
        Un estudio de grabación casero en un departamento típico tiene ruido de fondo de 35-45 dBA (refrigerador, tránsito lejano, ventilación, vecinos). Una grabación de guitarra acústica tocada suavemente produce 55-65 dBA a 30 cm. SNR = 20 dB → la mitad del rango dinámico está PERDIDO antes de empezar. No importa qué micrófono compres, qué preamp uses, qué plugin de noise reduction tengas: si tu SNR es 20 dB, estás grabando RUIDO con un poco de guitarra. La primera inversión en un estudio NO es un micrófono caro — es SILENCIO.

    > Insertar **Fig. 16-1** del Everest: diagrama del balance energético en un recinto mostrando la señal deseada, el ruido de fondo (interno + externo), y la SNR resultante. Señalar el umbral de percepción y el umbral de molestia.

???+ note "Fuentes de ruido: el mapa de los enemigos"

    El ruido de fondo no es una entidad única — es la SUMA de múltiples fuentes, cada una con su propio mecanismo de generación y transmisión.

    ### Clasificación por origen

    | Origen | Fuente | Rango típico (dBA) | Característica espectral |
    |---|---|---|---|
    | **Externo — Tránsito** | Vehículos, motos, buses, trenes | 55-85 (en fachada) | Picos en 63-250 Hz. Intermitente, impulsivo |
    | **Externo — Aéreo** | Aviones, helicópteros | 60-90 (en fachada) | Banda ancha con picos en 125-500 Hz. Eventos breves (< 1 min) pero intensos |
    | **Externo — Urbano** | Obras, sirenas, comercio, peatones | 45-70 | Variable. Picos diurnos |
    | **Externo — Natural** | Lluvia, viento, truenos, animales | 30-70 | Lluvia: banda ancha en agudos. Viento: graves (< 200 Hz) |
    | **Interno — HVAC** | Aire acondicionado, calefacción, ventiladores, ductos | 25-55 | Dominante en 63-500 Hz. Tono puro de ventilador + banda ancha de flujo de aire. A menudo CONTINUO — el más molesto |
    | **Interno — Equipos** | Computadoras, discos duros, fuentes de poder, amplificadores, consolas, convertidores | 20-45 | Abanicos de computadoras: tono puro en 200-800 Hz. Fuentes: zumbido de 50/60 Hz + armónicos |
    | **Interno — Plomería** | Tuberías de agua, descargas de inodoro, bombas | 40-70 | Impulsivo + vibración estructural. Las tuberías transmiten sonido a TODA la estructura |
    | **Interno — Eléctrico** | Transformadores, balastros de luces fluorescentes, dimmers, UPS | 25-45 | Zumbido 50/60 Hz + armónicos impares (150, 250, 350 Hz…). Continuo, penetrante |
    | **Interno — Ocupantes** | Pasos, voces, puertas, movimiento de muebles | 35-65 | Impacto (pasos) + aéreo (voces). Irregular, horario |
    | **Estructural** | Ascensores, vibración de maquinaria en pisos inferiores, expansión térmica | 30-55 | Muy baja frecuencia (< 100 Hz). Transmitido por la estructura del edificio |

    ### Clasificación por mecanismo de transmisión

    | Mecanismo | ¿Cómo llega? | ¿Cómo se controla? |
    |---|---|---|
    | **Aéreo (airborne)** | El sonido viaja por el aire desde la fuente hasta el receptor | Barreras acústicas (paredes, ventanas con TL adecuado), absorción en el camino, distancia |
    | **Estructural (structure-borne)** | La fuente vibra MECÁNICAMENTE contra una superficie sólida (pared, piso, tubería) y esa vibración viaja por la estructura RE-IRRADIANDO sonido en otro punto | DESACOPLAMIENTO (resortes, neopreno, bases elásticas). La clave: romper el camino sólido. La absorción aérea NO sirve para ruido estructural |
    | **Flanqueo (flanking)** | El sonido «rodea» una barrera acústica viajando por caminos alternativos (ductos de ventilación, falsos plafones, pisos flotantes, paredes adyacentes) | Sellar TODOS los caminos alternativos. La barrera es tan débil como su punto más débil |

    !!! tip "El ruido de los aires acondicionados: el villano #1 en estudios"
        En estudios de grabación, el sistema de climatización (HVAC) es la fuente de ruido interno MÁS IMPORTANTE y la MÁS DIFÍCIL de eliminar. ¿Por qué? Porque NO PODÉS APAGARLO — necesitás ventilación para respirar y refrigeración para los equipos. Un split de aire acondicionado doméstico produce 35-50 dBA en el punto de escucha. Un estudio profesional necesita ≤20 dBA (NC-15). La diferencia se logra con: (a) velocidad de aire MUY baja en los ductos (< 2.5 m/s), (b) silenciadores (duct silencers) en la entrada y salida, (c) conductos sobredimensionados (más sección = menos velocidad = menos ruido), (d) rejillas de difusión de gran área (no las típicas de 15×15 cm que silban), (e) ubicar la unidad condensadora LEJOS y con aislamiento de vibración. Un HVAC silencioso puede costar MÁS que todo el tratamiento acústico de la sala. Pero si no lo hacés, tu ruido de fondo va a ser 30 dB más alto que tu nivel objetivo — y nada de lo que hagas con paneles acústicos va a arreglarlo.

    > Insertar **Fig. 16-4** del Everest: esquema de un sistema HVAC en un estudio mostrando la unidad manejadora de aire (AHU), los ductos de suministro y retorno, los silenciadores (duct silencers), las rejillas de difusión, y los puntos de vibración a aislar. Señalar los tres mecanismos de transmisión: ruido del ventilador (aéreo por los ductos + estructural por la carcasa), ruido de flujo (turbulencia en codos y rejillas), y breakout noise (ruido que «escapa» a través de las paredes del ducto).

???+ note "Curvas de criterio de ruido: ¿cuánto silencio es suficiente?"

    Medir el ruido de fondo en dBA da un solo número. Pero el ruido tiene ESPECTRO — puede ser grave (molesto aunque no muy intenso) o agudo (menos molesto pero más penetrante). Las curvas de criterio evalúan el ruido en bandas de octava y lo comparan con curvas normalizadas que definen el nivel MÁXIMO permitido en cada banda para un determinado uso del espacio.

    ### NC (Noise Criteria) — ANSI S12.2

    Las curvas NC fueron desarrolladas por Beranek en 1957 y son el estándar más usado en América. Cada curva NC-N define un nivel máximo en 8 bandas de octava (63 Hz – 8 kHz). El criterio NC de un espacio es la curva MÁS BAJA que no es excedida por el ruido medido en NINGUNA banda.

    **Interpretación de las curvas NC**:

    | NC | Nivel subjetivo | Aplicación típica |
    |---|---|---|
    | 15-20 | Muy silencioso. El oído percibe el «silencio» como un leve siseo en agudos | Estudios de grabación profesional, salas de concierto, estudios de mastering |
    | 20-25 | Silencioso. Conversación en susurro audible a 3 m | Salas de control, estudios de mezcla, teatros, auditorios |
    | 25-30 | Tranquilo. Conversación normal audible sin esfuerzo | Salas de conferencia, aulas, salas de ensayo, cines |
    | 30-35 | Moderadamente tranquilo. Conversación a 3-5 m requiere voz normal | Oficinas privadas, bibliotecas, salas de estar |
    | 35-40 | Ruido de fondo perceptible. Conversación requiere elevar un poco la voz | Oficinas abiertas, restaurantes tranquilos, vestíbulos |
    | 40-50 | Ruidoso. Conversación difícil a más de 2 m | Restaurantes, comercios, gimnasios |
    | > 50 | Muy ruidoso. Conversación a gritos a 1 m | Fábricas, talleres, cocinas industriales |

    ### NR (Noise Rating) — ISO 1996

    Las curvas NR son el equivalente ISO de las NC. Difieren ligeramente en las bandas de baja frecuencia (NR es más permisivo en 63-125 Hz que NC). En la práctica, NC ≈ NR para la mayoría de aplicaciones en medios y agudos.

    ### RC (Room Criteria) — ANSI S12.2-2008

    Las curvas RC son una EVOLUCIÓN de las NC que corrige su principal defecto: las NC no distinguen entre ruido con balance espectral neutral y ruido con exceso de graves o agudos. Las RC introducen un clasificador de «calidad» del ruido:

    | Clasificador | Significado | Percepción |
    |---|---|---|
    | **(N)** | Neutral — el espectro sigue la forma de la curva RC sin desviaciones | Sonido «limpio», sin zumbido ni siseo dominante |
    | **(R)** | Rumble — exceso de graves (bajas frecuencias > 5 dB sobre la curva) | Zumbido, sensación de «pesadez». Molesto aunque el nivel total sea bajo |
    | **(H)** | Hiss — exceso de agudos (altas frecuencias > 3 dB sobre la curva) | Siseo, sensación de «presión» en los oídos. Fatigante en exposiciones prolongadas |
    | **(RV)** | Rumble + Vibration — exceso de graves con vibración táctil perceptible | Vibración en pisos y paredes. Estructural, no solo aéreo |

    **Ejemplo**: un espacio con RC-30(N) tiene un ruido de fondo con nivel RC-30 y balance espectral NEUTRAL. RC-25(R) significa nivel RC-25 pero con exceso de graves (zumbido). RC-35(H) significa nivel RC-35 con exceso de agudos (siseo). El clasificador es tan importante como el número.

    !!! info "¿Por qué RC es más útil que NC para estudios?"
        Imaginá dos estudios, ambos con NC-25. El primero tiene un zumbido de 50 Hz del transformador de la consola. El segundo tiene un siseo de alta frecuencia del ventilador del rack. Ambos son «NC-25», pero el PRIMERO es MUCHO más molesto (el zumbido en graves es más difícil de ignorar y se cuela en todas las grabaciones). Las curvas RC-25(R) vs. RC-25(H) capturan esa diferencia. Para un estudio, querés RC-20(N) o mejor: no solo bajo nivel, sino balance espectral NEUTRAL.

    > Insertar **Fig. 16-2** del Everest: gráfico de las curvas NC (NC-15 a NC-65) en bandas de octava de 63 Hz a 8 kHz. Superponer las curvas RC equivalentes para mostrar las diferencias en bajas frecuencias. Incluir el espectro de un ruido HVAC típico y mostrar cómo se determina su NC: la curva más baja que NO es excedida en NINGUNA banda.

???+ note "Medición y diagnóstico: ¿cómo saber contra qué estoy luchando?"

    Antes de diseñar CUALQUIER solución de aislamiento, necesitás un DIAGNÓSTICO CUANTITATIVO del ruido de fondo. Adivinar es la receta para gastar dinero en soluciones que no atacan el problema real.

    ### Protocolo de medición

    1. **Equipo**: Sonómetro Clase 2 como mínimo (apps de celular calibradas pueden servir para un diagnóstico preliminar, pero NO para mediciones profesionales). Idealmente, un micrófono de medición + interface de audio + software (REW, Smaart, ARTA).

    2. **Condiciones**: Medir en el peor escenario REALISTA (horario de mayor ruido externo, equipos de ventilación encendidos como estarían en una sesión de grabación). Si medís a las 3 AM con todo apagado, tu diagnóstico NO representa la realidad de uso.

    3. **Puntos de medición**:
        - Posición de escucha / posición del micrófono (donde se graba)
        - Puntos de posible entrada de ruido: ventanas, puertas, ductos de ventilación, paredes colindantes con fuentes de ruido conocidas
        - Al menos 3 puntos por recinto para detectar variaciones espaciales

    4. **Parámetros a registrar** (por banda de octava de 31.5 Hz a 8 kHz, o al menos 63 Hz – 4 kHz):
        - **Leq** (1 minuto): nivel continuo equivalente — el promedio energético
        - **L₁₀**: nivel excedido el 10% del tiempo — representa los PICO típicos (paso de vehículos, golpes)
        - **L₉₀**: nivel excedido el 90% del tiempo — representa el RUIDO DE FONDO estadístico (el «piso»)
        - **L_max** y **L_min**: los extremos absolutos

    5. **Identificación de fuentes**: Durante la medición, anotar CADA evento sonoro identificable (paso de camión a las 14:23, arranque del compresor del AC a las 14:25, vecino moviendo muebles a las 14:27). Esto es CLAVE para correlacionar picos en la medición con fuentes específicas.

    ### Mapa de ruido

    Un mapa de ruido es un plano del espacio con el nivel sonoro anotado en cada punto de medición. Permite identificar:
    - **Puntos calientes**: zonas donde el ruido es significativamente mayor que el promedio
    - **Puntos de entrada**: ventanas, puertas, paredes donde el ruido externo se cuela
    - **Zonas muertas**: rincones donde el ruido de fondo puede ser menor (útil para posicionar micrófonos)

    ### Herramientas de diagnóstico

    | Herramienta | ¿Qué mide? | ¿Para qué sirve? |
    |---|---|---|
    | **Sonómetro** (dBA, dBC, Leq) | Nivel sonoro global | Diagnóstico rápido, verificación de cumplimiento de normativa |
    | **Analizador de espectro en tiempo real (RTA)** | Nivel por banda de octava o tercio de octava | Identificar en QUÉ frecuencias está el ruido (grave vs. agudo) → definir qué tipo de aislamiento necesitás |
    | **Waterfall / espectrograma** | Evolución temporal del espectro | Distinguir ruido CONTINUO (HVAC) de EVENTOS (tránsito, golpes) → estrategias de control distintas |
    | **Acelerómetro** | Vibración estructural (m/s² o mm/s) | Diagnosticar ruido ESTRUCTURAL (pasos, maquinaria) vs. aéreo → si el piso vibra, necesitás desacoplamiento, no más masa en las paredes |
    | **Estetoscopio de contacto** | Ruido en tuberías, paredes, estructuras | Localizar fuentes específicas de ruido estructural: una bomba en el sótano que se transmite por una columna hasta el piso 5 |

    !!! tip "El experimento de «apagar todo»"
        La técnica más simple y reveladora: apagar TODO — equipos, luces, ventilación, refrigerador, TODO lo que produzca ruido en el espacio Y en espacios adyacentes. Medir el ruido residual. Esa es tu LÍNEA BASE. Ahora encender UN equipo a la vez, medir, anotar la contribución. Así construís un «presupuesto de ruido»: HVAC aporta 33 dBA, computadora 28 dBA, tránsito por la ventana 35 dBA, nevera en la cocina adyacente 25 dBA. La suma logarítmica te da el total. Ahora SABÉS exactamente qué atacar y en qué orden de prioridad.

    > Insertar **Fig. 16-3** del Everest: espectro de ruido de fondo típico en un estudio mostrando la contribución de cada fuente (HVAC en 63-250 Hz, computadora en 200-800 Hz, tránsito externo en 63-500 Hz). Señalar la curva NC-20 como objetivo y las bandas donde el ruido la excede.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 16, pp. 231–250 (Control of Interfering Noise — Background Noise, Noise Criteria Curves, RC/NC/NR Standards, HVAC Noise, Noise Measurement Methodology, Source Identification).*
