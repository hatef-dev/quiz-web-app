<template>
  <div class="grid grid-cols-3">
    <div class="col-span-1 p-10 overflow-y-auto">
      <h1 class="text-3xl">Customize your profile picture</h1>
      <div class="flex flex-col mt-10 gap-4">
        <label class="color-label text-2xl">Background color</label>
        <input type="color" class="color-picker" />
      </div>
      <div class="flex flex-col mt-10 gap-4">
        <label for="scale" class="color-label text-2xl">Scale</label>
        <select name="scale" class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2" id="scale">
          <option value="">100%</option>
          <option value="">120%</option>
          <option value="">130%</option>
          <option value="">140%</option>
          <option value="">150%</option>
        </select>
      </div>
      <div class="flex flex-col mt-10 gap-4">
        <label for="translateX" class="color-label text-2xl">TranslateX</label>
        <select
          name="translateX"
          class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2"
          id="scale"
        >
          <option value="">0%</option>
          <option value="">5%</option>
          <option value="">10%</option>
          <option value="">15%</option>
          <option value="">20%</option>
        </select>
      </div>

      <div class="flex flex-col mt-10 gap-4">
        <label class="color-label text-2xl">Skin color</label>
        <input type="color" class="color-picker" />
      </div>

      <div class="flex flex-col mt-10 gap-4">
        <label for="Eyebrows" class="color-label text-2xl">Eyebrows</label>
        <select
          name="Eyebrows"
          class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2"
          id="scale"
        >
          <option value="">Down</option>
          <option value="">Up</option>
          <option value="">Eye Lashes Down</option>
          <option value="">Eye Lashes Up</option>
        </select>
      </div>

      <div class="flex flex-col mt-10 gap-4">
        <label class="color-label text-2xl">Eyebrows color</label>
        <input type="color" class="color-picker" />
      </div>

      <div class="flex flex-col mt-10 gap-4">
        <label for="Glasses" class="color-label text-2xl">Glasses</label>
        <select
          name="Glasses"
          class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2"
          id="scale"
        >
          <option value="">No Glasses</option>
          <option value="">Rounded</option>
          <option value="">Square</option>
        </select>
      </div>

      <div class="flex flex-col mt-10 gap-4">
        <label class="color-label text-2xl">Glasses color</label>
        <input type="color" class="color-picker" />
      </div>

      <div class="flex flex-col mt-10 gap-4">
        <label for="Hair" class="color-label text-2xl">Hair</label>
        <select name="Hair" class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2" id="scale">
          <option value="">Danney Phantom</option>
          <option value="">Doug Funny</option>
          <option value="">Fonze</option>
          <option value="">Full</option>
          <option value="">mrClean</option>
          <option value="">mrT</option>
          <option value="">pixie</option>
          <option value="">Turban</option>
        </select>
      </div>

      <div class="flex flex-col mt-10 gap-4">
        <label class="color-label text-2xl">Hair color</label>
        <input type="color" class="color-picker" />
      </div>

      <div class="flex flex-col mt-10 gap-4">
        <label for="Mouth" class="color-label text-2xl">Mouth</label>
        <select name="Mouth" class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2" id="scale">
          <option value="">Frown</option>
          <option value="">Laughing</option>
          <option value="">Nervous</option>
          <option value="">Pucker</option>
          <option value="">Sad</option>
          <option value="">Smile</option>
          <option value="">Smirk</option>
          <option value="">Suprised</option>
        </select>
      </div>

      <div class="flex flex-col mt-10 gap-4">
        <label for="Shirt" class="color-label text-2xl">Shirt</label>
        <select name="Shirt" class="bg-gray-200 border-0 outline-0 p-2 rounded-lg px-2" id="scale">
          <option value="">Collared</option>
          <option value="">Crew</option>
          <option value="">Open</option>
        </select>
      </div>

      <div class="flex flex-col mt-10 gap-4">
        <label class="color-label text-2xl">Shirt color</label>
        <input type="color" class="color-picker" />
      </div>
    </div>
    <div class="col-span-2 overflow-hidden"></div>
  </div>
</template>

<script>
export default {}
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
