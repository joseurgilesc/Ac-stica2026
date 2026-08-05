# Guía Docente — Sesión 20: Cálculo del tiempo de reverberación

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, calculadora científica, Google Sheets, p5.js (calculadora de RT60), Room EQ Wizard (REW, demo opcional)  
**Referencia:** Everest & Pohlmann, Capítulo 11, pp. 170–197 + Capítulo 12, pp. 198–241 (Sabine, Eyring, Norris-Eyring, Fitzroy formulas; absorption data for RT60)

---

## Objetivo de la sesión

Que el estudiante calcule el tiempo de reverberación RT60 de un recinto mediante las fórmulas de Sabine y Eyring, seleccione la fórmula adecuada según el coeficiente de absorción promedio, y compare el resultado con los valores óptimos recomendados según el uso del espacio.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | «La misma sala, distintas fórmulas» — demostración de por qué necesitamos más de una fórmula |
| **Desarrollo** | 45 min | Teoría guiada: Sabine, Eyring, Norris-Eyring, Fitzroy. Condiciones de aplicación. Tabla de RT60 óptimo |
| **Práctica** | 50 min | Ejercicio de diseño: home studio con Google Sheets (6 bandas, 4 fórmulas, propuesta de tratamiento) |
| **Cierre** | 15 min | «¿Qué RT60 tiene esta sala?» — discusión sobre uniformidad espectral + bitácora |

---

## 1. Apertura — «La misma sala, distintas fórmulas»

### Materiales
- Tres imágenes de salas con características muy distintas:
  1. Una catedral gótica (V enorme, ᾱ bajísimo, RT60 ≈ 6 s)
  2. Un estudio de grabación tratado (V medio, ᾱ alto, RT60 ≈ 0.3 s)
  3. Una cabina vocal anecoica (V pequeño, ᾱ ≈ 0.95, RT60 ≈ 0.05 s)

### Dinámica

1. Mostrar las tres imágenes y preguntar: «¿Cuál de estas salas tiene el RT60 más largo? ¿Y el más corto?»
2. Escribir en la pizarra: RT60 = 0.161 · V / A. Preguntar: «Con esta fórmula, ¿cuánto da RT60 si ᾱ = 1 (absorción perfecta)?» → Da un valor finito, no cero. «¿Es físicamente correcto?» → No.
3. Preguntar: «¿Qué hacemos cuando una fórmula falla en el límite? ¿Tiramos todo a la basura?» → No. La mejoramos. Así nacen las fórmulas de Eyring, Norris-Eyring y Fitzroy.
4. Presentar el objetivo: «Hoy vamos a CALCULAR RT60 como ingenieros acústicos, eligiendo la herramienta correcta para cada situación. No existe UNA fórmula universal — existe la fórmula ADECUADA para las condiciones de tu sala.»

### Preguntas disparadoras
- «Si Sabine «falla» para ᾱ alto, ¿por qué la seguimos usando?» → Porque para ᾱ ≤ 0.3, la diferencia con Eyring es menor al 10% y la simplicidad de Sabine la hace práctica para estimaciones rápidas.
- «¿Qué pasa en los graves? ¿Las fórmulas funcionan igual?» → Los graves tienen longitudes de onda comparables a las dimensiones de la sala, lo que produce modos y comportamiento NO difuso. Las fórmulas de RT60 asumen campo difuso, que es una mala suposición en graves para salas pequeñas.

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Repaso rápido: Sabine** (5 min). Escribir en la pizarra: RT60 = 0.161 · V / A, A = Σ α_i · S_i. Recordar la intuición: más V → más RT60; más A → menos RT60. Preguntar: «¿Qué suposición hace Sabine que NO siempre se cumple?» → Campo perfectamente difuso. «¿Cuándo se rompe esta suposición?» → Salas pequeñas, ᾱ alto, absorción no uniforme.

