<template>
  <div>
  <!-- Simulation box -->
      <div class="relative z-0 w-screen bg-gray-50 overflow-hidden" style="height: calc(100vh - 56px);">

  <!-- Sidebar -->
          <div 
            :class="{
                'default-sidebar': simulation=='default', 
                'single-point-sidebar': simulation=='single-point', 
                'uncertainty-sidebar': simulation=='uncertainty'            
            }" 
            class="absolute left-0 z-10 w-1/4 h-full bg-gray-200 border-r-2 border-gray-400">
            <h1 
                :class="{
                    'bg-gray-400': simulation=='default', 
                    'bg-cdarkgreenblue': simulation=='single-point', 
                    'bg-corange': simulation=='uncertainty'}" 
                class="text-cdark text-xl h-10 flex justify-center items-center">
                Input Paramters
            </h1>

            <!-- Sidebar content -->
            <div class="w-full h-full overflow-y-scroll flex flex-col justify-start items-center px-4 pb-14">
                <slot name="sidebarContent">
                    <h1 class="pt-60 text-xl text-cfontgrey text-center">Select a simulation mode</h1>  
                </slot>       
            </div>
          </div>

  <!-- Main Content -->
          <div class="absolute z-10 right-0 w-3/4 h-full">
              <!-- Simulation nav -->
              <slot name="simulationNav">
                  <div class="w-full h-10 bg-gray-300">
                      <h1>Nav goes here</h1>
                  </div>
              </slot>

              <!-- Main content -->
              <div class="w-full h-full overflow-y-scroll flex flex-col justify-start items-center px-4 pb-14">
                  <slot name="mainContent">
                    <h1 class="pt-60 text-cfontgrey text-center text-xl">Select a biorefinery</h1>
                  </slot>
              </div>
          </div>      
      </div>    
  </div>
</template>

<script>
export default {
    name: 'AtomSimulateLayout',
    props: {
        simulation: String,
    }
}
</script>

<style scoped>
    .default-sidebar {
        @apply bg-gray-200;
        @apply border-gray-400;
    }
    .single-point-sidebar {
        @apply bg-cgreenblue;
        @apply border-cdarkgreenblue;
    }
    .uncertainty-sidebar {
        @apply bg-cyellow;
        @apply border-corange;
    }
</style>