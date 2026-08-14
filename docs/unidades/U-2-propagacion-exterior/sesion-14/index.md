# Sesión 14: Efecto Doppler

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas. Cada término en el texto está vinculado a esta tabla.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="m"></a>**m** | Metro | Longitud, distancia | — |
    | <a id="ms"></a>**m/s** | Metro por segundo | Velocidad | — |
    | <a id="kmh"></a>**km/h** | Kilómetro por hora | Velocidad | 1 m/s = 3.6 km/h |
    | <a id="f0"></a>**f₀** | Frecuencia emitida | Frecuencia del sonido que produce la fuente, en reposo | En Hz |
    | <a id="f_prime"></a>**f'** | Frecuencia percibida | Frecuencia que escucha el receptor (puede ser mayor, menor o igual que f₀) | En Hz |
    | <a id="vs"></a>**v_s** | Velocidad de la fuente | Velocidad a la que se mueve la fuente sonora respecto al aire | En m/s. Positiva si se acerca al receptor |
    | <a id="vr"></a>**v_r** | Velocidad del receptor | Velocidad a la que se mueve el receptor respecto al aire | En m/s. Positiva si se acerca a la fuente |
    | <a id="c"></a>**c** | Velocidad del sonido | Velocidad de propagación en el medio | ~343 m/s a 20°C |
    | <a id="deltaf"></a>**Δf** | Desplazamiento Doppler | Diferencia entre frecuencia percibida y emitida: Δf = f' − f₀ | En Hz |

???+ note "¿Qué es el efecto Doppler?"

    El **efecto Doppler** es el cambio aparente en la frecuencia de una onda cuando la fuente y el receptor se mueven uno respecto al otro. Es el fenómeno que explica por qué la sirena de una ambulancia suena más aguda cuando se acerca y más grave cuando se aleja.

    ### No es una ilusión — la frecuencia percibida realmente cambia

    El efecto Doppler NO es un truco del oído. La frecuencia que llega al tímpano es FÍSICAMENTE distinta de la frecuencia emitida. Esto ocurre porque el movimiento relativo comprime o expande los frentes de onda:

    | Situación | ¿Qué pasa con los frentes de onda? | ¿Qué escucha el receptor? |
    |---|---|---|
    | Fuente se acerca al receptor | Los frentes de onda se **comprimen** (llegan más seguido) | Frecuencia MÁS alta (sonido más agudo) → f' > f₀ |
    | Fuente se aleja del receptor | Los frentes de onda se **expanden** (llegan más espaciados) | Frecuencia MÁS baja (sonido más grave) → f' < f₀ |
    | Fuente y receptor estáticos | Los frentes de onda llegan con el espaciado original | Frecuencia sin cambio → f' = f₀ |

    !!! tip "Visualización mental"
        Imaginá una fuente que emite un «pulso» sonoro cada segundo (f₀ = 1 Hz). Si la fuente está quieta, cada pulso viaja 343 m antes de que se emita el siguiente → los pulsos están separados 343 m (λ = c/f₀). Pero si la fuente AVANZA hacia el receptor, cada nuevo pulso se emite desde una posición más cercana al receptor → los pulsos llegan más juntos → el receptor percibe una frecuencia MAYOR. Es como si la fuente estuviera «persiguiendo» sus propias ondas.

