# Sesión 12: Diagramas de rayo y reflexión

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="db"></a>**dB** | Decibel | Nivel relativo (escala logarítmica) | \( \text{dB} = 10\log_{10}(P/P_0) \) |
    | <a id="spl"></a>**dB SPL** | Sound Pressure Level | Nivel de presión sonora | Referencia: \(p_0 = 20\ \mu\text{Pa}\) |
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud, distancia | — |
    | <a id="lambda"></a>**λ** (lambda) | Longitud de onda | Distancia por ciclo | λ = c / f |
    | <a id="theta_i"></a>**θᵢ** (theta i) | Ángulo de incidencia | Ángulo entre el rayo incidente y la normal a la superficie | En grados (°) o radianes (rad) |
    | <a id="theta_r"></a>**θᵣ** (theta r) | Ángulo de reflexión | Ángulo entre el rayo reflejado y la normal a la superficie | En grados (°) o radianes (rad) |
    | <a id="c"></a>**c** | Velocidad del sonido | Velocidad de propagación en el medio | ~343 m/s a 20°C |

???+ note "La ley de la reflexión: el sonido rebota como la luz en un espejo"

    ### Reflexión especular

    Cuando una onda sonora incide sobre una superficie plana y rígida (pared, vidrio, concreto, agua), se refleja siguiendo la misma ley geométrica que la luz:

    \[
    \boxed{\theta_i = \theta_r}
    \]

    | Símbolo | Nombre | Significado |
    |---|---|---|
    | \(\theta_i\) | Ángulo de incidencia | Ángulo entre el rayo incidente y la **normal** (línea perpendicular a la superficie en el punto de impacto) |
    | \(\theta_r\) | Ángulo de reflexión | Ángulo entre el rayo reflejado y la normal |
    | Normal | Línea perpendicular a la superficie | Es la referencia para medir ambos ángulos |

    !!! warning "Error común: medir respecto a la superficie"
        Los ángulos de incidencia y reflexión NO se miden respecto a la superficie (pared), sino respecto a la NORMAL (línea perpendicular a la superficie). Si un rayo llega perpendicular a una pared, θᵢ = 0° (no 90°). Si llega «casi paralelo» a la pared, θᵢ ≈ 90°.

    ### Condiciones para reflexión especular

    La reflexión especular («de espejo») ocurre cuando la superficie es **grande comparada con la longitud de onda**:

    \[
    \boxed{\text{Superficie} \gg \lambda \implies \text{Reflexión especular}}
    \]

    | Condición | ¿Qué pasa? | Ejemplo |
    |---|---|---|
    | Superficie grande vs. λ (pared de concreto, λ = 10 cm a 3.4 kHz) | Reflexión especular: el sonido rebota como un rayo, en un solo ángulo definido | Una pared de 3 m × 2.5 m refleja frecuencias > 100 Hz de forma especular |
    | Superficie pequeña vs. λ (objeto del tamaño de una pelota, λ = 1.7 m a 200 Hz) | **Dispersión** o **difracción**: el sonido se «esparce» en muchas direcciones, no en una sola | Un poste de 10 cm dispersa un sonido grave de 100 Hz (λ = 3.4 m) |
    | Superficie rugosa (irregularidades comparables a λ) | **Reflexión difusa**: el sonido se refleja en múltiples direcciones, no en una sola | Una pared de ladrillo visto o una superficie con paneles difusores |

    > Insertar **Fig. 6-1** del Everest: ley de reflexión — diagrama mostrando el rayo incidente, el rayo reflejado, la normal a la superficie, y los ángulos θᵢ = θᵣ. Incluir también un ejemplo con varios rayos incidiendo en distintos ángulos para mostrar la simetría.

    > Insertar **Fig. 6-3** del Everest: reflexión especular vs. difusa — una superficie plana lisa produce un único rayo reflejado (especular); una superficie rugosa dispersa la energía en múltiples direcciones (difusa).

