<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div ref="abc" class="card-header">Example Component</div>
                    <input type="text" v-model="msg">
                    <br>
                    <h4>Show text:</h4>
                    <span>{{msg}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LearnVue",
        // props: [
        //   msg
        // ],
        data() {
            return {
                msg: '',
            }
        },
        method: {

        }
    }
</script>

<style scoped>

</style>
