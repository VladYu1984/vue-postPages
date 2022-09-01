<template>
    <buttton class="btn">
        <slot></slot>
    </buttton>
</template>
<script>
export default {
    name: 'my-button'
}
</script>
<style scoped>
.btn {
    cursor: pointer;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    border-radius: 15px;
}
</style>