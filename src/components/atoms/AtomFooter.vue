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
          <p>© 2021 All Rights Reserved</p>
        </div>
        <div>
          <img src="../../assets/resources/logo-CABBI.png" height="50" width="50" alt="CABBI Logo">
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
