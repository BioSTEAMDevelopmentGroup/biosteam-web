<template>
    <div class="divide-gray-400 divide-y">
        <div v-for="block in docsList" :key="block.name">
            <molecule-docs-list :list="block"></molecule-docs-list>
        </div>
    </div>
</template>

<script>
import MoleculeDocsList from "@/components/molecules/MoleculeDocsList.vue";

export default {
    name: 'OrganismDocsSidebar',
    props: ['docsList'],
    components: {
        MoleculeDocsList,
    }
}
</script>

<style>

</style>