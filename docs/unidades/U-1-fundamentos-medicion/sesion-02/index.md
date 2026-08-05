# Sesión 2: Naturaleza física del sonido

**📚 Sesión** | *Herramientas: p5.js, Google Classroom, DAW*

---

## Contenidos

### 1. El sonido como onda mecánica

El sonido puede entenderse de dos maneras complementarias (Everest & Pohlmann, 2009, p. 1):

| Perspectiva | Definición | Campo |
|---|---|---|
| **Estímulo físico** | Onda que viaja a través de un medio elástico | Física / Acústica |
| **Sensación** | Excitación del mecanismo auditivo que produce percepción | Psicoacústica |

!!! note "Frecuencia ≠ Tono"
    La **frecuencia** es objetiva (se mide en Hz).  
    El **tono** (*pitch*) es subjetivo (cómo el oído la percibe).  
    *"We cannot equate frequency and pitch, but they are analogous."* (p. 1)

Para que un medio propague sonido, necesita dos propiedades:

```
┌─────────────────────────────────────────────┐
│            MEDIO ELÁSTICO                   │
│                                             │
│   Elasticidad  +  Inercia  =  Sonido ✓      │
│   (restaura la  (resiste el                 │
│    posición)     cambio)                    │
│                                             │
│   Sin elasticidad → no hay restauración     │
│   Sin inercia     → no hay oscilación       │
└─────────────────────────────────────────────┘
```

---

### 2. Movimiento armónico simple y la onda sinusoidal

```
    Masa en resorte           Onda sinusoidal resultante
    ───────────────           ─────────────────────────

      ✦ +5 ─┐                      ┌─┐
            │                     ╱   ╲
      │  0 ─┼─ ✦              ───✦─────✦─── tiempo
            │                       ╲   ╱
      ✦ -5 ─┘                      └─┘
                                          
    Una revolución = 360° = 1 ciclo = 1λ
```

El movimiento de la masa arriba y abajo, extendido en el tiempo, produce una **onda sinusoidal** — la forma de onda más pura y fundamental en acústica.

!!! tip "Concepto clave"
    La onda sinusoidal es al sonido lo que el círculo es a la geometría: el elemento básico del que todo se compone. Cualquier sonido periódico puede descomponerse en sinusoides (Fourier).

---

### 3. Propagación: compresión y rarefacción

Las partículas de aire NO viajan con la onda — **vibran localmente** mientras la perturbación se propaga.

```
  Dirección de la onda →→→→→→→→→→→→→→→→

  ┌─────────────────────────────────────────────────────┐
  │  ●●●●●  │  ●  ●  ●  │  ●●●●●  │  ●  ●  ●  │  ●●●●●  │
  │    C    │     R      │    C    │     R     │    C    │
  └─────────────────────────────────────────────────────┘
       ↑          ↑           ↑          ↑         ↑
  COMPRESIÓN  RAREFACCIÓN  COMPRESIÓN RAREFACCIÓN COMPRESIÓN
  (alta P)    (baja P)     (alta P)   (baja P)   (alta P)
```

| Zona | Moléculas | Presión relativa |
|---|---|---|
| **Compresión (C)** | Agrupadas ●●●●● | > Atmosférica (+ΔP) |
| **Rarefacción (R)** | Separadas ● ● ● | < Atmosférica (−ΔP) |

!!! warning "Escala minúscula"
    La diferencia de presión en una onda sonora es ínfima. El sonido más tenue detectable (20 µPa) es ~**5,000 millones de veces menor** que la presión atmosférica. El oído humano es extraordinariamente sensible.

---

### 4. Movimiento de partículas: ondas longitudinales

Existen tres tipos de movimiento ondulatorio:

```
  A) CIRCULAR         B) TRANSVERSAL        C) LONGITUDINAL
     (agua)              (cuerda)              (sonido en aire)

     ╭─○─╮             ╱╲  ╱╲              →●→ ●← ●→ ●← ●→
     ○   ○            ╱  ╲╱  ╲               →  →  →  →  →
     ╰─○─╯               ↘↗                  partículas vibran
   (órbitas)         (⟂ a la onda)          (∥ a la onda)
```

> El sonido en el aire es una **onda longitudinal**: las partículas vibran en la misma dirección en que viaja la onda. Su desplazamiento máximo es de apenas **unas diezmilésimas de pulgada**, incluso para sonidos fuertes (p. 4).

---

### 5. Velocidad del sonido

