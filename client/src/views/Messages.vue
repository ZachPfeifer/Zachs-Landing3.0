<template>
  <div class="Messages">
    <h1>Sent Messages</h1>
    <Message class="col" v-for="message in messages" :vaultProp="message" :key="message.id" />
  </div>
</template>


<script>
import Message from "../components/Message";
export default {
  name: "Messages",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getMessages");
    this.$store.state.messages;
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    }
  },
  methods: {},
  components: { Message }
};
</script>


<style scoped>
</style>