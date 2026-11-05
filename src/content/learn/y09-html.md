---
title: HTML
useWhen: you forget how to write headings, paragraphs, lists, images, paths or links. HTML is the content of your page, and it goes in index.html.
years: [9]
order: 2
---

## What a tag is

A tag tells the browser what something is. Most tags come in pairs: an opening tag and a closing tag with a `/`.

<div class="file-label">index.html</div>

```html
<p>This is a paragraph.</p>
```

A few tags have no closing tag, such as `<img>`, `<link>` and `<meta>`.

> **Watch out:** Every opening tag needs its closing tag. A missing `</h2>` can make the rest of your page big and bold.

```quiz
Which of these is a closing tag?
- `<p>`
+ `</p>`
- `<img>`
- `<meta>`
> A closing tag has a `/` before the tag name.

Which tag has no closing tag?
- `<p>`
- `<h2>`
+ `<img>`
- `<li>`
> `<img>`, `<link>` and `<meta>` stand on their own. Most other tags need a closing tag.
```

## The page skeleton

Every page starts like this. The `<head>` holds information about the page, and the `<body>` holds everything people see.

<div class="file-label">index.html</div>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muddy Boots Football</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>My Page Heading</h1>
    <p>My opening paragraph goes here.</p>
  </body>
</html>
```

> **Tip:** The guide [Start a web page](/guides/start-a-web-page/) shows how VS Code writes this for you.

```quiz
Where does everything people see on your page go?
- Inside `<head>`
+ Inside `<body>`
- Inside `<title>`
- After `</html>`
> The `<head>` holds information about the page. Everything people see goes in the `<body>`.

What does `<title>` do?
- It makes the big heading at the top of the page
+ It sets the words in the browser tab
- It links your CSS
- It names your file
> The `<title>` shows in the browser tab. The big heading on the page is the `<h1>`.
```

## Headings

Use one `<h1>` for the page's main heading. Use `<h2>` for each section heading. Don't jump from `<h1>` to `<h4>`: headings go in order, like chapters in a book.

<div class="file-label">index.html</div>

```html
<h1>Football for Beginners</h1>

<h2>What do I need?</h2>
<p>You need boots, shin pads and a water bottle.</p>

<h2>Where can I play?</h2>
<p>Most parks have a field you can use.</p>
```

<div class="preview">
<p class="preview-label">What you see</p>
<div class="pv-h1">Football for Beginners</div>
<div class="pv-h2">What do I need?</div>
<p>You need boots, shin pads and a water bottle.</p>
<div class="pv-h2">Where can I play?</div>
<p>Most parks have a field you can use.</p>
</div>

```quiz
Your page has a main heading and three sections. Which is right?
+ One `<h1>`, then an `<h2>` for each section
- An `<h1>` for every section
- An `<h1>`, then `<h4>` for each section
- A `<title>` for each section
> One `<h1>` for the page, then `<h2>` for each section, in order like chapters in a book.
```

## Paragraphs

Put each paragraph in its own `<p>` tag.

<div class="file-label">index.html</div>

```html
<p>I started playing football when I was seven.</p>
<p>Now I play for my club every Saturday.</p>
```

> **Tip:** Pressing <kbd>Enter</kbd> in your code doesn't start a new line on the page. Start a new `<p>` instead.

```quiz
You pressed Enter in your code to start a new paragraph, but it all shows as one block. What do you do?
+ Put each paragraph in its own `<p>`
- Press Enter twice
- Add lots of spaces
- Make the second paragraph an `<h2>`
> The browser ignores Enter in your code. Each paragraph needs its own `<p>` and `</p>`.
```

## Lists

Use `<ul>` for a list with dots (bullets), and `<ol>` for a numbered list where the order matters. Each item goes in an `<li>`.

<div class="file-label">index.html</div>

```html
<ul>
  <li>Boots</li>
  <li>Shin pads</li>
  <li>Water bottle</li>
</ul>

<ol>
  <li>Warm up</li>
  <li>Practise passing</li>
  <li>Play a game</li>
