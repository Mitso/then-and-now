<template>
    <header>
        <ul class="nav-list">
            <li class="nav-list__item">
                <NuxtLink to="/" class="nav-list__anchor">Home</NuxtLink>
            </li>
            <li class="nav-list__item">
                <NuxtLink to="/about-us" class="nav-list__anchor">About us</NuxtLink>
            </li>
        </ul>
    </header>
</template>

<style lang="css">
    .nav-list {
        padding: 0;
        margin: 0;
    }
    .nav-list__item {
        display: inline-block;
        margin: 5px;
    }
    .nav-list__anchor {
        color: #fff;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        text-decoration: none;
    }
    .router-link-exact-active {
        text-decoration: underline;
    }
</style>
