<template>
  <div>
    <img :src="person.avatar" />
    <h1>{{ person.name }}</h1>
    <p>{{ person.bio }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        id: null,
        name: "",
        avatar: "",
        bio: ""
      }
    };
  },
  created() {
    this.person.id = this.$route.params.id;
    fetch("http://localhost:3002/people/" + this.person.id)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.person = data;
      });
  }
};
</script>

<style></style>
