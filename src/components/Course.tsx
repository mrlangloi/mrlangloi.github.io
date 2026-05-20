interface CourseProps {
    id: number;
    code: string;
    title: string;
    codeClassName?: string;
};

const Course = (props: CourseProps) => {
    const { code, title, codeClassName } = props;

    return (
        <li>
            <span className={codeClassName ?? "course-code"}>
                {code}
            </span>
            {title}
        </li>
    );
};

export default Course;