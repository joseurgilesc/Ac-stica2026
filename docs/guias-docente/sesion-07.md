# Guía Docente — Sesión 7: Suma y resta de niveles sonoros

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, calculadora científica (o app), p5.js para simulación de fuentes múltiples, sonómetro (app)  
**Referencia:** Everest & Pohlmann, Capítulo 2, pp. 25–30 (Addition of Sound Levels, Combining Sources) y Capítulo 10, pp. 154–169 (Comb-Filter Effects)

---

## Objetivo de la sesión

Que el estudiante domine la suma y resta logarítmica de niveles sonoros, distinga entre suma coherente e incoherente, y aplique la tabla rápida de adición de dB para resolver problemas prácticos con múltiples fuentes en contextos de producción musical y medición acústica.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 10 min | Demostración con sonómetro + dos parlantes idénticos |
| **Desarrollo** | 40 min | Teoría guiada: suma logarítmica, tabla rápida, coherente vs. incoherente |
| **Práctica** | 55 min | Taller de ejercicios — 8 problemas graduados + simulación |
| **Cierre** | 15 min | Corrección colectiva + bitácora |

---

## 1. Apertura — «70 + 70 = 73»

### Materiales
- Dos parlantes Bluetooth idénticos conectados al mismo celular (misma señal mono)
- App de sonómetro proyectada en pantalla
- Ruido rosa (descargado previamente o generado online) para la medición

### Dinámica
1. Encender un solo parlante reproduciendo ruido rosa. Medir a 1 m: ~75 dB SPL (ajustar volumen para que sea un número redondo).
2. Preguntar a la clase: «Si enciendo el segundo parlante idéntico, ¿cuánto va a marcar el sonómetro?» Dejar que respondan. Casi todos dirán «150 dB» o «el doble».
3. Encender el segundo parlante. El sonómetro marcará ~78 dB SPL.
4. Ver las caras de sorpresa. Ahí arranca la clase.

### Preguntas disparadoras
- «¿Por qué 75 + 75 no es 150? Si duplico la energía, ¿no debería duplicarse el nivel?»
- «En un concierto, ¿diez violines suenan diez veces más fuerte que uno solo?»
- «Si mezclo dos pistas de audio en mi DAW al mismo nivel, ¿cuánto sube el medidor?»

---

## 2. Desarrollo — Teoría guiada paso a paso

### Secuencia sugerida

1. **El problema: los dB no son lineales** (5 min). Recordar de la sesión 5 que el dB es un exponente. Sumar dB es como sumar exponentes: \(10^7 + 10^7 = 2 \times 10^7\), no \(10^{14}\). Escribir en la pizarra:
   - 70 dB SPL = presión de 0.0632 Pa (aproximadamente)
   - Dos fuentes de 0.0632 Pa cada una = 2 × 0.0632 Pa (incoherente)
   - SPL combinado = 20·log(2 × 0.0632 / 0.00002) ≈ 73 dB SPL

2. **La fórmula general de suma** (10 min). Derivar en la pizarra paso a paso desde las intensidades:
   \[
   L_{\text{total}} = 10 \cdot \log_{10}\left(10^{L_1/10} + 10^{L_2/10}\right)
   \]
   Explicar por qué el factor es 10 y no 20: porque primero «deshacemos» los dB dividiendo entre 10 (convertimos a intensidad lineal), sumamos intensidades, y «rehacemos» con 10 log. Hacer el caso de fuentes iguales (\(L_1 = L_2 = L\)) y llegar algebraicamente a \(L + 3\) dB.

3. **Tabla rápida de suma** (10 min). Proyectar la tabla de suma ∆L vs. factor de corrección. Practicar con varios ejemplos orales rápidos:
   - 80 dB + 80 dB = 83 dB (∆ = 0 → +3)
   - 80 dB + 77 dB = 81.8 dB (∆ = 3 → +1.8)
   - 80 dB + 70 dB = 80.4 dB (∆ = 10 → +0.4, prácticamente 80 dB)
   - 90 dB + 90 dB + 90 dB (tres fuentes iguales) → 90+3=93, 93+1.8=94.8 dB

   Enfatizar: «Si la diferencia es ≥10 dB, la fuente más baja **no suma** a efectos prácticos. Esa es la regla más útil de todas: te ahorra cálculos innecesarios.»

4. **Resta de niveles** (10 min). Presentar el caso práctico: «Medimos una guitarra amplificada y el sonómetro marca 88 dB. Apagamos el ampli y el ruido de fondo del aula es 75 dB. ¿Cuál es el nivel real del amplificador solo?» Resolver con la fórmula de resta:
   \[
   L_{\text{fuente}} = 10 \cdot \log_{10}\left(10^{8.8} - 10^{7.5}\right) = 10 \cdot \log_{10}(6.31\times 10^8 - 3.16\times 10^7) = \mathbf{87.8\ \text{dB}}
   \]
   Mostrar la tabla de resta. ∆ = 13 dB → corrección despreciable (≤0.2 dB). Advertir: si ∆ < 3 dB, la medición no es confiable.

