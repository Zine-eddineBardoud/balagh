# Balagh — Smart Towing Management & Owner Notification System

**Presentation deck** · SupMTI — Projet Interdisciplinaire  
**Authors:** Bardoud Zine-eddine · Ait Boutaal Mohamed  
**Format:** Copy each slide into PowerPoint / Google Slides (one section = one slide)

---

## Slide 1 — Title

**Smart Towing Management & Owner Notification System**

*Vehicle Impound Mobile Web App*

- Bardoud Zine-eddine  
- Ait Boutaal Mohamed  
- SupMTI — Projet Interdisciplinaire de Découverte de la Recherche  

**Speaker note:** Introduce the team and the goal: connect officers and car owners in real time when a vehicle is impounded.

---

## Slide 2 — The Problem

**Every day, car owners return to an empty parking spot with no idea what happened.**

| Pain point | Impact |
|------------|--------|
| **No notification** | Owners are not told their car was towed |
| **Unknown location** | No way to find which garage has the vehicle |
| **Hidden fees** | Storage charges accumulate without visibility |
| **No transparency** | No proof of why the car was impounded |

**Speaker note:** Stress frustration, wasted time, and unfairness — this is the “before” state cities and drivers face today.

---

## Slide 3 — Our Solution

**A two-panel mobile system connecting officers and car owners in real time.**

### Officer / Agent panel
1. Scan license plate → auto-fill owner data  
2. Take violation photos (GPS + timestamp)  
3. Select violation type & status  
4. Assign car to a specific garage  

### Car owner panel
1. Instant push / SMS notification  
2. View violation photos & proof  
3. See garage location on map  
4. Pay fees online & get release code  

**Speaker note:** One product, two roles — same incident, synchronized experience.

---

## Slide 4 — User journey (parallel flow)

```
OFFICER                          SYSTEM                         OWNER
────────                         ──────                         ─────
Spots illegal parking      →     (—)                      →     (—)
Scans plate & photos       →     Auto-fills owner         →     (—)
Selects violation/status   →     Logs incident            →     (—)
Assigns garage             →     Confirms tow             →     Notification
       │                         Notifies owner           →     Views proof
       │                         Stores evidence          →     Checks map
       └─ Confirm ─────────────► Generates case ─────────►     Pays & retrieves
```

**Speaker note:** Walk through left to right — officer triggers, system links both sides, owner reacts immediately.

---

## Slide 5 — Live demo: Officer flow (3 steps)

**Step 1 — Scan** (`/officer`)  
- Camera viewfinder UI  
- Simulated plate capture → registry lookup  

**Step 2 — New impound** (`/officer/new-impound`)  
- Matched license plate  
- Auto-filled: owner, vehicle, GPS location, time  
- Officer selects violation & status, optional notes  

**Step 3 — Document & assign** (`/officer/document-assign`)  
- Evidence photos (GPS-tagged)  
- Choose nearest open garage  
- **Confirm & notify owner** → case sent to owner app  

**Speaker note:** Run the demo live from `D:\Courses\CarImpound` with mobile device mode in the browser.

---

## Slide 6 — Live demo: Owner flow

**My vehicle** (`/owner`)  
- Alert: “Your car was towed”  
- Plate, model, violation, status, evidence photos  
- Tow location (transparency)  

**Pay & retrieve** (`/owner/pay-retrieve`)  
- Map + garage details + fee breakdown (MAD)  
- Online payment simulation  
- **Release code** → show at garage  
- **Done** → completes simulation  

**Speaker note:** Emphasize that data comes from the officer session — same plate, violation, and garage.

---

## Slide 7 — Key features

| Feature | Benefit |
|---------|---------|
| **License plate recognition** | Faster intake, fewer errors |
| **Real-time notifications** | Owner acts quickly → less storage cost |
| **Digital proof (GPS + photos)** | Legal evidence + owner trust |
| **Garage locator + drive time** | Clear path to retrieve vehicle |
| **Online payment + release code** | Arrive at garage with fees already cleared |
| **Linked simulation** | Officer confirm → owner sees case instantly |

**Speaker note:** Tie each feature to a stakeholder win: city, officer, owner.

---

## Slide 8 — Technical stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 16 (App Router), TypeScript |
| **Styling** | Tailwind CSS v4 — mobile-first UI |
| **State (demo)** | React Context + localStorage |
| **Icons** | Lucide React |
| **Target** | Mobile web (responsive, max-width phone frame) |

**Architecture (prototype):**  
- Static UI screens + shared impound state  
- Ready for backend: API, LPR, push/SMS, payment gateway, maps  

**Speaker note:** Honest scope — this is a high-fidelity prototype; production would add server, auth, and real integrations.

---

## Slide 9 — UI/UX highlights

- Role-based home (Officer vs Vehicle Owner)  
- Step progress indicator (Scan → Details → Assign)  
- Sticky action buttons, hidden scrollbars (native-app feel)  
- Officer success screen + owner empty state when no case  
- End-to-end simulation with **Done** to reset  

**Speaker note:** Show 2–3 screenshots from the app on this slide.

---

## Slide 10 — Expected impact

| Metric | Target |
|--------|--------|
| Fee resolution | **Up to 3× faster** |
| Documentation | **100% digital** paper trail |
| Stakeholders | Fairer process for **cities, officers, and owners** |

**Vision:** A smarter, faster, fairer impound process.

**Speaker note:** These align with the project PDF — cite as project goals, not measured results yet.

---

## Slide 11 — Future improvements

- **Multi-language support** (tourists towed abroad)  
- **Admin dashboard** — violation zones, revenue, statistics  
- **Receipt & history** — digital archive for owners  
- **Appeal / dispute** — one-tap complaint ticket  
- **Production:** real camera, Maps API, Stripe/CMI payment, Firebase push  

**Speaker note:** Shows roadmap beyond the course prototype.

---

## Slide 12 — Thank you

**Questions?**

**Try the demo**  
```bash
cd D:\Courses\CarImpound
npm install
npm run dev
```  
Open http://localhost:3000 — use Chrome device mode (iPhone).

**Repository / project folder:** `CarImpound`

---

# Quick demo script (5–7 minutes)

1. **Home** → Choose **Officer / Agent**  
2. **Capture** plate → **Continue** on New impound (show registry card)  
3. Change violation if needed → **Continue**  
4. Pick garage (scroll list) → **Confirm & notify owner**  
5. **View owner app** → show notification + tow details  
6. **Pay & retrieve** → pay → release code → **Done**  
7. Optional: **New impound** on officer side to show reset  

---

# One-slide elevator pitch (30 seconds)

> When a car is towed today, owners often discover an empty space with no information. Our **Balagh** app gives officers a mobile workflow to scan the plate, document the violation with GPS proof, and assign a garage — while owners get an instant notification, see evidence, navigate to the lot, pay online, and receive a release code. We built a **mobile-first Next.js prototype** that simulates the full journey for both roles in one linked demo.

---

# Suggested slide design

- **Officer theme:** Blue (`#1d4ed8`)  
- **Owner theme:** Green (`#3d632d`)  
- **Background:** Light gray `#f4f6f8`  
- **Font:** Geist or similar clean sans-serif  
- **Screenshots:** Home, New impound (registry card), Owner alert, Pay & release code  
