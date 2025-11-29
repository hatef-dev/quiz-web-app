<template>
  <div class="flex flex-col mt-10 gap-4">
    <label for="bgColor" class="color-label text-2xl">Background color</label>
    <input
      id="bgColor"
      type="color"
      v-model="backgroundColor"
      @blur="updateCurrentUser('backgroundColor', bgColor)"
      class="color-picker"
    />
  </div>
  <div class="flex flex-col mt-10 gap-4">
    <label for="scale" class="color-label text-2xl">Scale</label>
    <select
      name="scale"
      v-model="scale"
      @blur="updateCurrentUser('scale', scale)"
      class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2"
      id="scale"
    >
      <option value="100%">100%</option>
      <option value="120%">120%</option>
      <option value="130%">130%</option>
      <option value="140%">140%</option>
      <option value="150%">150%</option>
    </select>
  </div>
  <div class="flex flex-col mt-10 gap-4">
    <label for="translateX" class="color-label text-2xl">TranslateX</label>
    <select
      name="translateX"
      v-model="translateX"
      @blur="updateCurrentUser('translateX', translateX)"
      class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2"
      id="translateX"
    >
      <option value="0%">0%</option>
      <option value="5%">5%</option>
      <option value="10%">10%</option>
      <option value="15%">15%</option>
      <option value="20%">20%</option>
    </select>
  </div>

  <div class="flex flex-col mt-10 gap-4">
    <label for="skinColor" class="color-label text-2xl">Skin color</label>
    <input
      id="skinColor"
      type="color"
      v-model="skinColor"
      @blur="updateCurrentUser('skinColor', skinColor.replace('#', ''))"
      class="color-picker"
    />
  </div>

  <div class="flex flex-col mt-10 gap-4">
    <label for="Eyebrows" class="color-label text-2xl">Eyebrows</label>
    <select
      id="Eyebrows"
      name="Eyebrows"
      v-model="Eyebrows"
      @blur="updateCurrentUser('Eyebrows', Eyebrows)"
      class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2"
    >
      <option value="down">Down</option>
      <option value="up">Up</option>
      <option value="eyelashesDown">Eye Lashes Down</option>
      <option value="eyelashesUp">Eye Lashes Up</option>
    </select>
  </div>

  <div class="flex flex-col mt-10 gap-4">
    <label for="EyebrowsColor" class="color-label text-2xl">Eyebrows color</label>
    <input
      id="EyebrowsColor"
      v-model="eyebrowsColor"
      @blur="updateCurrentUser('eyebrowsColor', eyebrowsColor.replace('#', ''))"
      type="color"
      class="color-picker"
    />
  </div>

  <div class="flex flex-col mt-10 gap-4">
    <label for="Glasses" class="color-label text-2xl">Glasses</label>
    <select
      id="Glasses"
      v-model="glasses"
      @blur="updateCurrentUser('glasses', glasses)"
      name="Glasses"
      class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2"
    >
      <option value="">No Glasses</option>
      <option value="round">Rounded</option>
      <option value="square">Square</option>
    </select>
  </div>

  <div class="flex flex-col mt-10 gap-4">
    <label for="GlassesColor" class="color-label text-2xl">Glasses color</label>
    <input
      id="GlassesColor"
      v-model="glassesColor"
      @blur="updateCurrentUser('glassesColor', glassesColor.replace('#', ''))"
      type="color"
      class="color-picker"
    />
  </div>

  <div class="flex flex-col mt-10 gap-4">
    <label for="Hair" class="color-label text-2xl">Hair</label>
    <select
      name="Hair"
      v-model="hair"
      @blur="updateCurrentUser('hair', hair)"
      class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2"
      id="Hair"
    >
      <option value="dannyPhantom">Danney Phantom</option>
      <option value="dougFunny">Doug Funny</option>
      <option value="fonze">Fonze</option>
      <option value="full">Full</option>
      <option value="mrClean">mrClean</option>
      <option value="mrT">mrT</option>
      <option value="pixie">pixie</option>
      <option value="turban">Turban</option>
    </select>
  </div>

  <div class="flex flex-col mt-10 gap-4">
    <label for="HairColor" class="color-label text-2xl">Hair color</label>
    <input
      id="HairColor"
      v-model="hairColor"
      @blur="updateCurrentUser('hairColor', hairColor.replace('#', ''))"
      type="color"
      class="color-picker"
    />
  </div>

  <div class="flex flex-col mt-10 gap-4">
    <label for="Mouth" class="color-label text-2xl">Mouth</label>
    <select
      name="Mouth"
      v-model="mouth"
      @blur="updateCurrentUser('mouth', mouth)"
      class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2"
      id="Mouth"
    >
      <option value="frown">Frown</option>
      <option value="laughing">Laughing</option>
      <option value="nervous">Nervous</option>
      <option value="pucker">Pucker</option>
      <option value="sad">Sad</option>
      <option value="smile">Smile</option>
      <option value="smirk">Smirk</option>
      <option value="suprised">Suprised</option>
    </select>
  </div>

  <div class="flex flex-col mt-10 gap-4">
    <label for="Shirt" class="color-label text-2xl">Shirt</label>
    <select
      name="Shirt"
      v-model="shirt"
      @blur="updateCurrentUser('shirt', shirt)"
      class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2"
      id="Shirt"
    >
      <option value="collared">Collared</option>
      <option value="crew">Crew</option>
      <option value="open">Open</option>
    </select>
  </div>

  <div class="flex flex-col mt-10 gap-4">
    <label for="ShirtColor" class="color-label text-2xl">Shirt color</label>
    <input
      id="ShirtColor"
      v-model="shirtColor"
      @blur="updateCurrentUser('shirtColor', shirtColor.replace('#', ''))"
      type="color"
      class="color-picker"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgColor: backgroundColor.replace('#', ''),
    }
  },
  methods: {
    updateCurrentUser(key, value) {
      this.$emit('updateCurrentUser', { key, value })
    },
  },
}
</script>

<style scoped>
.color-picker {
  appearance: none;
  -webkit-appearance: none;
  width: 100px;
  height: 30px;
  border: 3px solid #ddd;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
  background: #fff;
  transition: 0.2s ease;
}

.color-picker::-webkit-color-swatch-wrapper {
  padding: 0;
  border-radius: 12px;
}

.color-picker::-webkit-color-swatch {
  border: none;
  border-radius: 10px;
}

.color-picker:hover {
  border-color: #999;
  transform: scale(1.05);
}

.color-picker:active {
  transform: scale(0.97);
}
</style>
