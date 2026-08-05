# Guía Docente — Sesión 25: Tratamiento de bajas frecuencias

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** Google Classroom, calculadora de resonadores (planilla o p5.js), REW (opcional, para demo con mediciones reales), sonómetro (app), cinta métrica  
**Referencia:** Everest & Pohlmann, Capítulo 12, pp. 198–241 (Porous Absorbers, Membrane/Panel Absorbers, Helmholtz Resonators); Capítulo 13, pp. 242–275 (Modal Treatment and Trap Placement); Capítulo 14, pp. 211–230 (Tuned Absorbers); Capítulo 15 (Adjustable Acoustics)

---

## Objetivo de la sesión

Que el estudiante distinga los tres tipos de trampas de graves según su principio físico (porosa/velocidad, membrana/presión, Helmholtz/presión), calcule la frecuencia de resonancia de una trampa de membrana y un resonador de Helmholtz, justifique la ubicación de las trampas en función de la distribución espacial de presión y velocidad de los modos de sala, y diseñe conceptualmente un plan de tratamiento para los modos problemáticos de un recinto real.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | «¿Por qué la espuma acústica no arregla los graves?» — demostración con barrido de frecuencia en el aula |
| **Desarrollo** | 50 min | Teoría guiada: presión vs. velocidad, los tres tipos de trampas, ubicación, acústica variable |
| **Práctica** | 40 min | Cálculo de trampas para modos problemáticos + diseño de plan de tratamiento |
| **Cierre** | 15 min | «¿Cuánto espacio estoy dispuesto a sacrificar?» — el compromiso acústica vs. habitabilidad |

---

## 1. Apertura — «¿Por qué la espuma acústica no arregla los graves?»

### Dinámica

1. Mostrar dos imágenes lado a lado: (a) un estudio con espuma acústica de 5 cm en todas las paredes, estéticamente impecable, y (b) una medición REW del mismo estudio mostrando picos de +15 dB en 60, 90 y 130 Hz. Preguntar: «¿Qué pasó? Si está todo tratado, ¿por qué los graves siguen siendo un desastre?»
2. Revelar el concepto central: la espuma acústica funciona por FRICCIÓN (velocidad de partícula). A 100 Hz, necesitás estar a 86 cm de la pared para que la velocidad de partícula sea máxima. La espuma de 5 cm pegada a la pared está en el peor lugar posible para absorber graves.
3. Pregunta disparadora: «Entonces, si no puedo usar espuma para los graves, ¿qué uso?» → Trampas que funcionen por PRESIÓN, no por velocidad: membrana, Helmholtz. Y si quiero usar absorción porosa en graves, necesito MUCHO espesor o colocarla lejos de la pared.

### Preguntas disparadoras

- «En la Sesión 24 calculaste los modos de tu sala. Ahora sabés exactamente QUÉ frecuencias tenés que tratar. ¿Con QUÉ dispositivo?» → Hay que elegir entre poroso (banda ancha pero voluminoso), membrana (sintonizado, más compacto) o Helmholtz (muy sintonizado, muy compacto).
- «¿Qué pesa más en tu decisión: el espacio que perdés o la precisión del tratamiento?» → Si tenés una sala grande, superchunks de lana en las esquinas son la solución más simple y efectiva. Si tu sala es chica, necesitás dispositivos más compactos y sintonizados.

---

## 2. Desarrollo — Teoría guiada

### Secuencia sugerida

1. **Presión vs. velocidad de partícula: la clave olvidada** (15 min). Dibujar en la pizarra una onda estacionaria entre dos paredes. Trazar DOS curvas superpuestas: presión (máxima en paredes, cero a λ/4) y velocidad de partícula (cero en paredes, máxima a λ/4). Preguntar: «Si tengo un panel de lana de vidrio de 10 cm, ¿dónde lo pongo para que absorba 100 Hz? ¿Pegado a la pared o a 85 cm?» → A 85 cm. «¿Y si es una trampa de membrana?» → Pegado a la pared. «¿Por qué?» → Porque la membrana vibra por PRESIÓN, no por fricción del aire.

   > Insertar **Fig. 12-10** del Everest: perfil de presión y velocidad en una onda estacionaria.

