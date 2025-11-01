<template>
  <form @submit.prevent="loginUser" class="flex flex-col gap-4">
    <input
      type="email"
      v-model="loginForm.email"
      placeholder="Email"
      class="border p-2 rounded"
      required
    />
    <input
      type="password"
      v-model="loginForm.password"
      placeholder="Password"
      class="border p-2 rounded"
      required
    />
    <button
      type="submit"
      class="bg-blueDark text-white py-2 rounded hover:bg-blueDark/80 transition"
    >
      Login
    </button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    loginUser() {},
  },
}
</script>
