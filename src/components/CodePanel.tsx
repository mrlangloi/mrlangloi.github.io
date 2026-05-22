import { CodeLine } from '../types/token'
import styles from './Hero.module.css'
import Line from './Line'

interface CodePanelProps {
    filename: string
    lines: CodeLine[]
}

const CodePanel = ({ filename, lines }: CodePanelProps) => (
    <div className={styles['hero-code-panel']}>

        {/* title */}
        <div className={styles['hero-code-titlebar']}>
            <span className={styles['hero-code-dot']} />
            <span className={styles['hero-code-dot']} />
            <span className={styles['hero-code-dot']} />
            <span className={styles['hero-code-filename']}>{filename}</span>
        </div>

        {/* body */}
        <div className={styles['hero-code-body']}>

            {/* line numbers */}
            <div className={styles['hero-code-nums']}>
                {lines.map((_, i) => (
                    <span key={i}>{i + 1}</span>
                ))}
            </div>

            {/* code lines */}
            <div className={styles['hero-code-lines']}>
                {lines.map((line, i) => (
                    <Line key={i} line={line} />
                ))}
            </div>

        </div>

    </div>
)

export default CodePanel