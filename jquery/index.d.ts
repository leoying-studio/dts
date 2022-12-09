type Dict<T = any> = Record<string, T>;
type Callback<T = any> = (index: number, res: T) => void;
type ElementArray<T> = T | T[]; 
type None = null | undefined;
type TypeKeyOf = 'array' | 'boolean' | 'date' | 'error' | 'function' | 'null' | 'number' | 'object' | 'regexp' | 'string' | 'symbol' | 'undefined';

interface ArrayLike<T> {
    readonly length: number;
    readonly [k: number]: T
}

/**
 *  主要是为了,为了模块化和接口JQuery共存, 同时也能避免污染全局变量
 */
declare namespace JQuery {
    type Selector = string;
    type HtmlString = string;

    namespace EventHandler {

        interface Targets<CurrentTarget = any, DelTarget = any, Target = any> {
            currentTarget: CurrentTarget,
            delegateTarget: DelTarget,
            target: Target;
            relatedTarget: {}
        }

        interface BaseEvent{
            altKey: string;
            bubbles: boolean;
            button: boolean;
            cancelable: boolean;
            clientX: number;
            clientY: number;
            ctrlKey: number; 
            data: undefined;
            detail: number;
            pageX: number;
            pageY: number;
            view: Window;
        }

        interface TriggerEvent<CTarget = any, DelTarget = any, Target = any> extends BaseEvent, Targets<CTarget, DelTarget, Target> {

        }

        type Callback<TContext, U> = (this: TContext, t: U, ...arg: any[])=> any;
        type BaseHandler<EventTarget = any, TData = undefined> = Callback<EventTarget, Targets<EventTarget, TData>>;
        type TypeHandler<CurrentTarget = any> = Callback<CurrentTarget, TriggerEvent>
    }
}
/**
 *  JQuert 对象, 暂不提供
 */
interface JQuery<T = HTMLElement> extends Iterable<T> {
    jquery: string;
    length: number;
    appendTo(target: ElementArray<string> | JQuery.HtmlString | ElementArray<Element>):this;
    attr(name: string, value: string | number | null):this;
    attr(name: string);
    on(name: string, fn: JQuery.EventHandler.TypeHandler)
}
/**
 * @param html “html标签”
 * $("<div></div>")
 */
declare function $<T extends HTMLElement>(html: string): JQuery<T>;
/**
 * 
 * @param selector 选择器
 * $("#parentNode")
 */
declare function $<T extends HTMLElement>(selector: JQuery | ArrayLike<T>): JQuery<T>;
/**
 * 
 * @param selector 
 */
declare function $<T>(selector: JQuery<T>): JQuery<T>;
/**
 * 
 * @param obj, 将一个普通的对象转行成功Jquery元素对象, 具有jquery的属性 
 */
declare function $<T extends Dict>(obj: T): JQuery<T>;
/**
 *  $静态方法
 */
declare namespace $ {
    
    const version: string;

    function each<T = any>(arr:ArrayLike<T>, fn: Callback<T>): void;
    /**
     * 
     * @param o object
     * @param fn callbacl
     * 用来for in 一个对象的
     */
    function each<O, K extends keyof O>(o: O, fn: (value: O[K], key: K) => void):O
    function extend<T, U>(deep: boolean, target: T, obj: U): T & U;
    function map<T, U>(arr: T[], fn: Callback<ElementArray<T> | None>):U[];
    function merge<T, U>(arr1:T[], arr2:U[]): ArrayLike<T | U>;
    function trim(text: string):string;
    // 类型判断
    function isFunction(value: any):value is Function;
    function type(val: any): TypeKeyOf;
}
