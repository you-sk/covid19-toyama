<template>
  <div class="Flow">
    <div class="Flow-Heading">
      <CovidIcon aria-hidden="true" />
      <page-header class="Flow-Heading-Title">
        {{ $t('新型コロナウイルス感染症が心配なときに') }}
      </page-header>
    </div>
    <div>
      <div class="only-pc">
        <flow-pc />
      </div>
      <div class="only-sp">
        <flow-sp />
      </div>
      <div class="Flow-Card-Button-Wrapper mt-6">
        <a
          href="http://www.pref.toyama.jp/cms_sec/1205/kj00021363.html"
          target="_blank"
          rel="noopener"
          class="Flow-Card-Button"
        >
          {{ $t('詳細を見る（新型コロナウイルス感染症について）') }}
          <v-icon class="Flow-Card-Button-ExternalLinkIcon" size="20">
            mdi-open-in-new
          </v-icon>
        </a>
      </div>
      <div class="Flow-Card-Button-Wrapper mt-6">
        <a
          href="https://drive.google.com/drive/folders/1qTHLvpfZ4XIxeCF99UwKlAoPxDHrKI4I?usp=sharing"
          target="_blank"
          rel="noopener"
          class="Flow-Card-Button"
        >
          {{ $t('このページの印刷用ファイルをダウンロードする') }}
          <v-icon class="Flow-Card-Button-ExternalLinkIcon" size="20">
            mdi-open-in-new
          </v-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import CovidIcon from '@/static/covid.svg'
import FlowPc from '@/components/flow/FlowPc.vue'
import FlowSp from '@/components/flow/FlowSp.vue'
import PageHeader from '@/components/PageHeader.vue'
export default Vue.extend({
  components: {
    CovidIcon,
    PageHeader,
    FlowPc,
    FlowSp
  },
  head(): any {
    const title: TranslateResult = this.$t(
      '新型コロナウイルス感染症が心配なときに'
    )
    return {
      title
    }
  }
})
</script>

<style lang="scss">
.Flow {
  margin-bottom: 20px;
  &-Heading {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    > svg {
      width: 30px;
      height: 30px;
      > path:not(:first-of-type) {
        fill: $gray-2;
      }
    }
    &-Title {
      margin-left: 8px;
    }
  }
  &-Card-Button {
    @include button-text('md');
    @include font-size(20);
    font-weight: bold;
    display: inline-block;
    text-decoration: none;
    color: $green-1 !important;
    &-Wrapper {
      text-align: center;
    }
    &:hover {
      color: $white !important;
    }
    &-ExternalLinkIcon {
      margin-left: 2px;
      color: $green-1 !important;
    }
  }
  &-PullRight {
    margin: 0 0 0 auto;
  }
}
@include largerThan($medium) {
  .only-sp {
    display: none;
  }
  .only-pc {
    display: block;
  }
}
@include lessThan($medium) {
  .only-sp {
    display: block;
  }
  .only-pc {
    display: none;
  }
}
</style>
