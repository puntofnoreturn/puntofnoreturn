<template>
  <div>
    <header class="header">
      <a href="/" class="logo">Punt of no Return</a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">
        <li><a href="/posts">Posts</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </header>
    <div class='main-content'>
      <nuxt />
    </div>


  </div>
</template>

<style>

</style>
