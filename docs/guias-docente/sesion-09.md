# Guía Docente — Sesión 9: Propagación en campo libre

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, p5.js, parlante Bluetooth, sonómetro (app de celular), cinta métrica de al menos 10 m, calculadora científica  
**Referencia:** Everest & Pohlmann, Capítulo 3, pp. 31–45 (Sound in the Free Field — Spherical Divergence, Inverse Square Law, SWL to SPL Conversion)

---

## Objetivo de la sesión

Que el estudiante comprenda el concepto de campo libre, aplique la ley del inverso del cuadrado para predecir niveles de presión sonora a distancia, mida experimentalmente la divergencia esférica, compare predicción teórica con medición real, e identifique las causas de las desviaciones (reflexiones, ruido de fondo, directividad).

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | Experimento visual con parlante y sonómetro a tres distancias |
| **Desarrollo** | 40 min | Teoría guiada: campo libre, divergencia esférica, ley del inverso del cuadrado, SWL → SPL |
| **Práctica** | 50 min | Mediciones escalonadas (1 m, 2 m, 4 m, 8 m) + simulación p5.js + informe comparativo |
| **Cierre** | 15 min | Discusión: ¿por qué el mundo real no se parece al campo libre? + bitácora |

---

## 1. Apertura — «¿Cuánto se calla un parlante si me alejo?»

### Materiales
- Parlante Bluetooth reproduciendo ruido rosa a volumen fijo
- App de sonómetro proyectada
- Cinta métrica

### Dinámica
1. Ubicar el parlante en un extremo del aula (o mejor, en el patio si el clima lo permite).
2. Medir el SPL a 1 m exactamente del parlante. Anotar en la pizarra: «SPL(1 m) = XX dBA».
3. Medir a 2 m. ¡La clase predice cuánto bajó! Usualmente contestan «la mitad» → medir → bajó ~6 dB, no la mitad de los dB. Refuerzo: dB es logarítmico.
4. Medir a 4 m. Preguntar: «Según la predicción, ¿cuánto debería haber bajado respecto a 1 m?» (−12 dB). Medir y comparar.
5. Pregunta disparadora: «Si me alejo a 100 m, ¿cuánto debería bajar?» (−40 dB). «¿Creen que en la realidad baja exactamente 40 dB?» (No — entran en juego otros factores).

### Preguntas disparadoras
- «¿Por qué en un concierto la gente de atrás escucha aunque esté 50 veces más lejos que la primera fila?»
- «Si el parlante emite 120 dB a 1 m, ¿a qué distancia el nivel baja a 60 dB?» (Respuesta aproximada: ~512 m en campo libre ideal. 120 − 60 = 60 dB de pérdida. Como −6 dB por duplicación, son 10 duplicaciones: 2¹⁰ = 1,024 m. En realidad mucho antes por absorción atmosférica y otros efectos.)
- «¿Qué es una cámara anecoica y por qué la gente dice que 'enloquece' ahí dentro?»

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **El campo libre como idealización** (10 min). Explicar que el campo libre es un modelo — una simplificación matemática que asume: (a) medio homogéneo, (b) sin obstáculos, (c) sin reflexiones, (d) fuente puntual. Como toda idealización en física, es falsa pero útil. Mostrar imágenes de una cámara anecoica y explicar que es lo más cercano al campo libre que podemos construir. Comentar: «Es tan silenciosa que la gente escucha su propia sangre fluyendo. El ruido de fondo típico está por debajo de 0 dBA.»

2. **La divergencia esférica: cuestión de geometría** (10 min). Dibujar una esfera de radio r. Preguntar: «¿Cuál es el área de esta esfera?» (4πr²). Dibujar una segunda esfera de radio 2r. «¿Cuál es el área ahora?» (16πr² = 4 veces más). «La misma potencia W repartida sobre 4 veces el área → la intensidad es ¼ → en dB: 10·log(¼) = −6 dB.»

    Anotar la fórmula en la pizarra y mantenerla visible toda la clase:

    \[
    \text{SPL}(r_2) = \text{SPL}(r_1) + 20\log_{10}(r_1/r_2)
    \]

    Derivar la tabla rápida de atenuación: 1 m → 0 dB, 2 m → −6 dB, 4 m → −12 dB, 8 m → −18 dB, 10 m → −20 dB, 100 m → −40 dB.

    > Insertar **Fig. 3-1** del Everest: fuente puntual — esferas concéntricas mostrando la distribución de energía. Señalar: no hay «pérdida de energía», la energía se conserva. Lo que cambia es la DENSIDAD de energía (intensidad, W/m²).

3. **De SWL a SPL: la fórmula completa** (10 min). Mostrar la ecuación que relaciona la potencia de la fuente (lo que el fabricante especifica) con la presión en el punto de escucha (lo que el oyente recibe):

    \[
    \text{SPL}(r) = \text{SWL} + 10\log_{10}(Q/4\pi r^2) + 10.8
    \]

    Explicar cada término con ejemplos numéricos. La constante 10.8 dB es la diferencia entre medir presión e intensidad en condiciones atmosféricas estándar (ρc ≈ 400 rayls). Hacer un ejemplo en vivo: parlante con SWL = 110 dB, Q = 2, r = 8 m → ¿SPL?

    > Insertar **Fig. 3-2** del Everest: curvas de SPL vs. distancia para distintos SWL. Destacar que todas las curvas son paralelas — la pendiente (−6 dB/dobling) es siempre la misma, lo único que cambia es la «altura» de la curva según el SWL de la fuente.

