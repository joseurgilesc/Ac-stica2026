# Design: Preparar Sesiones Acústica

## Technical Approach

Generate 29 MkDocs session pages + 29 guías docentes from Everest & Pohlmann (2009) _Master Handbook of Acoustics_. Each session follows the validated Sesión 2 template: collapsible glossary, theory blocks with figure references, MathJax formulas, and embedded reusable simulations. Delivery via chained PR batches grouped by unit.

## Architecture Decisions

### Decision: Batch Strategy

| Option | Tradeoff | Decision |
|--------|----------|----------|
| 1 session/PR | Clean review, 29 PRs | Rejected: excessive overhead |
| 4-5 sessions/PR | Fast delivery, 6-7 PRs | Rejected: ~1,100 lines, over budget |
| 2-3 sessions/PR by unit | ~400-600 lines, semantic coherence | **Selected** → 12 batches |

**Rationale**: Each pair averages ~285 lines (index.md ~145 + guide ~140). Two sessions ≈570, three ≈855. Target ≤3 sessions/batch. Unit boundaries provide natural scope. Chained PRs branch from base.

**Batches (12 PRs)**:

| Batch | Unit | Sessions | Est. Lines |
|-------|------|----------|------------|
| 1 | U1 | 1, 3 | ~355 |
| 2 | U1 | 4, 5 | ~460 |
| 3 | U1 | 6, 7, 8 | ~570 |
| 4 | U2 | 9, 10, 11 | ~650 |
| 5 | U2 | 12, 13, 14 | ~540 |
| 6 | U2 | 15 | ~240 |
| 7 | U3 | 17, 18, 19 | ~650 |
| 8 | U3 | 20, 21, 22 | ~630 |
| 9 | U3 | 23, 24 | ~460 |
| 10 | U3 | 25, 26 | ~460 |
| 11 | U4 | 27, 28, 29 | ~650 |
| 12 | U4 | 30, 31 | ~520 |

### Decision: Everest Content Extraction

**Choice**: Agent reads PDF pages via PyPDF2 per session mapping. Chapter/page ranges in mapping table below.
**Rationale**: Pdftotext unavailable in environment; PyPDF2 works. Content fidelity requires page-level lookup, not chapter-summary guessing.

### Decision: Template Fidelity

**Choice**: Hard constraint — every session MUST replicate Sesión 2 structure. Checklist enforced per session:
1. Header with `# Sesión N: Título` + metadata
2. `??? info` collapsible glossary with anchors
3. `???+ note` collapsible theory blocks (≥2)
4. `\boxed{}` display formulas with nomenclature tables (except session 1)
5. `> Insertar Fig. X-Y del Everest:` blockquotes per applicable figure
6. `<iframe>` for reusable sims where applicable
7. `*Basado en: Everest...*` footer

### Decision: Simulation Reuse

**Choice**: Embed only existing `simulacion.html` and `simulacion-mas.html` from `sesion-02/`. No new files.
**Mapping**: `simulacion-mas.html` → sessions 2 (done), 3. `simulacion.html` → sessions 3, 4, 5.

## Generation Pipeline (sdd-apply per session)

```
1. Read session plan line → identify session number + topic
2. Extract PDF pages from mapping (PyPDF2) → curated theory content
3. Generate docs/unidades/U-{X}-*/sesion-{NN}/index.md (template-driven)
4. Generate docs/guias-docente/sesion-{NN}.md (template-driven)
5. Verify: mkdocs build --strict
```

Template anchors: every field (glossary entries, theory sections, formulas, figures, sims) is data-driven from the session plan + PDF extraction. No hardcoded content.

## File Structure

```
docs/unidades/U-{X}-{nombre}/sesion-{NN}/index.md   ← student page
docs/guias-docente/sesion-{NN}.md                     ← teacher guide
```

Unit mapping: sessions 1-8→U-1, 9-15→U-2, 17-26→U-3, 27-31→U-4. Directories already exist.

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `docs/unidades/U-1-*/sesion-{01,03..08}/index.md` | Modify | Replace placeholder with Everest content |
| `docs/unidades/U-2-*/sesion-{09..15}/index.md` | Modify | Replace placeholder |
| `docs/unidades/U-3-*/sesion-{17..26}/index.md` | Modify | Replace placeholder |
| `docs/unidades/U-4-*/sesion-{27..31}/index.md` | Modify | Replace placeholder |
| `docs/guias-docente/sesion-{01,03..31}.md` | Create | 29 new teacher guides |

## Everest Mapping (complete)

