# Sesión 15: Integración de fundamentos y propagación exterior

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia / Significado |
    |---|---|---|---|
    | <a id="db"></a>**dB** | Decibel | Nivel relativo (escala logarítmica) | \( \text{dB} = 10\log_{10}(P/P_0) \) |
    | <a id="spl"></a>**dB SPL** | Sound Pressure Level | Nivel de presión sonora | Referencia: \(p_0 = 20\ \mu\text{Pa}\) |
    | <a id="swl"></a>**dB SWL** | Sound Power Level | Potencia sonora radiada | Referencia: \(10^{-12}\) W |
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud, distancia | — |
    | <a id="ms"></a>**m/s** | Metro por segundo | Velocidad | — |
    | <a id="s"></a>**s** | Segundo | Tiempo | — |
    | <a id="c"></a>**c** | Velocidad del sonido | Rapidez de propagación en el medio | ~343 m/s a 20°C |
    | <a id="lambda"></a>**λ** (lambda) | Longitud de onda | Distancia por ciclo | λ = c / f |
    | <a id="f"></a>**f** | Frecuencia | Ciclos por segundo | f = 1 / T |
    | <a id="T"></a>**T** | Período | Duración de un ciclo | T = 1 / f |
    | <a id="Q"></a>**Q** | Factor de directividad | Concentración de energía en una dirección | Q = 1 (esfera), 2 (semiesfera), 4 (cuarto), 8 (octante) |
    | <a id="DI"></a>**DI** | Directivity Index | Directividad en dB | DI = 10·log₁₀(Q) |
    | <a id="r"></a>**r** | Distancia | Distancia fuente-receptor | En m. Usada en ley del inverso del cuadrado |
    | <a id="IL"></a>**IL** | Insertion Loss | Atenuación por barrera | IL = SPL (sin barrera) − SPL (con barrera) [dB] |
    | <a id="N"></a>**N** | Número de Fresnel | Relación entre diferencia de camino y λ | N = 2δ/λ |
    | <a id="vs"></a>**v_s** | Velocidad de la fuente | Magnitud de la velocidad de la fuente | En m/s. Usada en fórmula Doppler |
    | <a id="f_prime"></a>**f'** | Frecuencia percibida | Frecuencia que escucha el receptor en movimiento Doppler | En Hz. f' > f₀ al acercarse |

