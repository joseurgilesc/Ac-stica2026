# Guía Docente — Sesión 31: Integración U4 — Diseño integral de espacios acústicos

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, calculadora, planos de planta de estudios reales (proyectar o entregar impresos), acceso a hoja de cálculo o planilla de modos, checklist de diseño acústico (provista en el index.md de la sesión)  
**Referencia:** Everest & Pohlmann, Capítulos 18–22, pp. 348–420 (Listening Rooms, Recording Studios, Control Rooms, Audio-Visual Spaces, Concert Halls — Integration and Design Cases). Cox & D'Antonio (2016). Acoustic Absorbers and Diffusers (3rd ed.). CRC Press. ITU-R BS.1116-1 (Critical Listening Rooms). ITU-R BS.775-1 (Multichannel Stereophonic Sound).

---

## Objetivo de la sesión

Que el estudiante integre los conceptos de las 31 sesiones del curso (fundamentos físicos, propagación exterior, acústica de interiores y aislamiento/diseño) para diagnosticar y resolver un problema de diseño acústico REAL, aplicando la lista de verificación completa del diseñador acústico y elaborando una propuesta constructiva cuantitativa para un espacio asignado, y que construya un mapa de estudio personal para el examen final conectando conceptos de las cuatro unidades.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | «El primer día medían dB, hoy diseñan un estudio» — recorrido visual por las 31 sesiones y presentación del caso integrador |
| **Desarrollo** | 25 min | Síntesis guiada: mapa conceptual U1→U4 y checklist de diseño acústico paso a paso |
| **Práctica** | 65 min | Taller de diseño: caso integrador en grupos + presentación y retroalimentación + preparación del examen |
| **Cierre** | 15 min | «No se reciben de ingenieros acústicos hoy. Pero ya piensan como uno» + cierre de bitácora |

---

## 1. Apertura — «El primer día medían dB, hoy diseñan un estudio»

### Dinámica

1. Proyectar una línea de tiempo con las 31 sesiones agrupadas en 4 columnas: U1 (sesiones 1-8: fundamentos), U2 (9-15: propagación exterior), U3 (17-26: interiores), U4 (27-31: aislamiento y diseño). Señalar: «En la sesión 1 aprendieron qué es una onda sonora. En la sesión 5 aprendieron decibeles. En la sesión 20 aprendieron a calcular RT60. En la sesión 29 aprendieron a diseñar una pared doble. En la sesión 30 aprendieron a aislar vibraciones. HOY, todo eso se une en UNA sola actividad: van a diseñar un espacio acústico REAL, de principio a fin.»

2. Mostrar TRES imágenes de estudios reales lado a lado: (a) un home studio en un dormitorio (3×3 m, caos de cables y espuma), (b) una sala de control profesional (LEDE, difusores QRD, monitores empotrados), y (c) una sala de concierto (shoe-box, 2000 butacas, canopy reflector). Preguntar: «¿Cuál de estos tres es 'mejor'?» → Ninguno. «Son espacios DISTINTOS para USOS distintos, diseñados con los MISMOS principios físicos pero con PRIORIDADES distintas. El home studio prioriza espacio y presupuesto. La sala de control prioriza neutralidad. La sala de concierto prioriza envolvimiento y calidez. Hoy van a diseñar UNO de estos tres tipos — y van a tener que decidir qué sacrifican y qué optimizan.»

3. Presentar el caso integrador: «Les voy a dar un espacio. Dimensiones, materiales, ubicación, uso previsto, presupuesto aproximado. Ustedes van a hacer lo que hace un ingeniero acústico: diagnosticar, calcular y proponer. No hay UNA respuesta correcta — hay MEJORES y PEORES decisiones. Lo que importa es que cada decisión esté JUSTIFICADA con números y principios físicos, no con opiniones.»

### Preguntas disparadoras

