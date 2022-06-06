<template>
    <div ref="subscribe" class="container">
        <div class="top">
            <Nav/>
        </div>
        <div class="content">
            <h1 class="heading heading--primary">Subscribe</h1>
            <div class="excerpt">
                <p> I 
                    <template v-if="name">
                        <span class="first-name">
                            {{ name }}
                        </span>
                    </template> 
                    <template v-else>
                        <span class="first-name first-name--placeholder">
                            name
                        </span>
                    </template>
                    would like to subscribe to your app channel to recieve news 
                    about this exciting project with my 
                    <template v-if="email">
                        <span class="contacts">
                            {{ email }} - {{ phone }}
                        </span> 
                    </template> 
                    <template  v-else>
                        <span class="contacts contacts--placeholder">
                            email - phone
                        </span> 
                    </template>
                </p>
                <p>Date: </p>
            </div>
            <div class="reg">
                <form accept-charset="UTF-8" v-on:submit.prevent="onSubmit()" class="reg-form">
                    <fieldset>
                        <div class="group">
                            <label for="name">Name:</label>
                            <input v-model="name" class="input" id="name" name="name" type="text" placeholder="Name" />
                        </div>
                        <div class="group">
                            <label for="surname">Surname:</label>
                            <input v-model="surname" class="input" id="surname" name="surname" type="text" placeholder="Surname" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="group">
                            <label for="email">Email address:</label>
                            <input v-model="email" class="input" id="email" name="email" type="email" placeholder="Add email address" />
                        </div>
                        <div class="group">
                            <label for="phone">Phone number:</label>
                            <input v-model="phone" class="input" id="phone" name="phone" type="input" placeholder="Phoner number" />
                        </div>
                    </fieldset>
                    <input type="submit" name="submit" value="Submit" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from '../../components/Nav'
    import axios from 'axios'
    export default {
        name: 'Signup',
        components: {
           Nav
        },
        data() {
            return {
                name: '',
                surname: '',
                email: '',
                phone: ''
            }
        },
        mounted() {
            this.$refs['subscribe'].style.height = window.innerHeight + 'px'
        },
        methods: {
            onSubmit () {
                axios.post('/user', {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    phone: this.phone
                }).then( response => {
                    console.log('RES', response);
                })
                .catch( error => {
                    console.log('ERROR', error);
                })
            }
        }
    }
</script>


<style lang="scss">
    .reg {
        align-items: center;
        display: flex;
        justify-content: center;
        &-form {
            margin: 0 5% 0;
            padding: 10px 15px 0;
        }
    }

    input {
        padding: 8px 15px;
        outline: none;
        width: 300px;
    }

    label {
        font-size: 12px;
        display: inline-block;
        margin: 0 5px;
        text-transform: normal;
        width: 25%;
    }

    fieldset {
        border: none;
        display: block;
        margin: 0;
        padding: 0;
    }

    .group {
        align-items: center;
        display: flex;
        margin: 10px 0;
        justify-content: space-between;
    }

    .first-name,
    .contacts { 
        color: gold;
        display: inline-block;
        margin: 0;
        text-transform: capitalize;
        &--placeholder {
            text-decoration: underline;
            text-transform: lowercase;
        }
    }

    .contacts {
        text-transform: lowercase;
    }

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
