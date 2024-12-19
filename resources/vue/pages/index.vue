<script>
export default {
    setup() {
        const store = useLayoutStore();
        store.setLayout('public');
    },
    // beforeCreate() {
    //     if (this.enableRegister !== true) this.$router.replace('/auths/login');
    //     else this.$router.replace('/dashboard');
    // }
};
</script>

<template>
    <section class="uk-section uk-section-primary uk-light">
        <div class="uk-container">
            <div class="uk-width-3-4@m uk-margin-auto uk-padding-large">
                <div class="uk-text-center">
                    <h2>We are an IT Inovative</h2>
                    <p class="uk-margin-remove">
                        We are consultants and programmers in Information and Technology field with dynamic innovation
                        development of digital age, in order to provide solutions to every problem and business
                        development for any growing companies
                    </p>
                </div>
                <div class="uk-margin-medium-top">
                    <div uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
                        <form>
                            <div class="uk-grid-small" uk-grid>
                                <div class="uk-width-expand@s">
                                    <input type="email" class="uk-input uk-form-large uk-width-1-1 uk-border-pill"
                                        placeholder="Email Address" />
                                </div>
                                <div class="uk-width-1-1 uk-width-auto@s">
                                    <input type="submit" value="Subscribe"
                                        class="uk-button uk-button-primary uk-button-large uk-border-pill" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
