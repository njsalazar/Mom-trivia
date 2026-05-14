# Famous Moms Trivia

A browser-based trivia party game built for the late-30s / early-40s mom set.
50 questions across five categories — TV Moms, Movie Moms, Celebrity Moms,
Mom Pop Culture, and Animated Moms — written with one specific demographic in
mind: upper-middle-class suburban millennial moms who were born in the 80s,
grew up on Lohan and Lorelai, and now run the carpool with a 40-oz Stanley
in the cupholder.

## Run it

It's plain HTML/CSS/JS — no build step. Just open `index.html` in a browser,
or serve the directory:

```
python3 -m http.server 8000
# then open http://localhost:8000
```

## How to play

Designed for one host driving a laptop (or a TV with HDMI) while guests
shout out answers in teams.

1. On the welcome screen, add your teams (or remove them all to play casually).
2. Click **Pour the rosé — let's play**.
3. For each question:
   - Read the question and four options aloud.
   - When teams have answered, click **Reveal answer** (or press Space).
   - Tap a team's card to award them a point.
   - Click **Next question** (or press Space again).
4. After question 50 you'll see the final scoreboard.

## Files

- `index.html` — markup for the three screens (welcome / game / end).
- `styles.css` — millennial-pink-and-gold visual design.
- `questions.js` — the 50-question bank.
- `app.js` — game state, scoring, and screen transitions.

## Adding your own questions

`questions.js` exports a `QUESTIONS` array. Each entry looks like:

```js
{
  category: "TV Moms",
  question: "...",
  options: ["A", "B", "C", "D"],
  answer: 0,           // index of the correct option
  note: "..."          // optional fun fact shown after the reveal
}
```

Categories are ordered by `CATEGORY_ORDER` at the bottom of the file.
Within each category, questions are shuffled at the start of every game.
