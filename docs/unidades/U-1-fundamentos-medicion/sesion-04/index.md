# Sesión 4: Del tono puro al timbre

**Armónicos, espectro, periodicidad y ruido**

---

??? info "Unidades y símbolos (glosario de referencia)"
    Consultá esta tabla cuando encuentres una unidad o símbolo que no conozcas.

    | Símbolo | Nombre | ¿Qué mide? | Equivalencia |
    |---|---|---|---|
    | <a id="hz"></a>**Hz** | Hertz | Frecuencia (ciclos por segundo) | 1 Hz = 1/s |
    | <a id="khz"></a>**kHz** | Kilohertz | Frecuencia | 1 kHz = 1,000 Hz |
    | <a id="s"></a>**s** | Segundo | Tiempo | — |
    | <a id="ms"></a>**ms** | Milisegundo | Tiempo | 1 ms = 0.001 s |
    | <a id="f"></a>**f** | Frecuencia | Ciclos por segundo | f = 1 / T |
    | <a id="f0"></a>**f₀** | Frecuencia fundamental | Primera componente de una serie armónica | La más grave; suele definir la altura percibida |
    | <a id="T"></a>**T** | Período | Duración de un ciclo | T = 1 / f |
    | <a id="A"></a>**A** | Amplitud | Magnitud de una oscilación | — |
    | <a id="phi"></a>**φ** | Fase inicial | Posición dentro del ciclo | En radianes o grados |

!!! abstract "Objetivos de la sesión"
    Al finalizar, deberías poder responder cuatro preguntas:

    1. ¿Qué diferencia un **tono puro** de un **sonido complejo**?
    2. ¿Qué es un **armónico** y cómo se relaciona con la frecuencia fundamental?
    3. ¿Por qué dos instrumentos que tocan la misma nota pueden sonar diferentes?
    4. ¿Qué diferencia una señal **periódica** de una señal **aperiódica** o de ruido?

---

## 1. Primero escuchamos: ¿un sonido o muchas frecuencias?

Un **tono puro** contiene una sola frecuencia. En acústica se representa con una onda sinusoidal.

La mayoría de los sonidos musicales, en cambio, son **complejos**: contienen muchas frecuencias simultáneas. Aun así, el oído puede percibirlas como una sola nota con un timbre particular.

<div class="audio-lab" data-session04-audio>
  <h4>🎧 Experimento 1 — Construye un sonido</h4>
  <p>Usamos como fundamental un Do3 ≈ 130.8 Hz. Escucha cómo cambia el timbre al añadir componentes.</p>
  <div class="audio-controls">
    <button class="audio-btn" data-play-harmonics="1">▶ Solo fundamental</button>
    <button class="audio-btn" data-play-harmonics="1,2">▶ + octava</button>
    <button class="audio-btn" data-play-harmonics="1,2,3">▶ + quinta</button>
    <button class="audio-btn" data-play-harmonics="1,2,3,4,5,6,7,8">▶ Primeros 8 armónicos</button>
  </div>
</div>

!!! question "Escucha antes de leer la explicación"
    - ¿Sigues percibiendo aproximadamente una sola altura?
    - ¿Qué cambia más: la **altura** o el **timbre**?
    - ¿El sonido se vuelve más simple o más rico?

Joseph Fourier demostró que una onda periódica compleja puede representarse como una suma de ondas sinusoidales de diferentes frecuencias, amplitudes y fases.

> **Idea clave:** una forma de onda compleja puede entenderse como la suma de componentes simples.

| Concepto | Definición | Ejemplo |
|---|---|---|
| **Tono puro** | Una sola frecuencia sinusoidal | Tono de prueba |
| **Onda compleja periódica** | Suma de componentes que mantienen una relación periódica | Nota sostenida de un instrumento |
| **Onda compleja aperiódica** | No presenta un ciclo estable que se repita | Ruido, algunos ataques, platillos |

!!! info "Síntesis aditiva"
    Construir un sonido sumando sinusoides se denomina **síntesis aditiva**. El experimento anterior es una forma básica de síntesis aditiva.

---

## 2. Fundamental, armónicos y parciales

