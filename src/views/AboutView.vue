<template>
  <div class="grid grid-cols-3">
    <div class="col-span-1">
      <div class="h-screen p-10 overflow-y-auto">
        <h1 class="text-3xl">Customize your profile picture</h1>
        <CustomizeUser />
      </div>
    </div>
    <div class="col-span-2 overflow-hidden">
      <div class="h-screen w-full flex justify-center items-center">
        <img :src="avatarUrl" alt="avatar" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomizeUser from '@/components/Customize/CustomizeUser.vue'
export default {
  name: 'CustomizeUserPicture',
  components: {
    CustomizeUser,
  },
}
</script>
