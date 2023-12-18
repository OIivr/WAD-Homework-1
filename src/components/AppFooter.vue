<template>
  <footer class="footer">
    <ul class="nav">
      <li><router-link to="/">Terms</router-link></li>
      <li><router-link to="/">Privacy</router-link></li>
    </ul>
    <p>© 2023 My Company</p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: rgb(69, 69, 69);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
}

.footer .nav {
  list-style: none;
  display: flex;
}

.footer .nav li {
  margin-right: 10px;
}

.footer .nav li a {
  color: #fff;
  text-decoration: none;
}
.footer p {
  color: #fff;
  margin-right: 10px;
}
</style>