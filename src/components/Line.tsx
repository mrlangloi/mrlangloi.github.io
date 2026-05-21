import { CodeLine, TokenType } from '../types/token'
import styles from './Hero.module.css'

interface CodeLineProps {
    line: CodeLine
}

const Line = ({ line }: CodeLineProps) => {
    if (line.blank) {
        return <span className={styles['cl']}>&nbsp;</span>
    }

    const TOKEN_CLASS: Record<NonNullable<TokenType>, string> = {
        key: styles['c-key'],
        type: styles['c-type'],
        str: styles['c-str'],
        punct: styles['c-punct'],
        blank: '',
        cursor: '',
    }

    const indent = '\u00A0'.repeat((line.indent ?? 0) * 2)

    return (
        <span className={styles['cl']}>
            { indent && <span>{indent}</span> }
            { line.tokens.map((token, i) => {

                const cls = token.type ? TOKEN_CLASS[token.type] : undefined

                return cls
                    ? <span key={i} className={cls}>{token.value}</span>
                    : <span key={i}>{token.value}</span>
            }) }
            { line.cursor && <span className={styles['hero-cursor']} /> }
        </span>
    )
}

export default Line