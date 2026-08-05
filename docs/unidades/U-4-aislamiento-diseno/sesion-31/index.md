# Sesión 31: Integración U4 — Diseño integral de espacios acústicos

**📚 Everest Caps. 18–22** | *Herramientas: Google Classroom, calculadora, planos de planta de estudios reales*

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="dba"></a>**dBA** | Decibel A-ponderado | Nivel sonoro con filtro que simula la sensibilidad del oído humano | Atenúa graves (< 1 kHz) y agudos extremos (> 8 kHz) |
    | <a id="spl"></a>**SPL** | Sound Pressure Level | Nivel de presión sonora | Medido en dB re 20 µPa |
    | <a id="tl"></a>**TL** | Transmission Loss | Pérdida por transmisión a través de una partición | dB |
    | <a id="stc"></a>**STC** | Sound Transmission Class | Índice de aislamiento a ruido aéreo | ASTM E413 |
    | <a id="nc"></a>**NC** | Noise Criteria | Curva de criterio de ruido | ANSI S12.2 |
    | <a id="rt60"></a>**RT60** | Tiempo de reverberación | Tiempo que tarda el SPL en caer 60 dB | Segundos (s) |
    | <a id="m"></a>**m** | Metro | Longitud | — |
    | <a id="m2"></a>**m²** | Metro cuadrado | Superficie | — |
    | <a id="m3"></a>**m³** | Metro cúbico | Volumen | — |
    | <a id="lambda"></a>**λ** (lambda) | Longitud de onda | Distancia que recorre la onda en un ciclo | \(\lambda = c/f\) (m) |
    | <a id="f0"></a>**f₀** | Frecuencia de resonancia | Frecuencia natural de un sistema masa-aire-masa o masa-resorte | Hz |
    | <a id="kg"></a>**kg** | Kilogramo | Masa | — |

---

