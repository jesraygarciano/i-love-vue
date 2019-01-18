<template>
    <div class="util__flex" v-editable="blok">
        <!-- <component :is="blok.component" :blok="blok" :key="blok._uid" v-for="blok in blok.columns"></component> -->
        <component :key="blok._uid" v-for="blok in blok.columns" :blok="blok" :is="blok.component"></component>
    </div>
</template>

<script>
export default {
    props: ['blok']
}
</script>