# Sesión 30: Privacidad acústica y control de vibraciones

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="dba"></a>**dBA** | Decibel A-ponderado | Nivel sonoro con filtro que simula la sensibilidad del oído humano | Atenúa graves (< 1 kHz) y agudos extremos (> 8 kHz) |
    | <a id="stc"></a>**STC** | Sound Transmission Class | Índice de aislamiento a ruido aéreo | ASTM E413 |
    | <a id="nc"></a>**NC** | Noise Criteria | Curva de criterio de ruido (estándar americano) | ANSI S12.2 |
    | <a id="stiam"></a>**STI** | Speech Transmission Index | Índice de inteligibilidad del habla (0–1) | IEC 60268-16 |
    | <a id="rasti"></a>**RASTI** | Room Acoustics Speech Transmission Index | Versión simplificada del STI (2 bandas) | IEC 60268-16 (obsoleto, reemplazado por STIPA) |
    | <a id="stipa"></a>**STIPA** | Speech Transmission Index for PA Systems | Versión práctica del STI | IEC 60268-16 |
    | <a id="ai"></a>**AI** | Articulation Index | Índice de articulación (0–1) — predecesor del STI | ANSI S3.5 |
    | <a id="sii"></a>**SII** | Speech Intelligibility Index | Índice de inteligibilidad moderno (0–1) | ANSI S3.5-1997 |
    | <a id="tl"></a>**TL** | Transmission Loss | Pérdida por transmisión a través de una partición | \(TL = 10 \log_{10}(1/\tau)\) en dB |
    | <a id="tau"></a>**τ** (tau) | Coeficiente de transmisión | Fracción de energía sonora que atraviesa una partición | 0 ≤ τ ≤ 1 |
    | <a id="m2"></a>**m²** | Metro cuadrado | Superficie | Sabin métrico = 1 m² de absorción total |
    | <a id="kg"></a>**kg** | Kilogramo | Masa | — |
    | <a id="cfm"></a>**CFM** | Cubic Feet per Minute | Flujo de aire (HVAC) | 1 CFM ≈ 1.7 m³/h. También se usa l/s |
    | <a id="fpm"></a>**FPM** | Feet per Minute | Velocidad de aire en ductos (HVAC) | 1 FPM ≈ 0.005 m/s. 500 FPM ≈ 2.5 m/s |
    | <a id="eta"></a>**η** (eta) | Transmisibilidad | Relación entre la fuerza transmitida y la fuerza aplicada a un aislador de vibración | \(\eta = F_t / F_0\); adimensional |
    | <a id="f0"></a>**f₀** | Frecuencia natural | Frecuencia de resonancia del sistema de aislamiento de vibración | Hz |