Cuando una fuente musical vibra, puede hacerlo en varios modos simultáneamente. La frecuencia más baja suele llamarse **frecuencia fundamental** ((f_0)).

Si las demás componentes son múltiplos enteros exactos de esa fundamental, hablamos de **armónicos**:

[
f_n = n cdot f_0
]

Por ejemplo, si:

[
f_0 = 100	ext{ Hz}
]

entonces:

[
2f_0 = 200	ext{ Hz},quad 3f_0 = 300	ext{ Hz},quad 4f_0 = 400	ext{ Hz}
]

| Término | Qué significa | Ejemplo si (f_0=100) Hz |
|---|---|---:|
| **Fundamental** | Primer componente de la serie | 100 Hz |
| **2.º armónico** | Dos veces la fundamental | 200 Hz |
| **3.º armónico** | Tres veces la fundamental | 300 Hz |
| **Parcial** | Cualquier componente frecuencial presente | 100, 215, 300 Hz… |

!!! warning "Armónico y parcial no son sinónimos"
    Todo armónico es un parcial, pero no todo parcial es armónico. Campanas, platillos y membranas pueden presentar parciales **inarmónicos**, es decir, componentes que no son múltiplos enteros exactos de una sola fundamental.

---

## 3. La serie armónica como mapa de intervalos

Tomemos como fundamental **Do2 ≈ 65.4 Hz**.

En lugar de memorizar dieciséis números, vamos a buscar **familias** dentro de la serie.

<div class="harmonic-lab" data-session04-audio>
  <h4>🎨 Explora la serie armónica</h4>
  <p>Selecciona una familia para ver qué armónicos generan octavas, quintas, terceras y la séptima natural.</p>

  <div class="harmonic-filters">
    <button class="harmonic-filter active" data-harmonic-filter="all">Todos</button>
    <button class="harmonic-filter" data-harmonic-filter="octaves">🔵 Octavas</button>
    <button class="harmonic-filter" data-harmonic-filter="fifths">🟠 Quintas</button>
    <button class="harmonic-filter" data-harmonic-filter="thirds">🟢 Terceras</button>
    <button class="harmonic-filter" data-harmonic-filter="sevenths">🟣 Séptima natural</button>
  </div>

  <div class="harmonic-legend">
    <span class="legend-octaves">Octavas: 1, 2, 4, 8, 16</span>
    <span class="legend-fifths">Quintas: 3, 6, 12</span>
    <span class="legend-thirds">Terceras: 5, 10</span>
    <span class="legend-sevenths">Séptima natural: 7, 14</span>
  </div>

  <div class="harmonic-grid">
    <div class="harmonic-card family-octaves"><strong>1</strong><span class="note">C2</span><span class="freq">65.4 Hz</span></div>
    <div class="harmonic-card family-octaves"><strong>2</strong><span class="note">C3</span><span class="freq">130.8 Hz</span></div>
    <div class="harmonic-card family-fifths"><strong>3</strong><span class="note">G3</span><span class="freq">196.2 Hz</span></div>
    <div class="harmonic-card family-octaves"><strong>4</strong><span class="note">C4</span><span class="freq">261.6 Hz</span></div>
    <div class="harmonic-card family-thirds"><strong>5</strong><span class="note">E4 ↓</span><span class="freq">327.0 Hz</span></div>
    <div class="harmonic-card family-fifths"><strong>6</strong><span class="note">G4</span><span class="freq">392.4 Hz</span></div>
    <div class="harmonic-card family-sevenths"><strong>7</strong><span class="note">B♭4 ↓</span><span class="freq">457.8 Hz</span></div>
    <div class="harmonic-card family-octaves"><strong>8</strong><span class="note">C5</span><span class="freq">523.2 Hz</span></div>
    <div class="harmonic-card"><strong>9</strong><span class="note">D5</span><span class="freq">588.6 Hz</span></div>
    <div class="harmonic-card family-thirds"><strong>10</strong><span class="note">E5 ↓</span><span class="freq">654.0 Hz</span></div>
    <div class="harmonic-card"><strong>11</strong><span class="note">F♯/G♭ aprox.</span><span class="freq">719.4 Hz</span></div>
    <div class="harmonic-card family-fifths"><strong>12</strong><span class="note">G5</span><span class="freq">784.8 Hz</span></div>
    <div class="harmonic-card"><strong>13</strong><span class="note">A♭ aprox.</span><span class="freq">850.2 Hz</span></div>
    <div class="harmonic-card family-sevenths"><strong>14</strong><span class="note">B♭5 ↓</span><span class="freq">915.6 Hz</span></div>
    <div class="harmonic-card"><strong>15</strong><span class="note">B5</span><span class="freq">981.0 Hz</span></div>
    <div class="harmonic-card family-octaves"><strong>16</strong><span class="note">C6</span><span class="freq">1046.4 Hz</span></div>
  </div>

  <div class="audio-controls">
    <button class="audio-btn" data-play-family="octaves">▶ Escuchar octavas</button>
    <button class="audio-btn" data-play-family="fifths">▶ Escuchar familia de quinta</button>
    <button class="audio-btn" data-play-family="thirds">▶ Escuchar familia de tercera</button>
    <button class="audio-btn" data-play-family="sevenths">▶ Escuchar séptima natural</button>
  </div>
