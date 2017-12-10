// 类型

// 相等与比较

// JavaScript 有两种方式判断两个值是否相等。

// 等于操作符

// 等于操作符由两个等号组成:==

// js是弱类型语言,这就意味着,等于操作符会为了比较两个值而进行强制类型转换

""           ==   "0"           // false
0            ==   ""            // true
0            ==   "0"           // true
false        ==   "false"       // false
false        ==   "0"           // true
false        ==   undefined     // false
false        ==   null          // false
null         ==   undefined     // true
" \t\r\n" == 0             // true

// 上面的表格展示了强制类型转换，这也是使用 == 被广泛认为是不好编程习惯的主要原因， 
// 由于它的复杂转换规则，会导致难以跟踪的问题。

// 此外，强制类型转换也会带来性能消耗，比如一个字符串为了和一个数字进行比较，必须事先被强制转换为数字。

// 严格等于操作符

// 严格等于操作符由三个等号组成：===

// 不像普通的等于操作符，严格等于操作符不会进行强制类型转换。

""           ===   "0"           // false
0            ===   ""            // false
0            ===   "0"           // false
false        ===   "false"       // false
false        ===   "0"           // false
false        ===   undefined     // false
false        ===   null          // false
null         ===   undefined     // false
" \t\r\n"    ===   0             // false

// 上面的结果更加清晰并有利于代码的分析。如果两个操作数类型不同就肯定不相等也有助于性能的提升。


// 比较对象

// 虽然 == 和 === 操作符都是等于操作符，但是当其中有一个操作数为对象时，行为就不同了。

{} === {};                   // false
new String('foo') === 'foo'; // false
new Number(10) === 10;       // false
var foo = {};
foo === foo;                 // true

// 这里等于操作符比较的不是值是否相等，而是是否属于同一个身份；也就是说，只有对象的同一个实例才被认为是相等的。 
// 这有点像 Python 中的 is 和 C 中的指针比较。

// 注意:为了更直观的看到==和===的区别,可以参见JavaScript Equality Table

// 结论

// 强烈推荐使用严格等于操作符。如果类型需要转换，应该在比较之前显式的转换， 而不是使用语言本身复杂的强制转换规则。


// typeof 操作符

// typeof 操作符（和 instanceof 一起）或许是 JavaScript 中最大的设计缺陷，
// 因为几乎不可能从它们那里得到想要的结果。

// 尽管 instanceof 还有一些极少数的应用场景，
// typeof 只有一个实际的应用（译者注：这个实际应用是用来检测一个对象是否已经定义或者是否已经赋值），
// 而这个应用却不是用来检查对象的类型。

// JavaScript 类型表格

Value               Class      Type
-------------------------------------
"foo"               String     string
new String("foo")   String     object
1.2                 Number     number
new Number(1.2)     Number     object
true                Boolean    boolean
new Boolean(true)   Boolean    object
new Date()          Date       object
new Error()         Error      object
[1,2,3]             Array      object
new Array(1, 2, 3)  Array      object
new Function("")    Function   function
/abc/g              RegExp     object (function in Nitro/V8)
new RegExp("meow")  RegExp     object (function in Nitro/V8)
{}                  Object     object
new Object()        Object     object

