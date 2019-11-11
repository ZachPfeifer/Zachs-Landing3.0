<template>
  <div class="Contact">
    <!-- Contact section -->
    <div class="w3-container w3-light-grey w3-padding-32 w3-padding-large" id="contact">
      <div class="w3-content" style="max-width:600px">
        <h4 class="w3-center">
          <b>Contact Me</b>
        </h4>
        <p>Are you interested in my work or have any question I can help you with? Send me a message.</p>
        <form @submit.prevent="SendMessage">
          <div class="w3-section">
            <label>Name</label>
            <input
              v-model="newMessage.name"
              class="w3-input w3-border"
              type="text"
              name="Name"
              required
            />
          </div>
          <div class="w3-section">
            <label>Email</label>
            <input
              v-model="newMessage.email"
              class="w3-input w3-border"
              type="text"
              name="Email"
              required
            />
          </div>
          <div class="w3-section">
            <label>Company</label>
            <input
              v-model="newMessage.company"
              class="w3-input w3-border"
              type="text"
              name="Company"
            />
          </div>
          <div class="w3-section">
            <label>Message</label>
            <input
              v-model="newMessage.message"
              class="w3-input w3-border"
              type="text"
              name="Message"
            />
          </div>
          <button type="submit" class="w3-button w3-block w3-black w3-margin-bottom">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Contact",
  data() {
    return {
      newMessage: {
        name: "",
        email: "",
        company: "",
        message: ""
      }
    };
  },
  computed: {},
  methods: {
    SendMessage() {
      this.$store.dispatch("createMesage", this.newMessage);
      this.newMessage = { name: "", email: "", company: "", message: "" };
    }
  },
  components: {}
};
</script>


<style scoped>
</style>