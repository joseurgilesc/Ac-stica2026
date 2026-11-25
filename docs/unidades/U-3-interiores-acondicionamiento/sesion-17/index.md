# Sesión 17: Introducción al sonido en interiores

**Unidad 3: Sonido en interiores y acondicionamiento acústico**

## Pregunta de la sesión

**¿El nivel y la respuesta en frecuencia de un parlante cambian con la distancia de la misma manera en interiores que en campo libre?**

En la unidad anterior estudiamos cómo se propaga el sonido en exteriores. Ahora investigaremos qué sucede cuando el sonido se propaga dentro de una habitación y encuentra paredes, suelo, techo y otros objetos.

### Resultados de aprendizaje

- Diferenciar el **sonido directo** del **sonido reflejado**.
- Reconocer que una sala modifica el nivel y la respuesta en frecuencia.
- Utilizar **Room EQ Wizard (REW)** para realizar y comparar mediciones.
- Contrastar la predicción de campo libre con resultados obtenidos en interiores.

## 1. ¿Qué cambia cuando el sonido entra en una habitación?

En campo libre ideal, el sonido directo de una fuente puntual se atenúa unos **6 dB cada vez que duplicamos la distancia**. En una sala también llegan sonidos reflejados, y por eso el nivel total no tiene por qué seguir exactamente esa regla.

Cuando el sonido alcanza una superficie pueden producirse varios fenómenos:

| Fenómeno | Explicación sencilla | Ejemplo |
|---|---|---|
| **Reflexión** | Parte del sonido regresa al recinto. | Pared rígida. |
| **Absorción** | Parte de la energía se disipa en el material. | Panel absorbente. |
| **Transmisión** | Parte del sonido atraviesa la separación. | Sonido que pasa a otro cuarto. |
| **Difusión** | La reflexión se distribuye en distintas direcciones. | Superficie difusora. |

**Campo directo:** sonido que llega del parlante al micrófono sin rebotar.

**Sonido reflejado:** sonido que llega después de interactuar con las superficies. Las múltiples reflexiones tardías pueden contribuir al **campo reverberante**; este no es necesariamente uniforme en una sala pequeña.

!!! question "Para conversar"
    ¿Por qué un mismo monitor de estudio puede sonar diferente cerca del parlante, junto a una pared o en otro punto de la habitación?

## 2. Esta vez mediremos con un sistema más profesional

En prácticas anteriores utilizamos recursos de medición más sencillos, como aplicaciones de teléfono. **En esta sesión trabajaremos con una cadena de medición acústica más especializada**, que nos permite registrar curvas completas de respuesta en frecuencia, guardar las mediciones y comparar sus diferencias:

| Equipo | Función |
|---|---|
| **Beyerdynamic MM1** | Micrófono de medición para captar la respuesta acústica. |
| **Shure MVi** | Interfaz de audio para la entrada del micrófono y la salida hacia el monitor. |
| **Alesis M1 Active** | Monitor de estudio activo que reproduce el barrido. |
| **Room EQ Wizard (REW)** | Software que genera la señal, registra la respuesta y permite analizarla. |
| **Trípode y cinta métrica** | Mantener posiciones y distancias reproducibles. |

!!! important "Más especializado no significa automáticamente calibrado"
    El uso de un micrófono de medición y REW mejora el control y la reproducibilidad del experimento, pero **los valores absolutos de dB SPL solo son fiables con la calibración correspondiente**. Si no está disponible, compararemos principalmente **diferencias de nivel** entre tomas realizadas con la misma configuración. Si se dispone del archivo de calibración individual del MM1, cargar el correspondiente a la orientación del micrófono.