???+ note "Diagramas de rayos: trayectorias sonoras en un espacio"

    Un **diagrama de rayos** (*ray diagram*) es una representación geométrica donde el sonido se modela como rayos rectilíneos que viajan desde la fuente y se reflejan en las superficies. Es una herramienta fundamental para predecir trayectorias sonoras en recintos y exteriores.

    ### ¿Por qué modelar el sonido como rayos?

    El modelo de rayos es válido cuando la longitud de onda es mucho menor que las dimensiones de los objetos y superficies del entorno (λ ≪ dimensiones del espacio). Esto equivale a decir que funciona para frecuencias medias y altas (> 500 Hz en una sala típica). A frecuencias bajas (graves), el comportamiento ondulatorio (difracción, modos) domina y el modelo de rayos pierde precisión.

    | Frecuencia | λ (a 20°C) | ¿Modelo de rayos funciona? | ¿Por qué? |
    |---|---|---|---|
    | 100 Hz | 3.43 m | ❌ No fiable | λ es comparable al tamaño de una sala — el sonido se comporta como onda, no como rayo |
    | 500 Hz | 0.69 m | ⚠️ Transición | Empieza a ser válido en salas grandes |
    | 1 kHz | 0.34 m | ✅ Válido | λ es pequeña comparada con paredes, suelo, techo |
    | 4 kHz | 0.086 m (8.6 cm) | ✅ Muy preciso | λ es minúscula — el sonido se comporta casi como luz |

    ### Construcción de un diagrama de rayos

    Para trazar la trayectoria de un rayo sonoro desde una fuente S hasta un receptor R con una reflexión en una pared:

    1. **Identificá la superficie reflectante** (pared, suelo, techo, fachada).
    2. **Aplicá la ley de reflexión**: θᵢ = θᵣ respecto a la normal.
    3. **Trazá el camino completo**: S → punto de impacto en la superficie → R.
    4. **Medí la distancia total** del camino reflejado: \(d_{\text{reflejado}} = d_1 + d_2\).
    5. **Compará con el camino directo**: \(d_{\text{directo}}\) (línea recta S → R).

    La diferencia de camino \(\Delta d = d_{\text{reflejado}} - d_{\text{directo}}\) determina el retardo temporal de la reflexión respecto al sonido directo:

    \[
    \boxed{\Delta t = \frac{\Delta d}{c}}
    \]

    | Símbolo | Nombre | Significado |
    |---|---|---|
    | \(\Delta d\) | Diferencia de camino | Diferencia entre la distancia del camino reflejado y la del camino directo, en metros |
    | \(\Delta t\) | Retardo temporal | Tiempo que tarda el sonido reflejado en llegar DESPUÉS del sonido directo, en segundos |
    | \(c\) | Velocidad del sonido | ~343 m/s a 20°C |
    | \(d_1\) | Distancia fuente → punto de reflexión | En metros |
    | \(d_2\) | Distancia punto de reflexión → receptor | En metros |

    ### El método de la imagen (*image method*)

    Existe un truco geométrico para trazar reflexiones sin medir ángulos: el **método de la fuente imagen**.

    1. Reflejá la fuente S respecto a la superficie reflectante, como si fuera un espejo. Llamá S' a esa fuente «imagen».
    2. Trazá una línea recta desde S' hasta el receptor R.
    3. Donde esa línea cruza la superficie reflectante, está el punto de impacto real.
    4. La distancia S' → R es exactamente igual a la distancia total del camino reflejado S → punto de impacto → R.

    | Paso | Acción | Ventaja |
    |---|---|---|
    | 1 | Reflejar S simétricamente respecto a la pared → S' | Elimina la necesidad de resolver θᵢ = θᵣ gráficamente |
    | 2 | Unir S' con R con línea recta | La intersección con la pared da el punto de impacto exacto |
    | 3 | Medir S' → R | Esa distancia ES la longitud del camino reflejado |

    !!! tip "El método de la imagen para varias reflexiones"
        Para reflexiones de segundo orden (el sonido rebota en DOS paredes antes de llegar al receptor), reflejás la fuente imagen a su vez respecto a la segunda pared. Para N reflexiones, creás una fuente imagen de orden N. Los estudios de grabación y salas de concierto usan este método computacionalmente para predecir todas las reflexiones tempranas.

    ### Aplicación: trazado de reflexiones tempranas en un cuarto de control

    En un cuarto de control de estudio de grabación, las **primeras reflexiones** (las que llegan dentro de los primeros 20-30 ms después del sonido directo) son críticas porque el oído las integra con el sonido directo y colorean la percepción. Trazar estas reflexiones permite identificar qué superficies necesitan tratamiento absorbente.

    > Insertar **Fig. 6-4** del Everest: diagrama de rayos en una sala de control — fuente (monitor de estudio), receptor (posición del ingeniero), y los rayos reflejados de primer orden en paredes laterales, techo, suelo y pared trasera. Cada rayo se traza con el método de la imagen.

    | Superficie | Distancia típica del camino reflejado | Δt aproximado | ¿Problemática? |
    |---|---|---|---|
    | Paredes laterales | 2-3 m más que el directo | 6-9 ms | **Sí** — las más críticas, ensanchan la imagen estéreo |
    | Techo | 1.5-2.5 m más que el directo | 4-7 ms | **Sí** — produce coloración en medios-agudos |
    | Pared trasera | 3-5 m más que el directo | 9-15 ms | Depende: si >20 ms puede ser beneficio (sensación de amplitud) |
    | Consola/escritorio | 0.5-1 m más que el directo | 1.5-3 ms | **Muy problemática** — filtro comb en agudos |

