// type Dict<T = any> = Record<string, T>

// interface Jquery<T = HTMLElement> extends Iterable<T> {}

// /**
//  *  定义项目中全局通用的， 比如该项目里面有通用的工具ts定义
//  */
// declare global{
//    export interface Person {
//         a: string;
//     }
//     namespace $ {
//         const version: string;
//     }

//     /**
//      * 方法重载
//      * @param selector 
//      */
//     function $<T = HTMLElement>(selector: string): Jquery<T>
//     function $(selector: Dict): Jquery<Dict>


//     /**
//      * 扩展window 对象上的属性
//      */

//     interface Window {
//         hello(): void;
//     }
// }

// /**
//  *  针对模块的， 第三方库没有的， 仅仅限制对于到处的对象有该方法
//  */
// declare module "foo" {
//     function sayHello();
// }

// export {}


// // https://segmentfault.com/a/1190000041845026

$("").on("click", function(e) {
    e.pageX;
});

$("").appendTo("aa");


function isString(s: any): boolean {
     return typeof s === 'string';
}

function a(n) {
    if (isString(n)) {
        n.split();
    }
}