???+ note "Mapa conceptual integrador — De la física a la sala construida"

    ### U1 — Fundamentos físicos (Sesiones 1–8)

    | Concepto | Definición operativa | Se aplica en diseño cuando… |
    |---|---|---|
    | Onda sonora: compresión/rarefacción | El sonido es una perturbación mecánica que viaja por un medio elástico. Sin medio = sin sonido | …entendés que la energía sonora debe ser DISIPADA (absorbida) o BLOQUEADA (aislada) — no puede simplemente «desaparecer» |
    | Velocidad del sonido: c = 343 m/s a 20°C | Constante fundamental. c = λ·f. Las longitudes de onda en audio van de 17 m (20 Hz) a 17 mm (20 kHz) | …dimensionás una sala: un modo axial de 34 Hz necesita 5 m de longitud mínima. Un difusor QRD para 1 kHz necesita pozos de profundidad ~λ/2 ≈ 17 cm |
    | Señales periódicas y aperiódicas | El espectro (FFT) descompone cualquier señal en suma de senoidales puras | …analizás el ruido de fondo: tono puro (ventilador a 120 Hz) vs. banda ancha (tránsito) requieren soluciones DISTINTAS |
    | Decibeles: escala logarítmica | dB SPL = 20·log(p/p₀). El doble de presión → +6 dB. El doble de percepción subjetiva → +10 dB | …definís objetivos de aislamiento: bajar de 70 dBA a 25 dBA es una reducción de 45 dB → la energía debe reducirse 10^(45/10) ≈ 31,600× |
    | Suma logarítmica: L_total = 10·log(Σ10^(L_i/10)) | Dos fuentes de 60 dB NO suman 120 dB — suman 63 dB. La fuente MÁS FUERTE domina | …construís un presupuesto de ruido: atacás la fuente más fuerte PRIMERO porque es la que más contribuye al total |
    | Fuentes sonoras: monopolos, dipolos, pistones | La directividad (Q) concentra la energía en ciertas direcciones. Q = 1 (omnidireccional), 2 (hemiesférico, sobre plano), 4 (¼ de esfera) | …ubicás monitores y subwoofers: un subwoofer en una esquina tiene Q ≈ 8 (+9 dB vs. espacio libre) — aprovechás la ganancia de contorno O la evitás si genera modos excesivos |

    ### U2 — Propagación exterior (Sesiones 9–15)

    | Concepto | Definición operativa | Se aplica en diseño cuando… |
    |---|---|---|
    | Campo libre: ley del inverso del cuadrado | SPL cae 6 dB al duplicar la distancia. Solo válido sin reflexiones | …estimás el nivel que llega de una fuente externa (tránsito) a la fachada y cuánto necesitás atenuar con la envolvente |
    | Absorción atmosférica | Atenuación adicional en altas frecuencias a grandes distancias (dB/100 m) | …es IRRELEVANTE en interiores (< 0.1 dB a 10 m a 10 kHz). No gastes energía mental en esto para diseño de salas |
    | Reflexión, difracción, refracción | La reflexión sigue ley de Snell (θ_i = θ_r). La difracción permite que el sonido «rodee» obstáculos | …diseñás baffles y nubes reflectoras para dirigir reflexiones tempranas lejos del punto de escucha. Entendés por qué una barrera acústica (muro anti-ruido) nunca bloquea 100% — la difracción en el borde superior siempre deja pasar energía |
    | Diagramas de rayo (ray tracing) | Modelo geométrico: el sonido «rebota» como rayos de luz en superficies especulares | …trazás las reflexiones de PRIMER orden en una sala de control: del monitor a la pared lateral, de la pared lateral al oído. Si ese camino es < 10 ms más largo que el directo, genera coloración por filtro peine |
    | Efecto Doppler | Cambio de frecuencia percibida por movimiento relativo fuente-observador | …es IRRELEVANTE en diseño de salas (las fuentes no se mueven significativamente). No lo incluyas en tu análisis salvo que diseñes sistemas de audio para vehículos |

    ### U3 — Acústica de interiores (Sesiones 17–26)

    | Concepto | Definición operativa | Se aplica en diseño cuando… |
    |---|---|---|
    | Campo difuso: energía uniforme en todas direcciones | Condición ideal donde la densidad de energía es constante en todo el volumen. Se aproxima cuando hay muchas reflexiones en múltiples direcciones | …aplicás Sabine para RT60: la fórmula ASUME campo difuso. Si tu sala es muy absorbente en una dirección (ej. techo tratado, piso reflectante), el campo NO es difuso → Sabine sobrestima RT60 |
    | RT60 = 0.161·V/A (Sabine) | El tiempo de reverberación depende SOLO del volumen y la absorción total. NO depende de la forma, la posición de la fuente ni la posición del oyente | …definís el RT60 OBJETIVO según el uso: grabación voz 0.2–0.4 s, mezcla 0.2–0.4 s, ensayo orquesta 1.5–2.0 s, sala de concierto 1.8–2.2 s. Cada uso tiene su RT60 óptimo — un valor «universal» NO existe |
    | Reflexiones tempranas (< 50 ms) | Las primeras reflexiones (primer orden, segundo orden) que llegan ANTES de que el campo difuso se establezca | …aplicás el criterio LEDE/RFZ: en una sala de control, las reflexiones dentro de los primeros 15-20 ms deben atenuarse ≥10 dB respecto al sonido directo. Esto se logra con absorción en las superficies que generan reflexiones de primer orden (paredes laterales, techo, piso entre monitores y oyente). La pared TRASERA puede ser difusora (para devolver energía sin coloración) |
    | Modos propios (room modes): axiales, tangenciales, oblicuos | Frecuencias de resonancia donde las ondas estacionarias se establecen entre superficies paralelas. f_{n_x,n_y,n_z} = (c/2)·√[(n_x/L_x)² + (n_y/L_y)² + (n_z/L_z)²] | …elegís DIMENSIONES de sala que eviten coincidencia de modos (relaciones recomendadas: 1:1.4:1.9 de Bolt, 1:1.26:1.59 de Sepmeyer, 1:1.28:1.54 de Louden). Calculás TODOS los modos hasta 200 Hz. Si hay «huecos» (bandas sin modos → falta de soporte en graves) o «apilamientos» (varios modos en la misma frecuencia → pico de 10-15 dB), la sala tendrá respuesta de graves desigual |
    | Trampas de graves: porosa (velocidad), membrana (presión), Helmholtz (resonador) | La absorción en graves (< 200 Hz) requiere estrategias DISTINTAS a la absorción en medios/agudos porque las velocidades de partícula y presión se distribuyen DISTINTO en modos | …ubicás trampas de graves en ESQUINAS y PAREDES (máxima presión para membrana/Helmholtz, máxima velocidad a ¼ de λ de la pared para porosa). NO uses espuma de 5 cm para absorber 60 Hz — necesitás al menos ¼ de λ de espesor (≈1.4 m para 60 Hz) si es porosa, o un resonador sintonizado |
    | Difusores: QRD, PRD, MLS | Dispersan la energía en múltiples direcciones SIN absorberla, manteniendo la «viveza» de la sala pero eliminando reflexiones especulares fuertes | …aplicás difusores en la pared TRASERA de una sala de control (LEDE) o en paredes laterales de una sala de escucha. La distancia mínima de escucha al difusor debe ser ≥ 3× la longitud de onda de la frecuencia de diseño más baja para que el campo difuso se establezca antes de llegar al oyente |

    ### U4 — Aislamiento y diseño (Sesiones 27–31)

    | Concepto | Definición operativa | Se aplica en diseño cuando… |
    |---|---|---|
    | Ruido de fondo: NC/NR/RC, SNR | El «piso» acústico determina el rango dinámico útil. NC objetivo según uso: grabación 15-20, mezcla 20-25, ensayo 25-30 | …definís el ESTÁNDAR de la sala ANTES de diseñar nada. Si tu ruido de fondo actual es NC-38 y necesitás NC-20, la brecha de 18 dB define la magnitud de las intervenciones necesarias |
    | TL y ley de masa: TL = 20·log(m_s·f) − 47 | Aislamiento de particiones simples. +6 dB al duplicar masa o frecuencia. STC: número único (ASTM E413) | …seleccionás materiales de cerramiento: yeso 12.5 mm (TL ≈ 29 dB a 500 Hz), ladrillo hueco 120 mm (TL ≈ 47 dB), hormigón 100 mm (TL ≈ 49 dB). Calculás el STC compuesto de pared + puerta + ventana con la fórmula de transmisión τ |
    | Estructuras compuestas: MAM, f₀ | Pared doble: dos hojas de masa desacopladas por cámara de aire. TL crece a 12 dB/octava por encima de f₀ (vs. 6 dB simple) | …diseñás la pared divisoria del estudio: dos hojas de yeso 2×15 mm, cámara 150 mm con lana mineral, estructura independiente con canal elástico. f₀ ≈ 60 Hz → desde 85 Hz (√2·f₀), el desacoplamiento da ventaja sobre pared simple |
    | Flanqueo y puentes acústicos | Caminos alternativos de transmisión que rodean la barrera principal. Puente acústico: conexión rígida entre hojas de una pared doble | …revisás CADA elemento constructivo: ¿las tomas eléctricas están en la misma caja a ambos lados de la pared? ¿la pared llega hasta la losa o se detiene en el cielo falso? ¿las cañerías y ductos tienen juntas flexibles? Un solo puente acústico puede reducir STC 55 → 42 |
    | HVAC silencioso: modelo fuente-trayectoria-receptor | El sistema de climatización es la fuente de ruido CONTINUO #1. Velocidad de aire < 2.5 m/s en ramales. Silenciadores en impulsión y retorno | …dimensionás conductos SOBREDIMENSIONADOS. Caudal = V × A → el doble de sección = mitad de velocidad = 15-18 dB menos ruido de flujo. Las rejillas de difusión deben ser de gran área con velocidad de salida < 1.5 m/s |
    | Aislamiento de vibraciones: f_n = 15.8/√δ, η = 1/\|(f/f_n)² − 1\| | Desacoplamiento mecánico de equipos de la estructura. f_n < f_excitación/3 para η < 0.1 | …seleccionás aisladores para el compresor del AC, el ventilador, las bombas: neopreno (f_n ≈ 10-16 Hz) para equipos livianos y altas RPM, resortes (f_n ≈ 2-5 Hz) para equipos pesados y bajas RPM. NO olvidar juntas flexibles en cañerías y ductos |
    | Geometría y simetría | La simetría izquierda-derecha es CRÍTICA para imagen estéreo. Paredes NO paralelas reducen flutter echo y modos axiales puros | …diseñás la planta de la sala de control: el triángulo monitor izquierdo – monitor derecho – oyente debe ser SIMÉTRICO respecto al eje central. La pared trasera puede ser asimétrica/difusora. Ángulos ≥ 5° de separación entre paredes opuestas «desintonizan» modos axiales |

    > Insertar **diagrama sinóptico U1→U4**: mapa visual conceptual con cuatro columnas (Fundamentos → Exterior → Interiores → Aislamiento y Diseño). Cada concepto clave conectado con flechas mostrando las dependencias: «sin decibeles no hay STC», «sin RT60 no hay criterio de tratamiento», «sin NC no hay objetivo de HVAC», «sin modos no hay colocación de trampas». El mapa debe mostrar que el DISEÑO FINAL integra TODOS los conceptos previos — no se puede diseñar una sala ignorando ninguna de las cuatro unidades.

