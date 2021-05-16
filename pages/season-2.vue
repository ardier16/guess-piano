<template>
  <div class="season-2">
    <season-viewer :season="seasonData" />
  </div>
</template>

<script>
import SeasonViewer from '@/components/SeasonViewer.vue'
import season2Data from '@/data/season-2.json'

export default {
  name: 'Season1',
  components: { SeasonViewer },

  computed: {
    seasonData: () => season2Data
  }
}
</script>
