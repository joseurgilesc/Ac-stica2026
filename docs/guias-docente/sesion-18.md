# Guía Docente — Sesión 18: Coeficiente de absorción

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, Google Sheets (o Excel), calculadora, muestras de materiales (opcional: espuma, lana mineral, madera, alfombra)  
**Referencia:** Everest & Pohlmann, Capítulo 12, pp. 198–241 (Absorption Coefficients, NRC, Porous Absorbers, Panel Absorbers)

---

## Objetivo de la sesión

Que el estudiante interprete tablas de coeficientes de absorción por frecuencia, calcule la absorción total de un recinto (\(A = \sum \alpha_i S_i\)), evalúe críticamente las limitaciones del NRC como indicador simplificado, y seleccione materiales absorbentes con criterio técnico según la banda de frecuencia a tratar.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 10 min | Experimento táctil: tocar 4 materiales y predecir su α |
| **Desarrollo** | 45 min | Teoría guiada: α por frecuencia, tabla de materiales, A = ΣαS, NRC y sus limitaciones |
| **Práctica** | 50 min | Taller de cálculo: hoja de cálculo para 2 recintos + selección de materiales para cabina vocal |
| **Cierre** | 15 min | «El mito del NRC» + bitácora |

---

## 1. Apertura — «Tocá el sonido»

### Materiales
- 4-5 muestras de materiales distintos (si no se consiguen físicamente, usar fotos de alta calidad):
  - Bloque de concreto o baldosa cerámica
  - Trozo de espuma acústica (25 mm o 50 mm)
  - Trozo de lana mineral (envuelta en tela — NO manipular sin protección)
  - Retazo de alfombra gruesa
  - Tabla de madera

### Dinámica

1. Pasar las muestras por los grupos. Que toquen, golpeen suavemente y froten cada material.
2. Preguntar: «Sin saber nada de coeficientes, ¿cuál de estos materiales creen que 'chupa' más sonido? ¿Por qué?»
3. Revelar: «La intuición táctil es sorprendentemente buena. Los materiales blandos, porosos y fibrosos suelen tener α alto. Los duros, lisos y densos tienen α bajo. Pero hay un detalle crucial: el comportamiento cambia MUCHO con la frecuencia. Un material puede ser un espejo acústico en graves y casi una ventana abierta en agudos.»
4. Pregunta disparadora final: «Si tuvieran que tratar un estudio de grabación, ¿alcanza con poner espuma de 2 cm en todas las paredes? ¿Qué problema tendrían?»

### Preguntas disparadoras

- «El concreto tiene α = 0.02 en casi todas las frecuencias. ¿Significa que es MALO como material de construcción acústica?» → Depende del objetivo. Para AISLAR es excelente (mucha masa). Para ACONDICIONAR es pésimo (rebota todo). De nuevo: aislar ≠ acondicionar.
- «¿Por qué medimos α en 6 bandas de frecuencia separadas y no en un solo número?»

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **α como fracción de energía** (5 min). Repasar rápidamente la definición: α = E_absorbida / E_incidente. Repasar la ecuación de balance de la Sesión 17: 1 = α + τ + ρ. Enfatizar que α se mide en laboratorio en condiciones controladas (cámara reverberante o tubo de impedancia).

2. **Tabla de α por material y frecuencia** (15 min). Proyectar la tabla completa (ver index.md de la sesión). Recorrerla en grupo, pidiendo a los estudiantes que lean los números en voz alta y los interpreten:

   - «Busquen concreto a 125 Hz... ¿y a 4 kHz?» → Casi igual: 0.01 → 0.03. Es un reflector parejo.
   - «Busquen espuma 25 mm a 125 Hz... ¿y a 4 kHz?» → 0.05 → 0.80. Salto enorme — absorbe 16× más en agudos que en graves.
   - «Busquen panel perforado a 125 Hz... ¿y a 500 Hz?» → 0.20 → 0.90. Tiene un pico resonante y DESPUÉS BAJA.

   Pregunta clave: «¿Qué patrón ven en TODOS los materiales porosos?» → α BAJO en graves, α ALTO en agudos. La absorción crece con la frecuencia. Cuanto más grueso el material, más se extiende la absorción hacia los graves.

   > Insertar **Fig. 12-1** del Everest.

3. **Absorción total A = ΣαS** (15 min). Escribir la fórmula en la pizarra. Presentar el ejemplo de la cabina vocal de 2×2×2.5 m. Resolverlo paso a paso en la pizarra:
   - Calcular el área de cada superficie.
   - Buscar α₅₀₀ de cada material en la tabla.
   - Calcular A para cada superficie.
   - Sumar.
   - Calcular el α promedio del recinto: A / S_total.

   Preguntar: «¿Cuál es la superficie que MENOS aporta a la absorción total?» → El techo de concreto: A = 0.08 m². Preguntar: «¿Y si el techo tuviera espuma de 50 mm en vez de concreto?» → A_techo = 0.55 × 4.0 = 2.2 m². La absorción total pasaría de 13.48 a 15.60 m² — una mejora del 16% cambiando UNA sola superficie.

