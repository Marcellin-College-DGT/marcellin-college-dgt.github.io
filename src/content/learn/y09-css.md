---
title: CSS
useWhen: you forget how to link your CSS or write a rule for colours, fonts, spacing or image sizes. CSS is the look of your page, and it goes in style.css.
years: [9]
order: 3
---

## Link style.css to your page

Put this line inside the `<head>` of `index.html`. Without it, your page ignores `style.css`. The guide [Start a web page](/guides/start-a-web-page/) shows a quick way to add it.

<div class="file-label">index.html</div>

```html
<head>
  <meta charset="UTF-8">
  <title>Football for Beginners</title>
  <link rel="stylesheet" href="style.css">
</head>
```

> **Watch out:** The name in `href` must match the file name exactly. `styles.css` and `style.css` are different files.

```quiz
Your page ignores your CSS. The file is called `styles.css`, and your link says `href="style.css"`. How do you fix it?
+ Make the two names match exactly
- Move the `<link>` line into the `<body>`
- Add more rules to the CSS
- Rename `index.html`
> The name in `href` must match the file name exactly. Rename the file `style.css`, or change the link.

Where does the `<link>` line go?
+ Inside the `<head>` of `index.html`
- Inside the `<body>`
- At the top of `style.css`
- After `</html>`
> The `<link>` line goes in the `<head>`, with the `<title>`.
```

## How a CSS rule works

<div class="file-label">style.css</div>

```css
h1 {
  color: #0b3c5d;
  font-size: 40px;
}
```

| Part | Example | What it means |
| --- | --- | --- |
| Selector | `h1` | What to style. Here: every `<h1>`. |
| Property | `color` | What to change. |
| Value | `#0b3c5d` | What to change it to. |

Each line ends with a semicolon `;`. The rules go between curly brackets `{ }`.

> **Watch out:** A missing `;` or `}` can stop the rest of your CSS working. Check these first.

```quiz
In `h1 { color: #0b3c5d; }`, which part is the property?
- `h1`
+ `color`
- `#0b3c5d`
- `{ }`
> The property is what you change. `h1` is the selector and `#0b3c5d` is the value.

Only the first half of your CSS works. What do you check first?
+ A missing `;` or `}` just above where it stopped working
- Your picture file names
- The `<title>` in `index.html`
- The spelling in your paragraphs
> A missing `;` or `}` stops the rules after it from working.
```

## Colours

<div class="file-label">style.css</div>

```css
body {
  background-color: #f4f9f4;
  color: #222222;
}

h1,
h2 {
  color: darkgreen;
}
```

- `background-color` changes the background. `color` changes the text.
- You can use colour names (`darkgreen`) or hex codes (`#0b3c5d`).
- In VS Code, click the small colour square next to a colour to open a colour picker.
- To style two things the same way, list them with a comma: `h1, h2`.

> **Tip:** Use dark text on a light background, or light text on a dark background. Avoid red with green, and blue with purple: they are hard to read, especially for colourblind readers.

```quiz
Which line changes the colour of the text?
- `background-color: navy;`
+ `color: navy;`
- `colour: navy;`
- `text: navy;`
> `color` changes the text. CSS only understands the American spelling, so `colour` does nothing.

Which pair is easiest to read?
+ Dark text on a light background
- Red text on a green background
- Blue text on a purple background
- Light grey text on a white background
> Strong contrast is easiest to read. Red with green and blue with purple are hard for colourblind readers.
```

## Fonts and text size

<div class="file-label">style.css</div>

```css
body {
  font-family: Verdana, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.5;
}
```

| Property | What it does |
| --- | --- |
| `font-family` | Picks the font. List a few, ending with `sans-serif` or `serif`, in case the first is missing. |
| `font-size` | How big the text is. About `16px` to `20px` is easy to read. |
| `line-height` | Space between lines. `1.5` is easy to read. |

Fonts every computer has: `Arial`, `Verdana`, `Georgia`, `Tahoma`, `Trebuchet MS`.

```quiz
Why list more than one font, like `Verdana, Arial, sans-serif`?
+ In case the first font is missing on someone's computer
- So the page shows all three fonts at once
- To make the text bigger
- Because every rule needs three values
> The browser uses the first font it has, so the others are back-ups.

Which `font-size` is easy to read for paragraphs?
- `8px`
+ `18px`
- `60px`
- `18`
> About `16px` to `20px` is easy to read. A size needs its unit: `18` on its own does nothing.
```

## Spacing: margin and padding

<div class="box-margin">margin (space outside)
<div class="box-padding">padding (space inside)
<div class="box-content">content</div>
</div>
</div>

<div class="file-label">style.css</div>

```css
h2 {
  margin-top: 40px;
}

p {
  margin-bottom: 16px;
}
```

`margin-top: 40px` puts a gap above each section heading, so sections are easy to tell apart.

```quiz
What's the difference between margin and padding?
+ Margin is space outside something. Padding is space inside it.
- Margin is space inside something. Padding is space outside it.
- They are the same thing
- Margin is only for pictures
> Margin pushes other things away. Padding sits between the edge and the content.

What does `margin-top: 40px;` on `h2` do?
+ It adds a gap above each section heading
- It makes the headings 40px tall
- It moves every heading to the top of the page
- It adds space inside the headings
> `margin-top` adds space outside, above the heading.
```

## Keep the page a readable width

Long lines are hard to read on a big screen. This keeps your page in the middle and no wider than 800 pixels.

<div class="file-label">style.css</div>

```css
body {
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
}
```

`margin: 0 auto` means no space at the top and bottom, and equal space on the left and right.

```quiz
What does `max-width: 800px;` with `margin: 0 auto;` do to your page?
+ Keeps it no wider than 800px, in the middle of the screen
- Makes the text 800px big
- Stretches it across the whole screen
- Hides anything past 800px
> `max-width` stops the page getting too wide, and `margin: 0 auto` puts equal space on the left and right.
```

## Image sizes

<div class="file-label">style.css</div>

```css
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
```

| Property | What it does |
| --- | --- |
| `max-width: 100%` | Pictures shrink to fit the window, so nothing sticks out or scrolls sideways. |
| `height: auto` | Keeps the picture's shape when it shrinks. |
| `border-radius` | Rounds the corners (optional). |

To make all pictures a set width, add `width: 400px;` to the same rule.

```quiz
A big photo makes your page scroll sideways in a narrow window. Which rule fixes it?
+ `img { max-width: 100%; height: auto; }`
- `img { width: 2000px; }`
- `img { border-radius: 8px; }`
- `body { color: #222222; }`
> `max-width: 100%` lets pictures shrink to fit the window.

What does `height: auto` do for a picture?
+ Keeps its shape when it shrinks
- Makes it as tall as the page
- Rounds its corners
- Hides it on small screens
> With `height: auto`, the picture doesn't get squashed or stretched.
```

## Keep all your styles in style.css

Put every style in `style.css`. Don't use `style="..."` inside your HTML tags, or a `<style>` tag in `index.html`.

**Why?** All your styles are in one place, so they are easy to find and change, and your HTML stays tidy.

Here is a whole `style.css` using everything on this page:

<div class="file-label">style.css</div>

```css
body {
  background-color: #f4f9f4;
  color: #222222;
  font-family: Verdana, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
}

h1,
h2 {
  color: darkgreen;
}

h2 {
  margin-top: 40px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
```

```quiz
Where should the colour for your `<h1>` go?
+ In a rule in `style.css`
- In `style="..."` inside the `<h1>` tag
- In a `<style>` tag in `index.html`
- Inside the `<title>`
> Every style goes in `style.css`, so they're all in one place and easy to change.
```