2. **Trampas de membrana: la trampa del ingeniero** (10 min). Deducir la fórmula \(f_0 = 60 / \sqrt{m \cdot d}\) a partir de la analogía masa-resorte. Mostrar ejemplos numéricos con tabla m-d. Discutir la diferencia entre membrana LIMP (vinilo, mass-loaded vinyl) vs. panel RÍGIDO (madera contrachapada, MDF): la membrana limp tiene un solo grado de libertad (modo pistón) → un solo pico de absorción. El panel rígido tiene modos propios de flexión → múltiples picos de absorción (más ancho de banda efectivo, aunque menos predecible).

3. **Resonadores de Helmholtz: precisión quirúrgica** (15 min). Deducir la fórmula conceptualmente: frecuencia de un sistema masa-resorte ω₀ = √(k/m). En el Helmholtz, la masa es el aire en el cuello (ρ·S·L_ef) y el resorte es la compresibilidad del aire en la cavidad (ρ·c²·S²/V). Simplificando: f₀ = (c/2π)·√(S/(V·L_ef)). Calcular un ejemplo completo paso a paso, incluyendo la corrección de boca (¿con brida o sin brida?). Mostrar la diferencia entre un Helmholtz individual y un panel perforado (múltiples Helmholtz en paralelo).

   > Insertar **Fig. 14-3** del Everest: esquema del resonador de Helmholtz con analogía masa-resorte.

4. **Ubicación: geometría de la efectividad** (10 min). Mostrar un diagrama de una sala rectangular con TODOS los modos axiales superpuestos. Señalar las esquinas triedro: «Acá se juntan los antinodos de TODOS los modos.» Explicar la jerarquía de ubicación: (1) esquinas triedro → superchunks o trampas de banda ancha, (2) aristas → trampas sintonizadas para modos residuales, (3) pared trasera → absorción + difusión. Mencionar la acústica variable como alternativa cuando la sala tiene múltiples usos (Everest Cap. 15).

---

## 3. Práctica — Diseñá el tratamiento para TU sala

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 25 — Tratamiento de bajas frecuencias

**Instrucciones:**

**Parte A — Calculá tus trampas (individual)**

1. Retomá los resultados de la Sesión 24 (Partes A y B): modos calculados para tu espacio real y diagnóstico de Bonello. Identificá los **3 modos más problemáticos**: aquellos con mayor degeneración, menor separación entre modos adyacentes, o frecuencias que coincidan con notas musicales comunes (bombo ≈ 50-60 Hz, bajo eléctrico ≈ 40-80 Hz).

2. Para CADA uno de esos 3 modos, diseñá una trampa:
   - **Modo 1** (el más grave): trampa de MEMBRANA. Usá la fórmula \(f_0 = 60 / \sqrt{m \cdot d}\). Elegí m y d viables constructivamente (m entre 2 y 15 kg/m², d entre 5 y 40 cm). Proponé un material real para la membrana (ej. madera contrachapada de 4, 6, o 9 mm; vinilo de alta densidad; MDF de 3 mm).
   - **Modo 2**: resonador de HELMHOLTZ. Usá la fórmula \(f_0 = (c/2\pi) \cdot \sqrt{S/(V \cdot L_{\text{ef}})}\). Elegí dimensiones realistas (V entre 10 y 100 litros, r entre 1 y 5 cm para el cuello, L entre 3 y 15 cm). Incluí la corrección de boca.
   - **Modo 3**: panel POROSO de gran espesor. Calculá el espesor necesario para que λ/4 coincida con la frecuencia del modo. Determiná si es viable (¿tenés 50 cm de profundidad para sacrificar en tu sala?) o si conviene usar otra tecnología.

