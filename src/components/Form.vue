<template>
    <div class="container">
        <h1 class="mt-5">{{ Title }}</h1>
        <p class="lead">{{ Description }}</p>
        <p>{{ subText }}<a href="">{{ url }}</a></p>
    </div>
</template>

<script>
export default {
    data(){ 
        return {
            title: "Title",
            description: "Description",
            subText: "SubText",
            url: "URL"
        }
    }
}
</script>