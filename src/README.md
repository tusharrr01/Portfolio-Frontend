## Tushar Kaklotar – Portfolio Frontend (Client)

Modern, responsive single‑page portfolio built with **React**, **Vite**, and **Tailwind CSS**, featuring smooth section scroll, project modals, and a contact form integrated with the backend API.

### Preview

> Replace these with your own screenshots if you like.

![Hero section](./public/Projects_img/TextUtils.png)

![Projects grid](./public/Projects_img/Birthday.png)

---

### Features

- **Smooth single‑page layout**: Hero, About, Skills, Projects, and Contact sections with animated scroll buttons between them.
- **Responsive design**: Looks great on mobile, tablet, and desktop.
- **Project modals**:
  - Handles projects with **one repo** or separate **frontend/backend** repos.
  - Shows **Live demo** button only when a demo URL is available.
  - Falls back to **placeholder images** when a project image is missing.
- **Smart contact form**:
  - Client‑side validation (name, valid email, message length).
  - Sends messages to the backend API (`/api/send-email`).
  - Inline success and error feedback states.
- **Clean UI**: Tailwind‑based theme with cards, gradients, and hover animations.
- **Keyboard & UX details**: Click‑outside to close project modal, scroll buttons to move between sections, etc.

---

### Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: `lucide-react`, `remixicon`
- **HTTP Client**: `axios`

---

### Project Structure (Client)

```text
client/
├── public/
│   ├── illustration.png
│   └── Projects_img/
│       ├── Birthday.png
│       ├── Potato_Press.jpg
│       └── TextUtils.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── lib/
│   │   ├── skills.js
│   │   └── projects.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

### Environment Variables

Create a `.env` file inside `client/`:

```bash
VITE_API_URL=http://localhost:5000
```

For production, point `VITE_API_URL` to your deployed backend URL, for example:

```bash
VITE_API_URL=https://your-backend-domain.com
```

---

### Getting Started

#### 1. Install dependencies

```bash
cd client
npm install
```

#### 2. Run the dev server

```bash
npm run dev
```

Vite will start the app (by default) on `http://localhost:5173` or `http://localhost:3000` depending on your setup.

#### 3. Build for production

```bash
npm run build
```

The optimized assets will be generated in `client/dist/`.

---

### Available Scripts

- **`npm run dev`** – start Vite dev server with hot reload.
- **`npm run build`** – build the app for production.
- **`npm run preview`** – preview the production build locally.

---

### Customizing Content

#### Projects

Edit `src/lib/projects.js`. Each project can support:

```js
{
  id: 1,
  title: 'HATRO-X',
  description: 'Short description...',
  tech: ['React', 'Node.js', 'MongoDB'],
  image: 'https://...',

  // if you have separate repos
  githubFrontend: 'https://github.com/yourname/project-frontend',
  githubBackend: 'https://github.com/yourname/project-backend',

  // or a single repo
  github: 'https://github.com/yourname/project',

  // live demo is optional
  demo: 'https://your-demo-url.com' // or null if not deployed yet
}
```

The UI will:

- Show **Frontend repo** / **Backend repo** buttons when `githubFrontend` / `githubBackend` are present.
- Show a single **View repository** button when only `github` is present.
- Show **Open live demo** button only when `demo` is a valid URL.
- Render a subtle “Live demo not available yet for this project.” note when `demo` is missing.

#### Skills

Update `src/lib/skills.js` to change skill categories:

```js
export const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'JavaScript']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB']
  }
];
```

These appear as animated cards in the Skills section.

---

### Contact Form Behavior

The contact form in `Contact.jsx`:

- Validates fields on submit:
  - Name required.
  - Email required and must be valid.
  - Message required with a minimum length of 10 characters.
- Shows inline validation messages under each field.
- Calls the backend at:

```text
POST ${VITE_API_URL}/api/send-email
```

Make sure your backend is running and CORS is configured to allow the client origin.

---

### Styling & Theme

Most of the design tokens (colors, spacing, etc.) are configured in:

- `tailwind.config.js` – color palette and theme extensions.
- `src/styles/globals.css` – base styles and font imports.

You can quickly re‑skin the portfolio by updating the primary and accent colors in `tailwind.config.js` and adjusting typography in `globals.css`.

---

### Related Projects

This client is designed to work together with the Express backend in the `server/` folder of this repo. See the server README in `server/README.md` for API and deployment details.