| Sesión | Título | Capítulo(s) | PDF pp. | Figuras sugeridas |
|--------|--------|-------------|---------|-------------------|
| 1 | Introducción a la acústica | Cap. 1 (Fundamentals) | 20-37 | Fig. 1-1: MAS masa-resorte, Fig. 1-3: Particle motion, Fig. 1-5: Compresión/rarefacción |
| 3 | Velocidad de propagación | Cap. 1 (Speed of Sound, Wavelength) | 20-37 | Fig. 1-2: Sine wave tracing, Fig. 1-7: λ y frecuencia, Fig. 1-6: Pressure variations |
| 4 | Señales periódicas y aperiódicas | Cap. 5 (Signals, Spectrum) | 88-113 | Fig. 5-1: Sine wave parameters, Fig. 5-5: Harmonic spectrum, Fig. 5-8: White/pink noise |
| 5 | Logaritmos y decibeles | Cap. 2 (Sound Levels/Decibel) | 38-51 | Fig. 2-1: Logarithmic scale, Fig. 2-3: dB reference chart |
| 6 | Nivel de presión sonora | Cap. 2 (SPL, SIL, SWL) | 38-51 | Fig. 2-4: Sound level meter, Fig. 2-6: Typical SPL values |
| 7 | Suma/resta de niveles | Cap. 2 + Cap. 10 (Comb-Filter) | 38-51, 154-169 | Fig. 2-5: dB addition chart, Fig. 10-1: Comb-filter response |
| 8 | Tipos de fuentes sonoras | Cap. 3 (Free Field, Directivity) | 52-57 | Fig. 3-4: Polar patterns, Fig. 3-5: Directivity factor |
| 9 | Propagación en campo libre | Cap. 3 (Free Field, Inverse Square) | 52-57 | Fig. 3-1: Spherical divergence, Fig. 3-2: Inverse square law |
| 10 | Absorción atmosférica | Cap. 3 + Cap. 8 (Refraction) | 52-57, 136-143 | Fig. 3-3: Atmospheric absorption, Fig. 8-3: Temperature gradients |
| 11 | Efecto del suelo | Cap. 8 (Refraction) | 136-143 | Fig. 8-1: Ray bending, Fig. 8-4: Shadow zone, Fig. 8-5: Wind effect |
| 12 | Diagramas de rayo | Cap. 6 (Reflection) + Cap. 8 | 114-125, 136-143 | Fig. 6-1: Specular reflection, Fig. 6-3: Ray tracing |
| 13 | Difracción | Cap. 7 (Diffraction) | 126-135 | Fig. 7-1: Diffraction edge, Fig. 7-3: Barrier insertion loss |
| 14 | Efecto Doppler | Cap. 3 (Free Field, Doppler) | 52-57 | Fig. 3-6: Moving source Doppler |
| 15 | Integración U1+U2 | Caps. 1-3, 5-8 | 20-143 | Review synthesis — reuse key figures from above |
| 17 | Sonido en interiores | Cap. 11 (Reverberation) | 170-197 | Fig. 11-1: Sound in room, Fig. 11-2: Energy balance |
| 18 | Coeficiente de absorción | Cap. 12 (Absorption) | 198-241 | Fig. 12-1: Absorption coefficients, Fig. 12-3: NRC chart |
| 19 | Reverberación | Cap. 11 (Reverb, Decay) | 170-197 | Fig. 11-3: Decay curve, Fig. 11-5: RT60 measurement |
| 20 | Cálculo de RT60 | Cap. 11 + Cap. 12 | 170-241 | Fig. 11-8: Sabine formula, Fig. 12-5: Absorption tables |
| 21 | Reflexiones tempranas | Cap. 6 (Reflection) + Cap. 10 | 114-125, 154-169 | Fig. 6-4: First reflections, Fig. 10-3: Precedence effect |
| 22 | Campo directo/reverberante | Cap. 3 + Cap. 11 | 52-57, 170-197 | Fig. 3-8: Direct/reverberant, Fig. 11-6: Critical distance |
| 23 | Interferencia | Cap. 10 (Comb-Filter) | 154-169 | Fig. 10-2: Superposition, Fig. 10-4: Standing wave |
| 24 | Modos de sala | Cap. 13 (Modal Resonances) | 242-275 | Fig. 13-1: Pipe resonance, Fig. 13-5: Mode distribution |
| 25 | Tratamiento de bajas frecuencias | Cap. 13 + Cap. 12 | 242-275, 198-241 | Fig. 13-8: Bass trap, Fig. 12-10: Helmholtz resonator |
| 26 | Difusión acústica | Cap. 9 (Diffusion) + Cap. 14 | 144-153, 276-295 | Fig. 9-1: Diffuse field, Fig. 14-3: QRD diffuser |
| 27 | Ruido de fondo | Cap. 16 (Interfering Noise) | 308-329 | Fig. 16-2: NC curves, Fig. 16-4: Noise sources |
| 28 | Transmisión de sonido | Cap. 16 (Transmission Loss) | 308-329 | Fig. 16-5: Mass law, Fig. 16-7: STC chart |
| 29 | Estructuras compuestas | Cap. 16 + Cap. 17 | 308-347 | Fig. 16-9: Double wall, Fig. 17-2: Flanking paths |
| 30 | Privacidad acústica | Cap. 17 (Ventilation, Vibration) | 330-347 | Fig. 17-4: Vibration isolation, Fig. 17-6: HVAC noise |
| 31 | Aplicación integral | Caps. 18-22 (Design cases) | 348-413 | Fig. 18-2: Listening room, Fig. 19-3: Studio layout, Fig. 22-1: Hall design |

## Interfaces / Contracts

Session index pages consume:
- PDF text via PyPDF2 (no API, filesystem read)
- Session plan via `plan_32_sesiones_acustica_produccion_musical.txt`
- Simulation HTML files via relative `<iframe src="simulacion*.html">`

No new APIs. No config changes.

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Build | All 29 sessions render | `mkdocs build --strict` per batch |
| Template | Each session meets spec | Checklist verification: glossary, ≥2 theory blocks, ≥1 formula, ≥1 figure ref |
| Formula | MathJax renders | Visual inspection light+dark theme (manual per batch) |
| Links | All anchors resolve | `[Hz](#hz)` style cross-references |

## Threat Matrix

N/A — content generation. No routing, shell, subprocess, VCS/PR automation, executable-file classification, or process-integration boundary.

## Migration / Rollout

No migration required. Content-only change. Rollback: `git revert` on delivery branch.

## Open Questions

None. All architectural decisions resolved.
