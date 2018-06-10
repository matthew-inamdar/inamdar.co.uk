import Vue from "vue";

const Site = new Vue({
    el: "#site",

    data() {
        return {
            navExpanded: false
        }
    },

    methods: {
        onNavToggleClick() {
            this.navExpanded = !this.navExpanded;
        }
    }
});
