<template>
  <vee-form :validation-schema="registerForm" @submit="registerUser" class="flex flex-col gap-4">
    <div>
      <h1 class="text-xl font-bold my-2" :class="req_message_class">{{ req_message }}</h1>
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
        type="number"
        name="age"
        placeholder="Age"
        class="border p-2 rounded w-full"
        required
      />
      <error-message name="age" class="text-red-500" />
    </div>
    <div>
      <vee-field as="select" name="country" class="border p-2 rounded w-full text-black" required>
        <option value="" selected disabled hidden>Select Country</option>
        <option :value="country.name" v-for="country in countries" :key="country.name">
          {{ country.name }}
        </option>
      </vee-field>
      <error-message name="country" class="text-red-500" />
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
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, userCollection } from '../includes/firebase'
import { addDoc } from 'firebase/firestore'
import useAvatar from '@/stores/avatar'
import { mapState } from 'pinia'
export default {
  computed: {
    ...mapState(useAvatar, ['avatar']),
  },
  name: 'RegisterForm',
  mounted() {
    this.getCountries()
  },
  data() {
    return {
      registerForm: {
        name: 'required|alphaSpaces|min:3|max:30',
        email: 'required|email',
        password: 'required|min:6|max:30',
        confirmed: 'required|confirmed:@password',
        age: 'required|minValue:18|maxValue:100',
        country: 'required|exclude:Iran (Islamic Republic of)',
      },
      countries: [],
      req_message: 'Waiting for registration',
      req_message_class: 'text-black',
    }
  },
  methods: {
    async registerUser(values) {
      let userCrd = null
      try {
        userCrd = await createUserWithEmailAndPassword(auth, values.email, values.password)
        this.req_message = 'Registered Successfully'
        this.req_message_class = 'text-green-500'
      } catch (error) {
        this.req_message = 'Something went wrong'
        this.req_message_class = 'text-red-500'
        return
      }

      try {
        addDoc(userCollection, {
          name: values.name,
          email: values.email,
          password: values.password,
          age: values.age,
          country: values.country,
          avatar: this.avatar,
        })
      } catch (error) {
        console.log(error)
        this.req_message = 'Something went wrong'
        this.req_message_class = 'text-red-500'
        return
      }
      console.log(values)
    },
    async getCountries() {
      const res = await fetch('/api-countries/countries')
      const data = await res.json()
      this.countries = data
    },
  },
}
</script>
