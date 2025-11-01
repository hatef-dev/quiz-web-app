<template>
  <div class="bg-blueDark pt-10 text-white relative">
    <div class="my-container">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <div class="gap-x-2 items-center flex">
          <div class="h-10 w-10 rounded-full overflow-hidden">
            <img :src="avatarUrl" alt="avatar" />
          </div>
          <h1 class="text-white text-3xl">Welcome to Quiz Web App</h1>
        </div>
        <div>
          <button
            class="SignInButton cursor-pointer bg-white text-blueDark px-4 py-2 rounded-lg transition"
            @click="showModal = true"
          >
            Sign In
          </button>
        </div>
      </div>

      <!-- Hero Section -->
      <div class="py-10">
        <h1 class="text-white text-4xl uppercase">Play and test your knowledge</h1>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div class="bg-white text-blueDark p-8 rounded-2xl w-[90%] max-w-md relative">
        <!-- Close Button -->
        <button
          class="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
          @click="showModal = false"
        >
          ✕
        </button>

        <!-- Toggle -->
        <div class="flex justify-center mb-6">
          <button
            :class="[
              'px-4 py-2 rounded-l-lg',
              formType === 'login' ? 'bg-blueDark text-white' : 'bg-gray-200',
            ]"
            @click="formType = 'login'"
          >
            Login
          </button>
          <button
            :class="[
              'px-4 py-2 rounded-r-lg',
              formType === 'register' ? 'bg-blueDark text-white' : 'bg-gray-200',
            ]"
            @click="formType = 'register'"
          >
            Register
          </button>
        </div>

        <!-- Login Form -->
        <form v-if="formType === 'login'" @submit.prevent="loginUser" class="flex flex-col gap-4">
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
            class="bg-blueDark text-white py-2 rounded hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        <!-- Register Form -->
        <form v-else @submit.prevent="registerUser" class="flex flex-col gap-4">
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
          <button
            type="submit"
            class="bg-blueDark text-white py-2 rounded hover:bg-blue-800 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageHeader',
  data() {
    return {
      avatarUrl: '',
      showModal: false,
      formType: 'login',
      loginForm: {
        email: '',
        password: '',
      },
      registerForm: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    getRandomUserPic() {
      const randomSeed = Math.random().toString(36).substring(2, 10)
      this.avatarUrl = `https://api.dicebear.com/9.x/miniavs/svg?seed=${randomSeed}&backgroundColor=b6e3f4,c0aede,d1d4f9`
    },
    loginUser() {},
    registerUser() {},
  },
  mounted() {
    this.getRandomUserPic()
  },
}
</script>

<style scoped></style>
