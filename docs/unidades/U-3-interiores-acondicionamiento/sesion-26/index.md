# Sesión 26: Difusión acústica en interiores

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud | — |
    | <a id="cm"></a>**cm** | Centímetro | Longitud | 1 cm = 0.01 m |
    | <a id="mm"></a>**mm** | Milímetro | Longitud | 1 mm = 0.001 m |
    | <a id="s"></a>**s** | Segundo | Tiempo | — |
    | <a id="c"></a>**c** | Velocidad del sonido | Velocidad de propagación | ~343 m/s (20°C) |
    | <a id="l"></a>**λ** (lambda) | Longitud de onda | Distancia que recorre un ciclo | λ = c/f, en m |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="p"></a>**p** | Número primo | Entero > 1 divisible solo por 1 y sí mismo | 2, 3, 5, 7, 11, 13, 17, 19, 23, … |
    | <a id="d-c"></a>**d_c** | Coeficiente de difusión | Cuán uniformemente una superficie redistribuye el sonido reflejado | 0 (especular) a 1 (difuso ideal). Según ISO 17497-2 |

???+ note "Los tres destinos del sonido: reflexión, absorción y difusión"

    Cuando una onda sonora incide sobre una superficie en una sala, solo puede sufrir TRES destinos (Everest & Pohlmann, 2009, Cap. 9):

    | Destino | ¿Qué le pasa al sonido? | ¿Cuánta energía se conserva? | ¿Se usa para…? |
    |---|---|---|---|
    | **Reflexión especular** | Rebota como un espejo (ángulo de incidencia = ángulo de reflexión) | ~95-99% (si la superficie es rígida y lisa) | No es **siempre** perjudicial: depende de su nivel, dirección y tiempo de llegada. Puede causar ecos flutter, focalizaciones y comb filtering cuando es intensa y llega tarde, pero las reflexiones especulares de los laterales también son las que dan amplitud estéreo en una sala de control |
    | **Absorción** | La energía sonora se convierte en calor (fricción en material poroso o resonancia) | 0% (idealmente). En la práctica: α·E_incidente donde α está entre 0 y 1 | Reducir RT60 y eliminar reflexiones indeseadas. El riesgo: «matar» la sala (demasiado seca, sin vida) |
    | **Difusión** | Redistribución angular de la energía reflejada; también puede existir absorción y transmisión | ~90-98% (parte puede absorberse o transmitirse) | Romper reflexiones especulares y flutter echo manteniendo la mayor parte de la energía en la sala |

    !!! tip "La analogía de la linterna"
        Una reflexión especular es como un ESPEJO: la luz rebota en UNA dirección predecible. La absorción es como una pared PINTADA DE NEGRO MATE: la luz «desaparece». La difusión es como una pared de METAL MATE MARTILLADO: la luz se dispersa en TODAS direcciones, iluminando uniformemente, sin perderse. Una sala sin difusión tiene «zonas brillantes» (donde las reflexiones se focalizan) y «zonas oscuras» (donde no llegan). Una sala CON difusión tiene una iluminación sonora UNIFORME.

    ### Difusión vs. dispersión (scattering): el detalle técnico

    En acústica, estos términos NO son sinónimos:

    | Término | Definición | Norma |
    |---|---|---|
    | **Difusión** | Redistribución ESPACIAL UNIFORME de la energía reflejada. Se mide con el coeficiente de difusión d_c (0 a 1) midiendo la respuesta polar en muchas direcciones | ISO 17497-2:2012 |
    | **Dispersión (scattering)** | Fracción de energía reflejada que NO es especular (incluye tanto difusión como reflexiones en direcciones aleatorias). Se mide con el coeficiente de dispersión s (0 a 1) | ISO 17497-1:2004 |

    **En criollo**: la dispersión mide cuánta energía «no va en la dirección del espejo». La difusión mide cuán UNIFORME es la energía que SÍ SALIÓ. Un difusor ideal tiene s ≈ 1 Y d_c ≈ 1: toda la energía se va de la dirección especular, y además se distribuye uniformemente. Una superficie IRREGULAR (como un librero lleno de libros) puede tener s alto pero d_c bajo: el sonido no vuelve como espejo, pero tampoco se distribuye uniformemente — sale en direcciones aleatorias no controladas.

    > Insertar **Fig. 9-1** del Everest: tres diagramas de reflexión. (a) Superficie plana → haz reflejado único (especular). (b) Superficie absorbente → haz atenuado. (c) Superficie difusora → múltiples haces en muchas direcciones con intensidades similares. Incluir la notación de ángulo de incidencia = ángulo de reflexión para el caso (a).

