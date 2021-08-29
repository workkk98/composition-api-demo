<template>
  <div>
    <label v-if="showUser"
           for="user">
      用户set-up-hook：
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

<script>
import userHook, {} from '../hooks/user';

export default {
  setup (props, context) {
    console.log(props, context);
    return {
      ...userHook()
    }
  }
}
</script>