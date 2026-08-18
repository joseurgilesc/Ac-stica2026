# Sesión 25: Tratamiento de bajas frecuencias

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud | — |
    | <a id="mm"></a>**mm** | Milímetro | Longitud | 1 mm = 0.001 m |
    | <a id="m2"></a>**m²** | Metro cuadrado | Superficie | — |
    | <a id="m3"></a>**m³** | Metro cúbico | Volumen | — |
    | <a id="s"></a>**s** | Segundo | Tiempo | — |
    | <a id="ms"></a>**ms** | Milisegundo | Tiempo | 1 ms = 0.001 s |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="c"></a>**c** | Velocidad del sonido | Velocidad de propagación | ~343 m/s (20°C) |
    | <a id="l"></a>**λ** (lambda) | Longitud de onda | Distancia que recorre un ciclo | λ = c/f, en m |
    | <a id="pa"></a>**Pa** | Pascal | Presión sonora | 1 Pa = 94 dB SPL |
    | <a id="f-s"></a>**f_S** | Frecuencia de Schroeder | Transición modal/difuso | \(f_S \approx 2000 \cdot \sqrt{RT60 / V}\) |

???+ note "¿Por qué el tratamiento de graves es DISTINTO?"
    
    En las Sesiones 23 y 24 aprendiste que por debajo de la frecuencia de Schroeder (\(f_S\)), la respuesta de una sala está dominada por MODOS individuales — picos y valles discretos en el espectro. Por encima de \(f_S\), el comportamiento es difuso: los modos se funden y el tratamiento puede ser ESTADÍSTICO (absorción porosa generalizada).

    Esto tiene una consecuencia práctica radical: **el tratamiento acústico en graves (< 150-200 Hz) debe ser cualitativamente DISTINTO al tratamiento en medios y agudos.**

    | Aspecto | Tratamiento en graves | Tratamiento en medios/agudos |
    |---|---|---|
    | **Fenómeno dominante** | Modos individuales (resonancias discretas) | Campo difuso (comportamiento estadístico) |
    | **Estrategia** | Sintonizar dispositivos específicos a las frecuencias modales problemáticas | Absorción porosa de banda ancha, difusión |
    | **Dispositivo típico** | Resonador de Helmholtz, panel de membrana, trampa diafragmática | Panel de lana mineral, espuma acústica, difusor QRD |
    | **Ubicación crítica** | Esquinas y superficies donde los modos tienen ANTINODOS de presión | Primeras reflexiones (puntos especulares) |
    | **¿Funciona la espuma acústica de 5 cm?** | ❌ Casi nula absorción por debajo de 500 Hz | ✅ Buena absorción por encima de 1 kHz |

    !!! warning "La espuma acústica NO es un tratamiento de graves"
        La espuma acústica de 5 cm de espesor tiene un coeficiente de absorción α ≈ 0.15 a 125 Hz. Eso significa que absorbe solo el 15% de la energía incidente en graves. Para que un absorbente poroso sea efectivo en 100 Hz necesitarías un espesor de ~86 cm (λ/4 a 100 Hz). NADIE forra su estudio con bloques de lana de roca de casi un metro. Por eso existen las trampas de graves: dispositivos diseñados ESPECÍFICAMENTE para absorber en el rango donde la absorción porosa convencional FALLA.

    > Insertar **Fig. 13-8** del Everest: gráfico comparativo de coeficientes de absorción (α) vs. frecuencia para tres tipos de tratamiento — absorbente poroso de 50 mm, trampa de membrana, y resonador de Helmholtz. Señalar la enorme diferencia en el rango 50-250 Hz.

