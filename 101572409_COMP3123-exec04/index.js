// COMP3123 exec04: Express JS routes + static middleware
// Student ID: 101572409

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Default name used by GET /user when a query parameter is missing (per the lab sheet)
const DEFAULT_FIRSTNAME = "Pritesh";
const DEFAULT_LASTNAME = "Patel";

// Parse JSON request bodies so POST /users can read req.body
app.use(express.json());

// Serve everything in ./public, so public/instruction.html is reachable at /instruction.html.
// path.join keeps this working even when the server is started from another folder.
app.use(express.static(path.join(__dirname, "public")));

// GET /hello -> plain text greeting
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=John&lastname=Doe -> { firstname, lastname }
// Missing parameters fall back to the defaults above.
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || DEFAULT_FIRSTNAME;
  const lastname = req.query.lastname || DEFAULT_LASTNAME;
  res.json({ firstname, lastname });
});

// POST /user/John/Doe -> { firstname, lastname } taken from the URL path
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users with a JSON array of { firstname, lastname } -> the same array back
app.post("/users", (req, res) => {
  const users = req.body;

  // The body must be an array; anything else is a client error, not an empty success
  if (!Array.isArray(users)) {
    return res.status(400).json({ error: "Request body must be a JSON array of users" });
  }

  // Every item needs both name fields
  const hasInvalidUser = users.some(
    (user) => !user || typeof user.firstname !== "string" || typeof user.lastname !== "string"
  );
  if (hasInvalidUser) {
    return res.status(400).json({ error: "Each user needs a firstname and a lastname" });
  }

  res.json(users);
});

// Any route not matched above
app.use((req, res) => {
  res.status(404).json({ error: `Cannot ${req.method} ${req.path}` });
});

// Malformed JSON bodies land here instead of Express's default HTML error page
app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Invalid JSON in request body" });
  }
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
