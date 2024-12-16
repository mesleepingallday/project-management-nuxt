<template>
  <div
    class="fixed flex flex-col h-full justify-between shadow-xl transition-all duration-300 z-40 overflow-y-auto bg-white"
  >
    <div
      class="z-50 flex flex-col min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3"
    >
      <div className="text-xl font-bold text-gray-800 ">EDLIST</div>

      <!--BTL info-->
      <div
        className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700"
      >
        <div>
          <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
            TODOLIST- GROUP 3
          </h3>
          <div className="mt-1 flex items-start gap-2">
            <p className="text-xs text-gray-500">Private</p>
          </div>
        </div>
      </div>

      <!--NAVBAR-->
      <nav className="z-10 w-full">
        <NuxtLink v-for="item in navLink" :to="item.path">
          <span class="flex flex-row gap-2 items-center">
            <Icon :name="item.icon" size="24" />
            <span class="font-medium text-gray-800 dark:text-gray-100">
              {{ item.name }}
            </span>
          </span>
        </NuxtLink>
      </nav>

      <!--GROUP TASKS-->
      <Button variant="link" @click="showGroup = !showGroup">
        <span class="flex flex-row gap-2 items-center">
          <Icon
            v-if="showGroup"
            name="material-symbols:arrow-drop-up"
            size="20"
          />
          <Icon
            v-else="showGroup"
            name="material-symbols:arrow-drop-down"
            size="20"
          />
          <span class="font-medium text-gray-800 dark:text-gray-100">
            Group
          </span>
        </span>
      </Button>
      <div v-if="!showGroup" class="flex flex-col gap-2">
        <h2>Group tasks</h2>
      </div>
    </div>

    <!--CURRENT USER INFO-->
    <div
      className="z-10 mt-32 flex w-full flex-col items-center gap-4 bg-white px-8 py-4 dark:bg-black md:hidden"
    >
      <div className="flex w-full items-center">
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
  </div>
</template>

<script lang="ts" setup>
const showGroup = ref(false);
const authStore = useAuthStore();
const currentUsername = ref("");

onMounted(() => {
  authStore.loadFromLocalStorage();
  currentUsername.value = authStore.username;
});

const navLink = [
  {
    name: "Dashboard",
    path: "/",
    icon: "material-symbols:dashboard",
  },
  {
    name: "Group tasks",
    path: "/group-tasks",
    icon: "material-symbols:group",
  },
];

const handleSignOut = () => {
  authStore.clearCredentials();
  navigateTo("/login");
};
</script>
