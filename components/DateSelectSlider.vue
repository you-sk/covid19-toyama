<template>
  <v-range-slider
    v-model="sliderValue"
    :value="sliderValue"
    :label="$t('表示期間')"
    :rules="rules"
    :max="sliderMax"
    :min="0"
    thumb-label="always"
    style="padding-top: 50px;"
    color="#00a040"
    track-color="#c9eace"
    :thumb-size="45"
  >
    <template v-slot:thumb-label="props">
      {{ getSliderLabels(props.value) }}
    </template>
  </v-range-slider>
</template>

<style>
.v-slider__thumb-label {
  font-size: 0.8rem !important;
  word-break: break-all;
  text-align: center;
  padding: 3px;
}
</style>

<script>
export default {
  name: 'DateSelectSlider',
  props: {
    chartData: {
      type: Array,
      required: true
    },
    labels: {
      type: Array,
      default: () => []
    },
    arrType: {
      type: String,
      required: true
    },
    value: {
      type: Array,
      required: true
    },
    sliderMin: {
      type: Number,
      required: true,
      default: 0
    },
    sliderMax: {
      type: Number,
      required: true,
      default: 1
    }
  },
  data() {
    return {
      sliderValue: this.value,
      rules: [
        v =>
          Math.abs(v[0] - v[1]) >= 13 ||
          this.$t('表示期間の最小範囲は14日間です。')
      ]
    }
  },
  watch: {
    sliderMax() {
      this.sliderValue = [this.sliderMin, this.sliderMax]
    },
    sliderValue(newValue, oldValue) {
      if (Math.abs(newValue[0] - newValue[1]) <= 12) {
        this.sliderValue = oldValue
      } else {
        this.$emit('sliderInput', newValue)
      }
    }
  },
  methods: {
    getSliderLabels(id) {
      if (!this.chartData || this.chartData.length === 0) {
        return 1
      }
      if (this.arrType === 'multi') {
        return this.chartData[id]
      }
      if (!this.labels || this.labels.length === 0){
        return this.chartData[id].label
      }
      return this.labels[id]
      
      
    }
  }
}
</script>
