const app = Vue.createApp({
    data() {
        return {
            result: 0,
            goal: ''
        }
    },
    methods: {
        add(num) {
            this.result = this.result + num
        }
    },
    computed: {
        resultGoal() {
            if (this.result < 37) {
                return this.goal = 'Not there yet'
            } else if (this.result > 37) {
                return this.goal = 'Too much!'
            } else {
                return this.goal = this.result;
            }
        }
    },
    watch: {
        result(value) {
            if (value > 0) {
                const that = this;
                setTimeout(function () {
                    that.result = 0;
                }, 5000);
            }
        }
    }
})

app.mount('#assignment');