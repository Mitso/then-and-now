<template>
    <main class="wrapper">
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
    </main>
</template>

<script>
    import backgroundImage from '../assets/img/khoisan-artist.jpg'
    import Nav from '../components/Nav'
    import iconscripts from '../utils/icons'

    const formatString = 'data:image/svg+xml;utf8, ',
        yellow = 'rgb(233,161,0)'

    export default {
        name: 'Default',
        data () {
            return {
                canvasId: null,
                cardanoIcon: null,
                publicGoodsIcon: null
            }
        },
        components: {
            Nav
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


<style lang="scss">
    @import '../assets/styles/variables';
    .logo {
        font-family: 'Prompt', sans-serif;
        color: $orange;
        font-size: 42px;
        &__small {
            font-size: 55px;
        }
    }

    .logoSecondary {
        font-family: 'Prompt', sans-serif;
        font-size: 22px;
        display: inline-block;
        text-transform: none;
        &__small {
            font-size: 34px;
        }
    }

    .column {
        align-items: flex-start;
        display: flex;
        padding: 15px 15px 10px;
        justify-content: left;
        text-align: left;
        &__item {
            align-items: center;
            display: flex;
            justify-content: center;
            margin: 0 50px 0 0;
        }
        &__thumbnail {
            aspect-ratio: 16 / 9;
            height: 90px;
            width: 160px;
        }
        &__excerpt {
            overflow: auto;
        }
    }


    #canvas {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .bg-canvas {
        background-color: rgba($black,0.8);
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
        margin: 0 auto;
        padding: 0 8%;
        text-align: center;
        z-index: 3;
    }
    .content {
        &-one {
            color: $white;
            .heading--secondary {
                color: $soft-yellow;
            }
            .column__item {
                width: 50%;
            }
            .column__thumbnail {
                display: block;
            }
        }
        &-two {
            color: $black;
            background: $white;
            .heading--secondary {
                color: $black;
            }
            .logo {
                color: $black;
            }
        }
    }
    .wrapper {
        .paragraph {
            text-align: justify;
        }
    }

</style>