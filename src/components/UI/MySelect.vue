<template >
    <select :value="modelValue" @change="changeOption" class="selectStyle">
        <option disabled value="">Выбери из списка</option>
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
        >
            {{option.name}}
        </option>
    </select>
</template>
<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },

    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style scoped>
.selectStyle {
    height: 50px;
    background:rgba(153, 167, 255, 0.503);
    border-radius: 15px;
}
</style>