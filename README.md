# Jenil Patel | Premium Personal Portfolio

A luxury, fully responsive, and recruiter-focused developer portfolio website built from a complete resume analysis. Features smooth scrolling, high-fidelity glassmorphic panels, staggered transition animations, and a responsive tech-stack filter dashboard.

## 🚀 Tech Stack

- **Framework:** React.js 19 with TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS (premium dark theme with customized gold/indigo gradients)
- **Animations:** Framer Motion (for smooth entrance triggers & scroll reactions)
- **Icons:** Lucide Icons & React Icons
- **Contact Integration:** Formspree with client-side form validation and success confetti
- **Hosting Compatiblity:** 100% Static HTML/CSS/JS (perfect for GitHub Pages)

---

## 🛠️ Getting Started

To run the project locally or preview production bundles, ensure you have **Node.js (v18+)** and **npm** installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### 3. Build Production Target
Compiles and generates optimized assets in the `dist/` directory.
```bash
npm run build
```

---

## 📦 Deployment to GitHub Pages

This project is pre-configured for automated and manual deployment pipelines.

### Option A: Automatic Deployment (CI/CD - Recommended)
A GitHub Actions workflow is located at `.github/workflows/deploy.yml`. 
1. Push your code changes to your GitHub repository's `main` branch.
2. The GitHub Action will automatically compile the code and deploy it to the `gh-pages` branch.
3. Make sure to go to **Repository Settings -> Pages** and verify that the Source is set to **Deploy from a branch** and configured to use the `gh-pages` branch.

### Option B: Manual Command-Line Deployment
If you prefer deploying manually via commands:
1. Run the deploy script:
   ```bash
   npm run deploy
   ```
2. This runs `predeploy` (which builds the app) and uploads the contents of the `dist/` directory directly to the `gh-pages` branch of your repository.

---

## ✍️ Customizing the Contact Form

The contact form is pre-wired to submit entries asynchronously to **Formspree**. To receive messages:
1. Create a free form inbox on [Formspree](https://formspree.io).
2. Copy your form endpoint URL.
3. Open `src/data/resume.ts`.
4. Locate the `formspreeEndpoint` property at the bottom of the file:
   ```typescript
   formspreeEndpoint: "https://formspree.io/f/YOUR_ENDPOINT_ID"
   ```
5. Replace it with your endpoint URL, save, and redeploy!

---

## 📂 Project Structure

```text
src/
├── assets/         # Static visual resources
├── components/     # UI Sections (Hero, About, Skills, Experience, Projects, Contact, Footer)
├── data/           # Resume data store (resume.ts)
├── layouts/        # Page layout structure (Layout.tsx with CustomCursor)
├── styles/         # Global stylesheets & luxury animations (index.css)
├── App.tsx         # Main entry component
└── main.tsx        # React mounting entrypoint
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
