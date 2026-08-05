# Guía Docente — Sesión 26: Difusión acústica en interiores

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, QRD calculator (p5.js o planilla), linterna y espejo (para la demo de apertura), cinta métrica, REW (opcional)  
**Referencia:** Everest & Pohlmann, Capítulo 9, pp. 140–153 (Diffusion — Reflection, Scattering and Diffusion, Geometric Diffusers); Capítulo 14, pp. 211–230 (Schroeder Diffusers — QRD, PRD, MLS, PG Sequences, RPG); ISO 17497-2:2012 (Measurement of the Diffusion Coefficient in a Reverberation Room)

---

## Objetivo de la sesión

Que el estudiante distinga los tres destinos del sonido incidente (reflexión especular, absorción, difusión) según la física de cada proceso, diseñe un difusor QRD unidimensional para una frecuencia objetivo usando la secuencia de residuos cuadráticos, calcule la distancia mínima oyente-difusor como criterio de viabilidad, y recomiende la combinación de absorción y difusión adecuada para cada superficie de un estudio en función de su geometría y uso.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | «Espejo, agujero negro o pared de diamantes» — demostración con linterna y superficies (espejo, paño negro, papel metálico arrugado) |
| **Desarrollo** | 45 min | Teoría guiada: reflexión vs. absorción vs. difusión, difusores geométricos, QRD, distancia mínima |
| **Práctica** | 45 min | Diseño de un difusor QRD + plano de tratamiento para un estudio tipo |
| **Cierre** | 15 min | «¿Mi sala tiene espacio para un difusor?» — la trampa de la distancia mínima + bitácora |

---

## 1. Apertura — «Espejo, agujero negro o pared de diamantes»

### Dinámica

1. Apagar las luces del aula (o bajar la intensidad). Proyectar una linterna potente contra tres superficies:
   - **Espejo**: el haz rebota en UNA dirección. «Esto es una pared de yeso pintada — reflexión especular. En acústica, esto produce flutter echo.»
   - **Paño negro mate**: el haz «desaparece». «Esto es una pared de espuma acústica — absorción. En exceso, la sala suena MUERTA.»
   - **Papel metálico arrugado**: el haz se dispersa en TODAS direcciones, iluminando uniformemente el techo y las paredes alrededor. «ESTO es difusión. La energía no se pierde — se REDISTRIBUYE. La sala se siente VIVA pero sin direccionalidad molesta.»
2. Preguntar: «Si tuvieran que tratar SU sala, ¿cuál de estas tres superficies elegirían para la pared de atrás?» → La mayoría dice absorción (paño negro). «¿Y si les dijera que hay una cuarta opción: una superficie que REDIRIGE el sonido en 7, 11 o 13 direcciones DISTINTAS, calculadas matemáticamente para que ninguna domine sobre las otras?» → Presentar la imagen de un difusor QRD. «Esto no es decoración. Es teoría de números aplicada a la acústica.»

### Preguntas disparadoras

- «En la Sesión 25 aprendiste a ABSORBER graves. Pero, ¿qué hacés con las frecuencias medias y altas? ¿Las absorbés todas?» → Si absorbés todo, la sala queda anecoica (muerta, desagradable). Necesitás una estrategia MIXTA.
- «¿Por qué una sala con alfombra, cortinas y sillones (mucha absorción) se siente 'apagada' pero un bosque (sin superficies paralelas, mucha difusión natural) se siente 'vivo'?» → Porque la difusión conserva la energía pero elimina la direccionalidad. La absorción elimina ambas.

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Los tres destinos del sonido** (10 min). Dibujar un rayo incidiendo en una superficie. Mostrar los tres casos: espejo (θ_i = θ_r), agujero negro (energía absorbida), dispersión uniforme (muchos rayos en todas direcciones). Introducir el concepto de LEDE (Live End – Dead End): mitad delantera «muerta» (absorción para claridad de imagen), mitad trasera «viva» (difusión para espacialidad). Preguntar: «¿En qué mitad pondrían la espuma acústica? ¿Y los difusores?»

   > Insertar **Fig. 9-1** del Everest: comparación visual reflexión especular vs. difusión.

