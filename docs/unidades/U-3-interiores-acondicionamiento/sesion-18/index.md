# Sesión 18: Coeficiente de absorción

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud | — |
    | <a id="m2"></a>**m²** | Metro cuadrado | Superficie, área | — |
    | <a id="m3"></a>**m³** | Metro cúbico | Volumen | — |
    | <a id="alpha"></a>**α** (alfa) | Coeficiente de absorción | Fracción de energía absorbida por una superficie | 0 (nula absorción) a 1 (absorción total) |
    | <a id="s"></a>**S** | Superficie | Área de un material en el recinto | En m² |
    | <a id="a"></a>**A** | Absorción total | Suma de absorción de todas las superficies | En m² métricos o sabins |
    | <a id="sabin"></a>**sabin** | Sabin (métrico) | Unidad de absorción equivalente a 1 m² de ventana abierta | 1 sabin = 1 m² con α = 1 |
    | <a id="nrc"></a>**NRC** | Noise Reduction Coefficient | Promedio simple de α en 4 bandas | NRC = (α₂₅₀ + α₅₀₀ + α₁₀₀₀ + α₂₀₀₀) / 4 |
    | <a id="freq"></a>**Hz bandas** | Bandas de octava | Frecuencias estándar para medir α | 125, 250, 500, 1k, 2k, 4k Hz |

???+ note "¿Qué es el coeficiente de absorción α?"

    En la sesión anterior vimos que cuando el sonido incide sobre una superficie, parte de la energía se absorbe. El **coeficiente de absorción α** cuantifica exactamente QUÉ fracción (Everest & Pohlmann, 2009, Cap. 12):

    \[
    \boxed{\alpha = \frac{E_{\text{absorbida}}}{E_{\text{incidente}}}}
    \]

    | α | Significado | Ejemplo típico |
    |---|---|---|
    | 0.00 | Absorción nula — toda la energía se refleja | Superficie teóricamente perfecta (no existe en la práctica) |
    | 0.01 – 0.05 | Absorción muy baja — la superficie es casi un espejo acústico | Concreto pintado, vidrio, mármol pulido, cerámica |
    | 0.10 – 0.30 | Absorción baja a moderada | Madera, paneles de yeso, piso de vinilo sobre concreto |
    | 0.40 – 0.70 | Absorción moderada a alta | Cortina gruesa plegada, alfombra sobre fieltro, paneles acústicos de espuma (50 mm) |
    | 0.70 – 0.95 | Absorción alta | Lana mineral (100 mm), fibra de vidrio densa, paneles perforados con cámara de aire |
    | 1.00 | Absorción total — «ventana abierta» | Una abertura al exterior: el sonido sale y no vuelve |

    !!! warning "α > 1 en tablas NO es un error"
        En algunas tablas de laboratorio podés encontrar α > 1 (ej. α = 1.15). Esto NO significa que el material «absorbe más del 100%». Ocurre por el método de medición en cámara reverberante: el material colocado en el piso expone más área que solo su superficie geométrica (efectos de borde, difracción). Para cálculos de ingeniería, se trunca a α ≤ 1.

