let bar = {
    name: "bar",
    sex: "female",
};

let foo = {
    ...bar, // 不会覆盖原来的 name 属性。
    name: "foo",
};

foo = {
    name: "foo",
    ...bar, // 会覆盖原来的 name 属性。
};

console.log(foo);