---

???+ note "La lista de verificación del diseñador acústico"

    Cuando abordás el diseño de un espacio acústico (estudio de grabación, sala de control, sala de ensayo, sala de concierto), el orden IMPORTA. Seguí esta secuencia. Cada decisión en un paso condiciona los pasos siguientes. Saltarse pasos = rediseño costoso.

    ### Paso 1: Definir el USO y el ESTÁNDAR

    | Pregunta | Ejemplo — Estudio de grabación casero | Ejemplo — Sala de control profesional | Ejemplo — Sala de ensayo |
    |---|---|---|---|
    | ¿Qué se va a hacer? | Grabar voces, guitarra acústica, mezclar con monitores | Mezcla estéreo y surround, escucha crítica, mastering | Ensayar banda completa (batería, bajo, 2 guitarras, voz) |
    | ¿RT60 objetivo? | 0.2–0.3 s | 0.2–0.3 s (±0.05 s de 100 Hz a 10 kHz) | 0.5–0.8 s |
    | ¿NC objetivo? | NC-20 (≈25 dBA) | NC-15 (≈20 dBA) | NC-25 (≈30 dBA) |
    | ¿STC mínimo con el exterior? | STC 45 (vecinos no escuchen) | STC 55 (aislamiento del edificio) | STC 60 (batería a 115 dBA vs. exterior) |
    | ¿Volumen mínimo? | > 42 m³ (ITU-R BS.1116 para escucha crítica) | > 60 m³ (rango de graves uniforme) | > 80 m³ (batería necesita espacio para desarrollarse) |

    ### Paso 2: Seleccionar VOLUMEN y PROPORCIONES

    El volumen y las proporciones (L_x : L_y : L_z) determinan la distribución de modos propios y el RT60 alcanzable.

    1. Volumen mínimo = definido por el uso (ver tabla arriba). Más volumen = modos más densos en graves = respuesta más uniforme.
    2. Proporciones: ninguna dimensión debe ser múltiplo entero de otra (evitar 1:2, 1:3, 2:3). Relaciones recomendadas:
       - **Bolt**: 1 : 1.4 : 1.9 (mayor área de modos uniformemente distribuidos)
       - **Sepmeyer I**: 1 : 1.14 : 1.39
       - **Sepmeyer II**: 1 : 1.26 : 1.59 (la más popular)
       - **Louden**: 1 : 1.28 : 1.54 (mejor para salas pequeñas, < 100 m³)
       - **Bonello**: 1 : 1.30 : 1.90
       - **Regla general**: dimensiones que difieran al menos 5% entre sí y no sean múltiplos.
    3. Verificar modos hasta 200 Hz: calcular con la fórmula modal y graficar. Identificar «apilamientos» (> 2 modos en la misma banda de tercio de octava) y «huecos» (bandas sin modos). Si hay problemas graves, ajustar proporciones.

    ### Paso 3: Definir la GEOMETRÍA

    | Principio | Por qué | Cómo se implementa |
    |---|---|---|
    | **Simetría izquierda-derecha** | La imagen estéreo depende de que las reflexiones de la pared IZQUIERDA y DERECHA lleguen con IGUAL intensidad y tiempo al oyente | Diseñar la sala con un EJE DE SIMETRÍA central. Los monitores, la posición de escucha, las paredes laterales y el tratamiento deben ser SIMÉTRICOS respecto a ese eje |
    | **Paredes NO paralelas** | Paredes paralelas generan flutter echo (eco repetitivo entre dos superficies) y modos axiales puros | Splay (inclinación) de al menos 5° (ideal 8-12°) en una o ambas paredes laterales. Techo inclinado (más alto atrás que adelante para dirigir reflexiones hacia difusores traseros) |
    | **Línea de visión** | El oyente debe «ver» el sonido directo de ambos monitores sin obstrucciones. Las reflexiones de PRIMER orden NO deben llegar al oyente | El triángulo equilátero monitor I – monitor D – oyente (o ITU-R BS.775: monitores a ±30° del eje central). Las reflexiones de primer orden de paredes laterales, techo y piso deben ser DESVIADAS o ABSORBIDAS antes de llegar al oyente |

    ### Paso 4: Diseñar el TRATAMIENTO ACÚSTICO

    | Elemento | ¿Qué se usa? | ¿Dónde? | ¿Cuánto? |
    |---|---|---|---|
    | **Absorción en medios/agudos** | Paneles de lana mineral (50-100 mm, 40-80 kg/m³), espuma acústica (solo si no hay alternativa — la lana mineral es superior) | Paredes laterales (puntos de PRIMERA reflexión), techo (nube sobre la posición de escucha), pared trasera (si no es difusora) | El área de absorción debe dar el RT60 objetivo. Calcular con Sabine: A_necesaria = 0.161·V / RT60_objetivo |
    | **Trampas de graves (bass traps)** | Esquinas: trampas porosas de gran espesor (≥ 20 cm) en esquinas (donde la velocidad de partícula es máxima para modos axiales). Paredes: resonadores de membrana o Helmholtz sintonizados a modos problemáticos específicos | Las 4 esquinas verticales (tri-corner donde se unen 2 paredes + techo/piso), esquinas horizontales (pared-techo, pared-piso), pared trasera (trampas de membrana de gran superficie) | Deben cubrir al menos el 15-20% de la superficie total de la sala para tener efecto significativo en graves |
    | **Difusores** | QRD (Quadratic Residue Diffuser) para difusión de banda ancha, PRD (Primitive Root) para difusión 2D, Skyline para look estético y difusión hemisférica | Pared trasera (detrás del oyente en sala de control LEDE), techo (entre el oyente y la pared trasera), paredes laterales traseras | Distancia mínima oyente-difusor ≥ 3·λ de la frecuencia más baja de diseño del difusor. Si f_diseño = 500 Hz → λ = 0.69 m → d_mín ≥ 2.1 m |

    ### Paso 5: Diseñar el SISTEMA DE AISLAMIENTO

    | Decisión | Opciones | Criterio de selección |
    |---|---|---|
    | **Tipo de cerramiento** | Pared simple (yeso, ladrillo, hormigón) vs. Pared doble (MAM con cámara) vs. Caja flotante (room-within-a-room) | Si STC necesario < 40: pared simple con masa suficiente. Si STC 40-55: pared doble con estructura independiente. Si STC > 55 o el recinto está dentro de otro edificio: caja flotante (losa flotante + paredes dobles + techo desacoplado) |
    | **Material de las hojas** | Yeso (9-12 kg/m² por placa), OSB/MDF (10-15 kg/m²), concreto (150-2400 kg/m²) | Relación TL/peso. Yeso doble placa (24 kg/m²) con cámara de 150 mm + lana mineral → STC ≈ 50-55 con solo ~50 kg/m² total. Concreto de 100 mm (240 kg/m²) → STC ≈ 45 como pared simple. La pared doble de yeso aísla MEJOR con 5× menos peso |
    | **Puertas y ventanas** | Puerta acústica maciza (STC 35-45), doble puerta con vestíbulo (STC > 55). Ventana con doble vidrio laminado de distinto espesor (6 mm + 10 mm), cámara ≥ 100 mm | NUNCA poner una puerta hueca (STC 20-25) en un estudio. La puerta es el eslabón más débil — si la pared tiene STC 55 y la puerta STC 25 con 10% del área → STC compuesto ≈ 32. La inversión en la puerta es la de MAYOR retorno |
    | **HVAC** | Split silencioso (unidad exterior lejos), sistema central con conductos sobredimensionados, ventilación natural con baffles acústicos | Velocidad de aire < 2.5 m/s en ramales. Silenciadores en conductos. Rejillas de gran área. La unidad condensadora con aisladores de vibración y lejos (> 5 m) de paredes sensibles |

    ### Paso 6: Verificar la INTEGRACIÓN

    Antes de construir, verificá que TODAS las decisiones de los pasos 1-5 sean COMPATIBLES entre sí:

    - ¿El RT60 objetivo del Paso 1 es alcanzable con el volumen del Paso 2 y la absorción planeada en el Paso 4? Verificar: A_necesaria = 0.161·V/RT60. Si necesitás 50 m² de absorción pero solo tenés 30 m² de superficie disponible para tratar → el RT60 será MAYOR que el objetivo → necesitás más volumen o resignarte a un RT60 más alto.
    - ¿El STC objetivo del Paso 1 es alcanzable con el cerramiento del Paso 5 CONSIDERANDO el STC compuesto (pared + puerta + ventana + penetraciones)? Calcular: τ_compuesto = (S_pared·τ_pared + S_puerta·τ_puerta + S_ventana·τ_ventana) / S_total.
    - ¿El NC objetivo es alcanzable con el sistema HVAC diseñado? Si el fabricante del equipo dice L_w = 55 dB a 500 Hz y tu silenciador atenúa 15 dB, el nivel en la sala será ~40 dB (sin considerar pérdidas por distancia y absorción) → NC ≈ 30-35 — ACEPTABLE para ensayo pero INACEPTABLE para grabación. Necesitás mejor equipo o más atenuación.
    - ¿Los difusores del Paso 4 están a la distancia MÍNIMA del oyente? En una sala pequeña (< 30 m³), la pared trasera puede estar a solo 1.5 m del oyente → un QRD diseñado para 400 Hz necesita d_mín ≈ 2.6 m → NO SE PUEDE. Usá absorción en pared trasera en vez de difusión para salas pequeñas.
    - ¿Las trampas de graves están en las POSICIONES CORRECTAS? Las esquinas tri-corner son las más efectivas (3 superficies convergen → presión máxima para los 3 modos axiales). Una trampa en el centro de una pared es 4-8× menos efectiva que en una esquina tri-corner para la MISMA superficie de material.

    > Insertar **checklist visual de diseño acústico completo**: un diagrama de flujo con los 6 pasos descritos. Incluir en cada paso los «puntos de verificación» (checkpoints) donde el diseñador debe detenerse y validar que las decisiones son compatibles con los pasos anteriores. Señalar con un símbolo de advertencia los errores más comunes: «¿Calculaste el STC compuesto?», «¿Verificaste la distancia mínima del difusor?», «¿Las trampas están en esquinas?», «¿Las rejillas de HVAC tienen velocidad < 2.5 m/s?».