4. **¿Qué falla en el mundo real?** (10 min). Presentar una tabla en la pizarra de fenómenos que desvían la medición real de la predicción del campo libre: reflexión del suelo (+dB), absorción atmosférica (−dB en agudos), viento (curva trayectorias), gradientes térmicos (refracción), obstáculos (difracción). No profundizar — es gancho para las sesiones 10 y 11. Preguntar: «Si medimos en el patio del colegio, ¿cuál de estos efectos creen que domina?»

    > Insertar **Fig. 3-3** del Everest: comparación medición real vs. campo libre — a qué distancia empieza a notarse la diferencia y por qué.

---

## 3. Práctica — Medición, simulación e informe

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 9 — Propagación en campo libre: medición y predicción

**Instrucciones:**

**Parte A — Mediciones escalonadas (en parejas)**

1. Buscá un espacio exterior amplio (patio, cancha, estacionamiento vacío) con la menor cantidad de superficies reflectantes posible. Alejate al menos 20 m de paredes.
2. Configurá un parlante Bluetooth reproduciendo ruido rosa a un volumen fijo (no lo modifiques durante todo el experimento).
3. Con un sonómetro (app de celular), medí el nivel en dBA en los siguientes puntos:

| Distancia desde la fuente | dBA medido | dBA predicho por campo libre |
|---|---|---|
| 1.0 m | | (referencia) |
| 2.0 m | | |
| 3.0 m | | |
| 4.0 m | | |
| 6.0 m | | |
| 8.0 m | | |
| 10.0 m | | |
| 16.0 m (si el espacio lo permite) | | |

4. Para cada distancia, calculá el valor predicho por la ley del inverso del cuadrado usando la fórmula \(\text{SPL}(r) = \text{SPL}(1\text{m}) + 20\log_{10}(1/r)\).
5. Calculá el error: \(\text{error} = \text{medido} - \text{predicho}\).
6. Graficá ambas curvas (medida y predicha) en un mismo gráfico con distancia en escala logarítmica en el eje X.

**Parte B — Simulación p5.js**

1. Abrí la simulación p5.js de fuente puntual (proporcionada por el docente).
2. Variá la distancia de escucha (slider) y observá cómo:
   - El SPL calculado baja 6 dB cada vez que duplicás la distancia
   - La intensidad (W/m²) cae como 1/r²
   - El área de la esfera crece como r²
3. Capturá una captura de pantalla de la simulación a r = 2 m, r = 4 m y r = 8 m.
4. Respondé: ¿Qué representa cada círculo concéntrico en la simulación? ¿Por qué los círculos se dibujan cada vez más espaciados aunque el SPL baja linealmente en dB?

**Parte C — Informe de comparación (300-400 palabras)**

Redactá un informe que incluya:
1. Tabla con los valores medidos, predichos y errores.
2. Gráfica comparativa (medido vs. predicho).
3. Análisis: ¿En qué distancias el error es mayor? ¿Por qué creés que ocurre? (Considerá: reflexión del suelo, ruido de fondo que «tapa» la medición a larga distancia, directividad del parlante — a 1 m quizás no estás en el eje del tweeter.)
4. ¿Qué mejorarías del diseño experimental si tuvieras que repetirlo?
5. Conclusión: ¿Se cumple la ley del inverso del cuadrado en tu medición? ¿Qué tan bien?

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Mediciones (Parte A) | ≥7 distancias medidas, tabla completa, predicciones calculadas correctamente | 5-6 distancias o algún error de cálculo | ≤4 distancias o errores conceptuales |
| Gráfica (Parte A) | Ambas curvas en un solo gráfico, eje X logarítmico, leyenda clara | Gráfico correcto pero ejes lineales o sin leyenda | Sin gráfico o con errores |
| Simulación (Parte B) | Capturas a 3 distancias, responde correctamente ambas preguntas | Capturas a 2 distancias o una respuesta vaga | Sin capturas o sin respuestas |
| Informe (Parte C) | Tabla, gráfica, análisis de errores con causas técnicas, mejora experimental y conclusión | Informe con análisis superficial | Sin análisis de causas de error |
| Terminología | Usa correctamente términos: campo libre, divergencia esférica, intensidad, presión, dB SPL, ley del inverso del cuadrado | Usa algunos términos pero con imprecisiones | No usa la terminología de la sesión |

---

## 4. Cierre — Discusión y bitácora

### Discusión guiada (10 min)

