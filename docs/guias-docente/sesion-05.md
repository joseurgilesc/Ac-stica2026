# Guía Docente — Sesión 5: Logaritmos y decibeles

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, calculadora científica (o app), sonómetro (app de celular), proyector  
**Referencia:** Everest & Pohlmann, Capítulo 2, pp. 17–30 (Sound Levels and the Decibel)

---

## Objetivo de la sesión

Que el estudiante domine la definición de decibel como medida logarítmica, convierta razones de presión, intensidad y potencia a dB y viceversa, e interprete correctamente los niveles sonoros típicos del entorno de producción musical.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | Demostración con sonómetro + pregunta disparadora |
| **Desarrollo** | 50 min | Teoría guiada: logaritmos, definición de dB, ejemplos numéricos |
| **Práctica** | 40 min | Ejercicios de conversión + medición en el aula + tabla de niveles |
| **Cierre** | 15 min | Corrección grupal + bitácora |

---

## 1. Apertura — El sonómetro no miente (pero no es lineal)

### Materiales
- App de sonómetro en el celular (Sound Meter, Decibel X, NIOSH SLM — todas gratuitas)
- Altavoz o sistema de sonido del aula

### Dinámica
1. Proyectar el sonómetro en pantalla. Medir el nivel de ruido del aula en silencio (~40-50 dB SPL).
2. Pedir a un estudiante que hable a volumen normal a 1 m del celular (~60-65 dB SPL).
3. Pedir que grite (~80-85 dB SPL).
4. Reproducir un fragmento musical a volumen «normal» (~75 dB) y luego al doble de volumen percibido (~85 dB).

### Preguntas disparadoras
- «El grito fue el doble de fuerte que la conversación. ¿El número en el sonómetro se duplicó?» (No: pasó de ~60 a ~80 — solo +20 dB para ×10 en presión.)
- «Si 0 dB SPL es el umbral de audición, ¿existen los dB negativos?» (Sí: en medios más silenciosos que el umbral, o en dB relativos a otra referencia.)
- «¿Por qué no usamos una escala lineal si es más fácil?»

---

## 2. Desarrollo — Teoría guiada paso a paso

### Secuencia sugerida

1. **El problema de la escala lineal** (5 min). Dibujar en la pizarra una recta numérica de 0 a 1,000,000. Marcar 20 (umbral de audición). Preguntar: «¿Dónde pongo 20,000,000 (umbral de dolor)?». La escala lineal es inmanejable para el rango auditivo. Mostrar la Fig. 2-1 del Everest: la compresión logarítmica resuelve esto.

2. **Repaso express de logaritmos** (15 min). Este es el momento más delicado de la sesión. Ir paso a paso, sin prisa:

   - Escribir en la pizarra: \(\log_{10}(100) = 2\) porque \(10^2 = 100\).
   - Pedir que calculen: \(\log_{10}(1)\), \(\log_{10}(10)\), \(\log_{10}(1000)\), \(\log_{10}(0.1)\).
   - Memorizar los tres valores clave: \(\log_{10}(2) \approx 0.3\), \(\log_{10}(3.16) \approx 0.5\), \(\log_{10}(10) = 1\).
   - Propiedades sin demostración formal, pero con ejemplos numéricos: \(\log(a \cdot b) = \log(a) + \log(b)\) → \(\log(200) = \log(2 \cdot 100) = 0.3 + 2 = 2.3\).

   !!! danger "Momento crítico"
       Si los estudiantes no internalizan \(\log_{10}(2) \approx 0.3\) y las tres propiedades básicas, todo lo demás se derrumba. Dedicá el tiempo necesario aquí, aunque «retrases» el cronograma. Es preferible que entiendan bien los logaritmos a cubrir todo el contenido superficialmente.

3. **Definición de decibel** (10 min). Derivar las dos fórmulas desde la definición:

   \[
   \text{dB} = 10 \cdot \log_{10}\left(\frac{P}{P_0}\right) \qquad \text{(potencia e intensidad)}
   \]
   \[
   \text{dB} = 20 \cdot \log_{10}\left(\frac{p}{p_0}\right) \qquad \text{(presión)}
   \]

   Explicar por qué: \(P \propto p^2\) → \(\log(p^2) = 2\log(p)\) → el factor 10 se convierte en 20. Escribir las tres referencias en la pizarra y dejarlas visibles durante toda la clase:

   | Nivel | Fórmula | Referencia |
   |---|---|---|
   | SPL | \(20\log_{10}(p/20\mu\text{Pa})\) | Umbral de audición a 1 kHz |
   | SIL | \(10\log_{10}(I/10^{-12}\ \text{W/m}^2)\) | Intensidad de referencia |
   | SWL | \(10\log_{10}(W/10^{-12}\ \text{W})\) | Potencia de referencia |

