<template>
  <div class="grid grid-cols-3">
    <div class="col-span-1">
      <div class="h-screen p-10 overflow-y-auto">
        <h1 class="text-3xl">Customize your profile picture</h1>
        <CustomizeUser @updateCurrentUser="updateCurrentUser" />
      </div>
    </div>
    <div class="col-span-2 overflow-hidden">
      <div class="h-screen w-full flex justify-center items-center">
        <img :src="avatarUrl" class="w-56 h-56" alt="avatar" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomizeUser from '@/components/Customize/CustomizeUser.vue'
export default {
  name: 'CustomizeUserPicture',
  data() {
    return {
      avatarOptions: {
        backgroundColor: 'b6e3f4',
        scale: '100',
        translateX: '0',
        baseColor: 'ffe8e8',
        eyebrows: 'down',
        eyebrowsColor: '000000',
        glasses: 'round',
        glassesColor: '000000',
        hair: 'fonze',
        hairColor: '000000',
        mouth: 'smile',
        shirt: 'collared',
        shirtColor: '000000',
        glassesProbability: '100',
      },
    }
  },
  components: {
    CustomizeUser,
  },
  computed: {
    avatarUrl() {
      const params = new URLSearchParams(this.avatarOptions).toString()
      console.log(params)
      return `https://api.dicebear.com/9.x/micah/svg?${params}`
    },
  },
  methods: {
    updateCurrentUser(data) {
      console.log(data)
      this.avatarOptions = { ...this.avatarOptions, ...data }
    },
  },
}
</script>