???+ note "Privacidad acústica e inteligibilidad del habla"

    ### El problema de la privacidad

    La privacidad acústica NO es simplemente «que no se escuche nada». Es una PROBABILIDAD: ¿qué tan probable es que una conversación en el recinto A sea entendida por alguien en el recinto B? La privacidad acústica existe en un continuo:

    | Nivel de privacidad | Descripción | ¿Qué se percibe en el recinto adyacente? | STI / AI equivalente |
    |---|---|---|---|
    | **Privacidad total** | Esfuerzo deliberado necesario para escuchar. Conversación ininteligible | Murmullo ocasional sin palabras distinguibles | STI < 0.15, AI < 0.05 |
    | **Privacidad normal** | Conversación audible pero no inteligible. Se escucha que alguien habla pero NO se entiende QUÉ dice | Sonido de voz sin contenido semántico identificable | STI 0.15–0.30, AI 0.05–0.15 |
    | **Privacidad marginal** | Palabras ocasionales y frases cortas inteligibles con concentración | Fragmentos de conversación («...entonces le dije...») | STI 0.30–0.45, AI 0.15–0.30 |
    | **Sin privacidad** | Conversación CLARAMENTE inteligible | El vecino es parte involuntaria de tu vida | STI > 0.45, AI > 0.30 |

    ### El Speech Transmission Index (STI)

    El STI es un índice objetivo que predice la INTELIGIBILIDAD del habla transmitida a través de un canal (que puede incluir una pared, un sistema de sonido, o la acústica de una sala). Va de 0 (ininteligible) a 1 (perfecta). Se basa en medir la REDUCCIÓN de la modulación de una señal de prueba en 7 bandas de octava (125 Hz – 8 kHz) y 14 frecuencias de modulación por banda (0.63 Hz – 12.5 Hz), resultando en una matriz de 98 valores de relación de modulación m(f, F). La combinación ponderada de estos valores produce el STI.

    \[
    \boxed{STI = \sum_{i=1}^{7} \sum_{j=1}^{14} w_{ij} \cdot m(f_i, F_j)}
    \]

    Donde \(m(f_i, F_j)\) es la relación de modulación en la banda de octava \(f_i\) y frecuencia de modulación \(F_j\), y \(w_{ij}\) son pesos perceptuales.

    | STI | Calificación | ¿Qué significa en la práctica? |
    |---|---|---|
    | 0.00 – 0.30 | Malo (Bad) | Ininteligible. Palabras sueltas ocasionales |
    | 0.30 – 0.45 | Pobre (Poor) | Inteligible con esfuerzo y concentración. Frases cortas |
    | 0.45 – 0.60 | Regular (Fair) | Inteligible con atención moderada |
    | 0.60 – 0.75 | Bueno (Good) | Clara inteligibilidad sin esfuerzo significativo |
    | 0.75 – 1.00 | Excelente (Excellent) | Perfecta inteligibilidad. Cada sílaba es clara |

    ### Relación entre STC y privacidad del habla

    El STC de la pared separadora es el FACTOR PRINCIPAL que determina el STI entre recintos, pero no es el ÚNICO: el nivel de la voz en la fuente (una conversación normal = 60 dBA, una discusión = 75 dBA), el ruido de fondo en el recinto receptor (que ENMASCARA la voz que se filtra), y la absorción en ambos recintos también afectan la inteligibilidad.

    | STC de la pared | Privacidad resultante (voz normal 60 dBA en fuente, ruido de fondo receptor 30 dBA) |
    |---|---|
    | 25 | Sin privacidad — conversación perfectamente inteligible («pared de papel») |
    | 35 | Privacidad marginal — palabras y frases cortas audibles con concentración |
    | 45 | Privacidad normal — voz audible como murmullo, contenido NO inteligible |
    | 55 | Privacidad total — incluso gritos son ininteligibles |
    | 60+ | Confidencialidad — esencialmente ningún sonido de voz perceptible |

    !!! tip "El ruido de fondo como aliado de la privacidad"
        Paradójicamente, un ruido de fondo MODERADO en el recinto receptor MEJORA la privacidad acústica. ¿Por qué? Porque el ruido de fondo ENMASCARA la voz que se filtra a través de la pared. Si el ruido de fondo en el receptor es 35 dBA, la voz filtrada a 30 dBA es INAUDIBLE (SNR = −5 dB). Pero si el receptor es MUY silencioso (15 dBA), la misma voz filtrada a 30 dBA es PERFECTAMENTE AUDIBLE (SNR = +15 dB) y potencialmente inteligible. Este es el principio detrás de los sistemas de ENMASCARAMIENTO ACÚSTICO (sound masking): parlantes en el plenum que emiten ruido rosa cuidadosamente ecualizado para elevar el ruido de fondo de forma controlada (típicamente 42-48 dBA con espectro descendente) y así mejorar la privacidad en oficinas abiertas. NO es ruido molesto — es ruido DISEÑADO para enmascarar voces sin llamar la atención.

    > Insertar **diagrama conceptual de privacidad del habla**: dos recintos adyacentes separados por una pared. En el recinto fuente, una persona hablando a 60 dBA. En el recinto receptor, un oyente a 2 m de la pared. Mostrar: (a) la atenuación de la pared (STC/TL) que reduce el nivel de la voz, (b) el ruido de fondo en el receptor que enmascara la voz residual, y (c) la inteligibilidad resultante indicada con STI. Superponer la escala STI de color (rojo = 0-0.30 malo, naranja = 0.30-0.45 pobre, amarillo = 0.45-0.60 regular, verde = 0.60-0.75 bueno, azul = 0.75-1.00 excelente).

    ### RASTI y STIPA: versiones simplificadas para campo

    El STI completo requiere 98 mediciones — es un procedimiento de laboratorio. Para mediciones en campo se desarrollaron versiones simplificadas:

    - **RASTI** (Room Acoustics Speech Transmission Index): solo 2 bandas de octava (500 Hz y 2 kHz) × 4 y 5 frecuencias de modulación = 9 mediciones. Es rápido pero NO captura los efectos de ruido en graves, ecualización deficiente ni distorsión no lineal. Obsoleto — reemplazado por STIPA en la revisión de IEC 60268-16 (2011).

    - **STIPA** (STI for Public Address Systems): usa 7 bandas de octava pero solo 2 frecuencias de modulación por banda (14 mediciones totales). Es el estándar actual para medición en campo de inteligibilidad de sistemas de refuerzo sonoro y evacuación por voz. Un valor STIPA ≥ 0.50 es el mínimo requerido por NFPA 72 para sistemas de alarma por voz en EE.UU.

