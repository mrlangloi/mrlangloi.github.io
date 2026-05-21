import type { CodeLine } from '../components/CodePanel';

// Shorthand helpers so the array below stays readable
const k  = (value: string) => ({ type: 'key'   as const, value });
const t  = (value: string) => ({ type: 'type'  as const, value });
const s  = (value: string) => ({ type: 'str'   as const, value: `"${value}"` });
const p  = (value: string) => ({ type: 'punct' as const, value });
const _  = (value: string) => ({ value }); // plain

export const heroLines: CodeLine[] = [
    // interface Developer {
    { tokens: [k('interface'), _(' '), t('Developer'), _(' '), p('{')] },
    { indent: 1, tokens: [k('name'),       p(':'),  _('       '), t('string')]        },
    { indent: 1, tokens: [k('degree'),     p(':'),  _('     '), t('string')]          },
    { indent: 1, tokens: [k('languages'),  p(':'),  _('  '), t('string'), p('[]')]    },
    { indent: 1, tokens: [k('frameworks'), p(':'),  _(' '), t('string'), p('[]')]     },
    { indent: 1, tokens: [k('tools'),      p(':'),  _('      '), t('string'), p('[]')]},
    { indent: 1, tokens: [k('status'),     p(':'),  _('     '), s('available'), _(' '), p('|'), _(' '), s('busy')] },
    { tokens: [p('}')] },

    {
        blank: true,
        tokens: []
    },

    // const me: Developer = {
    { tokens: [k('const'), _(' '), t('me'), p(':'), _(' '), t('Developer'), _(' '), p('='), _(' '), p('{')] },
    { indent: 1, tokens: [k('name'),       p(':'), _('       '), s('Ricky Cheung'),          p(',')]  },
    { indent: 1, tokens: [k('degree'),     p(':'), _('     '), s('BSc Computing Science'),   p(',')]  },

    // languages
    { indent: 1, tokens: [k('languages'),  p(':'), _('  '), p('[')]  },
    { indent: 2, tokens: [s('TypeScript'), p(','), _(' '), s('JavaScript'), p(',')]  },
    { indent: 2, tokens: [s('Java'),       p(','), _(' '), s('C/C++'),      p(','), _(' '), s('Python'), p(',')]  },
    { indent: 2, tokens: [s('SQL'),        p(','), _(' '), s('HTML/CSS'),   p(',')]  },
    { indent: 1, tokens: [p('],')] },

    // frameworks
    { indent: 1, tokens: [k('frameworks'), p(':'), _(' '), p('[')] },
    { indent: 2, tokens: [s('React'),       p(','), _(' '), s('Node.js'),     p(','), _(' '), s('Express'),  p(',')]  },
    { indent: 2, tokens: [s('Spring Boot'), p(','), _(' '), s('Vite'),        p(',')]  },
    { indent: 1, tokens: [p('],')] },

    // tools
    { indent: 1, tokens: [k('tools'),      p(':'), _('      '), p('[')] },
    { indent: 2, tokens: [s('Git'), p(','), _(' '), s('Docker'), p(','), _(' '), s('Jest'), p(','), _(' '), s('JUnit'), p(',')]  },
    { indent: 2, tokens: [s('VS Code'),    p(','), _(' '), s('IntelliJ'),    p(',')]  },
    { indent: 1, tokens: [p('],')] },

    { indent: 1, tokens: [k('status'),     p(':'), _('     '), s('available'), p(',')]  },
    { tokens: [p('};')] },

    {
        blank: true,
        tokens: []
    },
    {
        blank: true, cursor: true,
        tokens: []
    },
];