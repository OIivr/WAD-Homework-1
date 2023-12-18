<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <p>Please reach out to us at info@example.com</p>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  margin-top: -60px;
}
h1 {
  font-size: 48px;
  margin: 0%;
  color: aliceblue;
}
p {
  font-size: 24px;
  color: aliceblue;
}
</style>