???+ note "¿Por qué NO absorber todo? El problema de las salas «demasiado tratadas»"

    La intuición dice: «si el problema son las reflexiones, absorbo TODO y listo.» ERROR. Una sala con TODAS las superficies absorbentes (α → 1 en todas las frecuencias) se convierte en una **cámara anecoica**: RT60 → 0, sin reflexiones, sin reverberación, sin espacialidad. Es un ambiente INNATURAL y DESAGRADABLE para escuchar música.

    | Efecto | Sala con exceso de absorción | Sala con difusión equilibrada |
    |---|---|---|
    | **Imagen estéreo** | Colapsada, estrecha («los parlantes suenan como auriculares») | Amplia, precisa, estable (la difusión lateral ensancha la escena) |
    | **Sensación de espacio** | Claustrofóbica («estoy en un estudio, no en una sala») | Natural, envolvente (la sala «respira» con la música) |
    | **Respuesta en frecuencia** | Puede ser muy plana (si está bien diseñada) pero suena «muerta» | Ligeramente menos plana pero musicalmente MÁS AGRADABLE |
    | **Fatiga auditiva** | ALTA: el cerebro espera reflexiones naturales y al no recibirlas se esfuerza | BAJA: el cerebro recibe información espacial coherente |

    **La regla de oro**: ABSORBÉS las reflexiones PROBLEMÁTICAS (primeras reflexiones tempranas < 20 ms, modos de graves) y DIFUNDÍS el resto. El objetivo NO es eliminar el sonido reflejado — es CONTROLARLO para que la sala aporte AMBIENTE, no COLORACIÓN.

    En acústica arquitectónica, esta filosofía tiene nombre: **LEDE** (Live End – Dead End). La mitad delantera de la sala (donde están los monitores y el oyente) es «muerta» (absorción en primeras reflexiones, sin reflexiones tempranas). La mitad trasera es «viva» (difusión, ambiente natural). El resultado: claridad en la imagen estéreo (sin early reflections) + espacialidad agradable (con reverberación difusa tardía).

