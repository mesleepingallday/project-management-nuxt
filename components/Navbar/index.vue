<template>
  <div
    className="flex items-center justify-end bg-white px-4 py-3 dark:bg-black"
  >
    <NuxtLink to="/settings">
      <Icon name="material-symbols:settings" size="24" />
    </NuxtLink>

    <div
      className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"
    ></div>
    <div className="hidden items-center justify-between md:flex">
      <div className="align-center flex h-9 w-9 justify-center">
        <span className="mx-3 text-gray-800 dark:text-white">
          {{ currentUsername }}
        </span>
        <Button
          className="self-start rounded bg-blue-400 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500 md:block"
          @click="handleSignOut"
        >
          Sign out
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const authStore = useAuthStore();
const currentUsername = ref("");
currentUsername.value = authStore.username;

const handleSignOut = () => {
  authStore.clearCredentials();
  navigateTo("/login");
};
</script>

<style></style>