???+ note "Mapa conceptual: de la vibración a la propagación exterior"

    ### El hilo conductor U1 → U2

    La acústica no es una colección de fórmulas sueltas: cada concepto construye sobre el anterior. El siguiente mapa muestra cómo se conectan los temas de las Unidades 1 y 2:

    ```
    U1 — FUNDAMENTOS                          U2 — PROPAGACIÓN EXTERIOR
    ═══════════════                          ═══════════════════════════
    ┌─────────────────┐                      
    │ 1. Vibración    │  Partícula oscila  
    │    MAS, λ, f, T │  con amplitud A   
    └────────┬────────┘  y frecuencia f    
             │                               
             ▼                               
    ┌─────────────────┐                      
    │ 2. Onda sonora  │  Compresión/       
    │    c ~ 343 m/s  │  rarefacción       
    │    λ = c/f      │  en el aire        
    └────────┬────────┘                      
             │                               
             ▼                               
    ┌─────────────────┐                      
    │ 3. Medición     │  ¿Cómo medimos?    
    │    dB SPL, SIL, │  p₀ = 20 µPa      
    │    SWL (log)    │  Escala logarítmica
    │    Suma dB      │  L_total fórm. gral.│
    └────────┬────────┘                      
             │                               
             ▼                               
    ┌─────────────────┐     ┌──────────────────────────────┐
    │ 4. Fuente       │────▶│ ¿Cómo se propaga desde ella? │
    │    Puntual Q=1  │     │                              │
    │    Directividad │     │ ▼ 5. Campo libre             │
    │    Q, DI, polar │     │   Divergencia esférica       │
    │    Cercano/lejano│    │   SPL↓ 6 dB al duplicar r    │
    └─────────────────┘     │   SPL = SWL − 20log(r) − 11  │
                            │                              │
                            │ ▼ 6. ¿Qué afecta el camino?  │
                            │   • Absorción atmosférica     │
                            │     α ∝ f², humedad          │
                            │   • Refracción (T, viento)   │
                            │     c(T) = 331.4 + 0.6·T     │
                            │     Zona de sombra acústica   │
                            │   • Efecto del suelo          │
                            │     Reflexión + absorción     │
                            │                              │
                            │ ▼ 7. Obstáculos en el camino │
                            │   • Reflexión (θᵢ = θᵣ)      │
                            │     Diagramas de rayo         │
                            │     Método de la imagen       │
                            │   • Difracción (Huygens)      │
                            │     Barreras, N = 2δ/λ       │
                            │     Maekawa: IL≈10·log(3+20N)│
                            │                              │
                            │ ▼ 8. Fuente o receptor móvil │
                            │   • Efecto Doppler            │
                            │     f' = f₀·c/(c∓v_s)        │
                            │     Compresión frentes de onda│
                            └──────────────────────────────┘
    ```

    > Insertar **Fig. 1-2** del Everest (onda sinusoidal), **Fig. 2-1** (escala logarítmica), **Fig. 3-1** (divergencia esférica), **Fig. 6-1** (reflexión especular), **Fig. 7-1** (difracción por borde), **Fig. 8-1** (refracción por gradiente térmico), **Fig. 3-6** (efecto Doppler).

    ### Las cuatro preguntas clave

    Cada problema de propagación exterior se responde con cuatro preguntas en secuencia. Si podés responderlas para cualquier situación, dominás U1+U2:

    | # | Pregunta | Herramienta | Unidad |
    |---|----------|-------------|--------|
    | 1 | ¿Cuánta energía emite la fuente? | SWL, Q, DI, patrón polar | U1 (S. 5, 8) |
    | 2 | ¿A qué nivel llega si no hubiera obstáculos? | Ley del inverso del cuadrado + absorción atmosférica | U2 (S. 9, 10) |
    | 3 | ¿Qué obstáculos modifican la propagación? | Reflexión, refracción, difracción, suelo | U2 (S. 11, 12, 13) |
    | 4 | ¿Hay movimiento relativo? | Efecto Doppler | U2 (S. 14) |

    !!! tip "Para el examen interciclo"
        El 80% de los errores en el examen vienen de TRES confusiones. Memorizalas ahora:
        
        1. **Sumar dB linealmente** (70 dB + 70 dB ≠ 140 dB, es 73 dB). Siempre usar \(L_{\text{total}} = 10\log(10^{L_1/10} + 10^{L_2/10})\).
        2. **Confundir 20log con 10log**. Presiones → 20log. Intensidades/potencias → 10log. La ley del inverso del cuadrado usa 20log porque SPL ∝ p ∝ 1/r.
        3. **Olvidar que las barreras atenúan más agudos que graves**. N = 2δ/λ es proporcional a f. A 100 Hz, una barrera de 3 m atenúa ~9 dB. A 1 kHz, la misma barrera atenúa ~18 dB.

