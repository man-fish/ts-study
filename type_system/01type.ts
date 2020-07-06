// boolean
let isDone: boolean = true;
console.log(isDone);

// number
let dec: number = 1;
let hex: number = 0xaa;
let bin: number = 0b01;
let oct: number = 0o01;

// string
let str: string = "\\";
let templateStr: string = `${str}/`;
let char: string = "\\\\";

// Array
let nums: number[] = [1, 2, 1];
let list: Array<number> = [1, 2, 3];

// object
let obj: object = {};

// Tuple
let tunple: [number, string] = [100, "100"];
console.log(tunple);

// Enum
enum HttpCode {
    ParamsErr = 400,
    Forbidden = 403,
    NotFound,
}
let code: HttpCode = HttpCode.Forbidden;
console.log(code);

let codeMsg: string = HttpCode[400];
console.log(codeMsg);

// any
let allType: any = 1;
allType = !!allType;

// void
let nonValueValue: void = null;
let notExistValue: void = undefined;

// undefined || nyll
let u: undefined = undefined;
let n: null = null;
dec = u;

// never
function error(): never {
    throw new Error();
}

function retErr() {
    return new Error(); // 虽然没有
}

function infiniteLoo(): never {
    while (true) {}
}

// assert
let someStrLikeVal: any = "this is a string value";
let len: number = (<string>someStrLikeVal).length;
len = (someStrLikeVal as string).length;
console.log(len);
