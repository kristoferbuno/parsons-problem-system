# Developer essentials
## Hosting project

For the project, you'll need Node.js to run the website locally (https://nodejs.org/en/download/).

After installing, clone the git repository (https://github.com/kristoferbuno/parsons-problem-system) onto your machine. To keep your credentials saved in git so that you don't have to re-enter them every time, view this page (https://stackoverflow.com/questions/35942754/how-can-i-save-username-and-password-in-git) for more details.

Run this command in the project directory
```bash
npm install
```
to install all of the necessary packages that the project depends on.

To run the web server, run
```bash
npm run dev
```
in the project directory. The web server will be accessible at (localhost:3000).

## Coding environment

For this project, it is highly recommended (but not necessary) that you use **VSCode** (https://code.visualstudio.com/download) as your primary text editor.

While you are free to use any text editor you would like (Atom, Notepad++, Sublime, Vim), VSCode offers a lot of customizability, integration with other services (Git integration), extensions for different libraries (like React), and it works well out of the box.

After you install VSCode, some recommended extensions for this project include "React.js with Flow Types code snippets" (search **lsadam0.reactflowsnippets** in extensions).

In addition to these extensions, you may find it helpful to integrate your VSCode environment with this project's Github repo so you can use git functionalities in your coding environment. This can be done by navigating to the project directory in a terminal and entering
```bash
git remote set-url origin https://[YOUR-USERNAME]:[YOUR-ACCESS-TOKEN]@github.com/kristoferbuno/parsons-problem-system.git
```
with [YOUR-USERNAME] and [YOUR-ACCESS-TOKEN] being your username and token, respectively (no brackets).

### Helpful shortcuts

You may already know these (or not), but some helpful shortcuts for development are listed below:

```
ctrl+s: Save
ctrl+/: Comment / Decomment current line
ctrl+shift+f: Search entire repository

ctrl + click: Finds definition of something / enlists references of something (incredibly useful for learning quickly!)
```

## Bonus tools

In addition to VSCode, Node.js, and git, another tool that you will find helpful in this project is Postman (https://www.postman.com/downloads/). Postman allows you to test any API with whatever input you want. We recommend downloading the Desktop agent because it has less restrictions.

# Database info

This project utilizes Firebase for authentication and for storing data. Specifically, we use Firestore to handle data storage (https://firebase.google.com/docs/firestore).

Credentials are developer-provided.

Firebase is called by the API for data access.

# API info

This project makes use of Python and Flask to host its API.

# Front-end info

This project uses React.js to build the front end (https://reactjs.org/docs/getting-started.html).
