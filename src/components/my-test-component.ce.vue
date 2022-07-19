<template>
  <div>
    <p class="header" :style="{color: color}">This text is blueish.</p>
    <label>New Message</label>
    <input v-model="newMessage" @keyup="checkEnter" autofocus="autofocus">
    <button @click="addMessage">Add Message</button>
    <div class="messages">
      <div v-for="msg in messages" :key="msg">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, reactive, ref } from "vue";
import store from "../store.js";
// we are using reactive / store to affect any and all instances (it may be helpful to share data from multiple components?

export default defineComponent({
  name: "test-component",
  props: ["color"],
  setup() {
    const newMessage = ref("");

    function addMessage() {
      store.messages.push(newMessage.value);
      newMessage.value = "";
    }

    function checkEnter(e) {
      if (e.keyCode === 13) addMessage();
    }

    return {
      messages: store.messages,
      newMessage,
      addMessage,
      checkEnter
    }
  }
});
</script>

<style scoped>

  .header {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.4em;
  }
  .messages {
    border: solid 1px #888;
    padding: 2px;
    min-height: 100px;
  }
  label, button, input {
    display: block;
    margin: 2px;
    font-family: Helvetica, Arial, sans-serif;
    font-size: .9em;
  }
</style>