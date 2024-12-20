<script>
export default {
    computed: {
        year() {
            return new Date().getFullYear();
        }
    }
};
</script>

<template>
    <footer class="footer bg-base-200/60 p-10">
        <aside class="gap-6">
            <div class="flex items-center gap-2 text-xl font-bold">
                <IconBrandTailwind /> <span>Dragon UI</span>
            </div>
            <p class="text-base-content/90">Most developer friendly & highly <br />customisable Tailwind UI Kit. </p>
        </aside>
        <nav class="text-base-content/90">
            <h6 class="footer-title">Services</h6>
            <a href="#" class="link link-hover">Branding</a>
            <a href="#" class="link link-hover">Design</a>
            <a href="#" class="link link-hover">Marketing</a>
            <a href="#" class="link link-hover">Advertisement</a>
        </nav>
        <nav class="text-base-content/90">
            <h6 class="footer-title">Company</h6>
            <a href="#" class="link link-hover">About us</a>
            <a href="#" class="link link-hover">Contact</a>
            <a href="#" class="link link-hover">Jobs</a>
            <a href="#" class="link link-hover">Press kit</a>
        </nav>
        <nav class="text-base-content/90">
            <h6 class="footer-title">Legal</h6>
            <a href="#" class="link link-hover">Terms of use</a>
            <a href="#" class="link link-hover">Privacy policy</a>
            <a href="#" class="link link-hover">Cookie policy</a>
        </nav>
    </footer>
    <footer class="footer bg-base-200 p-10">
        <div class="flex w-full items-center justify-between">
            <aside class="grid-flow-col items-center">
                <p>&copy; {{ year }} <a class="link link-hover font-medium" href="#">Dragon UI</a></p>
            </aside>
            <div class="flex gap-4 h-5">
                <a href="#" class="link" aria-label="Github Link">
                    <IconBrandGithub />
                </a>
                <a href="#" class="link" aria-label="Facebook Link">
                    <IconBrandFacebook />
                </a>
                <a href="#" class="link" aria-label="X Link">
                    <IconBrandX />
                </a>
                <a href="#" class="link" aria-label="Google Link">
                    <IconBrandLinkedin />
                </a>
            </div>
        </div>
    </footer>
</template>
