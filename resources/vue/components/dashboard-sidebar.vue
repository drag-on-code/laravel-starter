<template>
    <aside id="dashboard-sidebar"
        class="overlay sm:shadow-none overlay-open:translate-x-0 drawer drawer-start hidden max-w-64 sm:flex sm:translate-x-0 pt-16"
        role="dialog" tabindex="-1">
        <div class="drawer-body px-2 pt-4">
            <ul class="menu space-y-0.5 [&_.nested-collapse-wrapper]:space-y-0.5 [&_ul]:space-y-0.5 p-0">
                <li>
                    <RouterLink to="/dashboard">
                        <IconHome />
                        Home
                    </RouterLink>
                </li>
                <div class="divider text-base-content/50 py-6 after:border-0">
                    {{ $t('Application') }}
                </div>
                <li class="space-y-0.5">
                    <a class="collapse-toggle collapse-open:bg-base-content/10" id="menu-app"
                        data-collapse="#menu-app-collapse">
                        <span class="icon-[tabler--apps] size-5"></span>
                        Apps
                        <span
                            class="icon-[tabler--chevron-down] collapse-open:rotate-180 size-4 transition-all duration-300"></span>
                    </a>
                    <ul id="menu-app-collapse"
                        class="collapse hidden w-auto overflow-hidden transition-[height] duration-300"
                        aria-labelledby="menu-app">
                        <li>
                            <a>
                                <span class="icon-[tabler--message] size-5"></span>
                                Chat
                            </a>
                        </li>
                        <li>
                            <a>
                                <span class="icon-[tabler--calendar] size-5"></span>
                                Calendar
                            </a>
                        </li>
                        <li class="nested-collapse-wrapper">
                            <a class="collapse-toggle nested-collapse" id="sub-menu-academy"
                                data-collapse="#sub-menu-academy-collapse">
                                <span class="icon-[tabler--book] size-5"></span>
                                Academy
                                <span class="icon-[tabler--chevron-down] collapse-icon size-4"></span>
                            </a>
                            <ul id="sub-menu-academy-collapse"
                                class="collapse hidden w-auto overflow-hidden transition-[height] duration-300"
                                aria-labelledby="sub-menu-academy">
                                <li>
                                    <a>
                                        <span class="icon-[tabler--books] size-5"></span>
                                        Courses
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span class="icon-[tabler--list-details] size-5"></span>
                                        Course details
                                    </a>
                                </li>
                                <li class="nested-collapse-wrapper">
                                    <a class="collapse-toggle nested-collapse" id="sub-menu-academy-stats"
                                        data-collapse="#sub-menu-academy-stats-collapse">
                                        <span class="icon-[tabler--chart-bar] size-5"></span>
                                        Stats
                                        <span class="icon-[tabler--chevron-down] collapse-icon size-4"></span>
                                    </a>
                                    <ul id="sub-menu-academy-stats-collapse"
                                        class="collapse hidden w-auto overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="sub-menu-academy-stats">
                                        <li>
                                            <a>
                                                <span class="icon-[tabler--chart-donut] size-5"></span>
                                                Goals
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <div class="divider text-base-content/50 py-6 after:border-0">Account</div>
                <li>
                    <RouterLink to="/dashboard/profile">
                        <IconUser />
                        {{ $t('My Profile') }}
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/dashboard/configuration">
                        <IconSettings />
                        {{ $t('Configuration') }}
                    </RouterLink>
                </li>
                <li>
                    <a>
                        <IconLogout2 />
                        {{ $t('Sign Out') }}
                    </a>
                </li>
                <li>
                    <RouterLink to="/dashboard/documents">
                        <IconFiles />
                        {{ $t('Documentation') }}
                    </RouterLink>
                </li>
            </ul>
            <div class="bg-base-200/30 border-base-content/10 mt-4 rounded-md border p-3">
                <div class="avatar placeholder">
                    <div class="bg-neutral text-neutral-content w-10 rounded-full">
                        <span class="icon-[tabler--crown] size-6 shrink-0"></span>
                    </div>
                </div>
                <h5 class="text-base-content/90 mt-4 text-lg font-semibold">Upgrade to Pro</h5>
                <p class="text-base-content/80 text-xs">Reminder, extra prjects, advanced search and more</p>
                <button class="btn btn-primary btn-block mt-2">Upgrade Now</button>
            </div>
        </div>
    </aside>
</template>
