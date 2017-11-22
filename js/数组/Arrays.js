// 数组是一段线性分配的内存 , 它通过整数计算偏移并访问其中的元素

// ! js 居然没有数组 这是怎么回事

// js只有类数组特性的对象,把数组的下标转变成字符串,用作属性,比数组慢,但使用方便

// 它的检索更新方式和数组一样, 只是多了一个可以用整数作为属性名的特性

// 数组有自己的字面量格式.也有一套非常有用的内置方法

// 就是数组 就是对象(所谓的万物皆对象)

// -----------------------------------------------------------------------------------------------

// 数组遍历与属性

// 虽然在 JavaScript 中数组是对象，但是没有好的理由去使用 for in 循环 遍历数组。 相反，有一些好的理由不去使用 for in 遍历数组。

//由于 for in 循环会枚举原型链上的所有属性，唯一过滤这些属性的方式是使用 hasOwnProperty 函数， 因此会比普通的 for 循环慢上好多倍。

// 遍历

// 为了达到遍历数组的最佳性能，推荐使用经典的 for 循环。

var list = [1, 2, 3, 4, 5, ...100000000];
for (var i = 0, l = list.length; i < l; i++) {
    console.log(list[i]);
}

// 上面代码有一个处理，就是通过 l = list.length 来缓存数组的长度。

// 虽然 length 是数组的一个属性，但是在每次循环中访问它还是有性能开销。 可能最新的 JavaScript 引擎在这点上做了优化，但是我们没法保证自己的代码是否运行在这些最近的引擎之上。

// 实际上，不使用缓存数组长度的方式比缓存版本要慢很多。

// length属性

// length属性的getter方式会简单的返回数组的长度,而setter方式会截断数组

var foo = [1, 2, 3, 4, 5, 6];
foo.length = 3;
foo;

foo.length = 6;
foo;