???+ note "α depende de la frecuencia — y MUCHO"

    El coeficiente de absorción NO es un número fijo para un material. Varía enormemente con la frecuencia. Un mismo material puede ser casi un espejo a 125 Hz y una esponja a 4 kHz.

    > Insertar **Fig. 12-1** del Everest: gráfico de barras o tabla mostrando α para 4–6 materiales comunes (concreto, madera, cortina, alfombra, lana mineral, panel acústico) en las bandas de octava 125 Hz a 4 kHz. El eje Y muestra α de 0 a 1; cada material tiene una curva (o barras agrupadas) muy diferente según la frecuencia.

    ### Tabla de α típicos por material y frecuencia

    | Material | 125 Hz | 250 Hz | 500 Hz | 1 kHz | 2 kHz | 4 kHz |
    |---|---|---|---|---|---|---|
    | Concreto pintado | 0.01 | 0.01 | 0.02 | 0.02 | 0.03 | 0.03 |
    | Vidrio (ventana) | 0.10 | 0.06 | 0.04 | 0.03 | 0.02 | 0.02 |
    | Pared de yeso (drywall) | 0.15 | 0.10 | 0.06 | 0.05 | 0.04 | 0.04 |
    | Madera (piso de parqué) | 0.10 | 0.08 | 0.06 | 0.06 | 0.06 | 0.06 |
    | Alfombra fina sobre concreto | 0.02 | 0.06 | 0.14 | 0.37 | 0.60 | 0.65 |
    | Alfombra gruesa sobre fieltro | 0.08 | 0.24 | 0.57 | 0.69 | 0.71 | 0.73 |
    | Cortina liviana (estirada) | 0.04 | 0.07 | 0.13 | 0.21 | 0.32 | 0.40 |
    | Cortina pesada (plegada al 100%) | 0.14 | 0.35 | 0.55 | 0.72 | 0.70 | 0.65 |
    | Espuma acústica (25 mm) | 0.05 | 0.10 | 0.25 | 0.50 | 0.70 | 0.80 |
    | Espuma acústica (50 mm) | 0.08 | 0.20 | 0.55 | 0.80 | 0.90 | 0.95 |
    | Espuma acústica (100 mm) | 0.15 | 0.35 | 0.70 | 0.90 | 0.95 | 0.99 |
    | Lana mineral (50 mm, 48 kg/m³) | 0.15 | 0.35 | 0.75 | 0.95 | 0.95 | 0.95 |
    | Lana mineral (100 mm, 48 kg/m³) | 0.35 | 0.65 | 0.95 | 0.99 | 0.99 | 0.99 |
    | Panel perforado (13% perf., 50 mm lana) | 0.20 | 0.55 | 0.90 | 0.80 | 0.55 | 0.35 |
    | Persona (de pie, aprox.) | 0.20 | 0.35 | 0.42 | 0.46 | 0.50 | 0.50 |
    | Butaca tapizada (ocupada ≈ persona) | 0.40 | 0.50 | 0.60 | 0.70 | 0.75 | 0.75 |

    !!! tip "Lectura de la tabla: la historia que cuentan los números"
        - **Concreto, vidrio, madera**: α casi plano y bajo en todo el espectro. Son reflectores «democráticos» — reflejan todas las frecuencias por igual (≈ espejo acústico).
        - **Materiales porosos (espuma, lana mineral, alfombra, cortina)**: α BAJO en graves, ALTO en agudos. La absorción crece con la frecuencia. Por eso un cuarto tratado solo con espuma fina suena «apagado» en agudos pero «retumba» en graves.
        - **Panel perforado**: α tiene un PICO en frecuencias medias y luego BAJA. Es un **resonador**: tiene una frecuencia de máxima absorción y pierde efectividad lejos de ella. Ideal para atacar problemas en bandas específicas.
        - **Cuanto más grueso el material poroso**, mejor absorbe los graves (comparar espuma 25 mm vs. 100 mm en 125 Hz: 0.05 → 0.15).

    > Insertar **Fig. 12-3** del Everest: gráfico de coeficientes de absorción por frecuencia para varios materiales, mostrando las curvas ascendentes de los materiales porosos y el pico resonante de los paneles perforados.

    [🎛️ **Abrir simulación interactiva — 100 partículas sonoras**](../../../simulacion/absorcion.html){ .md-button }

    Elige un material y una frecuencia. Observa cuántas partículas se absorben (α×100), calcula A = α×S y compara la curva de α por bandas entre dos materiales.

