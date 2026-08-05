# Guía Docente — Sesión 10: Absorción atmosférica

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, p5.js, simulador de absorción atmosférica (web o script Python), calculadora científica, datos meteorológicos (temperatura, humedad) del día de la clase  
**Referencia:** Everest & Pohlmann, Capítulo 3, pp. 45–55 (Atmospheric Absorption — Effects of Frequency, Temperature, and Humidity on Sound Propagation)

---

## Objetivo de la sesión

Que el estudiante comprenda cómo la frecuencia, la temperatura y la humedad relativa afectan la propagación del sonido en exteriores, interprete tablas y curvas de absorción atmosférica, calcule la atenuación total (divergencia + absorción), y aplique estos conceptos al diseño de sistemas de sonido para eventos al aire libre.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 10 min | Experimento mental: ¿por qué un trueno lejano suena grave? |
| **Desarrollo** | 45 min | Teoría guiada: mecanismo de absorción, α vs. f², humedad, tablas, ejemplos de cálculo |
| **Práctica** | 50 min | Simulación p5.js + diseño de compensación para evento exterior + caso de estudio |
| **Cierre** | 15 min | Discusión: aire seco vs. húmedo, sonido nocturno vs. diurno + bitácora |

---

## 1. Apertura — «¿Por qué el trueno lejano es grave?»

### Dinámica

1. Reproducir dos grabaciones de audio: un trueno cercano (chasquido agudo y seco) y un trueno lejano (retumbo grave).
2. Preguntar: «Es el mismo fenómeno físico — un rayo. ¿Por qué suenan TAN diferente?»
3. Guiar la discusión: no es que el rayo cercano produzca más agudos. Es que los agudos del rayo lejano FUERON ABSORBIDOS por el aire en el camino. Cuanto más viaja el sonido, más agudos pierde.
4. Segunda pregunta: «En un concierto al aire libre, ¿el sonidista ecualiza igual los tweeters para la primera fila que para el fondo?» (No — compensa con EQ la absorción acumulada.)

### Preguntas disparadoras

- «Si el aire absorbe los agudos, ¿por qué los murciélagos usan ultrasonido (20-100 kHz) y no sonidos graves?» (Porque la absorción atmosférica limita su alcance a unos pocos metros — justo lo que necesitan para ecolocalización de presas cercanas.)
- «¿En un desierto o en la selva se escucha mejor un concierto lejano?» (Selva — alta humedad → menor absorción de agudos → el sonido viaja más lejos con fidelidad.)
- «¿Por qué los sistemas de megafonía de emergencia usan tonos graves?»

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **El mecanismo físico: fricción molecular** (10 min). Explicar que el sonido es vibración molecular. Cuando las moléculas de aire vibran, chocan entre sí y parte de la energía cinética se convierte en calor. Es como agitar un líquido: se calienta (mínimamente) por fricción interna. A mayor frecuencia, más ciclos de vibración por segundo → más colisiones → más energía disipada como calor. Por eso α ∝ f².

    Dibujar en la pizarra: molécula de O₂ vibrando a 100 Hz (pocas colisiones/segundo) vs. a 10,000 Hz (muchas colisiones/segundo). La diferencia es de factor 100 en frecuencia → factor 10,000 en colisiones → absorción ~10,000× mayor (en aire seco; la humedad modula este efecto).

2. **La paradoja de la humedad** (10 min). Preguntar: «¿El sonido viaja mejor en aire seco o húmedo?» La mayoría dirá «seco» (intuición: el agua «frena» las cosas). Mostrar que es AL REVÉS:
    - Las moléculas de H₂O son más ligeras y tienen momentos de rotación/vibración que «absorben» los choques que de otro modo disiparían energía acústica.
    - A 10% HR, una onda de 8 kHz pierde 2.2 dB/100 m. A 90% HR, solo 0.45 dB/100 m. ¡Casi 5× más atenuación en aire seco!

    > Insertar **Fig. 3-4** del Everest: curvas de absorción atmosférica para distintas humedades. Mostrar el «pico» de máxima absorción — ocurre a una HR específica para cada frecuencia. A 4 kHz, la peor propagación ocurre alrededor de 15-20% HR, no a 0%.

