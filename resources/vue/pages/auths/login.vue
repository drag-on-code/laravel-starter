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
    <div class="card w-full">
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
                <div class="flex items-right justify-end mb-5 w-full">
                    <RouterLink to="/auths/forgot-password" class="text-secondary">
                        {{ $t('Forgot Password?') }}
                    </RouterLink>
                </div>
                <button class="btn btn-primary btn-block">
                    <span class="icon-[tabler--login-2]"></span>
                    {{ $t('Sign In') }}
                </button>
                <RouterLink to="/auths/register" class="btn  btn-block">
                    <span class="icon-[tabler--user-plus]"></span>
                    {{ $t('Sign Up') }}
                </RouterLink>
            </div>
        </div>
    </div>
</template>