</ol>
```

<div class="preview">
<p class="preview-label">What you see</p>
<ul>
<li>Boots</li>
<li>Shin pads</li>
<li>Water bottle</li>
</ul>
<ol>
<li>Warm up</li>
<li>Practise passing</li>
<li>Play a game</li>
</ol>
</div>

```quiz
You want the steps of a warm-up, numbered in order. Which tag do you use?
- `<ul>`
+ `<ol>`
- `<li>` on its own
- `<p>`
> `<ol>` makes a numbered list where the order matters. `<ul>` makes bullets.

What goes directly inside a `<ul>`?
+ `<li>` items
- `<p>` paragraphs
- `<h2>` headings
- `<img>` tags
> Each item in a list goes in its own `<li>`.
```

## Images and alt text

<div class="file-label">index.html</div>

```html
<img src="images/muddy-boots.jpg" alt="My football boots covered in mud after training.">
```

| Part | What it does |
| --- | --- |
| `src` | The path to the picture file (where the browser finds it). |
| `alt` | Alt text: words that describe the picture for someone who can't see it. |

Screen readers read alt text out loud, and it shows when a picture can't load. Write one sentence that says what is in the picture.

| Weak alt text | Better alt text |
| --- | --- |
| `alt="photo"` | `alt="My football boots covered in mud after training."` |
| `alt=""` | `alt="Two players running for the ball on a wet field."` |
| `alt="IMG_4021"` | `alt="Our team holding the cup at the end of the season."` |

```quiz
Which is the best alt text for a photo of your football boots covered in mud?
- `alt="photo"`
- `alt=""`
- `alt="IMG_4021"`
+ `alt="My football boots covered in mud after training."`
> Good alt text is one sentence that says what is in the picture.

What does `src` do in an `<img>` tag?
+ It's the path to the picture file
- It describes the picture
- It sets the picture's size
- It turns the picture into a link
> `src` tells the browser where to find the picture. `alt` describes it.
```

## Paths: telling the browser where a file is

A relative path is the route from `index.html` to the file. Your folder looks like this:

```text
my-page/
├── index.html
├── style.css
├── wireframe.drawio.png
└── images/
    ├── muddy-boots.jpg
    └── team-photo.jpg
```

| File | Path from index.html |
| --- | --- |
| `style.css` | `style.css` |
| `muddy-boots.jpg` | `images/muddy-boots.jpg` |

> **Watch out:** Don't use a path like `G:\My Drive\my-page\images\boots.jpg`. It only works on your computer, and your kaiako will see a broken picture.

```quiz
`index.html` is in `my-page`. Your photo is in `my-page` › `images`. Which path is right?
- `G:\My Drive\my-page\images\boots.jpg`
+ `images/boots.jpg`
- `boots.jpg`
- `my-page/boots.jpg`
> The path goes from `index.html` into the `images` folder. A `G:\` path only works on your computer.
```

## Links (if you want one)

A link takes the reader to another page. Put the address in `href` and the words people click between the tags.

<div class="file-label">index.html</div>

```html
<a href="https://www.nzfootball.co.nz">New Zealand Football</a>
```

```quiz
Which code makes the words New Zealand Football a link?
+ `<a href="https://www.nzfootball.co.nz">New Zealand Football</a>`
- `<link href="https://www.nzfootball.co.nz">New Zealand Football</link>`
- `<a src="https://www.nzfootball.co.nz">New Zealand Football</a>`
- `<a>New Zealand Football</a>`
> A link is an `<a>` tag with the address in `href`. The `<link>` tag is only for linking your CSS.
```

## Indenting your code

Indenting (moving lines in with spaces) shows which tags sit inside other tags. It makes mistakes easy to spot.

VS Code can do it for you: right-click in your code and click **Format Document**, or press <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd>.

<div class="file-label">index.html (a comment)</div>

```html
<!-- Section 2: where to play -->
<h2>Where can I play?</h2>
```

A comment (`<!-- -->`) is a note to yourself. It doesn't show on the page.

```quiz
Why indent your code?
+ It shows which tags sit inside other tags, so mistakes are easy to spot
- It changes how the page looks
- It makes the page load faster
- It hides code from the reader
> Indenting doesn't change the page. It makes your code easier to read and check.

You write `<!-- Section 2: where to play -->` in your HTML. What shows on the page?
+ Nothing. It's a note to yourself.
- A heading that says Section 2
- An error message
- The words in the browser tab
> Comments never show on the page.
```