4. **Ejemplos numéricos en vivo** (15 min). Resolver en la pizarra, pidiendo participación:

   - **Ej. 1**: Presión de 0.2 Pa → ¿dB SPL? → 200,000 µPa / 20 µPa = 10,000 → \(\log(10000) = 4\) → \(20 \cdot 4 = 80\) dB SPL.
   - **Ej. 2**: 94 dB SPL → ¿presión en Pa? → \(94/20 = 4.7\) → \(10^{4.7} = 50,119\) → \(p = 50,119 \cdot 20\ \mu\text{Pa} \approx 1\ \text{Pa}\).
   - **Ej. 3**: Duplicar la presión → ¿cuántos dB? → \(20\log_{10}(2) = 20 \cdot 0.301 \approx +6\) dB.
   - **Ej. 4**: +3 dB → ¿qué pasa con la potencia? → \(3 = 10\log_{10}(x)\) → \(0.3 = \log_{10}(x)\) → \(x = 10^{0.3} \approx 2\) → la potencia se duplica.

   Hacer la tabla de reglas prácticas en la pizarra (+3 dB, +6 dB, +10 dB, +20 dB) y que los estudiantes la copien. Es su «chuleta» para el resto del curso.

5. **Tabla de niveles típicos** (5 min). Proyectar la tabla de dB SPL con ejemplos cotidianos. Conectar cada rango con situaciones que los estudiantes experimentan: ensayo (90-100 dB), concierto (100-110 dB), estudio de grabación (20-30 dB), clase (50-60 dB). Mencionar el límite de exposición laboral: 85 dB SPL por 8 horas.

---

## 3. Práctica — Ejercicios y medición

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 5 — Decibeles: ejercicios y medición

**Instrucciones:**

**Parte A — Ejercicios de conversión (individual)**

Resolvé los siguientes ejercicios mostrando todo el desarrollo paso a paso. Podés usar calculadora para los logaritmos, pero debés escribir las operaciones intermedias:

| # | Ejercicio | Resultado |
|---|---|---|
| 1 | Una presión sonora de 0.05 Pa. ¿Cuántos dB SPL? | |
| 2 | 65 dB SPL. ¿Cuál es la presión en µPa? | |
| 3 | Una potencia sonora se triplica. ¿Cuántos dB aumenta? | |
| 4 | Un sonido aumenta 15 dB. ¿Por cuánto se multiplicó su presión? | |
| 5 | Dos fuentes idénticas producen cada una 70 dB SPL en un punto. ¿Cuál es el nivel combinado? | |
| 6 | Un amplificador pasa de 50 W a 200 W. ¿Cuál es el aumento en dB? | |
| 7 | Si \(\log_{10}(x) = 3.5\), ¿cuánto vale \(x\)? ¿Cuántos dB SPL representa si la presión es \(x\) µPa? | |
| 8 | Convertir los siguientes niveles a escala lineal (presión en µPa): 0 dB SPL, 20 dB SPL, 40 dB SPL, 94 dB SPL, 120 dB SPL | |

**Parte B — Medición en campo (en parejas)**

1. Usando la app de sonómetro en tu celular, medí el nivel de presión sonora (dB SPL, ponderación A) en al menos **ocho situaciones diferentes** de tu entorno diario. Sugerencias: tu habitación en silencio, la calle, el transporte público, la cafetería, la biblioteca, el aula antes/durante clase, un ensayo o práctica musical, el gimnasio.

2. Completá la siguiente tabla:

| Situación | dB SPL (A) | ¿Es seguro? (≤85 dB) | Comparación con la tabla de referencia |
|---|---|---|---|
| | | | |

3. Identificá la situación más ruidosa y la más silenciosa. Calculá:
   - La diferencia en dB entre ambas
   - La relación de presiones (\(p_{\text{fuerte}} / p_{\text{suave}}\))
   - ¿Coincide tu percepción de «cuántas veces más fuerte» con la relación de presiones?

**Parte C — Ficha de fórmulas (individual)**

Elaborá una **ficha de consulta rápida** (una carilla) que incluya:

- Las dos formas de la ecuación del decibel (factor 10 y factor 20)
- Las tres referencias estándar (SPL, SIL, SWL)
- La tabla de equivalencias rápidas (+3, +6, +10, +20 dB)
- Tres ejemplos resueltos por vos (no copiados de los apuntes)