5. **Suma coherente vs. incoherente** (5 min). Mostrar dos señales sinusoidales idénticas en fase: las presiones se suman → +6 dB al duplicar. Mostrar el filtro comb (Fig. 10-1 del Everest): cuando hay diferencia de tiempo, hay refuerzo en unas frecuencias y cancelación en otras. En la práctica, con señales musicales complejas, la suma es casi siempre incoherente (+3 dB).

---

## 3. Práctica — Taller de ejercicios graduados

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 7 — Suma y resta de decibeles: taller de ejercicios

**Instrucciones:**

Resolvé los siguientes 8 ejercicios mostrando **todo el desarrollo paso a paso**. Podés usar calculadora para los logaritmos, pero debés escribir las operaciones intermedias. Verificá tus respuestas con la tabla de suma rápida.

### Bloque A — Suma básica (ejercicios 1-3)

| # | Ejercicio |
|---|---|
| **1** | Un parlante produce 82 dB SPL. Otro parlante idéntico reproduce la misma señal (ruido rosa) en el mismo punto. ¿Cuál es el nivel combinado? Usá la fórmula general y verificá con la regla de +3 dB. |
| **2** | Tres fuentes incoherentes producen 75, 78 y 80 dB SPL en un punto. Calculá el nivel total combinando de a pares (los dos más altos primero). Verificá con la fórmula directa de tres fuentes. |
| **3** | Un baterista produce 95 dB SPL (medido a 2 m). Se suma un guitarrista que produce 92 dB SPL en el mismo punto. ¿Cuál es el nivel combinado? ¿Y si además se suma un bajista con 90 dB SPL? |

### Bloque B — Suma de múltiples fuentes (ejercicios 4-5)

| # | Ejercicio |
|---|---|
| **4** | Una orquesta tiene 16 violines. Un solo violín produce 65 dB SPL en la posición del director. ¿Cuál es el nivel combinado de los 16 violines, asumiendo que tocan incoherentemente? (Ayuda: cada duplicación suma 3 dB. 16 = 2⁴ → 4 duplicaciones.) |
| **5** | En una mezcla de estudio, diez pistas de coros fueron grabadas por separado. Cada pista, en solo, mide −12 dBFS en el medidor del DAW. ¿Cuál es el nivel combinado aproximado de las diez pistas juntas? |

### Bloque C — Resta de niveles y ruido de fondo (ejercicios 6-7)

| # | Ejercicio |
|---|---|
| **6** | Medís el ruido de un compresor en un taller: el sonómetro marca 88 dB SPL. Apagás el compresor y el ruido de fondo es 82 dB SPL. ¿Cuál es el nivel del compresor solo? ¿Es confiable esta medición? |
| **7** | Querés medir el nivel de un proyector ruidoso en el aula. Con el proyector encendido, el sonómetro marca 54 dB SPL. Al apagarlo, el ruido de fondo del aula vacía es 52 dB SPL. ¿Es posible determinar el nivel del proyector con precisión? ¿Qué harías para mejorar la medición? |

### Bloque D — Análisis (ejercicio 8)

**8.** Un técnico de sonido mide 100 dB SPL durante una prueba con un solo subwoofer. El fabricante dice que agregando un segundo subwoofer idéntico apilado (coherente), el nivel sube 6 dB. ¿Es esto cierto? Explicá en qué condiciones es +6 dB y en qué condiciones sería +3 dB. ¿Cuál es el caso más probable en un sistema de refuerzo sonoro real con música?

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Bloque A (suma básica) | 3/3 ejercicios con desarrollo completo y resultados correctos | 2/3 correctos o con desarrollo parcial | ≤1 correcto |
| Bloque B (múltiples fuentes) | 2/2 ejercicios — orquesta con método de duplicaciones, coros con fórmula directa | 1/2 correcto | 0/2 correcto |
| Bloque C (resta y ruido de fondo) | 2/2 ejercicios con análisis de confiabilidad de la medición | 1/2 correcto o sin análisis de confiabilidad | 0/2 correcto |
| Bloque D (análisis) | Explica correctamente suma coherente (+6 dB) vs. incoherente (+3 dB) con condiciones y caso realista | Identifica la diferencia pero el razonamiento es incompleto | No distingue entre coherente e incoherente |

---

## 4. Cierre — Corrección colectiva y bitácora