???+ note "Control de ruido en sistemas de climatización (HVAC)"

    ### El problema: HVAC como fuente de ruido #1 en estudios

    El sistema de climatización (Heating, Ventilation and Air Conditioning — HVAC) es la fuente de ruido interno MÁS IMPORTANTE en estudios de grabación, salas de control y auditorios. Las razones:

    1. **Es CONTINUO**: a diferencia del tránsito (intermitente) o los vecinos (horario variable), el HVAC está encendido durante TODA la sesión de trabajo. Un ruido continuo de 35 dBA es más MOLESTO y FATIGANTE que uno intermitente de 45 dBA.

    2. **NO SE PUEDE APAGAR**: necesitás ventilación para respirar (renovación de aire: 8-10 l/s por persona según ASHRAE 62.1) y refrigeración para los equipos (una consola de mezclas + computadoras + amplificadores pueden generar 500-2000 W de calor). Apagar el HVAC no es una opción en una sesión de varias horas.

    3. **Su espectro es CRÍTICO para grabación**: el ruido de HVAC es dominante en 63-500 Hz — justo donde están las frecuencias fundamentales de la voz masculina (85-180 Hz), el bajo eléctrico (41-392 Hz), la batería (bombo 50-100 Hz, tom de piso 60-120 Hz) y los modos de sala más problemáticos.

    ### Fuentes de ruido en un sistema HVAC

    El ruido de un sistema HVAC NO es una sola fuente — es la SUMA de tres mecanismos distintos:

    | Mecanismo | Origen | Espectro | ¿Cómo se controla? |
    |---|---|---|---|
    | **Ruido del ventilador (fan noise)** | El ventilador mismo — las aspas generan un tono puro a la frecuencia de paso de álabe (BPF = N × RPM / 60) más banda ancha por turbulencia | Tono puro en BPF (típicamente 100-400 Hz) + banda ancha en 63-2000 Hz | Ventilador de baja velocidad, álabes curvados hacia atrás (airfoil), conductos con silenciadores |
    | **Ruido de flujo de aire (airflow noise)** | Turbulencia del aire al pasar por codos, bifurcaciones, dampers, rejillas y cambios de sección | Banda ancha, crece con V⁵–V⁶. Pico en 250-2000 Hz | Velocidad de aire MUY BAJA (< 2.5 m/s en ramas terminales, < 5 m/s en ductos principales), codos con radio amplio (> 1.5× diámetro), transiciones suaves |
    | **Ruido breakout (breakout noise)** | Ruido que «escapa» a través de las paredes del conducto hacia el espacio ocupado. El ducto actúa como un ALTAVOZ | Similar al ruido del ventilador pero con atenuación por la masa de la pared del ducto | Conductos con masa superficial suficiente (TL adecuado), recubrimiento externo con barrera acústica (mass-loaded vinyl), evitar conductos sobre espacios sensibles |

    !!! warning "La velocidad del aire es el parámetro de diseño #1"
        La regla fundamental del HVAC silencioso: la potencia sonora del ruido de flujo es aproximadamente proporcional a \(V^5\) o \(V^6\) (según el tipo de turbulencia). Si duplicás la velocidad del aire (de 2.5 a 5 m/s), el ruido NO se duplica — se multiplica por 32× a 64× (+15 a +18 dB). Por eso los estudios profesionales usan conductos SOBREDIMENSIONADOS: el doble de sección → mitad de velocidad → 15-18 dB MENOS de ruido. Un sistema residencial típico mueve aire a 500-800 FPM (2.5-4 m/s). Un estudio profesional: 150-300 FPM (0.75-1.5 m/s) en difusores terminales.

    ### El modelo fuente-trayectoria-receptor (source-path-receiver)

    Todo problema de control de ruido HVAC se analiza con este modelo de tres etapas:

    ```
    FUENTE ────→ TRAYECTORIA ────→ RECEPTOR
    (ventilador,    (ductos,       (posición de
     turbulencia,   codos,          escucha,
     compresor)     rejillas,       micrófono)
                    estructura)
    ```

    | Etapa | ¿Qué genera el ruido? | ¿Qué se puede hacer? |
    |---|---|---|
    | **Fuente** | Ventilador (tono BPF + banda ancha), compresor (vibración), flujo de aire (turbulencia) | Elegir equipos de BAJO RUIDO (NR < 25 en fabricante), ventiladores con álabes airfoil, velocidad de rotación < 1200 RPM, compresores scroll (más silenciosos que reciprocantes) |
    | **Trayectoria** | Ductos (transmisión aérea + breakout + vibración estructural), codos (turbulencia), rejillas (silbido por velocidad excesiva) | Silenciadores (duct silencers) en impulsión y retorno, conductos sobredimensionados, codos de radio amplio, transiciones cónicas (15° máximo), revestimiento interno absorbente en primeros 3-5 m tras el ventilador, desacoplamiento del ventilador de los conductos (juntas flexibles) |
    | **Receptor** | Ruido que LLEGA al espacio ocupado a través de rejillas, breakout y flanqueo estructural | Rejillas de difusión de gran área (baja velocidad de salida), ubicar rejillas LEJOS de la posición de escucha, tratamiento acústico del espacio para absorber el ruido residual, enmascaramiento si es ineliminable |

    ### Estrategia de diseño paso a paso

    1. **Definir el criterio de ruido objetivo**: para un estudio de grabación, NC-15 a NC-20 (≈20-25 dBA). Para una sala de control, NC-20 a NC-25. Para un aula, NC-25 a NC-30.

    2. **Seleccionar el ventilador y equipo con datos de ruido del fabricante**: todo fabricante de equipos HVAC serio publica datos de potencia sonora (L_w en dB re 1 pW) por banda de octava. Comparar VENTILADORES, no solo equipos completos. Un ventilador centrífugo con álabes airfoil a 900 RPM puede ser 15-20 dB más silencioso que uno con álabes rectos a 1750 RPM para el mismo caudal.

    3. **Dimensionar los conductos para baja velocidad**: caudal = velocidad × sección. Para mover 500 l/s (≈1000 CFM) a 2.5 m/s necesitás una sección de 0.2 m² (ej. conducto de 500×400 mm). Si el mismo caudal lo movés a 5 m/s, la sección necesaria es 0.1 m² — pero el ruido de flujo es 15-18 dB MAYOR. El espacio extra que ocupan los conductos grandes es la inversión en silencio.

    4. **Insertar silenciadores**: un duct silencer típico es un tramo de conducto con material absorbente (lana mineral con velo protector) en las paredes internas y baffles (tabiques) que aumentan el área de absorción sin bloquear el flujo. La atenuación típica es de 10-25 dB en las bandas de 125 Hz – 4 kHz, con menor efectividad en graves (< 125 Hz) donde se necesita MAYOR longitud (2-3 m). El silenciador debe ubicarse CERCA del ventilador (para atrapar el ruido antes de que se propague) y en la entrada Y salida.

    5. **Diseñar las rejillas terminales**: la velocidad de salida en la rejilla es el PARÁMETRO CRÍTICO final. Una rejilla de 15×15 cm con 100 l/s tiene velocidad de salida ≈ 4.4 m/s → silbido audible (NC 30-35). Una rejilla de 60×30 cm con los mismos 100 l/s tiene velocidad ≈ 0.55 m/s → inaudible. Rejillas lineales largas (slot diffusers) o difusores de gran área con plenum de expansión.

    6. **Desacoplar y aislar**: juntas flexibles (lona o neopreno) entre el ventilador y los conductos. Soportes elásticos para el ventilador y la unidad condensadora. Conductos NO deben tener contacto rígido con la estructura del edificio. Si el ducto atraviesa una pared, debe tener sello acústico perimetral.

    > Insertar **Fig. 17-6** del Everest: diagrama de un sistema HVAC completo para un estudio de grabación. Mostrar: unidad manejadora de aire (AHU) con soportes de resorte, juntas flexibles a la entrada y salida, silenciadores en impulsión y retorno (con baffles y material absorbente), conductos sobredimensionados con codos de radio amplio, rejillas de difusión de gran área, y la unidad condensadora externa con aislamiento de vibración y barrera acústica. Señalar los TRES mecanismos de transmisión: aéreo por ductos (→ silenciadores), breakout a través de paredes de ducto (→ masa + recubrimiento externo), estructural por soportes (→ desacoplamiento con resortes).

