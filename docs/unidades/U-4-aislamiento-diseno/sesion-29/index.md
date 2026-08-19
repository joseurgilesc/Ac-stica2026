# Sesión 29: Estructuras compuestas

**📚 Sesión** | *Herramientas: Ninguna específica*

??? info "Unidades y símbolos (glosario de referencia)"

    | Símbolo | Nombre | Concepto | Rango o valor típico |
    |---|---|---|---|
    | <a id="m-s"></a>**m_s** | Masa superficial | Masa por unidad de área de una capa | kg/m² |
    | <a id="f0"></a>**f₀** | Frecuencia de resonancia masa-aire-masa | Frecuencia a la que el sistema de doble hoja pierde aislamiento | Hz |
    | <a id="d"></a>**d** | Profundidad de la cavidad | Separación de aire entre las dos hojas | m |
    | <a id="tl"></a>**TL** | Transmission Loss | Pérdida por transmisión | dB |
    | <a id="stc"></a>**STC** | Sound Transmission Class | Índice único de aislamiento a ruido aéreo | dB (número entero) |
    | <a id="iic"></a>**IIC** | Impact Insulation Class | Índice único de aislamiento a ruido de impacto | dB |
    | <a id="rho0"></a>**ρ₀** | Densidad del aire | Densidad del aire a 20 °C | ≈ 1.2 kg/m³ |

???+ note "¿Por qué una sola hoja no alcanza? Las estructuras compuestas"

    La **ley de la masa** (sesión anterior) nos dice que para ganar aislamiento hay que agregar MASA. El problema: duplicar la masa solo da **+6 dB**, y el aislamiento en bajas frecuencias exige masas enormes. Una pared de ladrillo de 200 kg/m² pesa muchísimo y es cara.

    Las **estructuras compuestas** (también llamadas **doble hoja** o **masa-aire-masa**) resuelven esto con un principio distinto: en lugar de una sola masa pesada, se usan **dos hojas más livianas separadas por una cavidad de aire**. El sistema se comporta como un oscilador **masa–resorte–masa**: las dos hojas son las masas, y el aire de la cavidad es el resorte. Por encima de cierta frecuencia (f₀), este sistema aísla MUCHO más que una pared simple de igual masa total.

    !!! tip "La intuición del resorte"
        Imaginá dos bloques conectados por un resorte blando. Si golpeás un bloque, el otro apenas se mueve: el resorte «desacopla» el movimiento. Una cavidad de aire grande (resorte blando) desacopla las dos hojas de la pared y el sonido se transmite mucho peor que en una hoja maciza.

???+ note "La frecuencia de resonancia masa-aire-masa"

    El sistema de doble hoja tiene una **frecuencia de resonancia** f₀. POR DEBAJO de f₀, las dos hojas se mueven juntas como una sola masa → la estructura NO es mejor que una pared simple (puede ser PEOR). POR ENCIMA de f₀, el desacoplamiento empieza a dar ventaja y el aislamiento crece más rápido que la ley de la masa.

    La frecuencia de resonancia se calcula:

    \[
    f_0 = \frac{1}{2\pi}\sqrt{\frac{\rho_0 c^2}{d}\left(\frac{m_1 + m_2}{m_1 m_2}\right)}
    \]

    Con ρ₀ = 1.2 kg/m³ y c = 343 m/s, la fórmula simplificada queda:

    \[
    \boxed{f_0 \approx 60\sqrt{\frac{m_1 + m_2}{m_1 \cdot m_2 \cdot d}}}
    \]

    donde m₁ y m₂ son las masas superficiales de cada hoja (kg/m²) y d es la profundidad de la cavidad (m).

    !!! warning "La trampa de f₀"
        Para que el sistema funcione, f₀ debe quedar MUY POR DEBAJO del rango de frecuencias que querés aislar. Si f₀ cae dentro del rango audible importante (ej. 80 Hz para un estudio), el sistema resonará exactamente donde NO querés. La solución: **más masa en las hojas** o **más profundidad de cavidad** para bajar f₀.

    **Ejemplo**: dos hojas de yeso de 10 kg/m² cada una, con una cavidad de 10 cm (0.1 m):

    \[
    f_0 = 60\sqrt{\frac{10 + 10}{10 \cdot 10 \cdot 0.1}} = 60\sqrt{\frac{20}{10}} = 60\sqrt{2} \approx 84.9\ \text{Hz}
    \]

    Ese f₀ ≈ 85 Hz es demasiado alto para un estudio de grabación. Si aumentamos la cavidad a 20 cm:

    \[
    f_0 = 60\sqrt{\frac{10 + 10}{10 \cdot 10 \cdot 0.2}} = 60\sqrt{\frac{20}{20}} = 60\sqrt{1} = 60\ \text{Hz}
    \]

    Sigue siendo alto. Para bajar f₀ de verdad necesitamos más masa por hoja o una cavidad mucho mayor.