</div>

### 3.1 Primero: las octavas

Observa los armónicos:

[
1,;2,;4,;8,;16
]

Sus frecuencias se duplican:

[
65.4 ightarrow 130.8 ightarrow 261.6 ightarrow 523.2 ightarrow 1046.4
]

Por eso aparecen como la misma clase de nota —Do— en registros cada vez más agudos.

[
	ext{Octava} = 2:1
]

### 3.2 Luego: las quintas

Los armónicos:

[
3,;6,;12
]

producen la familia de Sol:

[
G3 ightarrow G4 ightarrow G5
]

Cada aparición vuelve a duplicarse, por lo que sigue siendo la misma clase de altura en otra octava.

La relación entre el armónico 3 y el armónico 2 es:

[
rac{3}{2}
]

que corresponde a una **quinta justa**.

### 3.3 Después: la tercera mayor

Los armónicos:

[
5,;10
]

forman la familia de Mi.

La relación entre los armónicos 5 y 4 es:

[
rac{5}{4}
]

que se aproxima a una **tercera mayor**.

!!! note "Afinación natural vs. temperamento igual"
    Algunos armónicos no coinciden exactamente con las notas de un piano afinado en temperamento igual. Por eso aparecen símbolos como **↓** o la palabra “aprox.”. La serie armónica surge de relaciones físicas exactas; el temperamento igual reparte la octava en doce semitonos iguales.

### 3.4 ¿Por qué estos intervalos suelen sonar estables?

Relaciones simples como (2:1), (3:2) o (5:4) producen una coincidencia importante entre componentes espectrales cuando dos tonos complejos suenan juntos. Esa coincidencia contribuye a la percepción de consonancia.

!!! info "Importante"
    La consonancia no depende de una sola causa. También influyen el timbre, el registro, el nivel, el sistema de afinación, el contexto musical y factores perceptivos y culturales. La serie armónica ayuda a explicar una parte física importante del fenómeno, pero no lo explica todo por sí sola.

<figure markdown="span">
  ![Serie armónica en notación musical](../../../img/serie_armonica.svg)
  <figcaption>**Primeros 16 armónicos de Do2.** La serie se comprime progresivamente en el registro agudo.</figcaption>
</figure>

---

## 4. El timbre: misma fundamental, distinta mezcla de armónicos

Dos sonidos pueden compartir la misma frecuencia fundamental y, sin embargo, sonar muy diferentes.

<div class="audio-lab" data-session04-audio>
  <h4>🎧 Experimento 2 — Misma altura, diferente espectro</h4>
  <p>Todos estos sonidos tienen una fundamental de aproximadamente 130.8 Hz.</p>
  <div class="audio-controls">
    <button class="audio-btn" data-play-wave="sine">▶ Seno</button>
    <button class="audio-btn" data-play-wave="triangle">▶ Triangular</button>
    <button class="audio-btn" data-play-wave="square">▶ Cuadrada</button>
    <button class="audio-btn" data-play-wave="sawtooth">▶ Diente de sierra</button>
  </div>
