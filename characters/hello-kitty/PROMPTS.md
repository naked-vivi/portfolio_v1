# Hello Kitty mascot artwork

Generated with the built-in imagegen tool, with `transparent_background: true`.
The directions sheet is the reference for the reactions sheet.
Source PNGs stay here so the atlases can be rebuilt. The website serves the
optimized WebP atlases from `public/mascots/hello-kitty-{directions,reactions}.webp`.

Preparation removed disconnected alpha specks smaller than 100 pixels per cell
and the 24-pixel strip of previous-row bleed above the middle reaction row.
The actual character drawings and floating reaction symbols were preserved.
The page-mascot build then aligned the shoulders and generated the WebP atlases.

## Directions

Use case: stylized-concept. Asset type: production cursor-tracking mascot sprite sheet, DIRECTIONS.
Generate a square 3x3 grid sprite sheet of a chibi Hello Kitty: iconic white cat, oval head, two small triangular ears, three black whiskers on each cheek, little yellow oval nose, black oval eyes, no mouth, a strawberry-pink/red bow on her left ear (viewer right), a pastel rose-pink pinafore over a cream blouse. Cute storybook sticker art: clean bold charcoal outlines with weight variation, tiny white catchlights, soft pink cheek blush, warm saturated pinks, subtle cream shaded edges. Charming, soft, polished. Not photorealistic or glossy 3D.
This is NINE HEAD DIRECTIONS, not expressions. Keep one calm expression, rotate whole head visibly, keep bow on the same anatomical ear.
LAYOUT exactly 3 columns by 3 rows evenly spaced on genuinely transparent background. Each drawing is head plus upper shoulders, centered, same head size in all nine cells.
FRAMING PORTRAIT BUST: head and shoulders only, NO arms, hands, legs or lower body. Shoulders are lowest point, about TWO THIRDS the head width. The head is large and dominant but body visible.
MOST IMPORTANT: draw BODY ONCE and reuse its exact same shape, width and position in every cell. Body always faces viewer. Only head rotates on the unchanging chest. Pink pinafore and cream blouse must be IDENTICAL in all 9 cells.
MARGINS: mascot occupies about 70% of each cell height, wide empty gap on ALL four sides. Shoulders stop WELL SHORT of cell bottom. No part crosses cell boundaries. Equal scale and baselines.
Row 1 left to right: up-left, up, up-right. Row 2: left, straight at viewer, right. Row 3: down-left, down, down-right. Left means viewer's LEFT, right viewer's RIGHT. Whole head turns, nose and ear placement reflect turn.
NO floating hearts or sparkles or symbols. No text, no labels, no borders, no shadows outside character, no background color. Square PNG at least 1024x1024, REAL ALPHA transparency.
A second matching expressions sheet will follow, so keep this character design easy to reproduce.

## Reactions

Use case: stylized-concept. Asset type: EXPRESSIONS sprite sheet matching reference directions.
The reference image is the DIRECTIONS sheet for chibi Hello Kitty. Produce its MATCHING 3x3 EXPRESSIONS sheet. Copy this exact character: white oval cat head, two triangular ears, THREE BLACK WHISKERS on EACH CHEEK, tiny yellow oval nose, black eyes, strawberry-pink/red bow on her left ear (viewer's right), pastel rose-pink pinafore with two pink buttons over cream blouse. Same bold charcoal outline weight, creamy warm white shading, pink cheek blush and pink/red palette. Match every detail. NO MOUTH, consistent with Hello Kitty, so convey each reaction through eyes and cheek blush.
In all NINE CELLS the head faces STRAIGHT AT VIEWER. Only eyes, blush and requested floating symbols change.
CRITICAL: same art style, same palette, same line weight, same proportions, EXACT SAME SCALE AND POSITION as center cell of attached sheet. Copy the SAME body, cream collar and pink pinafore of the reference into all 9 cells. Body width and baseline MUST stay fixed.
LAYOUT 3 columns x3 rows evenly spaced on a fully transparent background, head and shoulders only, NO arms/hands/legs. Wide empty margins on all 4 sides, including floating symbols, nothing touches cell boundaries, clear space below shoulders. Body about 2/3 head width.
The 9 expressions left to right top to bottom:
1. Closed eyes, two happy upward arcs. No symbol.
2. Same happy arc eyes plus one SMALL RED HEART floating above her head.
3. Same happy arc eyes plus THREE SMALL YELLOW SPARKLES above her head.
4. Wide round surprised eyes, tiny yellow nose, no mouth.
5. Both eyes bright star shapes, happy cheek blush.
6. Happy closed arc eyes, strong pink blush on both cheeks.
7. Sleeping closed eyes plus small blue z z z floating above her head.
8. Both eyes spiral swirls, dizzy. Keep NO MOUTH.
9. Delighted, eyes joyful closed upward curves, very rosy cheeks.
All nine busts same center and height as reference center cell. The bow remains on viewer's right in ALL cells.
No text except tiny z z z, no labels, borders, backdrop or drop shadows. Square PNG at least 1024x1024 with REAL ALPHA transparency. Preserve cream white interior; all empty space transparent.
