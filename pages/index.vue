<template>
  <div>
    <welcome></welcome>
    <recent-projects></recent-projects>
    <services></services>
    <about-me></about-me>
    <get-in-touch></get-in-touch>
  </div>
</template>

<script>
  export default {
    components: {
      AboutMe: () => import('~/components/AboutMe'),
      GetInTouch: () => import('~/components/GetInTouch'),
      RecentProjects: () => import('~/components/RecentProjects'),
      Services: () => import('~/components/Services'),
      Welcome: () => import('~/components/Welcome')
    }
  }
</script>
