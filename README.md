/_
Starter scaffold for "Irish Twin Towns Interactive Map"
_/

// File: README.md

# Irish Twin Towns Interactive Map

An interactive web map that displays towns and cities in Ireland which are twinned with other places around the world. Clicking on a town reveals its international twin(s) with popups and visual connections.

Built using **React**, **React-Leaflet**, **Tailwind CSS**, and optionally **Supabase** for dynamic data.

---

## Live Demo

[🔗 View Live on Vercel](https://your-vercel-link.vercel.app)

---

## Features

- 🗺️ Interactive map of Ireland with clickable towns
- 🌐 Popups showing each town’s twin locations worldwide
- 🔗 Lines connecting Irish towns with their twin locations
- 📱 Fully responsive for mobile and desktop
- 📂 Easily extendable with new data

---

## Tech Stack

| Layer       | Tech                        |
| ----------- | --------------------------- |
| Frontend    | React + Vite + TypeScript   |
| Styling     | Tailwind CSS                |
| Mapping     | React-Leaflet + Leaflet     |
| Hosting     | Vercel                      |
| Optional DB | Supabase (PostgreSQL + API) |

---

## Example Town Data

```json
{
  "name": "Portlaoise",
  "coordinates": [53.0345, -7.2995],
  "twins": [
    {
      "name": "Coulounieix-Chamiers",
      "country": "France",
      "coordinates": [45.1746, 0.6913]
    }
  ]
}
```

---

## Getting Started

```bash
git clone https://github.com/yourusername/irish-twin-towns-map.git
cd irish-twin-towns-map
npm install
npm run dev
```

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Author

**Cúán**

---

// File: LICENSE

MIT License

Copyright (c) 2025 Cúán

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights

... (full MIT license as above)

---

// File: towns.json (sample data)

[
{
"name": "Portlaoise",
"coordinates": [53.0345, -7.2995],
"twins": [
{
"name": "Coulounieix-Chamiers",
"country": "France",
"coordinates": [45.1746, 0.6913]
}
]
},
{
"name": "Galway",
"coordinates": [53.2707, -9.0568],
"twins": [
{
"name": "Seattle",
"country": "USA",
"coordinates": [47.6062, -122.3321]
}
]
}
]

---

// File: .gitignore

node_modules/
dist/
.env

---

// Initial folder structure (React + Vite scaffold)

/src
/components
Map.tsx
/data
towns.json
App.tsx
main.tsx
/index.html
tailwind.config.ts
vite.config.ts
postcss.config.js
package.json
