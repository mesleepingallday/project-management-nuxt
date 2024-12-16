<template>
  <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
    <UserSidebar />
    <main className="flex w-full flex-col bg-gray-50 dark:bg-dark-bg">
      <Navbar />
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>