2. **Eyring: la corrección necesaria** (15 min). Derivar conceptualmente (sin la matemática completa, pero con la intuición):
   - Sabine trata la absorción como un proceso CONTINUO.
   - En realidad, la absorción ocurre en EVENTOS DISCRETOS (cada choque contra una superficie).
   - Si cada choque absorbe una fracción ᾱ, después de N choques la energía es (1 − ᾱ)^N.
   - Al tomar logaritmos: ln(energía remanente) = N · ln(1 − ᾱ).
   - Esto introduce −ln(1 − ᾱ) en el denominador en lugar de ᾱ.
   
   Escribir la fórmula de Eyring y comparar numéricamente con Sabine para ᾱ = 0.1, 0.3, 0.5, 0.7, 0.9. Mostrar que la divergencia crece con ᾱ.

   > Insertar **Fig. 11-8** del Everest: comparación Sabine vs. Eyring.

3. **Norris-Eyring: por bandas** (5 min). Preguntar: «¿Qué pasa si tenés una superficie con α = 0.05 en 125 Hz pero α = 0.70 en 4 kHz?» → El promedio simple ᾱ esconde este desbalance. Norris-Eyring aplica la corrección SUPERFICIE por SUPERFICIE y BANDA por BANDA.

4. **Fitzroy: desbalance direccional** (10 min). Mostrar el caso concreto: sala con techo muy absorbente (nube acústica, α ≈ 0.7) pero paredes laterales muy reflectantes (drywall, α ≈ 0.05). Preguntar: «¿Dónde va a «sobrevivir» más tiempo la energía?» → En el plano horizontal, rebotando entre las paredes laterales. Fitzroy modela esto tratando CADA PAR de superficies opuestas por separado.

   > Insertar **Fig. 12-5** del Everest: tabla de α para materiales comunes en todas las bandas.

5. **RT60 óptimo por uso** (10 min). Presentar la tabla de valores recomendados. La conexión clave: el RT60 óptimo no es un número mágico, es un COMPROMISO entre:
   - **Inteligibilidad** (RT60 bajo → sílabas no se solapan → se entiende la palabra hablada).
   - **Musicalidad** (RT60 moderado → las notas se «unen» → sensación de calidez y envoltura).
   - **Majestuosidad** (RT60 alto → la reverberación es parte del espectáculo → música sacra, sinfónica).

   Cuanto más depende el uso de la PALABRA, más bajo debe ser RT60. Cuanto más depende de la MÚSICA, más alto puede ser.

---

## 3. Práctica — Diseño de home studio con Google Sheets

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 20 — Cálculo de RT60 para un home studio

**Instrucciones:**

**Parte A — Cálculo del RT60 actual (individual)**

Tenés una habitación de 4.5 m × 3.5 m × 2.7 m que querés convertir en home studio. Actualmente está sin tratar:

| Superficie | Material | Área (m²) | α (125 Hz) | α (250 Hz) | α (500 Hz) | α (1 kHz) | α (2 kHz) | α (4 kHz) |
|---|---|---|---|---|---|---|---|---|
| Piso | Cerámica | 15.75 | 0.01 | 0.01 | 0.01 | 0.02 | 0.02 | 0.02 |
| Techo | Hormigón | 15.75 | 0.01 | 0.01 | 0.02 | 0.02 | 0.02 | 0.02 |
| Pared larga 1 | Ladrillo revocado | 12.15 | 0.02 | 0.02 | 0.03 | 0.03 | 0.03 | 0.04 |
| Pared larga 2 | Ladrillo revocado | 12.15 | 0.02 | 0.02 | 0.03 | 0.03 | 0.03 | 0.04 |
| Pared corta 1 | Ladrillo revocado | 9.45 | 0.02 | 0.02 | 0.03 | 0.03 | 0.03 | 0.04 |
| Pared corta 2 (con puerta) | Ladrillo revocado + puerta madera | 9.45 | 0.04 | 0.04 | 0.05 | 0.05 | 0.05 | 0.05 |
| Ventana | Vidrio | 2.00 | 0.18 | 0.06 | 0.04 | 0.03 | 0.02 | 0.02 |