---

???+ note "Casos de diseño — Cuatro espacios, cuatro estrategias"

    ### Caso A: Estudio de grabación casero (Home Studio)

    | Parámetro | Valor típico | Desafío principal |
    |---|---|---|
    | **Dimensiones** | 3.5 × 2.8 × 2.5 m (24.5 m³) | VOLUMEN MUY PEQUEÑO. Los modos están muy espaciados → respuesta de graves muy desigual. RT60 naturalmente bajo (0.1-0.3 s) — el problema NO es agregar absorción, es NO QUITAR DEMASIADA |
    | **Uso** | Grabar voces, guitarra acústica, mezclar con monitores nearfield | La posición de escucha está MUY cerca de las paredes → las reflexiones tempranas llegan con muy poco retardo → filtro peine severo si no se tratan |
    | **Tratamiento** | Puntos de primera reflexión (paredes laterales + techo) con absorción 50 mm. Esquinas con trampas de graves de al menos 30 cm de lado. Pared trasera con difusor (si la distancia ≥ 1.5 m) o absorción + difusor híbrido | En un volumen tan chico, la absorción «se come» los agudos muy rápido (RT60 a 8 kHz puede ser 0.05 s). Sobretratar → sala «muerta» y fatigante. El balance espectral del RT60 (plano de 100 Hz a 10 kHz) es MÁS importante que el valor absoluto |
    | **Aislamiento** | Pared doble de yeso con estructura independiente si hay vecinos. Ventana a la calle: doble vidrio. Puerta: maciza con burletes | El volumen chico hace que el tratamiento INTERNO (absorción, trampas) compita por ESPACIO con el aislamiento (paredes gruesas, cámara de aire). Diseñar para AFUERA HACIA ADENTRO: primero la envolvente aislante (ocupa espacio), después el tratamiento (ocupa el espacio INTERIOR remanente) |

    ### Caso B: Sala de control profesional

    | Parámetro | Valor típico | Desafío principal |
    |---|---|---|
    | **Dimensiones** | 6.5 × 4.8 × 3.2 m (100 m³). Proporción Sepmeyer II: 1 : 1.26 : 1.59 | Conseguir un RT60 PLANO (±0.05 s) de 100 Hz a 10 kHz. Esto requiere TRATAMIENTO SELECTIVO: más absorción en graves (que naturalmente tienen RT60 más largo) y menos en agudos |
    | **Uso** | Mezcla estéreo y surround, mastering, escucha crítica | La sala NO debe «sonar» — debe ser NEUTRA. El ingeniero debe escuchar la GRABACIÓN, no la sala. Cualquier coloración (pico de +3 dB a 200 Hz, RT60 más largo en graves) se traduce en decisiones de mezcla incorrectas |
    | **Tratamiento** | **Frente**: absorción detrás de los monitores (empotrados en baffle rígido — soffit mounting). **Paredes laterales**: absorción en zona de PRIMERA reflexión (entre monitores y oyente). **Techo**: nube absorbente sobre consola. **Pared trasera**: difusores QRD o PRD de banda ancha (f_diseño 400-500 Hz). **Esquinas**: trampas de graves (membrana o Helmholtz sintonizadas) | El concepto LEDE (Live-End Dead-End): la mitad DELANTERA de la sala (desde los monitores hasta el oyente) es acústicamente MUERTA (absorción, sin reflexiones tempranas < 20 ms). La mitad TRASERA es VIVA (difusores que devuelven energía SIN coloración, creando una sensación de amplitud sin dañar la imagen estéreo) |
    | **Aislamiento** | Caja flotante (room-within-a-room): losa flotante sobre lana de roca, paredes dobles con estructura independiente, techo desacoplado. STC ≥ 60. HVAC con conductos sobredimensionados y silenciadores | La caja flotante es CARA (20-50% del costo total) y OCUPA ESPACIO (40-50 cm de espesor en paredes, 30-40 cm en piso y techo). En 100 m³, la caja flotante «roba» 15-20 m³ → hay que partir de dimensiones exteriores MAYORES para lograr el volumen interior objetivo |

    ### Caso C: Sala de ensayo

    | Parámetro | Valor típico | Desafío principal |
    |---|---|---|
    | **Dimensiones** | 7 × 5 × 3.5 m (122 m³) | NIVELES ALTÍSIMOS (batería: 110-115 dBA, amplificador de guitarra: 105-115 dBA). El aislamiento debe ser EXCEPCIONAL (STC ≥ 60) si hay espacios sensibles adyacentes |
    | **Uso** | Ensayar banda completa: batería, bajo, 2 guitarras, voz, teclados | Los músicos necesitan ESCUCHARSE entre sí. RT60 demasiado bajo (< 0.3 s) → los instrumentos suenan «secos» y desconectados, los músicos tocan MÁS FUERTE para compensar → más SPL → más fatiga + riesgo auditivo. RT60 demasiado alto (> 1.0 s) → todo se vuelve un barullo indistinguible |
    | **Tratamiento** | RT60 objetivo: 0.5-0.8 s (vivo pero controlado). Absorción en techo (para controlar altura). Esquinas con trampas de graves (la batería y el bajo excitan fuertemente los modos). Paredes con alternancia de paneles absorbentes y difusores (para mantener viveza sin flutter echo). Piso reflectante (madera o concreto — NO alfombra, mata los agudos) | El tratamiento debe ser RESISTENTE a impactos (los músicos golpean cosas, las baquetas vuelan). Usar paneles con protección (tela gruesa, rejilla metálica). Las trampas de esquina deben ser robustas |
    | **Aislamiento** | Caja flotante COMPLETA si está en edificio con otros usos. Pared doble con estructura independiente si es un local aislado. Puerta doble con vestíbulo acústico. Ventana doble entre sala de ensayo y control (si la hay) | El punto crítico: la PUERTA. Una puerta de STC 25 en una pared de STC 60 → STC compuesto ≈ 30. La puerta DEBE ser acústica (maciza, burlete magnético, sello inferior automático) o DOBLE puerta con cámara. Si el presupuesto es limitado, gastá en la puerta ANTES que en mejorar la pared |

    ### Caso D: Sala de concierto / Auditorio

    | Parámetro | Valor típico | Desafío principal |
    |---|---|---|
    | **Dimensiones** | Variables. Volumen por asiento: 8-12 m³ (música de cámara), 10-14 m³ (orquesta sinfónica) | El sonido DEBE llegar a CADA butaca con claridad, nivel suficiente y sin ecos. No hay «posición dulce» (sweet spot) única — hay 500-2000 posiciones de escucha, y TODAS importan |
    | **Uso** | Conciertos de música acústica (sin refuerzo sonoro), ópera, conferencias | Cada uso tiene requerimientos DISTINTOS. Una sala diseñada para palabra hablada (teatro, conferencia) necesita RT60 ≈ 0.8-1.2 s y MUCHA claridad (C80 alto). Una sala para orquesta sinfónica (Brahms, Mahler) necesita RT60 ≈ 1.8-2.2 s y CALIDEZ (bass ratio alto). NO EXISTE una sala que sea óptima para TODOS los usos |
    | **Parámetros de diseño** | **RT60**: 1.5-2.2 s (orquesta), 0.8-1.5 s (palabra/ópera). **C80 (claridad)**: > 0 dB (palabra), −2 a +2 dB (música). **Bass Ratio (calidez)**: BR = RT_125-250 / RT_500-1000. BR > 1.1 = sala «cálida» (buena para música romántica). **ITDG (Initial Time Delay Gap)**: < 20-30 ms para sensación de intimidad | Estos parámetros están INTERRELACIONADOS. No podés maximizar claridad (C80 alto) y calidez (BR alto) SIMULTÁNEAMENTE — son trade-offs. El diseño de salas de concierto es el problema MÁS COMPLEJO de la acústica arquitectónica |
    | **Geometría** | Formas clásicas: shoe-box (Viena Musikverein, Boston Symphony Hall — excelente acústica, proporción ≈ 1:1:2), fan-shaped (abanico — buena visibilidad pero acústica potencialmente pobre), vineyard (viñedo — terrazas escalonadas, Berlin Philharmonie). Elementos: reflectores suspendidos (canopy) sobre el escenario para dirigir sonido a la audiencia, nubes reflectoras, difusores integrados en paredes laterales | El shoe-box rectangular es la forma acústicamente MÁS EXITOSA (las 3 mejores salas del mundo son shoe-box) porque las reflexiones laterales LLEGAN FUERTES al oyente (crean sensación de envolvimiento). Pero tiene limitaciones de visibilidad y capacidad. Las formas modernas (vineyard) sacrifican algo de calidad acústica por flexibilidad y capacidad |

    > Insertar **Fig. 18-2** del Everest: planta y sección de una sala de escucha (listening room) con dimensiones, posición de parlantes, posición de escucha, y ubicación sugerida de tratamiento (absorción en primeras reflexiones, difusores en pared trasera). Señalar el triángulo estéreo y el eje de simetría.

    > Insertar **Fig. 19-3** del Everest: planta de un estudio de grabación + sala de control. Mostrar: la sala de control con geometría LEDE (dead end delantero, live end trasero), la sala de grabación con tratamiento variable (paneles móviles que permiten ajustar RT60), la ventana doble entre control y sala, y las puertas acústicas dobles con vestíbulo.

    > Insertar **Fig. 22-1** del Everest: sección y planta de una sala de concierto (concert hall). Mostrar: el escenario con canopy reflector, las paredes laterales con difusores integrados, el cielorraso con nubes reflectoras para dirigir sonido al balcón, las butacas con absorción calibrada (una butaca vacía vs. ocupada NO debe cambiar drásticamente el RT60), y el foso de orquesta.

