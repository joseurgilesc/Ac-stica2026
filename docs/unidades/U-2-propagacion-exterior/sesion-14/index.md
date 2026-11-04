# Sesión 14: El sonido en movimiento y primer laboratorio con REW

**Temas:** efecto Doppler; introducción a **Room EQ Wizard (REW)** en Mac.

**Pregunta central:** ¿por qué cambia el tono de una sirena al pasar frente a nosotros y cómo podemos **ver las frecuencias del sonido** con un analizador?

**Al terminar podrás:** explicar el efecto Doppler para una fuente y para un receptor móviles, resolver un ejemplo sencillo y utilizar por primera vez el **generador de tonos y el analizador RTA de REW**.

## 1. ¿Por qué cambia el tono cuando un vehículo pasa?

Imagina una ambulancia que mantiene una sirena con frecuencia constante mientras se mueve:

| Situación | Lo que sucede | Lo que escuchamos |
|---|---|---|
| La fuente **se acerca** | Los frentes de onda quedan más juntos delante de ella. | **Mayor frecuencia:** tono más agudo. |
| La fuente **se aleja** | Los frentes de onda quedan más separados detrás de ella. | **Menor frecuencia:** tono más grave. |
| La fuente y el receptor están en reposo | No cambia el ritmo de llegada de las ondas. | La frecuencia emitida y la recibida coinciden. |

El **efecto Doppler** es un cambio **físico en la frecuencia que recibe el oyente** cuando existe movimiento respecto al aire. No significa necesariamente que el vehículo haya cambiado el tono de su sirena.

!!! tip "¿Cambia la frecuencia o cambia el volumen?"
    Son dos cosas distintas. Al pasar un vehículo también cambia la **distancia** y, por ello, la intensidad puede variar; pero Doppler describe específicamente el **desplazamiento de frecuencia**. La frecuencia no tiene por qué cambiar de manera brusca al cruzar delante de nosotros.

### Simulación A: fuente en movimiento

Observa los círculos que salen de posiciones sucesivas de una fuente móvil. Al acercarse se comprimen delante de ella; al alejarse quedan más separados.

[🎛️ **Abrir simulación de la fuente móvil**](../../../simulacion/doppler.html){ .md-button }

**Prueba:** fija la frecuencia emitida y cambia la velocidad de la fuente. ¿Qué sucede con el tono recibido? ¿Y si la fuente no se mueve?

## 2. Caso 1: se mueve la fuente y el receptor está quieto

Para un movimiento directo hacia o desde el receptor, usando velocidades **menores que la del sonido** y aire aproximadamente quieto:

