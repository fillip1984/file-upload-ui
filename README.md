# file-upload-ui

Dabbling with Alpine.js to see how "reactive" it gets. Looks pretty promising for a tool that doesn't require any build or packagers but still a little shy of what react can do...of course that's not it's purpose

## What is this???

This is a single page file upload tool. You can drag and drop files into the panel (todo) or use the Add button to add files for upload. Then, you can provide some metadata about the files and finally upload them to a server (todo). For now, I'm trying to prove out if Alpine.js can be a short stop to rewriting an app in React...currently the application is written in vanilla JavaScript and is proving difficult to debug and maintain.

## How do I use this?

1. Pull this down into VS Code
2. open html-file-upload.html with a live server
3. Click Add and add some files (don't worry they won't be going anywhere as file upload functionality hasn't been implemented)
4. Select meta data for file (claim relation, owner, document type, date received) and notice that the apply doesn't enable until you've selected these fields as well as selecting which files to apply the meta data to
5. At any time you can click the Upload button and look at the dev tools console and it will print out the state of ui so you can see how "reactive" Alpine.js makes this app appear
