# Examen Final

**Sesión 32 | 🔴 Examen | 25% de la nota final**

---

??? info "Unidades y símbolos (glosario de referencia)"

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="rt60"></a>**RT₆₀** | Tiempo de reverberación | Decaimiento de 60 dB | Sabine: RT = 0.161V/A |
    | <a id="alpha"></a>**α** | Coeficiente de absorción | Fracción de energía absorbida | 0 ≤ α ≤ 1 |
    | <a id="nrc"></a>**NRC** | Noise Reduction Coefficient | Promedio de α (250-2k Hz) | NRC = Σα/4 |
    | <a id="a"></a>**A** | Absorción total | m² (o sabins) | A = Σ(αᵢ·Sᵢ) |
    | <a id="dc"></a>**Dc** | Distancia crítica | m | Dc = 0.141√(Q·A) |
    | <a id="tl"></a>**TL** | Transmission Loss | Aislamiento en dB | TL = 20log(m·f) − 47 |
    | <a id="stc"></a>**STC** | Sound Transmission Class | Aislamiento (un solo número) | Curva STC vs. TL |
    | <a id="mam"></a>**MAM** | Mass-Air-Mass | Sistema masa-resorte-masa | f₀ = 60/√(m·d) |
    | <a id="nc"></a>**NC/NR** | Noise Criteria / Noise Rating | Criterio de ruido de fondo | Curvas por uso de espacio |
    | <a id="sti"></a>**STI** | Speech Transmission Index | Inteligibilidad del habla | 0 (ininteligible) a 1 (perfecto) |

---

???+ note "Cobertura del examen"

    **Unidad 3 — Sonido en interiores y acondicionamiento acústico**
    
    - Balance energético en interiores: absorción, reflexión, transmisión
    - Coeficiente de absorción α por material y frecuencia, NRC
    - Absorción total: \(A = \Sigma(\alpha_i \cdot S_i)\) en m²
    - Reverberación: eco vs. reverberación, curvas de decaimiento
    - Fórmulas de RT₆₀: Sabine, Eyring, Fitzroy
    - Reflexiones tempranas: efecto Haas, zona libre de reflexiones (RFZ)
    - Campo directo, campo reverberante, distancia crítica Dc
    - Interferencia y ondas estacionarias: comb filter, fase vs. polaridad
    - Modos de sala: axial, tangencial, oblicuo; fórmula 3D
    - Tratamiento de bajas frecuencias: porosos, membrana, Helmholtz, ubicación
    - Difusión acústica: QRD, PRD, coeficiente de difusión, d_mín

    **Unidad 4 — Aislamiento acústico y diseño de espacios**
    
    - Ruido de fondo: curvas NC/NR/RC, fuentes, criterios por uso
    - Transmisión de sonido: TL, ley de la masa, STC, flanqueo
    - Estructuras compuestas: MAM, f₀, desacoplamiento, pared doble vs. simple
    - Privacidad del habla: STI, RASTI, STIPA, índice de articulación
    - HVAC: fuente-trayectoria-receptor, atenuadores, vibro-aislamiento
    - Diseño integrado: checklist de 6 pasos para estudios/control rooms

    > **Referencia**: Everest & Pohlmann (2009), Capítulos 9–22.

???+ note "Estructura del examen (100 pts)"

    ### Parte conceptual — 25 pts (25%)

    10 preguntas de opción múltiple o respuesta breve:
    
    - Diferenciar absorción vs. aislamiento acústico
    - Identificar materiales absorbentes vs. reflectantes
    - Relacionar RT₆₀ con el uso del espacio (estudio vs. iglesia)
    - Modos de sala: ¿por qué los graves son problemáticos en recintos pequeños?
    - ¿Qué mide el STC y por qué no es suficiente?

    ### Parte de cálculo — 25 pts (25%)

    4 ejercicios con desarrollo completo:

    1. **RT₆₀ por Sabine**: sala de 6×4×3 m, calcular RT₆₀ en 500 Hz con áreas y α dados.
    2. **Distancia crítica**: dado Q=2 y A=50 m², calcular Dc. ¿Dónde ubicar el micrófono?
    3. **Modos axiales**: sala de 5×4×3 m. Calcular los primeros 5 modos axiales.
    4. **TL y STC**: pared de concreto 15 cm (m=360 kg/m²). Calcular TL a 500 Hz.

    ### Parte gráfica — 25 pts (25%)

    2 ejercicios:
    
    1. Interpretar una **curva de decaimiento**: identificar RT₆₀ (T20, T30, EDT), evaluar si es lineal.
    2. Dibujar un **detalle constructivo** de pared doble con desacoplamiento: identificar masa-resorte-masa, puentes acústicos, material absorbente en cavidad.

    ### Parte aplicada — 25 pts (25%)

    1 caso integrador:

    > Un músico quiere convertir una habitación de 5×4×2.8 m (paredes de bloque, piso de cerámica, techo de concreto) en un home studio. La habitación da a una calle con tráfico (NC-45). El RT₆₀ actual es de 1.8 s en 500 Hz y hay un zumbido fuerte en 70 Hz.
    >
    > a) Proponer un RT₆₀ objetivo por bandas (125 Hz – 4 kHz) para producción musical.  
    > b) Calcular la absorción total necesaria (Sabine) para alcanzar el objetivo.  
    > c) Explicar el origen probable del zumbido a 70 Hz. Proponer tratamiento.  
    > d) Diseñar una estrategia de aislamiento para reducir el ruido de tráfico en al menos 15 dB.  
    > e) Dibujar un plano conceptual con ubicación de monitores, posición de mezcla (Dc), tratamiento absorbente y trampas de graves.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulos 9–22.*
