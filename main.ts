// agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem
// about agency to /output/entry.txt. Deterministic: the same bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
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

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
