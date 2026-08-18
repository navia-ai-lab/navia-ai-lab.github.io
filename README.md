# NAVIA Website Prototype

A responsive, dependency-free single-page website for:

**NAVIA — Neurodiversity Assessment and Voice-enabled Intervention AI**

## Included
- Responsive landing page
- Mobile navigation
- Therapist-focused progress tracking section
- Speech & language / social communication features
- Social story and script-generation descriptions
- Parent collaboration workflow
- Responsible-AI / privacy section
- FAQ
- Contact / early-access form UI
- Accessible semantic HTML
- No external libraries, fonts, or images required

## Run locally
Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Before production
Replace:
- `hello@navia.example`
- prototype contact-form behavior in `script.js`
- privacy copy with your approved institutional/privacy policy
- any product claims with claims supported by your validation studies
- "Not a medical device" language based on your intended regulatory pathway

The current copy intentionally positions NAVIA as clinician-support software rather than an automated diagnostic system.
