<template>
  <div class="season-1">
    <season-viewer :season="seasonData" />
  </div>
</template>

<script>
import SeasonViewer from '@/components/SeasonViewer.vue'
import season1Data from '@/data/season-1.json'

export default {
  name: 'Season1',
  components: { SeasonViewer },

  computed: {
    seasonData: () => season1Data
  }
}
</script>