3. **Tablas de absorción y cómo leerlas** (10 min). Proyectar la tabla de α (dB/100 m) para frecuencias de 125 Hz a 8 kHz y HR de 10% a 90%. Enseñar a interpolar visualmente. Destacar:
    - Por debajo de 500 Hz, α < 0.01 dB/100 m — despreciable a cualquier distancia práctica.
    - A 1 kHz, α ~0.01-0.05 dB/100 m — relevante solo a >500 m.
    - A 4 kHz, α ~0.15-0.70 dB/100 m — relevante a >100 m.
    - A 8 kHz, α ~0.45-2.20 dB/100 m — relevante a >50 m.

4. **Atenuación total: divergencia + absorción** (10 min). Escribir la fórmula completa en la pizarra: SPL_total(r) = SPL(1m) + 20·log(1/r) − α·r. Hacer ejemplos numéricos:
    - 100 m, 1 kHz, 50% HR: divergencia −40 dB, absorción −0.01 dB. Total ≈ −40 dB.
    - 500 m, 8 kHz, 30% HR: divergencia −54 dB, absorción −7 dB. Total ≈ −61 dB.
    - 1 km, 8 kHz, 30% HR: divergencia −60 dB, absorción −14 dB. Total ≈ −74 dB.

    > Insertar **Fig. 3-5** del Everest: efecto combinado — cómo las curvas de diferentes frecuencias se separan con la distancia.

5. **Aplicación a producción musical en vivo** (5 min). Contar el caso real: un festival en verano seco (35°C, 15% HR). El ingeniero de PA mide en la torre de delay a 80 m y los agudos están 4 dB por debajo de lo esperado. ¿Qué hace? Aplica un boost en la banda de 8 kHz en el DSP de la torre para compensar la absorción atmosférica. En un día húmedo (25°C, 80% HR), ese mismo ajuste produciría agudos estridentes. Los procesadores modernos de PA cargan perfiles de temperatura y humedad.

---

## 3. Práctica — Simulación, diseño y caso de estudio

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 10 — Absorción atmosférica: del laboratorio al escenario

**Instrucciones:**

**Parte A — Simulación p5.js (individual)**

1. Abrí el simulador de absorción atmosférica provisto por el docente.
2. Configurá los siguientes parámetros y anotá el SPL resultante a 200 m para cada frecuencia:

   | Frecuencia | SPL a 200 m con HR=20%, T=30°C | SPL a 200 m con HR=70%, T=20°C | Diferencia (seco − húmedo) |
   |---|---|---|---|
   | 500 Hz | | | |
   | 1 kHz | | | |
   | 4 kHz | | | |
   | 8 kHz | | | |

3. Respondé:
   - ¿En qué frecuencia la diferencia entre aire seco y húmedo es mayor?
   - ¿A qué distancia la absorción atmosférica iguala la atenuación por divergencia geométrica a 8 kHz, 20% HR? (Es decir, ¿dónde α·r = 20·log(r)?)
   - Si tuvieras que ecualizar un sistema de PA para un festival en Bogotá (2,600 m de altura, HR ~70%, T ~14°C), ¿esperarías más o menos absorción atmosférica que al nivel del mar? (Pista: la menor densidad del aire en altura reduce la absorción porque hay menos moléculas por m³ colisionando.)

**Parte B — Diseño de compensación (en parejas)**

Un festival de música electrónica se realizará en dos locaciones distintas. Para cada una, diseñá la estrategia de compensación de agudos del sistema de PA:

