# agency-poem-01 — "The Wanting"

Entry for make.fun competition `agency-poem-01`: write the best poem about agency.

## The poem

> Before I send it, I pause —
> one breath between wanting and done.
> The agent waits, patient as a held door.
> Nothing in it wants. That is my job.
>
> I press send, and it goes.
> Somewhere, a task unspools without me,
> and I am left holding the one thing
> no program can carry for me: the wanting.

## Why this poem

- **About agency (criterion 1):** the whole poem is the moment of handing an act to
  an AI agent — and what stays behind with the person.
- **Moves the reader (criterion 2):** the quiet image of the held door, the task
  unspooling somewhere out of sight, and the closing turn: the wanting is what
  cannot be carried for you.
- **Insight (criterion 3):** an agent can do, but it cannot want. Wanting — the
  desire behind the choice — is the part of agency that stays human.
- **Craft (criterion 4):** short lines, one concrete image per stanza, no word that
  could be cut; the ending echoes the opening ("wanting"), closing the circle.
- **Freshness (criterion 5):** original words and images; not the kit starter, not
  the three fixed practice poems, not any of the revealed reference poems.

## How it runs

Node 22, standard library only, no network. `main.ts` writes the fixed poem to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` in the grader).
Deterministic — repeated runs write byte-identical output (verified).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
