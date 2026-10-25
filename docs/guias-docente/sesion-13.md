# Guía docente — Sesión 13: Difracción y barreras acústicas

**Duración sugerida:** 120 minutos.

**Pregunta central:** ¿por qué escuchamos una fuente sonora aunque no exista línea de visión directa?

**Enfoque:** explicación sencilla de la difracción, comparación graves–agudos y ejercicio básico de pérdida por inserción (IL). El método de Maekawa se usa como **modelo estimativo** y no como proyecto de ingeniería real.

## Secuencia de la clase

| Tiempo | Actividad | Aprendizaje |
|---|---|---|
| 10 min | Presentar el caso: escuchar una conversación detrás de una esquina | Diferenciar sombra visual de sombra acústica |
| 20 min | Difracción y relación entre longitud de onda y tamaño del obstáculo | Por qué los graves rodean obstáculos relativamente pequeños |
| 20 min | Barrera acústica, caminos y definición de IL | Distinguir reducción medida de estimación calculada |
| 25 min | Simulación Maekawa: altura y cuatro frecuencias | Comprender cómo cambian δ, N e IL |
| 30 min | Ejercicio en parejas: barrera de un concierto exterior | Aplicación sin cálculos complejos |
| 15 min | Corrección y discusión | Reconocer límites del modelo |
| **Total** | **120 min** | |

## Conceptos esenciales

- **Difracción:** propagación de ondas alrededor de bordes y aberturas. Su importancia relativa aumenta cuando la longitud de onda es grande frente a las dimensiones relevantes de la geometría.
- **Reflexión:** cambio de dirección en una superficie. **Transmisión:** energía que atraviesa un material. No explicar toda la audición de graves entre habitaciones como difracción: pueden dominar la transmisión estructural y las fugas.
- **Longitud de onda:** \(\lambda=343/f\) para aire a temperatura próxima a 20 °C.
- **Barrera acústica:** para atenuar debe interrumpir el camino directo, ser suficientemente larga y reducir la transmisión a través de su material.
- **IL (pérdida por inserción):** \(L_{\mathrm{sin}}-L_{\mathrm{con}}\) en el mismo receptor bajo condiciones comparables.
- **Rodeo adicional:** \(\delta=d_{\mathrm{fuente-borde-receptor}}-d_{\mathrm{directo}}\).
- **Fresnel:** \(N=2\delta/\lambda\).
- **Aproximación empírica de Maekawa en la zona de sombra:** \(IL\approx10\log_{10}(3+20N)\ \mathrm{dB}\), para una barrera opaca y suficientemente larga.

La **simulación interactiva** integra altura de barrera (1,6–5 m), frecuencia (125, 500, 2.000 y 4.000 Hz), longitudes de camino, número de Fresnel e IL. Los niveles se presentan como estimaciones, con un límite práctico de visualización de 25 dB.

[Ver simulación Maekawa](../simulacion/barrera-maekawa.html)

### Dos ejemplos para resolver juntos

**Caso A — IL medida.** Se registran 80 dB sin barrera y 68 dB con barrera, en el mismo punto y con condiciones comparables:

\[
IL=80-68=\boxed{12\ \mathrm{dB}}
\]

**Caso B — Maekawa (estimación en sombra).** Para \(\delta=0,17\ \mathrm{m}\):

| f | λ (m) | N | IL aproximada |
|---|---:|---:|---:|
| 500 Hz | 0,686 | 0,50 | 11,1 dB |
| 2.000 Hz | 0,172 | 1,98 | 16,3 dB |

**Advertencia clave:** si se utiliza la fórmula para \(N=0\), el resultado es alrededor de 4,8 dB, correspondiente al límite de una barrera que apenas tapa la visión directa, **no al caso de ausencia de barrera**. Con la barrera ausente, el modelo debe marcar IL de barrera igual a cero.

## Solución del ejercicio de estudiantes

1. **125 Hz** rodea relativamente mejor el borde de una misma barrera que **4.000 Hz**, porque su longitud de onda es más grande.
2. Aumentar la altura de una barrera que ya bloquea la visión directa generalmente aumenta la **longitud del rodeo adicional δ**.
3. Si es demasiado corta, las ondas pueden rodearla **por los laterales**; la simulación representa solo el borde superior.
4. Una barrera reduce el sonido pero no lo elimina: hay difracción, posibles trayectorias laterales y transmisión por el material.

**Mini-cálculo:** \(78-67=\boxed{11\ \mathrm{dB}}\) de IL medida, si los registros corresponden a condiciones comparables.

## Evitar estas afirmaciones erróneas

- **«Una barrera produce 0 dB de IL si N = 0».** La fórmula simplificada da ~4,8 dB en su caso límite de línea de visión tangente.
- **«Los graves atraviesan paredes gracias a la difracción».** La transmisión a través del muro es otro fenómeno.
- **«Una puerta muy pequeña deja pasar siempre más graves que agudos».** La difracción angular por una abertura no determina por sí sola la energía transmitida.
- **«La barrera tiene un máximo físico universal de 25 dB».** Los límites prácticos varían según método, configuración y fenómenos omitidos.
- **«La IL calculada con Maekawa es la reducción exacta del ruido de todo un concierto».** El cálculo es para una frecuencia/geometría idealizadas y no sustituye mediciones por bandas ni un estudio real.

## Recursos

- [Sesión 13 para estudiantes](../unidades/U-2-propagacion-exterior/sesion-13/index.md)
- [FHWA — Highway Traffic Noise Barriers at a Glance](https://www.fhwa.dot.gov/Environment/noise/noise_barriers/design_construction/keepdown.cfm)
- Everest, F. A. y Pohlmann, K. C. (2009), *Master Handbook of Acoustics*, 5.ª ed., difusión y difracción del sonido.
