// 装饰器

// 熔断
function fuseLine(){

    // 熔断机制，如果短时间内多次调用，则停止响应一段时间，类似于 TCP 慢启动。
    // 用于解决refreshLogin、login等方法的并发处理问题。
}

function singleQueue(){

    // 单队列模式，同一时间，只允许一个正在过程中的网络请求。
    // 请求被锁定之后，同样的请求都会被推入队列，等待进行中的请求返回后，消费同一个结果。
    // 用于解决refreshLogin、login等方法的并发处理问题。
}