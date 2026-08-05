# Guía Docente — Sesión 22: Campo directo, campo reverberante y distancia crítica

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, sonómetro (app), parlante, cinta métrica, p5.js (simulador de campo directo/reverberante), REW (opcional, demo)  
**Referencia:** Everest & Pohlmann, Capítulo 3, pp. 52–57 (Free Field — Directivity, Near/Far Field) + Capítulo 11, pp. 170–197 (Direct and Reverberant Fields, Critical Distance)

---

## Objetivo de la sesión

Que el estudiante diferencie analíticamente el campo directo y el campo reverberante como componentes del nivel sonoro en interiores, calcule la distancia crítica Dc integrando absorción total A y directividad Q, y determine posiciones de micrófono y escucha que garanticen predominio del campo directo sobre el campo reverberante.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | «¿Por qué puedo hablar con mi compañero de al lado pero no escucho al profesor?» |
| **Desarrollo** | 45 min | Teoría guiada: campo directo (Ld), campo reverberante (Lr), distancia crítica (Dc), Q y directividad |
| **Práctica** | 40 min | Medición real SPL vs. distancia + cálculo de Dc para 3 configuraciones |
| **Cierre** | 20 min | «Dónde pongo el micrófono» — reglas de posicionamiento + bitácora |

---

## 1. Apertura — «¿Por qué no escucho al profesor?»

### Dinámica

1. Pedir a un estudiante que hable en voz normal desde el frente del aula. Pedir a otro que hable en voz normal desde el fondo. Preguntar: «¿Desde dónde se entiende mejor?» → Desde cerca. Pero...
2. Explicar: «En una sala con mucha reverberación, el sonido que llega desde lejos NO SOLO es más bajo — ESTÁ ENMASCARADO por la reverberación de la sala. La reverberación tiene nivel constante en toda la sala. Si estás lejos, el sonido directo del profesor es tan débil que el ruido de la reverberación lo tapa.»
3. Pedir a todos que cierren los ojos. El profesor da una palmada cerca (a 1 m del grupo). Luego da una palmada lejos (a 10 m, al fondo del aula). Preguntar: «¿Cuál palmada fue más NÍTIDA? ¿Cuál tuvo una 'cola' más evidente?»
4. Presentar el concepto clave: «En TODA sala existe una distancia donde el sonido directo y la reverberación tienen EXACTAMENTE el mismo nivel: la DISTANCIA CRÍTICA. Si estás MÁS CERCA que Dc, escuchás la fuente. Si estás MÁS LEJOS que Dc, escuchás la SALA.»

### Preguntas disparadoras
- «En un recital, ¿por qué la gente del fondo escucha 'barro'?» → Están a r > Dc. La reverberación domina sobre el sonido directo de los parlantes.
- «Si el sonidista sube el volumen, ¿la gente del fondo escucha mejor?» → SUBE TODO. Directo y reverberante suben por igual (ambos dependen de Lw). La RELACIÓN directo/reverberante NO mejora. Solo conseguís que el «barro» sea MÁS FUERTE. La solución real: más fuentes con Q alto (line array) distribuidas.

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Los dos campos** (10 min). Dibujar en la pizarra una fuente puntual emitiendo frentes de onda esféricos. El campo directo viaja en línea recta y decae con 1/r² (−6 dB al duplicar distancia). El campo reverberante son ondas que ya rebotaron, difusas, de todas direcciones, nivel CONSTANTE. Preguntar: «Si mido SPL en el centro de la sala y en una esquina, ¿da lo mismo?» → Idealmente sí para el campo reverberante. En salas pequeñas el campo nunca es perfectamente difuso, pero la aproximación es razonable.

2. **Las fórmulas de Ld y Lr** (10 min). Escribir ambas ecuaciones. Ld BAJA con r. Lr NO depende de r. En algún punto se cruzan.

   > Insertar **Fig. 3-8** del Everest: gráfico SPL vs. distancia.