???+ note "Tabiques dobles: la regla de oro del aislamiento"

    Un **tabique doble** bien diseñado es la herramienta más potente para aislamiento aéreo en estudios. Los principios para que funcione:

    | Principio | Por qué importa | Error común |
    |---|---|---|
    | **Dos hojas independientes** | El desacoplamiento es lo que da el aislamiento extra | Unir las hojas con montantes rígidos |
    | **Cavidad con material absorbente** | El material en la cavidad amortigua el resorte de aire y sube el aislamiento | Cavidad vacía y resonante |
    | **Montantes desacoplados** | Evita el puente mecánico entre hojas | Montantes comunes rígidos |
    | **Sellado hermético** | Cualquier fuga destruye el aislamiento | Dejar juntas sin sellar |
    | **Sin contacto entre hojas** | El contacto físico transmite vibración | Cableado o cañerías que tocan ambas hojas |

    !!! warning "El montante rígido es un PUENTE ACÚSTICO"
        Si las dos hojas se atornillan al MISMO montante de madera o metal, el montante transmite la vibración mecánicamente y el sistema se comporta casi como una hoja simple. La solución profesional es usar **montantes dobles** (uno para cada hoja, alternados) o **canales resilientes** que desacoplan la hoja del montante.

???+ note "Puertas y ventanas: los puntos débiles"

    En la práctica, el aislamiento de un recinto lo determinan los ELEMENTOS MÁS DÉBILES. Una pared de ladrillo de TL = 55 dB con una puerta liviana de TL = 25 dB produce un cerramiento compuesto de apenas ~30 dB.

    **Puertas** — las debilidades típicas:
    - La hoja liviana (poca masa).
    - La **separación inferior** (bajo la puerta) por donde pasa el aire libremente.
    - Los **sellos perimetrales** ausentes o mal colocados.
    - El marco mal anclado a la pared.

    Las soluciones: puerta maciza, **sello perimetral + barrido inferior automático**, y marco bien sellado con la pared.

    **Ventanas** — una ventana de vidrio simple es un agujero acústico:
    - El vidrio simple tiene poca masa y su TL es baja en graves.
    - Las juntas del marco dejan pasar aire.
    - Una ventana practicable nunca sella tan bien como una fija.

    Las soluciones: **doble vidrio con cámara de aire** (dos hojas de vidrio desacopladas), marco hermético, y masilla acústica en las juntas.

    !!! tip "La regla del eslabón más débil"
        El TL compuesto de un cerramiento NO es el promedio de sus partes. Está dominado por el elemento más débil (y por su área). Antes de gastar en mejorar la pared, sellá la puerta y la ventana: casi siempre es donde se escapa la mayor parte del sonido.

???+ note "Puentes acústicos: cuando el aislamiento se cortocircuita"

    Un **puente acústico** (o *sound bridge*) es cualquier elemento rígido que conecta físicamente dos partes que deberían estar desacopladas, transmitiendo la vibración mecánicamente.

    Ejemplos clásicos:
    - Un clavo o tornillo que atraviesa el material resiliente y toca ambas estructuras.
    - Un cable eléctrico o cañería rígida que cruza de una hoja a la otra.
    - Una hoja de tabique atornillada al montante equivocado.
    - Un tabique doble relleno con escombros que tocan ambas hojas.

    !!! warning "Un puente pequeño arruina un diseño grande"
        Un solo contacto rígido puede reducir el aislamiento de un tabique doble en 5-10 dB, porque reintroduce la transmisión mecánica que la cavidad de aire estaba evitando. En la construcción real, cada tornillo y cada junta debe revisarse: el diablo está en los detalles.

