<template>
    <div>
        <input v-model="message" placeholder="edit me" />
        <button @click="handleSubmit">提交</button>
        <button @click="handleClear">清空</button>
        <ul>
            <todo-item v-for="(item, index) of list" :content="item" :index="index" :key="index" @handleDeleteParent="handleDeleteParent"></todo-item>
        </ul>
    </div>
</template>


<script>
import TodoItem from './TodoItem.vue';
export default {
    name: 'TodoList',
    components: {
        'todo-item': TodoItem
    },
    data() {
        return {
            message: 'https://blog.csdn.net/liuyunshengsir',
            list: [],
        }
    },
    methods: {
        handleSubmit() {
            //alert(this.message);
            this.list.push(this.message);
        },
        handleClear() {
            this.list = [];
        },
        handleDeleteParent(node) {
           // alert("删除节点"+node.index+":"+node.content);
            this.list.splice(node.index,1);
        }
    }
}
</script>

<style scoped>

</style>