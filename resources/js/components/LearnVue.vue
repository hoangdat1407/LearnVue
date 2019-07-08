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
                    <button class="btn btn-primary">Show modal</button>
                    <Datepicker format="HH:mm"></Datepicker>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'
    export default {
        name: "LearnVue",
        components: {
            Datepicker
        },
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