???+ note "La fórmula del efecto Doppler: fuente en movimiento"

    ### Caso 1: Fuente en movimiento, receptor estático

    Cuando la fuente se mueve respecto al aire y el receptor está quieto:

    \[
    \boxed{f' = f_0 \cdot \frac{c}{c \mp v_s}}
    \]

    | Símbolo | Nombre | Significado |
    |---|---|---|
    | \(f'\) | Frecuencia percibida | Lo que realmente escucha el receptor [Hz] |
    | \(f_0\) | Frecuencia emitida | Lo que produce la fuente [Hz] |
    | \(c\) | Velocidad del sonido | ~343 m/s a 20°C |
    | \(v_s\) | Velocidad de la fuente | Magnitud de la velocidad (siempre positiva en la fórmula) [m/s] |
    | Signo − | Fuente se ACERCA al receptor | \(f' = f_0 \cdot \frac{c}{c - v_s}\) → f' > f₀ |
    | Signo + | Fuente se ALEJA del receptor | \(f' = f_0 \cdot \frac{c}{c + v_s}\) → f' < f₀ |

    **Ejemplo 1 — Ambulancia acercándose:**
    Una ambulancia emite una sirena a \(f_0 = 800\) Hz y se acerca a \(v_s = 30\) m/s (108 km/h).

    \[
    f' = 800 \cdot \frac{343}{343 - 30} = 800 \cdot \frac{343}{313} \approx 876\ \text{Hz}
    \]

    La sirena se percibe 76 Hz más aguda — casi un semitono y medio más arriba.

    **Ejemplo 2 — Ambulancia alejándose:**
    La misma ambulancia se aleja a 30 m/s:

    \[
    f' = 800 \cdot \frac{343}{343 + 30} = 800 \cdot \frac{343}{373} \approx 735\ \text{Hz}
    \]

    La sirena se percibe 65 Hz más grave.

    **El cambio total** al pasar de acercándose a alejándose es 876 − 735 = 141 Hz. Es un cambio MUY notorio — por eso identificás instantáneamente si la ambulancia viene hacia vos o se va.

    > Insertar **Fig. 3-6** del Everest: efecto Doppler con fuente en movimiento — diagrama mostrando frentes de onda comprimidos delante de la fuente (f' > f₀) y expandidos detrás (f' < f₀). Incluir la notación de la fórmula.

    [🎛️ **Abrir simulación interactiva — Persiguiendo las ondas**](../../../simulacion/doppler.html){ .md-button }

    Observa cómo los frentes de onda se comprimen delante de la fuente y se expanden detrás. Ajusta la frecuencia, la velocidad y la distancia lateral, y escucha el cambio de tono.

???+ note "Receptor en movimiento y caso general"

    ### Caso 2: Receptor en movimiento, fuente estática

    Cuando el receptor se mueve respecto al aire y la fuente está quieta:

    \[
    \boxed{f' = f_0 \cdot \frac{c \pm v_r}{c}}
    \]

    | Símbolo | Nombre | Significado |
    |---|---|---|
    | \(v_r\) | Velocidad del receptor | Magnitud de la velocidad (siempre positiva en la fórmula) [m/s] |
    | Signo + | Receptor se ACERCA a la fuente | \(f' = f_0 \cdot \frac{c + v_r}{c}\) → f' > f₀ |
    | Signo − | Receptor se ALEJA de la fuente | \(f' = f_0 \cdot \frac{c - v_r}{c}\) → f' < f₀ |

    **Ejemplo 3 — Corriendo hacia un parlante:**
    Un parlante emite un tono de \(f_0 = 1,000\) Hz. Corrés hacia él a \(v_r = 5\) m/s (trote suave, 18 km/h).

    \[
    f' = 1,000 \cdot \frac{343 + 5}{343} = 1,000 \cdot \frac{348}{343} \approx 1,014.6\ \text{Hz}
    \]

    El cambio es pequeño (~15 Hz) porque 5 m/s es solo el 1.5% de c. El efecto Doppler es mucho más notorio cuando la fuente se mueve rápido que cuando el receptor se mueve.

    ### Caso 3: Ambos en movimiento (fórmula general)

    \[
    \boxed{f' = f_0 \cdot \frac{c \pm v_r}{c \mp v_s}}
    \]

    | Regla nemotécnica | Significado |
    |---|---|
    | Numerador: signo + si el receptor se acerca | \(c + v_r\) cuando el receptor va hacia la fuente |
    | Numerador: signo − si el receptor se aleja | \(c - v_r\) cuando el receptor se aleja |
    | Denominador: signo − si la fuente se acerca | \(c - v_s\) cuando la fuente va hacia el receptor |
    | Denominador: signo + si la fuente se aleja | \(c + v_s\) cuando la fuente se aleja |

    **La intuición**: ambos movimientos (fuente y receptor) que REDUCEN la distancia entre ellos AUMENTAN la frecuencia percibida. Ambos que AUMENTAN la distancia REDUCEN la frecuencia.

???+ note "Efecto Doppler en la vida cotidiana y en producción musical"

    ### Ejemplos cotidianos

    | Fuente | f₀ típica | Velocidad | Δf | ¿Se nota? |
    |---|---|---|---|---|
    | Ambulancia (sirena) | 800 Hz | 30 m/s (108 km/h) | Δf ≈ +76 / −65 Hz | **Muy notorio** — cambio de tonalidad evidente |
    | Auto en la calle (bocina) | 400 Hz | 15 m/s (54 km/h) | Δf ≈ +18 / −17 Hz | **Notorio** |
    | Tren (bocina) | 300 Hz | 25 m/s (90 km/h) | Δf ≈ +23 / −21 Hz | **Notorio** — el cambio gradual es muy reconocible |
    | Avión comercial en vuelo bajo | — | 80 m/s (288 km/h) | Δf muy pronunciado | **Dramático** — el tono de los motores baja claramente al pasar |
    | Persona caminando con parlante | 500 Hz | 1.5 m/s | Δf ≈ +2.2 Hz | **Imperceptible** |
    | Fórmula 1 pasando | — | 90 m/s (324 km/h) | Δf extremo | **Icónico** — el sonido del motor cambia drásticamente al pasar |

    ### El «efecto Doppler» en un plugin de audio

    El efecto Doppler NO es un plugin que uses en tu DAW — es un fenómeno físico. PERO, muchos efectos de modulación (chorus, flanger, phaser, Leslie rotativo, vibrato) se basan en principios similares: variar cíclicamente la frecuencia percibida.

    | Efecto | ¿Usa Doppler real? | ¿Qué hace? |
    |---|---|---|
    | **Leslie rotativo** | **Sí** — físicamente | Un parlante que gira dentro de una caja. Cuando el cono gira hacia vos, f' > f₀; cuando gira en sentido opuesto, f' < f₀. La modulación de frecuencia + amplitud produce el sonido característico del órgano Hammond |
    | **Vibrato** | No (electrónico) | Modulación periódica de la frecuencia (LFO modulando pitch). Similar perceptual, pero sin movimiento físico |
    | **Chorus** | No (electrónico) | Mezcla señal original + versión con delay modulado. La modulación del delay produce desplazamiento de frecuencia similar al Doppler |
    | **Flanger** | No (electrónico) | Similar al chorus pero con delay más corto y realimentación |
    | **Doppler simulado (audio para videojuegos)** | **Sí** — DSP | Motores de audio 3D (Wwise, FMOD) aplican pitch-shifting en tiempo real según la velocidad relativa para simular Doppler realista |

    ### Cuando el efecto Doppler es un PROBLEMA en producción musical

    | Situación | Problema | Solución |
    |---|---|---|
    | Grabación en exteriores con viento | El micrófono capta fluctuaciones de presión que suenan como modulación de frecuencia (no es Doppler real, pero suena parecido) | Usar windshield (peluche), grabar en zonas protegidas |
    | Fuente sonora en movimiento durante grabación | Un músico moviéndose con un instrumento inalámbrico | Mantener distancia micrófono-fuente constante |
    | Simulación de Doppler en postproducción | El Doppler «falso» (pitch shift lineal) suena artificial | Usar plugins específicos de Doppler (ej. Waves Doppler, Soundly Doppler) que modelan el perfil de transición |
    | Grabación de vehículos para SFX | Si el micrófono está muy cerca de la trayectoria, el Doppler es extremo y puede sonar poco natural | Posicionar el micrófono a distancia lateral para capturar la transición gradual |

    > Insertar **esquema conceptual**: dibujo de un vehículo pasando frente a un micrófono estacionario. En el punto más cercano (perpendicular), la velocidad radial es momentáneamente cero → f' = f₀ por un instante. Antes de ese punto, f' > f₀ (se acerca). Después, f' < f₀ (se aleja). La transición NO es un salto brusco sino una curva suave.

???+ note "Ejercicios de aplicación"

    ### Ejercicio 1 — Tren pasando por la estación

    Un tren se acerca a la estación a \(v_s = 20\) m/s haciendo sonar su bocina a \(f_0 = 440\) Hz (La₄). Un pasajero está parado en el andén.

    a) ¿Qué frecuencia escucha el pasajero cuando el tren se acerca?
    b) ¿Qué frecuencia escucha cuando el tren se aleja?
    c) ¿Cuál es el cambio total de frecuencia (Δf total)?

    **Solución:**
    a) \(f' = 440 \cdot \frac{343}{343 - 20} = 440 \cdot \frac{343}{323} \approx \mathbf{467.4\ \text{Hz}}\)
    b) \(f' = 440 \cdot \frac{343}{343 + 20} = 440 \cdot \frac{343}{363} \approx \mathbf{415.8\ \text{Hz}}\)
    c) Δf total = 467.4 − 415.8 = **51.6 Hz**

    **Interpretación:** La bocina del tren «retrocede» de ~467 Hz (casi Si♭₄) a ~416 Hz (casi Sol♯₄) — una diferencia de más de un tono completo.

    ### Ejercicio 2 — Murciélago y polilla

    Un murciélago emite un ultrasonido de \(f_0 = 60,000\) Hz para ecolocalizar una polilla. El murciélago vuela hacia la polilla a \(v_s = 5\) m/s. La polilla detecta el ultrasonido y vuela alejándose a \(v_r = 3\) m/s.

    ¿Qué frecuencia recibe la polilla?

    **Solución — Caso 3 (ambos en movimiento):**
    \[
    f' = 60,000 \cdot \frac{343 - 3}{343 - 5} = 60,000 \cdot \frac{340}{338} \approx \mathbf{60,355\ \text{Hz}}
    \]

    La polilla recibe 60,355 Hz. El eco que rebota en la polilla y vuelve al murciélago sufrirá un SEGUNDO desplazamiento Doppler — este «doble Doppler» es lo que permite al murciélago determinar si el objeto se acerca o se aleja y a qué velocidad.

    ### Ejercicio 3 — Afinación de un instrumento desde un auto

    Un músico dentro de un auto toca un La₄ (440 Hz) con su guitarra. El auto viaja a 72 km/h (20 m/s) hacia un amigo parado en la ruta con un afinador.

    ¿Qué frecuencia mide el afinador del amigo?

    **Solución:**
    \[
    f' = 440 \cdot \frac{343}{343 - 20} = 440 \cdot \frac{343}{323} \approx 467.4\ \text{Hz}
    \]

    El afinador marcaría ~467 Hz — ¡el amigo pensaría que la guitarra está terriblemente desafinada! Esto ilustra por qué el efecto Doppler es relevante incluso en situaciones cotidianas: cualquier medición de frecuencia con movimiento relativo está afectada.

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 3, pp. 52–57 (Free Field — Doppler Effect, Moving Sources and Receivers, Applications).*
