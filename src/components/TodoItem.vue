<template>
    <div>
        <li class="item" @click="handleDelete"> {{ content }}</li>

    </div>
</template>


<script>
export default {
    name: 'TodoItem',
    props: ['content', 'index'],
    methods: {
        handleDelete() {
            this.$emit('handleDeleteParent',this);
        }
    }
}
</script>

<style scoped>
.item{
    color: green;
}
</style>