---

## Mapa conceptual para estudio del examen

El examen final integra las 31 sesiones. No se trata de memorizar fórmulas — se trata de entender los CONCEPTOS y saber CUÁNDO aplicar CADA uno. Este mapa está organizado por «situación de diseño» → «conceptos relevantes» → «fórmulas/herramientas».

| Situación de diseño | Conceptos que necesitás | Fórmulas / Herramientas |
|---|---|---|
| **«Quiero saber si mi sala sirve para grabar»** | Ruido de fondo, curvas NC/RC, SNR | Medición con sonómetro (Leq, L₁₀, L₉₀ por banda de octava). Comparación con NC objetivo para grabación (NC 15-20). SNR = L_señal − L_ruido. SNR ≥ 30 dB para grabación profesional |
| **«Necesito aislar mi estudio del vecino»** | TL, ley de masa, STC, NR, MAM, flanqueo | TL = 20·log(m_s·f) − 47. NR = TL + 10·log(A/S). STC compuesto (ASTM E413). f₀ MAM. Regla del eslabón más débil: τ_compuesto = Σ(S_i·τ_i)/S_total |
| **«El bajo suena distinto en cada rincón de la sala»** | Modos propios, ondas estacionarias, presión vs. velocidad, trampas de graves | f_modos = (c/2)·√[(n_x/L_x)² + (n_y/L_y)² + (n_z/L_z)²]. f_n membrana = (c/2π)·√(ρ/(m·d)). f_n Helmholtz = (c/2π)·√(S/(V·L)). Ubicación: esquinas (presión máx) o ¼ λ de pared (velocidad máx) |
| **«Quiero saber cuánta absorción poner»** | RT60, Sabine, coeficiente de absorción α, NRC, RT60 óptimo según uso | RT60 = 0.161·V/A. A = Σ(α_i·S_i). A_necesaria = 0.161·V/RT60_objetivo. α promedio = A_necesaria / S_total. Si α > 0.4 → Sabine sobrestima, usar Eyring o Millington |
| **«La mezcla suena bien en mi estudio pero mal en todos lados»** | Respuesta en frecuencia de la sala, filtro peine (reflexiones tempranas), modos, RT60 no plano | Medir respuesta en frecuencia con REW (barrido senoidal). Identificar picos (modos, reflexiones constructivas) y valles (filtro peine, modos). Tratamiento: absorción en primeras reflexiones (elimina filtro peine), trampas en picos modales (reduce picos), difusión en pared trasera (mantiene energía sin ecos) |
| **«El aire acondicionado arruina las tomas»** | HVAC fuente-trayectoria-receptor, velocidad de aire, ruido de flujo ∝ V⁵ | Medir NC con HVAC encendido. Velocidad < 2.5 m/s en ramales. Silenciadores. Rejillas de gran área. Si NC > objetivo: (a) bajar velocidad del ventilador, (b) agrandar rejillas, (c) agregar silenciadores, (d) reemplazar equipo |
| **«La pared que construí no aísla lo que esperaba»** | Puentes acústicos, flanqueo, STC compuesto, juntas y sellos | Revisar: ¿las tomas eléctricas comparten caja? ¿la pared llega a la losa o se detiene en el cielo falso? ¿los montantes son compartidos? ¿hay canal elástico? ¿todas las juntas tienen sellador acústico? ¿la puerta tiene burletes? ¿el piso es flotante? |

