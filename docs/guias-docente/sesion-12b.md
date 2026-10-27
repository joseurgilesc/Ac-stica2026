# Guía docente — Sesión 12B: psicoacústica y sensibilidad auditiva por frecuencia

**Duración:** 120 minutos. **Modalidad:** explicación conceptual breve + escucha y registro. **Micrófono de medición:** no necesario.

## Objetivo

Reconocer la diferencia entre **frecuencia física, nivel de presión sonora y sonoridad percibida**, introducir las curvas de igual sonoridad y hacer una comparación auditiva sencilla con tonos de referencia.

## Plan de clase

| Momento | Duración | Actividad |
|---|---:|---|
| Repaso inicial del rango audible | 10 min | ¿Qué significa el intervalo aproximado de 20 Hz a 20 kHz? ¿Es igual para todos? |
| Exploración con oscilador sinusoidal | 15 min | Escuchar tonos breves de 125 a 12.000 Hz, con volumen bajo y fijo; registrar si se distinguen, **sin buscar umbrales auditivos** |
| Introducción conceptual | 15 min | Frecuencia vs. altura; dB SPL vs. sonoridad percibida |
| Curvas de igual sonoridad | 15 min | Leer contornos ISO 226:2023 y explicar qué son los fones |
| Práctica de igualación A/B | 35 min | Comparar 1.000 Hz con 250, 500, 2.000 y 4.000 Hz; conservar ajustes digitales |
| Interpretación de resultados | 20 min | Comparar con la tabla de 40 fones y explicar por qué no coinciden necesariamente los valores digitales y dB SPL |
| Cierre y entrega | 10 min | Conclusión y preguntas de aplicación musical |
| **Total** | **120 min** | |

## Antes de la práctica

- Pedir a los estudiantes que bajen el volumen del sistema y lo eleven **solo hasta oír cómodamente** el tono de referencia.
- Recomendar audífonos en buen estado para trabajar individualmente y reducir contaminación acústica; un monitor o parlante también sirve para **demostraciones cualitativas**, con la limitación de la sala.
- Utilizar **un único equipo y ajuste físico de volumen** para toda la comparación de un estudiante.
- No es audiometría: ni los audífonos ni el nivel físico están calibrados. Los valores son **dB de ganancia relativa digital**, no dB SPL.
- Prohibir la práctica de buscar el umbral de audición elevando el volumen: si un tono no se iguala dentro del rango, utilizar **«No logré igualarlo»**.
- Limitar la exposición; evitar escuchar a volumen alto y suspender si resulta molesto.
- Evitar tratar los resultados individuales como una evaluación de la salud o capacidades auditivas del estudiante.

## Primera práctica: rango audible y oscilador sinusoidal

[Oscilador de la sesión 12B](../simulacion/rango-audible-oscilador.html)

**Punto de partida:** el rango humano aproximado de **20 Hz a 20 kHz** describe la capacidad típica de personas jóvenes con audición normal; **no debe presentarse como un umbral personal rígido**. El oscilador reproduce únicamente de **125 Hz a 12 kHz** para reducir interpretaciones erróneas de los extremos, que muchos dispositivos no reproducen de manera fiable.

**Consigna de exploración:**

1. Bajar casi al mínimo el volumen físico del equipo; seleccionar **1 kHz** e iniciar con una escucha suave y cómoda.
2. Ajustar el volumen digital interno hacia abajo, si hace falta, y pulsar **«Fijar volumen para comparar»**.
3. Reproducir tonos breves de **125, 250, 500, 1.000, 2.000, 4.000, 8.000 y 12.000 Hz**, dejando pausas.
4. Registrar «Lo distinguí» / «No lo distinguí», **sin aumentar el volumen** para detectar frecuencias que no se perciben.
5. Conversar sobre la diferencia entre **altura** y **sonoridad**, sin clasificar la audición de los estudiantes.

**Nota crítica de seguridad:** el oscilador tiene una amplitud digital máxima limitada, **pero no conocemos el SPL real que generará cada dispositivo**. Vigilar el volumen físico, especialmente con audífonos, y no pedir que se determine la máxima frecuencia audible de nadie. Los registros no equivalen a audiogramas ni resultados clínicos.

## Cómo usar el laboratorio

[Laboratorio A/B de sensibilidad auditiva](../simulacion/sonoridad-frecuencias.html)

**Tono A:** 1.000 Hz fijo, generado digitalmente a nivel bajo.

**Tono B:** seleccionar 250, 500, 2.000 o 4.000 Hz; controlar B con un deslizador de **−15 a +15 dB digitales** relativo a A.

**Secuencia:**

1. Ajustar el volumen físico a un nivel bajo y cómodo con **A**.
2. Elegir 250 Hz y comparar **A → B**.
3. Ajustar únicamente la ganancia digital de **B** hasta una sonoridad subjetivamente parecida.
4. Registrar el ajuste o marcar que no se pudo igualar.
5. Repetir con 500, 2.000 y 4.000 Hz.
6. Capturar la tabla/gráfica. No se guardan datos automáticamente fuera de la página.

