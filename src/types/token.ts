export type TokenType =
    | 'key'     // keywords & property names  → blue
    | 'type'    // type names                 → cyan
    | 'str'     // string literals            → green
    | 'punct'   // punctuation               → muted
    | 'blank'   // empty line (no tokens)
    | 'cursor'; // blinking cursor line

export interface Token {
    type?: TokenType; // undefined → plain ink-2 colour
    value: string;
}

export interface CodeLine {
    indent?: number;  // number of 2-space indents, default 0
    tokens: Token[];
    cursor?: boolean; // append blinking cursor after tokens
    blank?: boolean;  // render as an empty line (&nbsp;)
}