---

## Preparación para el examen final

El examen final evalúa tu capacidad de INTEGRAR los conceptos de las 31 sesiones para resolver PROBLEMAS DE DISEÑO ACÚSTICO REALES. El formato típico incluye:

1. **Análisis de un caso**: se te presenta un espacio real (dimensiones, materiales, uso previsto, fuentes de ruido) y debés diagnosticar sus problemas acústicos usando los conceptos de las 4 unidades.
2. **Cálculos de diseño**: calcular RT60, STC, NR, modos propios, f₀ de una pared doble, o transmisibilidad de un aislador para un escenario dado.
3. **Propuesta de soluciones**: para cada problema diagnosticado, proponer una solución CONCRETA con parámetros cuantitativos (no «poner trampas de graves» sino «trampa de membrana sintonizada a 72 Hz, de 1.2 × 0.6 m, en la esquina pared-piso trasera»).
4. **Justificación**: explicar POR QUÉ cada solución funciona, citando el principio físico y mostrando el cálculo que la respalda.

### Estrategia de estudio recomendada

- **No memorices fórmulas — entendé qué significan**: saber de memoria TL = 20·log(m_s·f) − 47 no sirve si no sabés que TL CRECE con la masa y la frecuencia, y que duplicar la masa suma 6 dB. El examen pregunta «¿cuánto mejora el aislamiento si duplico la masa de la pared?», no «escribí la fórmula de la ley de masa».
- **Practicá con tus PROPIOS espacios**: medí el ruido de fondo de tu habitación, calculá sus modos, estimá el RT60. Los números abstractos se vuelven reales cuando los aplicás a algo que conocés.
- **Hacé los cálculos A MANO al menos una vez**: usá la calculadora, no una planilla. Entender el orden de magnitud (¿esto da 30 dB o 300 dB?) es la habilidad más importante.
- **Conectá conceptos entre unidades**: el ruido de fondo (U4) limita el rango dinámico que estableciste con decibeles (U1). Los modos (U3) dependen de las dimensiones que relacionaste con λ (U1). El RT60 (U3) determina cuánto tratamiento necesitás, lo cual interactúa con el aislamiento (U4) porque el grosor de las paredes dobles roba volumen interno.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 18, pp. 348–361 (Listening Rooms — Room Proportions, Symmetry, Loudspeaker Placement, Room Treatment); Capítulo 19, pp. 362–378 (Recording Studios — Room-within-Room Construction, Floating Floors, Studio-Control Room Window, Variable Acoustics); Capítulo 20, pp. 379–392 (Control Rooms — LEDE/RFZ Design, Reflection-Free Zone, Diffuser Placement); Capítulo 21, pp. 393–405 (Audio-Visual Spaces — Large Room Acoustics); Capítulo 22, pp. 406–420 (Concert Halls — Shoe-Box Geometry, RT60 Targets, C80 and Bass Ratio, Canopy Design). Cox, T. J. & D'Antonio, P. (2016). Acoustic Absorbers and Diffusers (3rd ed.). CRC Press. ITU-R BS.1116-1 (Methods for Subjective Assessment of Small Impairments in Audio Systems). ITU-R BS.775-1 (Multichannel Stereophonic Sound System).*

