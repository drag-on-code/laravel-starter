<script>
import Auth from '~/layouts/auth.vue';
import Canvas from '~/layouts/canvas.vue';
import Dashboard from '~/layouts/dashboard.vue';
import Public from '~/layouts/public.vue';

export default {
    computed: {
        ...mapState(useLayoutStore, ['layout']),
        // ...mapGetters(useAuthStore, ['hasSession']),
        // ...mapGetters(useResponseStore, ['htmlError', 'errors']),
    },
    components: {
        'auth': Auth,
        'dashboard': Dashboard,
        'public': Public,
        'canvas': Canvas,
    },
    methods: {
        // ...mapActions(useAuthStore, ['loadSession']),
        // ...mapActions(useModuleStore, ['getModule']),
        // ...mapActions(useVersionStore, ['getVersion']),
        // ...mapActions(useConfigurationStore, ['fetchAll']),
        showToast(message) {
            this.$swal({
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                text: message,
                timer: 3000,
                timerProgressBar: true,
                toast: true,
                showCloseButton: true,
            });
        },
        showToastDeleteInfo() {
            this.$swal({
                icon: 'info',
                position: 'top-end',
                showConfirmButton: false,
                text: this.$t('Data Successfully Deleted'),
                timer: 3000,
                timerProgressBar: true,
                toast: true,
            })
        },
        remove(store) {
            this.$swal({
                title: this.$t('Confirm Delete?'),
                text: this.$t('Data Will Not Be Restored!'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: this.$t('Yes, Delete!!')
            }).then((result) => {
                if (result.isConfirmed) {
                    store.remove(store.data.id).then(async (res) => {
                        store.setView();
                        await this.$router.replace(`${store.route}`);
                        this.$root.showToastDeleteInfo();
                    }).catch(err => { });
                }
            }).catch(err => { });
        },
        removeBack(store) {
            this.$swal({
                title: this.$t('Confirm Delete?'),
                text: this.$t('Data Will Not Be Restored!'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: this.$t('Yes, Delete!!')
            }).then((result) => {
                if (result.isConfirmed) {
                    store.remove(store.data.id).then(async (res) => {
                        store.setView();
                        await this.$router.replace(`${store.backRoute}`);
                        this.$root.showToastDeleteInfo();
                    }).catch(err => { });
                }
            }).catch(err => { });
        },
        removeClosure(store, callback) {
            this.$swal({
                title: this.$t('Confirm Delete?'),
                text: this.$t('Data Will Not Be Restored!'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: this.$t('Yes, Delete!!')
            }).then((result) => {
                if (result.isConfirmed) {
                    store.remove(store.data.id).then(async (res) => {
                        store.setView();
                        await this.$router.replace(`${store.route}`);
                        this.$root.showToastDeleteInfo();
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }).catch(err => {
                        if (typeof callback === 'function') {
                            callback(err);
                        }
                    });
                } else {
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            }).catch(err => {
                if (typeof callback === 'function') {
                    callback(err);
                }
            });
        },
        submit(store, method, redirect = true) {
            store.submitForm(method, store.form)
                .then(async res => {
                    store.setView();
                    if (method == "POST" && redirect) this.$router.replace(res.data.id.toString());
                    this.showToast(res.message)
                })
                .catch(err => { });
        },
        submitBackIndex(store, method) {
            store.submitForm(method, store.form)
                .then(async res => {
                    store.setView();
                    if (method == "POST") this.$router.replace(store.route);
                    this.showToast(res.message)
                })
                .catch(err => { });
        },
        submitBulkBackIndex(store, method) {
            store.submitBulkForm(method, store.form)
                .then(async res => {
                    store.setView();
                    if (method == "POST") this.$router.replace(store.route);
                    this.showToast(res.message)
                })
                .catch(err => { });
        }
    },
    created() {
        // this.loadSession();
        // this.getModule().catch(err => { });
        // this.getVersion().catch(err => { });
        // this.fetchAll({
        //     skipPagination: true
        // }).catch(err => { });
    },
    watch: {
        errors(value) {
            if (value != null) {
                const title = this.$t('Something is wrong!')
                if (value?.message) {
                    this.$swal({
                        icon: 'error',
                        position: 'center',
                        showConfirmButton: true,
                        timerProgressBar: true,
                        title: value?.title || title,
                        html: value?.message || 'Error Occured',
                        // timer: 5000,
                    })
                } else {
                    this.$swal({
                        icon: 'error',
                        position: 'center',
                        showConfirmButton: true,
                        timerProgressBar: true,
                        title: value?.title || title,
                        html: this.htmlError,
                        // timer: 5000,
                    });
                }
            }
        }
    }
}
</script>

<template>
    <component :is="layout"></component>
</template>