\[
\boxed{f' = f_0\,\frac{c}{c-v_s}}\qquad\text{Fuente que se acerca}
\]

\[
\boxed{f' = f_0\,\frac{c}{c+v_s}}\qquad\text{Fuente que se aleja}
\]

Aquí **\(f_0\)** es la frecuencia emitida; **\(f'\)**, la recibida; **\(c\approx343\ \mathrm{m/s}\)**, la velocidad del sonido; y **\(v_s\)** es la rapidez de la fuente.

**Ejemplo:** una ambulancia emite **800 Hz** y se acerca a **30 m/s**:

\[
f'=800\cdot\frac{343}{343-30}\approx \boxed{876,7\ \mathrm{Hz}}
\]

Si se aleja a la misma rapidez:

\[
f'=800\cdot\frac{343}{343+30}\approx \boxed{735,7\ \mathrm{Hz}}
\]

**Interpretación:** no cambia la sirena del vehículo; cambia la frecuencia que recibe quien permanece junto a la vía.

## 3. Caso 2: receptor en movimiento, fuente estática { #caso-2-receptor-en-movimiento-fuente-estatica }

Ahora imagina un **parlante fijo** que reproduce un tono de 1.000 Hz. El oyente se desplaza hacia el parlante.

**¿Qué cambia?** Las ondas que emite el parlante mantienen su separación en el aire. Pero al moverse, el receptor **encuentra las crestas más rápidamente** si va hacia la fuente, o más lentamente si se aleja.

\[
\boxed{f'=f_0\,\frac{c+v_r}{c}}\qquad\text{Receptor que se acerca}
\]

\[
\boxed{f'=f_0\,\frac{c-v_r}{c}}\qquad\text{Receptor que se aleja}
\]

La rapidez **\(v_r\)** se considera positiva en cada fórmula, y el signo indica si el movimiento se dirige hacia la fuente o en sentido contrario.

**Ejemplo:** una persona se mueve **a 5 m/s hacia** un parlante que emite **1.000 Hz**:

\[
f'=1.000\cdot\frac{343+5}{343}\approx\boxed{1.014,6\ \mathrm{Hz}}
\]

Si se aleja a 5 m/s, recibe **985,4 Hz**.

| Situación | Frecuencia emitida | Frecuencia recibida |
|---|---:|---:|
| Receptor se acerca a 5 m/s | 1.000 Hz | **1.014,6 Hz** |
| Receptor está quieto | 1.000 Hz | **1.000 Hz** |
| Receptor se aleja a 5 m/s | 1.000 Hz | **985,4 Hz** |

!!! info "¿Cuál es la diferencia entre mover la fuente y mover el receptor?"
    - **Fuente móvil:** cambia el **espaciado de los frentes de onda en el aire**.
    - **Receptor móvil:** el espaciado **no cambia**; cambia el número de frentes que el receptor encuentra por segundo.
    - En el sonido que viaja a través del aire, los dos movimientos **no son matemáticamente idénticos**. No obstante, a velocidades pequeñas respecto a \(c\), sus desplazamientos son muy parecidos; no debemos afirmar que mover la fuente siempre produce un efecto muchísimo mayor.

### Simulación B: mueve solamente al receptor

En esta nueva herramienta el **parlante no se desplaza**. Cambia la velocidad del receptor para observar qué ocurre con **\(f'\)** y con los frentes de onda.

<iframe src="../../../simulacion/doppler-receptor.html" title="Simulación de efecto Doppler con receptor móvil, fuente fija, frecuencia recibida y tonos comparativos" loading="lazy" style="width:100%;height:1030px;border:1px solid #d7e1eb;border-radius:12px;background:#fff;"></iframe>

[🎛️ **Abrir simulación del receptor móvil en pantalla completa**](../../../simulacion/doppler-receptor.html){ .md-button }

**Preguntas rápidas:**

1. Coloca **1.000 Hz** y velocidad **+5 m/s**: ¿qué frecuencia recibe el oyente?
2. Cambia a **−5 m/s**: ¿el oyente se acerca o se aleja?
3. En ambos casos, ¿cambia el espacio entre los frentes de onda que genera el parlante?

??? info "Para profundizar: fuente y receptor móviles"
    Si los dos se mueven **a lo largo de la misma línea**, y las velocidades se expresan respecto al aire:

    \[
    f'=f_0\frac{c+v_r}{c-v_s}
    \]

    Aquí \(v_r\) es **positiva si el receptor avanza hacia la fuente** y negativa si se aleja; \(v_s\) es **positiva si la fuente avanza hacia el receptor** y negativa si se aleja. Esta convención vale para la geometría indicada; en recorridos oblicuos se necesita la **componente radial** de cada velocidad.

    **Ejemplo musical:** un altavoz rotatorio (*Leslie*) combina cambios de frecuencia debidos al movimiento, variaciones de nivel y reflexiones. En posproducción y videojuegos, el desplazamiento Doppler también puede **simularse digitalmente**.

---

## 4. Primera práctica: conoce REW en tu Mac

**¿Qué es REW?** *Room EQ Wizard* es una aplicación para **generar señales de prueba, analizar el contenido en frecuencias y realizar mediciones acústicas**.

Hoy no vamos a medir reverberación ni a evaluar la respuesta real de una sala: vamos a **instalar el programa, generar tonos y observarlos con su analizador**.

### A. Instalación en macOS

1. Entra a la web oficial: **[Descargar Room EQ Wizard](https://www.roomeqwizard.com/)**.
2. En la sección de descargas, elige **macOS universal binary**, compatible con Mac Intel y Apple Silicon. Descarga el instalador oficial y sigue las instrucciones que muestra.
3. Abre **REW**. El instalador para Mac incluye el entorno Java que requiere el programa: **no necesitas instalar Java aparte**.
4. Si el sistema solicita acceso al micrófono, selecciona **Permitir**. Puedes revisarlo en **Configuración del Sistema → Privacidad y seguridad → Micrófono**.
5. Conecta o selecciona primero los parlantes o audífonos que usarás. Si tienes interfaz, conéctala **antes** de abrir REW.

**Ayuda oficial:** [Primeros pasos en REW](https://www.roomeqwizard.com/betahelp/help/html/welcome.html) · [Configurar dispositivos de entrada y salida](https://roomeqwizard.com/betahelp/help/html/calsoundcard.html).

!!! warning "Reglas básicas antes de generar sonido"
    Usa un nivel de salida **bajo y cómodo**; evita los tonos intensos y detén cualquier señal ante molestias. En la primera práctica, **no conectes una salida de la interfaz a una entrada** ni actives monitoreo directo. Los auriculares no sirven como fuente para que el micrófono integrado del Mac capture el tono: para el RTA utiliza un parlante a nivel moderado.

### B. Configuración inicial

1. Abre **Preferences → Soundcard** en REW.
2. Selecciona explícitamente **Output Device / Output** (parlantes del Mac o interfaz) y **Input Device / Input** (micrófono integrado u otro micrófono disponible).
3. Si es posible, utiliza **48 kHz** para ambos dispositivos. Comprueba también la frecuencia de muestreo en **Configuración de Audio MIDI** de macOS si aparece un problema de configuración.
4. Haz una prueba de entrada hablando normalmente cerca del micrófono, sin gritar. Verifica que REW tenga permiso para utilizarlo.

**Sin micrófono de medición:** el micrófono integrado del Mac **sirve para observar cualitativamente el espectro**. No permite asegurar que los niveles sean dB SPL calibrados, ni obtener una respuesta plana de sala o altavoz.

### C. Actividad 1: genera tres tonos

Abre **Generator** (generador de señales) en REW:

1. Selecciona **Sine Wave** (onda sinusoidal).
2. Introduce una frecuencia de **440 Hz** y establece el nivel digital de salida alrededor de **−35 dBFS**, empezando con el volumen físico del sistema bajo.
3. Pulsa **Play** durante unos segundos y luego **Stop**.
4. Repite con **880 Hz** y finalmente con **1.000 Hz**.

| Tono | Frecuencia | Pregunta |
|---|---:|---|
| **La₄** | 440 Hz | ¿Qué altura escuchas? |
| **La₅** | 880 Hz | ¿Es una octava más aguda que 440 Hz? |
| **Referencia** | 1.000 Hz | ¿Es igual en altura y en sonoridad a 880 Hz? |

El nivel en **dBFS** corresponde a la amplitud digital de salida, **no** a los dB SPL que reciben tus oídos.

**Manual:** [Generador de señales de REW](https://roomeqwizard.com/betahelp/help/html/siggen.html).

### D. Actividad 2: ¡observa el espectro en tiempo real!

Ahora utiliza el micrófono integrado del Mac para **captar el sonido que sale por su parlante**:

1. Abre **RTA** (*Real Time Analyser*) en REW.
2. En sus ajustes, selecciona **Spectrum** para ver las frecuencias y configura un tamaño FFT de, por ejemplo, **16k** (o una opción próxima disponible).
3. Activa la captura con el botón **Record** del RTA; selecciona el micrófono correcto si no aparece señal.
4. Mientras el analizador está activo, reproduce brevemente **440 Hz** desde **Generator**, usando los parlantes, sin subir mucho el volumen.
5. Localiza el pico principal alrededor de **440 Hz**. Cambia el generador a **880 Hz**: ¿hacia dónde se desplaza el pico?
6. Detén **Generator** y después el **RTA**.

**Lo que estás viendo:** el RTA convierte una señal captada por el micrófono en un gráfico que representa su contenido en frecuencias, mediante análisis espectral (FFT). El gráfico puede mostrar ruido de fondo y otros picos, incluso armónicos generados por el parlante o el micrófono. No esperes una sola línea perfectamente limpia.

**Manual:** [RTA de REW: espectro y captura](https://roomeqwizard.com/betahelp/help/html/spectrum.html).

!!! info "¿Y si no puedo activar el micrófono?"
    Puedes realizar **la actividad C solo con el generador** y examinar mediciones de muestra descargando el archivo **Sampledata.mdat** desde la [web oficial de REW](https://www.roomeqwizard.com/) y abriéndolo con la opción de abrir archivos de REW. Los datos de ejemplo permiten explorar gráficas, pero **no reemplazan una captura propia con el RTA**.

### E. ¿Qué aprendimos de REW?

| Función | Para qué sirve |
|---|---|
| **Generator** | Crea señales conocidas: tonos, ruido, barridos. |
| **RTA / Spectrum** | Muestra qué frecuencias están presentes en una señal captada. |
| **Measure** | Sirve para realizar mediciones acústicas más completas, con la configuración y calibración adecuadas. |

**Relación con Doppler:** hoy vemos que REW identifica la **frecuencia** de un tono. En una clase futura podríamos analizar una **grabación de un vehículo en movimiento**, observando cómo evoluciona su frecuencia. En esta primera práctica **no vamos a afirmar que mover un micrófono por el aula produzca un Doppler medible y fiable**.

## 5. Actividad de clase y entrega

**En parejas:**

1. Con la **simulación del receptor**, registra \(f'\) para \(f_0=1.000\ \mathrm{Hz}\) y \(v_r=+5\), \(0\) y \(−5\ \mathrm{m/s}\).
2. Explica en **dos o tres frases** por qué mover el receptor es diferente de mover la fuente.
3. Instala y configura REW en el Mac.
4. Genera los tonos de **440 y 880 Hz**. Si dispones de micrófono, captura una **imagen del RTA** donde pueda observarse uno de los picos.
5. Contesta: ¿para qué sirven **Generator** y **RTA**? ¿Por qué una lectura con micrófono no calibrado no equivale a un nivel SPL exacto?

**Entrega:** una hoja o archivo con la tabla de las tres velocidades, dos explicaciones breves y **una captura de REW** (Generator o RTA, según disponibilidad). No es necesario entregar una medición calibrada.

## 6. Para recordar

- **Doppler:** se altera la frecuencia recibida cuando existe movimiento entre fuente y receptor respecto al medio.
- **Fuente móvil:** se modifica el espaciamiento de los frentes de onda.
- **Receptor móvil:** cambia la velocidad a la que el oyente encuentra los frentes.
- **REW:** nos permite **generar y analizar sonidos**; conocer sus herramientas es el primer paso para realizar mediciones acústicas.

---

**Referencias:** Everest, F. A. y Pohlmann, K. C. (2009), *Master Handbook of Acoustics* (efecto Doppler). REW: [sitio oficial](https://www.roomeqwizard.com/), [ayuda del generador](https://roomeqwizard.com/betahelp/help/html/siggen.html), [ayuda del RTA](https://roomeqwizard.com/betahelp/help/html/spectrum.html) y [configuración de audio](https://roomeqwizard.com/betahelp/help/html/calsoundcard.html).
