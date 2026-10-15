// Writes dist/index.html and dist/404.html so that visiting
// https://bakhoon.github.io/ (or any unknown path) lands on /portfolio/.
import { writeFileSync, mkdirSync } from 'node:fs'

const target = '/portfolio/'
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Jeremiah Park</title>
<meta http-equiv="refresh" content="0; url=${target}">
<link rel="canonical" href="https://bakhoon.github.io${target}">
<script>location.replace(${JSON.stringify(target)})</script>
</head>
<body>
<p>Moved to <a href="${target}">bakhoon.github.io${target}</a></p>
</body>
</html>
`

mkdirSync('dist', { recursive: true })
writeFileSync('dist/index.html', html)
writeFileSync('dist/404.html', html)
console.log('root redirect -> ' + target)
