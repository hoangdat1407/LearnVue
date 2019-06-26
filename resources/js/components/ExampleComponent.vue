<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div ref="abc" class="card-header">Example Component</div>

                    <div class="card-body">
                        <p >Product one cost: {{ productOneCost | formatCost }}</p>
                        <p>Product two cost: {{ productTwoCost | formatCost }}</p>
                        <p>Product three cost: {{ productThreeCost | formatCost }}</p>
                        <router-link to="/learnVue">Go to learnVue</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import LearnVue
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        created() {
            this.test()
        },
        data() {
            return {
                productOneCost: 998,
                productTwoCost: 2399,
                productThreeCost: 5300,

            }
        },
        filters: {
            formatCost(value) {
                return '$' + (value / 100).toFixed(2);
            }
        },
        methods: {
            test(){
                console.log(this.$refs);
            }
        }
    }
</script>
