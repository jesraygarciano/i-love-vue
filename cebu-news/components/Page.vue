<template>
    <div v-editable="blok" class="page">
        <!-- <component :is="blok.component" :blok="blok" :key="blok_uid" v-for="blok in blok.body"></component> -->
            <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
    </div>
</template>

<script>
export default {
    props: ['blok']
}
</script>