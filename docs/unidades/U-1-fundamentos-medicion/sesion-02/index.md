# Sesión 2: Naturaleza física del sonido

**📚 Sesión** | *Herramientas: p5.js, Google Classroom*

## Contenidos

### El sonido como onda mecánica

El sonido puede entenderse de dos maneras complementarias (Everest & Pohlmann, 2009, p. 1):

- Como **estímulo físico**: una onda que viaja a través del aire u otro medio elástico. Es un problema de física.
- Como **sensación**: una excitación del mecanismo auditivo que resulta en la percepción del sonido. Es un problema psicoacústico.

!!! note "Objetivo vs. Subjetivo"
    La **frecuencia** es una propiedad objetiva (se mide en Hz con un osciloscopio).  
    El **tono** (*pitch*) es una propiedad subjetiva (cómo el oído percibe esa frecuencia).  
    No son lo mismo, aunque están relacionados.

Para que un medio pueda conducir sonido, debe poseer dos propiedades fundamentales: **elasticidad** e **inercia**. Sin ellas, la vibración no puede propagarse.

### El movimiento armónico simple y la onda sinusoidal

El movimiento de una masa en un resorte (Fig. 1-1 del libro) es el ejemplo clásico de **movimiento armónico simple**. Si se coloca un lápiz en la masa y se desliza un papel a velocidad constante, la curva resultante es una **onda sinusoidal** (*sine wave*).

La onda sinusoidal es la forma de onda más pura y fundamental en acústica. Una revolución completa equivale a 360° (un ciclo).

### Propagación: compresión y rarefacción

Cuando una onda sonora viaja por el aire, las partículas no se desplazan grandes distancias — vibran alrededor de su posición de equilibrio. Lo que viaja es la **perturbación**, no las partículas mismas.

El movimiento de las partículas crea zonas alternantes:

- **Compresión (C)**: moléculas agrupadas → presión ligeramente superior a la atmosférica (~14.7 lb/in²).
- **Rarefacción (R)**: moléculas separadas → presión ligeramente inferior a la atmosférica.

!!! tip "Dato clave"
    La diferencia de presión entre una compresión y una rarefacción es minúscula. El sonido más tenue que el oído puede detectar (20 µPa) es **5,000 millones de veces menor** que la presión atmosférica.

### Movimiento de partículas: ondas longitudinales

Existen tres tipos de movimiento de partículas en ondas:

| Tipo | Ejemplo | Movimiento |
|---|---|---|
| Circular | Ondas en el agua | Partículas trazan órbitas circulares |
| Transversal | Cuerda de violín | Partículas vibran perpendicular a la dirección de la onda |
| **Longitudinal** | **Sonido en el aire** | **Partículas vibran en la misma dirección que viaja la onda** |

En el sonido en el aire, las partículas se mueven hacia adelante y hacia atrás en la dirección de propagación. Su desplazamiento máximo es de apenas unas diezmilésimas de pulgada, incluso para sonidos fuertes.

### Velocidad del sonido

La velocidad del sonido en el aire es aproximadamente:

\[
v \approx 344 \text{ m/s} \approx 1,130 \text{ ft/s} \approx 770 \text{ mi/h}
\]

Factores que afectan la velocidad:

- **Medio**: más rápido en sólidos (acero: ~16,700 ft/s) que en líquidos (agua: ~4,900 ft/s) que en gases (aire: ~1,130 ft/s).
- **Temperatura**: aumenta ~1.1 ft/s por cada °F de aumento.
- **Humedad**: a mayor humedad, mayor velocidad.

!!! warning "No confundir"
    La **velocidad del sonido** (qué tan rápido viaja la energía) es diferente de la **velocidad de partícula** (qué tan rápido vibra una partícula individual). La velocidad de partícula depende de la intensidad del sonido.

### Amplitud, frecuencia, período, fase y longitud de onda

La relación fundamental de la acústica:

\[
\lambda = \frac{v}{f}
\]

Donde:
- \(\lambda\) = longitud de onda (ft o m)
- \(v\) = velocidad del sonido (~1,130 ft/s en aire)
- \(f\) = frecuencia (Hz)

| Frecuencia | Longitud de onda (aprox.) | Ejemplo |
|---|---|---|
| 20 Hz | 56.5 ft (17.2 m) | Límite inferior audible |
| 100 Hz | 11.3 ft (3.4 m) | Grave profundo |
| 440 Hz | 2.57 ft (0.78 m) | La central (A4) |
| 1,000 Hz | 1.13 ft (0.34 m) | Frecuencia de referencia |
| 5,000 Hz | 2.7 in (6.9 cm) | Agudo |
| 10,000 Hz | 1.35 in (3.4 cm) | Muy agudo |

> **"This relationship is perhaps the most fundamentally important relationship in audio."** — Everest & Pohlmann, p. 7

---

## Simulación interactiva: Onda sonora

Usa los controles para modificar los parámetros de la onda y observa cómo cambia su comportamiento. La simulación muestra:

- 🟡 **Partículas de aire** vibrando
- 🔵 **Línea azul**: desplazamiento de las partículas (onda sinusoidal)
- 🔴 **Línea roja punteada**: presión sonora (derivada del desplazamiento, en fase de coseno)
- 🟠 **Partículas amarillas**: zonas de compresión (moléculas juntas)
- 🔵 **Partículas azules**: zonas de rarefacción (moléculas separadas)

<iframe src="simulacion.html" width="100%" height="480" style="border: none; border-radius: 8px;"></iframe>

---

## Actividades

- Demostración física de vibración utilizando una cuerda, membrana, altavoz o diapasón.
- Observación de formas de onda de voz, instrumentos y tonos sinusoidales en un DAW u osciloscopio.
- Uso de la simulación en p5.js para modificar amplitud, frecuencia, fase y velocidad de animación de una onda.
- Registro de capturas de tres configuraciones diferentes de la simulación (documentar los valores usados).
- Elaboración de una tabla donde describas qué cambia visual y auditivamente al modificar cada parámetro:

| Parámetro | ¿Qué cambia visualmente? | ¿Qué cambia auditivamente? |
|---|---|---|
| Amplitud | | |
| Frecuencia | | |
| Fase | | |
| Velocidad | | |

- Actividad en Classroom: asocia los conceptos físicos (amplitud, frecuencia, fase, longitud de onda, compresión, rarefacción) con elementos observables en la simulación.
- Conclusión breve en la bitácora: explica con tus palabras la diferencia entre amplitud, frecuencia y fase. ¿Por qué el sonido es una onda longitudinal y no transversal?

---

*Referencia: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 1, pp. 1-7.*
