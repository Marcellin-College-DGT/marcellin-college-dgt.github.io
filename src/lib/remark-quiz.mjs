// Turns a ```quiz block in a Learn page into multiple-choice questions that need no script:
// radio buttons, with CSS showing "Correct" or "Not quite" and the reason once one is picked.
//
// Write it like this (a blank line between questions):
//
// ```quiz
// Which tag has no closing tag?
// - `<p>`
// + `<img>`
// - `<li>`
// > `<img>` stands on its own. `<p>` and `<li>` need `</p>` and `</li>`.
// ```
//
//   first line  the question
//   + …         the right answer (exactly one)
//   - …         a wrong answer
//   > …         why: shown after any answer is picked
// Text can use `code` and **bold**.

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function fmt(text) {
  return text
    .split('`')
    .map((part, i) => (i % 2 ? `<code>${esc(part)}</code>` : esc(part).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')))
    .join('');
}

function parse(block, where) {
  return block
    .trim()
    .split(/\n\s*\n/)
    .map((q) => {
      const lines = q.split('\n').map((l) => l.trim()).filter(Boolean);
      const question = lines.find((l) => !/^[+\->]\s/.test(l));
      const options = lines.filter((l) => /^[+-]\s/.test(l)).map((l) => ({ right: l[0] === '+', text: l.slice(2) }));
      const why = lines.filter((l) => l.startsWith('> ')).map((l) => l.slice(2)).join(' ');
      const rights = options.filter((o) => o.right).length;
      if (!question || options.length < 2 || rights !== 1) {
        throw new Error(
          `Quiz in ${where}: each question needs a question line, 2+ answers and exactly one "+" answer.\n${q}`,
        );
      }
      return { question, options, why };
    });
}

function render(questions, id) {
  const qs = questions
    .map((q, n) => {
      const name = `${id}-${n + 1}`;
      const opts = q.options
        .map(
          (o) =>
            `<label class="opt ${o.right ? 'right' : 'wrong'}"><input type="radio" name="${name}"><span>${fmt(o.text)}</span></label>`,
        )
        .join('');
      const why = q.why ? `<p class="why">${fmt(q.why)}</p>` : '';
      return `<fieldset class="q"><legend>${fmt(q.question)}</legend>${opts}${why}</fieldset>`;
    })
    .join('');
  return `<div class="quiz" data-pagefind-ignore><p class="quiz-title">Check yourself</p>${qs}</div>`;
}

export default function remarkQuiz() {
  return (tree, file) => {
    let count = 0;
    const where = file?.path ?? 'a Learn page';
    const walk = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        if (child.type === 'code' && child.lang === 'quiz') {
          count += 1;
          return { type: 'html', value: render(parse(child.value, where), `quiz${count}`) };
        }
        walk(child);
        return child;
      });
    };
    walk(tree);
  };
}