???+ note "Absorción total de un recinto: A = Σ αᵢ · Sᵢ"

    Conocer α de cada material no alcanza. Lo que importa es la **absorción total** del recinto, que combina el coeficiente de CADA superficie con su ÁREA. Una pared enorme de concreto (α ≈ 0.02) puede aportar más absorción total que un panel pequeño de lana mineral (α ≈ 0.90).

    \[
    \boxed{A = \sum_{i=1}^{n} \alpha_i \cdot S_i = \alpha_1 S_1 + \alpha_2 S_2 + \dots + \alpha_n S_n}
    \]

    | Símbolo | Nombre | Unidad | Significado |
    |---|---|---|---|
    | \(A\) | Absorción total del recinto | m² (o sabins métricos) | Suma ponderada de todas las superficies |
    | \(\alpha_i\) | Coeficiente de absorción del material \(i\) | Adimensional (0 a 1) | Depende de la frecuencia — ¡hay que calcular A para cada banda! |
    | \(S_i\) | Área del material \(i\) | m² | La superficie real cubierta por ese material |
    | \(n\) | Número de superficies distintas | — | Cada pared, piso, techo, ventana, mueble cuenta por separado |

    ### Ejemplo de cálculo

    Una cabina vocal de 2 m × 2 m × 2.5 m tiene:

    | Superficie | Material | S (m²) | α₅₀₀ Hz | A₅₀₀ = α · S |
    |---|---|---|---|---|
    | Pared frontal | Espuma 50 mm | 5.0 | 0.55 | 2.75 |
    | Pared trasera | Espuma 50 mm | 5.0 | 0.55 | 2.75 |
    | Pared izq. | Espuma 50 mm | 5.0 | 0.55 | 2.75 |
    | Pared der. | Espuma 50 mm | 5.0 | 0.55 | 2.75 |
    | Piso | Alfombra gruesa | 4.0 | 0.57 | 2.28 |
    | Techo | Concreto pintado | 4.0 | 0.02 | 0.08 |
    | Puerta (madera maciza) | Madera | 2.0 | 0.06 | 0.12 |
    | **Absorción total A₅₀₀** | | | | **13.48 m²** |

    El área total de superficies de la cabina es: 2×(2×2.5 + 2×2.5 + 2×2) = 2×(5 + 5 + 4) = 28 m². Con A = 13.48 m² a 500 Hz, el **α promedio** del recinto es A / S_total = 13.48 / 28 ≈ **0.48**.

    ---
    **Interpretación**: esta cabina es bastante «seca» a 500 Hz (~48% de absorción promedio). Pero el techo de concreto (α = 0.02) es un reflector fuerte que baja el promedio y puede crear un *flutter echo* vertical. Colocar un panel absorbente en el techo mejoraría considerablemente la respuesta.

???+ note "NRC: el promedio que usan los fabricantes (y sus limitaciones)"

    El **Noise Reduction Coefficient (NRC)** es un número ÚNICO que los fabricantes publican para simplificar la comparación entre materiales:

    \[
    \boxed{\text{NRC} = \frac{\alpha_{250} + \alpha_{500} + \alpha_{1000} + \alpha_{2000}}{4}}
    \]

    | Característica | Detalle |
    |---|---|
    | **Bandas incluidas** | 250, 500, 1000, 2000 Hz (las frecuencias del habla) |
    | **Bandas EXCLUIDAS** | 125 Hz (graves) y 4000 Hz (agudos extremos) |
    | **Redondeo** | Se redondea a múltiplos de 0.05 |
    | **Interpretación** | NRC = 0.70 significa «en promedio, el material absorbe el 70% de la energía en las frecuencias del habla» |

    ### Ejemplos de NRC

    | Material | NRC |
    |---|---|
    | Concreto pintado | 0.00 – 0.05 |
    | Madera | 0.05 – 0.10 |
    | Drywall (paneles de yeso) | 0.05 |
    | Alfombra fina | 0.20 – 0.30 |
    | Cortina pesada plegada | 0.55 – 0.60 |
    | Espuma acústica 25 mm | 0.30 – 0.40 |
    | Espuma acústica 50 mm | 0.65 – 0.75 |
    | Lana mineral 50 mm | 0.75 – 0.85 |
    | Panel perforado + lana | 0.65 – 0.85 |
    | Fibra de vidrio 100 mm | 0.90 – 1.00 |

    !!! danger "La GRAN limitación del NRC"
        Dos materiales con el MISMO NRC pueden sonar COMPLETAMENTE distintos. Ejemplo:

        | Material | α₁₂₅ | α₂₅₀ | α₅₀₀ | α₁₀₀₀ | α₂₀₀₀ | NRC |
        |---|---|---|---|---|---|---|
        | **Espuma 50 mm** | 0.08 | 0.20 | 0.55 | 0.80 | 0.90 | **0.61** |
        | **Panel perforado sintonizado** | 0.20 | 0.55 | 0.90 | 0.80 | 0.55 | **0.70** |

        Ambos tienen NRC similar (~0.65), PERO:
        - La **espuma** es débil en graves (α₁₂₅ = 0.08) y fuerte en agudos (α₂₀₀₀ = 0.90). Tiende a «apagar» los agudos.
        - El **panel perforado** tiene un pico resonante en medios (α₅₀₀ = 0.90) y absorbe MENOS en agudos (α₂₀₀₀ = 0.55). Ideal para controlar frecuencias medias sin matar el «brillo» de la sala.

        **Conclusión**: el NRC es útil para una comparación RÁPIDA, pero NUNCA debe reemplazar la tabla completa de α por banda de frecuencia cuando estás diseñando un tratamiento acústico real.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 12, pp. 198–241 (Absorption — Absorption Coefficients, NRC, Materials, Porous Absorbers, Panel Absorbers, Acoustical Tile).*