???+ note "Aislamiento de vibraciones"

    ### El problema del ruido estructural

    El ruido aéreo viaja por el aire y se puede bloquear con barreras (paredes con TL). Pero el ruido ESTRUCTURAL viaja por SÓLIDOS — y los sólidos son EXCELENTES transmisores de vibración. Una máquina vibrando sobre una losa de concreto transmite esa vibración a TODA la estructura del edificio, y esa vibración se RE-IRRADIA como sonido en cada habitación conectada estructuralmente, a metros o pisos de distancia de la fuente. El ruido estructural NO se soluciona con más masa en las paredes (porque el sonido no ATRAVIESA la pared — VIAJA por la estructura). Se soluciona con AISLAMIENTO DE VIBRACIONES: desacoplar mecánicamente la fuente de la estructura.

    ### El modelo masa-resorte: fundamento del aislamiento de vibraciones

    El aislamiento de vibraciones funciona bajo el mismo principio físico masa-aire-masa que vimos en Sesión 29, pero aplicado a una dirección distinta: en vez de aislar presión sonora (vertical a la pared), aislamos vibración mecánica (típicamente vertical, compresión de un resorte). El sistema se modela como una masa \(m\) (la máquina, equipo, o superficie a aislar) apoyada sobre un resorte de rigidez \(k\) (el aislador: neopreno, resorte helicoidal, o almohadilla elástica).

    \[
    \boxed{f_n = \frac{1}{2\pi} \sqrt{\frac{k}{m}}}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(f_n\) | Frecuencia natural | Hz | Frecuencia de resonancia del sistema masa-resorte. POR DEBAJO de esta frecuencia no hay aislamiento. POR ENCIMA, la transmisibilidad cae |
    | \(k\) | Rigidez del aislador | N/m | Fuerza necesaria para comprimir el aislador 1 metro. Resortes blandos → k baja → f_n baja → mejor aislamiento a bajas frecuencias |
    | \(m\) | Masa soportada | kg | Masa del equipo + base inercial. Más masa → f_n más baja → mejor aislamiento |

    También puede escribirse en función de la deflexión estática \(\delta\) (cuánto se comprime el aislador bajo el peso de la máquina):

    \[
    \boxed{f_n \approx \frac{15.8}{\sqrt{\delta}} \quad \text{Hz}}
    \]

    Donde \(\delta\) está en milímetros. Un aislador que se comprime 1 mm → f_n ≈ 15.8 Hz. Uno que se comprime 10 mm → f_n ≈ 5 Hz. «Más deflexión = frecuencia natural más baja = mejor aislamiento en graves.»

    ### Transmisibilidad: ¿cuánto aisla el aislador?

    La transmisibilidad \(\eta\) es la relación entre la fuerza transmitida a la estructura (\(F_t\)) y la fuerza aplicada por la máquina (\(F_0\)):

    \[
    \boxed{\eta = \frac{F_t}{F_0} = \frac{1}{\left|\left(\frac{f}{f_n}\right)^2 - 1\right|}}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(\eta\) | Transmisibilidad | Adimensional (o %) | \(\eta = 1\) → 100% de la fuerza pasa a la estructura (sin aislamiento). \(\eta = 0.01\) → 1% pasa (99% de aislamiento) |
    | \(f\) | Frecuencia de excitación | Hz | Frecuencia de la vibración que queremos aislar (ej. RPM de un motor / 60) |
    | \(f_n\) | Frecuencia natural del sistema | Hz | Frecuencia de resonancia masa-resorte |

    Tres regiones de comportamiento:

    | Región | Relación f/f_n | Transmisibilidad | ¿Qué pasa? |
    |---|---|---|---|
    | **Resonancia** | \(f \approx f_n\) | \(\eta \gg 1\) (3–20×) | La vibración se AMPLIFICA. El peor escenario. NUNCA operar un equipo cerca de la resonancia de su aislador |
    | **Sin aislamiento** | \(f < f_n\) | \(\eta \approx 1\) | La fuerza se transmite completamente a la estructura. El aislador no hace nada |
    | **Aislamiento efectivo** | \(f > \sqrt{2}·f_n\) | \(\eta < 1\) y decrece | POR ENCIMA de ≈ 1.414× la frecuencia natural, la transmisibilidad cae. Cuanto mayor f/f_n, menor transmisión |
    | **Alto aislamiento** | \(f > 3·f_n\) | \(\eta < 0.1\) (< 10%) | Más del 90% de la fuerza es absorbida por el aislador. Zona de diseño objetivo |

    ### La regla práctica

    Para que un aislador de vibraciones sea efectivo, la frecuencia natural del sistema \(f_n\) debe ser AL MENOS 3× menor que la frecuencia de excitación más baja de la máquina (típicamente la velocidad de rotación del motor). Para una máquina que gira a 1750 RPM (≈29 Hz), necesitamos \(f_n < 9.7\) Hz → deflexión estática > (15.8/9.7)² ≈ 2.7 mm. Para un ventilador a 900 RPM (15 Hz), necesitamos \(f_n < 5\) Hz → deflexión > 10 mm → necesitamos resortes helicoidales, no almohadillas de neopreno (que típicamente dan deflexiones de 1-3 mm).

    [🎛️ **Abrir simulación interactiva — Aislamiento de vibraciones**](../../../simulacion/vibraciones.html){ .md-button }

    Cambia la velocidad (RPM) y la deflexión δ. Observa f, f_n, r = f/f_n, la transmisibilidad η y las zonas de amplificación o aislamiento. Activa la conexión rígida para ver el puente de vibración.

    ### Tipos de aisladores de vibración

    | Tipo | Deflexión típica | f_n típica | Aplicación |
    |---|---|---|---|
    | **Almohadilla de neopreno (pad)** | 1–5 mm | 7–16 Hz | Equipos livianos (compresores pequeños, bombas < 3 HP), frecuencias de excitación > 30 Hz. Económico, fácil instalación. Una sola capa → f_n ≈ 10-16 Hz. Dos capas con placa intermedia → f_n más baja |
    | **Resorte helicoidal (steel spring)** | 10–50 mm | 2.2–5 Hz | Equipos pesados, bajas frecuencias de excitación (< 20 Hz), máxima eficiencia de aislamiento (> 95%). Requiere base inercial para estabilidad. Con amortiguamiento: resortes encapsulados en neopreno (spring isolator with cup) |
    | **Base inercial (inertia base)** | — (combinado con resortes) | Variable | Base de concreto armado (1.5–2× la masa del equipo) que se apoya sobre resortes. La masa extra BAJA f_n (más masa = f_n más baja) y reduce el movimiento del equipo (la inercia estabiliza). Esencial para equipos con arranque/parada (el mayor desplazamiento ocurre al pasar por la resonancia durante el arranque) |
    | **Montaje flotante (floating slab)** | — (losa sobre capa elástica continua) | 5–15 Hz | Losa de concreto apoyada sobre una capa continua de lana de roca de alta densidad o neopreno. Para aislamiento de recintos completos (estudio de grabación, sala de máquinas) |
    | **Colchón de aire (air spring)** | Variable (presión) | 1–3 Hz | Máximo aislamiento (> 99% a 10 Hz). Para equipos de ultra-precisión (microscopios electrónicos, mesas ópticas, salas limpias). Requiere suministro de aire comprimido y control automático de altura |

    !!! warning "No olvides las conexiones: el aislamiento de vibración es un SISTEMA"
        Un error clásico: aislás la máquina con resortes perfectos (f_n = 3 Hz, η = 0.01 a 20 Hz), pero las cañerías de agua, los conductos de ventilación y los cables eléctricos están RÍGIDAMENTE conectados a la máquina y a la estructura del edificio. Esas conexiones son PUENTES de vibración — el 99% de aislamiento de los resortes se anula porque la vibración se escapa por las cañerías. Solución: todas las conexiones a una máquina aislada deben incluir JUNTAS FLEXIBLES: conectores flexibles (lona, neopreno) en ductos, mangueras flexibles en cañerías, y «bucles» de cable eléctrico (loop flexible, no tensado). El sistema de aislamiento incluye los aisladores + TODAS las conexiones flexibles.

    > Insertar **Fig. 17-4** del Everest: diagrama de aislamiento de vibraciones de un equipo mecánico. Mostrar: la máquina sobre resortes helicoidales, la base inercial de concreto, las juntas flexibles en ductos (entrada y salida), los conectores flexibles en cañerías, y los soportes elásticos que separan el equipo de la losa estructural. Señalar el camino de la vibración: de la máquina → resortes (atenuación > 90%) → pequeña fuerza residual a la losa → la losa vibra MÍNIMAMENTE. Comparar con el caso SIN aislamiento: máquina directamente sobre la losa → toda la fuerza se transmite → la losa vibra → re-irradia sonido en todo el edificio.

    ### Ejemplo numérico: diseño de base antivibratoria

    Un compresor alternativo de 200 kg gira a 1450 RPM (24.2 Hz). Queremos aislarlo para que transmita MENOS del 10% de la fuerza vibratoria al piso (η < 0.1).

    1. **Frecuencia de excitación mínima**: f = 1450/60 = 24.2 Hz.
    2. **Requerimiento**: f > 3·f_n → f_n < 24.2/3 ≈ 8.1 Hz.
    3. **Deflexión mínima del aislador**: δ > (15.8/f_n)² = (15.8/8.1)² ≈ 3.8 mm.
    4. **Selección del aislador**: con neopreno podemos lograr δ ≈ 3-5 mm por capa. Con resortes helicoidales, δ ≈ 15-25 mm fácilmente. Para un compresor alternativo (que genera fuertes vibraciones en el arranque), elegimos resortes con deflexión estática de 15 mm → f_n = 15.8/√15 ≈ 4.1 Hz → a 24.2 Hz, η = 1/|((24.2/4.1)² − 1)| = 1/|(5.9² − 1)| = 1/|34.8 − 1| ≈ 0.03 (3%). Excelente: solo el 3% de la fuerza vibratoria llega al piso.
    5. **Base inercial**: para estabilizar, añadimos una base de concreto de 300 kg (1.5× la masa del compresor). Masa total = 500 kg. Verificamos: f_n = (1/2π)·√(k/m). Con resortes seleccionados para deflexión de 15 mm bajo 500 kg: k = mg/δ = 500×9.8/0.015 = 326,667 N/m total. Cada resorte: si usamos 4 resortes, k_individual = 81,667 N/m.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 17, pp. 251–275 (Ventilating and Air-Conditioning Systems — HVAC Noise Sources, Duct Silencers, Airflow Velocity Criteria, Vibration Isolation, Source-Path-Receiver Model, Equipment Isolation). IEC 60268-16 (Speech Transmission Index — STI, STIPA, RASTI). ANSI S3.5-1997 (Speech Intelligibility Index). ASHRAE 2019 Handbook — HVAC Applications, Chapter 48 (Noise and Vibration Control).*