</div>

| Forma de onda | Contenido armónico idealizado | Impresión general |
|---|---|---|
| **Seno** | Solo la fundamental | Muy puro |
| **Triangular** | Armónicos impares, con caída rápida | Suave, algo hueco |
| **Cuadrada** | Armónicos impares | Brillante, hueca |
| **Diente de sierra** | Armónicos pares e impares | Muy brillante |

Para una onda cuadrada ideal:

[
y(t)=rac{4}{pi}sum_{n=1,3,5,ldots}^{infty}rac{1}{n}sin(2pi n f_0t)
]

Para una onda diente de sierra ideal:

[
y(t)=rac{2}{pi}sum_{n=1}^{infty}rac{(-1)^{n+1}}{n}sin(2pi n f_0t)
]

> **Idea clave:** el timbre depende en gran medida de **qué componentes frecuenciales están presentes y con qué amplitud evolucionan en el tiempo**.

---

## 5. Dominio temporal y dominio frecuencial

Una señal puede observarse desde dos perspectivas complementarias:

| Dominio | Eje X | Eje Y | ¿Qué observamos? |
|---|---|---|---|
| **Temporal** | Tiempo | Amplitud | La forma de onda |
| **Frecuencial** | Frecuencia | Amplitud o nivel | El contenido espectral |

<div class="sound-sequence">
  <div class="sound-step"><strong>Seno</strong><br>Una frecuencia → una línea espectral.</div>
  <div class="sound-step"><strong>Sonido armónico</strong><br>Varias líneas en (f_0, 2f_0, 3f_0...)</div>
  <div class="sound-step"><strong>Sonido inarmónico</strong><br>Parciales sin una única relación entera común.</div>
  <div class="sound-step"><strong>Ruido</strong><br>Energía distribuida de forma continua en un rango amplio.</div>
</div>

!!! tip "Pregunta guía"
    Cuando veas una forma de onda complicada en el tiempo, pregúntate: **¿de qué frecuencias está construida?**

---

## 6. Fase y forma de onda

La fase de cada componente determina cómo se alinean las sinusoides en el tiempo.

[
y(t)=A_1sin(2pi f_0t+phi_1)+A_2sin(4pi f_0t+phi_2)+A_3sin(6pi f_0t+phi_3)+ldots
]

| Símbolo | Significado |
|---|---|
| (f_0) | Frecuencia fundamental |
| (n f_0) | Armónico n |
| (A_n) | Amplitud del armónico |
| (phi_n) | Fase del armónico |

<figure markdown="span">
  ![Fig. 1-9: combinación de ondas sinusoidales](../../../img/combinacion_de_ondas_senoidales.svg)
  <figcaption>**Suma de armónicos en fase.** La combinación produce una nueva forma de onda.</figcaption>
</figure>

<figure markdown="span">
  ![Armónicos fuera de fase](../../../img/figura_1_11.png)
  <figcaption>Con las mismas frecuencias y amplitudes, cambiar la fase modifica la forma temporal de la señal.</figcaption>
</figure>

!!! tip "Fase y audición"
    En señales estacionarias el oído suele ser menos sensible a ciertas diferencias de fase entre armónicos que a cambios de amplitud espectral. Sin embargo, la fase es crítica en cancelaciones, suma entre micrófonos, reflexiones y localización espacial.

---

## 7. De lo periódico a lo aperiódico

Una señal **periódica** repite su patrón después de un tiempo (T):

[
x(t)=x(t+T)
]

Una señal **aperiódica** no posee un período único estable que permita repetir exactamente el patrón.

| Tipo | Comportamiento temporal | Espectro típico | Ejemplos |
|---|---|---|---|
| **Periódica** | Repite un ciclo | Líneas discretas | Oscilador, nota estable idealizada |
| **Cuasiperiódica** | Repite con pequeñas variaciones | Líneas con variaciones | Voz sostenida, instrumento real |
| **Aperiódica** | Sin ciclo estable | Más continuo | Ruido, muchos transitorios |

