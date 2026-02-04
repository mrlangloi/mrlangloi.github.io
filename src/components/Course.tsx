interface CourseProps {
    id: number;
    code: string;
    title: string;
};

const Course = (props : CourseProps) => {
    const { code, title } = props;

    return (
        <li>
            <span className="course-code">
                {code}
            </span>
            {title}
        </li>
    )
};

export default Course;