<template>
  <div class="Messages">
    <h1>Recieved Messages</h1>
    <div class="row">
      <Message class="col-4" v-for="message in messages" :messageProp="message" :key="message._id" />
    </div>
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
    // this.$store.state.messages;
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