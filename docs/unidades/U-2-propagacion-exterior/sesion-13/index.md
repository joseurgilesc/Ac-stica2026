# Sesión 13: ¿Por qué escuchamos detrás de una barrera?

**Tema:** difracción del sonido y funcionamiento de las barreras acústicas.

**Pregunta central:** si una pared bloquea nuestra visión, ¿por qué todavía podemos escuchar sonidos del otro lado?

**Al terminar podrás:** explicar la difracción, comparar lo que ocurre con graves y agudos, y utilizar una estimación sencilla de la pérdida por inserción (**IL**) de una barrera.

## 1. El sonido puede rodear obstáculos

La **difracción** ocurre cuando las ondas sonoras se propagan alrededor de un borde o a través de una abertura.

**Ejemplo:** estás en un pasillo, detrás de una esquina. No ves a quien está hablando, pero todavía puedes escuchar su voz.

Esto sucede porque el sonido es una **onda**, no una flecha rígida que viaja únicamente en línea recta.

### ¿Por qué los graves suelen rodear mejor los obstáculos?

La difracción depende de la **longitud de onda** (\(\lambda\)) comparada con el tamaño del obstáculo.

| Frecuencia | Longitud de onda aproximada en aire | Idea para recordar |
|---|---:|---|
| **125 Hz** (grave) | 2,74 m | Longitud de onda grande: rodea mejor obstáculos relativamente pequeños. |
| **500 Hz** (medio) | 0,69 m | Comportamiento intermedio. |
| **2.000 Hz** (medio-agudo) | 0,17 m | Longitud de onda más pequeña: una barrera puede producir una sombra más marcada. |
| **4.000 Hz** (agudo) | 0,086 m | Longitud de onda muy pequeña: suele atenuarse más detrás de una barrera adecuada. |

\[
\lambda=\frac{343}{f}
\]

**Regla sencilla:** cuanto **más larga** es la onda respecto al obstáculo, **más importante puede ser la difracción**.

!!! info "No confundas tres fenómenos"
    - **Reflexión:** el sonido cambia de dirección al encontrar una superficie (sesión 12).
    - **Difracción:** el sonido se propaga alrededor de bordes y esquinas (esta sesión).
    - **Transmisión:** parte del sonido atraviesa un material, como una pared o una puerta cerrada.

    Los graves que oyes desde una habitación vecina pueden llegar por **transmisión a través de la estructura**, por aberturas o por difracción alrededor de obstáculos; no debemos atribuirlo todo a un solo fenómeno.

## 2. ¿Para qué sirve una barrera acústica?

Una **barrera acústica** es un obstáculo colocado entre una fuente sonora y un receptor para reducir el sonido que llega al oyente.

**Observa en la simulación** cómo la barrera interrumpe la línea directa entre fuente y oyente, mientras el sonido todavía puede rodear su borde superior.


Si la barrera bloquea la **línea de visión directa**, el sonido todavía puede llegar difractándose por su borde superior o por los laterales.

Su eficacia depende, entre otros factores, de:

- **Frecuencia:** en condiciones comparables, las barreras suelen atenuar **mejor los agudos** que los graves.
- **Altura y posición:** una barrera más alta puede obligar a las ondas a rodear un camino mayor.
- **Longitud y continuidad:** el sonido también puede rodear los extremos o pasar por huecos.
- **Material:** una barrera demasiado ligera puede transmitir sonido a través de ella.

### Pérdida por inserción (IL)

La **IL** expresa cuántos decibelios disminuye el nivel sonoro en un mismo punto **al colocar la barrera**:

\[
\boxed{IL=L_{\text{sin barrera}}-L_{\text{con barrera}}}
\]

**Ejemplo:** en el mismo lugar se miden 80 dB sin barrera y 68 dB con barrera.

\[
IL=80-68=\boxed{12\ \text{dB}}
\]

**Interpretación:** la barrera produjo una reducción de 12 dB en las condiciones de esa comparación. No significa que el sonido haya desaparecido.

## 3. Cálculo simplificado de IL (método de Maekawa) { #calculo-simplificado-de-il-metodo-de-maekawa }

Para comprender **por qué una barrera atenúa de manera diferente según la frecuencia**, utilizaremos una estimación geométrica sencilla.

### Paso 1. Identifica los dos recorridos

- **Camino directo:** distancia desde la fuente hasta el receptor si no hubiera barrera.
- **Camino por el borde:** distancia desde la fuente hasta el borde superior de la barrera y después hasta el receptor.

La diferencia entre ambos recorridos se llama **\(\delta\)** (delta):

\[
\delta=d_{\text{por el borde}}-d_{\text{directo}}
\]

**Cuanto mayor es el rodeo adicional, mayor puede ser la atenuación.**

### Paso 2. Calcula una reducción aproximada

El número de Fresnel reúne la frecuencia y el rodeo adicional:

\[
N=\frac{2\delta}{\lambda}=\frac{2f\delta}{343}
\]