3. **Distancia crítica Dc** (15 min). Igualar Ld = Lr, despejar r: Dc = 0.141 · √(Q · A). Explicar por qué Q y A están dentro de la raíz: la energía decae con r², así que duplicar Q o A solo aumenta Dc en √2 ≈ 41%.

   > Insertar **Fig. 11-6** del Everest: Dc vs. RT60 para diferentes Q.

   Preguntar: «Si duplico A, ¿cuánto aumenta Dc?» → 1.41×. «¿Y si cuadruplico A?» → 2×. La lección: mejorar Dc requiere MUCHA absorción adicional; los beneficios tienen rendimiento decreciente.

4. **Directividad Q** (10 min). Q mide cuánto más SPL hay en la dirección del receptor comparado con radiación omnidireccional de la misma potencia. Ejemplos: Q=1 (esfera pulsante, espacio libre), Q=2 (fuente sobre piso), Q=4 (esquina piso-pared), Q=8 (esquina triédrica). Preguntar: «¿Un subwoofer en la esquina es más potente?» → NO. Misma potencia, concentrada en 1/8 del espacio. La energía que se iría hacia atrás y costados se refleja hacia adelante.

---

## 3. Práctica — Medición y cálculo de Dc

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 22 — Campo directo, campo reverberante y distancia crítica

**Instrucciones:**

**Parte A — Medición real de SPL vs. distancia (grupal, en el aula)**

1. Coloquen un parlante a 1.5 m de altura, emitiendo ruido rosa (o tono de 1 kHz) a volumen constante.
2. Con sonómetro (app), midan SPL en dB(A) a: 0.5 m, 1 m, 1.5 m, 2 m, 3 m, 4 m, 6 m, 8 m.
3. Registren en tabla: distancia r (m), log(r), SPL medido (dB).
4. Grafiquen SPL (Y lineal) vs. distancia (X logarítmico). Identifiquen:
   - Zona cercana: caída de ~6 dB/doble distancia → CAMPO DIRECTO.
   - Zona lejana: nivel aproximadamente constante → CAMPO REVERBERANTE.
5. Tracen las dos rectas. El punto de cruce → ¡Dc MEDIDA!
6. Respondan: ¿Coinciden las mediciones con la teoría? ¿A partir de qué distancia el SPL deja de bajar? ¿Qué limitaciones tuvo la medición (ruido de fondo, precisión de app, modos)?

**Parte B — Cálculo teórico de Dc (individual)**

Usando los datos de la sala de control de la Sesión 20 (V = 72 m³, S = 108 m²):

1. Calculá Dc para 6 bandas (125 Hz – 4 kHz) con Q = 3:

    | Banda | A (sabins) — de Sesión 20 | Dc = 0.141 · √(3 × A) (m) |
    |---|---|---|
    | 125 Hz | | |
    | 250 Hz | | |
    | 500 Hz | | |
    | 1 kHz | | |
    | 2 kHz | | |
    | 4 kHz | | |

2. Graficá Dc vs. frecuencia. Respondé:
   - ¿Dc es constante? ¿En qué banda es más corta? ¿Por qué?
   - Con posición de escucha a 1.2 m: ¿en qué bandas estás fuera de la zona de campo directo dominante?
   - Consecuencia práctica: ¿qué rango de frecuencias está siendo dictado más por la sala que por los monitores?

**Parte C — Decisiones de posicionamiento (individual)**

