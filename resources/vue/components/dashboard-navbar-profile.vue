<template>
    <button id="dropdown-profile" type="button" class="dropdown-toggle flex items-center" aria-haspopup="menu"
        aria-expanded="false" aria-label="Dropdown">
        <div class="avatar">
            <div class="size-9.5 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar 1" />
            </div>
        </div>
    </button>
    <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical"
        aria-labelledby="dropdown-profile">
        <li class="dropdown-header gap-2">
            <div class="avatar">
                <div class="w-10 rounded-full">
                    <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
                </div>
            </div>
            <div>
                <h6 class="text-base-content/90 text-base font-semibold">
                    John Doe
                </h6>
                <span class="text-base-content/50 badge badge-xs">
                    Admin
                </span>
            </div>
        </li>
        <li>
            <RouterLink to="/dashboard/profile" class="dropdown-item" href="#">
                <IconUser class="size-4" />
                {{ $t('My Profile') }}
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/dashboard/configuration" class="dropdown-item" href="#">
                <IconSettings class="size-4" />
                {{ $t('Settings') }}
            </RouterLink>
        </li>
        <li class="dropdown-footer gap-2">
            <a class="btn btn-error btn-soft btn-block" href="#">
                <IconLogout class="size-4" />
                {{ $t('Sign Out') }}
            </a>
        </li>
    </ul>
</template>
