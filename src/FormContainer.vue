<template>
  <Title></Title>
  <div class="container">
    <Form></Form>
    <Form></Form>
    <Form></Form>
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Form from './components/Form.vue'

export default {
  components: {
    Title,
    Form
  }
}
</script>