1. **Grabación de voz**: V = 50 m³, RT60 = 0.8 s, Q(voz) = 2. Calculá A ≈ 0.161·V/RT60, Dc, y recomendá distancia máxima del micrófono.
2. **Mezcla con monitores**: V = 45 m³, A = 25 sabins, Q(monitor) = 3. Calculá Dc. Si tus oídos están a 1.5 m, ¿escuchás más monitores o más sala? ¿Qué modificación sugerirías?
3. **Refuerzo sonoro**: V = 2000 m³, RT60 = 1.8 s, Q(line array) = 20. Calculá A, Dc. Si la última fila está a 25 m, ¿los espectadores del fondo escuchan más el sistema o la reverberación? ¿Cuánto tendría que aumentar Q para cubrir hasta 25 m? ¿Es realista?

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Medición SPL (Parte A) | Datos con sonómetro, gráfico SPL vs. log(r) con 8+ puntos, rectas trazadas, Dc estimada del gráfico, reflexión sobre limitaciones | Mediciones hechas pero gráfico incompleto o Dc no estimada | Sin mediciones o sin gráfico |
| Cálculo Dc (Parte B) | Dc calculado para 6 bandas con datos de Sesión 20, gráfico Dc vs. frecuencia, bandas problemáticas identificadas, consecuencia práctica explicada | Cálculos correctos pero análisis superficial | Errores en 3+ bandas o sin usar datos previos |
| Posicionamiento (Parte C) | Dc calculado para los 3 escenarios, recomendación de distancia justificada con Dc, propuesta de mejora concreta, análisis de factibilidad de Q para 25 m | Cálculos correctos pero recomendaciones genéricas | Errores de cálculo o recomendaciones sin sustento |
| Integración vertical (Sesiones 17-22) | Conecta: RT60 (S19) → A (S18) → Dc (S22). Datos de Sesión 20 usados en Parte B | Usa datos previos pero no articula la conexión conceptual | No usa datos previos ni establece conexiones |

---

## 4. Cierre — «Dónde pongo el micrófono»

### Discusión guiada (15 min)

- «Regla #1 del audio: si suena mal en la fuente, no lo arreglás en la mezcla. Regla #2: si está mal posicionado el micrófono, no lo arreglás con plugins. Regla #3 (la de hoy): si estás a r > Dc, estás grabando más SALA que FUENTE. No hay plugin que separe lo que la acústica ya mezcló.»
- «En la Parte B, ¿qué banda dio Dc más corta? ¿125 Hz? SIEMPRE. Los graves tienen menos absorción → A más chica → Dc más corta. Si tu Dc en 125 Hz es 0.8 m pero tus oídos están a 1.2 m, estás escuchando MÁS SALA QUE MONITORES en graves. Tus decisiones de低频 están dictadas por los modos y la reverberación de tu cuarto, no por lo que realmente está sonando. Este es el problema #1 del home studio.»
- «En la Parte C.3: ¿qué Q necesitás para Dc = 25 m en ese auditorio? Despejá Q = (Dc / 0.141)² / A. Con A ≈ 179 sabins: Q = (25/0.141)² / 179 = 31,446 / 179 ≈ 176. ¿Es realista? Para NADA. El line array más directivo del mundo no llega a Q = 176. Por eso los auditorios grandes usan MÚLTIPLES line arrays distribuidos (cada uno cubre una zona), o refuerzo con parlantes de relleno (fill speakers) bajo balcones y al fondo. NO existe UNA fuente que cubra 25 m en un auditorio reverberante — necesitás un SISTEMA.»
- «Llevate esta imagen mental: Dc es la frontera entre 'escuchar la fuente' y 'escuchar la sala'. Como ingeniero, tu trabajo es asegurarte de que el micrófono (en grabación) y tus oídos (en mezcla) estén del lado CORRECTO de esa frontera.»

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"En un recinto cerrado, el nivel de presión sonora en un punto es la suma de dos componentes: el campo directo (Ld), que decae 6 dB al duplicar la distancia, y el campo reverberante (Lr), que es idealmente constante en toda la sala. La distancia crítica Dc es aquella donde ambos campos tienen el mismo nivel: Dc = 0.141·√(Q·A). Dc depende de la absorción total A (a más absorción, más lejos llega el campo directo) y de la directividad de la fuente Q (a más directividad, mayor Dc). Dc varía con la frecuencia porque tanto A como Q dependen de f: típicamente Dc es más corta en graves y más larga en agudos. Para GRABAR, el micrófono debe estar a r < Dc (campo directo dominante). Para MEZCLAR, los oídos deben estar a r < Dc de los monitores. Si se está a r > Dc, la reverberación de la sala dicta lo que se escucha, y las decisiones de mezcla dejan de ser confiables. Subir el volumen NO cambia la relación directo/reverberante porque ambos campos escalan con Lw."*

---