- «Si tuvieran que diseñar UN solo parámetro de una sala y no pudieran tocar nada más, ¿cuál elegirían: el RT60, el NC, el STC o el volumen?» → Discusión. No hay respuesta única, pero el VOLUMEN condiciona TODO lo demás (RT60 posible, modos, espacio para tratamiento y aislamiento, HVAC). «El volumen es la decisión ARQUITECTÓNICA fundamental. Todo lo demás es TRATAMIENTO dentro de ese volumen.»
- «¿Qué es PEOR: una sala con RT60 incorrecto o una sala con ruido de fondo excesivo?» → Ruido de fondo. Porque el RT60 se puede corregir con tratamiento (agregar/quitar absorción). El ruido de fondo excesivo (NC-40) requiere rediseñar el HVAC o aislar la envolvente — intervenciones ESTRUCTURALES, no de tratamiento. «Siempre empezá por el ruido de fondo. Es la restricción MÁS DIFÍCIL de cambiar después.»

---

## 2. Desarrollo — Síntesis guiada: el mapa y la checklist

### Secuencia sugerida (25 min total)

1. **Mapa conceptual U1→U4** (10 min). Proyectar el mapa sinóptico (del index.md) o dibujarlo en la pizarra. Recorrerlo con los estudiantes, preguntando en cada flecha: «¿Por qué necesito ESTO para hacer ESTO OTRO?» Ejemplos:
   - Flecha U1→U4: «Sin entender decibeles y suma logarítmica, ¿cómo construyo un presupuesto de ruido?» → No se puede. «Sin saber que 10 fuentes de 30 dB no suman 300 dB, sino 40 dB.»
   - Flecha U3→U4: «Sin entender modos propios, ¿cómo sé DÓNDE poner las trampas de graves?» → No se puede. «Las esquinas tienen máxima presión para TODOS los modos axiales. El centro de una pared solo tiene máximo de presión para el modo PERPENDICULAR a esa pared.»
   - Flecha U2→U4: «¿Para qué sirve saber que el sonido se difracta en bordes?» → Para entender que una barrera acústica NUNCA bloquea el 100% — siempre hay difracción en el borde superior. Y que los baffles y nubes reflectoras en salas de control funcionan por REFLEXIÓN, no por absorción.

2. **La checklist de diseño paso a paso** (15 min). Proyectar los 6 pasos de la lista de verificación (del index.md) y recorrerlos, haciendo énfasis en los «checkpoints» — los puntos donde el diseñador debe DETENERSE y verificar compatibilidad:
   - Paso 1 → 2: «¿El RT60 objetivo es alcanzable con el volumen disponible?» Mostrar ejemplo: RT60 = 0.3 s en un volumen de 25 m³ → A_necesaria = 0.161×25/0.3 = 13.4 m². Si la superficie total de la sala es ~35 m², α_promedio = 13.4/35 = 0.38 → FACTIBLE (α < 1). Pero si quisieras RT60 = 0.15 s, A = 26.8 m² → α = 0.77 → técnicamente posible pero la sala va a sonar MUY MUERTA y probablemente fatigante.
   - Paso 5 → 1: «El STC compuesto, ¿cumple el objetivo?» Mostrar: pared STC 50 (80% del área) + puerta STC 25 (20% del área). τ_pared = 10^(−50/10) = 1×10⁻⁵. τ_puerta = 10^(−25/10) = 3.16×10⁻³. τ_comp = 0.8×1×10⁻⁵ + 0.2×3.16×10⁻³ = 6.4×10⁻⁴. STC_comp = −10·log(τ_comp) ≈ 32. «La puerta DESTRUYÓ el aislamiento. El STC compuesto es 32, no 50. La inversión en la pared fue en vano.»
   - Paso 4 → 2: «¿Los difusores están a la distancia mínima?» Si la sala tiene 3.5 m de profundidad y los monitores están a 1.5 m de la pared frontal, el oyente está a ~2 m de la pared trasera. d_mín = 3·(c/f_diseño). Para f = 500 Hz, d_mín = 3×0.686 = 2.06 m → FACTIBLE (raspando). Para f = 300 Hz → d_mín = 3.43 m → IMPOSIBLE. «En esta sala, no podés usar difusores para 300 Hz. Usá difusores para 600 Hz o poné absorción. A veces, la respuesta correcta es: NO pongas difusores.»