3. Para cada trampa, estimá el ancho de banda efectivo (Q): membrana sin relleno → Q ≈ 3-5 (ancho ~1/3 octava); membrana con relleno → Q ≈ 1-2 (ancho ~2/3 octava); Helmholtz sin relleno → Q ≈ 5-15 (muy estrecho); Helmholtz con relleno → Q ≈ 2-5 (ancho ~1/2 octava).

**Parte B — Diseñá el plan de ubicación (individual)**

1. Dibujá un plano esquemático de tu sala (vista en planta). Marcá:
   - Todas las esquinas triedro (se juntan piso + 2 paredes o techo + 2 paredes): hay 8 en una sala rectangular.
   - Todas las aristas (se juntan 2 superficies): hay 12.
   - La posición de los monitores y tu posición de escucha.

2. Para cada trampa diseñada en la Parte A, proponé la mejor ubicación basándote en la distribución espacial de presión de los modos:
   - ¿Qué modos axiales tienen antinodo en una esquina específica? (Recordá: los modos axiales en x tienen antinodo en TODAS las esquinas del eje x, es decir, en las 4 aristas verticales.)
   - ¿Hay algún modo que sea mejor tratar en una arista que en una esquina? (En general, esquina > arista para presión, pero aristas pueden ser más accesibles.)
   - ¿La trampa porosa (Parte A, Modo 3) está ubicada a suficiente distancia de la pared? Si no, ¿cómo modificás el diseño (air gap, montaje en esquina en diagonal)?

3. Justificá tu plan en 3-5 oraciones. Incluí una estimación de cuánto volumen de sala «perdés» con el tratamiento (sumá el volumen externo de todas las trampas).

**Parte C — Reflexión: absorción y acústica variable (individual)**

1. Si tu sala tuviera que funcionar como estudio de grabación (RT60 ≈ 0.4 s) Y como sala de escucha informal (RT60 ≈ 0.8 s), ¿qué elementos de tu plan de tratamiento modificarías para que fueran VARIABLES?

2. Investigá brevemente (búsqueda web, 5 minutos): ¿existen en tu país proveedores de trampas de graves comerciales? Mencioná 2-3 marcas o tipos de productos y compará sus especificaciones (frecuencia de corte, espesor, precio aproximado) con tus diseños de la Parte A.

**Fecha de entrega:** [definir según calendario]

### Rúbrica formativa

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Cálculo de trampas (Parte A) | Tres trampas calculadas con fórmulas correctas, materiales reales, dimensiones constructivamente viables, Q estimado con y sin relleno | Dos trampas correctas o errores menores en corrección de boca / unidades | Una o ninguna trampa correcta, fórmulas mal aplicadas |
| Plan de ubicación (Parte B) | Plano con las 8 esquinas triedro y 12 aristas identificadas, cada trampa ubicada según distribución de presión modal, justificación física (no estética) | Ubicaciones correctas pero justificación débil o incompleta | Ubicaciones arbitrarias sin relación con los modos |
| Análisis de viabilidad | Comparación explícita entre espesor necesario vs. espacio disponible, alternativas propuestas cuando el diseño original no es viable, cálculo de volumen perdido | Viabilidad mencionada pero sin cuantificar | No aborda la viabilidad constructiva |
| Reflexión y búsqueda (Parte C) | Acústica variable propuesta con criterio, 2-3 productos comerciales comparados con los diseños propios, fuentes citadas | Búsqueda realizada pero comparación superficial | Sin reflexión o sin búsqueda |

---

## 4. Cierre — «¿Cuánto espacio estoy dispuesto a sacrificar?»

### Discusión guiada (10 min)

- «Levanten la mano: ¿cuántos de ustedes tendrían que sacar muebles de su sala para poner las trampas que diseñaron?» → El tratamiento de graves OCUPA ESPACIO. Es la realidad física: para absorber 40 Hz necesitás o bien mucha profundidad (poroso) o bien un dispositivo resonante (membrana/Helmholtz) que, aunque más compacto, sigue ocupando esquinas y aristas. No hay trampa de graves invisible de 2 cm de espesor.

