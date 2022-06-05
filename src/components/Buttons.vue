<template>
    <div class="cta">
        <NuxtLink :to="path" class="button" :class="classes">Sign up</NuxtLink>
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            path: {
                type: String,
                default: '/'
            },
            classes: {
                type: String,
                default: 'button--default'
            }
        }
    }
</script>

<style lang="css">
    .cta {
        margin: 15px 0 0;
    }
    .button {
        border: none;
        display: inline-flex;
        color: #000;
        padding: 20px 90px;
        vertical-align: middle;
        text-transform: uppercase;
        font-family: 'Inter', sans-serif;
        letter-spacing: 3px;

        font-size: 14px;
        font-weight: 400;
        border-radius: 32px;
        flex-direction: row-reverse;
        text-decoration: none;
    }

    .button--primary {
        background-color: #FFD900; /* #FFD900 */
        transition: transform 0.25s ease, color 0.25s ease, background-color 0.25s ease;
    }
    .button--primary:hover {
        background-color: #e9d257;
        cursor: pointer;
        transform: scale(1.0425);
    }
</style>
