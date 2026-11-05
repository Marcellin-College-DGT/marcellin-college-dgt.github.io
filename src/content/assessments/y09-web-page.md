---
title: My Passion Page
year: 9
order: 1
summary: Build a one-page website about something you love, written for one real reader who doesn't know much about it yet.
handIn: Zip your my-page folder, upload the zip to Google Classroom, then click Turn in. Your template is already attached.
due: End of Week 3
files:
  - { label: Task and rubric, path: /files/assessments/9dgt-my-passion-page.pdf }
guides:
  - open-a-project-folder-in-vs-code
  - draw-a-wireframe-in-draw-io
  - start-a-web-page
  - screenshot-and-paste
  - save-a-version-as-a-zip
  - open-and-hand-in-your-evidence-template
  - hand-in-on-google-classroom
draft: false
---

## Three weeks, three parts

- **Week 1, Part 1: Plan.** Choose your topic and reader, write your words, choose your pictures and colours, and draw your wireframe. Checkpoint 1 at the end of Week 1.
- **Week 2, Part 2: Build.** Make `index.html` and `style.css` in VS Code and preview them with Live Server: click **Go Live**, or right-click `index.html` › **Open with Live Server** (they do the same thing). Checkpoint 2 at the end of Week 2.
- **Week 3, Part 3: Test, get feedback and improve.** Test your page, swap feedback in the gallery walk and make changes.

<div class="rules">

**Keep it private.** Don't put your full name, address, phone number or school on your page. Don't use photos that show people's faces or where you live.

**No generative AI.** You must not use it at any stage. That includes Copilot in VS Code, Gemini in Google Docs and AI image makers.

</div>

## Example work

This example is made up, not a real ākonga's work. It shows complete work at the expected standard (**4A**) on a different topic, wharf fishing. Use it to see what finished work looks like. Your page needs your own topic, words and photos.

- [Open the example page](/examples/y09-my-passion-page/). To see its HTML, right-click the page › **View page source**, or press **Ctrl** + **U**.
- [See its wireframe](/examples/y09-my-passion-page/wireframe.drawio.png)
- [Example template (PDF)](/files/examples/y09-my-passion-page-example-template.pdf)

## Help with your template

Open each question to see what it's asking, with a short example from the example work. Your answers in Part 1 become the words on your page.

### The top of my page

Your `<title>` shows in the browser tab, and your `<h1>` is the big heading at the top of the page. Keep both short. Your reader is one real person or group, such as a cousin, a classmate or your nan, not "everyone". Then list what that reader needs from your page: what they don't know yet, and what would help them understand it.

> **Example:** *My reader:* My little brother. He is 9 and has never been fishing. *What he needs:* what to bring, where to go, how to stay safe and which fish he can keep, in easy words.

### Opening paragraph

This is the first thing your reader reads. Say what your topic is and why it matters to you, in a few sentences. Write it for your reader, not for your kaiako.

> **Example:** Fishing off a wharf is one of the best things to do in Auckland, and you don't need a boat. I started going when I was ten, and now I want to show you how.

### My three sections

Each section answers one question your reader might ask. The shortened question becomes the section's `<h2>` heading, and your 2–3 sentences become its `<p>` text.

> **Example:** `<h2>` *What do I need?* `<p>` You need a short rod with a reel, some hooks, sinkers and bait. Bring a bucket, a towel, sunscreen and a drink too.

### My pictures

You need at least three images, and at least one must be a photo you took. For each one, write its file name (lowercase, no spaces, for example `muddy-boots.jpg`) and where it came from: your own photo, or the website you got it from. Alt text is one sentence that describes the image for someone who can't see it.

> **Example:** `my-fishing-gear.jpg` · My photo of my own gear · *My fishing gear on the wharf: a rod and reel, an orange bucket, a box of hooks and a pack of frozen pilchards.*

### My colours

Choose a background, heading and text colour that are easy to read together. Write each colour's name or code. You'll check them again in Part 3.

> **Example:** Background: light blue `#e8f4fa` · Headings: dark blue `#0b3c5d` · Text: very dark grey `#222222`

### How my plan suits my reader

Go back to what your reader needs. Explain how your content, your images, your colours and your layout each help that reader.

> **Example:** My brother is 9, so I used short sentences and easy words. I picked a photo of my gear so he can see what to bring. The light blue looks like the sea, and the dark text is easy for him to read.

### My wireframe

A wireframe is a simple drawing of boxes that shows where everything goes on your page. Make `wireframe.drawio.png` in your `my-page` folder, draw it in Draw.io, then paste it here.

> **Example:** [the example wireframe](/examples/y09-my-passion-page/wireframe.drawio.png): a box for each heading and paragraph, and a box with an X for each picture.

### Problems I fixed while building

Each time something breaks in Part 2, write what went wrong and how you fixed it. Write it straight away, while you still remember the details.

> **Example:** *What went wrong:* The gear photo didn't show. Only the alt text showed. *How I fixed it:* The path said `image/` but the folder is called `images`. I added the s.

### My software and file choices

For each row, write what you chose, what it does (or a feature that helped you), and why it suits your page better than another option.

> **Example:** *File type for my photos:* `.jpg`. JPG is the normal file type for camera photos. My photos have lots of colours, and JPG keeps them small so the page loads fast.

### My folder and file names

Explain how your `my-page` folder is set out and why the naming rules matter. Then explain how saving in Google Drive keeps your work safe.

> **Example:** My `my-page` folder has `index.html`, `style.css`, `wireframe.drawio.png` and an `images` folder with my three pictures. All my file names are lowercase with dashes instead of spaces. I saved everything in Google Drive so I can open it on any school computer.

### My tests

Do each test in the table, plus one test you choose yourself. Write how you tested it, what happened and what you changed. For the narrow window test, drag Chrome to about phone width.

> **Example:** *Page fits a narrow Chrome window:* The wharf photo went off the side and I had to scroll sideways. *What I changed:* I added `img { max-width: 100%; }` to `style.css`. Now the pictures shrink to fit.

### Gallery walk feedback

Write what at least two classmates said after reading your page as your reader. Then write what you changed because of it. Make at least two changes.

> **Example:** *Mere said:* The rules part is useful, but it's one big block of text. Make it a list. *What I changed:* I changed the rules into a list using `<ul>` and `<li>` tags.

### Evaluation

Judge how well your page suits your reader. Use your reader's needs, your test results and your feedback as evidence. Include anything you changed from your plan, and what you'd improve next.

> **Example:** All my tests work now. Mere's feedback made the rules easier to read, so I changed them from a paragraph into a list, which is different from my plan. Next time I would add a picture of the bait like Tama said.

### Helping my reader and keeping it safe

Explain how your alt text, colours and wording help your reader, including someone who can't see the images. Then explain your privacy choices and why they matter on a page other people can see.

> **Example:** My alt text says what is in each picture, so if a picture doesn't load my brother still knows what it shows. I didn't put my name, my school or where I live on the page, and my photos don't show anyone's face.

### Sources and help I used

List every website, video, image and person that helped you, with a link where you can. Include where each image came from.

> **Example:** *My dad* · Telling me which wharves are good for kids.
