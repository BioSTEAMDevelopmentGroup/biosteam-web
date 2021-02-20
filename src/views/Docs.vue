<template>
    <div class="relative z-0 w-screen bg-gray-50 overflow-hidden" style="height: calc(100vh - 56px);">
<!-- Sidebar -->
        <div class="absolute left-0 z-10 w-1/4 h-full bg-gray-200 overflow-y-scroll flex justify-center">
            <organism-docs-sidebar :docsList="docs" class="px-2"></organism-docs-sidebar>
        </div>

<!-- Main Content -->
        <div class="absolute right-0 w-3/4 h-full overflow-y-scroll flex justify-center items-center">
            <h1 class="text-cfontgrey text-center text-6xl">Under construction</h1>
        </div>      
    </div>
</template>

<script>
// import AtomButton from "@/components/atoms/AtomButton.vue";
// import MoleculeHomeCard from "@/components/molecules/MoleculeHomeCard.vue";
import docsList from "@/assets/docs/docsList.json";
import OrganismDocsSidebar from "@/components/organisms/OrganismDocsSidebar.vue";

export default {
    name: 'Docs',
    components: {
        // AtomButton,
        // MoleculeHomeCard,
        OrganismDocsSidebar,
    },
    data() {
        return {
            docs: docsList.docs,
        }
    }

}
</script>

<style scoped>
</style>