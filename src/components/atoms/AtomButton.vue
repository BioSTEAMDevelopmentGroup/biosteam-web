<template>
    <button class="rounded-full py-2 px-4" @click="$emit('click')">
        <slot>Default Button</slot> 
    </button>  
</template>

<script>
export default {
    name: 'AtomButton',
    props: {
        type: String,
    },

}
</script>
