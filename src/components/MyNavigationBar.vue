<template>
    <div class="navbar">
        <div @click="$router.push('/')"
            style="margin-left: 20px; color: teal; font-size: 25px; cursor: pointer;"
        >Сайт с постами</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/aboutus')" style="margin-left: 25px;">О сайте</my-button>
            <my-button @click="$router.push('/store')" style="margin-left: 25px;">store</my-button>
            <my-button @click="$router.push('/composition')" style="margin-left: 25px;">CompositionApi</my-button>
        </div>
    </div>
</template>

<script>
export default {
}
</script>
<style scoped>
.navbar {
    height: 50px;
    background-color: rgba(153, 167, 255, 0.503);
    box-shadow: 2px 2px 4px silver;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar__btns {
    margin-right: 50px;
    display: flex;
    flex-direction: row;
}
</style>