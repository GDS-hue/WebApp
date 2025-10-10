{
  "name": "app.js",
  "path": "src/app.js",
  "sha": "a7d8b9e32fc9dcb78a29d1e2f4b4a3f7c1d5e6b2",
  "size": 1428,
  "url": "https://api.github.com/repos/GDS-hue/dvds-dvds/contents/src/app.js",
  "html_url": "https://github.com/GDS-hue/dvds-dvds/blob/main/src/app.js",
  "git_url": "https://github.com/GDS-hue/dvds-dvds.git",
  "download_url": "https://raw.githubusercontent.com/GDS-hue/dvds-dvds/main/src/app.js",
  "type": "file",
  "content_preview": "// Entry point for the DVDS-DVDS web app\nimport express from 'express';\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Welcome to DVDS-DVDS API');\n});\n\nexport default app;\n",
  "encoding": "utf-8",
  "last_commit": {
    "sha": "2f74b3c2b5ef92198c7e26c9c9f98e4f7b1e34f1",
    "author": "GDS-hue",
    "date": "2025-10-08T14:12:37Z",
    "message": "Initialize app.js with base API route"
  }
}