Manual de referencia: [Ayuda oficial de Room EQ Wizard](https://www.roomeqwizard.com/help/help_en-GB/html/index.html).

## 3. Práctica por grupos: distancia y respuesta en frecuencia

### Pregunta de investigación

**¿Qué cambia en la respuesta en frecuencia de un mismo parlante cuando modificamos la distancia y la posición del micrófono dentro de una sala?**

### Organización

Trabajaremos en **tres grupos**. Cada grupo tendrá una distancia principal respecto del Alesis y realizará **cuatro mediciones**, para obtener **12 mediciones en total**.

| Grupo | Distancia principal | Número de mediciones |
|---|---:|---:|
| **Grupo 1** | **1 m** | 4 |
| **Grupo 2** | **2 m** | 4 |
| **Grupo 3** | **4 m** | 4 |

Si la habitación no permite 4 m sin quedar demasiado cerca de paredes u obstáculos, el docente indicará distancias alternativas comunes para la comparación.

### Preparación y condiciones de control

1. Colocar el **Alesis M1 Active** en un lugar fijo. Utilizar **un solo parlante**.
2. Conectar el **MM1** a la entrada de micrófono de la **Shure MVi**. Habilitar la alimentación phantom según corresponda y mantener la interfaz en modo **Flat**, sin efectos de procesamiento.
3. Configurar en **REW → Preferences → Soundcard** la entrada del MM1, la salida de la interfaz y una frecuencia de muestreo de **48 kHz**.
4. En **Measure**, utilizar una frecuencia inicial de **40 Hz**, final de **20 kHz**, longitud **256k** y nivel de barrido inicial de **−12 dBFS**, sujeto a la comprobación de niveles.
5. Ejecutar **Check Levels**. Ajustar un volumen moderado y evitar saturación. **No modificar el volumen del parlante ni la ganancia de entrada durante las doce mediciones.**
6. Mantener la altura del micrófono aproximadamente a la altura del tweeter, apuntándolo hacia el monitor. Medir con el trípode y despejar el entorno inmediato.

### Cuatro tomas por grupo

En las tres primeras tomas, la distancia entre micrófono y parlante debe mantenerse aproximadamente constante para cada grupo. Para las posiciones laterales, comprobarla con la cinta métrica y volver a orientar el micrófono hacia el parlante.

| Toma | Posición del micrófono | Propósito |
|---|---|---|
| **A — central** | Sobre el eje del parlante, a la distancia asignada. | Referencia del grupo. |
| **B — izquierda** | Aproximadamente **30 cm a la izquierda**, conservando la distancia al parlante. | Observar variación espacial. |
| **C — derecha** | Aproximadamente **30 cm a la derecha**, conservando la distancia. | Comparar posiciones. |
| **D — repetición** | Regresar exactamente a **A** y repetir la medición. | Comprobar repetibilidad. |

!!! tip "Qué debe mantenerse constante"
    No mover el Alesis ni cambiar el nivel de salida, la ganancia, el archivo de calibración, la frecuencia de muestreo o la configuración del barrido. Evitar que haya personas muy cerca del micrófono. Un desplazamiento lateral también cambia ligeramente el ángulo respecto al parlante: considerarlo al interpretar los agudos.

Guardar cada toma en REW con un nombre identificable: **G1-A-1m**, **G1-B-1m**, etc. Al terminar, guardar el proyecto en **.mdat**.

### Análisis 1. Comparación dentro de cada grupo

1. Abrir **All SPL** y mostrar las tomas **A, B y C** del grupo.
2. Aplicar el mismo suavizado de **1/12 de octava** a todas las curvas.
3. Identificar **dos picos** y **dos valles** que cambien entre las posiciones.
4. Superponer **A y D**: ¿son prácticamente iguales? Si difieren mucho, discutir posibles errores de procedimiento.
5. Leer y anotar los niveles mostrados por REW en las siguientes frecuencias:

| Frecuencia | Toma A | Toma B | Toma C |
|---|---|---|---|
| **100 Hz** | — | — | — |
| **500 Hz** | — | — | — |
| **1 kHz** | — | — | — |
| **4 kHz** | — | — | — |

**Preguntas:** ¿Qué frecuencias cambian más al desplazarse lateralmente? ¿Por qué el mismo parlante no produce una curva idéntica en los tres puntos?

### Análisis 2. Comparación entre los tres grupos

Reunir las **tomas A** de los grupos 1, 2 y 3 en **All SPL**. Mantener las curvas en sus niveles originales, **sin alinearlas**, para comparar también las diferencias de nivel.

Primero, formular una predicción ideal de campo libre:

| Distancia | Cambio de nivel ideal respecto de 1 m |
|---|---:|
| **1 m** | **0 dB** |
| **2 m** | **−6 dB aprox.** |
| **4 m** | **−12 dB aprox.** |

Después, contrastarla con las mediciones reales. Esos valores son **predicciones para el campo directo ideal**, no resultados obligatorios en la sala.

**Preguntas:** ¿En qué frecuencias se parece el resultado al modelo de campo libre? ¿Dónde difiere? ¿Qué influencia pueden tener las reflexiones, las resonancias y la directividad del monitor?

### Análisis 3. Primera observación del decaimiento

Cada grupo seleccionará su **toma A** y abrirá **Spectrogram** en REW.

1. Mostrar preferentemente el intervalo **40–300 Hz**.
2. Identificar una o dos frecuencias con energía elevada o aparentemente persistente.
3. Guardar una captura del espectrograma.
4. Explicar con palabras propias qué representa la persistencia temporal.

!!! warning "Interpretación"
    Una banda de color que se prolonga en el espectrograma **no es automáticamente un valor de RT60**. El decaimiento y los modos de sala se estudiarán con mayor profundidad en próximas sesiones.

## 4. Entrega por grupo

Entregar un informe breve con:

1. **All SPL:** captura de las tomas A, B y C, más comparación A–D.
2. **Tabla:** niveles en 100 Hz, 500 Hz, 1 kHz y 4 kHz para A, B y C.
3. **Spectrogram:** una captura de la toma A y una observación de las frecuencias más persistentes.
4. **Conclusión:** responder en un párrafo cómo influyen la posición, la distancia y las reflexiones del recinto.
5. **Archivo REW (.mdat):** las cuatro mediciones identificadas.

### Discusión colectiva de cierre

**¿El nivel sonoro disminuye con la distancia de la misma manera en interiores que en exteriores?**

Compararemos las tres tomas A, identificaremos diferencias respecto al modelo de −6 dB por duplicación de distancia y discutiremos por qué medir con un micrófono especializado aporta información que una lectura aislada de sonómetro no muestra.

---

**Para las próximas sesiones:** coeficientes de absorción, reverberación, reflexiones tempranas, interferencias y modos de sala.

*Base conceptual: Everest, F. A. & Pohlmann, K. C. (2009), Master Handbook of Acoustics (5.ª ed.), cap. 11; procedimiento de medición: manual oficial de Room EQ Wizard.*