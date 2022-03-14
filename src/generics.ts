log("=".repeat(20));
const markArray = <T>(x: T) => [x];
log(markArray<number>(1));
log(markArray("1"));

const markArrTU = <T, U>(x: T, y: U) => [x, y];
const m4 = markArrTU(1, "1");
m4.push(1);
log(m4);

const markTuple = <T extends string | number, U extends string | number>(
  x: T,
  y: U
): [T, U] => [x, y];

const m7 = markTuple<string, number>("1", 1);
log(m7);

type person = {
  name: string;
  age: number;
  gender?: string;
};

const markPerson = <T extends person>(x: T) => ({
  ...x,
  age: x.age + 1,
  info: `My name ${x.name} is ${x.age} years old, gender: ${x?.gender}`,
});

const m8 = markPerson({ name: "kuro", age: 1 });
log(m8.info);

interface IPerson<T> {
  id: number;
  name: string;
  data: T;
}

const mP: IPerson<string> = {
  id: Math.floor(Math.random() * 100),
  name: "kuro",
  data: "ok",
};
log(mP);

function addNumber<A, B>(x: A, y: B): A & B {
  return { ...x, ...y };
}