1. En Google Sheets, creá una hoja con las siguientes columnas por banda de frecuencia (una hoja por banda, o columnas lado a lado):
   - V = 42.53 m³ (calculalo)
   - S_total = suma de todas las áreas
   - Para cada banda: A = Σ(α_i × S_i), ᾱ = A / S_total, RT60_Sabine, RT60_Eyring

2. Calculá RT60 con Sabine y Eyring para las 6 bandas de frecuencia. Completá:

    | Banda | A (sabins) | RT60 Sabine (s) | RT60 Eyring (s) |
    |---|---|---|---|
    | 125 Hz | | | |
    | 250 Hz | | | |
    | 500 Hz | | | |
    | 1 kHz | | | |
    | 2 kHz | | | |
    | 4 kHz | | | |

3. Graficá RT60 (eje Y) vs. frecuencia (eje X) para Sabine y Eyring en el mismo gráfico. Respondé:
   - ¿En qué banda es mayor RT60? ¿Por qué?
   - ¿Hay diferencia significativa entre Sabine y Eyring? ¿Por qué sí o por qué no? (Pista: mirá ᾱ.)
   - ¿Este RT60 es aceptable para un home studio? Justificá con la tabla de valores óptimos.

**Parte B — Propuesta de acondicionamiento (individual)**

Proponé un tratamiento acústico para llevar el RT60 a 500 Hz al rango recomendado (0.30–0.50 s). Tenés los siguientes materiales disponibles:

| Material | α (125 Hz) | α (250 Hz) | α (500 Hz) | α (1 kHz) | α (2 kHz) | α (4 kHz) |
|---|---|---|---|---|---|---|
| Paneles absorbentes (lana mineral 50 mm) | 0.25 | 0.45 | 0.65 | 0.80 | 0.85 | 0.80 |
| Nube acústica (lana mineral 100 mm) | 0.40 | 0.70 | 0.85 | 0.90 | 0.90 | 0.85 |
| Trampa de graves (lana mineral 150 mm, esquinas) | 0.65 | 0.85 | 0.80 | 0.70 | 0.60 | 0.55 |
| Alfombra gruesa sobre piso | 0.10 | 0.20 | 0.30 | 0.35 | 0.40 | 0.45 |
| Cortina pesada (plegada 100%) | 0.15 | 0.25 | 0.45 | 0.55 | 0.60 | 0.60 |
| Difusores (pared trasera) | 0.15 | 0.20 | 0.25 | 0.30 | 0.30 | 0.30 |

1. Elegí qué tratar, dónde y con qué material. Completá una tabla como la de la Parte A PERO con las nuevas superficies tratadas.

2. Recalculá RT60 con Eyring para las 6 bandas con el tratamiento propuesto.

3. Graficá RT60 ANTES y DESPUÉS en el mismo gráfico. Respondé:
   - ¿Lograste bajar RT60 al rango recomendado en todas las bandas?
   - ¿El RT60 es UNIFORME entre bandas o hay mucha variación?
   - ¿Qué banda fue la más DIFÍCIL de controlar? ¿Por qué? (Pista: mirá los α de los materiales en graves vs. agudos.)
   - Si tuvieras presupuesto ilimitado, ¿qué cambiarías de tu propuesta?

**Parte C — Reflexión sobre las fórmulas (breve, individual)**

