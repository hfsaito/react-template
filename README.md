# React Template

A minimal React + Vite template for small React exercises.

## Install Node.js

This project needs **Node.js 20.19+ or 22.12+** (Node 22 LTS is recommended). Check your version with:

```sh
node -v
```

If Node is missing or too old, the easiest way to install the right version is with [nvm](https://github.com/nvm-sh/nvm):

```sh
# Install nvm (macOS / Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Restart your terminal, then from this folder:
nvm install   # installs the version listed in .nvmrc
nvm use       # switches to it
```

On Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows), or download the LTS installer from [nodejs.org](https://nodejs.org/).

## Run the application

Install dependencies (only needed the first time):

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:5173). The page reloads automatically when you save a file.

## Other commands

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run build`   | Build a production version into `dist/`      |
| `npm run preview` | Serve the production build locally           |

## Project structure

```
index.html        HTML entry point
src/main.jsx      Mounts the React app
src/App.jsx       Main component — start your exercise here
src/App.css       Styles for App
src/reset.css     Base CSS reset
```
