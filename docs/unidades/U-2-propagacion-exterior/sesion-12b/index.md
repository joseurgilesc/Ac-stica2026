# Sesión 12B: ¿Escuchamos igual todas las frecuencias?

**Tema:** introducción a la psicoacústica y a las curvas de igual sonoridad.

**Pregunta central:** ¿por qué un tono grave puede parecer más débil que otro de frecuencia media aunque ambos tengan el mismo nivel físico?

**Al terminar podrás:** distinguir frecuencia de sonoridad, explicar de manera sencilla la sensibilidad del oído según la frecuencia y realizar una **comparación auditiva** sin micrófono de medición.

## 1. De la acústica a la percepción

En las clases anteriores estudiamos fenómenos **físicos** del sonido: frecuencia, longitud de onda, decibelios y propagación. Ahora añadimos la experiencia de quien escucha.

La **psicoacústica** estudia cómo percibimos los sonidos y relaciona sus características físicas con nuestras sensaciones auditivas.

| Magnitud física | Lo que percibimos |
|---|---|
| **Frecuencia (Hz)** | Principalmente, la **altura** de un tono (grave o agudo). |
| **Nivel de presión sonora (dB SPL)** | Influye en la **sonoridad percibida**, es decir, qué tan fuerte nos parece. |
| **Espectro y evolución temporal** | Contribuyen al **timbre** de un sonido. |

!!! tip "Dos ideas diferentes"
    **Frecuencia no es sonoridad:** un sonido agudo no tiene por qué ser más fuerte que uno grave. La sonoridad depende del nivel, la frecuencia y otros factores perceptivos.

## 2. El oído no tiene la misma sensibilidad en todas las frecuencias

Imagina dos tonos puros, uno de **250 Hz** y otro de **1.000 Hz**, medidos con el mismo nivel de presión sonora. **No necesariamente se escucharán igual de fuertes**.

En términos generales:

- A niveles relativamente bajos, necesitamos un **nivel físico mayor en los graves** para que parezcan tan fuertes como un tono de referencia de frecuencia media.
- El oído humano suele mostrar una sensibilidad relativamente elevada en la región de aproximadamente **2.000 a 5.000 Hz**.
- Nuestra sensibilidad cambia con la frecuencia, el nivel de escucha y las características de cada persona.

### ¿Qué son las curvas de igual sonoridad?

Son curvas que muestran qué **niveles de presión sonora** deben tener diferentes tonos puros para que las personas los perciban con una **sonoridad semejante**.

