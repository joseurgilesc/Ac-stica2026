# Guía Docente — Sesión 2: Naturaleza física del sonido

**Duración estimada:** 1 sesión presencial (≈ 2-3 horas)  
**Herramientas:** p5.js, Google Classroom, DAW u osciloscopio  
**Referencia:** Everest & Pohlmann, Capítulo 1, pp. 1–16

---

## Objetivo de la sesión

Que el estudiante comprenda la naturaleza ondulatoria del sonido y relacione los parámetros físicos (amplitud, frecuencia, fase, longitud de onda) con fenómenos observables y auditivos.

---

## Esquema de la clase

| Momento | Duración | Actividad |
|---|---|---|
| **Apertura** | 15 min | Demostración física + diagnóstico |
| **Desarrollo** | 45 min | Teoría guiada con simulación p5.js |
| **Práctica** | 40 min | Exploración libre de la simulación + registro |
| **Cierre** | 20 min | Discusión y conexión con producción musical |

---

## 1. Apertura — Demostración física

### Materiales
- Cuerda o resorte (tipo Slinky)
- Diapasón o altavoz pequeño
- Regla metálica sujeta al borde de una mesa

### Dinámica
1. Hacer vibrar la regla metálica: observar que a mayor longitud libre, menor frecuencia (sonido más grave).
2. Tocar el diapasón y apoyarlo en una superficie: el sonido se amplifica (la superficie actúa como resonador).
3. Estirar el Slinky y generar un pulso: observar cómo viaja la perturbación mientras cada espira vuelve a su lugar.

### Preguntas disparadoras
- ¿Qué viaja: la cuerda/regla o la perturbación?
- ¿Por qué el diapasón suena más fuerte al apoyarlo en la mesa?
- ¿Qué pasaría si no hubiera aire entre el diapasón y nuestros oídos?

---

## 2. Desarrollo — Teoría guiada con simulación

Proyectar la [simulación p5.js](simulacion.html) en pantalla.

### Secuencia sugerida

1. **Mostrar solo la capa de desplazamiento** (🟢). Explicar: "esto es lo que hace una partícula de aire — sube y baja alrededor de su posición de equilibrio".

2. **Activar la capa de presión** (🔴). Señalar: "la presión es máxima donde la velocidad de la partícula es máxima (cruza el eje), no donde está más arriba".

3. **Activar partículas** (🟡🔵). Mostrar compresión (amarillo) y rarefacción (azul). Conectar con el Slinky: "las espiras juntas = compresión, separadas = rarefacción".

4. **Variar frecuencia**: subir de 2 a 6 ciclos. Preguntar: "¿qué cambia? ¿Qué pasa con λ?"
   
5. **Variar amplitud**: ¿cambia la frecuencia? No. "La amplitud es independiente — es el volumen, no el tono".

6. **Variar fase**: mover 90° o 180°. "Esto es lo que pasa cuando dos señales idénticas llegan desfasadas — pueden cancelarse".

---

## 3. Práctica — Exploración guiada

### Actividad en Classroom

Publicar como **Tarea** en Google Classroom:

**Título:** Sesión 2 — Parámetros de una onda sonora

**Instrucciones:**

1. Abrí la [simulación interactiva](https://joseurgilesc.github.io/Ac-stica2026/unidades/U-1-fundamentos-medicion/sesion-02/simulacion.html).
2. Configurá 3 combinaciones diferentes y capturá la pantalla en cada una:
   - **Configuración A**: frecuencia baja (1-2) + amplitud alta (140-160)
   - **Configuración B**: frecuencia alta (6-8) + amplitud baja (30-50)
   - **Configuración C**: frecuencia media (3-4) + fase 180°
3. Completá esta tabla y adjuntala como PDF o Google Docs:

| Parámetro | ¿Qué cambia visualmente? | ¿Qué cambia auditivamente? |
|---|---|---|
| Amplitud | | |
| Frecuencia | | |
| Fase | | |
| Velocidad de animación | | |

4. Respondé en el mismo documento:
   - ¿Por qué el sonido en el aire es una onda longitudinal y no transversal?
   - ¿Qué pasaría si no existiera un medio elástico entre la fuente y el receptor?

**Fecha de entrega:** [definir según calendario]

### Rúbrica rápida (opcional, formativa)

| Criterio | ✅ Logrado | ⚠️ En proceso | ❌ No logrado |
|---|---|---|---|
| Capturas de 3 configuraciones | 3 capturas con valores visibles | 2 capturas o sin valores | 1 o ninguna |
| Tabla de parámetros | 4 filas completas con descripciones precisas | Completa pero descripciones vagas | Incompleta |
| Preguntas de reflexión | Ambas respondidas con argumentos técnicos | Una respondida | Sin responder |

---

## 4. Cierre — Conexión con producción musical

### Discusión guiada (10-15 min)

- "Si la longitud de onda de 50 Hz es de casi 7 metros, ¿qué implica eso para una cabina de grabación de 3×3 m?"
- "¿Por qué un ingeniero de mezcla necesita entender la diferencia entre fase y polaridad?"
- "En un concierto al aire libre, ¿por qué los graves se escuchan a mayor distancia que los agudos?"

### Registro en bitácora

Cada estudiante debe escribir en su bitácora digital:

> *"Hoy aprendí que la frecuencia determina el tono y la amplitud el volumen. La fase puede hacer que dos ondas se cancelen. Lo más importante: el sonido necesita un medio elástico para propagarse. Sin aire, no hay sonido."*

---

## Recursos adicionales para el docente

- [Simulación local de la sesión](simulacion.html) — abrir en navegador directamente
- [p5.js Web Editor](https://editor.p5js.org/) — para modificar el código si se desea
- Visualizador de espectro: [Spectrum Analyzer](https://academo.org/demos/spectrum-analyzer/) (online)
- App de osciloscopio para móvil: buscar "Oscilloscope" en tienda de apps

---

## Posibles dificultades

| Problema | Solución |
|---|---|
| Estudiante no entiende la diferencia entre frecuencia y tono | Usar analogía: "frecuencia es lo que mide el afinador, tono es lo que percibe el músico" |
| Confusión entre fase y polaridad | La fase es un desfase temporal (0°-360°), la polaridad es invertir + y − |
| "¿Para qué sirve esto en producción musical?" | Conectar con ecualización (frecuencias), paneo (fase), acústica de sala (longitud de onda) |

---

*Guía docente — Acústica Aplicada a la Producción Musical*
