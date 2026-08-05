# Guía Docente — Sesión 3: Velocidad de propagación del sonido

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** p5.js, Google Classroom, calculadora científica o app  
**Referencia:** Everest & Pohlmann, Capítulo 1, pp. 1–16

---

## Objetivo de la sesión

Que el estudiante calcule y relacione velocidad de propagación, frecuencia y longitud de onda, y comprenda por qué la longitud de onda determina el comportamiento del sonido en espacios reales.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | Pregunta disparadora + recuperación de conceptos previos |
| **Desarrollo** | 45 min | Teoría guiada: velocidad, medios, temperatura, λ = v/f |
| **Práctica** | 40 min | Cálculo de longitudes de onda + comparación con espacios reales |
| **Cierre** | 20 min | Discusión + bitácora |

---

## 1. Apertura — Recuperación y disparador

### Dinámica

1. Preguntar: «Si golpeo un riel de tren y estoy a 100 metros, ¿escucho un solo golpe o dos? ¿Por qué?»
2. Recuperar de la sesión 2: ¿qué es una onda longitudinal? ¿Qué son compresión y rarefacción?
3. Mostrar la fórmula λ = v/f en la pizarra. Preguntar: «Si v es constante (344 m/s), ¿qué pasa con λ si duplico la frecuencia?»

### Preguntas disparadoras
- ¿Por qué el bajo del vecino atraviesa la pared y los agudos no?
- ¿A qué distancia está una tormenta si el trueno llega 5 segundos después del relámpago?
- ¿Por qué en una cabina de grabación pequeña los graves «se acumulan»?

---

## 2. Desarrollo — Teoría guiada con simulación

Proyectar la [simulación p5.js](../unidades/U-1-fundamentos-medicion/sesion-02/simulacion.html) en pantalla.

### Secuencia sugerida

1. **Velocidad del sonido en aire** (10 min). Establecer el valor de referencia: 344 m/s a 20°C. Dar referencias cotidianas: un avión Boeing 787 vuela a Mach 0.85, un trueno tarda ~5 s por milla. Distinguir velocidad del sonido (constante para el medio) vs velocidad de partícula (depende del volumen).

2. **Medios: comparativa** (10 min). Mostrar la tabla de velocidades en agua, acero, madera, vidrio. El sonido viaja más rápido cuanto más denso el medio. Experimento mental del riel de tren. Preguntar: «¿Por qué en las películas del espacio las explosiones no suenan?»

3. **Temperatura y humedad** (10 min). Mostrar la fórmula \(v \approx 331.3 + 0.606T\). Calcular en vivo: ¿a qué velocidad viaja el sonido hoy en esta aula (medir temperatura)? Diferencia entre verano (35°C → 352 m/s) e invierno (5°C → 334 m/s). No es enorme, pero es medible.

4. **λ = v/f — la relación fundamental** (15 min). Proyectar la simulación. Variar frecuencia: ¿cómo cambia λ visualmente? Calcular longitudes de onda de frecuencias musicales. Conectar con la Fig. 1-8 (nomograma del Everest). Enfatizar: un grave de 50 Hz tiene λ ≈ 7 m — más larga que esta misma aula.

---

## 3. Práctica — Cálculo y comparación

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 3 — Longitud de onda y espacios reales

**Instrucciones:**

1. Usando la fórmula \(\lambda = \frac{344}{f}\) (en metros), completá la siguiente tabla:

| Frecuencia | Longitud de onda (m) | ¿Es mayor o menor que...? | Efecto esperado en una habitación de 4×3 m |
|---|---|---|---|
| 20 Hz | | ¿Una persona (1.7 m)? | |
| 50 Hz | | ¿Esta aula (~8 m)? | |
| 100 Hz | | ¿Un auto (~4 m)? | |
| 440 Hz | | ¿Una guitarra (~1 m)? | |
| 1,000 Hz | | ¿Una regla (0.3 m)? | |
| 5,000 Hz | | ¿Un celular (0.15 m)? | |
| 10,000 Hz | | ¿Un lápiz (0.18 m)? | |

