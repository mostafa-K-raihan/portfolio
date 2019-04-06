<template>
    <div class="app-btn">
        <span class="shrink">{{btnText}}</span>
    </div>
</template>
<script>
export default {
    name : 'Button',
    props : {
        btnText: String,
        
    }    
}
</script>

<style scoped>
    div.app-btn {
        display: inline-block;
        border: 1px solid teal;
        
        font-family: cursive;

    }

    div:hover{
        background:ghostwhite;
        transition: all 1 ease-in;
        cursor: pointer;
    }

    div> span {
        padding: 0 20px;
    }
</style>


