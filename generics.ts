// function getArray(items: any[]): any[] {
//   return new Array().concat(items);
// }

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

const numArr = getArray<number>([10, 20, 30]);
const strArr = getArray<string>(["a", "b", "c"]);

numArr.push("sas");
strArr.push(11);

console.log(numArr);
console.log(strArr);

const file: MyFile = new File("s", "file.zip");

interface MyFile extends Partial<File> {}

interface Fun {
  create(): void;
}

abstract class AbstractController {
  route: string;
}

abstract class AbstractController2 {
  route2: string;
}

class MyController implements AbstractController, AbstractController2 {
  route: string;
  route2: string;
}