2. **Difusores geométricos: la vieja escuela** (10 min). Mostrar imágenes de: (a) policilíndrico curvo (típico de estudios de los 70-80), (b) skyline (bloques de madera de distintas alturas), (c) librero lleno de libros (difusor accidental). Discutir ventajas y desventajas: los geométricos NO tienen una frecuencia de diseño precisa → son de banda ancha pero impredecibles. Los de secuencia (QRD) SÍ tienen frecuencia de diseño → son predecibles pero solo funcionan en su rango.

3. **QRD: cuando la matemática se hace sonido** (15 min). Escribir la secuencia para p = 7: n² mod 7 → [0, 1, 4, 2, 2, 4, 1]. Explicar qué SIGNIFICA: es el retardo de fase relativo de cada pozo. Si el pozo 1 refleja con fase 0°, el pozo 2 refleja con fase (1/7 × 360°) = 51.4°, el pozo 3 con fase (4/7 × 360°) = 205.7°, etc. La magia: estas 7 fases, al recombinarse en el espacio, producen un patrón de difracción que tiene MÁXIMOS en muchas direcciones con intensidades SIMILARES → difusión uniforme.

   Dibujar un QRD en sección transversal en la pizarra. Calcular un ejemplo completo paso a paso: f_diseño = 500 Hz, p = 7, w = 3 cm, profundidades d_n. Señalar los separadores (fins) entre pozos que evitan que el sonido «se escape» lateralmente de un pozo a otro.

   > Insertar **Fig. 14-3** del Everest: diagrama QRD con pozos, profundidades, separadores, y el patrón de difracción resultante.

4. **La trampa de la distancia mínima** (10 min). Calcular d_mín para dos escenarios:
   - Sala grande (6 m de profundidad), f_diseño = 300 Hz → d_mín = 3 × 343 / 300 = 3.43 m ✓ (viable)
   - Sala pequeña (3 m de profundidad), f_diseño = 300 Hz → d_mín = 3.43 m ✗ (el oyente está a 1.5 m en el mejor de los casos)
   
   Preguntar: «¿Cómo modifican el diseño para la sala chica?» → Subir f_diseño a 800 Hz (d_mín = 1.29 m, viable) o a 1 kHz (d_mín = 1.03 m). El difusor ahora solo funciona de 1 kHz para arriba. Para el rango 300-1000 Hz en esa sala, necesitás absorción. Conclusión: **no existe UN difusor universal — el diseño depende de la sala donde va a estar.**

---

## 3. Práctica — Diseñá tu difusor y tu plano de tratamiento

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 26 — Difusión acústica y plano de tratamiento

**Instrucciones:**

**Parte A — Diseño de difusor QRD (individual)**

1. Elegí una frecuencia de diseño f_diseño para tu difusor. Considerá la distancia disponible en tu sala (Sesión 25, plano de la Parte B). La condición d_mín ≥ 3c/f_diseño DEBE cumplirse. Documentá la distancia real entre la ubicación prevista del difusor y la posición de escucha.

2. Elegí un número primo p (7, 11 o 13) y un ancho de pozo w (2-5 cm). Justificá tu elección: p más grande → más pozos → más uniformidad, pero también difusor más ancho. w más chico → f_max más alto, pero construcción más difícil.

3. Calculá la secuencia de profundidades d_n para n = 0, 1, …, p−1 usando la fórmula QRD:

    \[
    d_n = \frac{343 \cdot (n^2 \bmod p)}{2 \cdot f_{\text{diseño}} \cdot p}
    \]

    Presentá los resultados en una tabla: n, n², n² mod p, d_n (en cm).

4. Determinar las dimensiones físicas de UN período:
   - Ancho total = p × w (en cm)
   - Profundidad máxima = max(d_n) (en cm)
   - Profundidad física total = d_max + espesor de la base + espesor de los separadores

5. Calculá cuántos períodos necesitás para cubrir el ancho disponible en la pared elegida. Ejemplo: pared de 1.8 m, ancho de período = 21 cm → 8.6 períodos → 8 períodos (168 cm) dejando 6 cm de margen a cada lado.