- «¿Cuál es el mayor enemigo del tratamiento acústico?» → No es el precio. No es la complejidad. Es el ESPACIO. La mayoría de estudios caseros están en dormitorios de 9-15 m² donde cada centímetro cuenta. La decisión REAL es: ¿prefiero una sala cómoda que suena mal en graves o una sala incómoda que suena bien?

- «Dato clave: las esquinas son los metros cuadrados MÁS BARATOS de tratamiento acústico. Un superchunk de lana mineral de 60 cm de lado en una esquina ocupa poca superficie útil de piso, no interfiere con la circulación, y trata TODOS los modos simultáneamente. Es la mejor relación costo/beneficio/espacio en acústica de salas pequeñas.»

- «¿Qué pasa si no tratás los graves?» → (a) No podés ecualizarlos — el EQ no corrige resonancias modales (son temporales, no espectrales). (b) Tus mezclas van a tener DEMASIADO grave (porque tu sala te los está «regalando») o DEMASIADO POCO (porque estás en un nodo). (c) Cuando reproduzcas tu mezcla en otro sistema, los graves van a ser impredecibles. Tratar tu sala NO es opcional para mezclar profesionalmente — es la diferencia entre adivinar y saber.

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"El tratamiento de bajas frecuencias es cualitativamente distinto al tratamiento de medios y agudos. Por debajo de la frecuencia de Schroeder, la respuesta está dominada por modos individuales que deben tratarse con dispositivos resonantes (membrana, Helmholtz) o absorbentes porosos de gran espesor. La efectividad de cada tipo de trampa depende de la distribución espacial de presión y velocidad de partícula de la onda estacionaria: los absorbentes porosos disipan energía por fricción y deben ubicarse donde la velocidad de partícula es máxima (a λ/4 de la pared), mientras que los resonadores funcionan por presión y se ubican donde la presión es máxima (en las paredes y esquinas). La frecuencia de resonancia de una trampa de membrana es f₀ = 60/√(m·d) y la de un resonador de Helmholtz es f₀ = (c/2π)·√(S/(V·L_ef)). Las esquinas triedro son los puntos más eficientes para colocar trampas porque en ellas TODOS los modos axiales tienen antinodos de presión. La acústica variable (paneles giratorios, cortinas, resonadores ajustables) permite adaptar una sala a múltiples usos modificando su RT60 y su respuesta modal. El verdadero costo del tratamiento acústico no es el dinero — es el espacio."*

---

## Recursos adicionales para el docente

