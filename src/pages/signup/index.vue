<template>
    <div class="container">
        <div class="top">
            <Nav/>
        </div>
        <div class="content">
            <h1 class="heading heading--primary">Register</h1>
            <div class="reg">

                <form accept-charset="UTF-8" v-on:submit.prevent="onSubmit()" method="POST" class="reg-form">
                    <fieldset>
                        <label for="name">Name</label>
                        <input v-model="fullName" class="input" id="name" name="name" type="text" placeholder="Add fullname" />
                    </fieldset>
                    <fieldset>
                        <label for="email">Email address</label>
                        <input v-model="email" class="input" id="email" name="email" type="email" placeholder="Add email address" />
                    </fieldset>
                </form>

                <div class="reg-profile">
                    <h2 class="heading heading--secondary">My profile</h2>
                    <p>Name: {{ fullName }}</p>
                    <p>Email: {{ email }}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Signup',
        data() {
            return {
                fullName: '',
                email: ''
            }
        },
        methods: {
            onSubmit (e) {
                const $this = e.target;
                const user = {
                    name: this.fullName,
                    email: this.email,
                }
                console.log($this, user)
            }
        }
    }
</script>


<style lang="scss">
    .reg {
        align-items: flex-start;
        display: flex;
        justify-content: flex-start;
        &-form {
            border-radius: 5px;
            margin: 0 5% 0;
            padding: 10px 15px 0;
            border: 1px solid gray;
        }
        &-profile {
            border-radius: 5px;
            border: 1px solid gray;
            padding: 10px 15px;
            width: 300px;
        }
    }

    input {
        padding: 8px 15px;
    }

    label {
        text-transform: uppercase;
        margin: 0 5px;
    }
    fieldset {
        border: none;
        align-items: center;
        display: flex;
        justify-content: flex-start;
    }
</style>