2. Medí (aproximadamente) las dimensiones de tres espacios reales:
   - Tu habitación o lugar de estudio
   - Un aula de la universidad
   - Un espacio exterior o pasillo amplio

3. Para cada espacio, respondé:
   - ¿Cuál es la frecuencia más grave cuya longitud de onda «cabe» completamente dentro del espacio?
   - ¿Qué frecuencias tendrán longitudes de onda mucho mayores que el espacio (régimen de presión)?
   - ¿Qué implicaciones tiene esto para escuchar música o grabar en ese espacio?

4. Actividad grupal (en clase o foro): ¿por qué las bajas frecuencias son difíciles de controlar en salas pequeñas? Redactá una explicación de 5-7 líneas usando los conceptos de λ, dimensiones de sala y régimen de presión.

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Tabla λ completa | 7 filas con cálculos correctos y unidades | 5-6 filas o errores menores de cálculo | ≤4 filas o errores graves |
| Dimensiones de espacios | 3 espacios medidos con valores realistas | 2 espacios o valores aproximados | 1 espacio o valores inventados |
| Análisis por espacio | Frecuencia de «corte» calculada + implicaciones claras | Cálculo correcto pero implicaciones vagas | Sin análisis o análisis incorrecto |
| Explicación grupal (graves vs sala) | Usa λ, dimensiones, régimen de presión, ejemplos concretos | Menciona conceptos pero sin conexión clara | No usa terminología de la sesión |

---

## 4. Cierre — Conexión con la práctica profesional

### Discusión guiada (10-15 min)

- «Un ingeniero de mezcla coloca sus monitores a 1.5 m de la pared frontal. ¿Qué frecuencias podrían verse afectadas por esa distancia?» (pista: λ/4, λ/2)
- «Si estás grabando una guitarra acústica y querés capturar el brillo (10 kHz), ¿importa dónde ponés el micrófono?» (λ = 3.4 cm → cambios de pocos cm alteran drásticamente la fase capturada)
- «¿Por qué en un concierto al aire libre los graves se escuchan más lejos que los agudos?»

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Hoy aprendí que la velocidad del sonido en el aire es de 344 m/s y que depende del medio y la temperatura. La relación λ = v/f es la herramienta más importante para entender cómo se comporta el sonido en un espacio: los graves tienen longitudes de onda enormes (metros), los agudos son diminutos (centímetros). Esto explica por qué una cabina pequeña no puede contener graves: la onda ni siquiera cabe dentro."*

---

## Recursos adicionales para el docente

- [Simulación MAS](../unidades/U-1-fundamentos-medicion/sesion-02/simulacion-mas.html) — movimiento armónico simple interactivo
- [Simulación interactiva](../unidades/U-1-fundamentos-medicion/sesion-02/simulacion.html) — desplazamiento, presión, partículas
- [PhET: Wave on a String](https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html) — para visualizar λ, f, v en una cuerda
- [Calculadora de longitud de onda](https://www.omnicalculator.com/physics/wavelength) — para verificación rápida
- Tabla de velocidades del sonido ampliada: buscar «speed of sound in various media table»

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| Confusión entre velocidad del sonido y velocidad de partícula | Analogía: la velocidad del sonido es como la velocidad de una ola en el estadio (cada persona se levanta y se sienta, la ola avanza rápido); la velocidad de partícula es qué tan rápido se levanta cada persona |
| No entiende por qué v es constante si depende de la temperatura | Para una sesión/ejercicio, asumimos condiciones estables. La variación por temperatura es pequeña en un aula (~5 m/s entre 15°C y 25°C). Hacer el cálculo en vivo |
| «¿Y esto para qué me sirve?» | Posicionamiento de monitores y micrófonos (distancias críticas = fracciones de λ). Tratamiento acústico (materiales funcionan según λ). Diseño de salas (modos propios dependen de dimensiones vs λ) |
| Errores al despejar la fórmula | Practicar los tres despejes: λ = v/f, f = v/λ, v = λ·f. Usar el triángulo mnemotécnico |
| Cálculo de λ da números «raros» (muchos decimales) | Redondear a 2 decimales para metros, o convertir a cm cuando λ < 1 m. Lo importante es el orden de magnitud, no la precisión absoluta |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
