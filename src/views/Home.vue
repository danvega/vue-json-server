<template>
  <div>
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="person in people"
        :key="person.id"
        class="bg-white rounded-lg p-6"
      >
        <img class="h-16 w-16 rounded-full mx-auto" :src="person.avatar" />
        <div class="text-center">
          <h2 class="text-lg">
            <router-link
              :to="{ name: 'person-detail', params: { id: person.id } }"
              >{{ person.name }}</router-link
            >
          </h2>
          <div class="text-purple-500">Customer Support</div>
          <div class="text-gray-600">{{ person.email }}</div>
          <div class="text-gray-600">{{ person.phone }}</div>
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
    fetch("http://localhost:3005/people")
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
