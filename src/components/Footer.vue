<template>
    <footer class="footer mt-auto py-3">
        <div class="container text-center">
            <span class="text-muted">{{ copyRights }}</span>
        </div>
    </footer>
</template>

<script>
export default {
    data(){ 
        return {
            copyRights: "©︎ Created By Shumpei Horiuchi, 2023"
        }
    }
}
</script>