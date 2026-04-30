# Next.js Project Files Guide

A detailed explanation of all important files in your Next.js portfolio project.

---

## 📁 Core Application Files

### `app/page.tsx`
**Purpose:** The main homepage component of your application.

**What it does:**
- This is the file that renders when you visit the root URL (`/`)
- Contains all the visible content of your portfolio
- Includes sections: About, Skills, Projects, Experience, Contact
- Uses React components and JSX syntax

**Key parts:**
```tsx
export default function Home() {
  // Data arrays for projects, skills, experience
  const projects = [...];
  const skills = [...];
  const experience = [...];

  // Return JSX that gets rendered to HTML
  return (
    <div className="min-h-screen gradient-bg">
      {/* All your content goes here */}
    </div>
  );
}
```

**Beginner tips:**
- This is where you edit what users see on your homepage
- You can add more sections by copying existing `<section>` blocks
- The `className` attribute is like CSS classes but in JavaScript

---

### `app/layout.tsx`
**Purpose:** The root layout that wraps every page in your app.

**What it does:**
- Provides the HTML structure for all pages
- Sets up fonts and global styles
- Defines metadata (title, description) for SEO
- Wraps page content with consistent layout

**Key parts:**
```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children} {/* This is where page.tsx content goes */}
      </body>
    </html>
  );
}
```

**Beginner tips:**
- Edit this to change things that appear on EVERY page
- Add global fonts, scripts, or meta tags here
- The `{children}` is where each page's content gets inserted

---

### `app/globals.css`
**Purpose:** Global CSS styles for your entire application.

**What it does:**
- Imports Tailwind CSS framework
- Defines custom CSS classes and animations
- Sets up color variables and themes
- Contains the liquid glass animation styles

**Key sections:**
```css
@import "tailwindcss";  /* Import Tailwind CSS */

:root {
  --background: #ffffff;  /* CSS variables for colors */
  --foreground: #171717;
}

.glass {  /* Custom glass effect class */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

@keyframes liquidMove {  /* Animation keyframes */
  /* Animation steps */
}
```

**Beginner tips:**
- Add custom styles here that you want to use anywhere
- Tailwind classes are used in `className` attributes
- Custom animations go in the `@keyframes` sections

---

## ⚙️ Configuration Files

### `next.config.ts`
**Purpose:** Next.js framework configuration.

**What it does:**
- Controls how Next.js builds and runs your app
- Enables/disables features
- Sets up plugins and optimizations

**Common settings:**
```typescript
const nextConfig = {
  reactStrictMode: true,  /* Catches common React mistakes */
  swcMinify: true,        /* Uses faster minification */
};
```

**Beginner tips:**
- You rarely need to edit this file
- Leave it alone unless you know what you're doing
- Used for advanced configurations like image optimization, redirects

---

### `tsconfig.json`
**Purpose:** TypeScript compiler configuration.

**What it does:**
- Tells TypeScript how to compile your code
- Defines which features are allowed
- Sets up type checking rules

**Key settings:**
```json
{
  "compilerOptions": {
    "target": "ES2017",      /* JavaScript version to target */
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",       /* How to handle JSX */
    "strict": true,          /* Enable strict type checking */
    "esModuleInterop": true
  }
}
```

**Beginner tips:**
- TypeScript adds type safety to JavaScript
- This file controls how strict type checking is
- Errors in your code often come from TypeScript rules here

---

### `package.json`
**Purpose:** Project manifest and dependency manager.

**What it does:**
- Lists all libraries/packages your project needs
- Defines scripts to run your app
- Contains project metadata (name, version, author)

**Key sections:**
```json
{
  "name": "my-first-claude-project",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",        /* Start development server */
    "build": "next build",    /* Build for production */
    "start": "next start",    /* Start production server */
    "lint": "next lint"        /* Check code for errors */
  },
  "dependencies": {            /* Packages needed in production */
    "next": "^15.0.0",
    "react": "^19.0.0"
  },
  "devDependencies": {         /* Packages only for development */
    "typescript": "^5.0.0"
  }
}
```

**Beginner tips:**
- Run `npm install` to install all listed packages
- Use `npm run dev` to start your development server
- Add new packages with `npm install package-name`

---

### `postcss.config.mjs`
**Purpose:** PostCSS configuration for CSS processing.

**What it does:**
- Processes CSS before it reaches the browser
- Enables Tailwind CSS to work
- Can add plugins for CSS transformations

**What it looks like:**
```javascript
export default {
  plugins: {
    tailwindcss: {},  /* Enable Tailwind CSS */
    autoprefixer: {}, /* Add vendor prefixes automatically */
  },
};
```