Respondé en 3-4 oraciones por pregunta:
1. ¿En qué situación usarías Eyring en vez de Sabine? ¿En qué situación alcanza con Sabine?
2. ¿Por qué Fitzroy no se usa tanto en la práctica diaria si modela mejor el desbalance direccional?
3. ¿Qué limitación tienen TODAS las fórmulas de RT60 en salas MUY pequeñas (V < 30 m³)? (Pista: pensá en modos y longitudes de onda.)

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Cálculo Sabine/Eyring (Parte A) | RT60 calculado correctamente para las 6 bandas con ambas fórmulas, ᾱ calculado, gráfico generado, comparación fundamentada, diagnóstico de aceptabilidad según tabla de valores óptimos | Errores en 1-2 bandas, gráfico presente pero incompleto, diagnóstico sin justificar | Errores en ≥3 bandas, sin gráfico, o sin diagnóstico |
| Propuesta de tratamiento (Parte B) | RT60 «después» calculado, gráfico comparativo ANTES/DESPUÉS presente, análisis de uniformidad espectral, identificación de la banda más difícil de controlar con justificación técnica | Tratamiento propuesto pero RT60 resultante fuera del rango recomendado, o análisis superficial de la uniformidad | Sin propuesta, o RT60 «después» no calculado |
| Reflexión (Parte C) | Las 3 preguntas respondidas con profundidad técnica: criterio claro para elegir Sabine vs. Eyring, razón práctica de por qué Fitzroy no se usa masivamente (complejidad/costo vs. beneficio), explicación de limitación de modos en salas pequeñas | Respuestas correctas pero superficiales (ej. «Fitzroy es más complicado» sin explicar por qué) | Respuestas erróneas o sin sustento técnico |
| Organización de Google Sheets | Fórmulas referenciadas por celda (no valores hardcodeados), organización clara por bandas/fórmulas, gráficos con etiquetas, legible | Fórmulas correctas pero valores hardcodeados que no se actualizan al cambiar materiales | Planilla desordenada o con errores de fórmula |

---

## 4. Cierre — «¿Qué RT60 tiene esta sala?»

### Discusión guiada (10 min)

- «Acabamos de calcular RT60 para 6 bandas. ¿Qué pasa si RT60 = 0.70 s en graves (125 Hz) pero 0.25 s en agudos (4 kHz)? ¿Cómo va a sonar una mezcla hecha en esa sala?» → Los graves van a «sobrevivir» mucho más que los agudos. El ingeniero va a escuchar los graves reforzados por la sala y va a tomar decisiones de ecualización PARA COMPENSAR LA SALA, no para servir a la música. La mezcla sonará sin graves en otros sistemas. Este es EL error clásico del home studio no tratado.
- «En la Parte B, la banda más difícil de controlar fue casi seguro 125 Hz. ¿Por qué los materiales absorbentes tienen tan poca absorción en graves?» → La absorción por porosidad funciona cuando el espesor del material es ≥ λ/4. A 125 Hz, λ = 2.74 m → necesitás ~68 cm de material. Por eso los graves requieren ESTRATEGIAS DIFERENTES: trampas de graves (material MUY grueso en esquinas), resonadores de Helmholtz, o paneles de membrana. Lo veremos en la Sesión 25.
- «En la Parte C preguntamos: ¿qué limitación tienen TODAS las fórmulas de RT60 en salas MUY pequeñas?» → En salas con V < 30 m³, los primeros modos axiales tienen frecuencias dentro del rango audible. A 50 Hz, λ = 6.86 m — si la dimensión más larga de la sala es 4.5 m, la primera resonancia axial está en ~38 Hz. En estas frecuencias, el comportamiento de la sala NO está gobernado por el campo difuso sino por MODOS. Las fórmulas de RT60 asumen campo difuso, por lo tanto NO predicen correctamente el decaimiento en modos. Se necesitan mediciones reales con REW.

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"El tiempo de reverberación RT60 se puede calcular mediante cuatro fórmulas principales: Sabine (RT60 = 0.161 · V/A), Eyring (RT60 = 0.161 · V/[−S·ln(1−ᾱ)]), Norris-Eyring (corrección banda por banda) y Fitzroy (corrección por desbalance direccional). Sabine asume campo difuso perfecto y funciona bien para ᾱ ≤ 0.3. Eyring corrige el error de Sabine para ᾱ altos y es físicamente correcto en el límite ᾱ→1. El RT60 óptimo depende del uso del recinto y del volumen: desde 0.2 s para cabinas de locución hasta 6 s para catedrales. Un buen diseño acústico busca RT60 UNIFORME en todas las bandas de frecuencia, aproximadamente 0.3–0.5 s para un home studio. La banda más difícil de controlar es siempre los graves, porque los materiales absorbentes requieren espesores comparables a λ/4 (decenas de centímetros a bajas frecuencias). En salas muy pequeñas (V < 30 m³), las fórmulas de RT60 pierden precisión porque el comportamiento está dominado por modos, no por campo difuso."*

---

