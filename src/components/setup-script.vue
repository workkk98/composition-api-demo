<template>
  <div>
    <label v-if="showUser"
           for="user">
      用户set-up-script：
      <select id="user"
              v-model="options.value">
        <option v-for="item of options.list"
                :value="item.value"
                :key="item.value">
          {{ item.label }}
        </option>
      </select>
    </label>
  </div>
</template>

<script setup lang="ts">
import userHook from '../hooks/user';

const { options, showUser } = userHook();
</script>

<script lang="ts">
export default {
  name: 'setup-script'
}
</script>