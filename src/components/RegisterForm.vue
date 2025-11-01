<template>
  <form @submit.prevent="registerUser" class="flex flex-col gap-4">
    <input
      type="text"
      v-model="registerForm.name"
      placeholder="Full Name"
      class="border p-2 rounded"
      required
    />
    <input
      type="email"
      v-model="registerForm.email"
      placeholder="Email"
      class="border p-2 rounded"
      required
    />
    <input
      type="password"
      v-model="registerForm.password"
      placeholder="Password"
      class="border p-2 rounded"
      required
    />
    <button type="submit" class="bg-blueDark text-white py-2 rounded hover:bg-blue-800 transition">
      Register
    </button>
  </form>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      registerForm: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    registerUser() {},
  },
}
</script>
