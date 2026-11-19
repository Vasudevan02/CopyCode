// Section: Feedback Form
window.SECTIONS_DATA = window.SECTIONS_DATA || {};
window.SECTIONS_DATA['feedback-form'] = {
  title: "Feedback Form",
  id: "feedback-form",
  pageTitle: "Feedback Form (HTML Inline)",
  cards: [
    {
      title: "Feedback Form (HTML Inline)",
      code: `<!doctype html>
<html>
<head>
  <title>Feedback</title>
  <style>
    body { display:flex; justify-content:center; align-items:center; min-height:100vh; margin:0; font-family:sans-serif; background:#f7f8fc; }
    form { background:#fff; padding:28px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,.05); width:300px; }
    h2 { margin:0 0 16px; }
    p { margin:0 0 12px; }
    input, textarea, select { width:100%; padding:6px; border:1px solid #767676; border-radius:2px; box-sizing:border-box; margin-top:4px; font-family:sans-serif; }
    textarea { resize:vertical; height:80px; }
    button { width:100%; padding:10px; background:#28a745; color:#fff; border:none; border-radius:6px; font-weight:bold; cursor:pointer; margin-top:8px; }
  </style>
</head>
<body>
  <form onsubmit="event.preventDefault();alert('Thank you for your feedback!');this.reset();">
    <h2>Feedback Form</h2>
    <p>Name:<br><input type="text" placeholder="Your name" required></p>
    <p>Email:<br><input type="email" placeholder="Your email" required></p>
    <p>Rating:<br>
      <select required>
        <option value="">-- Select Rating --</option>
        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
        <option value="4">⭐⭐⭐⭐ Good</option>
        <option value="3">⭐⭐⭐ Average</option>
        <option value="2">⭐⭐ Poor</option>
        <option value="1">⭐ Very Poor</option>
      </select>
    </p>
    <p>Message:<br><textarea placeholder="Write your feedback here..." required></textarea></p>
    <button type="submit">Submit Feedback</button>
  </form>
</body>
</html>`
    }
  ]
};
