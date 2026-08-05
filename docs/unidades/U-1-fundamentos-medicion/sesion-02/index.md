# Sesión 2: Naturaleza física del sonido

## Contenidos

### El sonido como onda mecánica

El sonido puede entenderse de dos maneras complementarias (Everest & Pohlmann, 2009, p. 1):

| Perspectiva | Definición | Campo |
|---|---|---|
| **Estímulo físico** | Onda que viaja a través de un medio elástico | Física / Acústica |
| **Sensación** | Excitación del mecanismo auditivo que produce percepción | Psicoacústica |

!!! note "Frecuencia ≠ Tono"
    La **frecuencia** es objetiva (se mide en Hz). El **tono** (*pitch*) es subjetivo (cómo el oído la percibe). *"We cannot equate frequency and pitch, but they are analogous."*

Para que un medio propague sonido, necesita dos propiedades: **elasticidad** (restaura la posición) e **inercia** (resiste el cambio). Sin ambas, no hay oscilación posible.

### Movimiento armónico simple y la onda sinusoidal

Una masa en un resorte que oscila arriba y abajo describe un **movimiento armónico simple**. Si se registra su posición en el tiempo, se obtiene una **onda sinusoidal** — la forma de onda más pura y fundamental en acústica.

Una revolución completa equivale a 360° — un ciclo. La onda sinusoidal es al sonido lo que el círculo a la geometría: el elemento básico del que todo se compone (Fourier).

### Propagación: compresión y rarefacción

Las partículas de aire **no viajan con la onda**: vibran localmente mientras la perturbación se propaga. El movimiento alternado crea:

- **Compresión (C)**: moléculas agrupadas → presión superior a la atmosférica (~14.7 lb/in²)
- **Rarefacción (R)**: moléculas separadas → presión inferior a la atmosférica

!!! warning "Escala minúscula"
    El sonido más tenue detectable (20 µPa) es ~**5,000 millones de veces menor** que la presión atmosférica. El oído humano es extraordinariamente sensible.

### Movimiento de partículas: ondas longitudinales

Existen tres tipos de movimiento ondulatorio, pero el sonido en el aire es una **onda longitudinal**: las partículas vibran en la misma dirección en que viaja la onda. Su desplazamiento máximo es de apenas unas diezmilésimas de pulgada, incluso para sonidos fuertes.

> Observa la diferencia entre los tres tipos en la simulación interactiva más abajo.

### Velocidad del sonido

\[
\boxed{v_{\text{aire}} \approx 344\text{ m/s} \;\approx\; 1,130\text{ ft/s} \;\approx\; 770\text{ mi/h}}
\]

| Medio | Velocidad | vs. Aire |
|---|---|---|
| Aire (20°C) | 344 m/s | 1× |
| Agua dulce | ~1,490 m/s | ~4.3× |
| Acero | ~5,090 m/s | ~14.8× |

La velocidad del sonido aumenta con la temperatura (~0.6 m/s por °C), con la humedad (ligeramente), y con la densidad del medio. No depende de la frecuencia ni de la intensidad.

### Amplitud, frecuencia, fase y longitud de onda

**La relación fundamental de la acústica:**

\[
\Large{\lambda = \frac{v}{f}}
\]

| Frecuencia | Longitud de onda (aire, 20°C) | Referencia musical |
|---|---|---|
| 20 Hz | 17.2 m | Límite inferior audible |
| 50 Hz | 6.88 m | Subgrave |
| 100 Hz | 3.44 m | Grave de bajo |
| 440 Hz | 0.78 m | **La central (A4)** |
| 1,000 Hz | 0.34 m | Referencia |
| 4,000 Hz | 8.6 cm | Presencia vocal |
| 10,000 Hz | 3.4 cm | Brillo / aire |
| 20,000 Hz | 1.7 cm | Límite superior audible |

!!! tip "¿Por qué importa λ?"
    Si λ es mucho mayor que un obstáculo, el sonido lo **rodea** (difracción). Si λ es mucho menor, el sonido se **refleja**. Esto explica por qué los graves (λ grande) son difíciles de controlar en recintos pequeños.

---

## Simulación interactiva

Modifica los parámetros y activa/desactiva capas para analizar cada fenómeno:

- **Desplazamiento** — movimiento sinusoidal de las partículas (línea continua)
- **Presión** — derivada de la posición, máxima en los cruces por cero (línea punteada)
- **Partículas** — puntos coloreados por zona de compresión o rarefacción
- **Densidad** — fondo graduado según concentración molecular

<iframe src="simulacion.html" width="100%" height="560" style="border: none; border-radius: 8px;"></iframe>

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill. Capítulo 1, pp. 1–16.*