6. Calculá y verificá la distancia mínima: d_mín = 3 × 343 / f_diseño. ¿Se cumple en tu sala?

**Parte B — Estrategia mixta de absorción y difusión (individual)**

1. Retomá el plano de tu sala de la Sesión 25 (Parte B). Ahora agregá el tratamiento en MEDIAS y ALTAS frecuencias. Para cada superficie, decidí si usás ABSORCIÓN, DIFUSIÓN o una COMBINACIÓN, y justificá:

    | Superficie | Tratamiento | Justificación |
    |---|---|---|
    | Paredes laterales (zona de primera reflexión) | | |
    | Paredes laterales (fuera de primera reflexión) | | |
    | Pared trasera (opuesta a monitores) | | |
    | Techo (entre monitores y oyente) | | |
    | Techo (detrás del oyente) | | |
    | Pared frontal (detrás de monitores) | | |

2. Para las superficies donde elegiste DIFUSIÓN en la tabla, verificá que la distancia oyente-superficie sea ≥ d_mín para la f_diseño del difusor que diseñaste en la Parte A. Si no se cumple para alguna superficie, proponé una alternativa (absorción, difusor geométrico, o difusor de mayor frecuencia).

3. Calculá el costo estimado de materiales para tu difusor QRD (Parte A). Investigá precios locales aproximados de:
   - Madera MDF o contrachapado para los separadores y la base (en m²)
   - Pegamento, tornillos
   - Tela acústicamente transparente para cubrir el frente (opcional, para estética)

    Compará con el precio de un difusor comercial de tamaño similar (buscá en internet). ¿Conviene construirlo o comprarlo?

**Parte C — Análisis de un caso real (individual)**

1. Buscá en internet imágenes de un estudio de grabación o sala de mezcla PROFESIONAL (ej. Abbey Road, Electric Lady, Blackbird Studio, o estudios de productores reconocidos). Identificá en la imagen:
   - ¿Dónde hay absorción? (paneles de tela, espuma)
   - ¿Dónde hay difusión? (superficies con patrones geométricos, QRD visibles, skyline)
   - ¿Dónde hay trampas de graves? (esquinas con dispositivos voluminosos)

2. Respondé: ¿El estudio sigue una filosofía LEDE? ¿Ves la división «dead end» / «live end»? ¿El tratamiento es simétrico (igual en izquierda y derecha)? ¿Por qué la simetría es crítica para la imagen estéreo?

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Diseño QRD (Parte A) | Secuencia correctamente calculada para p elegido, f_diseño justificada por distancia, tabla completa con n² mod p y d_n, dimensiones físicas realistas, períodos calculados para pared real | Secuencia correcta pero f_diseño o w no justificados, o distancia mínima no verificada | Errores en la secuencia (n² mod p mal calculado) o fórmula mal aplicada |
| Verificación d_mín | Distancia oyente-difusor medida en plano, comparada con d_mín calculado, alternativa propuesta si no se cumple | Verificación hecha pero sin propuesta alternativa si no cumple | d_mín no calculado o no verificado |
| Estrategia mixta (Parte B) | Tabla completa con justificación física para cada superficie, coherencia con geometría de la sala, balance absorción/difusión justificado | Tabla completa pero justificaciones débiles o alguna superficie mal asignada | Superficies sin justificación o asignaciones contradictorias |
| Análisis de caso real (Parte C) | Estudio identificado, absorción/difusión/trampas señaladas correctamente, filosofía LEDE discutida, simetría analizada | Identificación correcta pero análisis superficial | No identifica correctamente los tratamientos o confunde difusores con absorbentes |

---

## 4. Cierre — «¿Mi sala tiene espacio para un difusor?»

### Discusión guiada (10 min)

- «Levanten la mano los que NO cumplen la distancia mínima para el difusor que diseñaron.» → La mayoría de salas caseras NO TIENEN 2-3 metros de distancia a la pared trasera. «Esto NO significa que no puedan usar difusores. Significa que tienen que usar difusores diseñados para frecuencias MÁS ALTAS (1-2 kHz en vez de 300-500 Hz) o difusores geométricos (policilíndricos) que no requieren distancia de formación de frente de onda. La acústica es física, no decoración: las leyes NO se negocian.»

