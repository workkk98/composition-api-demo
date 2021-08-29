<template>
  <div>
    <label v-if="bar.showUser.value"
           for="user">
      用户：
      <select id="user">
        <option v-for="item of bar.options.list"
                :value="item.value"
                :key="item.value">
          {{ item.label }}
        </option>
      </select>
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import userHook from '../hooks/user';

@Component
export default class Bar extends Vue {
  private bar = userHook();
}
</script>