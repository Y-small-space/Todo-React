# Todo-React
一个练习React的小东西

# —、todoList案例相关知识点
1.拆分组件、实现静态组件，注意:className 、style的写法

2.动态初始化列表，如何确定将数据放在哪个组件的state中？

    一某个组作使用：放在其自身的state中
    一某此组件使用：放在他们共同的父组件state中（官方称此操作为：状念提升）
3.关于父子之间通信：
    
    1.【父组件】给【子组作， 传遊数据：通过props传递
    2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数

4.注意defaultchecked 和 checked的区别。类似的还有：defaultvalue 和 value

5.状态在哪里，操作状状态的方法就在哪里