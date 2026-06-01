# 💍 Wedding Website (Bergans 2027)

A custom wedding website built with **React + Vite**, featuring event details, wedding party info, attire guides, checklists, and a timeline.

🌐 Live Site:  
https://mamcgovern.github.io/WeddingPlanning/

---

## ✨ Features

- 📅 Event schedule pages (Bachelor Party, Rehearsal, Wedding Day)
- 👗 Bridesmaid & Groomsmen attire guides
- 🧾 Interactive checklists for wedding party members
- 🕰️ Wedding timeline with formatted dates and countdowns
- 🧑‍🤝‍🧑 Wedding party bios with photos
- 📱 Fully responsive design (mobile + desktop)
- ⚡ Client-side routing using `HashRouter` (GitHub Pages compatible)

---

## 🛠️ Tech Stack

- React
- Vite
- React Router DOM (HashRouter)
- CSS (custom styling + Bootstrap optional)
- GitHub Pages (deployment)

---

## 🚀 Running Locally

Clone the repo:

```bash
git clone https://github.com/mamcgovern/WeddingPlanning.git
cd WeddingPlanning/bergans2027
```

Install Dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

http://localhost:5173

---
## 🏗️ Build for Production

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---
## 🌐 Deployment (GitHub Pages)

This project is deployed using gh-pages.

To deploy:

```bash
npm run build
npm run deploy
```

---
## ⚙️ Important Config Notes
Vite Base Path

Because the site is hosted on GitHub Pages:

```bash
base: '/WeddingPlanning/'
```

---
## Routing

This project uses:

<HashRouter>

This ensures routes work correctly on GitHub Pages.

Example routes:

/#/
/#/events
/#/events/bach
/#/bridesmaids