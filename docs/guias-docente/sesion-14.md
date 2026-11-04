# Guía docente — Sesión 14: Doppler y primera práctica con REW

**Duración total:** 120 minutos. **Modalidad:** explicación breve, dos simulaciones y primer contacto con REW en Mac. **Micrófono de medición:** no necesario.

[Clase publicada para estudiantes](../unidades/U-2-propagacion-exterior/sesion-14/index.md)

## Propósitos

1. Diferenciar el Doppler de **fuente móvil** y de **receptor móvil**: la primera cambia el espaciamiento de los frentes de onda; la segunda cambia la rapidez con la que el oyente los encuentra.
2. Introducir la relación entre frecuencia física y percepción de altura; calcular \(f'\) en situaciones lineales sencillas.
3. Instalar REW en macOS y conocer **Generator**, **RTA/Spectrum** y la necesidad de calibrar las mediciones que así lo requieran.

## Propuesta de secuencia de 2 horas

| Momento | Tiempo | Acciones |
|---|---:|---|
| Apertura: sirena y Doppler | 10 min | Escucha conceptual y pregunta sobre acercamiento/alejamiento |
| Dos situaciones Doppler | 20 min | Comparar fuente móvil y receptor móvil; resolver dos ejemplos sencillos |
| Simulaciones | 20 min | Herramienta existente con fuente móvil y nueva simulación con receptor móvil |
| Instalación y dispositivos de REW en Mac | 15 min | Descargar, instalar, permitir micrófono y seleccionar entradas/salidas |
| Generator | 15 min | Reproducir 440, 880 y 1.000 Hz a volumen bajo |
| RTA / Spectrum | 25 min | Captar con micrófono integrado, observar pico de 440 Hz y su desplazamiento a 880 Hz |
| Puesta en común | 10 min | Generator vs. RTA; por qué no leer dB SPL no calibrados |
| Cierre y entrega | 5 min | Tabla de tres velocidades y una captura de REW |
| **Total** | **120 min** | |

### Preparación técnica

- En los equipos Mac, comprobar acceso a Internet para instalar el programa.
- Tener salida de audio funcional y micrófono integrado activo; si hay interfaces conectadas, comprobar cuál es la seleccionada.
- Usar la descarga oficial [Room EQ Wizard](https://www.roomeqwizard.com/). El instalador de macOS es universal (Intel/Apple Silicon) e incluye el runtime Java; no es necesario instalar Java por separado.
- El apartado **Preferences → Soundcard** permite elegir entradas/salidas. Los nombres concretos pueden variar.
- Si no aparece el micrófono, ir a **Configuración del Sistema → Privacidad y seguridad → Micrófono** y comprobar que REW esté autorizado.
- Si la misma computadora reproduce y capta el tono, utilizar sus **parlantes** y **micrófono integrado**, no sus audífonos. Evitar monitoreo directo o que la señal captada se realimente a la salida.
- No solicitar barridos de medición completa, RT60 ni respuestas de frecuencia calibradas en esta primera práctica.
- Si falta el acceso a micrófono, realizar solo Generator y, opcionalmente, abrir **Sampledata.mdat** desde la web oficial de REW para explorar las gráficas de ejemplo.

## Desarrollo conceptual: Doppler

### 1. Fuente que se mueve

En las fórmulas básicas, \(c\approx343\ \mathrm{m/s}\), \(f_0\) es la frecuencia emitida y \(f'\) la recibida:

- Fuente se acerca: \(f'=f_0 c/(c-v_s)\).
- Fuente se aleja: \(f'=f_0 c/(c+v_s)\).

Para \(f_0=800\ \mathrm{Hz}\) y \(v_s=30\ \mathrm{m/s}\):
- Acercándose \(f'\approx876,7\ \mathrm{Hz}\).
- Alejándose \(f'\approx735,7\ \mathrm{Hz}\).

### 2. Receptor que se mueve, fuente fija

- Receptor se acerca: \(f'=f_0(c+v_r)/c\).
- Receptor se aleja: \(f'=f_0(c-v_r)/c\).

Para \(f_0=1.000\ \mathrm{Hz}\) y \(v_r=5\ \mathrm{m/s}\):
- Acercándose **1.014,6 Hz**.
- En reposo **1.000 Hz**.
- Alejándose **985,4 Hz**.

**Punto conceptual importante:** a velocidades pequeñas frente a \(c\), mover la fuente y mover el receptor con la misma rapidez produce **resultados similares** en primera aproximación; no decir que uno da siempre un cambio mucho mayor.

### Herramientas

- [Doppler con fuente móvil](../simulacion/doppler.html) — observar frentes comprimidos/expandidos.
- [Doppler con receptor móvil](../simulacion/doppler-receptor.html) — fuente fija, frentes equidistantes, f' según velocidad del oyente. La comparación auditiva es una simulación digital breve.

**Preguntas para conducir la simulación:** ¿cuál de los dos objetos se mueve? ¿Cambió el espacio entre las ondas en el aire? ¿Cuántas ondas llegan al receptor por segundo?

## REW: instalación y práctica

### Instalación (15 min)

1. Entrar en https://www.roomeqwizard.com/ y descargar la versión **macOS universal binary**.
2. Abrir el instalador y seguir sus instrucciones; iniciar REW.
3. Autorizar el acceso al micrófono si macOS lo solicita.
4. En **Preferences → Soundcard**, seleccionar dispositivos de entrada/salida. Cuando sea posible, utilizar **48 kHz** en ambos.

### Generator: primeras frecuencias (15 min)

1. Abrir **Generator → Sine Wave**.
2. Seleccionar un nivel digital inicial **−35 dBFS** aproximadamente y dejar bajo el volumen del Mac.
3. Generar **440 Hz** durante pocos segundos, detener y continuar con **880 Hz**, después **1.000 Hz**.
4. Comentar por qué duplicar 440 Hz hasta 880 Hz produce una **octava**, no «el doble de sonoridad».

### RTA: ver el sonido (25 min)

1. Seleccionar el micrófono integrado como entrada y activar su permiso en Mac.
2. En **RTA**, usar el modo **Spectrum** y una FFT cercana a **16k**.
3. Iniciar **Record** en RTA y comprobar que exista señal al hablar normalmente.
4. Reproducir **440 Hz** con Generator usando los parlantes a nivel moderado. Identificar el **pico principal** cerca de 440 Hz.
5. Cambiar a **880 Hz**. Comprobar que el pico principal se desplaza hacia una frecuencia aproximadamente doble.
6. Detener Generator y RTA. Capturar una pantalla del gráfico y discutir los posibles picos secundarios.

**Advertencias técnicas:**
- El RTA del Mac sin micrófono calibrado permite observar principalmente **frecuencias y diferencias relativas**.
- Un pico extra puede corresponder a armónicos de la cadena de reproducción/captura; no implica que REW esté generando automáticamente otra frecuencia.
- No interpretar el valor de la gráfica como **SPL absoluto**; la cadena de entrada no está calibrada.
- Evitar niveles altos, ruido blanco fuerte, acoples y exposición prolongada a tonos puros.
- La práctica no mide Doppler real: utiliza tonos fijos para aprender a ver las frecuencias, paso previo a analizar grabaciones de fuentes móviles.

## Consigna breve para Classroom

**Título:** Sesión 14 — Efecto Doppler e introducción a REW

Con las simulaciones de la clase, registra la frecuencia recibida para una fuente fija de 1.000 Hz y un receptor que se acerca a +5 m/s, permanece en reposo y se aleja a −5 m/s. Explica brevemente por qué mover la fuente y mover el receptor no producen exactamente el mismo fenómeno físico. Instala REW en Mac, explora **Generator** con tonos de 440 y 880 Hz e intenta visualizar uno en **RTA/Spectrum** mediante el micrófono integrado. Entrega **una hoja** con los tres valores de frecuencia, la explicación y una **captura de REW** (Generator o RTA). No necesitas un micrófono especializado ni una medición de SPL calibrada.

### Rúbrica formativa (10 puntos)

| Criterio | Puntos |
|---|---:|
| Tabla de velocidades y frecuencias correctas | 3 |
| Explicación de fuente vs. receptor móvil | 2 |
| Configuración inicial y uso básico de Generator | 2 |
| Captura de REW e interpretación de la frecuencia mostrada | 2 |
| Reconoce que una lectura sin micrófono calibrado no es una medida exacta de SPL | 1 |

## Fuentes para el docente

- [Descarga oficial de REW](https://www.roomeqwizard.com/)
- [Configuración de entrada y salida](https://roomeqwizard.com/betahelp/help/html/calsoundcard.html)
- [Generador REW](https://roomeqwizard.com/betahelp/help/html/siggen.html)
- [RTA REW](https://roomeqwizard.com/betahelp/help/html/spectrum.html)
- Everest y Pohlmann, *Master Handbook of Acoustics* (2009), efecto Doppler.
