<template>
  <div>
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="person in people"
        :key="person.id"
        class="bg-white rounded-lg p-6 shadow"
      >
        <img class="h-16 w-16 rounded-full mx-auto" :src="person.avatar" />
        <div class="text-center">
          <h2 class="text-lg">
            {{ person.name }}
          </h2>
          <div class="text-purple-500">{{ person.department }}</div>
          <div class="text-gray-600 text-sm">{{ person.email }}</div>
          <div class="text-gray-600 text-sm">{{ person.phone }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: []
    };
  },
  created() {
    fetch("http://localhost:3000/people")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.people = data;
      });
  }
};
</script>

<style scoped></style>
