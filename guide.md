# composition-api

因为js是值拷贝，所以传递一个引用的时候，我们需要让它挂在一个引用下的属性。**当这个属性变更的时候就能通知组件更新了。**

```js
// 例子components/setup-hook.vue
const options = reactive({
  list: []
});
```

### reative里嵌套一个ref

```js
// 调用ref函数后，就会产生一个.value的值，但是这样就不会了。
ref('')

reactive({
  list: [],
  value: ref('')
})
```

### watch

注意下watch这个API，它是监听ref类型的，具体可以看下dts文件的定义。


### setup vue2

```sh
npm i -D unplugin-vue2-script-setup
npm i @vue/composition-api
npm i -D @vue/runtime-dom
```
