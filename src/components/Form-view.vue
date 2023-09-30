<template>
    <h3 class="mt-3">{{ title }}</h3>
    <p class="lead">{{ description }}</p>
    <p>{{ subText }}<a href="">{{ url }}</a></p>
</template>

<script>
export default {
    props: { 
        title: String,
        description: String,
        subText: String,
        url: String,
        isShow: Boolean
    }
}
</script>