## Recursos adicionales para el docente

- [Simulador de campo directo/reverberante en p5.js](https://editor.p5js.org/) — sketch con: slider para A, slider para Q, gráfico SPL vs. distancia (directo, reverberante, suma). Ver cómo se mueve Dc en tiempo real
- [REW — Room EQ Wizard](https://www.roomeqwizard.com/) — medir la respuesta al impulso del aula y extraer Dc de los datos reales
- [Decibel X (iOS/Android)](https://skypaw.com/decibelx.html) — sonómetro con ponderaciones A/C/Z, ideal para la Parte A
- [Video: Critical Distance Explained — Audio University](https://www.youtube.com/watch?v=GqA5MxkE0cA) — explicación visual del concepto de Dc
- [JBL Professional Sound System Design Reference Manual](https://jblpro.com/en/site_elements/tech-note-sound-system-design-reference-manual) — manual de referencia para diseño de sistemas de refuerzo sonoro. Cubre Dc, Q, line arrays y cobertura en profundidad
- [Meyer Sound MAPP XT](https://mapp.meyersound.com/) — software gratuito de predicción de cobertura de line arrays. Mostrar cómo múltiples elementos aumentan Q y extienden Dc

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «Mis mediciones de la Parte A no muestran la meseta del campo reverberante.» | Posibles causas: (a) el aula es demasiado pequeña para que se desarrolle campo reverberante estable; (b) la fuente no tiene suficiente potencia para que el nivel reverberante supere el ruido de fondo a distancias largas; (c) el sonómetro del celular tiene respuesta no lineal. Si no se ve meseta, Dc es mayor que la dimensión más larga del aula → el campo directo domina en TODA la sala (sala seca). ¡Eso es BUENO para dar clase! |
| «Dc me da 0.5 m en 125 Hz. ¿Eso significa que tengo que poner los monitores a 40 cm de mis oídos?» | No necesariamente. El campo reverberante en graves en salas pequeñas NO es difuso — está dominado por MODOS, no por reverberación estadística. Las fórmulas de Dc asumen campo difuso, que es una mala suposición para graves en salas chicas. En la práctica, el comportamiento en graves se analiza con mediciones (REW) y se trata con trampas de graves y posicionamiento estratégico, no con fórmulas de Dc. Las fórmulas de Dc son más confiables a partir de ~250-500 Hz. |
| «¿Por qué Dc no depende del volumen de la sala directamente, si RT60 sí?» | Dc depende de A (absorción total), no de V. Una sala grande con poca absorción (A chica) puede tener Dc corta aunque V sea enorme. Ejemplo: un gimnasio vacío (V enorme, pero A bajísimo porque todas las superficies son duras) tiene Dc corta → a 3 m de distancia ya estás escuchando más reverberación que fuente directa. Y a la inversa: una cabina vocal pequeña pero MUY tratada (A alta) puede tener Dc relativamente larga. |
| «En la Parte C.3 calculé Q necesario y me dio 176. Eso me parece ridículo.» | ES ridículo. Y justamente ESA es la lección. En la práctica, ningún line array real supera Q ≈ 50-80. Para cubrir 25 m en un auditorio reverberante necesitás: (a) bajar RT60 del auditorio (tratamiento acústico), (b) usar múltiples arrays distribuidos, (c) agregar fill speakers para el fondo, (d) usar delays (parlantes intermedios que repiten la señal sincronizada). El diseño de refuerzo sonoro es el arte de resolver «Dc no alcanza». |
| «¿Cómo sé Q para MI monitor o MI parlante?» | El fabricante publica gráficos polares (directividad vs. ángulo y frecuencia). Con eso calculás Q(f) = 1 / (promedio de la respuesta en todas direcciones). Para monitores de estudio típicos, Q ≈ 2-5 en medios y agudos, bajando a Q ≈ 1-2 en graves. Si no tenés el dato exacto, usá Q=2 (conservador) o Q=3 (monitor promedio). La diferencia entre Q=2 y Q=3 en Dc es solo √(3/2) = 1.22× — no cambia radicalmente las conclusiones. |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
