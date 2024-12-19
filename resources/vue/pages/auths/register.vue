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
            <FormInput required name="name" iconLeft="user" />
            <FormInput required name="email" iconLeft="mail" />
            <FormInput required name="phone" iconLeft="phone" />
            <FormInput required type="password" name="password" iconLeft="lock" iconRight="eye" />
            <FormInput required type="password" name="confirmPassword" iconLeft="lock" iconRight="eye" />
        </div>
        <div class="card-footer">
            <div class="card-actions">
                <button class="btn btn-primary btn-block">
                    <span class="icon-[tabler--user-plus]"></span>
                    {{ $t('Register') }}
                </button>
                <RouterLink to="/auths/login" class="btn  btn-block">
                    <span class="icon-[tabler--login-2]"></span>
                    {{ $t('Back to Login') }}
                </RouterLink>
            </div>
        </div>
    </div>
</template>
