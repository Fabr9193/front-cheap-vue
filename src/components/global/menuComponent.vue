<template>
    <div id="headerMenu">
        <b-container class="bv-example-row">
            <b-row>
                <img src="@/assets/logo.png" width="125" height="125" alt="">
                <span>
                    CheapTrip
                </span>
                <b-col class="d-flex align-items-md-center justify-content-flex-end">
                    <b-nav>
                        <b-nav-item active>Active</b-nav-item>
                        <b-nav-item>Link</b-nav-item>
                        <b-nav-item>Another Link</b-nav-item>
                        <b-nav-item disabled>Disabled</b-nav-item>
                    </b-nav>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'menuComponent'
}
</script>

<style lang="scss">
    #headerMenu {
        span {
            display: flex;
            align-items: center;
            font-size: 28px;
        }
    }
    .nav {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
    }
</style>