---

## 3. Práctica — Taller de diseño integrador (65 min)

### Actividad en Classroom y presencial

Publicar como **Tarea** en Google Classroom (la Parte B y C son para entregar; la Parte A se hace en clase):

**Título:** Sesión 31 — Diseño integral de un espacio acústico + Preparación para el examen

**Instrucciones:**

---

### Parte A — Taller de diseño en grupos (35 min, en clase)

El docente asigna a cada grupo (2-3 estudiantes) UNO de los siguientes casos. Los grupos tienen 25 minutos para completar el diagnóstico y la propuesta. Luego, 10 minutos para presentaciones relámpago (2 min por grupo).

**Caso 1 — Home Studio en departamento**

Espacio: dormitorio de 3.8 × 2.9 × 2.5 m (27.6 m³). Paredes de yeso 12.5 mm sobre estructura metálica. Piso de madera sobre losa de concreto. Ventana simple (vidrio 4 mm, 1.2 × 1.0 m) a calle con tránsito moderado. Puerta hueca (MDF 3 mm). Split de aire acondicionado en la pared (unidad interior a 1.5 m de la posición de grabación). Ruido de fondo con AC encendido: 42 dBA (medido con sonómetro). Ruido de fondo con todo apagado (3 AM): 32 dBA.

**Uso previsto**: grabar voces y guitarra acústica, mezclar con monitores nearfield (KRK Rokit 5). La cama NO se puede sacar (ocupa 2.0 × 1.5 m contra una pared).

**Presupuesto**: limitado ($500-$800 USD). No se pueden hacer modificaciones estructurales mayores (no se puede tirar paredes ni construir una caja flotante).

**Tareas del grupo**:

1. **Diagnóstico** (10 min):
   - Calculá los modos axiales hasta 200 Hz. Identificá apilamientos y huecos.
   - Estimá el RT60 actual (suponiendo α promedio = 0.15 para paredes de yeso, 0.10 para piso de madera, 0.05 para ventana, 0.20 para cama y muebles).
   - Determiná el NC actual con AC encendido y con todo apagado. Compará con el objetivo (NC-20 para grabación).
   - Estimá el STC de la ventana (vidrio 4 mm, m_s ≈ 10 kg/m²) y de la puerta (hueca, STC ≈ 20). Calculá el STC compuesto con la pared (yeso 12.5 mm, STC ≈ 34).

2. **Propuesta** (15 min):
   - Proponé TRES intervenciones, en orden de prioridad, que maximicen la mejora acústica dentro del presupuesto. Cada intervención debe incluir: qué se hace, materiales específicos con cantidades, mejora esperada en dB o en el parámetro relevante, y costo estimado.
   - Justificá POR QUÉ elegiste esas tres y no otras. ¿Qué tuviste que SACRIFICAR por restricciones de presupuesto o espacio?
   - Dibujá un plano esquemático de la planta mostrando la ubicación de: cama, escritorio con monitores, posición de escucha, paneles de absorción, trampas de graves, y micrófono para grabar.

**Caso 2 — Sala de control para estudio profesional**

Espacio: sala dedicada de 6.0 × 4.5 × 3.0 m (81 m³). Paredes de yeso doble (2×12.5 mm) con estructura independiente (STC ≈ 52). Piso flotante sobre losa. Ventana doble a la sala de grabación (2 vidrios laminados 6+10 mm, cámara 150 mm, STC ≈ 48). Puerta acústica (maciza 45 mm, STC ≈ 40). HVAC central con conductos (velocidad actual en ramales: 4.5 m/s). Ruido de fondo con HVAC: NC-30. Proporciones: 1 : 1.5 : 2.0 (L:H:W).

**Uso previsto**: mezcla estéreo profesional, escucha crítica. Monitores de campo medio (Genelec 8351 o similar).

**Presupuesto**: medio-alto ($3,000-$5,000 USD para tratamiento acústico, excluyendo obra civil ya hecha).

**Tareas del grupo** (misma estructura de 10 min diagnóstico + 15 min propuesta):

