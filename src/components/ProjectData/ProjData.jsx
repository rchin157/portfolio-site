import Project1 from "./Project1";

let projs = [
    {
        name: "Project One",
        desc: "project 1 description!",
        id: "project1",
        image: "https://lh3.googleusercontent.com/pw/AM-JKLVeLzJ9GtiOSqmwtHOLzlT6CYBGyIim38_dHXeVIQ7viIO-EB-MnNK75TSq5-iCxmK5_Q2AXUl-0PG353LwzxsaSVgvFUt3J2L7tcklWo4M2qml0fSHwbgS6d1rwibH-9fYjPk7dbQzKqO6dtiQ9V1ejQ=w1080-h533-no",
        rcomp: <Project1 />
    },
];

export function getProject(id) {
    return projs.find(
        (proj) => proj.id === id
    );
}

export function getProjs() {
    return projs;
}