Esta ficha podrá usarse en evaluaciones futuras — hacela bien.

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Ejercicios (Parte A) | 8/8 con desarrollo paso a paso y resultados correctos | 5-7 correctos o sin desarrollo | ≤4 correctos |
| Medición en campo (Parte B) | ≥8 mediciones con tabla completa, diferencia y relación calculadas | 5-7 mediciones o cálculos parciales | ≤4 mediciones o sin cálculos |
| Ficha de fórmulas (Parte C) | 5 elementos requeridos + 3 ejemplos propios resueltos correctamente | Faltan 1-2 elementos o ejemplos copiados | Incompleta o con errores conceptuales |

---

## 4. Cierre — Discusión y bitácora

### Corrección grupal (10 min)

Proyectar los resultados de los ejercicios 1-8. Pedir a estudiantes voluntarios que pasen a la pizarra a resolver los más desafiantes (especialmente el #5 — suma de dB y el #4 — despeje inverso). Dedicar tiempo a los errores más comunes:

- Usar factor 10 en lugar de 20 para presión (error clásico)
- Olvidar que \(p_0 = 20\) µPa y usar 1 Pa como referencia
- Sumar dB directamente (70 + 70 ≠ 140 dB SPL)

### Discusión guiada (5 min)

- «¿Por qué un concierto de rock a 110 dB SPL puede dañar tu audición en minutos, pero una conversación de 60 dB SPL podés mantenerla todo el día?» (cada +3 dB reduce el tiempo seguro a la mitad)
- «Si medimos 80 dB SPL en la cabina de grabación, ¿es bueno o malo?» (depende: para grabar voces es pésimo — debería ser <30 dB; para monitoreo de mezcla, es un nivel de escucha razonable)

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Hoy comprendí por qué usamos decibeles en acústica: el oído percibe logarítmicamente y el rango de presiones es enorme (1:1,000,000). Aprendí que dB = 10·log(P/P₀) para potencia y dB = 20·log(p/p₀) para presión. Las equivalencias clave: +3 dB = ×2 en potencia, +6 dB = ×2 en presión, +10 dB = ×10 en potencia y 'el doble de fuerte'. Lo más importante: los dB siempre son relativos a una referencia. Sin referencia, un número en dB no significa nada."*

---

## Recursos adicionales para el docente

- [NIOSH Sound Level Meter](https://www.cdc.gov/niosh/topics/noise/app.html) — sonómetro gratuito de instituto oficial de salud (iOS, calibrar antes de usar)
- [Decibel X](https://skypaw.com/decibelx.html) — sonómetro con gráficos (iOS/Android)
- [Tabla comparativa de niveles SPL](https://en.wikipedia.org/wiki/Sound_pressure) — referencia rápida de niveles típicos con ejemplos
- [Calculadora de dB](http://www.sengpielaudio.com/calculator-db.htm) — para que los estudiantes verifiquen sus ejercicios
- [Video: The Decibel Scale](https://www.youtube.com/watch?v=9GkZgJxT9Dc) — explicación visual animada del concepto logarítmico
- [Video: Logarithms Explained](https://www.youtube.com/watch?v=zzu2POfYv0Y) — por si algún estudiante necesita refuerzo en logaritmos básicos

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «No entiendo los logaritmos — no los vi en el colegio» | Empezar con la pregunta «¿10 elevado a qué potencia me da 100?». Practicar solo con potencias de 10 primero (log 1, log 10, log 100...). Luego introducir log(2) ≈ 0.3 con calculadora. No avanzar hasta que esto esté claro |
| Confusión entre factor 10 y factor 20 | Regla mnemotécnica: «Presión → 20 letras (p-r-e-s-i-ó-n), Potencia → 10 letras (p-o-t-e-n-c-i-a)». O mejor: recordar que presión va al cuadrado en la fórmula de potencia (\(P \propto p^2\)) y el 2 «sale» del logaritmo multiplicando al 10 |
| Usar la referencia equivocada (1 Pa en vez de 20 µPa) | Escribir en grande en la pizarra: «0 dB SPL = 20 µPa» y dejarlo visible toda la clase. Enfatizar que 0 dB SPL ≠ ausencia de sonido — hay presión (20 µPa), solo que es el valor de referencia |
| Sumar dB linealmente (70 dB + 70 dB = 140 dB) | Mostrar con el ejemplo concreto: dos personas hablando al mismo tiempo no producen el doble de dB. La suma de dB es logarítmica y requiere convertir a lineal, sumar, y reconvertir. Esto se profundiza en la sesión 7 |
| «¿Para qué necesito tanta matemática si soy músico?» | Conectar con situaciones reales: (1) Elegir monitores de estudio (sensibilidad en dB SPL/W/m). (2) Configurar niveles de ganancia en una interfaz de audio (headroom en dB). (3) Leer las especificaciones de un micrófono (relación señal/ruido en dB). (4) Saber si estás dañando tu audición en un ensayo (SPL en dB). Los dB están en TODAS las fichas técnicas del equipamiento que usan a diario |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