**Beginner tips:**
- Required for Tailwind CSS to work
- You rarely need to edit this
- PostCSS transforms modern CSS for browser compatibility

---

## 🔍 Code Quality Files

### `eslint.config.mjs`
**Purpose:** ESLint configuration for code linting.

**What it does:**
- Checks your code for errors and bad practices
- Enforces consistent code style
- Catches bugs before you run the code

**What it does:**
```javascript
export default [
  {
    rules: {
      // Custom linting rules
    },
  },
];
```

**Beginner tips:**
- Run `npm run lint` to check your code
- ESLint errors appear as red underlines in your editor
- Fixing linting issues improves code quality

---

### `.gitignore`
**Purpose:** Tells Git which files to ignore.

**What it does:**
- Prevents certain files from being committed
- Keeps your repository clean
- Protects sensitive information

**Common ignores:**
```
node_modules/      # Installed packages (too large)
.next/              # Next.js build files
.env                # Environment variables (secrets!)
*.log               # Log files
```

**Beginner tips:**
- Never commit `node_modules` - it's huge and can be regenerated
- Keep secrets in `.env` files and add them to `.gitignore`
- Edit this if you have files you don't want to share

---

## 📂 Other Important Folders

### `public/`
**Purpose:** Static assets served directly.

**What goes here:**
- Images (PNG, JPG, SVG)
- Icons
- Fonts
- Favicon
- Robots.txt

**How to use:**
```tsx
<img src="/image.png" alt="Description" />
```

**Beginner tips:**
- Files here are accessible at the root URL
- No processing - files are served as-is
- Good for images that don't change

---

### `node_modules/`
**Purpose:** Installed npm packages.

**What it is:**
- All the libraries your project depends on
- Created when you run `npm install`
- Contains thousands of files

**Beginner tips:**
- NEVER edit files in `node_modules`
- Always listed in `.gitignore`
- Delete and run `npm install` to recreate if needed

---

### `.next/`
**Purpose:** Next.js build output.

**What it is:**
- Compiled and optimized files
- Created when you run `npm run build`
- Contains the production-ready version of your app

**Beginner tips:**
- Automatically generated - don't edit
- Listed in `.gitignore`
- Delete to clear cache if you have build issues

---

## 📝 Documentation Files

### `CLAUDE.md`
**Purpose:** Instructions for Claude Code AI agents.

**What it does:**
- Contains project-specific guidance
- Tells Claude how to work with your codebase
- Can include conventions, preferences, rules

**Beginner tips:**
- Customize this to guide AI assistance
- Add your coding preferences here
- Reference AGENTS.md for agent-specific notes

---

### `AGENTS.md`
**Purpose:** Notes about Next.js breaking changes.

**What it does:**
- Warns about API differences from standard Next.js
- Reminds developers to check documentation
- Lists version-specific changes

**Beginner tips:**
- Read this if something doesn't work as expected
- Next.js updates can break existing code
- Check `node_modules/next/dist/docs/` for guides

---

### `README.md`
**Purpose:** Project documentation for humans.

**What it does:**
- Explains what the project is
- Provides setup instructions
- Lists features and usage

**Beginner tips:**
- First file people see on GitHub
- Write clear instructions for running your project
- Include screenshots and examples

---

## 🚀 Quick Reference

| File | Purpose | Edit Often? |
|------|---------|-------------|
| `app/page.tsx` | Homepage content | ✅ Yes |
| `app/globals.css` | Global styles | ✅ Yes |
| `app/layout.tsx` | Page layout | Sometimes |
| `package.json` | Dependencies | When adding packages |
| `next.config.ts` | Framework config | Rarely |
| `tsconfig.json` | TypeScript config | Rarely |
| `.gitignore` | Git ignores | Sometimes |
| `public/` | Static assets | ✅ Yes |

---

## 💡 Beginner Tips

1. **Start with `app/page.tsx`** - This is where most of your changes will happen
2. **Use Tailwind classes** - They're easier than writing custom CSS
3. **Don't touch `node_modules`** - It's auto-generated and huge
4. **Run `npm run dev`** - This starts your development server
5. **Check the browser** - Changes appear automatically (hot reload)
6. **Read errors carefully** - They usually tell you exactly what's wrong
7. **Use TypeScript** - It catches bugs before you run the code
8. **Commit often** - Save your work with git regularly

---

## 🎯 What to Edit First

If you want to customize your portfolio:

1. **Change your name** in `app/page.tsx` (line ~44)
2. **Update projects** in the `projects` array
3. **Add your skills** in the `skills` array
4. **Edit experience** in the `experience` array
5. **Change colors** in `app/globals.css` (`.gradient-bg` class)
6. **Add your email** in the contact section

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

*Last updated: 2026-04-30*