???+ note "Tipos de difusores: del martillo al algoritmo"

    ### 1. Difusores geométricos (no sintonizados)

    Funcionan por GEOMETRÍA: la superficie tiene irregularidades cuya escala es comparable a la longitud de onda del sonido que se quiere difundir. NO tienen una frecuencia de diseño precisa — su comportamiento es de banda ancha pero menos controlado.

    | Tipo | Descripción | Ventaja | Desventaja |
    |---|---|---|---|
    | **Policilíndrico (polycylindrical)** | Superficie curva convexa (como medio cilindro). El sonido se dispersa en abanico | Simple de construir (panel curvo de madera o yeso), estética agradable | Difusión NO uniforme: focaliza algo de energía en direcciones predecibles. Ancho de banda limitado por el radio de curvatura |
    | **Piramidal / prismático** | Superficie facetada con ángulos alternados (ej. pirámides truncadas, cuñas triangulares) | Muy simple de construir (madera cortada en ángulos). Buena dispersión espacial | Sin control de fase → puede producir interferencia entre facetas adyacentes |
    | **Skyline (perfil urbano)** | Bloques rectangulares de distintas alturas distribuidos aleatoriamente. Parece el skyline de una ciudad | Visualmente impactante. Buena difusión en medios y agudos | Pesado, caro, acumula polvo, difícil de limpiar |
    | **Superficie irregular (librero, mampostería vista)** | Cualquier superficie con irregularidades aleatorias de escala cm a dm | «Gratis» (ya tenés los libros o la pared de ladrillo). Buena dispersión | Difusión no controlada ni predecible. Puede tener picos de absorción imprevistos |

    ### 2. Difusores de secuencia numérica (Schroeder diffusers)

    Inventados por Manfred Schroeder en los años 70 (Everest & Pohlmann, 2009, Cap. 14, pp. 211–230), estos difusores usan TEORÍA DE NÚMEROS para calcular EXACTAMENTE la profundidad de cada «pozo» (well) de manera que las ondas reflejadas interfieran CONSTRUCTIVAMENTE en MUCHAS direcciones distintas. Son el equivalente acústico de un holograma.

    **El principio**: una superficie plana dividida en N pozos paralelos de IGUAL ANCHO pero DISTINTA PROFUNDIDAD. La profundidad de cada pozo introduce un retardo de fase en la onda reflejada (el sonido viaja ida y vuelta dentro del pozo → Δt = 2·d_n / c → Δφ = 4π·d_n / λ). Las profundidades se eligen de modo que los desfases entre pozos adyacentes produzcan un PATRÓN DE DIFRACCIÓN que dispersa la energía uniformemente en el espacio.

    !!! info "¿Quién fue Manfred Schroeder?"
        Manfred R. Schroeder (1926-2009) fue un físico alemán que trabajó en Bell Labs y luego fue profesor en la Universidad de Göttingen. Es una de las figuras más importantes de la acústica del siglo XX. Inventó los difusores de secuencia numérica, desarrolló métodos para medir la reverberación usando señales pseudoaleatorias (MLS), y contribuyó fundamentalmente a la comprensión de la percepción de la reverberación y la inteligibilidad del habla. Los difusores que usás en tu estudio son, literalmente, una aplicación de teoría de números a la acústica.

    ### QRD (Quadratic Residue Diffuser)

    El más común. La profundidad del n-ésimo pozo (n = 0, 1, 2, …, N−1) está dada por:

    \[
    \boxed{d_n = \frac{c \cdot (n^2 \bmod p)}{2 \cdot f_{\text{diseño}} \cdot p}}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(d_n\) | Profundidad del pozo n | m | Cuánto se excava ese pozo respecto al plano de referencia |
    | \(c\) | Velocidad del sonido | m/s | ~343 m/s a 20°C |
    | \(n^2 \bmod p\) | Residuo cuadrático | — | El RESTO de dividir n² por p. Para p = 7: n=0→0, n=1→1, n=2→4, n=3→2, n=4→2, n=5→4, n=6→1 |
    | \(p\) | Número primo | — | La secuencia se repite cada p pozos. p = 7, 11, 13, 17 son valores típicos |
    | \(f_{\text{diseño}}\) | Frecuencia mínima de diseño | Hz | La frecuencia MÁS BAJA para la cual el difusor funciona correctamente. Los pozos más profundos corresponden a λ/2 a esta frecuencia |

    ### ¿Cómo se usa la fórmula? — Ejemplo completo

    Diseñemos un difusor QRD unidimensional (1D) con p = 7, f_diseño = 500 Hz.

    **Paso 1: calcular longitudes de onda relevantes**

    - λ_diseño = c / f_diseño = 343 / 500 = 0.686 m = 68.6 cm
    - Secuencia de residuos cuadráticos para p = 7: **0, 1, 4, 2, 2, 4, 1**. El residuo máximo presente es **4** (el residuo 6 no aparece porque 6 no es residuo cuadrático módulo 7).
    - Profundidad máxima (residuo = 4): d_max = (343 × 4) / (2 × 500 × 7) = 1372 / 7000 = 0.196 m = 19.6 cm

    **Paso 2: calcular residuos cuadráticos para n = 0, 1, 2, …, 6**

    | n | n² | n² mod 7 (residuo) | d_n (cm) | Altura del pozo (cm) = d_max − d_n |
    |---|---|---|---|---|
    | 0 | 0 | 0 | 0.0 | 19.6 |
    | 1 | 1 | 1 | 4.9 | 14.7 |
    | 2 | 4 | 4 | 19.6 | 0.0 |
    | 3 | 9 | 2 | 9.8 | 9.8 |
    | 4 | 16 | 2 | 9.8 | 9.8 |
    | 5 | 25 | 4 | 19.6 | 0.0 |
    | 6 | 36 | 1 | 4.9 | 14.7 |

    **Paso 3: dimensiones físicas**

    - Ancho de cada pozo (w): debe ser ≤ λ_min/2, donde λ_min corresponde a la frecuencia MÁS ALTA para la cual queremos difusión. Si f_max = 4 kHz → λ_min = 343/4000 = 0.086 m = 8.6 cm → w ≤ 4.3 cm. Usemos w = 3 cm.
    - Ancho total de un período: N × w = 7 × 3 = 21 cm.
    - La secuencia se repite: para cubrir una pared de 1.2 m de ancho → ceil(120/21) = 6 períodos.

    **Paso 4: ¿qué pasa por debajo de f_diseño?**

    Para frecuencias MENORES a 500 Hz, los pozos son DEMASIADO POCO PROFUNDOS comparados con λ → el difusor se comporta como una superficie CASI PLANA (reflexión especular). Por eso f_diseño se llama «frecuencia mínima»: es la frecuencia MÁS BAJA para la que el difusor funciona como tal. Por debajo, necesitás otro tratamiento (absorción).

    > Insertar **Fig. 14-3** del Everest: diagrama de un difusor QRD 1D. Sección transversal mostrando los 7 pozos con profundidades d_n según la secuencia de residuos cuadráticos. Incluir la notación de w (ancho del pozo), d_n (profundidad), y los separadores entre pozos.

???+ note "Otras secuencias: PRD y MLS"

    ### PRD (Primitive Root Diffuser)

    Similar al QRD pero la secuencia de profundidades se basa en RAÍCES PRIMITIVAS módulo p en lugar de residuos cuadráticos. La principal diferencia práctica es que el PRD produce una difusión más UNIFORME en el plano bidimensional (2D), mientras que el QRD 1D difunde principalmente en un solo plano (perpendicular a los pozos). Para un difusor 2D que disperse tanto horizontal como verticalmente, se usa típicamente un PRD 2D o una combinación de dos secuencias QRD ortogonales.

    ### MLS (Maximum Length Sequence)

    Secuencias binarias (solo dos profundidades: pozo o plano) basadas en registros de desplazamiento. Producen una difusión de banda más ancha pero con menor uniformidad espacial que QRD. Ventaja: extremadamente simples de construir (solo dos alturas). Se usan en aplicaciones donde la uniformidad perfecta no es crítica y la facilidad constructiva es prioritaria.

    | Tipo | Profundidades | Uniformidad | Complejidad constructiva | Mejor uso |
    |---|---|---|---|---|
    | **QRD 1D** | p profundidades distintas | Alta en UN plano | Media (muchos pozos de distinta profundidad) | Paredes laterales (difusión horizontal) |
    | **QRD 2D** | Matriz p × q de profundidades | Alta en DOS planos | Alta (matriz tridimensional) | Pared trasera (difusión hemisférica) |
    | **PRD 2D** | Basado en raíces primitivas | Muy alta en dos planos | Muy alta | Salas de escucha crítica, mastering |
    | **MLS** | Solo 2 profundidades | Media-baja | Baja (solo dos alturas) | Tratamiento de banda ancha económico |

    !!! tip "RPG Diffusor Systems"
        RPG (inicialmente fundada como «RPG Diffusor Systems») fue la primera empresa en comercializar difusores basados en las patentes de Schroeder en los años 80. Su difusor QRD-734, basado en p=7 con pozos de 3 y 4 pulgadas, se convirtió en un estándar de la industria. Hoy «RPG» es a los difusores lo que «Kleenex» a los pañuelos desechables — una marca que se volvió genérico. Los difusores RPG modernos incluyen diseños optimizados por computadora que van mucho más allá del QRD original, usando algoritmos genéticos y optimización numérica.

    > Insertar **Fig. 9-3** del Everest: comparación visual de tres tipos de difusores. (a) QRD 1D (pozos paralelos), (b) PRD 2D (matriz de pozos cuadrados), (c) Skyline (bloques de altura variable pseudoaleatoria). Mostrar para cada uno el patrón de difusión polar.

???+ note "Coeficiente de difusión y distancia mínima"

    ### ¿Cómo se MIDE qué tan bueno es un difusor?

    El **coeficiente de difusión** \(d_c\) se define según ISO 17497-2:2012. El procedimiento:

    1. Se emite un pulso sonoro hacia el difusor desde una dirección fija.
    2. Se mide la presión reflejada en un arco de micrófonos (o un micrófono giratorio) cubriendo ángulos de −90° a +90° en pasos de 5°.
    3. Se calcula la «uniformidad» de la distribución angular: si todas las direcciones reciben la MISMA energía reflejada, d_c = 1. Si TODA la energía vuelve en UNA sola dirección (especular), d_c = 0.

    \[
    d_c = \frac{\left(\sum_{i=1}^{n} 10^{L_i/10}\right)^2 - \sum_{i=1}^{n} \left(10^{L_i/10}\right)^2}{(n-1) \sum_{i=1}^{n} \left(10^{L_i/10}\right)^2}
    \]

    donde \(L_i\) es el nivel de presión sonora en dB medido en cada dirección i.

    **En la práctica**: un QRD bien diseñado suele alcanzar d_c ≈ 0.8-0.95 en su rango de diseño, pero **la geometría por sí sola no garantiza estos valores**: el coeficiente de difusión debe comprobarse mediante mediciones angulares (ISO 17497-2). Una superficie plana tiene d_c ≈ 0.05-0.15 (no es exactamente 0 por difracción en los bordes).

    ### Distancia mínima del oyente al difusor

    Un difusor necesita DISTANCIA para que el patrón de interferencia se «forme» completamente. Si estás demasiado cerca, los frentes de onda de los distintos pozos no tuvieron tiempo de recombinarse → escuchás el sonido de pozos individuales (como un peine), no difusión.

    **Regla práctica** (recomendación conservadora, no una frontera universal): como criterio orientativo, conviene que la distancia entre el difusor y el oyente sea al menos 3 VECES la longitud de onda de la frecuencia más baja de diseño:

    \[
    d_{\text{mín}} \gtrsim 3 \cdot \lambda_{\text{diseño}} = \frac{3c}{f_{\text{diseño}}}
    \]

    **Ejemplo**: difusor diseñado para f_diseño = 500 Hz:
    
    \[
    d_{\text{mín}} = 3 \times 343 / 500 = 3 \times 0.686 = \mathbf{2.06\ \text{m}}
    \]

    Esto es CRÍTICO para estudios pequeños. Si tu sala tiene 3 m de profundidad y ponés un difusor en la pared trasera diseñado para 500 Hz, necesitás estar al menos a 2 m. Si tu posición de escucha está a 1.5 m del difusor: **ese difusor NO está funcionando como tal** — estás escuchando los pozos individualmente. Para salas pequeñas: subir f_diseño (ej. 1 kHz → d_mín = 1.03 m) o usar difusores geométricos (menos precisos pero funcionan a menor distancia relativa).

    !!! warning "El error clásico del estudio casero"
        «Compré un difusor RPG QRD de 60×60 cm para la pared de atrás de mi estudio de 2.5 × 3 m. Se ve increíble.» Medición REW: el difusor agregó COMB FILTERING adicional. Razón: la distancia del oyente al difusor es 1.2 m, pero λ_diseño es 1.37 m (f_diseño = 250 Hz). El criterio conservador sugiere d_mín ≈ 3 × 1.37 = 4.1 m. Estás sentado a MENOS DE UN TERCIO de esa distancia. No funciona como difusor — genera interferencia. La solución: (a) subir f_diseño a 800-1000 Hz para esa sala, o (b) usar absorción en lugar de difusión en la pared trasera, o (c) usar un difusor geométrico (policilíndrico) que no requiere la misma distancia de formación de frente de onda.

???+ note "¿Absorción o difusión? Una guía para decidir"

    | Situación | ¿Qué usar? | ¿Por qué? |
    |---|---|---|
    | **Primeras reflexiones laterales (< 15 ms)** | **Absorción** (panel de lana mineral de 5-10 cm) | Las reflexiones MUY tempranas degradan la imagen estéreo. No querés difundirlas (llegarían apenas un poco después, igual de temprano). Querés eliminarlas |
    | **Reflexión de la consola/escritorio** | **Absorción + reorientación** (inclinar la consola 5-10°) | La reflexión de la consola está a pocos cm del oído → Δt < 3 ms → comb filter en medios-agudos. La absorción sobre la consola (foam) ayuda. Pero mejor es INCLINAR la superficie para desviar la reflexión lejos del oído |
    | **Pared trasera (opuesta a monitores)** | **Difusión** (QRD o skyline) si d > d_mín. Si no, **absorción de banda ancha** (panel poroso grueso con air gap) | La pared trasera está típicamente a 1.5-4 m. Si la distancia lo permite, la difusión mantiene la energía en la sala sin crear una imagen fantasma. Si no, absorción |
    | **Techo (entre monitores y oyente)** | **Difusión o absorción**, según altura y preferencia. Si el techo está a < 1 m de los oídos, **absorción** | La reflexión del techo llega MUY rápido (Δd pequeño) y afecta la percepción de altura de la imagen. En salas bajas, mejor absorber |
    | **Paredes laterales más allá del punto de primera reflexión** | **Difusión o geometría irregular** (librero, paneles facetados) | Ya absorbiste las primeras reflexiones. El resto de energía lateral es BENÉFICA para la espacialidad — difundila para que sea uniforme |
    | **Esquinas (ya tratadas con trampas de graves)** | **Difusor encima de la trampa** (en medios/agudos) | La trampa de graves absorbe < 300 Hz. Por encima de esa frecuencia, la superficie frontal de la trampa puede ser reflectante o difusora. Un panel perforado o un difusor liviano sobre la trampa mantiene la sala viva en agudos mientras la trampa sigue funcionando en graves |
    | **Sala MUY pequeña (< 15 m²)** | Principalmente **absorción**, difusión limitada a frecuencias altas | En salas pequeñas, la distancia a CUALQUIER superficie es poca → cualquier difusor de baja frecuencia requiere d_mín que excede la sala. Usar difusores solo para > 1 kHz, y absorber el resto. Priorizar: trampas de graves en esquinas + absorción en primeras reflexiones |

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 9, pp. 140–153 (Diffusion — Reflection/Scattering/Diffusion, Geometric Diffusers, Polycylindrical, Pyramidal, Skyline). Capítulo 14, pp. 211–230 (Schroeder Diffusers — QRD Design, Phase-Grating Diffusers, Number-Theoretic Sequences, PRD, MLS, PG, RPG). ISO 17497-2:2012 (Acoustics — Sound-scattering properties of surfaces — Measurement of the diffusion coefficient).*
