# Sesión 17: Introducción al sonido en interiores

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud, distancia | — |
    | <a id="m2"></a>**m²** | Metro cuadrado | Superficie, área | — |
    | <a id="m3"></a>**m³** | Metro cúbico | Volumen | — |
    | <a id="s"></a>**s** | Segundo | Tiempo | — |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="w"></a>**W** | Watt | Potencia acústica | 1 W = 1 J/s |
    | <a id="wm2"></a>**W/m²** | Watt por metro cuadrado | Intensidad sonora | — |
    | <a id="alpha"></a>**α** (alfa) | Coeficiente de absorción | Fracción de energía absorbida (0 a 1) | α = E_absorbida / E_incidente |
    | <a id="tau"></a>**τ** (tau) | Coeficiente de transmisión | Fracción de energía transmitida (0 a 1) | τ = E_transmitida / E_incidente |
    | <a id="e"></a>**E** | Energía | Cantidad de energía acústica | En joules (J) |

???+ note "Del exterior al interior: ¿qué cambia?"

    En las unidades anteriores estudiamos el sonido propagándose al aire libre: campo libre, divergencia esférica, refracción, difracción, Doppler. Todos esos fenómenos asumen que la onda sonora viaja sin encontrar obstáculos, o con obstáculos aislados.

    **Un recinto cerrado cambia TODO.**

    Cuando encendés un parlante dentro de una habitación, el sonido no viaja en línea recta hasta desaparecer. Choca contra paredes, piso, techo, muebles, personas. Cada choque produce cuatro destinos posibles para la energía sonora (Everest & Pohlmann, 2009, Cap. 11):

    | Destino | ¿Qué pasa? | Analogía cotidiana |
    |---|---|---|
    | **Reflexión** | La onda rebota y vuelve al recinto. La superficie actúa como un «espejo acústico» | La luz rebotando en un espejo — ves la imagen reflejada |
    | **Absorción** | La energía se convierte en calor dentro del material. La onda «desaparece» | Una esponja absorbiendo agua — el agua no rebota, se queda en la esponja |
    | **Transmisión** | La onda atraviesa la superficie y sale del recinto. La energía «se escapa» | La luz atravesando un vidrio — pasa al otro lado |
    | **Difusión** | La onda se dispersa en múltiples direcciones. La superficie «rompe» el reflejo especular | La luz rebotando en una pared rugosa blanca — ilumina en todas direcciones sin formar una imagen nítida |

    !!! info "Esto define toda la acústica de interiores"
        Absolutamente todo lo que estudiaremos de aquí en adelante — absorción, reverberación, modos de sala, reflexiones tempranas, difusores, trampas de graves, aislamiento — se reduce a controlar cómo se distribuye la energía entre estos cuatro destinos, **frecuencia por frecuencia**.

???+ note "Balance energético en un recinto"

    Cuando una onda sonora incide sobre una superficie, la energía incidente (\(E_i\)) se reparte entre los cuatro destinos:

    \[
    \boxed{E_i = E_r + E_a + E_t + E_d}
    \]

    | Símbolo | Nombre | Significado |
    |---|---|---|
    | \(E_i\) | Energía incidente | Energía que llega a la superficie |
    | \(E_r\) | Energía reflejada | Energía que rebota de vuelta al recinto |
    | \(E_a\) | Energía absorbida | Energía convertida en calor dentro del material |
    | \(E_t\) | Energía transmitida | Energía que atraviesa la superficie y sale al otro lado |
    | \(E_d\) | Energía difundida | Energía dispersada en múltiples direcciones (caso especial de reflexión no especular) |

    Dividiendo todo por \(E_i\), obtenemos la versión en coeficientes:

    \[
    \boxed{1 = \alpha + \tau + \rho}
    \]

    | Símbolo | Nombre | Fórmula | Rango |
    |---|---|---|---|
    | \(\alpha\) | Coeficiente de absorción | \(\alpha = E_a / E_i\) | 0 (nada absorbente) a 1 (totalmente absorbente) |
    | \(\tau\) | Coeficiente de transmisión | \(\tau = E_t / E_i\) | 0 (nada se transmite) a 1 (todo se transmite) |
    | \(\rho\) | Coeficiente de reflexión | \(\rho = (E_r + E_d) / E_i\) | 0 (nada se refleja) a 1 (reflexión total) |

    !!! warning "α = 1 no significa que el material «desaparece» el sonido"
        Un coeficiente de absorción α = 0.90 significa que el 90% de la energía incidente se absorbe (se convierte en calor). El 10% restante se refleja o se transmite. No existe el material «perfectamente absorbente» (α = 1.00) en todas las frecuencias.

    > Insertar **Fig. 11-2** del Everest: diagrama de balance energético mostrando una onda incidente dividiéndose en reflejada, absorbida y transmitida al llegar a una pared. Incluir los coeficientes α, τ y ρ con sus definiciones.

