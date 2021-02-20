<template>
    <div class="w-full flex justify-between p-2 rounded-md bg-cdarkgreenblue">
        <p>Check all defaults</p>
        <atom-checkbox></atom-checkbox>
    </div>
</template>

<script>
import AtomCheckbox from '../atoms/AtomCheckbox.vue';

export default {
    name: 'MoleculeCheckDefaults',
    components: {
        AtomCheckbox
    }
}
</script>

<style>

</style>