???+ note "Preparación para el examen interciclo — Fórmulas maestras"

    ### Tabla de fórmulas esenciales U1+U2

    | # | Fórmula | ¿Qué calcula? | Sesión |
    |---|---------|---------------|--------|
    | F1 | \(\lambda = c/f\) | Longitud de onda | S. 3 |
    | F2 | \(T = 1/f\) | Período | S. 3 |
    | F3 | \(c(T) \approx 331.4 + 0.6\cdot T\) | Velocidad del sonido vs. temperatura | S. 11 |
    | F4 | \(L_p = 20\log_{10}(p/p_0)\) | SPL desde presión | S. 5, 6 |
    | F5 | \(L_{\text{total}} = 10\log_{10}\!\left(10^{L_1/10} + 10^{L_2/10}\right)\) | Suma de niveles (incoherente) | S. 7 |
    | F6 | \(\text{SPL}(r) = \text{SWL} - 20\log_{10}(r) - 11\) (campo libre) | SPL a distancia r desde SWL | S. 9 |
    | F7 | \(\Delta L = 20\log_{10}(r_2/r_1)\) | Diferencia SPL al cambiar distancia | S. 9 |
    | F8 | \(N = 2\delta/\lambda\) | Número de Fresnel (barreras) | S. 13 |
    | F9 | \(\text{IL} \approx 10\log_{10}(3 + 20N)\) (Maekawa) | Atenuación por barrera | S. 13 |
    | F10 | \(f' = f_0 \cdot \dfrac{c}{c \mp v_s}\) | Doppler: fuente móvil | S. 14 |
    | F11 | \(f' = f_0 \cdot \dfrac{c \pm v_r}{c}\) | Doppler: receptor móvil | S. 14 |
    | F12 | \(\text{DI} = 10\log_{10}(Q)\) | Índice de directividad | S. 8 |

    ### Errores frecuentes — checklist de seguridad

    | Error común | Lo correcto | Por qué |
    |---|---|---|
    | "A 100 m se atenúa el doble que a 50 m" | A 100 m se atenúa 6 dB más que a 50 m (20log(100/50) = 6 dB) | La atenuación es logarítmica, no lineal |
    | "Las barreras bloquean todo por igual" | Atenúan más los agudos (N ∝ f). Graves «rodean» la barrera | La difracción depende de λ vs obstáculo |
    | "La humedad siempre ayuda a propagar el sonido" | El aire seco absorbe MÁS que el húmedo en altas frecuencias | Paradoja de la absorción atmosférica (S. 10) |
    | "Q=1 significa que la fuente no emite en algunas direcciones" | Q=1 es omnidireccional (esfera completa). Q>1 concentra energía | Q compara con esfera de referencia |
    | "La velocidad del sonido es constante" | Varía con la temperatura: c(T) = 331.4 + 0.6·T | ~343 m/s a 20°C, ~331 m/s a 0°C |
    | "El sonido siempre viaja en línea recta" | Se refracta con gradientes de T y viento. Puede curvarse hacia arriba o abajo | Refracción (S. 11) |
    | "SPL y SWL son lo mismo" | SWL es potencia emitida por la fuente. SPL es presión en el punto de medición | SWL es propiedad de la fuente; SPL depende de la distancia |

---

## 🧪 Ejercicios integradores U1+U2

### Bloque A — Fundamentos (U1)

**A1. Longitud de onda en contexto.**  
Un parlante reproduce un tono puro de 500 Hz en un concierto al aire libre a 15°C.  
(a) Calculá λ.  
(b) Si la temperatura sube a 30°C, ¿λ aumenta o disminuye? ¿En qué porcentaje?  
(c) Explicá por qué este cambio de λ NO afecta la frecuencia que escucha el público.

<details>
<summary>✏️ Ver resolución</summary>

(a) A 15°C: c = 331.4 + 0.6×15 = 340.4 m/s → λ = 340.4/500 = **0.681 m** (68.1 cm).

(b) A 30°C: c = 331.4 + 0.6×30 = 349.4 m/s → λ = 349.4/500 = **0.699 m**. Aumenta un 2.6%. λ es más grande porque c es mayor y f es constante.

(c) La frecuencia la determina la fuente (el parlante sigue emitiendo a 500 Hz). Lo que cambia es λ (la distancia entre frentes de onda), no f. El oído percibe frecuencia, no longitud de onda. Sin embargo, en fenómenos como difracción, el cambio de λ SÍ importa porque determina la relación λ vs obstáculo.

</details>

**A2. Suma de niveles — caso real.**  
En un punto del público, un parlante de PA entrega 88 dB SPL y un monitor de escenario entrega 85 dB SPL.  
(a) ¿Cuál es el nivel combinado?  
(b) Si agregamos un segundo parlante de PA idéntico al primero (misma posición, misma señal), ¿cuánto suma?  
(c) ¿Por qué dos fuentes idénticas suman +3 dB y no +6 dB en este caso?

<details>
<summary>✏️ Ver resolución</summary>

(a) ΔL = 88 − 85 = 3 dB. Del nomograma (Fig. 2-5), sumar ΔL⁺ ≈ 1.8 dB. L_total = 88 + 1.8 = **89.8 dB SPL**.

Calculado: 10·log(10^(88/10) + 10^(85/10)) = 10·log(6.31×10^8 + 3.16×10^8) = 10·log(9.47×10^8) = 10×8.976 = **89.8 dB SPL**.

(b) Dos parlantes idénticos: la potencia total se duplica respecto a uno solo → +3 dB. El nivel combinado de los dos PA es 88 + 3 = 91 dB SPL. Luego con el monitor (85 dB): ΔL = 91 − 85 = 6 dB → ΔL⁺ ≈ 1.0 dB → L_total = **92.0 dB SPL**.

(c) Suma +3 dB (y no +6 dB) porque son fuentes **incoherentes** — las señales no están perfectamente en fase. Dos fuentes incoherentes duplican la energía total → +3 dB. Si fueran coherentes (misma fase, misma posición), la presión se duplicaría → +6 dB (20log(2) = 6). En la práctica, los parlantes de PA son incoherentes entre sí por diferencias de camino y por el contenido espectral real (música, no tonos puros).

</details>

**A3. Directividad en exteriores.**  
Un subwoofer sobre el suelo (Q = 2) tiene SWL = 115 dB a 63 Hz. Un tweeter montado en la misma posición tiene SWL = 98 dB a 8 kHz y Q = 8 (esquina de escenario).  
(a) ¿Cuál es el SPL de cada uno a 20 m?  
(b) ¿Por qué el tweeter necesita mucho menos SWL para alcanzar niveles similares?  
(c) ¿Qué pasaría con el subwoofer si lo elevamos 3 m sobre el suelo (Q cambia de 2 a 1)?

<details>
<summary>✏️ Ver resolución</summary>

(a) Fórmula con directividad: SPL = SWL + 10·log(Q) − 20·log(r) − 11.

Subwoofer: SPL = 115 + 10·log(2) − 20·log(20) − 11 = 115 + 3.0 − 26.0 − 11 = **81.0 dB SPL**.

Tweeter: SPL = 98 + 10·log(8) − 20·log(20) − 11 = 98 + 9.0 − 26.0 − 11 = **70.0 dB SPL**.

(b) El tweeter no alcanza niveles similares con 98 dB SWL (quedó 11 dB por debajo). Pero 10·log(Q) le da 9 dB extra vs 3 dB del subwoofer. A igualdad de SWL, un tweeter en esquina de escenario (Q=8) llega 6 dB más alto que un subwoofer sobre el suelo (Q=2). La directividad COMPENSA parcialmente la menor potencia. Si queremos 81 dB SPL también del tweeter, necesitaríamos SWL ≈ 109 dB.

(c) A 3 m de altura, el subwoofer está en campo libre (Q=1). Pierde los 3 dB del suelo (10·log(2) = 3 dB). SPL = 115 + 0 − 20·log(20) − 11 = 115 − 26 − 11 = **78 dB SPL**. Para conciertos, SIEMPRE poner subwoofers en el suelo (o en semicírculo apuntando al público, Q≈4 con arreglo) — cada dB cuenta en graves.

</details>

---

### Bloque B — Propagación exterior (U2)

**B1. Caso integrador: Festival en la Quebrada.**  
Un festival se realiza en una quebrada a 2,800 m de altitud, temperatura 22°C, humedad relativa 25%. El escenario está a 500 m de la primera fila de carpas de acampada. Hay una loma de 8 m de altura entre el escenario y las carpas. El viento sopla del escenario hacia las carpas a 15 km/h.

Se pide:
(a) Calcular la velocidad del sonido a 2,800 m y 22°C. ¿Es mayor o menor que al nivel del mar?  
(b) Calcular la atenuación atmosférica aproximada a 4 kHz en dB/100 m y la atenuación total a 500 m. Ayuda: aire seco absorbe ~1.5 dB/100 m a 4 kHz; aire húmedo (70% HR) ~0.5 dB/100 m.  
(c) Calcular el número de Fresnel para la loma de 8 m de altura a 125 Hz y a 2 kHz. Considerar que el receptor está a 50 m detrás de la loma (δ = diferencia de camino ≈ altura²/(2×distancia efectiva)).  
(d) ¿Qué frecuencia va a escucharse MEJOR en las carpas: 125 Hz o 2 kHz? Explicar usando N e IL.  
(e) El viento de 15 km/h (4.2 m/s) sopla del escenario hacia las carpas. ¿Cómo afecta la refracción y la zona de sombra?  
(f) ¿Cuál es la frecuencia percibida de un tono de 1 kHz si el parlante de escenario se mueve (sobre riel) hacia las carpas a 2 m/s?

<details>
<summary>✏️ Ver resolución completa</summary>

**(a) Velocidad del sonido:**  
La altitud NO afecta directamente c (solo la temperatura). A 22°C: c = 331.4 + 0.6×22 = **344.6 m/s**. Es prácticamente igual que al nivel del mar a la misma temperatura (la composición del aire cambia ligeramente con la altitud, pero el efecto es despreciable para nuestros cálculos).

**(b) Atenuación atmosférica:**  
A 25% HR (muy seco) y 4 kHz, α ≈ 2.0 dB/100 m.  
En 500 m: atenuación = 2.0 × 5 = **10 dB**.

Comparación: si la humedad fuera 70% (típico de costa), α ≈ 0.5 dB/100 m → solo 2.5 dB en 500 m. **El aire seco de altura atenúa 4× más los agudos.** Esto es relevante para sistemas de PA en festivales de montaña.

**(c) Número de Fresnel:**  
δ (diferencia de camino) ≈ h²/(2d_eff). Altura efectiva de la loma sobre la línea de visión: ~8 m. d₁ (escenario a loma) ≈ 250 m, d₂ (loma a receptor) ≈ 50 m. Ambos "ven" la cima → la línea de visión pasa a ~6.7 m sobre el suelo en la loma. La altura efectiva de obstrucción es ≈ 8 − 6.7 = 1.3 m.

δ ≈ 1.3²/(2 × (1/250 + 1/50)⁻¹) — forma simplificada. Usando δ ≈ h²·(d₁+d₂)/(2·d₁·d₂): δ ≈ 1.3² × 300 / (2 × 250 × 50) ≈ 1.69 × 300 / 25,000 ≈ 0.0203 m = 2.03 cm.

- A 125 Hz: c = 344.6 m/s, λ = 344.6/125 = 2.76 m. N = 2δ/λ = 2 × 0.0203 / 2.76 = **0.0147**.
- A 2 kHz: λ = 344.6/2000 = 0.172 m. N = 2 × 0.0203 / 0.172 = **0.236**.

**(d) ¿Qué frecuencia se escucha mejor?**  
IL(125 Hz) ≈ 10·log(3 + 20×0.0147) = 10·log(3.29) ≈ **5.2 dB**.  
IL(2 kHz) ≈ 10·log(3 + 20×0.236) = 10·log(7.72) ≈ **8.9 dB**.  

El grave (125 Hz) se atenúa MENOS por la barrera (IL = 5.2 dB vs 8.9 dB). **Los graves siempre rodean mejor los obstáculos.** Pero en este caso la loma es tan baja respecto a λ (125 Hz) que casi no hay sombra acústica. El sonido a 125 Hz se escuchará mejor en las carpas.

**(e) Efecto del viento:**  
El viento SOPLA del escenario hacia las carpas (viento a favor de la propagación). Cerca del suelo, la velocidad del viento es menor por fricción. El gradiente de velocidad del viento curva los rayos sonoros hacia ABAJO. Esto REFUERZA la propagación hacia las carpas: el sonido "cae" sobre el receptor en lugar de pasar por encima. La zona de sombra se reduce o desaparece.

Si el viento soplara en dirección contraria (de las carpas al escenario), los rayos se curvarían hacia arriba, ampliando la zona de sombra y perjudicando la propagación.

**(f) Efecto Doppler:**  
f₀ = 1,000 Hz, v_s = 2 m/s (fuente se acerca).  
f' = f₀ × c/(c − v_s) = 1000 × 344.6/(344.6 − 2) = 1000 × 344.6/342.6 = **1,005.8 Hz**.  

Δf = 5.8 Hz — apenas perceptible (menos de 10 cents, ~0.6% de cambio). El Doppler con fuentes de PA es despreciable a velocidades de escenario. Es relevante solo para fuentes rápidas (vehículos, aviones) o como efecto creativo (Leslie).

</details>

---

**B2. Barrera acústica — diseño rápido.**  
Un generador diésel produce 95 dB SPL a 10 m. Hay viviendas a 40 m del generador. Se quiere instalar una barrera para reducir el nivel en las viviendas a ≤55 dB SPL en banda de 500 Hz.

Datos: la barrera se coloca a 5 m del generador. Altura de la fuente: 1 m (escape). Altura del receptor (ventana): 2 m. Terreno plano.

(a) Calcular el SPL en las viviendas SIN barrera. ¿Cuánta atenuación total se necesita?  
(b) Si la barrera tiene 3 m de altura desde el suelo, calcular δ y N (aproximado).  
(c) ¿Es suficiente esta barrera? Si no, ¿qué altura mínima necesitaría?  
(d) ¿Por qué la barrera debe ser CONTINUA (sin huecos) y tener masa suficiente?

<details>
<summary>✏️ Ver resolución</summary>

**(a) Sin barrera:**  
De 10 m a 40 m: ΔL = 20·log(40/10) = 20·log(4) = **12.0 dB** de atenuación por distancia.  
SPL en viviendas = 95 − 12.0 = **83.0 dB SPL**.

Atenuación necesaria: 83.0 − 55.0 = **28.0 dB**. Una barrera sola típicamente no alcanza 28 dB (el límite práctico es ~25 dB). Se necesitaría barrera + distancia adicional o barrera + apantallamiento parcial del generador.

**(b) Con barrera de 3 m a 5 m:**  
Geometría: fuente a 1 m de altura, barrera a 3 m, receptor a 2 m. Línea de visión fuente-receptor: pendiente = (2−1)/40 = 0.025 m/m → altura de línea en x=5 m: 1 + 0.025×5 = 1.125 m. Altura de obstrucción: 3.0 − 1.125 = **1.875 m**.

δ ≈ h²/(2d₁) × [d₂/(d₁+d₂)] + h²/(2d₂) × [d₁/(d₁+d₂)] — forma exacta. Aproximadamente: δ ≈ h²·(d₁+d₂)/(2·d₁·d₂) = 1.875² × 40 / (2 × 5 × 35) = 3.516 × 40 / 350 = **0.402 m**.

A 500 Hz: c = 343 m/s, λ = 0.686 m. N = 2×0.402/0.686 = **1.17**.  
IL = 10·log(3 + 20×1.17) = 10·log(26.4) = **14.2 dB**.

SPL con barrera = 83.0 − 14.2 = **68.8 dB SPL** — todavía 13.8 dB por encima del objetivo.

**(c) Altura necesaria:**  
Para IL ≈ 28 dB: 10·log(3+20N) = 28 → 3+20N = 10^2.8 = 631 → 20N = 628 → N = 31.4.  
Como N = 2δ/λ → δ = N·λ/2 = 31.4×0.686/2 = **10.77 m** de diferencia de camino.

Con esa δ, se necesitaría h ≈ √(2δ·d₁·d₂/(d₁+d₂)) = √(2×10.77×5×35/40) = √(94.2) = **9.7 m** de altura de obstrucción. Como la línea de visión está a ~1.1 m → barrera de ~10.8 m. Eso NO es práctico. Se necesitan otras medidas: alejar más el generador, encerrarlo parcialmente, o usar dos barreras.

**(d) Continuidad y masa:**  
- **Sin huecos**: cualquier abertura (puerta, junta) actúa como fuente secundaria (difracción por abertura, S. 13). Una puerta entreabierta de 5 cm puede transmitir tanto sonido como varios m² de barrera. La barrera debe ser estanca.
- **Masa suficiente**: la barrera debe tener masa superficial ≥20 kg/m² para que el sonido transmitido A TRAVÉS de la barrera sea despreciable frente al sonido difractado por el borde. Si la barrera es liviana (chapa fina), vibra y retransmite el sonido — no sirve como barrera acústica aunque tenga altura.

</details>

---

### Bloque C — Integración U1+U2

Los ejercicios integradores (C1, C2 y C3) se resuelven en **Google Classroom**.

---

*Basado en: Everest & Pohlmann (2009) _Master Handbook of Acoustics_, Capítulos 1-3, 5-8, pp. 20-143.*
