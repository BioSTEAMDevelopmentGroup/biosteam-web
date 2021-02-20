<template>
    <div class="flex items-center justify-evenly text-cfontgrey text-lg">
        <div>
            <p>Email - jsguest@illinois.edu</p>
            <p>Twitter - @CABBIbio</p>
        </div>
        <div>
            <p>BioSTEAM Github</p>
            <p>BioSTEAM Docs</p>
            <p>BioSTEAM Citation</p>
        </div>
        <div>
            <img src="" alt="CABBI Logo">
            <p>© 2021 All Rights Reserved</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AtomFooter',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    p {
        @apply cursor-pointer;
    }
    p:hover {
        @apply text-cdark;
    }
</style>