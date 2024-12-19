<script>
export default {
    setup() {
        const store = useLayoutStore();
        store.setLayout('auth');
    },
    // beforeCreate() {
    //     if (this.enableRegister !== true) this.$router.replace('/auths/login');
    //     else this.$router.replace('/dashboard');
    // }
};
</script>

<template>
    <div>

    </div>
    <div class="card sm:max-w-sm">
        <div class="card-header">
            <h5 class="card-title mb-0">
                {{ $t('Sign In to Your Account') }}
            </h5>
            <div class="text-base-content/50 mb-6">
                {{ $t('Enter your email and password to sign in') }}
            </div>
        </div>
        <div class="card-body">
            <FormInput required name="account" iconLeft="user" />
            <FormInput required type="password" name="password" iconLeft="lock" iconRight="eye" />
        </div>
        <div class="card-footer">
            <div class="card-actions">
                <button class="btn btn-primary btn-block">
                    <span class="icon-[tabler--login-2]"></span>
                    {{ $t('Sign In') }}
                </button>
                <button class="btn btn-secondary btn-soft btn-block">
                    <span class="icon-[tabler--user-plus]"></span>
                    {{ $t('Sign Up') }}
                </button>
            </div>
        </div>
    </div>
</template>