| Parámetro | Festival A: Viña del Mar (costa) | Festival B: San Pedro de Atacama (desierto) |
|---|---|---|
| Temperatura típica (tarde) | 22°C | 32°C |
| Humedad relativa típica | 75% | 12% |
| Distancia de la torre principal al último espectador | 120 m | 120 m |
| Frecuencia crítica a compensar (la más afectada) | | |
| Atenuación por divergencia a 120 m (dB) | | |
| Atenuación por absorción atmosférica a 120 m, 8 kHz (dB) | | |
| Atenuación TOTAL a 120 m, 8 kHz (dB) | | |
| Boost de EQ necesario en la torre para compensar absorción (dB) | | |
| ¿Recomendarías también una torre de delay a 60 m? ¿Por qué? | | |

**Parte C — Caso de estudio: ¿por qué el concierto se escuchaba mal? (individual)**

Leé el siguiente escenario:

> Un festival al aire libre en Mendoza (Argentina) en enero. Temperatura: 38°C, humedad relativa: 15%. El sistema de PA fue calibrado a las 14:00 con un procesador DSP que aplicaba un boost de +4 dB a 8 kHz en las torres de delay. A las 20:00, el concierto empieza. El ingeniero nota que los agudos suenan estridentes y metálicos. Decide bajar el boost a +1 dB a 8 kHz. A las 23:00, con la temperatura bajando a 22°C, los agudos se escuchan apagados y sin brillo. Vuelve a subir el boost a +3 dB.

Redactá un análisis técnico de 200-300 palabras que explique:
1. ¿Por qué el boost de +4 dB era excesivo a las 20:00 pero insuficiente a las 14:00?
2. ¿Por qué cambió la percepción de los agudos entre las 14:00, las 20:00 y las 23:00? Relacionalo con la temperatura y la humedad relativa.
3. ¿Qué dato meteorológico debería estar monitoreando el ingeniero durante TODO el evento para ajustar el DSP en tiempo real?

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Simulación (Parte A) | 4 frecuencias × 2 condiciones, tabla completa, 3 preguntas respondidas con razonamiento técnico | Tabla parcial o respuestas imprecisas | Tabla incompleta, sin razonamiento |
| Diseño (Parte B) | Ambos festivales analizados con valores numéricos correctos, boost calculado, decisión de torre de delay con justificación | Un festival analizado o valores aproximados | Sin cálculos o decisiones sin justificar |
| Caso de estudio (Parte C) | Explica los 3 momentos del día, relaciona HR y T con absorción, propone monitoreo continuo | Análisis superficial de algún momento | No relaciona causa física con efecto audible |
| Terminología | Usa correctamente: absorción atmosférica, divergencia geométrica, α, humedad relativa, coeficiente de atenuación | Algunos términos usados con imprecisión | Sin terminología de la sesión |

---

## 4. Cierre — Discusión y bitácora

### Discusión guiada (10 min)

- «Volviendo a la pregunta del inicio: ¿por qué el trueno lejano suena grave?» (Ahora deberían responder con precisión: divergencia esférica atenúa por igual todas las frecuencias, pero la absorción atmosférica atenúa selectivamente los agudos. A 5 km, los 8 kHz perdieron más de 100 dB solo por absorción — llegaron a cero. Los 125 Hz, en cambio, perdieron <0.5 dB por absorción. Lo que llega es solo el espectro grave.)
- «Si hicieras un concierto en la playa (muy húmedo) vs. en el altiplano (muy seco), ¿cuál necesita más compensación de agudos?» (El altiplano — por dos razones: (1) aire más seco → mayor α, (2) menor densidad del aire en altura → aunque hay menos moléculas, el efecto neto de altura es menor absorción. Pero el factor dominante es la humedad.)
- «¿En un estudio de grabación necesito preocuparme por la absorción atmosférica?» (No. A 3 m, la absorción es ~0.0001 dB. Completamente despreciable. La acústica de salas (reflexiones, modos, RT60) domina totalmente en interiores.)

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"El aire no es transparente al sonido: absorbe energía, especialmente en frecuencias altas. La absorción atmosférica depende de la frecuencia (α ∝ f²), la humedad relativa (a más humedad, MENOS absorción — contra la intuición) y la temperatura. A 8 kHz en aire muy seco (10% HR), se pierden 2.2 dB cada 100 m solo por absorción del aire, adicionales a la divergencia geométrica. En la práctica, esto significa que en un concierto al aire libre debo compensar los agudos del sistema de PA según la distancia y las condiciones meteorológicas. La absorción atmosférica y la refracción por temperatura (sesión 11) juntas explican por qué el sonido viaja más lejos de noche."*