---

## Lista de verificación final para el diseñador acústico

Antes de dar por terminado el diseño de un espacio acústico, verificá CADA punto de esta lista. Si alguno falla, volvé al paso correspondiente.

- [ ] ¿Definí el USO del espacio y los OBJETIVOS cuantitativos (RT60, NC, STC, volumen mínimo)?
- [ ] ¿Verifiqué que el volumen y las proporciones (L_x:L_y:L_z) minimizan apilamientos y huecos modales hasta 200 Hz?
- [ ] ¿La geometría es SIMÉTRICA izquierda-derecha en el plano del oyente? ¿Las paredes NO son paralelas (splay ≥ 5°)?
- [ ] ¿Calculé el área de absorción necesaria (A = 0.161·V/RT60) y verifiqué que hay SUPERFICIE DISPONIBLE suficiente?
- [ ] ¿Ubiqué absorción en los puntos de PRIMERA REFLEXIÓN (paredes laterales, techo, piso entre monitores y oyente)?
- [ ] ¿Ubiqué trampas de graves en las 4 ESQUINAS VERTICALES (tri-corner) y esquinas horizontales?
- [ ] ¿Los difusores están a la DISTANCIA MÍNIMA del oyente (≥ 3·λ)?
- [ ] ¿Calculé el STC COMPUESTO de la envolvente (pared + puerta + ventana + penetraciones)?
- [ ] ¿La puerta tiene burletes perimetrales, sello inferior y marco macizo?
- [ ] ¿Las ventanas tienen doble vidrio de DISTINTO espesor con cámara ≥ 100 mm?
- [ ] ¿TODAS las juntas entre placas de yeso, uniones con piso/techo y penetraciones están selladas con sellador acústico flexible?
- [ ] ¿El sistema HVAC tiene velocidad de aire < 2.5 m/s en ramales y < 1.5 m/s en difusores?
- [ ] ¿Los conductos del HVAC tienen silenciadores en impulsión y retorno?
- [ ] ¿Los equipos mecánicos (ventiladores, compresores, bombas) tienen aisladores de vibración con f_n < f_excitación/3?
- [ ] ¿TODAS las conexiones a equipos aislados (ductos, cañerías, cables) tienen juntas flexibles?
- [ ] ¿Verifiqué la COMPATIBILIDAD de todas las decisiones: el RT60 es alcanzable con el volumen disponible, el STC compuesto cumple el objetivo, el NC con HVAC encendido cumple el criterio?
