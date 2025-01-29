<template>
    <nav
        class="z-20 navbar fixed top-0 w-full bg-base-100 max-sm:rounded-box max-sm:shadow sm:border-b border-base-content/25">
        <button type="button" class="btn btn-text max-sm:btn-square sm:hidden me-2" aria-haspopup="dialog"
            aria-expanded="false" aria-controls="dashboard-sidebar" data-overlay="#dashboard-sidebar">
            <span class="icon-[tabler--menu-2] size-5"></span>
        </button>
        <div class="flex flex-1 items-center">
            <div class="flex items-center gap-3">
                <IconBrandTailwind class="size-10" />
                <h3 class="drawer-title text-xl font-semibold">Dragon KIT</h3>
            </div>
        </div>
        <div class="navbar-end flex items-center gap-4">
            <div class="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
                <DashboardNavbarActivity />
                <SelectorLanguage buttonText />
                <SelectorTheme buttonText />
                <DashboardNavbarNotification />
            </div>
            <div class="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
                <DashboardNavbarProfile />
            </div>
        </div>
    </nav>
</template>
