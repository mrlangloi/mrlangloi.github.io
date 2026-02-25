export interface Course {
    id: number;
    code: string;
    title: string;
}

const courseList = [
    {
        code: "CMPT 201",
        title: "Systems Programming",
    },
    {
        code: "CMPT 210",
        title: "Probability and Computing",
    },
    {
        code: "CMPT 213",
        title: "Object Oriented Design",
    },
    {
        code: "CMPT 225",
        title: "Data Structures and Programming",
    },
    {
        code: "CMPT 263",
        title: "Introduction to Human Centered Computing",
    },
    {
        code: "CMPT 276",
        title: "Introduction to Software Engineering",
    },
    {
        code: "CMPT 295",
        title: "Intro to Computer Systems",
    },
    {
        code: "CMPT 307",
        title: "Data Structures and Algorithms",
    },
    {
        code: "CMPT 383",
        title: "Comparative Programming Languages",
    },
];

export const courses = courseList.map((course, index) => ({
    id: index + 1,
    ...course
}));