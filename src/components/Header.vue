<template>
    <div>
        <h1 v-if="type === '1'" v-html="msg"></h1>
        <h2 v-if="type === '2'" v-html="msg"></h2>
        <h3 v-if="type === '3'" v-html="msg"></h3>
        <h4 v-if="type === '4'" v-html="msg"></h4>
        <h5 v-if="type === '5'" v-html="msg"></h5>
        <h6 v-if="type === '6'" v-html="msg"></h6>
        
    </div>
    
</template>
<script>
export default {
    name: 'AppHeader',
    props: {
        type : String,
        msg : String
    },
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
    h1,h2,h3,h4,h5,h6{
        font-family : cursive;
        

    }

</style>


