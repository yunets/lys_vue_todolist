<template>
    <div>
       
        <button @click="handleSubmit">AI 作图</button>
        <button @click="handleSubmit">AI 应用</button>
        <button @click="handleClear"> 免费电影</button>
        <ul>
            <li v-for="(item, index) of list" :content="item" :index="index" :key="index"
                @handleDeleteParent="handleDeleteParent"><a :href="item.url" target="_blank">{{item.name}}</a>---{{item.url}}</li>
        </ul>
    </div>
</template>


<script>
import TodoItem from './TodoItem.vue';
import axios from 'axios'
import axiosInstance from './../http/request'
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
            let that=this;
            axios.post('http://124.220.104.235/api/webInfo/listByWebCategoryName', {
                "name":"AI 作图"
                
            }).then(function (response) {
                const baseStr = response.data.content;
                that.list=JSON.parse(decodeURIComponent(baseStr));
                console.log(that.list);
            }).catch(function (error) {
                console.log(error);
            });
        },
        handleClear() {
            let that=this;
            axiosInstance.post('/api/webInfo/listByWebCategoryName', {
                "name":"在线"
                
            }).then(function (response) {
                const baseStr = response.data.content;
                that.list=JSON.parse(decodeURIComponent(baseStr));
                console.log(that.list);
            }).catch(function (error) {
                console.log(error);
            });
        },
        handleDeleteParent(node) {
            // alert("删除节点"+node.index+":"+node.content);
            this.list.splice(node.index, 1);
        }
    }
}
</script>

<style scoped></style>