**Diagnóstico**:
- Verificá las proporciones contra las relaciones recomendadas (Sepmeyer, Louden, Bolt). ¿Hay problemas de coincidencia de modos?
- Calculá los modos axiales hasta 200 Hz.
- Calculá el RT60 objetivo (0.2-0.3 s ±0.05 de 100 Hz a 10 kHz). ¿Cuánta absorción total necesitás?
- Evaluá el HVAC: NC-30 vs. objetivo NC-15. ¿Cuánto ruido hay que reducir? ¿Es suficiente con bajar la velocidad de aire de 4.5 a 2.0 m/s?

**Propuesta**:
- Diseñá el tratamiento acústico: ubicación y tipo de paneles en primeras reflexiones, ubicación de trampas de graves, ubicación de difusores.
- Proponé mejoras al HVAC para alcanzar NC-15: velocidades, silenciadores, rejillas.
- Calculá el costo estimado de materiales para el tratamiento (lana mineral, tela, madera para marcos, difusores comerciales o DIY).
- Plano esquemático de planta mostrando el diseño LEDE: dead end (frente), live end (atrás), posición de monitores, posición de escucha, y todo el tratamiento.

**Caso 3 — Sala de ensayo para banda**

Espacio: local comercial de 7.5 × 5.5 × 3.5 m (144 m³). Paredes de ladrillo hueco 120 mm (m_s ≈ 150 kg/m², STC ≈ 44). Techo de losa de concreto. Piso de concreto pulido. Una puerta metálica (STC ≈ 25) y una ventana a la calle (vidrio simple 4 mm). Vecino lindero: oficina (necesita ≤ 40 dBA de ruido de fondo). Sin HVAC — ventilación natural por ventana.

**Uso previsto**: ensayar banda completa (batería acústica, bajo 300W, 2 guitarras 50W, voz). Nivel sonoro típico: 110-115 dBA en el centro de la sala.

**Presupuesto**: bajo-medio ($1,500-$2,500 USD para tratamiento + mejoras de aislamiento).

**Tareas del grupo** (misma estructura):

**Diagnóstico**:
- Calculá la NR necesaria: L_fuente (110 dBA) − L_receptor objetivo (40 dBA) = 70 dB. ¿Es alcanzable con la construcción actual?
- Calculá el STC compuesto pared + puerta + ventana. Identificá el eslabón más débil.
- Estimá el RT60 actual (α: ladrillo 0.03, concreto 0.02, ventana 0.05). ¿Es adecuado para ensayo (objetivo 0.5-0.8 s)?
- Calculá los modos axiales. ¿Hay riesgo de realimentación (feedback) entre el bajo y los modos de sala?

**Propuesta**:
- Proponé mejoras de AISLAMIENTO primero (para proteger al vecino) y TRATAMIENTO después (para que los músicos se escuchen).
- Para aislamiento: ¿es necesario mejorar la pared? ¿La puerta? ¿La ventana? ¿Hay caminos de flanqueo? (Pista: la puerta STC 25 es el punto crítico.)
- Para tratamiento: ¿dónde ponés absorción para controlar el RT60 sin matar la sala? ¿Dónde ponés trampas de graves para la batería y el bajo?
- Plano esquemático mostrando: ubicación de la banda (batería, bajo, guitarras, voz), tratamiento, y las mejoras de aislamiento propuestas.

---

### Parte A (continuación) — Presentaciones relámpago (10 min)

Cada grupo tiene 2 minutos para presentar:
1. El diagnóstico más SORPRENDENTE que encontraron («no esperábamos que...»).
2. Las TRES intervenciones prioritarias y por qué en ESE orden.
3. UNA cosa que sacrificaron por restricciones (presupuesto, espacio) y por qué era la menos crítica.

El docente y los otros grupos dan retroalimentación brevísima: ¿la priorización es correcta? ¿Se olvidaron de algo importante? ¿El costo de las intervenciones es realista?

---

### Parte B — Preparación para el examen final (individual, para entregar en Classroom)

**1. Mapa de estudio personal** (15 min, se puede terminar en casa):