Se conocen históricamente como *curvas de Fletcher y Munson*. La referencia normativa actual para condiciones específicas de escucha es la **[ISO 226:2023](https://www.iso.org/standard/83117.html)**.

**Mira aquí el gráfico y su explicación:** [Audio Engineering Society — Equal-loudness contours](https://aes.org/resources/audio-topics/loudness-project/learn-more/).

!!! info "¿Qué significa «fon» (*phon*)?"
    El **fon** es una unidad de **nivel de sonoridad**. Por definición, su valor numérico coincide con los dB SPL de un tono de **1.000 Hz** que se percibe igual de fuerte, bajo las condiciones de referencia.

    Un ajuste de volumen en **dB digitales no equivale a dB SPL ni a fones**. Para una comparación normativa se requieren condiciones controladas y mediciones calibradas.

### Una aplicación musical

¿Has notado que una mezcla escuchada **muy bajito** puede parecer menos potente en graves?

La respuesta del sistema auditivo depende del nivel de escucha. Por eso, en producción musical es útil revisar una mezcla **a volumen moderado y también a un volumen más bajo**, sin aumentar excesivamente la escucha para compensar los graves.

**No confundas:** la menor sensibilidad del oído a ciertas frecuencias **no es absorción atmosférica**. La absorción ocurre durante la propagación; la psicoacústica estudia la **percepción** del oyente.

## 3. Práctica: ¿qué tan fuerte escucho cada frecuencia?

**Objetivo:** comparar de manera **subjetiva** diferentes tonos con una referencia de 1.000 Hz y registrar cuánto ajustamos digitalmente cada tono de prueba para que parezca tener una sonoridad semejante.

### Materiales

- Computadora con navegador y la siguiente herramienta interactiva.
- **Audífonos** en buen estado (recomendados, no obligatorios) o el mismo parlante durante toda la serie.
- Hoja o documento para registrar las observaciones.

**No necesitas un micrófono de medición ni un sonómetro.**

!!! warning "Antes de escuchar"
    **Comienza con el volumen del equipo casi al mínimo**. Súbelo únicamente hasta oír cómodamente el tono de referencia. Mantén el mismo volumen físico durante toda la actividad y ajusta **solo el control de la simulación**. No fuerces el volumen para intentar igualar los sonidos, no realices escuchas prolongadas y detente ante cualquier molestia.

    Es una práctica educativa, **no una prueba de audición clínica**. Con auriculares o altavoces no calibrados, sus respuestas en frecuencia también influyen en el resultado.

### Laboratorio interactivo de sonoridad

1. Elige una frecuencia de prueba: **250, 500, 2.000 o 4.000 Hz**.
2. Escucha el tono **A de 1.000 Hz** y después el tono **B**.
3. Si B te parece más débil o más fuerte, modifica su **ajuste digital en dB**. Puedes alternar los tonos cuantas veces necesites.
4. Cuando ambos te parezcan igual de fuertes, selecciona **«Registrar igualación»**. Si no logras igualarlos cómodamente, marca **«No logré igualarlo»**.
5. Repite para las cuatro frecuencias y conserva una captura de la tabla y gráfica que se generan.

<iframe src="../../../simulacion/sonoridad-frecuencias.html" title="Práctica interactiva de comparación de sonoridad entre frecuencias" loading="lazy" style="width:100%;height:1550px;border:1px solid #d7e1eb;border-radius:12px;background:#fff;"></iframe>

[🎧 **Abrir el laboratorio de escucha en pantalla completa**](../../../simulacion/sonoridad-frecuencias.html){ .md-button }

### Hoja de registro

| Tono de prueba B | ¿B sonaba más fuerte, igual o más débil antes de ajustar? | Ajuste digital para igualar A |
|---|---|---|
| **250 Hz** | | |
| **500 Hz** | | |
| **2.000 Hz** | | |
| **4.000 Hz** | | |

**Cómo leer los resultados:** si registras **+8 dB** en 250 Hz, significa que aumentaste **8 dB la amplitud digital relativa de ese tono** respecto a la referencia en tu equipo. **No** significa que tu oído tenga una pérdida auditiva de 8 dB ni que hayas medido una curva ISO.

## 4. Interpretamos los resultados

Responde brevemente:

1. ¿Qué tono necesitó el **mayor aumento digital** para parecer igual de fuerte que 1.000 Hz?
2. ¿Hubo algún tono al que tuviste que **reducirle** el nivel?
3. ¿Los resultados de dos compañeros fueron iguales? ¿Qué factores podrían explicarlo?
4. ¿Por qué debemos **evitar usar esta práctica para diagnosticar la audición** de alguien?
5. **Aplicación musical:** ¿qué puede cambiar en nuestra percepción de una mezcla cuando escuchamos a volumen muy bajo?

!!! tip "Conclusión esperada"
    El oído no responde de manera uniforme a todas las frecuencias. Sin embargo, la práctica también incluye la respuesta de los audífonos, el nivel de escucha, el entorno y las diferencias personales. **Sirve para experimentar e interpretar, no para obtener curvas normalizadas.**

**Entrega:** tabla de cuatro frecuencias (o captura de la simulación) y una **conclusión de 4 a 6 líneas**.

## 5. Cierre: tres ideas para llevarnos

- **Hz:** describe la frecuencia física de un tono.
- **dB SPL:** describe el nivel físico de presión sonora.
- **Sonoridad:** describe **qué tan fuerte percibimos** un sonido; no depende solo de los dB SPL.

**La pregunta que nos llevamos a producción musical:** ¿por qué es importante escuchar nuestras mezclas a niveles moderados y consistentes?

---

**Referencias y consulta**

- [Audio Engineering Society — Equal-loudness contours](https://aes.org/resources/audio-topics/loudness-project/learn-more/).
- [ISO 226:2023 — Acoustics: Normal equal-loudness-level contours](https://www.iso.org/standard/83117.html).
- [OMS — Escucha segura](https://www.who.int/news-room/questions-and-answers/item/deafness-and-hearing-loss-safe-listening).
