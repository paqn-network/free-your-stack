// Free Your Stack: the catalogue of free and open-source alternatives.
//
// Pure data plus one builder function, so the page stays simple and adding tools
// later is just editing this list. Everything runs in the browser.

export type Effort = 'ready' | 'setup' | 'managed';

export interface Pick {
  name: string;
  why: string;
  url: string;
  effort: Effort;
}

export interface Category {
  id: string;
  need: string; // the job to be done
  youUse: string; // the paid tools people recognise
  picks: Pick[];
}

export const EFFORT_LABEL: Record<Effort, string> = {
  ready: 'Ready to use',
  setup: 'Needs setup',
  managed: 'We can set this up',
};

export const WHAT_YOULL_MASTER: string[] = [
  'Run your organisation without paying per person, per month.',
  'Keep your data yours, not mined or sold to advertisers.',
  'Swap the big-tech tools you rely on for free, open ones you can trust.',
  'Know which switches you can make today, and which need a hand.',
];

export const CATEGORIES: Category[] = [
  {
    id: 'teamchat',
    need: 'Team chat',
    youUse: 'Microsoft Teams, Slack',
    picks: [
      { name: 'Element', effort: 'ready', url: 'https://element.io', why: 'Encrypted team chat on the open Matrix network. Use the matrix.org server free, no setup needed.' },
      { name: 'Self-hosted Matrix', effort: 'managed', url: 'https://matrix.org', why: 'Your own private chat server, fully under your control.' },
    ],
  },
  {
    id: 'office',
    need: 'Documents & office',
    youUse: 'Microsoft 365, Google Workspace',
    picks: [
      { name: 'CryptPad', effort: 'ready', url: 'https://cryptpad.org', why: 'Encrypted docs, sheets and slides in your browser. No account needed to start.' },
      { name: 'LibreOffice', effort: 'ready', url: 'https://www.libreoffice.org', why: 'The full office suite installed on your computer, free forever.' },
      { name: 'Nextcloud Office', effort: 'managed', url: 'https://nextcloud.com', why: 'A shared online office for the whole team, hosted for you.' },
    ],
  },
  {
    id: 'calls',
    need: 'Video calls',
    youUse: 'Zoom, Teams, Google Meet',
    picks: [
      { name: 'Jitsi Meet', effort: 'ready', url: 'https://meet.jit.si', why: 'Start a call from a link. No account, no time limit.' },
      { name: 'BigBlueButton', effort: 'managed', url: 'https://bigbluebutton.org', why: 'Webinars and online sessions with breakout rooms, for bigger needs.' },
    ],
  },
  {
    id: 'storage',
    need: 'File storage & sharing',
    youUse: 'Dropbox, Google Drive',
    picks: [
      { name: 'CryptPad Drive', effort: 'ready', url: 'https://cryptpad.org', why: 'Encrypted file storage that comes with a free CryptPad account.' },
      { name: 'Nextcloud', effort: 'managed', url: 'https://nextcloud.com', why: 'Your own Drive, calendar and contacts on space you control.' },
    ],
  },
  {
    id: 'newsletters',
    need: 'Newsletters & email marketing',
    youUse: 'Mailchimp',
    picks: [
      { name: 'Listmonk', effort: 'managed', url: 'https://listmonk.app', why: 'Self-hosted newsletters with no per-subscriber fees, however big your list.' },
    ],
  },
  {
    id: 'passwords',
    need: 'Password manager',
    youUse: 'LastPass, 1Password',
    picks: [
      { name: 'Bitwarden', effort: 'ready', url: 'https://bitwarden.com', why: 'Free password manager for individuals and teams, synced across devices.' },
      { name: 'KeePassXC', effort: 'ready', url: 'https://keepassxc.org', why: 'An offline password vault stored on your own machine.' },
    ],
  },
  {
    id: 'forms',
    need: 'Forms & surveys',
    youUse: 'Google Forms, Typeform, SurveyMonkey',
    picks: [
      { name: 'CryptPad Forms', effort: 'ready', url: 'https://cryptpad.org', why: 'Encrypted forms and surveys, no account needed.' },
      { name: 'LimeSurvey', effort: 'setup', url: 'https://www.limesurvey.org', why: 'Powerful surveys with logic and exports, hosted by you.' },
    ],
  },
  {
    id: 'tasks',
    need: 'Project & task management',
    youUse: 'Trello, Asana, Monday',
    picks: [
      { name: 'Planka', effort: 'managed', url: 'https://planka.app', why: 'Kanban boards for your team, hosted for you.' },
      { name: 'Vikunja', effort: 'managed', url: 'https://vikunja.io', why: 'Tasks, lists and boards in one place.' },
    ],
  },
  {
    id: 'design',
    need: 'Design & images',
    youUse: 'Canva, Adobe',
    picks: [
      { name: 'Penpot', effort: 'ready', url: 'https://penpot.app', why: 'Design and prototyping in the browser, the open Figma alternative.' },
      { name: 'GIMP', effort: 'ready', url: 'https://www.gimp.org', why: 'Photo editing on your computer, the Photoshop alternative.' },
      { name: 'Inkscape', effort: 'ready', url: 'https://inkscape.org', why: 'Vector graphics and logos, the Illustrator alternative.' },
    ],
  },
  {
    id: 'analytics',
    need: 'Website analytics',
    youUse: 'Google Analytics',
    picks: [
      { name: 'Matomo', effort: 'managed', url: 'https://matomo.org', why: 'Privacy-friendly analytics you own, with nothing sold to Google.' },
      { name: 'Plausible', effort: 'setup', url: 'https://plausible.io', why: 'Lightweight, cookie-free site analytics.' },
    ],
  },
  {
    id: 'crm',
    need: 'Donor & contact management (CRM)',
    youUse: 'Salesforce, HubSpot',
    picks: [
      { name: 'CiviCRM', effort: 'managed', url: 'https://civicrm.org', why: 'A CRM built for charities: donors, members, campaigns and events.' },
    ],
  },
];

const NOTE =
  'These are all free and open source. We have no affiliation, and nothing here leaves your browser.';

export function buildStackChecklist(selectedIds: string[]): string {
  const chosen = CATEGORIES.filter((c) => selectedIds.includes(c.id));
  const lines: string[] = [];
  lines.push('# Your free and open-source stack');
  lines.push('');
  lines.push('_Built with Free Your Stack on paqn.network. The paid tools you use, and the free ones you can switch to._');
  lines.push('');

  if (!chosen.length) {
    lines.push('Tick the tools you use to build your stack.');
    lines.push('');
    return lines.join('\n');
  }

  for (const c of chosen) {
    lines.push(`## ${c.need} (instead of ${c.youUse})`);
    lines.push('');
    for (const p of c.picks) {
      lines.push(`- [ ] **${p.name}** (${EFFORT_LABEL[p.effort]}). ${p.why} ${p.url}`);
    }
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push('**What the tags mean:** "Ready to use" you can start today. "Needs setup" takes some technical work. "We can set this up" means PAQN can host and run it for you.');
  lines.push('');
  lines.push(NOTE);
  lines.push('');
  lines.push('Want help with the harder ones? Book a call: https://paqn.network/contact');
  lines.push('');

  return lines.join('\n');
}
