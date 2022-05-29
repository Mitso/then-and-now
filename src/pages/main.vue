<template>
    <div class="wrapper">
        <canvas ref="canvas" id="canvas"></canvas>
        <div ref="bgCanvas" class="bg-canvas"></div>
        <section ref="section-one" class="content-one">
            <div class="logo">then<span class="logo__small">&</span>now</span></div>
            <Nav/>
            <h1 class="heading heading--primary">Welcome to <div class="logoSecondary">then<span class="logoSecondary__small">&</span>now</div></h1>

            <div class="column">
                <div class="column__item">
                    <img alt="cardano" :src="getCardanoIcon('rgb(233,161,0)')" class="column__thumbnail"/>
                    <div class="column__excerpt">
                        <h2 class="heading heading--secondary">
                            Cardona Catalyst
                        </h2>
                        <p class="paragraph">
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                    </div>
                </div>
                <div class="column__item">
                    <img alt="Public Goods" :src="getPublicGoodsIcon('rgb(233,161,0)')" class="column__thumbnail"/>
                    <div class="column__excerpt">
                        <h2 class="heading heading--secondary">
                            Funding pool
                        </h2>
                        <p class="paragraph">
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        </p>
                    </div>
                </div>
            </div>
            <div class="cta">
                <NuxtLink to="/signup" class="button button--primary">Sign up</NuxtLink>
            </div>
        </section>

        <section ref="section-two" class="content-two">
            <div class="logo">then<span class="logo__small">&</span>now</span></div>

            <div class="column">
                <div class="column__item">
                    <img alt="cardano" :src="getCardanoIcon('rgb(0,0,0)')" class="column__thumbnail"/>
                    <div class="column__excerpt">
                        <h2 class="heading heading--secondary">
                            Cardona Catalyst
                        </h2>
                        <p class="paragraph">
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import backgroundImage from '../assets/img/khoisan-artist.jpg'
import iconscripts from '../utils/icons'

const formatString = 'data:image/svg+xml;utf8, ',
    yellow = 'rgb(233,161,0)'

export default {
    name: 'Home',
    data () {
        return {
            canvasId: null,
            cardanoIcon: null,
            publicGoodsIcon: null
        }
    },
    mounted() {
        const ctx = this.$refs['canvas'].getContext('2d')
        if (typeof window.innerWidth != 'undefined') {
            this.$refs['canvas'].width = window.innerWidth
            this.$refs['canvas'].height = window.innerHeight

            this.$refs['bgCanvas'].style.width = window.innerWidth + 'px'
            this.$refs['bgCanvas'].style.height = window.innerHeight + 'px'

            this.$refs['section-one'].style.height = window.innerHeight + 'px'
            this.$refs['section-two'].style.height = window.innerHeight + 'px'
        }

        const bgImage = new Image()
            bgImage.src = backgroundImage
            bgImage.alt = 'The story of our people'

        bgImage.addEventListener('load', function() {
            ctx.drawImage(bgImage, 0, 0,window.innerWidth, window.innerHeight)
        })
    },
    methods: {
        getCardanoIcon (e) {
            this.cardanoIcon = formatString + iconscripts(e).cardano
            return this.cardanoIcon
        },
        getPublicGoodsIcon (e) {
            this.publicGoodsIcon = formatString + iconscripts(e).publicGoods
            return this.publicGoodsIcon
        }
    }
}
</script>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,400;1,400;500;700&display=swap');
    html, body {
        margin: 0;
    }

    body {
        font-family: 'Exo', Arial, Helvetica, sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    ul, ol, li {
        margin: 0;
        padding: 0;
    }

    header {
        padding: 10px 0 30px;
    }


    .logo {
        font-family: 'Prompt', sans-serif;
        color: #e9a100;
        font-size: 42px;
    }
    .content-two .logo {
        color: #000000
    }
    .logo__small {
        font-size: 55px;
    }

    .logoSecondary {
        font-family: 'Prompt', sans-serif;
        font-size: 22px;
        display: inline-block;
        text-transform: none;
    }
     .logoSecondary__small {
        font-size: 34px;
    }


</style>

<style scoped>
    .heading--primary {
        font-size: 25px;
    }

    .heading--secondary {
        color: #e9d257;
        font-size: 20px;
        text-transform: capitalize;
    }
    .content-one .heading--secondary {
        color: #e9d257;
    }
    .content-two .heading--secondary {
        color: #000000;
    }

    .paragraph {
        text-align: justify;
    }
    .column {
        align-items: flex-start;
        display: flex;
        padding: 10% 15px 10px;
        justify-content: left;
        text-align: left;
    }
    .column__item {
        align-items: flex-start;
        display: flex;
        justify-content: center;
        margin: 0 50px 0 0;
    }
     .content-one .column__item {
        width: 50%;
    }
    .column__thumbnail {
        aspect-ratio: 16 / 9;
        height: 90px;
        width: 160px;
    }
    .content-one .column__thumbnail {
        fill: #e9d257;
        margin-top: 11%;
    }
    .content-two .column__thumbnail {
        fill: #000000;
    }
    .column__excerpt {
        overflow: auto;
    }

    canvas {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .bg-canvas {
        background-color: rgba(0,0,0,0.8);
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    .content-one,
    .content-two {
        align-items: center;
        flex-direction: column;
        display: flex;
        position: relative;
        justify-content: center;
        height: 100%;
        margin: 10px auto;
        padding: 0 15%;
        text-align: center;
        z-index: 3;
    }

    .content-one {
        color: #fff;
    }
    .content-two {
        color: #000;
        background: #fff;
    }

</style>