Para una barrera idealizada **opaca, suficientemente larga y que bloquea la visión directa**, utilizamos esta aproximación empírica de Maekawa:

\[
\boxed{IL\approx10\log_{10}(3+20N)}
\]

!!! warning "¿Cuándo se aplica?"
    Esta expresión es una **estimación**, no una ley universal ni un resultado garantizado. Se utiliza aquí para el caso de un solo borde, en la **zona de sombra** de la barrera, sin considerar transmisión por el material, extremos laterales, efectos del suelo o condiciones meteorológicas.

    Si **no existe barrera**, no aplicamos la expresión y no hay pérdida por inserción de una barrera. En el caso límite de una barrera que **apenas tapa la línea de visión**, el modelo da aproximadamente **4,8 dB** (no 0 dB). En barreras reales, la eficacia puede ser menor.

### Ejemplo con una sola geometría

Si el rodeo adicional es **\(\delta=0,17\ \text{m}\)**:

| Frecuencia | Longitud de onda \(\lambda\) | Número de Fresnel \(N\) | IL estimada |
|---|---:|---:|---:|
| **500 Hz** | 0,686 m | 0,50 | **11,1 dB** |
| **2.000 Hz** | 0,172 m | 1,98 | **16,3 dB** |

La barrera es la **misma**. Solo cambió la frecuencia: la onda más corta resulta más atenuada en este modelo.

### Simulación interactiva: diseña una barrera

Modifica la **altura** y la **frecuencia**. Observa el recorrido directo y el camino por el borde, la longitud de onda, el número de Fresnel y la IL aproximada.

<iframe src="../../../simulacion/barrera-maekawa.html" title="Simulación interactiva de difracción, altura de barrera y pérdida por inserción según un modelo de Maekawa" loading="lazy" style="width:100%;height:1160px;border:1px solid #d7e1eb;border-radius:12px;background:#fff;"></iframe>

[🎛️ **Abrir la simulación en pantalla completa**](../../../simulacion/barrera-maekawa.html){ .md-button }

**Para observar:**

1. Mantén la barrera a 2,8 m y cambia de **125 Hz a 4.000 Hz**. ¿Qué frecuencia se atenúa más?
2. Mantén **500 Hz** y aumenta la altura de la barrera. ¿Qué ocurre con el rodeo adicional \(\delta\) y la IL?
3. Selecciona **«Sin barrera»**. ¿Qué sucede con el camino directo?

??? info "Para profundizar: límites del modelo"
    La relación de Maekawa utilizada arriba es empírica y representa un caso idealizado. No se puede aplicar automáticamente a cualquier pantalla, frecuencia o geometría.

    Cerca del límite de visibilidad, el modelo de barrera puede indicar unos 5 dB de reducción. La [FHWA (Administración Federal de Carreteras de Estados Unidos)](https://www.fhwa.dot.gov/Environment/noise/noise_barriers/design_construction/keepdown.cfm) menciona ese valor como una regla orientativa cuando una barrera comienza a interrumpir la línea visual.

    La herramienta interactiva limita la representación de IL a **25 dB** como criterio práctico de modelado; **no es un máximo físico universal**. En instalaciones reales deben comprobarse las mediciones y el efecto de los flancos, la transmisión y el terreno.

## 4. Ejercicio práctico: ¿qué solución sería más eficaz?

**Situación:** se organiza un concierto al aire libre cerca de viviendas y se propone colocar una barrera entre el sistema PA y los vecinos.

En parejas, utiliza la simulación para responder:

| Pregunta | Respuesta del grupo |
|---|---|
| 1. ¿Qué frecuencia rodea mejor la barrera: 125 Hz o 4.000 Hz? | |
| 2. Al aumentar la altura, ¿qué sucede con el camino por el borde? | |
| 3. ¿Por qué una barrera corta podría funcionar peor que una larga? | |
| 4. ¿Es lo mismo reducir el ruido que eliminarlo por completo? | |

**Mini-cálculo:** un sonómetro registra **78 dB sin barrera** y **67 dB con barrera**, manteniendo las mismas condiciones. ¿Cuál fue la IL medida?

**Entrega:** las cuatro respuestas y el cálculo de IL. No se necesita diseñar una barrera real ni realizar cálculos avanzados.

## 5. Cierre: qué debes recordar

**Tres ideas esenciales:**

1. **La difracción** explica por qué una onda puede rodear una esquina o un borde.
2. **Las longitudes de onda grandes** suelen rodear con mayor facilidad los obstáculos relativamente pequeños.
3. **La barrera reduce, pero no elimina**, el sonido; su eficacia depende de la geometría, la frecuencia y las condiciones reales.

---

*Referencia de estudio: Everest, F. A. y Pohlmann, K. C. (2009). Master Handbook of Acoustics, 5.ª ed., tema de difracción y barreras acústicas. Complemento técnico: [FHWA, Highway Traffic Noise Barriers at a Glance](https://www.fhwa.dot.gov/Environment/noise/noise_barriers/design_construction/keepdown.cfm).*