???+ note "Acondicionamiento vs. aislamiento: dos objetivos distintos"

    Uno de los errores conceptuales más frecuentes — incluso entre músicos con experiencia — es confundir acondicionamiento acústico con aislamiento acústico. Son dos problemas DIFERENTES que requieren soluciones DIFERENTES.

    | Característica | Acondicionamiento acústico | Aislamiento acústico |
    |---|---|---|
    | **¿Qué busca?** | Controlar cómo suena el sonido DENTRO del recinto | Evitar que el sonido ENTRE o SALGA del recinto |
    | **¿Qué parámetro modifica?** | Tiempo de reverberación (RT60), claridad, inteligibilidad | Pérdida de transmisión (TL, STC) — cuántos dB se atenúan al atravesar la superficie |
    | **¿Qué materiales usa?** | Materiales blandos, porosos y livianos: espuma acústica, lana mineral, fibra de vidrio, cortinas, alfombras, paneles perforados, difusores | Materiales duros, densos y pesados: concreto, ladrillo, paneles de yeso múltiples, vidrio laminado, masa pesada |
    | **Principio físico** | **Absorción y difusión**: convertir energía sonora en calor o dispersarla | **Masa y desacople**: la ley de masa dice que al duplicar la masa, la TL aumenta ~6 dB. El desacople (doble pared con cámara de aire) agrega aislamiento adicional |
    | **Ejemplo** | Poner espuma acústica en las paredes de un home studio para que la grabación no suene «a baño» | Construir una pared doble con cámara de aire para que el vecino no escuche la batería |

    !!! danger "La confusión clásica: «puse espuma para que no se escuche afuera»"
        La espuma acústica tiene ALTA absorción en frecuencias medias y agudas, pero MUY BAJA masa. No sirve para aislar: el sonido la atraviesa casi sin atenuación. La espuma cambia cómo suena el cuarto, no evita que el sonido salga. Para aislar necesitás MASA: paredes pesadas, doble vidrio, puertas sólidas con burletes.

    > Insertar **esquema conceptual**: dos dibujos de la misma habitación. Izquierda: «acondicionamiento» — superficies con paneles absorbentes y difusores, las ondas dentro de la sala se atendúan rápido. Derecha: «aislamiento» — paredes gruesas, doble vidrio, burletes, el sonido no sale. Subtítulo: «El acondicionamiento controla el sonido ADENTRO. El aislamiento controla el sonido que ATRAVIESA.»
    >
    > Insertar **Fig. 11-1** del Everest: representación de una fuente sonora en un recinto cerrado mostrando el campo directo (rayos que llegan directo al receptor) y el campo reverberante (múltiples rayos reflejados). Señalar que la energía se reparte entre lo que llega directo, lo que rebota (reflexión), lo que el cuarto absorbe y lo que se transmite al exterior.

