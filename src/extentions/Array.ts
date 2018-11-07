/// <reference path="./Object.ts" />

interface Array<T> {

    /**
     * 判断数组中是否包含特定的元素。
     * @param value 要判定的元素。
     * @param comparer 比较函数。
     * @returns 如果包含判定的元素，则返回 true ，否则返回 false 。
     */
    contains(value: T, comparer?: (a: T, b: T) => boolean): boolean;
    /**
     * 确定序列中的所有元素是否满足条件。
     * @param predicate 用于测试每个元素是否满足条件的函数。
     * @returns 如果本数组中的每个元素都通过指定的测试函数，或者序列为空，则为 true；否则为 false。
     */
    all(predicate: (value: T, index: number, array: T[]) => boolean): boolean;
    /**
     * 确定序列中存在满足测试函数的元素。
     * @param predicate 用于测试每个元素是否满足条件的函数。
     * @returns 如果本数组中在满足测试函数的元素，则为 true；否则为 false。
     */
    any(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean;
    /**
     * 将序列中的每个元素投影到新表中。
     * @param selector 应用于每个元素的转换函数。 
     * @returns 一个 新数组，其元素为对 数组 的每个元素调用转换函数的结果。
     */
    select<U>(selector: (value: T, index: number, array: T[]) => U): U[];

    /**
     * 基于过滤函数选择符合条件的元素。
     * @param predicate 用于测试每个源元素是否满足条件的函数。
     * @returns 符合条件的元素组成的新数组。
     */
    where(predicate: (value: T, index: number, array: T[]) => any): T[];
    /**
     * 选择数组中的第一个元素，如果数组为空，则抛出异常。
     * @returns 返回数组中的第一个元素，如果数组长度为 0，则抛出异常。
     */
    first(): T;
    /**
     * 选择数组中的第一个元素并应用转换函数，如果数组为空，则抛出异常。
     * @param selector 应用于首元素的转换函数。
     * @returns 返回数组中的第一个元素应用转换函数后的结果，如果数组长度为 0，则抛出异常。
     */
    first<U>(selector: (value: T, index: number, array: T[]) => U): U;
    /**
     * 选择数组中的第一个元素，如果数组为空，则返回 undefined。
     * @returns 返回数组中的第一个元素，如果数组长度为 0，则返回 undefined。
     */
    firstOrDefault(): T;
    /**
     * 选择数组中的第一个元素并应用转换函数，如果数组为空，则返回 undefined。
     * @param selector 应用于首元素的转换函数。
     * @returns 返回数组中的第一个元素应用转换函数后的结果，如果数组长度为 0，则返回 undefined。
     */
    firstOrDefault<U>(selector: (value: T, index: number, array: T[]) => U): U;

    /**
     * 选择数组中的最后一个元素，如果数组为空，则抛出异常。
     * @returns 返回数组中的最后一个元素，如果数组长度为 0，则抛出异常。
     */
    last(): T;
    /**
     * 选择数组中的最后一个元素并应用转换函数，如果数组为空，则抛出异常。
     * @param selector 应用于最后一个元素的转换函数。
     * @returns 返回数组中的最后一个元素应用转换函数后的结果，如果数组长度为 0，则抛出异常。
     */
    last<U>(selector: (value: T, index: number, array: T[]) => U): U;
    /**
     * 选择数组中的第一个元素，如果数组为空，则返回 undefined。
     * @returns 返回数组中的第一个元素，如果数组长度为 0，则返回 undefined。
     */
    lastOrDefault(): T;
    /**
     * 选择数组中的最后一个元素并应用转换函数，如果数组为空，则返回 undefined。
     * @param selector 应用于最后一个元素的转换函数。
     * @returns 返回数组中的最后一个元素应用转换函数后的结果，如果数组长度为 0，则返回 undefined。
     */
    lastOrDefault<U>(selector: (value: T, index: number, array: T[]) => U): U;

    /**
     * 选择数组中的唯一元素，如果数组为空或者数量大于 1，则抛出异常。
     * @returns 返回数组中的最后一个元素，如果数组长度为 0 或者数量大于 1，则抛出异常。
     */
    single(): T;

    /**
     * 选择数组中的唯一元素并应用转换函数，如果数组为空或者数量大于 1，则抛出异常。
     * @param selector 应用于唯一元素的转换函数。
     * @returns 返回数组中的唯一元素应用转换函数后的结果，如果数组长度为 0 或者数量大于 1，则抛出异常。
     */
    single<U>(selector: (value: T, index: number, array: T[]) => U): U;
    /**
     * 选择数组中的唯一元素，如果数组为空，则返回 undefined，如果数量大于1，则抛出异常。
     * @returns 返回数组中的唯一元素，如果数组长度为 0，则返回 undefined，如果数量大于1，则抛出异常。
     */
    singleOrDefault(): T;
    /**
     * 选择数组中的唯一元素并应用转换函数，如果数组为空，则返回 undefined，如果数量大于1，则抛出异常。。
     * @param selector 应用于唯一元素的转换函数。
     * @returns 返回数组中的唯一元素应用转换函数后的结果，如果数组长度为 0，则返回 undefined，如果数量大于1，则抛出异常。。
     */
    singleOrDefault<U>(selector: (value: T, index: number, array: T[]) => U): U;
    /**
     * 基于过滤函数统计符合条件的元素，如果过滤函数为空，则返回本数组的长度。
     * @param predicate 用于测试每个源元素是否满足条件的函数。
     * @returns 返回符合条件的个数，如果过滤函数为空，则返回数组的原始长度。
     */
    count(predicate?: (value: T, index: number, array: T[]) => any): number;

    /**
    * 将序列的每个元素投影到新的数组，并将结果数组合并为一个数组。
    * @param selector 应用于每个元素的转换函数。 
    * @returns 一个 新数组，其元素为对 数组 的每个元素调用转换函数的结果。
    */
    selectMany<U>(selector: (value: T, index: number, array: T[]) => U[]): U[];

    min(selector?: (value: T, index: number, array: T[]) => number): number;
    max(selector?: (value: T, index: number, array: T[]) => number): number;
    sum(selector?: (value: T, index: number, array: T[]) => number): number;
    average(selector?: (value: T, index: number, array: T[]) => number): number;

    replaceNullOrUndefined(item: T): T[];
    replaceNullOrUndefined(factory: (index: number, array: T[]) => T): T[];
    ignoreNullOrUndefined(): T[];

    distinct(comparer?: (a: T, b: T) => boolean): T[];
    except(other: T[], comparer?: (a: T, b: T) => boolean): T[];
    intersect(other: T[], comparer?: (a: T, b: T) => boolean): T[];
    union(other: T[], comparer?: (a: T, b: T) => boolean): T[];
    skip(count: number): T[];
    skipWhere(predicate: (value: T, index: number, array: T[]) => boolean): T[];

    take(count: number): T[];
    takeWhere(predicate: (value: T, index: number, array: T[]) => boolean): T[];

    orderBy(...keySelectors: (((value: T) => any) | [(value: T) => any, boolean])[]): T[];

    copy(): T[];

  

    toDictionary(keySelector: (value: T, index: number, array: T[]) => string): { [key: string]: T }
    toDictionary<U>(keySelector: (value: T, index: number, array: T[]) => string, elementSelector: (value: T, index: number, array: T[]) => U): { [key: string]: U }
    toDictionary(keySelector: (value: T, index: number, array: T[]) => number): { [key: number]: T }
    toDictionary<U>(keySelector: (value: T, index: number, array: T[]) => number, elementSelector: (value: T, index: number, array: T[]) => U): { [key: number]: U }

    toLookup(keySelector: (value: T, index: number, array: T[]) => string): { [key: string]: T[] }
    toLookup<U>(keySelector: (value: T, index: number, array: T[]) => string, elementSelector: (value: T, index: number, array: T[]) => U): { [key: string]: U[] }
    toLookup(keySelector: (value: T, index: number, array: T[]) => number): { [key: number]: T[] }
    toLookup<U>(keySelector: (value: T, index: number, array: T[]) => number, elementSelector: (value: T, index: number, array: T[]) => U): { [key: number]: U[] }

    innerJoin<U, R>(right: U[], leftKeySelector: (left: T) => any, rightKeySelector: (right: U) => any, resultSelector: (left: T, right: U) => R): R[];
    outerJoin<U, R>(right: U[], leftKeySelector: (left: T) => any, rightKeySelector: (right: U) => any, resultSelector: (left: T, right: U) => R): R[];
    leftJoin<U, R>(right: U[], leftKeySelector: (left: T) => any, rightKeySelector: (right: U) => any, resultSelector: (left: T, right: U) => R): R[];
    rightJoin<U, R>(right: U[], leftKeySelector: (left: T) => any, rightKeySelector: (right: U) => any, resultSelector: (left: T, right: U) => R): R[];

    zip<U1, R>(other1: U1[], resultSelector: (item: T, otherItem1: U1) => R): R[];
    zip<U1, U2, R>(other1: U1[], other2: U2[], resultSelector: (item: T, otherItem1: U1, otherItem2: U2) => R): R[];
    zip<U1, U2, U3, R>(other1: U1[], other2: U2[], other3: U3[], resultSelector: (item: T, otherItem1: U1, otherItem2: U2, otherItem3: U3) => R): R[];
    zip<U1, U2, U3, U4, R>(other1: U1[], other2: U2[], other3: U3[], other4: U4, resultSelector: (item: T, otherItem1: U1, otherItem2: U2, otherItem3: U3, otherItem4: U4) => R): R[];


    repeat(count: number): T[];

}
interface ArrayConstructor {
    range(stop: number): number[];
    range(start: number, stop: number, step?: number): number[];
}


if (!Array.prototype.where) {
    Array.prototype.where = Array.prototype.filter;
}
if (!Array.prototype.select) {
    Array.prototype.select = Array.prototype.map;
}
if (!Array.prototype.any) {
    Array.prototype.any = Array.prototype.some;
}
if (!Array.prototype.all) {
    Array.prototype.all = Array.prototype.every;
}
if (!Array.prototype.first) {
    Array.prototype.first = function <T, U>(selecter?: (value: T, index: number, array: T[]) => U): T | U {
        if (this.length == 0) {
            throw new Error('The array is empty.')
        }
        return selecter ? selecter(this[0], 0, this) : this[0];
    }
}
if (!Array.prototype.firstOrDefault) {
    Array.prototype.firstOrDefault = function <T, U>(selecter?: (value: T, index: number, array: T[]) => U): T | U {
        if (this.length > 0) {
            return selecter ? selecter(this[0], 0, this) : this[0];
        }
    }
}
if (!Array.prototype.last) {
    Array.prototype.last = function <T, U>(selecter?: (value: T, index: number, array: T[]) => U): T | U {
        if (this.length == 0) {
            throw new Error('The array is empty.')
        }
        let index = this.length - 1;
        return selecter ? selecter(this[index], index, this) : this[index];
    }
}
if (!Array.prototype.lastOrDefault) {
    Array.prototype.lastOrDefault = function <T, U>(selecter?: (value: T, index: number, array: T[]) => U): T | U {
        if (this.length > 0) {
            let index = this.length - 1;
            return selecter ? selecter(this[index], index, this) : this[index];
        }
    }
}
if (!Array.prototype.single) {
    Array.prototype.single = function <T, U>(selecter?: (value: T, index: number, array: T[]) => U): T | U {
        if (this.length > 1) {
            throw new Error('The array length is not equals 1.');
        } else if (this.length === 0) {
            throw new Error('The array is empty.')
        } else {
            return selecter ? selecter(this[0], 0, this) : this[0];
        }
    }
}
if (!Array.prototype.singleOrDefault) {
    Array.prototype.singleOrDefault = function <T, U>(selecter?: (value: T, index: number, array: T[]) => U): T | U {
        if (this.length > 1) {
            throw new Error('The array length is not equals 1.');
        } else if (this.length === 1) {
            return selecter ? selecter(this[0], 0, this) : this[0];
        }
    }
}
if (!Array.prototype.contains) {
    Array.prototype.contains = function <T>(value: T, comparer?: (a: T, b: T) => boolean) {
        if (comparer) {
            for (const item of this) {
                if (comparer(item, value)) {
                    return true;
                }
            }
            return false;
        } else {
            return this.indexOf(value) >= 0;
        }

    }
}
if (!Array.prototype.count) {
    Array.prototype.count = function <T>(predicate?: (value: T, index: number, array: T[]) => any) {
        return predicate ? this.where(predicate).length : this.length;
    }
}
if (!Array.prototype.min) {
    Array.prototype.min = function <T>(selector: (value: T, index: number, array: T[]) => number): number {
        if (selector) {
            let newArray = this.map(selector);
            return Math.min.apply(null, newArray);
        } else {
            return Math.min.apply(null, this);
        }
    }
}
if (!Array.prototype.max) {
    Array.prototype.max = function <T>(selector: (value: T, index: number, array: T[]) => number): number {
        if (selector) {
            let newArray = this.map(selector);
            return Math.max.apply(null, newArray);
        } else {
            return Math.max.apply(null, this);
        }
    }
}
if (!Array.prototype.sum) {
    Array.prototype.sum = function <T>(selector: (value: T, index: number, array: T[]) => number) {
        return this.reduce((prev: number, current: T, index: number) => {
            return prev + (selector ? selector(current, index, this) : Number(current));
        }, 0);
    }
}
if (!Array.prototype.average) {
    Array.prototype.average = function <T>(selector: (value: T, index: number, array: T[]) => number) {
        return this.sum(selector) / this.length;
    }
}
if (!Array.prototype.selectMany) {
    Array.prototype.selectMany = function <T, U>(selector: (value: T, index: number, array: T[]) => U[]): U[] {
        return this.reduce((prev: U[], current: T, index: number) => {
            if (current && selector) {
                let itemRes = selector(current, index, this);
                return itemRes ? prev.concat(itemRes) : prev;
            }
        }, new Array<U>())
    }
}
if (!Array.prototype.ignoreNullOrUndefined) {
    Array.prototype.ignoreNullOrUndefined = function <T>() {
        let res: T[] = []
        this.forEach((element: T) => {
            if (element !== null && element !== undefined) {
                res.push(element);
            }
        });
        return res;
    }
}
if (!Array.prototype.replaceNullOrUndefined) {
    Array.prototype.replaceNullOrUndefined = function <T>(itemOrFactory: T | ((index: number, array: T[]) => T)): T[] {
        let res: T[] = [];
        this.array.forEach((element: T, index: number) => {
            if (element === null || element === undefined) {
                if (typeof itemOrFactory == "function") {
                    res.push((itemOrFactory as (index: number, array: T[]) => T)(index, this));
                } else {
                    res.push(itemOrFactory);
                }
            } else {
                res.push(element);
            }
        });
        return res;
    }
}

if (!Array.prototype.distinct) {
    Array.prototype.distinct = function <T>(comparer: (a: T, b: T) => boolean): T[] {
        let res = new Array<T>();
        this.forEach((element: T) => {
            if (!res.contains(element, comparer)) {
                res.push(element);
            }
        });
        return res;
    }
}
if (!Array.prototype.except) {
    Array.prototype.except = function <T>(other: T[], comparer: (a: T, b: T) => boolean): T[] {
        other = (!other) ? [] : other.distinct();
        let res = new Array<T>();
        this.forEach((element: T) => {
            if (!res.contains(element, comparer) && !other.contains(element, comparer)) {
                res.push(element);
            }
        });
        return res;
    }
}
if (!Array.prototype.intersect) {
    Array.prototype.intersect = function <T>(other: T[], comparer: (a: T, b: T) => boolean): T[] {
        other = (!other) ? [] : other.distinct();
        let res = new Array<T>();
        this.forEach((element: T) => {
            if (!res.contains(element, comparer) && other.contains(element, comparer)) {
                res.push(element);
            }
        });
        return res;
    }
}

if (!Array.prototype.union) {
    Array.prototype.union = function <T>(other: T[], comparer: (a: T, b: T) => boolean): T[] {
        other = (!other) ? [] : other.distinct();
        let res = new Array<T>();
        this.forEach((element: T) => {
            if (!res.contains(element, comparer)) {
                res.push(element);
            }
        });
        other.forEach((element: T) => {
            if (!res.contains(element, comparer)) {
                res.push(element);
            }
        });
        return res;
    }
}

if (!Array.prototype.skip) {
    Array.prototype.skip = function (count: number) {
        return this.slice(count);
    }
}
if (!Array.prototype.skipWhere) {
    Array.prototype.skipWhere = function <T>(predicate: (value: T, index: number, array: T[]) => boolean): T[] {
        for (let i = 0; i < this.length; i++) {
            if (!predicate(this[i], i, this)) {
                return this.slice(i);
            }
        }
        return new Array<T>();
    }
}

if (!Array.prototype.take) {
    Array.prototype.take = function (count: number) {
        return this.slice(0, count);
    }
}
if (!Array.prototype.takeWhere) {
    Array.prototype.takeWhere = function <T>(predicate: (value: T, index: number, array: T[]) => boolean): T[] {
        let res = new Array<T>();
        for (let i = 0; i < this.length; i++) {
            if (predicate(this[i], i, this)) {
                res.push(this[i]);
            } else {
                break;
            }
        }
        return res;
    }
}
if (!Array.prototype.orderBy) {
    Array.prototype.orderBy = function <T>(...keySelectors: (((value: T) => any) | [(value: T) => any, boolean])[]): T[] {
        if (keySelectors.length == 0) {
            return this.slice(0).sort();
        } else {
            return this.slice(0).sort((a: T, b: T) => {
                for (let i = 0; i < keySelectors.length; i++) {
                    let item = keySelectors[i];
                    let keySelector: (value: T) => any;
                    let reversed: boolean;
                    if (typeof item === "function") {
                        [keySelector, reversed] = [item as (value: T) => any, false];
                    } else {
                        [keySelector, reversed] = item as [(value: T) => any, boolean];
                    }
                    let key_a = keySelector(a);
                    let key_b = keySelector(b);
                    if (key_a !== key_b) {
                        if (reversed) { return (key_a > key_b) ? -1 : 1; }
                        else { return (key_a > key_b) ? 1 : -1; }
                    }
                }
                return 0;
            });
        }

    }
}
if (!Array.prototype.copy) {
    Array.prototype.copy = function () {
        return this.slice(0);
    }
}

if (!Array.prototype.toDictionary) {
    Array.prototype.toDictionary = function <T, U>(keySelector: (value: T, index: number, array: T[]) => string | number, elementSelector?: (value: T, index: number, array: T[]) => U): { [key: string]: U | T } | { [key: number]: U | T } {
        let res: any = {};
        this.forEach((current: T, index: number) => {
            let key = keySelector(current, index, this);
            let value = elementSelector ? elementSelector(current, index, this) : current;
            res[key] = value;
        }, {});
        return res;
    }

}

if (!Array.prototype.toLookup) {
    Array.prototype.toLookup = function <T>(keySelector: (value: T, index: number, array: T[]) => string | number, elementSelector?: (value: T, index: number, array: T[]) => any): any {
        let res: any = {};
        this.forEach((current: T, index: number) => {
            let key = keySelector(current, index, this);
            let value = elementSelector ? elementSelector(current, index, this) : current;
            if (key in res) {
                res[key].push(value);
            } else {
                res[key] = [value];
            }
        }, {});
        return res;
    }
}

if (!Array.prototype.innerJoin) {
    Array.prototype.innerJoin = function <T, U, R>(right: U[], leftKeySelector: (left: T) => any, rightKeySelector: (right: U) => any, resultSelector: (left: T, right: U) => R): R[] {
        let lookup_a = this.toLookup(leftKeySelector);
        let lookup_b = (right || new Array<U>()).toLookup(rightKeySelector);
        let all_keys = Object.keys(lookup_a).intersect(Object.keys(lookup_b));
        let res: R[] = [];
        all_keys.forEach((key) => {
            let left_arr = lookup_a[key] as T[];
            let right_arr = lookup_b[key] as U[];
            for (let i = 0; i < left_arr.length; i++) {
                for (let j = 0; j < right_arr.length; j++) {
                    let item_result = resultSelector(left_arr[i], right_arr[j]);
                    if (item_result) res.push(item_result);
                }
            }
        });
        return res;
    }
}
if (!Array.prototype.outerJoin) {
    Array.prototype.outerJoin = function <T, U, R>(right: U[], leftKeySelector: (left: T) => any, rightKeySelector: (right: U) => any, resultSelector: (left: T, right: U) => R): R[] {
        let lookup_a = this.toLookup(leftKeySelector);
        let lookup_b = (right || new Array<U>()).toLookup(rightKeySelector);
        let all_keys = Object.keys(lookup_a).union(Object.keys(lookup_b));
        let res: R[] = [];
        all_keys.forEach((key) => {
            let left_arr = (lookup_a[key] || [undefined]) as T[];
            let right_arr = (lookup_b[key] || [undefined]) as U[];
            for (let i = 0; i < left_arr.length; i++) {
                for (let j = 0; j < right_arr.length; j++) {
                    let item_result = resultSelector(left_arr[i], right_arr[j]);
                    if (item_result) res.push(item_result);
                }
            }
        });
        return res;
    }
}
if (!Array.prototype.leftJoin) {
    Array.prototype.leftJoin = function <T, U, R>(right: U[], leftKeySelector: (left: T) => any, rightKeySelector: (right: U) => any, resultSelector: (left: T, right: U) => R): R[] {
        let lookup_a = this.toLookup(leftKeySelector);
        let lookup_b = (right || new Array<U>()).toLookup(rightKeySelector);
        let all_keys = Object.keys(lookup_a);
        let res: R[] = [];
        all_keys.forEach((key) => {
            let left_arr = lookup_a[key] as T[];
            let right_arr = (lookup_b[key] || [undefined]) as U[];
            for (let i = 0; i < left_arr.length; i++) {
                for (let j = 0; j < right_arr.length; j++) {
                    let item_result = resultSelector(left_arr[i], right_arr[j]);
                    if (item_result) res.push(item_result);
                }
            }
        });
        return res;
    }
}
if (!Array.prototype.rightJoin) {
    Array.prototype.rightJoin = function <T, U, R>(right: U[], leftKeySelector: (left: T) => any, rightKeySelector: (right: U) => any, resultSelector: (left: T, right: U) => R): R[] {
        let lookup_a = this.toLookup(leftKeySelector);
        let lookup_b = (right || new Array<U>()).toLookup(rightKeySelector);
        let all_keys = Object.keys(lookup_b);
        let res: R[] = [];
        all_keys.forEach((key) => {
            let left_arr = (lookup_a[key] || [undefined]) as T[];
            let right_arr = lookup_b[key] as U[];
            for (let i = 0; i < left_arr.length; i++) {
                for (let j = 0; j < right_arr.length; j++) {
                    let item_result = resultSelector(left_arr[i], right_arr[j]);
                    if (item_result) res.push(item_result);
                }
            }
        });
        return res;
    }
}
if (!Array.prototype.zip) {
    Array.prototype.zip = function (): any {
        let minLen = this.length;
        for (let i = 0; i < arguments.length - 1; i++) {
            if (arguments[i].length < minLen) minLen = arguments[i].length;
        }
        let selector = arguments[arguments.length - 1];
        let res: any[] = [];
        for (let i = 0; i < minLen; i++) {
            let args = [this[i]];
            for (let j = 0; j < arguments.length - 1; j++) {
                args.push(arguments[j][i]);
            }
            res.push(selector.apply(this, args));
        }
        return res;
    }
}
if (!Array.prototype.repeat) {
    Array.prototype.repeat = function <T>(count: number): T[] {
        let res: T[] = [];
        for (let i = 0; i < count; i++) {
            res.concat(this);
        }
        return res;
    }
}


if (!Array.range) {
    Array.range = function () {
        let start: number, stop: number, step: number;
        if (arguments.length == 1) [start, stop, step] = [0, arguments[0], 1];
        else if (arguments.length == 2) [start, stop, step] = [arguments[0], arguments[1], 1];
        else[start, stop, step] = [arguments[0], arguments[1], arguments[2]];
        if (step === 0) throw new Error('range() step argument must not be zero');
        let res = [];
        if (step > 0) {
            for (let i = start; i < stop; i += step) {
                res.push(i);
            }
        } else {
            for (let i = start; i > stop; i += step) {
                res.push(i);
            }
        }
        return res;
    }
}
