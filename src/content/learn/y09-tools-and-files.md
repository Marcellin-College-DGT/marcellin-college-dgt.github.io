---
title: Tools and files
useWhen: you need a how-to guide, or help with your project folder, your wireframe, naming files or picture file types.
years: [9]
order: 1
---

## How-to guides for the tools

The steps for the tools are in the how-to guides. Use the guide when you need it:

| When you need to | Use the guide |
| --- | --- |
| get your Google Drive on a school computer | [Sign in to Google Drive for desktop](/guides/sign-in-to-google-drive-for-desktop/) |
| open `my-page` in VS Code | [Open a project folder in VS Code](/guides/open-a-project-folder-in-vs-code/) |
| add Live Server or Draw.io to VS Code | [Install VS Code extensions](/guides/install-vs-code-extensions/) |
| make `index.html` and `style.css`, and preview with **Go Live** | [Start a web page](/guides/start-a-web-page/) |
| take a screenshot for your template | [Screenshot and paste](/guides/screenshot-and-paste/) |
| zip your `my-page` folder | [Save a version as a zip](/guides/save-a-version-as-a-zip/) |

```quiz
You want to put your whole `my-page` folder into one file to hand in. Which guide do you need?
- Start a web page
+ Save a version as a zip
- Open a project folder in VS Code
- Screenshot and paste
> **Save a version as a zip** shows how to zip `my-page` into one file for Google Classroom.
```

## Your project folder

Keep every file for this project in one folder called `my-page`, in **Google Drive (G:)** › **My Drive**. Put your pictures in a folder inside it called `images`.

```text
my-page/
├── index.html
├── style.css
├── wireframe.drawio.png
└── images/
    ├── muddy-boots.jpg
    └── team-photo.jpg
```

> **Tip:** Then nothing gets lost, and your zip has everything.

```quiz
Where should the photos for your page go?
- In your Downloads folder
+ In the `images` folder inside `my-page`
- On the Desktop
- In a new folder anywhere in My Drive
> Everything for the project stays in `my-page`, with pictures in `images`. Then nothing gets lost and your zip has everything.
```

## Draw your wireframe in Draw.io

A wireframe (a plan of your page made of boxes) shows where each part goes before you code it.

1. <span class="where">VS Code › Explorer</span> Make a new file called `wireframe.drawio.png`.
2. <span class="where">Draw.io editor</span> Drag a rectangle from the shapes on the left onto the page.
3. <span class="where">Draw.io editor</span> Double-click the rectangle and type a label, such as `h1: My heading`.
4. <span class="where">Draw.io editor</span> Add a box for each heading, paragraph and image, from top to bottom.
5. <span class="where">Draw.io editor</span> Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.

The file is a picture **and** a drawing you can still edit. To put it in your template:

1. <span class="where">Google Docs › Menu</span> Click **Insert** › **Image** › **Drive**.
2. <span class="where">Google Drive panel</span> Open `my-page`, click `wireframe.drawio.png` and click **Insert**.

> **Watch out:** The name must end in `.drawio.png`. If it ends in just `.png`, VS Code opens it as a normal picture you can't edit.

See the guide [Draw a wireframe in Draw.io](/guides/draw-a-wireframe-in-draw-io/) for every step with pictures.

```quiz
What is a wireframe?
- The finished page, with colours and photos
+ A plan of your page made of boxes, showing where each part goes
- A list of the files in `my-page`
- The code for your page

You named your file `wireframe.png`. What happens when you click it in VS Code?
- Draw.io opens it, ready to edit
+ It opens as a normal picture you can't edit
- VS Code deletes it
- It opens in Google Docs
> The name must end in `.drawio.png` for Draw.io to open it.
```

## Name your files

Web pages are fussy about names. Follow these rules for every file and folder:

- all lowercase letters
- no spaces (use a dash `-` instead)
- a name that says what it is

| Not like this | Like this |
| --- | --- |
| `Muddy Boots.JPG` | `muddy-boots.jpg` |
| `IMG_4021.jpg` | `team-photo.jpg` |
| `Style.css` | `style.css` |
| `Index.HTML` | `index.html` |

**Why?** A space can break a path. On a real web server, `Boots.jpg` and `boots.jpg` are two different files, so a page that works on your computer can break online.

To rename a file in VS Code, right-click it and click **Rename** (or press <kbd>F2</kbd>). Then fix the name everywhere it is used in your code.

```quiz
Which file name follows the rules?
- `Muddy Boots.JPG`
- `IMG_4021.jpg`
+ `muddy-boots.jpg`
- `muddy boots.jpg`
> All lowercase, a dash instead of a space, and it says what the picture is.

Your page shows `boots.jpg` on your computer, but the picture breaks online. The file is called `Boots.jpg`. Why?
+ On a web server, `Boots.jpg` and `boots.jpg` are different files
- The picture is too big for the internet
- Web pages can't show `.jpg` files
- The picture needs alt text
> Capitals matter online. Use lowercase names, and make the code match exactly.
```

## JPG or PNG?

| Use | For | Why |
| --- | --- | --- |
| `.jpg` | photos from a camera or phone | Keeps lots of colours in a small file, so the page loads fast. |
| `.png` | drawings, diagrams, screenshots and anything with writing | Keeps lines and text sharp. Can have a see-through background. |
| `.heic` | don't use it | iPhones save photos as `.heic`, and Chrome can't show it. |

**iPhone fix:** on the phone, go to **Settings** › **Camera** › **Formats** and choose **Most Compatible**. New photos will be `.jpg`.

Getting a phone photo onto the computer:

1. <span class="where">Google Drive app (phone)</span> Tap **+** › **Upload** and choose your photo.
2. <span class="where">File Explorer › My Drive</span> Drag the photo into `my-page` › `images`, then rename it.

```quiz
You drew a diagram with labels on it. Which file type is best?
- `.jpg`
+ `.png`
- `.heic`
- `.drawio`
> PNG keeps lines and writing sharp. JPG is for photos.

Your iPhone photo won't show in Chrome. What's the most likely reason?
+ It's a `.heic` file
- It has too many colours
- Photos must be `.png`
- Chrome can't show phone photos
> iPhones save photos as `.heic`, which Chrome can't show. Change the setting to **Most Compatible** so new photos are `.jpg`.
```