La demostración no realiza audiometría, corrección de la respuesta de los audífonos ni calibración de presión acústica. **No se pueden comparar los dB relativos de estudiantes con dispositivos diferentes como si fueran umbrales auditivos personales.**

## Tabla central para la práctica: 40 fones

Mostrar la siguiente **tabla estándar después de que los estudiantes hayan registrado sus propias igualaciones**:

| Tono puro | Nivel requerido en la curva normalizada | Nivel de sonoridad |
|---|---:|---:|
| **250 Hz** | 50,3 dB SPL | 40 fones |
| **1.000 Hz** | 40,0 dB SPL | 40 fones |
| **4.000 Hz** | 36,7 dB SPL | 40 fones |

Explicar: **misma sonoridad no significa mismos dB SPL**. En las condiciones ISO 226:2023, el tono grave requiere más nivel físico que la referencia de 1 kHz y el tono a 4 kHz requiere menos. Las igualaciones del navegador son **ajustes relativos digitales**, no una verificación cuantitativa de esos valores normativos.

Preguntas rápidas para la puesta en común:
1. ¿Por qué el tono de 250 Hz necesita 50,3 dB SPL y el de 1.000 Hz solo 40,0 dB SPL para alcanzar 40 fones?
2. ¿Qué hicieron los estudiantes en sus dispositivos? ¿Por qué los ajustes no tienen por qué coincidir con esta tabla?

## Lectura de la gráfica de la AES

[Audio Engineering Society — Equal-loudness contours](https://aes.org/resources/audio-topics/loudness-project/learn-more/)

La escucha humana, bajo condiciones de referencia, suele mostrar **menor sensibilidad en bajas frecuencias** y sensibilidad relativamente elevada en torno a **2–5 kHz**. Los contornos tienden a cambiar de forma con el nivel de escucha.

[ISO 226:2023](https://www.iso.org/standard/83117.html) describe **curvas de igual sonoridad para tonos puros** bajo condiciones específicas (campo libre, incidencia frontal y escucha binaural, entre otras). El experimento en navegador **no replica esas condiciones**, por lo que no deben dibujarse «curvas ISO medidas» a partir de las respuestas de la clase.

## Rúbrica formativa (10 puntos)

| Criterio | Puntos |
|---|---:|
| Registro de las cuatro frecuencias o identificación honesta de tonos no igualados | 4 |
| Interpretación de la frecuencia más/menos exigente en el ajuste del propio equipo | 2 |
| Distingue dB digitales relativos de dB SPL / fon | 2 |
| Relaciona la experiencia con la escucha de mezclas a diferente volumen y reconoce limitaciones | 2 |

No calificar por obtener valores específicos: no hay «respuesta correcta» en decibelios digitales, dada la diversidad de equipos.

## Consigna para Classroom

**Título:** Sesión 12B — Psicoacústica: ¿oímos igual todas las frecuencias?

Primero explora el rango audible con el oscilador de la sesión 12B (125 a 12.000 Hz), con volumen bajo y fijo: registra qué tonos distingues sin buscar tu límite auditivo. Después utiliza el laboratorio A/B de la sesión 12B para comparar un tono de referencia de **1.000 Hz** con tonos de **250, 500, 2.000 y 4.000 Hz**. Comienza con el volumen físico muy bajo y mantenlo fijo; ajusta solo la ganancia digital del tono B para que ambos parezcan igual de fuertes. Registra el ajuste relativo de cada frecuencia o indica cuando no puedas igualarla cómodamente. Entrega una captura de la tabla o gráfica de igualación y una conclusión de **4 a 6 líneas**. Incluye una comparación conceptual con la **tabla estándar de 40 fones** (250, 1.000 y 4.000 Hz) sobre qué frecuencias necesitaron más ajuste, por qué otras personas pueden obtener resultados diferentes y qué significa esto para escuchar o mezclar música a diferentes niveles. **No es una prueba de salud auditiva.**

## Respuestas que buscar durante la discusión

- Un sonido de **frecuencia alta** no es necesariamente más fuerte que uno grave.
- La sensibilidad auditiva depende de la frecuencia y también del nivel de escucha.
- Los resultados de los grupos están afectados por auriculares, altavoces, sala y factores personales.
- El **fon** no es un valor de volumen digital. Coincide numéricamente con dB SPL de un tono puro de **1 kHz** a igual sonoridad en condiciones estándar.
- Los resultados son útiles para **preguntar e interpretar**, no para diagnosticar ni reconstruir una curva ISO 226.

## Lecturas

- [Sesión 12B — página de estudiantes](../unidades/U-2-propagacion-exterior/sesion-12b/index.md)
- [AES — Curvas de igual sonoridad](https://aes.org/resources/audio-topics/loudness-project/learn-more/)
- [ISO 226:2023](https://www.iso.org/standard/83117.html)
- [OMS — Escucha segura](https://www.who.int/news-room/questions-and-answers/item/deafness-and-hearing-loss-safe-listening)