Construí tu propio mapa conceptual de las 31 sesiones, pero NO copies el de la clase. Organizalo como a VOS te sirva estudiar. Puede ser:
- Un diagrama de flujo: «si el problema es X → usá el concepto Y de la sesión Z»
- Una tabla de doble entrada: filas = «situación de diseño», columnas = «conceptos», celdas = «cómo se aplica»
- Un esquema visual con dibujos
- Una lista de «preguntas de examen» que vos mismo inventás y respondés

**Requisitos mínimos**:
- Cubrir al menos UN concepto de cada una de las 4 unidades.
- Para cada concepto, incluir: (a) definición en UNA frase, (b) fórmula (si aplica), (c) un ejemplo concreto de aplicación.
- Conectar al menos 3 pares de conceptos con flechas explicando la relación.

**Ejemplo** (no copiar textual, es solo formato):
```
Concepto: RT60 (Sesión 19-20)
Definición: Tiempo que tarda el SPL en caer 60 dB después de apagar la fuente.
Fórmula: RT60 = 0.161·V/A (Sabine)
Ejemplo: Sala de 100 m³ con A = 20 m² → RT60 = 0.81 s.
Conexión → Modos (Sesión 24): Los modos hacen que el RT60 en graves sea MÁS LARGO que en agudos.
            El tratamiento debe compensar esta diferencia para lograr RT60 plano.
Conexión → Absorción (Sesión 18): A = Σ(α_i·S_i). Para bajar RT60 de 0.8 a 0.4 s,
            necesito DUPLICAR A de 20 a 40 m² → α_promedio sube de 0.13 a 0.27.
```

**2. Cuestionario de autoevaluación** (sin nota, para que midas tu preparación):

Respondé estas preguntas en 2-3 oraciones cada una. No se permite consultar los apuntes EN LA PRIMERA PASADA. Después verificá tus respuestas con el material:

1. ¿Por qué la espuma acústica NO aísla? ¿Qué parámetro físico determina el aislamiento?
2. Un amigo te dice: «puse paneles de espuma en toda la pared y el vecino sigue escuchando todo.» ¿Qué le explicás?
3. Tenés una sala de 4×3×2.5 m. ¿Cuál es la frecuencia del primer modo axial en cada dirección?
4. ¿Qué es PEOR: que dos modos coincidan en la misma frecuencia o que haya una banda de tercio de octava sin modos? ¿Por qué?
5. Una pared de yeso simple tiene STC 34. Si duplicás la masa (dos placas), ¿cuál es el NUEVO STC aproximado? ¿Y si en vez de duplicar la masa, construís una pared DOBLE con cámara de aire?
6. Mediste el ruido de fondo de tu estudio como NC-35. Querés llegar a NC-20. ¿Por dónde empezás a buscar los 15 dB que faltan?
7. ¿Por qué el STC de una pared compuesta (pared + puerta) está MÁS CERCA del elemento MÁS DÉBIL que del promedio?
8. En una sala de control con diseño LEDE, ¿la pared TRASERA debe ser absorbente o difusora? ¿Por qué?
9. Un compresor gira a 1750 RPM. ¿Qué frecuencia natural MÁXIMA debe tener su aislador de vibraciones para transmitir < 10% de la fuerza?
10. ¿Qué parámetro del HVAC tiene el MAYOR impacto en el ruido generado? ¿Por qué?

---

### Parte C — Cierre de bitácora digital (individual)

Revisá tu bitácora digital de las 31 sesiones. Verificá que tengas al menos UNA entrada por cada sesión (desde la 1 a la 31). Para las sesiones que te falten, escribí una entrada breve (3-5 oraciones) resumiendo el concepto principal y cómo se aplica al diseño acústico.

**Checklist de cierre**:
- [ ] Entradas de sesiones 1-8 (U1 — Fundamentos físicos)
- [ ] Entradas de sesiones 9-15 (U2 — Propagación exterior)
- [ ] Entradas de sesiones 17-26 (U3 — Acústica de interiores)
- [ ] Entradas de sesiones 27-31 (U4 — Aislamiento y diseño)
- [ ] Entradas de sesiones 16 y 32 (exámenes — opcional)

