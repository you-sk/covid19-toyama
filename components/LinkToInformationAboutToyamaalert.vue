<template>
  <span :class="$style.linkButton">
    <external-link
      :class="$style.textLink"
      url="http://www.pref.toyama.jp/cms_sec/1205/kj00022481.html"
    >
      <antenna-icon aria-hidden="true" :class="$style.svgIcon" />
      <span :class="$style.text">
        {{ $t('富山アラート発出中') }}
      </span>
    </external-link>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import ExternalLink from '@/components/ExternalLink.vue'
import AntennaIcon from '@/static/antenna.svg'
export default Vue.extend({
  components: {
    ExternalLink,
    AntennaIcon,
  },
})
</script>

<style lang="scss" module>
.linkButton {
  background-color: $alert;
  border: 1px solid $alert;
  color: $white;
  border-radius: 3em;
  padding: 4px 8px;
  margin-right: 8px;
  display: inline-flex;
  @include font-size(14);
  .svgIcon path {
    fill: $white;
  }
  &:hover {
    background-color: $white;
    .svgIcon path {
      fill: $alert;
    }
  }
  .textLink {
    display: flex;
    align-items: center;
    color: $white !important;
    text-decoration: none;
    margin: -10px;
    padding: 10px;
    i {
      color: inherit;
    }
    &:hover {
      color: $alert !important;
    }
  }
  .text {
    margin: 0 4px;
  }
  @include lessThan($medium) {
    margin-top: 8px;
  }
}
</style>