???+ note "Transmisión lateral (flanqueo): el sonido que rodea la pared"

    Aunque la pared divisoria sea perfecta, el sonido encuentra **caminos laterales**: sube por las paredes, el piso, el techo y rodea la división. Esto se llama **transmisión lateral** o **flanqueo** (lo vimos en la sesión 27).

    En edificios reales, los caminos de flanqueo pueden dominar completamente el aislamiento: una pared de TL = 60 dB entre dos habitaciones que comparten una losa continua puede terminar aislada solo ~40 dB por el sonido que viaja por la losa.

    | Camino de flanqueo | Cómo se controla |
    |---|---|---|
    | Paredes laterales continuas | Desacoplar la división de las laterales |
    | Losa de piso continua | Piso flotante o junta de desacople |
    | Cielo raso/plenum | Extender la división hasta la estructura superior |
    | Ductos compartidos | Silenciadores y tramos independientes |
    | Juntas y penetraciones | Sellado acústico perimetral |

    !!! tip "La lección práctica"
        Medir el aislamiento de una PARED en laboratorio (donde solo hay transmisión directa) no predice el comportamiento en el EDIFICIO (donde hay flanqueo). Por eso los índices de campo (como el R'w o el NIC) suelen ser menores que los índices de laboratorio (Rw). El diseño debe considerar TODOS los caminos, no solo la pared.

???+ note "Clases de transmisión: los índices STC e IIC"

    Para comparar materiales y construcciones se usan índices de UN SOLO NÚMERO:

    | Índice | Qué mide | Ruido que representa | Norma |
    |---|---|---|---|
    | **STC** | Aislamiento a ruido AÉREO | Voces, música, tráfico | ASTM E413 |
    | **IIC** | Aislamiento a ruido de IMPACTO | Pasos, caídas de objetos | ASTM E989 |

    - **STC 25**: se entienden conversaciones normales a través de la pared.
    - **STC 35**: conversación fuerte apenas audible.
    - **STC 45**: conversación fuerte inaudible, música fuerte audible.
    - **STC 55-60**: aislamiento de estudio profesional.

    !!! warning "STC no cuenta los graves"
        El STC se calcula en el rango 125 Hz – 4000 Hz y NO refleja el aislamiento en graves (< 125 Hz). Dos paredes con el MISMO STC pueden comportarse MUY distinto con un bajo o una batería. Para estudios de música, hay que mirar la curva TL completa por bandas, no solo el número STC.

???+ note "Resumen: diseño de un tabique de estudio (receta conceptual)"

    1. **Dos hojas desacopladas** — yeso + yeso, o ladrillo + yeso, separadas por una cavidad.
    2. **Cavidad ≥ 10 cm** — rellena con lana mineral (más cavidad = f₀ más baja = mejor aislamiento en graves).
    3. **Montantes dobles** — cada hoja en su propio montante, sin contacto entre ellos.
    4. **Sellado hermético** — masilla acústica en TODAS las juntas y perímetro.
    5. **Sin puentes** — ningún elemento rígido que conecte las hojas.
    6. **Puertas y ventanas tratadas** — porque son el eslabón más débil.
    7. **Revisar flanqueo** — el piso, el techo y las paredes laterales también transmiten.

    > Insertar **Fig. 16-10** del Everest: sección de un tabique doble con montantes desacoplados. Mostrar las dos hojas, la cavidad con material absorbente, los montantes dobles sin contacto, el sello perimetral y las juntas selladas. Señalar: «hoja 1», «hoja 2», «cavidad con lana mineral», «montante desacoplado», «sello acústico».

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 16 (Sound Transmission — Mass Law, Coincidence, Composite Partitions), Capítulo 17 (Sound Insulation — Walls, Floors, Ceilings, Doors, Windows, Flanking). ASTM E413 (STC), ASTM E989 (IIC).*