4. **NRC y sus limitaciones** (10 min). Presentar el NRC como un promedio simple de 4 bandas. Escribir la fórmula: NRC = (α₂₅₀ + α₅₀₀ + α₁₀₀₀ + α₂₀₀₀) / 4. Preguntar: «¿Qué banda se omite? ¿Por qué es peligroso?» → 125 Hz (graves). Un material con NRC = 0.80 puede tener α₁₂₅ = 0.05 — excelente para agudos, inútil para graves.

   Mostrar el ejemplo de dos materiales con NRC similar (~0.65) pero curvas de α muy distintas (espuma vs. panel perforado). Preguntar: «¿Cuál elegirían para un estudio de mezcla? ¿Y para una sala de conferencias?»

   > Insertar **Fig. 12-3** del Everest.

---

## 3. Práctica — Taller de cálculo y selección

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 18 — Cálculo de absorción y selección de materiales

**Instrucciones:**

**Parte A — Cálculo de absorción total con hoja de cálculo (individual o en parejas)**

Usando Google Sheets (o Excel), creá una hoja de cálculo que permita introducir áreas y coeficientes de absorción. Tu hoja debe calcular automáticamente:

1. **Sala A — Aula de clases** (10 m × 8 m × 3 m). Completá la tabla para las 6 bandas de frecuencia (125 Hz a 4 kHz):

    | Superficie | Material | S (m²) | α₁₂₅ | α₂₅₀ | α₅₀₀ | α₁₀₀₀ | α₂₀₀₀ | α₄₀₀₀ |
    |---|---|---|---|---|---|---|---|---|
    | Paredes (4) | Concreto pintado | ... | 0.01 | 0.01 | 0.02 | 0.02 | 0.03 | 0.03 |
    | Piso | Baldosa cerámica | ... | 0.01 | 0.01 | 0.02 | 0.02 | 0.03 | 0.03 |
    | Techo | Concreto pintado | ... | 0.01 | 0.01 | 0.02 | 0.02 | 0.03 | 0.03 |
    | Ventanas (30% paredes) | Vidrio | ... | 0.10 | 0.06 | 0.04 | 0.03 | 0.02 | 0.02 |
    | Pupitres (25 unid.) | Madera (0.5 m² c/u) | ... | 0.10 | 0.08 | 0.06 | 0.06 | 0.06 | 0.06 |
    | Estudiantes (25) | Persona de pie | ... | 0.20 | 0.35 | 0.42 | 0.46 | 0.50 | 0.50 |

    Calcular la absorción total A para CADA banda de frecuencia. Luego calcular el α promedio (A / S_total) para cada banda. Graficar α promedio vs. frecuencia (gráfico de barras agrupadas por banda).

2. **Sala B — La misma aula, pero acondicionada**. Reemplazá:
   - Piso: alfombra gruesa sobre fieltro (en vez de baldosa)
   - Techo: paneles de lana mineral 50 mm (60% de la superficie del techo)
   - Pared trasera: cortina pesada plegada (20 m²)
   
   Recalculá A para cada banda. Graficar α promedio vs. frecuencia para ambas salas (A y B) en el MISMO gráfico para comparar.

3. **Análisis:** Respondé en el mismo documento:
   - ¿En qué banda de frecuencia mejoró MÁS la absorción al acondicionar la sala? ¿Por qué?
   - ¿En qué banda de frecuencia mejoró MENOS? ¿Por qué?
   - ¿La sala acondicionada tiene un α promedio balanceado en todas las frecuencias? Si no, ¿qué banda necesitaría tratamiento adicional?

**Parte B — Selección de materiales para cabina vocal (individual)**

Diseñá el tratamiento acústico para una cabina de grabación de voces de 1.8 m × 1.8 m × 2.4 m. La cabina está construida con drywall en todas las paredes y techo, y piso de concreto.

1. Elegí materiales para CADA superficie (4 paredes, piso, techo, puerta) justificando TU selección con los valores de α por frecuencia.
2. Calculá la absorción total para las 6 bandas.
3. Objetivo: lograr un α promedio ≥ 0.60 en las frecuencias de la voz humana (250 Hz – 4 kHz).
4. Restricción de presupuesto: la espuma de 100 mm cuesta 3× más que la de 25 mm. La lana mineral de 100 mm cuesta el doble que la de 50 mm. Justificá dónde vale la pena invertir en material más grueso y dónde alcanza con material fino.

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Cálculo Sala A (Parte A) | Áreas correctas, A calculada en 6 bandas, α promedio graficado | Errores menores en áreas o en una banda | Cálculos incorrectos o incompletos |
| Cálculo Sala B (Parte A) | Reemplazos correctos, A recalculada en 6 bandas, ambos α promedio en mismo gráfico, análisis responde las 3 preguntas con evidencia numérica | Un reemplazo mal aplicado o análisis sin conectar con los datos | Sala B sin recalcular o análisis ausente |
| Selección cabina (Parte B) | ≥ 6 superficies con materiales justificados por α, A calculada en 6 bandas, α promedio ≥ 0.60 en 250 Hz–4 kHz, decisión presupuesto razonada | α promedio < 0.60 o justificación débil del presupuesto | Materiales sin justificación o α promedio < 0.40 |
| Calidad de la hoja de cálculo | Fórmulas referenciadas (no valores hardcodeados), formato claro, gráfico automático, fácil de modificar para probar alternativas | Fórmulas correctas pero presentación desordenada | Valores hardcodeados sin fórmulas |