- [Acoustic Modeling — Porous Absorber Calculator](http://www.acousticmodelling.com/porous.php) — calculadora online de absorción porosa multicapa. Permite modelar paneles con air gap, membranas, y estimar el coeficiente de absorción vs. frecuencia para distintas configuraciones de materiales.
- [Helmholtz Resonator Calculator — mh-audio](http://www.mh-audio.nl/Acoustics/HHReso.html) — calculadora online de resonadores de Helmholtz. Ingresás frecuencia objetivo y te sugiere dimensiones de cuello y cavidad.
- [Bob Golds — Absorption Coefficients](https://www.acoustic.ua/st/832) — tabla de coeficientes de absorción (α) de cientos de materiales, por banda de octava. Fundamental para verificar si un material comercial cumple lo que promete.
- [REW — Room EQ Wizard](https://www.roomeqwizard.com/) — medición de respuesta en frecuencia real. Antes y después de instalar trampas: la diferencia en el waterfall plot (decaimiento temporal) es la prueba definitiva de efectividad.
- [Video: Bass Traps 101 — Acoustic Geometry](https://www.youtube.com/watch?v=8XmY4yY5VfU) — explicación visual de los tres tipos de trampas con demostraciones de medición.
- [Artículo: Porous Absorbers vs. Resonant Absorbers — Sound on Sound](https://www.soundonsound.com/techniques/studio-acoustics-bass-traps) — comparación práctica de las dos familias de trampas con ejemplos de instalación.
- [DIY Superchunk Bass Trap — Arqen](https://arqen.com/acoustics-101/superchunk-bass-trap/) — guía completa para construir superchunks de lana mineral con planos, lista de materiales y mediciones de efectividad.

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| «Calculé la frecuencia de membrana y me da 200 Hz. ¿Cómo la bajo a 60 Hz sin hacer una caja de un metro de profundidad?» | La frecuencia baja cuando aumentás m (masa superficial) o d (profundidad de cavidad). Si d está limitada por el espacio, aumentá m usando un material más pesado. Un panel de MDF de 9 mm (m ≈ 7 kg/m²) con d = 15 cm → f₀ = 60/√(7×0.15) ≈ 58 Hz. Alternativa: agregá una lámina de mass-loaded vinyl (MLV) de 5 kg/m² entre el panel y la cavidad → m efectiva = m_panel + m_MLV. Cuidado: demasiada masa reduce la amplitud de vibración → menos absorción. El compromiso es inherente. |
| «Hice un Helmholtz para 50 Hz y me da una caja de 200 litros. ¿Es normal?» | Sí. La frecuencia de resonancia es inversamente proporcional a √V. Para bajar una octava (de 100 a 50 Hz) manteniendo S y L constantes, necesitás CUADRIPLICAR el volumen. Los Helmholtz para frecuencias MUY bajas (< 60 Hz) se vuelven impracticablemente grandes. Para esos casos, considerá una membrana o un superchunk. Los Helmholtz brillan en el rango 80-250 Hz donde el volumen requerido es manejable (20-50 litros). |
| «¿Cómo sé si una trampa está funcionando después de instalarla?» | La forma correcta es medir. Hacé una medición REW ANTES (sala sin trampas nuevas) y DESPUÉS (con trampas instaladas). Compará: (a) el espectro de frecuencia — el pico modal debería reducirse 3-6 dB mínimo, (b) el waterfall plot — el decaimiento temporal en la frecuencia del modo debería ser MÁS RÁPIDO (la «cola» se acorta). Si no ves diferencia significativa en el waterfall, la trampa no está funcionando — probablemente porque no está en la ubicación correcta o porque la frecuencia de diseño no coincide con la frecuencia real del modo (recordá: la fórmula predice, la medición confirma). |
| «Mi sala es MUY chica (2.5 × 2.5 × 2.4 m). ¿Vale la pena tratar los graves?» | En una sala tan chica, la frecuencia de Schroeder va a ser ALTÍSIMA: f_S ≈ 2000 × √(0.5/(2.5³)) ≈ 2000 × √(0.5/15.6) ≈ 2000 × 0.179 ≈ 358 Hz. Esto significa que CASI TODO el espectro audible está en régimen MODAL, no difuso. Sí, vale la pena tratar, pero tenés que ser MUY selectivo con el espacio: esquinas con superchunks triangulares (la hipotenusa ocupa poco frente al cuadrado equivalente), trampas de membrana delgadas (< 15 cm), y aceptar que no vas a lograr una respuesta plana — solo vas a reducir los peores picos. En salas MUY pequeñas, la solución más efectiva suele ser usar auriculares para mezclar graves y verificar en monitores para el resto. |
| «¿Las trampas de graves que venden en Mercado Libre / Amazon funcionan?» | Depende. Muchas trampas «comerciales baratas» son paneles de espuma de 10-15 cm con un perfil dentado que prometen «absorción de graves». La realidad: espuma de 15 cm tiene α ≈ 0.3 a 125 Hz. Es mejor que nada, pero está lejos de ser un tratamiento de graves efectivo. Las trampas COMERCIALES SERIAS (RealTraps, GIK Acoustics, Primacoustic, Vicoustic) publican datos de laboratorio (ASTM C423 o ISO 354) con coeficientes de absorción por banda de octava. Exigí esos datos antes de comprar. Si no los publican, desconfiá. Una trampa de membrana o Helmholtz hecha en casa con materiales de ferretería puede ser más efectiva que un producto comercial barato sin especificaciones. |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