**Fecha de entrega:** [definir según calendario, idealmente antes del examen final]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Taller de diseño — Diagnóstico (Parte A) | Modos calculados, RT60 estimado, NC diagnosticado, STC compuesto calculado correctamente. Métricas cuantitativas para cada parámetro | La mayoría de las métricas calculadas pero alguna incorrecta o ausente | Cálculos con errores conceptuales graves (confunde NC con STC, no calcula STC compuesto) |
| Taller de diseño — Propuesta (Parte A) | 3 intervenciones con: materiales específicos, mejora cuantitativa estimada, costo realista, justificación de priorización. Plano esquemático con ubicación de elementos | Intervenciones cualitativas sin métricas («poner trampas de graves» sin decir cuántas, dónde ni de qué tipo) | Propuesta sin justificación, sin métricas, o intervenciones que no atacan los problemas diagnosticados |
| Mapa de estudio (Parte B.1) | ≥1 concepto por unidad, definiciones correctas, fórmulas aplicables, ejemplos concretos, ≥3 conexiones entre conceptos con explicación | Conceptos correctos pero sin conexiones o ejemplos genéricos | Menos de 4 conceptos o definiciones incorrectas |
| Cuestionario de autoevaluación (Parte B.2) | 8-10 respuestas correctas en primera pasada (después de verificar). Conceptos expresados con precisión | 5-7 correctas. Algunas imprecisiones conceptuales | < 5 correctas o confusión entre conceptos fundamentales (absorción vs. aislamiento, NC vs. STC) |
| Integración sistémica | Demuestra comprensión de que los parámetros INTERACTÚAN (el RT60 depende del volumen que «roba» el aislamiento, el NC depende del HVAC, los modos dependen de las dimensiones). No trata cada parámetro como independiente | Menciona interacciones pero no las cuantifica o prioriza | Trata cada parámetro como independiente, sin reconocer conflictos de diseño |

---

## 4. Cierre — «No se reciben de ingenieros acústicos hoy. Pero ya piensan como uno»

### Discusión guiada (10 min)

- «Hace 30 sesiones, la mayoría de ustedes no sabía qué era un decibel. Hoy diseñaron un estudio, diagnosticaron sus modos, calcularon su RT60, seleccionaron aisladores de vibración. No son ingenieros acústicos — pero YA PIENSAN como uno. Cuando entren a una sala, no van a escuchar 'lindo sonido' o 'feo sonido'. Van a escuchar: modos a 72 Hz, RT60 de 0.9 s en graves, NC-35, flanqueo por la ventana. Eso es lo que hace un profesional: ESCUCHAR CON NÚMEROS.»

- «¿Qué fue lo más difícil del taller de diseño?» → Típicamente: decidir qué SACRIFICAR. «El diseño acústico NUNCA es 'hacer todo perfecto'. Siempre hay restricciones: presupuesto, espacio, tiempo, lo que ya está construido. El ingeniero acústico no es el que hace todo perfecto — es el que toma LAS MEJORES DECISIONES POSIBLES dadas las restricciones. Y para eso necesita ENTENDER la física detrás de cada decisión.»

- «El examen final no es para torturarlos. Es para que ustedes mismos verifiquen que REALMENTE entendieron. No queremos que memoricen fórmulas — queremos que, dentro de 5 años, cuando estén por alquilar un local para su estudio, sepan MEDIR el ruido de fondo, CALCULAR los modos, ESTIMAR el RT60, y ELEGIR los materiales correctos. Eso no se memoriza — se COMPRENDE. Y ustedes ya lo comprenden.»

- «Una cosa más: la acústica es una de las pocas disciplinas donde la FÍSICA MANDA. No hay 'plugins mágicos', no hay 'materiales milagrosos', no hay 'trucos de estudio'. Hay MASA, RIGIDEZ, ABSORCIÓN, DIFUSIÓN y DESACOPLAMIENTO. Si entendés esos cinco conceptos, entendés el 90% de la acústica arquitectónica. Si no los entendés, podés leer 50 papers y seguir sin saber por qué tu estudio suena mal. Ustedes YA entienden los cinco. Lo demás es práctica.»

