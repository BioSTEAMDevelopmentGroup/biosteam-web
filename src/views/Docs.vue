<template>
    <div class="bg-cyellow container mx-auto object-right py-4">
        <atom-button class="bg-corange"></atom-button>
        <molecule-home-card></molecule-home-card>
    </div> 
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton.vue";
import MoleculeHomeCard from "@/components/molecules/MoleculeHomeCard.vue";

export default {
    name: 'Docs',
    components: {
        AtomButton,
        MoleculeHomeCard,
    }

}
</script>

<style scoped>
</style>