!!! question "¿Tiene altura?"
    Compara mentalmente una vocal sostenida, un tono de sintetizador, un hi-hat y un ruido continuo. ¿En cuáles puedes cantar con facilidad una nota correspondiente?

---

## 8. Ruido: blanco, rosa y marrón

El ruido es aperiódico y distribuye energía a lo largo de un rango amplio de frecuencias.

<div class="audio-lab" data-session04-audio>
  <h4>🎧 Experimento 3 — Colores de ruido</h4>
  <p>Escucha con volumen moderado. Fíjate en cómo cambia el peso relativo entre graves y agudos.</p>
  <div class="audio-controls">
    <button class="audio-btn" data-play-noise="white">▶ Ruido blanco</button>
    <button class="audio-btn" data-play-noise="pink">▶ Ruido rosa</button>
    <button class="audio-btn" data-play-noise="brown">▶ Ruido marrón</button>
  </div>
</div>

| Color | Densidad espectral de potencia | Energía integrada por octava | Percepción aproximada |
|---|---|---|---|
| **Blanco** | Constante por Hz | Aumenta ≈ +3 dB/octava | Más brillante |
| **Rosa** | (1/f) | Aproximadamente constante | Más equilibrado |
| **Marrón** | (1/f^2) | Disminuye ≈ −3 dB/octava | Mucho más grave |

!!! info "Dos pendientes distintas que no conviene confundir"
    Para el ruido marrón, la **densidad espectral de potencia** (1/f^2) cae aproximadamente **−6 dB por octava** en una gráfica de PSD. Pero como una octava superior contiene el doble de ancho de banda, la **energía total integrada dentro de cada octava** cae aproximadamente **−3 dB por octava**.

### ¿Por qué “colores”?

La analogía proviene de la luz. El término “blanco” sugiere una distribución amplia de energía. En audio, el ruido blanco posee igual densidad de potencia por Hz; el ruido rosa redistribuye esa energía para que cada octava contenga aproximadamente la misma potencia.

!!! tip "Aplicación en producción y acústica"
    El ruido rosa es muy utilizado para observar balances por bandas de octava y para ejercicios de escucha crítica porque no concentra tanta energía relativa en las frecuencias altas como el ruido blanco.

---

## 9. Señales del mundo real

| Categoría | Rasgos frecuentes | Aplicación |
|---|---|---|
| **Voz** | Fundamental, armónicos, formantes, ruido consonántico | Inteligibilidad, ecualización |
| **Música** | Armónicos, parciales, ataques, envolventes | Timbre y mezcla |
| **Percusión** | Transitorios + componentes armónicos e inarmónicos | Ataque, textura |
| **Ruido ambiental** | Espectro continuo y cambiante | Medición y control de ruido |

En una mezcla, diferentes fuentes ocupan regiones distintas del espectro. Sin embargo, ningún instrumento “vive” exclusivamente en una sola banda: su fundamental, armónicos, transitorios y resonancias pueden extenderse por una región muy amplia.

---

## 10. Cierre: del oído a la matemática

La secuencia conceptual de esta sesión puede resumirse así:

[
	ext{tono puro}
ightarrow
	ext{suma de frecuencias}
ightarrow
	ext{armónicos}
ightarrow
	ext{espectro}
ightarrow
	ext{timbre}
ightarrow
	ext{aperiodicidad y ruido}
]

!!! success "Comprueba si lo entendiste"
    Sin mirar las secciones anteriores, intenta responder:

    1. Si (f_0=100) Hz, ¿cuáles son los primeros cinco armónicos?
    2. ¿Por qué los armónicos 1, 2, 4, 8 y 16 pertenecen a la misma familia de nota?
    3. ¿Qué relación de frecuencias define una quinta justa en la serie armónica?
    4. ¿Qué diferencia espectral básica existe entre una onda sinusoidal y una onda diente de sierra?
    5. ¿Por qué el ruido rosa suele percibirse menos brillante que el ruido blanco?

---

*Basado en: Everest, F. A. & Pohlmann, K. C. (2009). Master Handbook of Acoustics (5th ed.). McGraw-Hill; principios de análisis de Fourier, serie armónica y acústica musical.*
