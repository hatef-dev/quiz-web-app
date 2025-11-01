<template>
  <vee-form :validation-schema="registerForm" @submit="registerUser" class="flex flex-col gap-4">
    <div>
      <vee-field
        type="text"
        name="name"
        placeholder="Full Name"
        class="border p-2 rounded w-full"
        required
      />
      <error-message name="name" class="text-red-500" />
    </div>
    <div>
      <vee-field
        type="email"
        name="email"
        placeholder="Email"
        class="border p-2 rounded w-full"
        required
      />
      <error-message name="email" class="text-red-500" />
    </div>
    <div>
      <vee-field
        type="password"
        name="password"
        placeholder="Password"
        class="border p-2 rounded w-full"
        required
      />
      <error-message name="password" class="text-red-500" />
    </div>
    <div>
      <vee-field
        type="password"
        name="confirmed"
        placeholder="Confirm Password"
        class="border p-2 rounded w-full"
        required
      />
      <error-message name="confirmed" class="text-red-500" />
    </div>
    <button type="submit" class="bg-blueDark text-white py-2 rounded transition">Register</button>
  </vee-form>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      registerForm: {
        name: 'required|alphaSpaces|min:3|max:30',
        email: 'required|email',
        password: 'required|min:6|max:30',
        confirmed: 'required|confirmed:@password',
      },
    }
  },
  methods: {
    registerUser(values) {
      console.log(values)
    },
  },
}
</script>
