# 101572409_COMP3123-exec04

Express JS exercise: four routes plus static middleware serving `public/instruction.html`.

## Run
```
npm install
npm run dev     # auto-restart with nodemon
npm start       # plain node
```
Server: http://localhost:3000 (override with `PORT`).

## Endpoints
| Method | Path | Returns |
|---|---|---|
| GET | `/hello` | `Hello Express JS` (plain text) |
| GET | `/user?firstname=&lastname=` | `{ firstname, lastname }`, defaults Pritesh / Patel |
| POST | `/user/:firstname/:lastname` | `{ firstname, lastname }` from the path |
| POST | `/users` | echoes a JSON array of `{ firstname, lastname }`; 400 if the body isn't a valid array |
| GET | `/instruction.html` | static file from `public/` |