### Corrección grupal (10 min)

Proyectar las soluciones de todos los ejercicios. Pedir a voluntarios que pasen a la pizarra para los más desafiantes (especialmente el #4 — método de duplicaciones, y el #7 — cuándo una medición NO es confiable).

### Errores que DEBEN aparecer en la discusión

- Sumar dB directamente (70 + 70 = 140). Este error es esperable. Tratalo con paciencia — es conceptualmente difícil.
- Usar factor 20 en vez de 10 en la fórmula de suma logarítmica.
- Olvidar que la suma es de a pares, combinando los dos más altos primero.
- No reconocer cuándo la diferencia entre total y fondo es demasiado chica para restar confiablemente.

### Discusión guiada (5 min)

- «¿Por qué 100 violines no suenan 100 veces más fuerte que 1?» (Porque la percepción y la medición son logarítmicas: 100 violines = +20 dB, que se percibe como «4 veces más fuerte», no 100.)
- «En tu DAW, si duplicás una pista de audio (misma toma, copiada), ¿el medidor sube 3 dB o 6 dB? ¿Por qué?» (Si es una copia exacta, es coherente: +6 dB. Si son dos tomas distintas, es incoherente: +3 dB. Esto explica por qué hacer doblajes vocales con dos tomas distintas suena más natural y suma 3 dB sin producir filtro comb.)

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Hoy aprendí que los decibeles no se suman linealmente porque representan logaritmos. La fórmula general es L_total = 10·log(10^(L1/10) + 10^(L2/10)). La regla más importante: duplicar fuentes iguales incoherentes suma 3 dB (no 6, y definitivamente no el doble de dB). Si la diferencia entre dos niveles es ≥10 dB, la fuente más débil es insignificante. La resta de niveles requiere que la diferencia entre total y fondo sea ≥3 dB para ser confiable. La suma coherente (+6 dB) solo ocurre con señales idénticas en fase exacta."*

---

## Recursos adicionales para el docente

- [Sengpielaudio: Addition of Acoustic Levels](http://www.sengpielaudio.com/calculator-spl.htm) — calculadora interactiva para suma y resta de niveles
- [p5.js sketch: Multiple Sound Sources](https://editor.p5js.org/) — los estudiantes pueden crear un sketch donde activen/desactiven fuentes y vean cómo cambia el nivel total
- [Calculadora de suma de dB online](http://www.sengpielaudio.com/calculator-spl30.htm) — permite sumar hasta 30 fuentes
- [Video: Adding Decibels Explained](https://www.youtube.com/watch?v=9GkZgJxT9Dc) — explicación visual de la suma logarítmica
- [NIOSH SLM App](https://www.cdc.gov/niosh/topics/noise/app.html) — para la demostración de apertura con dos parlantes

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «No entiendo por qué 70 + 70 no es 140 dB — ¡si estoy duplicando!» | Recordar: los dB son exponentes. Sumar exponentes multiplica las bases, no las suma. 70 dB SPL = \(20\log_{10}(p_1/20)\), no \(p_1\). Cuando duplicás la fuente, duplicás la presión (\(p_1 \to 2p_1\)), el logaritmo de eso es \(\log(2p_1) = \log(2) + \log(p_1)\). Por eso solo suma 3 dB. Mostrar con números concretos en la pizarra |
| «Me confundo: ¿cuándo uso el factor 10 y cuándo el 20?» | La fórmula de SUMAR niveles SIEMPRE usa 10 log. Porque sumamos intensidades (proporcionales a p²), no presiones. El factor 20 solo aparece en la definición de SPL (SPL = 20·log(p/p₀)), no en la suma. Repetir esto hasta el cansancio — es el error más frecuente en parciales |
| «La tabla de suma me da un resultado distinto que la calculadora» | La tabla usa aproximaciones redondeadas. Para cálculos de precisión (laboratorio), usar la fórmula. Para la mayoría de situaciones prácticas (hasta ±0.3 dB), la tabla es más que suficiente |
| Cálculo de múltiples fuentes: el orden de suma afecta el resultado | Técnicamente no — por propiedad asociativa de la suma de intensidades lineales. Pero si usan la tabla, conviene siempre sumar los dos más altos primero para minimizar el error acumulado de redondeo |
| «¿Cuándo en mi vida real voy a sumar decibeles?» | (1) Configurar un sistema de PA con múltiples cajas: ¿cuánto SPL total entrego? (2) Medir el ruido de varios equipos en el rack del estudio. (3) Calcular cuánto sube el nivel si duplicás la cantidad de instrumentos en una sección de orquesta. (4) Entender la regla de +3 dB por duplicación de amplificadores en vivo. Sucede todo el tiempo |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
