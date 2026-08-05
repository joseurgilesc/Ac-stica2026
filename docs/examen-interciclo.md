# Examen Interciclo

**Sesión 16 | 🔴 Examen | 25% de la nota final**

---

??? info "Unidades y símbolos (glosario de referencia)"

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="db"></a>**dB** | Decibel | Nivel de presión sonora | Escala logarítmica |
    | <a id="spl"></a>**SPL** | Sound Pressure Level | Nivel de presión sonora | SPL = 20 log(p/p₀) |
    | <a id="lambda"></a>**λ** | Longitud de onda | Distancia por ciclo | λ = v/f |
    | <a id="v"></a>**v** | Velocidad del sonido | Rapidez de propagación | ~344 m/s en aire |
    | <a id="q"></a>**Q** | Factor de directividad | Concentración del sonido | Q = 1 (omnidireccional) |
    | <a id="di"></a>**DI** | Índice de directividad | Directividad en dB | DI = 10 log(Q) |
    | <a id="doppler"></a>**Doppler** | Efecto Doppler | Cambio de frecuencia por movimiento | f' = f·(v±vₒ)/(v∓vₛ) |
    | <a id="il"></a>**IL** | Insertion Loss | Atenuación de barrera | IL = f(N, geometría) |

---

???+ note "Cobertura del examen"

    **Unidad 1 — Fundamentos del sonido y medición**
    
    - Naturaleza ondulatoria del sonido: compresión y rarefacción
    - Movimiento armónico simple y onda sinusoidal: \(y(t) = A \sin(2\pi f t + \phi)\)
    - Velocidad de propagación: \(v \approx 344\text{ m/s}\), dependencia con temperatura y medio
    - Señales periódicas y aperiódicas: Fourier, armónicos, espectro, ruido
    - Logaritmos y decibeles: \(L = 10\log(I/I_0)\), \(L_p = 20\log(p/p_0)\)
    - Nivel de presión sonora (SPL): medición con sonómetro, ponderación A/C/Z
    - Suma y resta de niveles: suma incoherente, corrección por ∆L

    **Unidad 2 — Propagación del sonido en exteriores**
    
    - Tipos de fuentes sonoras: puntual, lineal, plana
    - Campo libre y divergencia esférica: −6 dB al duplicar distancia
    - Absorción atmosférica: dependencia con f², humedad y temperatura
    - Efecto del suelo, temperatura y viento: refracción, sombra acústica
    - Reflexión: ley θᵢ = θᵣ, método de la imagen
    - Diagramas de rayo: trazado de reflexiones, zonas de cobertura
    - Difracción: principio de Huygens, barreras, número de Fresnel
    - Efecto Doppler: fuentes y receptores en movimiento

    > **Referencia**: Everest & Pohlmann (2009), Capítulos 1–8.

???+ note "Estructura del examen (100 pts)"

    ### Parte conceptual — 25 pts (25%)

    Definiciones, identificación y relación de conceptos. 10 preguntas de opción múltiple o respuesta breve sobre:
    
    - Parámetros de una onda (A, f, λ, T, φ)
    - Tipos de fuentes y su divergencia
    - Mecanismos de propagación exterior (reflexión, difracción, refracción)
    - Efecto Doppler cualitativo

    ### Parte de cálculo — 25 pts (25%)

    4 ejercicios con desarrollo completo:

    1. **Conversión dB**: dada una presión de 0.2 Pa, calcular SPL. \(p_0 = 20\ \mu\text{Pa}\)
    2. **Suma de niveles**: dos fuentes de 85 dB y 88 dB. Calcular nivel combinado.
    3. **Atenuación con distancia**: fuente puntual de 100 dB SPL a 1 m. Calcular nivel a 16 m en campo libre.
    4. **Longitud de onda**: calcular λ para 250 Hz y 4 kHz. ¿Cruza cada una un obstáculo de 1 m?

    ### Parte gráfica — 25 pts (25%)

    2 ejercicios:
    
    1. Trazar un **diagrama de rayos** para una fuente frente a una pared reflectante — identificar sonido directo, primera reflexión y zona de interferencia.
    2. Interpretar un **patrón polar** — determinar Q, DI y ángulo de cobertura (−6 dB).

    ### Parte aplicada — 25 pts (25%)

    1 caso integrador:

    > Un festival al aire libre tiene un escenario a 50 m de las últimas filas. El viento sopla a 5 m/s desde el escenario hacia el público. Hay un edificio de 8 m de altura a 20 m a la izquierda del escenario. La temperatura es de 15°C y la humedad relativa del 40%.
    >
    > a) Calcular la atenuación por distancia a 50 m para 500 Hz y 4 kHz.  
    > b) Estimar la atenuación atmosférica adicional para 4 kHz.  
    > c) ¿El viento ayuda o perjudica? Explicar con refracción.  
    > d) ¿El edificio genera sombra acústica en las últimas filas? Calcular δ y N de Fresnel.  
    > e) Si una ambulancia pasa a 30 m/s con sirena de 800 Hz, ¿qué frecuencia escucha el público?

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulos 1–8.*