- «Dato importante: el difusor QRD fue inventado por Manfred Schroeder en los 70 usando teoría de números. Este señor trabajaba en Bell Labs y era físico de formación. La acústica que usamos hoy es el resultado de mentes BRILLANTES que conectaron disciplinas aparentemente no relacionadas — teoría de números y acústica de salas. Cuando alguien te diga 'eso es muy matemático, no sirve para hacer música', mostrale un QRD.»

- «Para la pared trasera de un estudio casero típico, mi recomendación: si tenés MENOS de 1.5 m a la pared trasera, usá absorción de banda ancha (panel de lana de roca de 10-15 cm con air gap). Si tenés ENTRE 1.5 y 2.5 m, usá difusor QRD diseñado para 800-1000 Hz + absorción debajo. Si tenés MÁS de 2.5 m, podés diseñar para 400-500 Hz y obtener difusión en casi todo el espectro audible.»

- «¿Absorber o difundir? La respuesta no es binaria. Cada superficie de tu sala tiene una geometría distinta respecto a tus oídos y tus monitores. Tratar todo con el mismo criterio es como mezclar todos los canales con el mismo preset de EQ. El buen tratamiento acústico es SITE-SPECIFIC: diseñado PARA esa sala, PARA esa posición de escucha y PARA ese uso.»

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Cuando el sonido incide sobre una superficie en una sala, puede reflejarse especularmente (como un espejo), ser absorbido (convirtiéndose en calor) o ser difundido (redistribuyéndose uniformemente en múltiples direcciones sin perder energía). La difusión es preferible a la absorción cuando se desea mantener la energía acústica en la sala sin crear focalizaciones ni ecos flutter. Los difusores geométricos (policilíndricos, piramidales, skyline) funcionan por dispersión física de banda ancha pero impredecible. Los difusores de secuencia numérica (Schroeder) usan pozos de profundidad calculada según secuencias de residuos cuadráticos (QRD), raíces primitivas (PRD) o secuencias binarias (MLS) para producir patrones de difracción con máximos de intensidad similar en muchas direcciones — difusión uniforme controlada matemáticamente. La profundidad del n-ésimo pozo de un QRD es dₙ = c·(n² mod p)/(2·f_diseño·p), donde p es un número primo y f_diseño es la frecuencia mínima para la cual el difusor funciona. La distancia mínima entre el difusor y el oyente debe ser al menos 3·λ_diseño para que el frente de onda difundido se forme completamente; en salas pequeñas esto obliga a usar difusores de frecuencia de diseño más alta. La filosofía LEDE (Live End – Dead End) propone absorber las primeras reflexiones (mitad delantera de la sala) para preservar la imagen estéreo y difundir el resto (mitad trasera) para mantener la espacialidad y el ambiente natural. El tratamiento acústico no es binario (absorción vs. difusión), sino site-specific: cada superficie debe tratarse según su geometría respecto al oyente y los monitores."*

---

## Recursos adicionales para el docente