---

## 4. Cierre — «El mito del NRC» y bitácora

### Discusión guiada (10 min)

- «Si un fabricante anuncia NRC = 0.90 y no publica la tabla completa, ¿le comprarían?» → Un NRC alto sin tabla de frecuencias es una bandera amarilla. Ese material podría tener α₁₂₅ = 0.05 y aún así promediar 0.90 si absorbe MUY bien de 500 Hz para arriba. Para tratamiento de graves, ese material sería inútil.
- «¿Por qué los home studios económicos suenan 'apagados' en agudos pero con 'barro' en graves?» → Porque los materiales finos y baratos (espuma 25 mm, alfombra, cortinas) tienen α alto solo en agudos. Eliminan el brillo pero no tocan los graves. La sala queda desbalanceada espectralmente: seca en agudos, reverberante en graves.
- «¿Qué material pondrían para absorber 125 Hz en un cuarto pequeño?» → Material poroso GRUESO (≥ 100 mm de lana mineral o fibra) y/o resonadores (paneles perforados, membranas, trampas de graves). La espuma fina simplemente no funciona en graves. Veremos esto en detalle en la Sesión 25.

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"El coeficiente de absorción α mide la fracción de energía sonora que un material absorbe (convierte en calor) al recibir una onda incidente. α depende fuertemente de la frecuencia: los materiales porosos (espuma, lana mineral, alfombra) tienen α bajo en graves y alto en agudos; los materiales densos (concreto, vidrio) tienen α bajo y casi constante en todo el espectro. La absorción total de un recinto se calcula como A = Σ α_i · S_i para cada banda de frecuencia. El NRC (Noise Reduction Coefficient) es un promedio de α en 250, 500, 1000 y 2000 Hz, útil para comparación rápida pero ENGANA porque omite los graves (125 Hz) y esconde la forma real de la curva de absorción. Dos materiales con el mismo NRC pueden tener comportamientos totalmente distintos en graves y agudos. Para diseñar un tratamiento acústico real, SIEMPRE hay que consultar la tabla completa de α por banda de frecuencia."*

---

## Recursos adicionales para el docente

- [Base de datos de coeficientes de absorción — Acoustic Modelling](http://www.acousticmodelling.com/absorb.php) — calculadora online con tablas de α para cientos de materiales
- [Bob Golds Absorption Coefficients](https://www.bobgolds.com/AbsorptionCoefficients.htm) — extensa tabla de α por frecuencia para materiales comunes, curada por un ingeniero de acústica
- [Video: NRC vs Absorption Coefficients](https://www.youtube.com/watch?v=7QqIs2HnGcQ) — explica visualmente la diferencia entre NRC y la tabla completa
- [Porous Absorber Calculator (Whealy)](http://www.whealy.com/acoustics/Porous.html) — calculadora de absorción para materiales porosos según espesor, densidad y espacio de aire
- [Google Sheets: plantilla de cálculo de absorción](https://docs.google.com/spreadsheets/) — crear plantilla en blanco con formato predefinido para los estudiantes

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «¿Por qué algunos α en tablas de laboratorio son > 1?» | Explicar el efecto de difracción en la medición en cámara reverberante: el material en el piso expone más área efectiva que su área geométrica. Para cálculos de ingeniería se usa α = 1.00 como máximo. La ASTM C423 permite valores > 1 y no se truncan |
| «Me pierdo con tantas columnas de frecuencia y materiales diferentes» | Sugerir trabajar SIEMPRE con una hoja de cálculo, nunca a mano. Crear primero la estructura (filas = superficies, columnas = bandas) y después ir llenando. Usar colores para agrupar: verdes para materiales absorbentes, rojos para reflectores |
| «No entiendo cómo pasar de α a A — ¿por qué se multiplica por el área?» | Analogía: α es el porcentaje de absorción del material (como un impuesto del 20%). S es la base imponible (el área). A es lo que efectivamente se absorbe (el impuesto recaudado). Dos materiales con el mismo α pero distinta área contribuyen distinto a A total |
| «El NRC dice 0.70 pero cuando leo la tabla, los graves son 0.05 — ¿me están mintiendo?» | El NRC no miente, pero es INCOMPLETO. Es como decir que un estudiante tiene promedio 7 sin mostrar que tiene 10 en música y 3 en matemática. El promedio esconde la historia real. Para acústica, la historia real está en la tabla completa |
| «¿Cómo sé qué materiales elegir si todos tienen curvas distintas?» | Regla práctica para empezar: (1) identificá la banda de frecuencia que querés tratar, (2) buscá materiales con α > 0.60 en ESA banda, (3) verificá que no estén «matando» otras bandas que querés conservar, (4) combiná materiales complementarios (porosos para agudos, resonadores para medios, trampas para graves). La sesión 25 profundizará esto |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