???+ note "Presión vs. velocidad: la clave física del tratamiento de graves"

    Para entender POR QUÉ funcionan (o no) los distintos tipos de trampas, necesitás distinguir dos magnitudes acústicas en una onda estacionaria:

    ### Las dos caras de una onda sonora

    | Magnitud | Símbolo | ¿Qué es? | ¿Dónde es máxima en una onda estacionaria? | ¿Dónde es mínima? |
    |---|---|---|---|---|
    | **Presión sonora** | \(p\) (Pa) | Variación de presión respecto a la atmosférica. Lo que mide UN micrófono | En los **antinodos de presión** (paredes rígidas y puntos fijos a λ/2) | En los **nodos de presión** (a λ/4, 3λ/4, 5λ/4… de la pared) |
    | **Velocidad de partícula** | \(u\) (m/s) | Velocidad con la que las moléculas de aire oscilan alrededor de su posición de equilibrio. NO es la velocidad de propagación c | En los **nodos de presión** (justo donde la presión es mínima) | En los **antinodos de presión** (justo donde la presión es máxima) |

    !!! tip "Analogía: un columpio"
        Imaginá un columpio. En los extremos del arco (puntos más altos), la velocidad es CERO pero la energía potencial (altura) es MÁXIMA. En el punto más bajo, la velocidad es MÁXIMA pero la altura es CERO. En una onda sonora: la presión es como la altura (energía potencial), y la velocidad de partícula es como la velocidad del columpio (energía cinética). Donde una es máxima, la otra es mínima. Están desfasadas 90° en el espacio (λ/4).

    ### Por qué esto importa para el diseño de trampas

    - Los absorbentes POROSOS (lana mineral, espuma) disipan energía por FRICCIÓN: las moléculas de aire se mueven a través de las fibras y pierden energía. Por eso necesitan estar donde la VELOCIDAD DE PARTÍCULA es alta → a λ/4 de la pared. Pero a 50 Hz, λ/4 = 1.72 m. Imposible en la práctica.
    
    - Los absorbentes RESONANTES (membrana, Helmholtz) funcionan por RESONANCIA MECÁNICA: una masa (membrana, aire en el cuello) oscila contra un resorte (aire en la cavidad). La máxima absorción ocurre donde la PRESIÓN es máxima → pegados a la pared. Y en graves, la pared está AHÍ MISMO, a 0 cm. Por eso las trampas resonantes pueden ser delgadas y aún así funcionar en graves.

    > Insertar **Fig. 12-10** del Everest: perfil de presión y velocidad de partícula para una onda estacionaria entre dos paredes. Mostrar que el máximo de presión está en la pared (x = 0) y el máximo de velocidad a λ/4 de la pared. Señalar: «trampa resonante aquí» (x = 0) y «absorbente poroso aquí» (x = λ/4).

