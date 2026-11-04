# DGT ākonga site

The Digital Technologies site for Marcellin College ākonga, published at
**https://marcellin-college-dgt.github.io/**.

Anyone on the internet can read this site and this repo. Only put things here that
would be fine on a classroom wall. Schedules, kaiako notes, model answers, marking and
ākonga work stay in Google Classroom or the kaiako drive.

## Adding or changing something

Every resource is one Markdown file in `src/content/`. Edit it on github.com, in
VS Code or with GitHub Desktop, then commit to `main`. The site rebuilds itself in a
couple of minutes. If something is wrong, the build stops, the live site stays as it
was, and GitHub emails you what failed.

| What | Folder | PDFs and files go in |
| --- | --- | --- |
| Year overview | `src/content/overviews/year-NN.md` | none |
| Assessment | `src/content/assessments/` | `public/files/assessments/`, `public/files/slides/` |
| How-to guide | `src/content/guides/` | `public/files/guides/` |

A file path in a page is written from `/files/…`, for example
`/files/assessments/y09-web-page-task.pdf`.

### Drafts

`draft: true` keeps a page off the live site. You can still see drafts while
previewing (below). Set `draft: false` when it's ready.

### Hiding a year level

`HIDDEN_YEARS` in `src/lib/site.ts` lists year levels the site leaves out: no button,
no page. Years 11–13 are hidden while seniors are on exam leave. Take a year out of the
list to bring it back.

### Assessment pages

```yaml
title: Build a game in Godot
year: 12
standards: ["91896"]          # leave out for junior assessments
term: 2
summary: One sentence on what ākonga make.
handIn: Commit to your GitHub repo and hand in the link on Google Classroom
due: End of Week 9
dueDate: 2027-06-25
template: https://docs.google.com/document/d/<id>/copy   # the make-a-copy link
files:
  - { label: Task instructions, path: /files/assessments/l2-91896-task.pdf }
  - { label: Critique sheet, path: /files/assessments/l2-91896-critique.pdf }
slides: /files/slides/l2-91896-evidence.pdf
guides: [godot-new-project, github-desktop-commit]   # guide file names, no .md
draft: false
```

**Dates.** The page says when work is due in weeks (`due: End of Week 3`), so it fits
every rotation. `dueDate: 2026-11-13` is this class's real date: it puts the task in the
**Due soon** list on Home (for the four weeks before it) and shows beside the week until
the day passes. Change `dueDate` for each new class; leave it out if you don't want the
task in Due soon.

**Task PDFs live here.** The site's copy is the one ākonga use. In Google Classroom,
link to the assessment page instead of attaching the PDF. To fix a task, replace the PDF
in `public/files/assessments/` with a file of the same name and commit: every link keeps
working.

Under the front matter, a `## Help with your template` heading followed by
`### Question 1: …`, `### Question 2: …` headings turns each question into a
fold-out on the page. Put the explanation and an example answer under each one.

### Guide pages

```yaml
title: Commit and push with GitHub Desktop
useWhen: you've saved your changes and want them on GitHub.
tools: [GitHub Desktop]       # the first tool is the group it's listed under
years: [10, 11, 12, 13]
pdf: /files/guides/github-desktop-commit.pdf
draft: false
```

## Safety checks

`scripts/check-public.mjs` runs before every build and stops it if:

- a file in `public/` has a name with *kaiako*, *teacher*, *schedule*, *model answer*,
  *marking*, *exemplar*, *answer key* or *observation* in it, or
- a published page links to a `/files/…` PDF that isn't in the repo.

Each page's front matter is also checked: a misspelt or unknown field (for example
`schedule:`) stops the build.

## Previewing on your computer

```
npm install
npm run dev              # live preview at http://localhost:4321, drafts shown
npm run preview:drafts   # full build with search, drafts shown
npm run build            # exactly what gets published
```

## Publishing set-up (once)

1. Repo **Settings › Pages › Build and deployment › Source**: choose **GitHub Actions**.
2. Push to `main`. The **Publish site** workflow builds and publishes the site.
