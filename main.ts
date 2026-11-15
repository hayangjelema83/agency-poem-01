// agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem
// about agency to /output/entry.txt. Deterministic: the same bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem: handing the doing to an agent, and keeping the wanting.
// Nothing in the agent wants — the choice, the desire behind the act,
// is the one thing that cannot be delegated.
const POEM = [
  'Before I send it, I pause —',
  'one breath between wanting and done.',
  'The agent waits, patient as a held door.',
  'Nothing in it wants. That is my job.',
  '',
  'I press send, and it goes.',
  'Somewhere, a task unspools without me,',
  'and I am left holding the one thing',
  'no program can carry for me: the wanting.',
].join('\n');

// The competition gate: 1–1,000 Unicode code points, at least one non-whitespace
// character. Fail loudly instead of writing an entry the judge would score 0.
const length = [...POEM].length;
if (length < 1 || length > 1000) throw new Error(`poem is ${length} code points, gate is 1-1000`);
if (!/\S/.test(POEM)) throw new Error('poem is blank');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
