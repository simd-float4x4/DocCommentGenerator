<template>
    <h1 class="mt-5">{{ title }}</h1>
    <p class="lead">{{ description }}</p>
    <p>{{ subText }}<a href="">{{ url }}</a></p>
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