???+ note "Tipos de trampas de graves"

    Hay tres familias principales. Cada una tiene su principio físico, sus ventajas y sus limitaciones.

    ### 1. Absorbentes porosos de gran espesor (velocity absorbers)

    | Propiedad | Descripción |
    |---|---|
    | **Principio** | Fricción viscosa del aire moviéndose a través de material fibroso |
    | **Material típico** | Lana de roca, lana de vidrio, fibra de poliéster reciclado, espuma de celda abierta |
    | **Dónde funciona mejor** | A λ/4 de la pared (máxima velocidad de partícula) |
    | **Rango efectivo** | Frecuencias donde λ/4 ≤ espesor del panel. Ej: panel de 30 cm → efectivo desde ~286 Hz hacia arriba |
    | **Ancho de banda** | AMPLIO (varias octavas) — es la principal ventaja |
    | **¿Funciona en esquinas?** | Sí. En una esquina la distancia a la pared varía de 0 a λ/4 en diagonal → absorción de banda más ancha |

    **Estrategia práctica**: paneles de 15-30 cm de lana mineral de alta densidad (40-60 kg/m³) montados con un espacio de aire (air gap) de otros 10-30 cm detrás. El air gap desplaza el pico de velocidad hacia frecuencias más bajas sin agregar material. Un panel de 30 cm con air gap de 30 cm puede ser efectivo hasta ~70-80 Hz.

    ### 2. Absorbentes de membrana o panel (pressure absorbers)

    | Propiedad | Descripción |
    |---|---|
    | **Principio** | Una membrana flexible (madera contrachapada, vinilo, metal) montada sobre un marco sellado con una cavidad de aire detrás. La membrana vibra por la presión sonora y disipa energía por amortiguamiento interno + fricción en la cavidad |
    | **Frecuencia de resonancia** | \(f_0 \approx \frac{60}{\sqrt{m \cdot d}}\) donde m = masa superficial (kg/m²) y d = profundidad de la cavidad (m) |
    | **Dónde funciona mejor** | Pegado a la pared (máxima presión) |
    | **Rango efectivo** | BANDA ESTRECHA alrededor de f₀ (~1/3 a 1 octava) |
    | **Ancho de banda** | Se puede ensanchar agregando material absorbente dentro de la cavidad (aumenta el amortiguamiento → menor Q → más ancho de banda) |

    **Ejemplo**: panel de madera contrachapada de 6 mm (m ≈ 4 kg/m²), cavidad de 10 cm (d = 0.1 m):

    \[
    f_0 = \frac{60}{\sqrt{4 \times 0.1}} = \frac{60}{\sqrt{0.4}} = \frac{60}{0.632} = \mathbf{95\ \text{Hz}}
    \]

    | m (kg/m²) | d (m) | f₀ (Hz) |
    |---|---|---|
    | 4 | 0.05 | 134 |
    | 4 | 0.10 | 95 |
    | 4 | 0.20 | 67 |
    | 8 | 0.10 | 67 |
    | 12 | 0.10 | 55 |

    !!! tip "¿Cómo elijo m y d?"
        - Aumentar **m** (panel más pesado) → baja f₀ pero también reduce la amplitud de vibración → menos absorción. Compromiso.
        - Aumentar **d** (cavidad más profunda) → baja f₀ sin reducir eficiencia. Pero ocupa MÁS espacio en la sala.
        - Si necesitás cubrir UN modo problemático específico (ej. 57 Hz en tu sala), calculás m × d = (60/57)² = 1.11, y elegís combinaciones viables: m=4 → d=0.28 m (28 cm), m=8 → d=0.14 m (14 cm), m=12 → d=0.09 m (9 cm).

    ### 3. Resonadores de Helmholtz (pressure absorbers)

    | Propiedad | Descripción |
    |---|---|
    | **Principio** | Una cavidad de volumen V conectada al exterior por un cuello de área S y longitud L. El aire en el cuello actúa como MASA que oscila contra el RESORTE que es el aire en la cavidad. Máxima absorción en resonancia |
    | **Frecuencia de resonancia** | \(f_0 = \frac{c}{2\pi} \cdot \sqrt{\frac{S}{V \cdot L_{\text{ef}}}}\) |
    | **Dónde funciona mejor** | Pegado a la pared, con el cuello expuesto a la sala (máxima presión) |
    | **Rango efectivo** | MUY ESTRECHA (alto Q). Ideal para sintonizar modos muy específicos |
    | **Ancho de banda** | Se puede ensanchar agregando material absorbente en el cuello o la cavidad |

    **Nomenclatura de la fórmula de Helmholtz**:

    \[
    \boxed{f_0 = \frac{c}{2\pi} \cdot \sqrt{\frac{S}{V \cdot L_{\text{ef}}}}}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(f_0\) | Frecuencia de resonancia | Hz | Frecuencia a la que la absorción es máxima |
    | \(c\) | Velocidad del sonido | m/s | ~343 m/s a 20°C |
    | \(S\) | Área de la sección transversal del cuello | m² | \(\pi r^2\) para cuello circular de radio r |
    | \(V\) | Volumen de la cavidad | m³ | Volumen interno del resonador |
    | \(L_{\text{ef}}\) | Longitud efectiva del cuello | m | Longitud física + corrección de boca (\(L_{\text{ef}} = L_{\text{física}} + 1.7r\) para cuello circular con brida exterior, \(L_{\text{física}} + 0.85r\) sin brida) |

    **Ejemplo**: resonador con cavidad V = 0.05 m³ (50 litros, como una caja de 40×35×35 cm), cuello circular de radio r = 2 cm (S = π × 0.02² = 0.001257 m²), longitud física del cuello L = 5 cm (0.05 m), con brida → L_ef = 0.05 + 1.7 × 0.02 = 0.084 m:

    \[
    f_0 = \frac{343}{2\pi} \cdot \sqrt{\frac{0.001257}{0.05 \times 0.084}} = 54.6 \cdot \sqrt{0.299} = 54.6 \times 0.547 = \mathbf{29.9\ \text{Hz}}
    \]

    !!! info "Helmholtz perforado (perforated panel)"
        Una variante MUY usada en estudios es el panel perforado: múltiples agujeros distribuidos en una placa montada sobre una cavidad. Cada agujero actúa como un cuello individual. La frecuencia de resonancia es la misma fórmula pero con S = área total de TODOS los agujeros y un factor de porosidad. Los paneles perforados combinan la estética (parecen un revestimiento normal) con absorción sintonizada en graves — son ideales para salas donde no querés que «se vea» el tratamiento.

    > Insertar **Fig. 14-3** del Everest: esquema de un resonador de Helmholtz. Mostrar cuello (S, L), cavidad (V), y la analogía masa-resorte (masa = aire en el cuello, resorte = aire en la cavidad). Incluir la curva de absorción vs. frecuencia mostrando el pico estrecho en f₀.

    [🎛️ **Abrir simulación interactiva — Resonador de Helmholtz**](../../../simulacion/helmholtz.html){ .md-button }

    Cambia el volumen, el radio y la longitud del cuello. Observa la frecuencia f₀ calculada, la analogía masa-resorte y la curva de resonancia.

???+ note "¿Dónde pongo las trampas? La geometría de la absorción"

    La ubicación determina la EFECTIVIDAD tanto o más que el diseño de la trampa en sí.

    ### Esquinas: el lugar #1

    TODOS los modos axiales (sin excepción) tienen ANTINODOS de presión en las esquinas de la sala. Una trampa de presión (membrana, Helmholtz) en una esquina «ve» MÁXIMA presión para TODOS los modos — es el punto más eficiente. Además, las esquinas tienen MÁS modos superpuestos que cualquier otra ubicación → una trampa en una esquina absorbe MÚLTIPLES modos simultáneamente.

    | Ubicación | ¿Cuántos modos «ve»? | Eficiencia relativa |
    |---|---|---|
    | **Esquina triedro** (3 paredes) | TODOS los modos (axiales + tangenciales + oblicuos) | **Máxima** (100%) |
    | **Arista** (2 paredes) | Todos los axiales de esos 2 ejes + tangenciales asociados | Alta (~70%) |
    | **Pared plana (centro)** | Solo modos que tienen antinodo en ESE punto específico | Baja (~30%) |

    ### Estrategia de colocación

    1. **Esquinas triedro primero** (donde se juntan 3 superficies: las 4 esquinas del piso y las 4 del techo). Ahí ponés trampas de BANDA ANCHA (superchunks de lana mineral, trampas de membrana de gran superficie).
    2. **Aristas verticales** (esquinas entre paredes, de piso a techo). Trampas de membrana o Helmholtz sintonizados si tenés modos problemáticos específicos que no resolvieron los superchunks.
    3. **Pared trasera** (la que está detrás del oyente, generalmente opuesta a los monitores). Combinación de absorción y difusión: absorción para los modos longitudinales, difusión para romper la reflexión especular sin «matar» la sala.
    4. **Techo** si hay altura suficiente. Los modos verticales (eje z) tienen antinodos en piso y techo.

    !!! tip "La regla del «paseo acústico» antes de comprar trampas"
        Antes de gastar dinero en trampas:
        1. Medí tu sala con REW (barrido de 20-500 Hz, ambos canales).
        2. Identificá los 3-5 picos modales más problemáticos (los de mayor amplitud y menor frecuencia).
        3. Caminá por la sala con un sonómetro reproduciendo un tono en CADA una de esas frecuencias. Mapeá dónde están los antinodos (máximo SPL).
        4. Poné las trampas DONDE LOS ANTINODOS DE ESOS MODOS están más concentrados. No donde «queda lindo». La acústica no es decoración.

???+ note "Acústica variable: salas que cambian de carácter"

    No todas las trampas tienen que ser fijas. La acústica variable (Everest & Pohlmann, 2009, Cap. 15) permite modificar el tiempo de reverberación y la respuesta modal de una sala SEGÚN EL USO.

    ### Métodos de acústica variable

    | Método | ¿Cómo funciona? | Aplicación |
    |---|---|---|
    | **Paneles giratorios** | Una cara es reflectante (madera, yeso), la otra absorbente (tela + lana mineral). Girando el panel 180° cambiás α de ~0.05 a ~0.80 | Salas de ensayo/concierto que necesitan cambiar RT entre formatos |
    | **Cortinas pesadas** | Telas de gran masa superficial (500-1000 g/m²) que se despliegan/recogen. Absorción selectiva en medios/agudos | Salas polivalentes, teatros |
    | **Resonadores sintonizables** | Helmholtz con volumen de cavidad variable (pistón móvil) o cuello de longitud regulable → f₀ ajustable | Estudios donde el RT óptimo depende del género musical |
    | **Difusores rotativos** | Secuencias de pozos que giran para exponer distintas profundidades | Salas de escucha crítica, mastering |

    !!! info "¿Por qué querrías acústica variable?"
        Un estudio de grabación para música clásica necesita RT60 ≈ 1.8-2.2 s (cálido, envolvente). El mismo estudio para grabar batería de rock necesita RT60 ≈ 0.3-0.5 s (seco, controlado, sin emborronamiento). Con acústica variable, AMBOS usos son posibles en el MISMO espacio. No es magia — es ingeniería acústica.

    > Insertar **Fig. 15-1** del Everest: esquema de un sistema de acústica variable con paneles giratorios. Mostrar la diferencia de absorción entre la cara reflectante y la cara absorbente a distintas frecuencias.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 12, pp. 198–241 (Absorption of Sound — Porous Absorbers, Membrane/Panel Absorbers, Helmholtz Resonators). Capítulo 13, pp. 242–275 (Modal Resonances — Room Proportions and Modal Treatment, Corner Absorber Placement). Capítulo 14, pp. 211–230 (Schroeder Diffusers — Perforated Panel Absorbers, Tuned Absorbers). Capítulo 15 (Adjustable Acoustics — Variable Acoustics, Rotating Panels, Adjustable Resonators).*