## Recursos adicionales para el docente

- [Room EQ Wizard (REW)](https://www.roomeqwizard.com/) — software gratuito para medir RT60 real por bandas. Hacer una demostración en vivo con un barrido logarítmico si se dispone de micrófono de medición
- [Acoustic Modelling Calculator (p5.js)](https://editor.p5js.org/) — se puede desarrollar una calculadora simple donde el estudiante ingresa V, superficies, α_i y obtiene RT60 con las 4 fórmulas en tiempo real
- [Bob Golds Absorption Coefficient Table](https://www.acoustic.ua/st/web_absorption_data_eng.pdf) — base de datos extensa de coeficientes de absorción por frecuencia para cientos de materiales
- [Porous Absorber Calculator](http://www.acousticmodelling.com/porous.php) — calculadora online de absorción de materiales porosos según espesor, densidad y resistividad al flujo de aire
- [ISO 3382-1:2009 — Measurement of room acoustic parameters](https://www.iso.org/standard/40979.html) — norma internacional para medición de RT60, EDT, C80, D50 y otros parámetros en salas de espectáculos. Referencia técnica, no para estudiantes
- [Video: Measuring RT60 with REW](https://www.youtube.com/watch?v=8sCu7L3kUq8) — tutorial práctico paso a paso
- Plantilla de Google Sheets: preparar una hoja pre-formateada con las columnas para cada banda, fórmulas de Sabine y Eyring ya ingresadas, y celdas bloqueadas para que estudiantes solo tengan que ingresar V y S_i. Esto reduce el tiempo de «pelea con Excel» y maximiza el tiempo de análisis acústico

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «¿Para qué tantas fórmulas si al final termino usando un plugin de medición?» | El plugin de medición (REW, Smaart, FuzzMeasure) HACE el cálculo por vos. Lo que necesitás saber es QUÉ está calculando y POR QUÉ. Si mediste RT60 = 0.2 s con Sabine pero la sala suena más viva de lo esperado, tenés que saber que quizás Eyring (o una medición directa T20) daría un valor más alto. El ingeniero que solo confía en lo que dice el software sin entender la física subyacente está condenado a tomar malas decisiones |
| «Mis fórmulas de Google Sheets dan error.» | Verificar: ¿usaste los valores CORRECTOS de α para cada banda y superficie? ¿El logaritmo natural es LN() (no LOG, que es base 10)? ¿Las áreas suman S_total? ¿V está bien calculado? Recordar que A se calcula BANDA por BANDA — no uses el mismo α para todas las frecuencias |
| «Eyring me da RT60 más corto que Sabine, ¿está bien?» | SÍ. Eyring SIEMPRE da valores menores o iguales que Sabine para la misma sala. Esto es porque Eyring «penaliza» la absorción alta más que Sabine. Si ᾱ es bajo (< 0.2), la diferencia es mínima. Si ᾱ es alto (> 0.4), la diferencia es significativa |
| «El RT60 que calculé para 125 Hz es mucho más alto que para 4 kHz.» | Es COMPLETAMENTE esperado. Los materiales absorbentes convencionales (espuma, lana mineral) son mucho menos efectivos en graves que en agudos. Para controlar graves necesitás materiales MUY gruesos (≥ 100 mm) o estrategias diferentes (trampas de graves, resonadores). No te preocupes si tu «antes» tiene RT60(125 Hz) = 2 s y RT60(4 kHz) = 0.5 s — ese desbalance es lo que ESTAMOS tratando de corregir con el acondicionamiento |
| «Fitzroy me da un número completamente distinto a Eyring — ¿hice algo mal?» | Posiblemente NO. Fitzroy es MUY sensible a cómo distribuiste la absorción. Si pusiste todo el tratamiento en el techo y nada en las paredes laterales, Fitzroy te va a dar un RT60 más alto que Eyring, lo cual es físicamente correcto (la energía «rebota» más entre las paredes laterales). La moraleja: la distribución uniforme de la absorción IMPORTA. No alcanza con tener suficientes sabins — tienen que estar bien distribuidos en las 3 direcciones |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
