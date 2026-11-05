---
title: Fixing and testing
useWhen: something goes wrong on your page, or you're doing the tests in your template.
years: [9]
order: 4
---

## Something's wrong? Check these

| What happens | What to check |
| --- | --- |
| My page has no colours or fonts. | Is the `<link>` line inside `<head>`? Does `href` match the file name exactly? Did you save `style.css`? |
| Only some of my CSS works. | Look for a missing `;` or `}` just above the part that stopped working. |
| A picture doesn't show (you see a small icon or the alt text). | Check the folder name (`images` not `image`), spelling, capitals and the ending (`.jpg` or `.png`). Is the file really in `images`? Is it a `.heic` photo? |
| Everything after a heading is big or bold. | A closing tag is missing, such as `</h2>`. |
| My changes don't show in Chrome. | Save with <kbd>Ctrl</kbd> + <kbd>S</kbd> (a white dot on the tab means it isn't saved). Is Live Server running? The bottom bar shows **Port : 5500** when it is. |
| There's no **Go Live** button. | You opened one file, not the folder. See the guide [Open a project folder in VS Code](/guides/open-a-project-folder-in-vs-code/). If it's still missing, see [Install VS Code extensions](/guides/install-vs-code-extensions/). |
| Draw.io opens as a normal picture. | The file name must end in `.drawio.png`. |
| The page scrolls sideways in a narrow window. | Add `max-width: 100%` to your `img` rule. |
| Odd symbols appear, like `â€™` instead of `'`. | Add `<meta charset="UTF-8">` inside `<head>`. |

```quiz
Everything after one of your headings is big and bold. What's most likely wrong?
+ A closing tag, like `</h2>`, is missing
- Your CSS link is wrong
- A picture is missing
- Live Server isn't running
> Without its closing tag, the heading carries on to the end of the page.

Your changes don't show in Chrome. What do you check first?
+ That you saved (no white dot on the tab) and Live Server is running
- That your files are renamed
- That you deleted `style.css`
- That the computer has restarted
> Unsaved changes don't show. Live Server must be running for Chrome to update.
```

## Use Chrome to find the problem

1. <span class="where">Chrome › Your page</span> Right-click the page and click **Inspect**.
2. <span class="where">Chrome › Inspect panel</span> Click the **Console** tab.
3. <span class="where">Chrome › Console</span> Red lines are errors. `404 (Not Found)` means a file's path or name is wrong.

> **Tip:** Right-click a picture and click **Inspect** to see the exact path the page is using.

```quiz
The Console shows `404 (Not Found)`. What does it mean?
+ A file's path or name is wrong
- Your page has no errors
- The internet is down
- A CSS rule is missing its `;`
> 404 means the browser looked for a file and couldn't find it. Check the path and the file name.
```

## Test: every image shows

1. <span class="where">Chrome › Your page</span> Scroll slowly from top to bottom.
2. <span class="where">Chrome › Your page</span> Look for a small broken-picture icon or alt text where a picture should be.

```quiz
What tells you a picture isn't showing?
+ A broken-picture icon, or alt text where the picture should be
- The picture has rounded corners
- The page loads slowly
- The picture is smaller than you expected
> If the browser can't find the picture, it shows an icon or the alt text instead.
```

## Test: every `<img>` has alt text

1. <span class="where">VS Code › index.html</span> Press <kbd>Ctrl</kbd> + <kbd>F</kbd> and type `<img`.
2. <span class="where">VS Code › Search box</span> Press <kbd>Enter</kbd> to jump to each one. Check each has `alt="..."` with real words.

```quiz
What's the quickest way to find every `<img>` in `index.html`?
+ Press `Ctrl` + `F` and type `<img`, then press Enter to jump to each one
- Look at the page in Chrome
- Read every line from the top
- Right-click and choose **Format Document**
> Find (`Ctrl` + `F`) jumps you straight to each `<img>`, so none get missed.
```

## Test: text is easy to read

- Sit back from the screen. Can you read every heading and paragraph easily?
- Is the text dark on light, or light on dark?
- Ask someone else to read a paragraph out loud.

```quiz
Which is a good way to test that your text is easy to read?
+ Sit back from the screen, and ask someone else to read a paragraph out loud
- Check your file names
- Count your headings
- Make the text as small as possible
> Reading from a distance, and watching someone else read it, shows whether the text is clear.
```

## Test: the page fits a narrow window

1. <span class="where">Chrome › Your page</span> Drag the right edge of the Chrome window in until it is about as wide as a phone.
2. <span class="where">Chrome › Your page</span> Check that nothing sticks out and the page doesn't scroll sideways.

Another way: open **Inspect** and press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> to see the page at phone size.

```quiz
How do you test that your page fits a narrow window?
+ Drag the edge of Chrome in to about phone width, and check nothing scrolls sideways
- Zoom in as far as you can
- Open the page on a big screen
- Delete your pictures
> A narrow window shows what a phone sees. Nothing should stick out or scroll sideways.
```

## Ideas for your own test

- The page title shows in the browser tab.
- Headings go in order: one `<h1>`, then `<h2>`s.
- Spelling: copy your text into Google Docs and check the red underlines.
- Every link opens the right page.
- The page works in Microsoft Edge as well as Chrome.

```quiz
Which of these is a good test of your own?
+ Check the headings go in order: one `<h1>`, then `<h2>`s
- "I looked at it and it's good."
- "I asked if my page is done."
- "I added more pictures."
> A good test checks one thing you can see or measure, and you can write what happened.
```

## Gallery walk: giving useful feedback

Read the page as if you were its reader. Then tell the person:

- **one thing that works** for their reader, and why
- **one thing to change**, and how

| Not helpful | Helpful |
| --- | --- |
| "It's good." | "The list of gear is clear, so a beginner knows what to buy." |
| "Change the colours." | "The yellow text is hard to read on white. Try a darker colour." |

```quiz
Which feedback is most helpful?
- "It's good."
- "Change the colours."
+ "The yellow text is hard to read on white. Try a darker colour."
- "I like it."
> Helpful feedback says what to change, why, and how.
```
