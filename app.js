(function () {
  "use strict";

  const state = {
    teams: [],
    currentIndex: 0,
    revealed: false,
    awardedThisQuestion: new Set(),
    questions: [],
    mode: "multiple-choice" // "multiple-choice" | "open"
  };

  // ---------- Welcome screen setup ----------

  function buildCategoryPreview() {
    const counts = QUESTIONS.reduce(function (acc, q) {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {});
    const list = document.getElementById("category-preview");
    list.innerHTML = "";
    CATEGORY_ORDER.forEach(function (cat) {
      const li = document.createElement("li");
      li.innerHTML = cat + '<span class="count">' + (counts[cat] || 0) + "</span>";
      list.appendChild(li);
    });
  }

  function renderTeamsList() {
    const wrap = document.getElementById("teams-list");
    wrap.innerHTML = "";
    state.teams.forEach(function (team, idx) {
      const row = document.createElement("div");
      row.className = "team-row";
      const input = document.createElement("input");
      input.type = "text";
      input.value = team.name;
      input.placeholder = "Team name";
      input.addEventListener("input", function (e) {
        state.teams[idx].name = e.target.value;
      });
      const remove = document.createElement("button");
      remove.type = "button";
      remove.setAttribute("aria-label", "Remove team");
      remove.textContent = "×";
      remove.addEventListener("click", function () {
        state.teams.splice(idx, 1);
        renderTeamsList();
      });
      row.appendChild(input);
      row.appendChild(remove);
      wrap.appendChild(row);
    });
  }

  function addTeam(defaultName) {
    state.teams.push({ name: defaultName || "", score: 0 });
    renderTeamsList();
    const inputs = document.querySelectorAll("#teams-list input");
    if (inputs.length) inputs[inputs.length - 1].focus();
  }

  // ---------- Game flow ----------

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildOrderedQuestions() {
    // Group by category, shuffle within each, then concatenate in CATEGORY_ORDER.
    const byCat = {};
    QUESTIONS.forEach(function (q) {
      (byCat[q.category] = byCat[q.category] || []).push(q);
    });
    const ordered = [];
    CATEGORY_ORDER.forEach(function (cat) {
      if (byCat[cat]) ordered.push.apply(ordered, shuffle(byCat[cat]));
    });
    return ordered;
  }

  function showScreen(id) {
    document.querySelectorAll(".screen").forEach(function (s) {
      s.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
  }

  function startGame() {
    // Drop any blank-named teams
    state.teams = state.teams.filter(function (t) {
      return (t.name || "").trim().length > 0;
    });
    state.teams.forEach(function (t) {
      t.score = 0;
    });
    const modeInput = document.querySelector('input[name="game-mode"]:checked');
    state.mode = modeInput ? modeInput.value : "multiple-choice";
    state.questions = buildOrderedQuestions();
    state.currentIndex = 0;
    showScreen("game");
    document.getElementById("q-total").textContent = state.questions.length;
    renderQuestion();
  }

  function renderQuestion() {
    state.revealed = false;
    state.awardedThisQuestion = new Set();
    const q = state.questions[state.currentIndex];

    document.getElementById("q-number").textContent = state.currentIndex + 1;
    document.getElementById("category-badge").textContent = q.category;
    document.getElementById("question-text").textContent = q.question;

    const ol = document.getElementById("options");
    const openReveal = document.getElementById("open-reveal");
    ol.innerHTML = "";
    openReveal.classList.add("hidden");

    if (state.mode === "multiple-choice") {
      ol.classList.remove("hidden");
      const letters = ["A", "B", "C", "D"];
      q.options.forEach(function (opt, i) {
        const li = document.createElement("li");
        li.dataset.index = String(i);
        li.innerHTML =
          '<span class="letter">' +
          letters[i] +
          "</span><span>" +
          escapeHtml(opt) +
          "</span>";
        ol.appendChild(li);
      });
    } else {
      ol.classList.add("hidden");
    }

    document.getElementById("reveal").classList.remove("hidden");
    document.getElementById("next").classList.add("hidden");
    const note = document.getElementById("trivia-note");
    note.classList.add("hidden");
    note.textContent = "";

    renderScoreboard();
  }

  function revealAnswer() {
    if (state.revealed) return;
    state.revealed = true;
    const q = state.questions[state.currentIndex];

    if (state.mode === "multiple-choice") {
      const items = document.querySelectorAll("#options li");
      items.forEach(function (li) {
        const idx = Number(li.dataset.index);
        if (idx === q.answer) {
          li.classList.add("correct");
        } else {
          li.classList.add("dim");
        }
      });
    } else {
      const openReveal = document.getElementById("open-reveal");
      document.getElementById("open-reveal-text").textContent = q.options[q.answer];
      openReveal.classList.remove("hidden");
    }

    if (q.note) {
      const note = document.getElementById("trivia-note");
      note.textContent = q.note;
      note.classList.remove("hidden");
    }

    document.getElementById("reveal").classList.add("hidden");
    document.getElementById("next").classList.remove("hidden");
  }

  function nextQuestion() {
    state.currentIndex += 1;
    if (state.currentIndex >= state.questions.length) {
      endGame();
      return;
    }
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function awardPoint(teamIndex) {
    if (!state.revealed) return; // only score after the reveal
    if (state.awardedThisQuestion.has(teamIndex)) return; // one point per question per team
    state.teams[teamIndex].score += 1;
    state.awardedThisQuestion.add(teamIndex);
    renderScoreboard();
  }

  function renderScoreboard() {
    const wrap = document.getElementById("team-buttons");
    wrap.innerHTML = "";
    if (!state.teams.length) {
      const p = document.createElement("p");
      p.className = "no-teams";
      p.textContent = "Playing casually — no team scoring tonight.";
      wrap.appendChild(p);
      return;
    }
    state.teams.forEach(function (team, idx) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "team-button";
      if (state.awardedThisQuestion.has(idx)) btn.classList.add("scored");
      btn.innerHTML =
        "<span>" + escapeHtml(team.name) + "</span><span class=\"score\">" + team.score + "</span>";
      btn.addEventListener("click", function () {
        awardPoint(idx);
      });
      wrap.appendChild(btn);
    });
  }

  function endGame() {
    showScreen("end");
    const winnerEl = document.getElementById("winner");
    const listEl = document.getElementById("final-scores");
    listEl.innerHTML = "";
    winnerEl.innerHTML = "";

    if (!state.teams.length) {
      winnerEl.innerHTML =
        '<span class="crown">No teams tonight &mdash; everyone&rsquo;s a winner</span>Hope the rosé held up.';
      return;
    }

    const sorted = state.teams.slice().sort(function (a, b) {
      return b.score - a.score;
    });
    const topScore = sorted[0].score;
    const winners = sorted.filter(function (t) {
      return t.score === topScore;
    });

    if (winners.length === 1) {
      winnerEl.innerHTML =
        '<span class="crown">Winner, winner, mom-and-chardonnay dinner</span>' +
        escapeHtml(winners[0].name) +
        " &mdash; " +
        topScore +
        " points";
    } else {
      winnerEl.innerHTML =
        '<span class="crown">Tied at the top</span>' +
        winners
          .map(function (w) {
            return escapeHtml(w.name);
          })
          .join(" &amp; ") +
        " &mdash; " +
        topScore +
        " points each";
    }

    sorted.forEach(function (t, i) {
      const li = document.createElement("li");
      li.innerHTML =
        '<span><span class="rank">' +
        ordinal(i + 1) +
        '</span>' +
        escapeHtml(t.name) +
        '</span><span class="score">' +
        t.score +
        "</span>";
      listEl.appendChild(li);
    });
  }

  function ordinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function resetGame() {
    state.teams.forEach(function (t) {
      t.score = 0;
    });
    state.currentIndex = 0;
    state.revealed = false;
    state.awardedThisQuestion = new Set();
    showScreen("welcome");
    renderTeamsList();
  }

  // ---------- Boot ----------

  document.addEventListener("DOMContentLoaded", function () {
    buildCategoryPreview();
    addTeam("The Carol Bradys");
    addTeam("The Lorelais");

    document.getElementById("add-team").addEventListener("click", function () {
      addTeam("");
    });
    document.getElementById("start-game").addEventListener("click", startGame);
    document.getElementById("reveal").addEventListener("click", revealAnswer);
    document.getElementById("next").addEventListener("click", nextQuestion);
    document.getElementById("quit").addEventListener("click", endGame);
    document.getElementById("play-again").addEventListener("click", resetGame);

    document.addEventListener("keydown", function (e) {
      const gameActive = document.getElementById("game").classList.contains("active");
      if (!gameActive) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (!state.revealed) revealAnswer();
        else nextQuestion();
      }
    });
  });
})();