???+ note "El campo sonoro en interiores: directo y reverberante"

    En un recinto cerrado, el campo sonoro que escuchamos NO es solo lo que sale del parlante directamente hacia nosotros. Es la combinación de dos componentes:

    ### Campo directo

    El sonido que viaja en línea recta desde la fuente hasta el receptor sin chocar contra ninguna superficie. Sigue la ley del inverso del cuadrado: cada vez que duplicamos la distancia, el nivel baja 6 dB. Es el sonido «limpio» que nos da información espacial (de dónde viene la fuente).

    ### Campo reverberante

    El sonido que ya chocó contra una o más superficies antes de llegar al receptor. Como las reflexiones vienen de TODAS direcciones, el campo reverberante es difuso: en cualquier punto de la sala, la energía reverberante que llega es aproximadamente la misma en todas direcciones.

    | Componente | ¿De dónde viene? | ¿Cómo decae con la distancia? | ¿Qué información aporta? |
    |---|---|---|---|
    | **Campo directo** | Directo de la fuente, sin rebotar | −6 dB al duplicar distancia (inverso del cuadrado) | Localización espacial, claridad, inteligibilidad |
    | **Campo reverberante** | Reflexiones múltiples en todas las superficies | Aproximadamente CONSTANTE en toda la sala (campo difuso) | «Ambiente», espacialidad, envoltura |

    !!! tip "Distancia crítica"
        Existe una distancia a la cual el campo directo y el reverberante tienen el MISMO nivel. Se llama **distancia crítica** (\(D_c\)) y depende de la absorción total de la sala y la directividad de la fuente. Más cerca que \(D_c\), predomina el campo directo (escuchás la fuente). Más lejos que \(D_c\), predomina el campo reverberante (escuchás la sala). Cubriremos esto en detalle en la Sesión 22.

???+ note "¿Por qué un mismo sonido se escucha distinto en cada sala?"

    Cogés tu guitarra acústica, tocás el mismo acorde en tres lugares distintos:

    | Espacio | Volumen aprox. | Superficies dominantes | ¿Cómo suena? |
    |---|---|---|---|
    | **Baño pequeño** | ~8 m³ | Cerámica, vidrio, porcelana (todas MUY reflectantes, α ≈ 0.01–0.03) | Mucha reverberación, sonido «brillante», coloración metálica. El sonido rebota decenas de veces antes de extinguirse |
    | **Living alfombrado con cortinas** | ~40 m³ | Alfombra, cortinas, sillones (absorbentes en medios/agudos, α ≈ 0.30–0.70) | Reverberación controlada, sonido «seco» y cálido. Las superficies blandas absorben las altas frecuencias rápidamente |
    | **Auditorio vacío** | ~5,000 m³ | Butacas tapizadas, paneles de madera, cortinados pesados | Reverberación larga pero controlada (~1.5–2.0 s). Las butacas (incluso vacías) aportan mucha absorción |
    | **Estacionamiento subterráneo** | ~20,000 m³ | Concreto (α ≈ 0.02), superficies planas y paralelas | Reverberación MUY larga (~4–8 s), ecos audibles, *flutter echo* entre paredes paralelas. Las bajas frecuencias «retumban» |

    La diferencia entre estos espacios NO está en la fuente (la guitarra es la misma), sino en cómo las superficies del recinto reparten la energía entre reflexión, absorción, transmisión y difusión, **para cada frecuencia por separado**.

    !!! warning "Lo que absorbe los agudos NO necesariamente absorbe los graves"
        Una cortina gruesa puede tener α ≈ 0.70 a 4 kHz pero α ≈ 0.05 a 125 Hz. Por eso los cuartos con mucho tratamiento absorbente liviano suenan «apagados» en agudos pero todavía «retumban» en graves. Controlar todo el espectro requiere entender absorción POR BANDA DE FRECUENCIA — y eso es justamente lo que veremos en la Sesión 18.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 11, pp. 170–197 (Reverberation — Sound in Enclosed Spaces, Growth and Decay of Sound, Direct and Reverberant Fields).*