???+ note "Reflexión en exteriores: fachadas, barreras y superficies naturales"

    En exteriores, la reflexión en superficies grandes modifica significativamente el nivel sonoro que llega a un receptor. Una fuente cercana a una fachada reflectante puede aumentar el SPL en el receptor por la suma coherente del camino directo y el reflejado.

    ### Reflexión en una fachada plana

    Cuando una fuente está frente a una fachada reflectante (edificio, muro, talud), el receptor recibe dos contribuciones: el sonido directo y el reflejado en la fachada. Si la fachada es perfectamente reflectante y las distancias son comparables, el refuerzo puede ser de hasta **+3 dB** (duplicación de presión por suma coherente).

    En exteriores, la situación más común es una fuente sonora (parlante de PA, escenario) con una fachada detrás o un muro de contención. El modelo de la fuente imagen permite calcular el nivel resultante:

    \[
    \boxed{L_p = L_W + 10\log_{10}\left(\frac{Q}{4\pi r^2}\right) - \alpha \cdot r \quad[\text{dB}]}
    \]

    Donde \(Q\) (factor de directividad) incluye el efecto de las superficies reflectantes cercanas a la fuente:

    | Posición de la fuente | Q | Δ SPL respecto a fuente en espacio libre |
    |---|---|---|
    | Espacio libre (sin superficies cerca) | 1 | 0 dB (referencia) |
    | Sobre un plano reflectante (suelo) | 2 | +3 dB |
    | Junto a dos planos (suelo + pared) | 4 | +6 dB |
    | En una esquina (suelo + dos paredes) | 8 | +9 dB |

    !!! info "Esto ya lo viste en la Sesión 8 — ahora con diagramas de rayos"
        El factor Q que estudiaste en tipos de fuentes (Sesión 8) es exactamente el mismo concepto, pero ahora podés TRAZAR los rayos para entender POR QUÉ una fuente en el suelo irradia el doble de energía hacia el hemiespacio superior: el rayo que iría hacia abajo se refleja en el suelo y se suma al que va hacia arriba.

    ### Diagrama de rayos para un escenario exterior con fachada

    > Insertar **Fig. 8-3** del Everest (contexto de exteriores): perfil de un escenario exterior con una fuente puntual, el suelo reflectante, una fachada posterior y un receptor a distancia. Trazar al menos los siguientes rayos:
    > 1. Rayo directo: fuente → receptor.
    > 2. Reflexión en el suelo: fuente → suelo → receptor.
    > 3. Reflexión en la fachada trasera: fuente → fachada → receptor.
    > 4. Doble reflexión: fuente → fachada → suelo → receptor.

    Cada rayo reflejado se puede modelar con el método de la fuente imagen correspondiente (S' en el suelo, S'' en la fachada, S''' en ambas).

???+ note "Reflexión, absorción y el coeficiente de reflexión"

    No toda la energía que incide en una superficie se refleja. Una parte se **absorbe** (se convierte en calor dentro del material) y otra se **transmite** (atraviesa la superficie hacia el otro lado). El **coeficiente de reflexión** \(R\) cuantifica qué fracción de la presión sonora incidente se refleja:

    \[
    \boxed{R = \frac{p_r}{p_i}}
    \]

    | Símbolo | Nombre | Significado |
    |---|---|---|
    | \(R\) | Coeficiente de reflexión en presión | Varía entre 0 (absorción total) y 1 (reflexión total) — adimensional |
    | \(p_i\) | Presión sonora incidente | Amplitud de la onda que llega a la superficie [Pa] |
    | \(p_r\) | Presión sonora reflejada | Amplitud de la onda que se refleja [Pa] |

    En la práctica, el coeficiente de absorción α (que veremos en detalle en la Unidad 3) está relacionado con R:

    \[
    \alpha = 1 - |R|^2
    \]

    | Material | R (aprox. a 1 kHz) | α (aprox. a 1 kHz) | ¿Cómo suena la reflexión? |
    |---|---|---|---|
    | Concreto pintado | ~0.98 | ~0.04 | Reflexión casi total — como un espejo acústico |
    | Vidrio | ~0.97 | ~0.06 | Muy reflectante |
    | Madera (panel) | ~0.85 | ~0.28 | Reflexión con algo de absorción |
    | Cortina pesada | ~0.60 | ~0.64 | Reflexión atenuada — los agudos se absorben más que los graves |
    | Espuma acústica (5 cm) | ~0.20 | ~0.96 | Casi sin reflexión a frecuencias medias-altas |

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 6, pp. 79–95 (Reflection — Specular Reflection, Ray Diagrams, Image Method, Reflection Coefficients) y Capítulo 8, pp. 105–115 (Refraction and Outdoor Ray Tracing).*