- «A 10 m, la predicción de campo libre dice que deberíamos perder 20 dB. ¿Perdimos exactamente 20 dB?» (Casi nunca: el suelo refleja, hay viento, el ruido de fondo contamina la medición a larga distancia.)
- «¿En un concierto al aire libre, el sonidista usa la ley del inverso del cuadrado para calcular el sistema?» (Sí, es el punto de partida. Pero después corrige por absorción atmosférica, directividad de las cajas, viento predominante y temperatura. Y mide con un sonómetro en la prueba de sonido para verificar.)
- «¿Por qué el campo libre es un concepto importante si nunca se cumple perfectamente?» (Porque es el modelo más simple — da el límite superior de atenuación. Si algo no funciona ni en campo libre, no va a funcionar en la realidad. Es como asumir 'sin fricción' en mecánica: no existe, pero permite entender la física fundamental antes de agregar complejidad.)

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Hoy medí la divergencia esférica del sonido. En campo libre, una fuente puntual pierde 6 dB cada vez que duplico la distancia desde la fuente — no porque el sonido 'se gaste', sino porque la misma energía se distribuye sobre una superficie esférica que crece como r². La fórmula \(\text{SPL}(r_2) = \text{SPL}(r_1) + 20\log_{10}(r_1/r_2)\) predice el nivel a cualquier distancia. En la práctica, el suelo, el viento y la absorción atmosférica hacen que la medición real se desvíe del modelo ideal — precisamente el tema de las próximas sesiones. Para compensar una duplicación de distancia y mantener el SPL necesito cuadruplicar la potencia del amplificador. Un parlante con SWL = 120 dB sobre un escenario (Q = 2) entrega unos 97 dB SPL a 20 m."*

---

## Recursos adicionales para el docente

- [Sengpielaudio: Inverse Square Law Calculator](http://www.sengpielaudio.com/calculator-distance.htm) — calculadora online de SPL vs. distancia (SWL → SPL)
- [Simulación p5.js de fuente puntual](https://editor.p5js.org/) — se puede crear un sketch simple con círculos concéntricos que representen los frentes de onda y un indicador numérico del SPL
- [Video: Inside an Anechoic Chamber](https://www.youtube.com/watch?v=9GkZgJxT9Dc) — recorrido por una cámara anecoica, el silencio más absoluto construido por el ser humano
- [Tabla de constantes atmosféricas](http://www.sengpielaudio.com/calculator-air.htm) — ρc, velocidad del sonido según temperatura, absorción atmosférica
- [NIOSH Sound Level Meter App](https://www.cdc.gov/niosh/topics/noise/app.html) — sonómetro calibrado para iOS (error <2 dBA)
- [Generador de ruido rosa online](https://www.szynalski.com/tone-generator/) — ruido rosa (−3 dB/octava, igual energía por octava)

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «No tenemos espacio exterior para medir hasta 16 m» | Reducir la escala: medir a 0.5 m, 1 m, 2 m, 4 m (en interior, lo más alejado posible de paredes). La ley se verifica igual: entre 0.5 m y 1 m hay −6 dB, entre 1 m y 2 m hay −6 dB. La diferencia con la predicción será MAYOR en interior por las reflexiones — eso es parte del aprendizaje |
| «A larga distancia el ruido de fondo tapa la medición» | Es un resultado esperado, no un error. Pedir que lo documenten: «A 10 m el parlante medía X dBA, pero el ruido de fondo era Y dBA. La diferencia es Z dB. Cuando la diferencia es <10 dB, el ruido de fondo contamina la medición.» Enseñar la corrección por ruido de fondo (sesión 7): si el ruido de fondo está 10 dB por debajo, el error es <0.5 dB; si está a 3 dB, el error es 3 dB |
| «El valor medido es MAYOR que el predicho — ¿está mal?» | No necesariamente. Una reflexión del suelo en fase puede sumar hasta +6 dB al receptor. Preguntar: «¿A qué distancia estaba el micrófono del suelo? ¿Había alguna pared cerca?» Si el suelo es reflectante (concreto, baldosa), la reflexión del suelo domina el error a distancias medias |
| «¿Por qué la fórmula usa 20·log si en sesiones anteriores usamos 10·log?» | 10·log es para relaciones de POTENCIA o INTENSIDAD (W, W/m²). 20·log es para relaciones de PRESIÓN o VOLTAJE (Pa, V). La presión es proporcional a la raíz cuadrada de la intensidad: \(p \propto \sqrt{I}\). Por eso: \(20\log(p_1/p_2) = 10\log(p_1^2/p_2^2) = 10\log(I_1/I_2)\). Son equivalentes — solo cambia el factor según qué magnitud estemos comparando |
| «¿No habíamos visto esto en la sesión 8?» | En la sesión 8 clasificamos los tipos de fuente (puntual, lineal, plana). Ahora profundizamos en el mecanismo físico: ¿POR QUÉ la puntual pierde 6 dB? Porque la energía se reparte sobre una esfera que crece como r². Y lo medimos experimentalmente. Es la diferencia entre saber que algo pasa y entender por qué pasa |
| «La app del celular no es precisa» | Reconocerlo abiertamente. Las apps de celular tienen error típico de ±2-5 dBA en iPhone, ±5-10 dBA en Android por la variedad de micrófonos. Pero para verificar una ley cualitativa (la curva debería bajar ~6 dB por duplicación) es suficiente. Lo importante es la FORMA de la curva, no el valor absoluto |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
