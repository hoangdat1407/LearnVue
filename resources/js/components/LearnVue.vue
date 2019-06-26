<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div ref="abc" class="card-header">Example Component</div>

                    <div class="card-body">
                        <p>Product three cost: {{ productThreeCost | formatCost }}</p>
                        <router-link to="/learnVue">Go to learnVue</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LearnVue"
    }
</script>

<style scoped>

</style>
