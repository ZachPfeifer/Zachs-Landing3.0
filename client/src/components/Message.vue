<template>
  <div class="Message">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        <h1>{{messageProp.name}}</h1>
        <h3>{{messageProp.email}}</h3>
      </div>
      <div class="card-body">
        <h3>{{messageProp.company}}</h3>
        <p class="card-text">Message: {{messageProp.message}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Message",
  props: ["messageProp"],
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getMessages");
  },
  computed: {
    Messages() {
      return this.$store.state.messages;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>