- [QRD Diffuser Calculator — mh-audio](http://www.mh-audio.nl/Acoustics/QRDCalc.html) — calculadora online. Ingresás f_diseño, p, w y te da la tabla completa de profundidades + dimensiones físicas + distancia mínima recomendada.
- [QRDude — Excelent QRD calculator (Windows)](http://www.subwoofer-builder.com/qrdude.htm) — software gratuito para Windows con visualización 3D del difusor y exportación de planos de corte. Muy usado en la comunidad DIY.
- [Acoustic Fields — Diffusion Technology](https://www.acousticfields.com/diffusion/) — recurso extenso sobre los distintos tipos de difusores con diagramas, fórmulas y comparativas de rendimiento.
- [Video: QRD Diffuser Design — John H. Brandt](https://www.youtube.com/watch?v=kDY_7RuFzY0) — tutorial de diseño y construcción de un QRD paso a paso, desde el cálculo hasta el montaje en pared.
- [ISO 17497-2:2012](https://www.iso.org/standard/51187.html) — norma internacional para la medición del coeficiente de difusión en cámara reverberante. Referencia técnica para entender cómo se validan los difusores.
- [Artículo: LEDE vs RFZ vs ESS — Acoustic Fields](https://www.acousticfields.com/lede-rfz-vs-ess-control-rooms/) — comparación de las tres filosofías principales de diseño de cuartos de control.
- [DIY QRD Build Guide — Arqen](https://arqen.com/sound-diffusers/) — guía completa de construcción DIY con lista de materiales, herramientas necesarias y fotos del proceso.

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «Calculé el QRD y me da un difusor de 50 cm de profundidad. ¿Es normal?» | Para f_diseño = 500 Hz, p = 7: d_max ≈ 29 cm. Si te da 50 cm, probablemente no dividiste por p en el denominador o usaste p incorrecto. Revisá: d_n = c × (n² mod p) / (2 × f_diseño × p). El denominador tiene p, que reduce la profundidad. Si bajás f_diseño a 200 Hz, d_max = (343 × 6) / (2 × 200 × 7) = 2058 / 2800 = 73.5 cm. Sí, un QRD para 200 Hz es PROFUNDO. Por eso los difusores comerciales de baja frecuencia son caros y voluminosos. Para un estudio casero, f_diseño = 800-1000 Hz es mucho más práctico (d_max ≈ 12-18 cm para p=7). |
| «¿Por qué los pozos del QRD tienen que estar aislados con separadores (fins)?» | Sin separadores, la presión sonora en un pozo «se escapa» lateralmente a los pozos adyacentes. El resultado: la profundidad EFECTIVA de cada pozo ya no es la calculada — es un promedio borroso de las profundidades vecinas. El patrón de difracción se degrada y el difusor se comporta más como una superficie irregular aleatoria que como un QRD. Los separadores deben ser RÍGIDOS (madera, metal, no espuma) y delgados (~2-3 mm) para minimizar el área que «roban» a los pozos. |
| «¿Funciona un QRD si lo ponemos horizontal en vez de vertical?» | Sí, pero la difusión ocurre en el plano PERPENDICULAR a los pozos. Un QRD 1D con pozos VERTICALES difunde en el plano HORIZONTAL (lo que queremos para las paredes laterales). El mismo QRD con pozos HORIZONTALES difunde en el plano VERTICAL (techo, parcialmente útil). Para difusión en AMBOS planos, necesitás un QRD 2D (matriz de pozos en ambas direcciones). |
| «Construí el QRD, lo puse en la pared y no noto diferencia al escuchar.» | Posibles causas: (a) Estás sentado a menos de d_mín → los frentes de onda no se formaron. (b) El difusor está en una ubicación donde no hay incidencia de sonido significativa (ej. en una pared lateral MUY atrás del oyente). (c) La diferencia entre una reflexión especular y difusa es SUTIL para oídos no entrenados — se nota más en mediciones que en escucha casual. Hacé una grabación binaural con y sin difusor. (d) El difusor está cubriendo un porcentaje MUY pequeño de la superficie total → una pared de 3×3 m con un difusor de 60×60 cm solo trata el 4% del área. No es suficiente. La regla: el difusor debe cubrir al menos 20-25% del área de la superficie para tener un efecto audible. |
| «La fórmula de d_c del coeficiente de difusión parece complicada. ¿No hay algo más simple?» | La fórmula mide cuán UNIFORME es la distribución de energía en todas las direcciones: un valor alto indica que ninguna dirección «domina» sobre las otras. No es necesario calcularla a mano — en laboratorios se usa un brazo robótico con micrófono que mide automáticamente. Para fines prácticos, confiá en el diseño correcto de la secuencia QRD (la matemática GARANTIZA la difusión dentro del rango de diseño) y verificá subjetivamente: parate frente al difusor, hablá o aplaudí. Si escuchás un slap echo (eco seco y direccional), el difusor no está funcionando. Si escuchás un sonido «abierto», distribuido, sin direccionalidad clara, está funcionando. |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