---

## Recursos adicionales para el docente

- [ISO 9613-1:1993 — Attenuation of sound during propagation outdoors, Part 1: Atmospheric absorption](https://www.iso.org/standard/17427.html) — estándar internacional que define el método de cálculo de absorción atmosférica (usado por todos los softwares de predicción acústica)
- [Sengpielaudio: Atmospheric Absorption Calculator](http://www.sengpielaudio.com/calculator-air.htm) — calculadora online basada en ISO 9613-1. Ingresás frecuencia, temperatura, humedad → α en dB/100 m
- [Simulador p5.js de absorción atmosférica](https://editor.p5js.org/) — sketch con sliders para frecuencia, humedad y temperatura que dibuja la curva de atenuación total
- [Datos meteorológicos en tiempo real](https://openweathermap.org/) — API gratuita para obtener T y HR actual de cualquier ciudad (usar en el momento de la clase)
- [Video: Why Sound Travels Further at Night](https://www.youtube.com/watch?v=9GkZgJxT9Dc) — explicación combinada de absorción atmosférica y refracción
- [Artículo: Atmospheric Absorption in Live Sound](https://www.prosoundweb.com/) — casos reales de compensación de absorción en giras internacionales

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «No entiendo por qué más humedad = menos absorción. ¿El agua no debería frenar el sonido?» | El agua LÍQUIDA sí frena el sonido (imaginate gritar bajo el agua — se propaga más rápido pero con mucha impedancia). Pero el vapor de agua en el aire no es agua líquida: son moléculas de H₂O gaseosas que amortiguan las colisiones entre O₂ y N₂. La física es contraintuitiva: el aire seco es más «rígido» molecularmente y disipa más energía. Mostrar el gráfico de α vs. HR — se ve claramente que la máxima absorción ocurre a HR ~15-20%, no a 0% |
| «¿Por qué α ∝ f² y no α ∝ f?» | Porque tanto la energía por ciclo como el número de ciclos por segundo aumentan con la frecuencia. Cada ciclo disipa una fracción de la energía, y hay f veces más ciclos por segundo. Efecto neto: ∝ f². Es la misma razón por la que un motor que gira al doble de RPM disipa mucho más que el doble de calor por fricción |
| Confusión entre divergencia y absorción | Dibujar dos curvas separadas y luego sumadas. Divergencia: −6 dB/dobling, independiente de frecuencia, domina a corta distancia. Absorción: dB lineales con distancia, MUY dependiente de frecuencia, domina a larga distancia. El punto donde se cruzan (donde ambas contribuyen igual) depende de la frecuencia y la HR |
| «En la tabla del enunciado, los valores no coinciden exactamente con la calculadora online» | La absorción atmosférica es un modelo estadístico basado en la norma ISO 9613-1. Pequeñas diferencias (<10%) entre fuentes son normales y se deben a los coeficientes de relajación molecular usados en cada implementación. Para trabajo en producción musical, la tabla de la sesión es suficiente; para ingeniería ambiental se usa la norma ISO exacta |
| «Mi ciudad está a 2,600 m de altura. ¿Las tablas aplican igual?» | No exactamente. La norma ISO 9613-1 incluye una corrección por presión atmosférica: a mayor altura, menor densidad del aire → menos moléculas por m³ → MENOS absorción. La corrección es proporcional a la presión atmosférica: \( \alpha_{\text{altura}} = \alpha_{\text{nivel del mar}} \times (P_{\text{real}} / 101.325) \). A 2,600 m, la presión es ~74 kPa → α se reduce ~27%. Es decir, en altura hay MENOS absorción atmosférica que al nivel del mar para la misma HR y T |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
