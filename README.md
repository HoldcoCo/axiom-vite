# AXIOM — FY2026 Year-End Landing

React + Vite.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Structure

- `src/App.jsx` — the whole page, plus the calendar, thank-you and no-booking views (state machine: `landing → calendar → thanks`, or `landing → thanks` for unqualified).
- `src/api.js` — integration points. Replace `qualify`, `submitLead`, `confirmBooking`, `isDayFull`, `isSlotTaken` with your CRM / booking system.
- `src/index.css` — resets, keyframes and hover/focus states.
- `public/assets/` — logos. Add `public/og-image.png` (1200×630) for link previews.

## Props on `<App />`

- `showQuote` (boolean) — show the auditor quote instead of the "[X] conversations" fallback.
- `previewState` — `"landing" | "calendar" | "thanks" | "nobooking"` to jump straight to a view.