### Registro en bitácora (última entrada del curso)

Cada estudiante debe escribir en su bitácora digital:

> *"El diseño acústico de espacios integra todos los conceptos del curso en una metodología de 6 pasos: (1) definir el uso y los objetivos cuantitativos (RT60, NC, STC, volumen), (2) seleccionar volumen y proporciones para optimizar la distribución modal, (3) definir la geometría (simetría, paredes no paralelas, línea de visión), (4) diseñar el tratamiento acústico (absorción en primeras reflexiones, trampas de graves en esquinas, difusores con distancia mínima), (5) diseñar el sistema de aislamiento (cerramiento, puertas, ventanas, HVAC, vibraciones), y (6) verificar la compatibilidad de todas las decisiones (checklist de integración). No existe UNA solución para todos los espacios — cada uso (grabación, mezcla, ensayo, concierto) tiene requerimientos distintos de RT60, NC y STC. El ingeniero acústico no busca la perfección — busca LAS MEJORES DECISIONES POSIBLES dadas las restricciones de presupuesto, espacio y construcción existente. La física manda: masa, rigidez, absorción, difusión y desacoplamiento son los cinco principios que gobiernan TODAS las soluciones acústicas. El resto es implementación."*

---

## Recursos adicionales para el docente

- [Everest & Pohlmann, Capítulos 18-22](https://www.mhprofessional.com/) — los casos de diseño originales. Cada capítulo es un TIPO de espacio (listening room, recording studio, control room, audio-visual room, concert hall) con dimensiones, materiales y resultados medidos. Usar las figuras como referencia visual durante el taller.
- [Cox & D'Antonio (2016). Acoustic Absorbers and Diffusers, 3rd ed.](https://www.routledge.com/) — referencia definitiva sobre diseño de difusores QRD/PRD y predicción de scattering. El capítulo 11 (Room Acoustics) conecta difusores con el diseño LEDE/RFZ.
- [ITU-R BS.1116-1 — Methods for Subjective Assessment of Small Impairments in Audio Systems](https://www.itu.int/rec/R-REC-BS.1116/en) — estándar internacional que define las condiciones acústicas para escucha crítica (volumen mínimo, RT60, NC, respuesta en frecuencia). Referencia fundamental para justificar objetivos de diseño.
- [EBU Tech.3276 — Listening Conditions for the Assessment of Sound Programme Material](https://tech.ebu.ch/publications/tech3276) — estándar europeo equivalente a ITU-R BS.1116. Define RT60 = 0.25 ± 0.05 s de 200 Hz a 4 kHz, ruido de fondo < NR-15.
- [amroc — The Room Mode Calculator](https://amcoustics.com/tools/amroc) — calculadora online de modos propios. Introduce dimensiones y visualiza modos, apilamientos, relación de Bolt, y respuesta en frecuencia estimada. Excelente para que los estudiantes verifiquen sus cálculos manuales.
- [REW — Room EQ Wizard](https://www.roomeqwizard.com/) — software gratuito de medición. Permite medir RT60, respuesta en frecuencia, waterfall (decaimiento modal) y distortion. Fundamental para validar diseños.
- [John Sayer's Recording Studio Design Forum](https://www.johnlsayers.com/phpBB2/index.php) — foro histórico de diseñadores de estudios con cientos de casos reales documentados (planos, fotos, mediciones). Excelente para mostrar ejemplos de implementaciones reales.
- [Philip Newell — Recording Studio Design (4th ed., 2017)](https://www.routledge.com/) — libro complementario que cubre el PROCESO de diseño de principio a fin con ejemplos de estudios construidos. Útil para la Parte A del taller (ejemplos de presupuestos reales y soluciones constructivas).

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «En el taller de diseño, mi grupo no se pone de acuerdo sobre qué intervención es prioritaria.» | Esto es INTENCIONAL. En el mundo real, el diseño acústico involucra a arquitectos, ingenieros estructurales, dueños y usuarios — todos con prioridades distintas. La habilidad de ARGUMENTAR con números es lo que diferencia al profesional del aficionado. Decí a tu grupo: «No me digas que la prioridad es tratar el techo — mostrame con números cuánto RT60 baja si ponemos 4 m² de absorción vs. cuánto baja el NC si arreglamos la puerta.» La respuesta correcta es la que está MEJOR JUSTIFICADA con la física. Si dos intervenciones son igualmente válidas, elegí la más BARATA o la que se pueda hacer SIN modificar la estructura. |
| «Calculé los modos y tengo un apilamiento de 3 modos en 138-142 Hz. ¿Qué hago?» | Un apilamiento significa que TRES modos resuenan en la misma banda estrecha → tendrás un pico de +10 a +15 dB en esa frecuencia. Soluciones: (a) ajustar una dimensión para separar los modos (si podés modificar la construcción), (b) colocar una trampa de graves SINTONIZADA exactamente a esa frecuencia (Helmholtz o membrana con f₀ = 140 Hz), (c) usar absorción porosa de GRAN ESPESOR (> 30 cm) en la esquina más efectiva para los modos apilados. En la práctica, la opción (b) suele ser la más factible — diseñás un resonador específico para esa frecuencia. |
| «El presupuesto de mi caso no alcanza para hacer todo. ¿Cómo decido qué sacrificar?» | Regla de priorización: (1) SIEMPRE atacá el RUIDO DE FONDO primero (HVAC, ventanas, puertas con fuga de aire). El ruido de fondo es la restricción MÁS DIFÍCIL de cambiar después. (2) Después, atacá el ESLABÓN MÁS DÉBIL del aislamiento (típicamente la puerta o ventana). Mejorar la puerta de STC 25 a STC 40 puede sumar 10-15 dB al aislamiento compuesto por una fracción del costo de mejorar toda la pared. (3) Recién DESPUÉS, optimizá el tratamiento (absorción, difusores) — porque el tratamiento es MÁS BARATO y más fácil de ajustar después (agregar/quitar paneles). (4) Lo ÚLTIMO que sacrificás es el volumen (no podés agregar metros cúbicos después de construir) y la geometría (no podés cambiar ángulos de paredes después de levantar la estructura). |
| «¿Cómo estimo costos de materiales para el taller si no tengo idea?» | Valores de referencia rápida (USD, precios aproximados 2024): panel de lana mineral 50 mm, 1.2×0.6 m → $25-40. Tela acústica (Guilford of Maine o similar) → $15-25/yd². Madera para marco de panel → $10-20. Trampa de graves triangular (esquina) DIY → $40-80. Difusor QRD DIY (60×60 cm, madera) → $80-150. Difusor comercial (Skyline, 60×60 cm) → $200-400. Puerta acústica (maciza 45 mm, con burletes) → $500-1,200. Ventana acústica (doble vidrio laminado, marco) → $400-800/m². Silenciador HVAC comercial (300 mm diámetro, 1.2 m largo) → $300-600. Resorte helicoidal encapsulado (capacidad 200 kg) → $40-80 c/u. Almohadilla de neopreno → $10-25 c/u. |
| «El mapa conceptual me parece abrumador. ¿Cómo lo simplifico?» | Empezá con las 5 preguntas fundamentales del diseño acústico. Para cada una, identificá el concepto CLAVE (uno solo) y la unidad a la que pertenece: (1) «¿Cuánto silencio necesito?» → NC (U4). (2) «¿Cuánto aislamiento necesito?» → TL/STC (U4). (3) «¿Cuánta absorción necesito?» → RT60/Sabine (U3). (4) «¿Dónde pongo el tratamiento?» → Modos/reflexión temprana (U3). (5) «¿Cómo evito que la sala suene 'rara'?» → Geometría/proporciones (U3). Si sabés responder esas 5 preguntas con NÚMEROS, ya tenés el 80% del diseño. Los otros conceptos (difracción, Doppler, absorción atmosférica, etc.) son IMPORTANTES pero SECUNDARIOS para el diseño de interiores. Priorizá en el estudio lo que más impacto tiene en el resultado final. |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
