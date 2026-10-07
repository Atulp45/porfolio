---
name: Glacial Intelligence
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3f4850'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#4648d4'
  on-tertiary: '#ffffff'
  tertiary-container: '#6063ee'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies an ultra-refined, light frozen glass aesthetic tailored for a technical AI/ML engineer. It merges academic rigor with avant-garde engineering through frosted glassmorphism, translucency, and spectral crystalline refractions. The atmospheric tone is crystalline, focused, and immaculate—evoking cold compute cleanrooms, optical lattice computing, and glacial precision.

The target audience comprises research scientists, technical recruiters, lab directors, and engineering peers. Rather than relying on dark sci-fi tropes or flat institutional conventions, the interface projects technical authority through high-translucency layers, pristine contrast, micro-glowing structural seams, and surgical typographical structure.

## Colors

The palette revolves around light diffraction through sub-zero ice. 

- **Primary (`#0284c7` - Deep Ice Cyan):** Represents core computational logic, anchor actions, and dominant visual weight.
- **Secondary (`#06b6d4` - Glacial Cyan):** Powers specular highlights, luminous inner borders, active states, and radiant badges.
- **Tertiary (`#6366f1` - Prism Violet):** Used sparingly to simulate chromatic aberration across glass bevels and denote specialized machine learning checkpoints or neural pipeline stages.
- **Neutral (`#64748b` - Slate Glaze):** Calibrated with cool blue undertones to anchor structural lines, secondary telemetry text, and geometric framing.

Background surfaces rely on crisp, high-value off-whites (`#f8fafc` to `#f1f5f9`) infused with radial atmospheric blurs of pale azure (`rgba(6, 182, 212, 0.08)`) and ice mist (`rgba(99, 102, 241, 0.04)`), allowing frosted glass layers to produce authentic physical refraction.

## Typography

The typographic hierarchy establishes clear technical partitioning:
- **Headings (Space Grotesk):** Provides structured geometric cadence with distinctive algorithmic character for research titles and section anchors.
- **Body & Prose (Geist):** Delivers clean neutral legibility, sharp terminal precision, and optimized density for academic summaries, thesis statements, and project walkthroughs.
- **Data & Telemetry (JetBrains Mono):** Drives metadata, hyperparameter readouts, arXiv identifiers, code metrics, and taxonomy tags.

Uppercase transforms with increased letter spacing are strictly reserved for `label-md` and `label-sm` when framing algorithmic architecture labels, benchmark statuses, or node paths.

## Layout & Spacing

Layouts follow an airy 12-column fluid grid system across desktop viewports, consolidating to 8 columns on tablet, and 4 columns on mobile. 

Wide margins preserve optical clarity, ensuring glass panels maintain breathing room against diffuse ambient backdrops without edge clustering. Spacing rules emphasize hierarchical grouping: dense telemetry displays (loss curves, model parameters, tech stacks) employ tighter gaps (`space-xs`, `space-sm`), while macro sections and research project spotlights command broad structural voids (`space-xl`, `margin`).

## Elevation & Depth

Depth is articulated entirely through optical physics—frosted refraction, light diffusion, and sub-pixel spectral boundaries—rather than traditional heavy drop shadows.

1. **Base Layer (Ground):** Luminous matte canvas (`#f8fafc`) accented with subtle ambient radial gradients of soft ice-blue and cyan.
2. **Glass Base (Standard Cards & Panels):**
   - Background: `rgba(255, 255, 255, 0.55)`
   - Filter: `backdrop-filter: blur(16px) saturate(160%)`
   - Border: `1px solid rgba(255, 255, 255, 0.7)` with an inner drop reflection `box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.9), 0 4px 20px -2px rgba(2, 132, 199, 0.05)`
3. **Glass Floating (Navigation, Modal Surfaces, Active Cards):**
   - Background: `rgba(255, 255, 255, 0.75)`
   - Filter: `backdrop-filter: blur(24px) saturate(180%)`
   - Border: `1px solid rgba(6, 182, 212, 0.35)`
   - Shadow: `0 12px 32px -4px rgba(2, 132, 199, 0.12), inset 0 0 12px 0 rgba(255, 255, 255, 0.8)`
4. **Specular Glows:** Hover and focused states invoke an iridescent halo along the border: `box-shadow: 0 0 16px 2px rgba(6, 182, 212, 0.25), 0 0 1px 1px rgba(255, 255, 255, 1)`.

## Shapes

The interface balances cold crystalline optics with precision-engineered ergonomics using Level 2 roundedness (`0.5rem` base, `1rem` on container panels, `1.5rem` on prominent glass hero surfaces). 

Edges feel polished like cut optical lenses rather than blunt geometry or casual pill shapes. Form elements and buttons inherit the `0.5rem` radius, presenting clean corners with micro-radii that prevent visual harshness while honoring structural mathematical aesthetics.

## Components

### Buttons
- **Primary:** Translucent crystalline gradient background (`linear-gradient(135deg, rgba(2, 132, 199, 0.9), rgba(6, 182, 212, 0.85))`), crisp white text, hairline white border (`rgba(255, 255, 255, 0.6)`), and an inner top specular glow. Hover state heightens cyan luminosity and expands the external optical blur.
- **Secondary (Glass Lens):** Semi-opaque white glass (`rgba(255, 255, 255, 0.6)`), primary accent text (`#0284c7`), and `1px` border of `rgba(6, 182, 212, 0.3)`. Hover induces `backdrop-filter: blur(20px)` and soft ice cyan fills.
- **Ghost/Tertiary:** Minimalist surface, slate text, glowing underline or borderless lens reaction on hover.

### Frosted Cards & Containers
- Cards feature layered refraction: `backdrop-filter: blur(16px)`, variable border-top highlighting (`rgba(255, 255, 255, 0.9)`) simulating light hitting the top edge of a frozen glass sheet, and softer bottom borders (`rgba(100, 116, 139, 0.15)`).
- Padding scales across `space-md` to `space-lg`.

### Navigation Bar
- A floating capsule or fixed glass bar detached from screen edges.
- Background: `rgba(255, 255, 255, 0.65)` with `backdrop-filter: blur(20px) saturate(180%)`.
- Enclosed with a hairline border (`rgba(255, 255, 255, 0.8)`) and perimeter cyan radiance. Active navigation links display a subtle pill highlight with `rgba(6, 182, 212, 0.12)` fill.

### Tags, Badges & Chips
- Designed for model taxonomies (e.g., `PyTorch`, `Transformer`, `CUDA`, `Vision-Language`).
- Monospaced typography (`label-md`), semi-transparent ice-cyan backing (`rgba(6, 182, 212, 0.08)`), crisp cyan edge (`rgba(6, 182, 212, 0.25)`), and saturated slate-cyan text.

### Form Inputs & Telemetry Fields
- Glass inset inputs: `rgba(241, 245, 249, 0.6)` with inner shadow reflecting slight indentation into the frozen surface.
- Focus states invoke an iridescent transition: border changes to `#06b6d4` with a surrounding `4px` diffused cyan halo.

### Specialized AI/ML Domain Components
- **Model Metric Pill:** Dual-segmented micro-containers displaying benchmark loss/accuracy metrics with monospace figures and vivid cyan telemetry dots.
- **Code & Tensor Snippets:** Frosted sub-containers with an ultra-fine border (`rgba(255, 255, 255, 0.4)`), deep slate-indigo syntax coloring, and integrated glass copy buttons.
- **Pipeline Nodes:** Flowchart modules linked by iridescent light trails, housing ML architecture steps (Tokenize → Embed → Multi-Head Attention) in layered glassy tiles.