\[
\boxed{v_{\text{aire}} \approx 344\text{ m/s} \;\approx\; 1,130\text{ ft/s} \;\approx\; 770\text{ mi/h}}
\]

| Medio | Velocidad | Comparación |
|---|---|---|
| Aire (20°C) | 344 m/s | Referencia |
| Agua dulce | ~1,490 m/s | ~4.3× más rápido |
| Acero | ~5,090 m/s | ~14.8× más rápido |
| Luz (vacío) | 300,000,000 m/s | ~870,000× más rápido |

!!! info "Factores que afectan la velocidad"
    - **↑ Temperatura** → ↑ velocidad (+0.6 m/s por °C)
    - **↑ Humedad** → ↑ velocidad (ligeramente)
    - **↑ Densidad del medio** → ↑ velocidad (sólidos > líquidos > gases)
    - La frecuencia y la intensidad **no afectan** significativamente la velocidad

---

### 6. Amplitud, frecuencia, fase y longitud de onda

```
        λ (longitud de onda)
    ├──────────┤
        ┌─┐                 Amplitud (A) = altura máxima
       ╱   ╲               Período (T)   = tiempo de 1 ciclo
      ✦     ✦              Frecuencia (f) = 1/T ciclos/seg [Hz]
       ╲   ╱   A           Fase (φ)       = desplazamiento temporal
        └─┘
    ├─────┤
        T
```

**La relación fundamental de la acústica:**

\[
\Large{\lambda = \frac{v}{f}}
\]

| Frecuencia | Longitud de onda (aire, 20°C) | Referencia musical |
|---|---|---|
| 20 Hz | 17.2 m | Límite inferior audible |
| 50 Hz | 6.88 m | Subgrave electrónico |
| 100 Hz | 3.44 m | Grave de bajo |
| 440 Hz | 0.78 m | **La central (A4)** — diapasón |
| 1,000 Hz | 0.34 m | Frecuencia de referencia |
| 4,000 Hz | 8.6 cm | Presencia vocal |
| 10,000 Hz | 3.4 cm | Brillo / aire |
| 20,000 Hz | 1.7 cm | Límite superior audible |

!!! tip "¿Por qué importa λ?"
    La longitud de onda determina cómo interactúa el sonido con los objetos:
    - Si λ >> objeto → el sonido lo **rodea** (difracción)
    - Si λ << objeto → el sonido se **refleja**
    - Esto explica por qué los graves (λ grande) son difíciles de controlar en salas pequeñas

---

## Simulación interactiva

Modifica los parámetros y activa/desactiva capas para analizar cada fenómeno por separado:

- 🟢 **Desplazamiento** — onda sinusoidal de las partículas
- 🔴 **Presión** — derivada (coseno), máx. en cruces por cero
- 🟡🔵 **Partículas** — coloreadas por zona (compresión/rarefacción)
- 🟠🟢 **Densidad** — fondo coloreado por concentración de moléculas

<iframe src="simulacion.html" width="100%" height="560" style="border: none; border-radius: 8px;"></iframe>

---

## Actividades

### En clase

- **Demostración física**: vibración con cuerda, diapasón o altavoz — observar nodos y antinodos.
- **Observación en DAW**: capturar formas de onda de voz, guitarra, sinusoidal y ruido blanco. Comparar.
- **Simulación p5.js**:
    1. Configurar 3 combinaciones diferentes de parámetros (ej: baja frecuencia + alta amplitud vs alta frecuencia + baja amplitud)
    2. Capturar pantalla de cada configuración
    3. Activar/desactivar capas para entender cada fenómeno por separado

### Para entregar

| Parámetro | ¿Qué cambia visualmente? | ¿Qué cambia auditivamente? |
|---|---|---|
| **Amplitud** | | |
| **Frecuencia** | | |
| **Fase** | | |
| **Velocidad** | | |

### En Classroom

Asocia cada término con lo que observas en la simulación:

- Amplitud → ________________
- Frecuencia → ________________
- Fase → ________________
- Longitud de onda → ________________
- Compresión → ________________
- Rarefacción → ________________

### En la bitácora

Responde en 150 palabras: ¿Por qué el sonido en el aire es una onda longitudinal y no transversal? ¿Qué pasaría si no existiera un medio elástico?

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). **Master Handbook of Acoustics** (5th ed.). McGraw-Hill. Capítulo 1: Fundamentals of Sound, pp. 1–16.*
