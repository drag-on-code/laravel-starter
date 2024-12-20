<script>
export default {
    setup() {
        const store = useLayoutStore();
        store.setLayout('dashboard');
    },
};
</script>

<template>
    <div class="grid grid-cols-4 overflow-auto gap-2">
        <div class="col-span-2 border rounded-box">
            <div class="bg-base-100 text-base-content/90 rounded-box w-full p-2">
                <div class="text-base-content/50 px-2 py-2 text-xs sm:px-4">TODAY’S MEETINGS</div>
                <ul class="space-y-0.5">
                    <li class="flex items-center px-2 py-2.5 max-sm:gap-4 sm:gap-8 sm:px-4"><span
                            class="min-w-14 text-xl font-medium">08:30</span>
                        <div class="w-full">
                            <div class="text-base font-medium">Daily Project Review</div>
                            <p class="text-base-content/80 text-xs max-sm:hidden">Team organization</p>
                        </div>
                        <div class="avatar max-sm:hidden">
                            <div class="size-9.5 rounded-full"><img
                                    src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="User Image"></div>
                        </div><label class="flex items-center gap-1"><span
                                class="label cursor-pointer flex-col items-start max-sm:hidden"><span
                                    class="text-base-content/90 text-base">Privacy</span></span>
                            <input type="checkbox" class="switch switch-primary max-[480px]:hidden"></label>
                    </li>
                    <li class="flex items-center px-2 py-2.5 max-sm:gap-4 sm:gap-8 sm:px-4"><span
                            class="min-w-14 text-xl font-medium">09:00</span>
                        <div class="w-full">
                            <div class="text-base font-medium">Sprint Surge</div>
                            <p class="text-base-content/80 text-xs max-sm:hidden">Daily Boost for Agile Progress</p>
                        </div>
                        <div class="avatar-group pull-up -space-x-4 max-sm:hidden rtl:space-x-reverse">
                            <div class="avatar">
                                <div class="w-9.5"><img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png"
                                        alt="User Image"></div>
                            </div>
                            <div class="avatar">
                                <div class="w-9.5"><img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png"
                                        alt="User Image"></div>
                            </div>
                            <div class="avatar placeholder">
                                <div class="bg-neutral text-neutral-content w-9.5"><span>+9</span></div>
                            </div>
                        </div><label class="flex items-center gap-1"><span
                                class="label cursor-pointer flex-col items-start max-sm:hidden"><span
                                    class="text-base-content/90 text-base">Privacy</span></span>
                            <input type="checkbox" class="switch switch-primary max-[480px]:hidden" checked=""></label>
                    </li>
                    <li class="flex items-center px-2 py-2.5 max-sm:gap-4 sm:gap-8 sm:px-4"><span
                            class="min-w-14 text-xl font-medium">11:45</span>
                        <div class="w-full">
                            <div class="text-base font-medium">Project Status Update</div>
                            <p class="text-base-content/80 text-xs max-sm:hidden">Progress Overview Update</p>
                        </div>
                        <div class="avatar max-sm:hidden">
                            <div class="size-9.5 rounded-full"><img
                                    src="https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png" alt="User Image"></div>
                        </div><label class="flex items-center gap-1"><span
                                class="label cursor-pointer flex-col items-start max-sm:hidden"><span
                                    class="text-base-content/90 text-base">Privacy</span></span>
                            <input type="checkbox" class="switch switch-primary max-[480px]:hidden"></label>
                    </li>
                    <li class="flex items-center px-2 py-2.5 max-sm:gap-4 sm:gap-8 sm:px-4"><span
                            class="min-w-14 text-xl font-medium">06:30</span>
                        <div class="w-full">
                            <div class="text-base font-medium">Team Performance</div>
                            <p class="text-base-content/80 text-xs max-sm:hidden">Team Metrics Evaluation</p>
                        </div>
                        <div class="avatar-group pull-up -space-x-4 max-sm:hidden rtl:space-x-reverse">
                            <div class="avatar">
                                <div class="w-9.5"><img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png"
                                        alt="User Image"></div>
                            </div>
                            <div class="avatar">
                                <div class="w-9.5"><img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png"
                                        alt="User Image"></div>
                            </div>
                            <div class="avatar placeholder">
                                <div class="bg-neutral text-neutral-content w-9.5"><span>+9</span></div>
                            </div>
                        </div><label class="flex items-center gap-1"><span
                                class="label cursor-pointer flex-col items-start max-sm:hidden"><span
                                    class="text-base-content/90 text-base">Privacy</span></span>
                            <input type="checkbox" class="switch switch-primary max-[480px]:hidden" checked=""></label>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-span-1 border rounded-box">
            <div class="card h-fit opacity-70 shadow-none">
                <div class="card-body gap-4">
                    <div class="card-title text-lg">Julia stiles shared an earnings report</div>
                    <div>
                        <div class="mb-1 flex flex-wrap items-center gap-0.5">
                            <p class="text-base-content/90 text-xl font-medium">$24,895</p>
                            <p class="text-success flex items-center"><span
                                    class="icon-[tabler--caret-up-filled] me-0.5"></span>
                                10%</p>
                        </div>
                        <p class="text-sm">Compared to $84,325 last year</p>
                    </div>
                    <div class="space-y-4">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center gap-3">
                                <div class="avatar">
                                    <div class="bg-base-content/5 size-10 rounded-md"><img
                                            src="https://cdn.flyonui.com/fy-assets/components/card/icon-1.png"
                                            alt="Zipcar Logo"></div>
                                </div>
                                <div>
                                    <div class="text-base-content/90 font-medium">Zipcar</div>
                                    <div class="text-sm">Vuejs, React &amp; HTML</div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 max-sm:w-full">
                                <p class="text-base-content/90">$24,895.65</p>
                                <div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                    aria-valuemax="100" aria-label="zipcar completion progress">
                                    <div class="progress-bar progress-primary w-3/4"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center gap-3">
                                <div class="avatar">
                                    <div class="bg-base-content/5 size-10 rounded-md"><img
                                            src="https://cdn.flyonui.com/fy-assets/components/card/icon-2.png"
                                            alt="Bitbank logo"></div>
                                </div>
                                <div>
                                    <div class="text-base-content/90 font-medium">Bitbank</div>
                                    <div class="text-sm">Sketch, Figma &amp; XD</div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 max-sm:w-full">
                                <p class="text-base-content/90">$8,6500.20</p>
                                <div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                    aria-valuemax="100" aria-label="Bitbank completion progress">
                                    <div class="progress-bar progress-info w-3/4"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center gap-3">
                                <div class="avatar">
                                    <div class="bg-base-content/5 size-10 rounded-md"><img
                                            src="https://cdn.flyonui.com/fy-assets/components/card/icon-3.png"
                                            alt="aviato logo"></div>
                                </div>
                                <div>
                                    <div class="text-base-content/90 font-medium">Aviato</div>
                                    <div class="text-sm">HTML &amp; Angular</div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 max-sm:w-full">
                                <p class="text-base-content/90">$1,2450.80</p>
                                <div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                    aria-valuemax="100" aria-label="Aviato completion progress">
                                    <div class="progress-bar progress-secondary w-3/4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-1 border rounded-box">
            <div class="text-base-content/90 rounded-box bg-base-100 w-96 p-2 opacity-40">
                <div class="text-base-content/50 px-4 py-2 text-xs">CHAT LIST</div>
                <ul class="space-y-0.5">
                    <li class="flex items-center gap-2 px-4 py-2.5"><img
                            src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="User Image"
                            class="size-10 rounded-full">
                        <div class="flex grow items-center justify-between gap-y-1">
                            <div class="user-info">
                                <div class="text-base">Phillip George</div>
                                <p class="text-base-content/80 text-xs">Hii samira, thanks for...</p>
                            </div>
                            <div class="flex flex-col items-end gap-x-2 gap-y-0.5"><span
                                    class="text-base-content/50 text-xs">9.00AM</span>
                                <span class="badge badge-success badge-xs rounded-full">1</span>
                            </div>
                        </div>
                    </li>
                    <li class="flex items-center gap-2 px-4 py-2.5"><img
                            src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="User Image"
                            class="size-10 rounded-full">
                        <div class="flex grow items-center justify-between gap-y-1">
                            <div class="user-info">
                                <div class="text-base">Jaylon Donin</div>
                                <p class="text-base-content/80 text-xs">I’ll send the texts...</p>
                            </div>
                            <div class="flex flex-col items-end gap-x-2 gap-y-0.5"><span
                                    class="text-base-content/50 text-xs">10.00PM</span>
                                <span class="badge badge-success badge-xs rounded-full">3</span>
                            </div>
                        </div>
                    </li>
                    <li class="flex items-center gap-2 px-4 py-2.5"><img
                            src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="User Image"
                            class="size-10 rounded-full">
                        <div class="flex grow items-center justify-between gap-y-1">
                            <div class="user-info">
                                <div class="text-base">Tiana Curtis</div>
                                <p class="text-base-content/80 text-xs">That’s Great!</p>
                            </div><span class="text-base-content/50 text-xs">8.30AM</span>
                        </div>
                    </li>
                    <li class="flex items-center gap-2 px-4 py-2.5"><img
                            src="https://cdn.flyonui.com/fy-assets/avatar/avatar-4.png" alt="User Image"
                            class="size-10 rounded-full">
                        <div class="flex grow items-center justify-between gap-y-1">
                            <div class="user-info">
                                <div class="text-base">Zaire Vetrovs</div>
                                <p class="text-base-content/80 text-xs">https://www.youtub...</p>
                            </div>
                            <div class="flex flex-col items-end gap-x-2 gap-y-0.5"><span
                                    class="text-base-content/50 text-xs">5.50AM</span>
                                <span class="badge badge-success badge-xs rounded-full">2</span>
                            </div>
                        </div>
                    </li>
                    <li class="flex items-center gap-2 px-4 py-2.5"><img
                            src="https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png" alt="User Image"
                            class="size-10 rounded-full">
                        <div class="flex grow items-center justify-between gap-y-1">
                            <div class="user-info">
                                <div class="text-base">Kianna Philips</div>
                                <p class="text-base-content/80 text-xs">It was awesome.</p>
                            </div><span class="text-base-content/50 text-xs">6.45PM</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="mt-5 border rounded-box theme-header  gap-x-7.5 grid grid-cols-4 gap-y-6 p-6 sm:p-16"
        style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
        <div class="space-y-6 max-xl:col-span-2 max-md:col-span-4 md:space-y-9">
            <div class="card">
                <div class="card-body text-base-content/90 p-2">
                    <div class="text-base-content/50 px-4 py-2 text-xs">CHAT LIST</div>
                    <ul class="space-y-0.5">
                        <li class="flex items-center gap-2 px-4 py-2.5"><img
                                src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="User Image"
                                class="size-10 rounded-full">
                            <div class="flex grow items-center justify-between gap-y-1">
                                <div class="user-info">
                                    <div class="text-base">Phillip George</div><small
                                        class="text-base-content/80 text-xs">Hii samira, thanks...</small>
                                </div>
                                <div class="flex flex-col items-end gap-x-2 gap-y-0.5"><span
                                        class="text-base-content/50 text-xs">9.00AM</span>
                                    <span class="badge badge-success badge-xs rounded-full">1</span>
                                </div>
                            </div>
                        </li>
                        <li class="flex items-center gap-2 px-4 py-2.5"><img
                                src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="User Image"
                                class="size-10 rounded-full">
                            <div class="flex grow items-center justify-between gap-y-1">
                                <div class="user-info">
                                    <div class="text-base">Jaylon Donin</div><small
                                        class="text-base-content/80 text-xs">I’ll send the texts...</small>
                                </div>
                                <div class="flex flex-col items-end gap-x-2 gap-y-0.5"><span
                                        class="text-base-content/50 text-xs">10.00PM</span>
                                    <span class="badge badge-success badge-xs rounded-full">3</span>
                                </div>
                            </div>
                        </li>
                        <li class="flex items-center gap-2 px-4 py-2.5"><img
                                src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="User Image"
                                class="size-10 rounded-full">
                            <div class="flex grow items-center justify-between gap-y-1">
                                <div class="user-info">
                                    <div class="text-base">Tiana Curtis</div><small
                                        class="text-base-content/80 text-xs">That’s Great!</small>
                                </div><span class="text-base-content/50 text-xs">8.30AM</span>
                            </div>
                        </li>
                        <li class="flex items-center gap-2 px-4 py-2.5"><img
                                src="https://cdn.flyonui.com/fy-assets/avatar/avatar-4.png" alt="User Image"
                                class="size-10 rounded-full">
                            <div class="flex grow items-center justify-between gap-y-1">
                                <div class="user-info">
                                    <div class="text-base">Zaire Vetrovs</div><small
                                        class="text-base-content/80 text-xs">https://www.youtub...</small>
                                </div>
                                <div class="flex flex-col items-end gap-x-2 gap-y-0.5"><span
                                        class="text-base-content/50 text-xs">5.50AM</span>
                                    <span class="badge badge-success badge-xs rounded-full">2</span>
                                </div>
                            </div>
                        </li>
                        <li class="flex items-center gap-2 px-4 py-2.5"><img
                                src="https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png" alt="User Image"
                                class="size-10 rounded-full">
                            <div class="flex grow items-center justify-between gap-y-1">
                                <div class="user-info">
                                    <div class="text-base">Kianna Philips</div><small
                                        class="text-base-content/80 text-xs">It was awesome.</small>
                                </div><span class="text-base-content/50 text-xs">6.45PM</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card">
                <div class="card-body text-base-content/90 p-2">
                    <div class="text-base-content/50 px-4 py-2 text-xs">APPS NOTIFICATION</div>
                    <ul class="space-y-0.5">
                        <li class="flex items-center justify-between px-4 py-2.5">
                            <div class="flex items-center gap-2"><img
                                    src="https://cdn.flyonui.com/fy-assets/components/social-icon/google.png"
                                    alt="google logo" class="size-5">
                                <span>Google</span>
                            </div><input type="checkbox" class="switch switch-primary"
                                aria-label="Disable notifications" checked="">
                        </li>
                        <li class="flex items-center justify-between px-4 py-2.5">
                            <div class="flex items-center gap-2"><img
                                    src="https://cdn.flyonui.com/fy-assets/components/social-icon/twitter.png"
                                    alt="twitter logo" class="size-5">
                                <span>Twitter</span>
                            </div><input type="checkbox" class="switch switch-primary"
                                aria-label="Enable notifications">
                        </li>
                        <li class="flex items-center justify-between px-4 py-2.5">
                            <div class="flex items-center gap-2"><img
                                    src="https://cdn.flyonui.com/fy-assets/components/social-icon/linkedin.png"
                                    alt="linkedin logo" class="size-5">
                                <span>Linkedin</span>
                            </div><input type="checkbox" class="switch switch-primary"
                                aria-label="Enable notifications">
                        </li>
                        <li class="flex items-center justify-between px-4 py-2.5">
                            <div class="flex items-center gap-2"><img
                                    src="https://cdn.flyonui.com/fy-assets/components/social-icon/dribbble.png"
                                    alt="dribble logo" class="size-5">
                                <span>Dribbble</span>
                            </div><input type="checkbox" class="switch switch-primary"
                                aria-label="Disable notifications" checked="">
                        </li>
                        <li class="flex items-center justify-between px-4 py-2.5">
                            <div class="flex items-center gap-2"><img
                                    src="https://cdn.flyonui.com/fy-assets/components/social-icon/behance.png"
                                    alt="behance logo" class="size-5">
                                <span>Behance</span>
                            </div><input type="checkbox" class="switch switch-primary"
                                aria-label="Enable notifications">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-span-4 space-y-6 max-xl:order-3 md:space-y-7 xl:col-span-2">
            <div class="bg-base-100 rounded-box p-9 text-center shadow">
                <div class="text-base-content/90 mb-5 text-3xl font-bold">Dragon UI Themes</div><a
                    href="/docs/customization/themes/" class="btn btn-lg btn-gradient btn-primary">View All Themes
                    <span class="icon-[tabler--external-link]"></span></a>
            </div>
            <div class="flex items-center justify-between">
                <nav class="navbar rounded-box shadow">
                    <div class="w-full md:flex md:items-center md:gap-2">
                        <div class="flex items-center justify-between">
                            <div class="navbar-start items-center justify-between max-md:w-full"><a
                                    href="https://flyonui.com/" title="flyonui"
                                    class="flex items-center gap-3 text-xl font-bold"><svg width="32" height="32"
                                        viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#a)">
                                            <mask id="b" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0"
                                                y="0" width="32" height="32">
                                                <path
                                                    d="M24 0H8A8 8 0 000 8v16a8 8 0 008 8h16a8 8 0 008-8V8a8 8 0 00-8-8"
                                                    fill="#fff"></path>
                                            </mask>
                                            <g mask="url(#b)">
                                                <path
                                                    d="M24 0H8A8 8 0 000 8v16a8 8 0 008 8h16a8 8 0 008-8V8a8 8 0 00-8-8"
                                                    fill="oklch(var(--p))"></path>
                                                <path
                                                    d="M24 0H8A8 8 0 000 8v16a8 8 0 008 8h16a8 8 0 008-8V8a8 8 0 00-8-8"
                                                    fill="url(#c)"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="m22.258 20.467-5.55-6.839a1 1 0 00-1.568.02l-5.023 6.521a1 1 0 01-.793.39H7.17a1 1 0 01-.78-1.626l8.748-10.919a1 1 0 011.556-.006l9.125 11.198a1 1 0 01-.775 1.631h-2.01a1 1 0 01-.776-.37m-5.59-1.484 2.59 2.953c.567.646.108 1.659-.751 1.659h-4.922a1 1 0 01-.785-1.62l2.331-2.953a1 1 0 011.537-.04"
                                                    fill="url(#d)"></path>
                                            </g>
                                            <path
                                                d="M24 .666H8A7.333 7.333.0 00.667 8v16A7.333 7.333.0 008 31.333h16A7.333 7.333.0 0031.334 24V8A7.333 7.333.0 0024 .666z"
                                                stroke="url(#e)" stroke-width="2"></path>
                                        </g>
                                        <defs>
                                            <linearGradient id="c" x1="29" y1="2" x2="3" y2="29.5"
                                                gradientUnits="userSpaceOnUse">
                                                <stop stop-opacity="0"></stop>
                                                <stop offset="1" stop-opacity=".38"></stop>
                                            </linearGradient>
                                            <linearGradient id="d" x1="16.107" y1="7.64" x2="16.107" y2="23.595"
                                                gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#fff"></stop>
                                                <stop offset="1" stop-color="#fff" stop-opacity=".6"></stop>
                                            </linearGradient>
                                            <linearGradient id="e" x1="16" y1="0" x2="16" y2="32"
                                                gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#fff" stop-opacity=".28"></stop>
                                                <stop offset="1" stop-color="#fff" stop-opacity=".04"></stop>
                                            </linearGradient>
                                            <clipPath id="a">
                                                <path fill="#fff" d="M0 0h32v32H0z"></path>
                                            </clipPath>
                                        </defs>
                                    </svg><span>Dragon UI</span></a>
                                <div class="md:hidden"><button type="button"
                                        class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                                        data-collapse="#dropdown-navbar-collapse"
                                        aria-controls="dropdown-navbar-collapse" aria-label="Toggle navigation">
                                        <span class="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                                        <span
                                            class="icon-[tabler--x] collapse-open:block hidden size-4"></span></button>
                                </div>
                            </div>
                        </div>
                        <div id="dropdown-navbar-collapse"
                            class="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full">
                            <ul class="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
                                <li><a class="dropdown-item" href="#" onclick="event.preventDefault()">Home</a></li>
                                <li><a class="dropdown-item" href="#" onclick="event.preventDefault()">Services</a></li>
                                <li
                                    class="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                                    <button id="dropdown-nav" type="button"
                                        class="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content"
                                        aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                        Products
                                        <span
                                            class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span></button>
                                    <ul class="dropdown-menu dropdown-open:opacity-100 hidden" role="menu"
                                        aria-orientation="vertical" aria-labelledby="dropdown-nav">
                                        <li><a class="dropdown-item" href="#" onclick="event.preventDefault()">UI
                                                kits</a></li>
                                        <li><a class="dropdown-item" href="#"
                                                onclick="event.preventDefault()">Templates</a></li>
                                        <li><a class="dropdown-item" href="#" onclick="event.preventDefault()">Component
                                                library</a></li>
                                        <hr class="border-base-content/25 -mx-2 my-3">
                                        <li><a class="dropdown-item" href="#" onclick="event.preventDefault()">Figma
                                                designs</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="flex w-full justify-between gap-6 max-md:flex-col max-md:items-center">
                <div class="flex flex-col gap-5">
                    <nav class="tabs bg-neutral/10 rounded-btn w-fit space-x-1 overflow-x-auto p-1 rtl:space-x-reverse"
                        aria-label="Tabs" role="tablist" aria-orientation="horizontal"><button type="button"
                            class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary active hover:bg-transparent"
                            id="tabs-segment-item-home" data-tab="#tabs-segment-home" aria-controls="tabs-segment-home"
                            role="tab" aria-selected="true">
                            Home</button>
                        <button type="button"
                            class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-transparent"
                            id="tabs-segment-item-profile" data-tab="#tabs-segment-profile"
                            aria-controls="tabs-segment-profile" role="tab" aria-selected="false">
                            Profile</button>
                        <button type="button"
                            class="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-transparent"
                            id="tabs-segment-item-message" data-tab="#tabs-segment-message"
                            aria-controls="tabs-segment-message" role="tab" aria-selected="false">
                            Messages</button>
                    </nav>
                    <div class="mt-3 hidden">
                        <div id="tabs-segment-home" role="tabpanel" aria-labelledby="tabs-segment-item-home">
                            <p class="text-base-content/80"><span class="text-base-content/90 font-semibold">Home
                                    tab!</span></p>
                        </div>
                        <div id="tabs-segment-profile" class="hidden" role="tabpanel"
                            aria-labelledby="tabs-segment-item-profile">
                            <p class="text-base-content/80"><span class="text-base-content/90 font-semibold">Profile
                                    Tab</span></p>
                        </div>
                        <div id="tabs-segment-message" class="hidden" role="tabpanel"
                            aria-labelledby="tabs-segment-item-message">
                            <p class="text-base-content/80"><span class="text-base-content/90 font-semibold">Messages
                                    Tab</span></p>
                        </div>
                    </div><input type="text" placeholder="Type here" class="input max-w-sm">
                </div><label class="custom-option flex h-fit flex-row items-start gap-3 sm:w-1/2"><input type="radio"
                        name="radio-16" class="radio-inset radio-inset-primary radio-sm" checked="">
                    <div class="-mt-1 w-full text-start"><span class="label"><span
                                class="label-text text-base">Basic</span>
                            <span class="label-text-alt text-base-content/50 text-base">Free</span></span>
                        <span class="label"><span class="label-text-alt text-sm">Get 1 project with 1 teams
                                members.</span></span>
                    </div>
                </label>
            </div>
            <div class="flex w-full flex-wrap justify-between gap-4 gap-y-6 max-md:justify-center">
                <div class="flex items-center gap-1"><input type="checkbox" class="switch switch-outline switch-primary"
                        id="switch" checked="">
                    <label class="label label-text text-base" for="switch">Label</label>
                </div>
                <div class="flex items-center gap-2"><input type="checkbox" class="checkbox checkbox-primary"
                        id="check3" checked="">
                    <label class="label label-text text-base" for="check3">Checked</label>
                </div>
                <nav class="flex items-center gap-x-1 max-sm:justify-self-center"><button type="button"
                        class="btn btn-soft btn-square" aria-label="previous button">
                        <span class="icon-[tabler--chevrons-left] size-5 rtl:rotate-180"></span></button>
                    <div class="flex items-center gap-x-1"><button type="button"
                            class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">
                            1</button>
                        <button type="button"
                            class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">
                            2</button>
                        <button type="button" class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary"
                            aria-current="page">
                            3</button>
                        <button type="button"
                            class="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">
                            4</button>
                    </div><button type="button" class="btn btn-soft btn-square" aria-label="next button">
                        <span class="icon-[tabler--chevrons-right] size-5 rtl:rotate-180"></span></button>
                </nav>
            </div>
            <footer class="footer bg-base-100 rounded-box flex flex-col items-center gap-4 p-6 shadow">
                <div class="flex items-center gap-2 text-xl font-bold"><a href="https://flyonui.com/" title="flyonui"
                        class="text-base-content/90 flex items-center gap-3 text-xl font-bold"><svg width="32"
                            height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#a)">
                                <mask id="b" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="32" height="32">
                                    <path d="M24 0H8A8 8 0 000 8v16a8 8 0 008 8h16a8 8 0 008-8V8a8 8 0 00-8-8"
                                        fill="#fff"></path>
                                </mask>
                                <g mask="url(#b)">
                                    <path d="M24 0H8A8 8 0 000 8v16a8 8 0 008 8h16a8 8 0 008-8V8a8 8 0 00-8-8"
                                        fill="oklch(var(--p))"></path>
                                    <path d="M24 0H8A8 8 0 000 8v16a8 8 0 008 8h16a8 8 0 008-8V8a8 8 0 00-8-8"
                                        fill="url(#c)"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="m22.258 20.467-5.55-6.839a1 1 0 00-1.568.02l-5.023 6.521a1 1 0 01-.793.39H7.17a1 1 0 01-.78-1.626l8.748-10.919a1 1 0 011.556-.006l9.125 11.198a1 1 0 01-.775 1.631h-2.01a1 1 0 01-.776-.37m-5.59-1.484 2.59 2.953c.567.646.108 1.659-.751 1.659h-4.922a1 1 0 01-.785-1.62l2.331-2.953a1 1 0 011.537-.04"
                                        fill="url(#d)"></path>
                                </g>
                                <path
                                    d="M24 .666H8A7.333 7.333.0 00.667 8v16A7.333 7.333.0 008 31.333h16A7.333 7.333.0 0031.334 24V8A7.333 7.333.0 0024 .666z"
                                    stroke="url(#e)" stroke-width="2"></path>
                            </g>
                            <defs>
                                <linearGradient id="c" x1="29" y1="2" x2="3" y2="29.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-opacity="0"></stop>
                                    <stop offset="1" stop-opacity=".38"></stop>
                                </linearGradient>
                                <linearGradient id="d" x1="16.107" y1="7.64" x2="16.107" y2="23.595"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#fff"></stop>
                                    <stop offset="1" stop-color="#fff" stop-opacity=".6"></stop>
                                </linearGradient>
                                <linearGradient id="e" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#fff" stop-opacity=".28"></stop>
                                    <stop offset="1" stop-color="#fff" stop-opacity=".04"></stop>
                                </linearGradient>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                                </clipPath>
                            </defs>
                        </svg><span>Dragon UI</span></a></div>
                <aside>
                    <p>©2024
                        <span class="font-medium">Dragon UI</span>
                    </p>
                </aside>
                <nav class="text-base-content/90 grid-flow-col gap-4"><a class="link link-hover" href="#"
                        onclick="event.preventDefault()">License</a>
                    <a class="link link-hover" href="#" onclick="event.preventDefault()">Help</a>
                    <a class="link link-hover" href="#" onclick="event.preventDefault()">Contact</a>
                    <a class="link link-hover" href="#" onclick="event.preventDefault()">Policy</a>
                </nav>
                <div class="flex h-5 gap-4"><a href="#" onclick="event.preventDefault()" class="link"
                        aria-label="github"><span class="icon-[tabler--brand-github-filled] size-5"></span></a>
                    <a href="#" onclick="event.preventDefault()" class="link" aria-label="facebook"><span
                            class="icon-[tabler--brand-facebook-filled] size-5"></span></a>
                    <a href="#" onclick="event.preventDefault()" class="link" aria-label="twitter"><span
                            class="icon-[tabler--brand-x-filled] size-5"></span></a>
                    <a href="#" onclick="event.preventDefault()" class="link" aria-label="google"><span
                            class="icon-[tabler--brand-google-filled] size-5"></span></a>
                </div>
            </footer>
        </div>
        <div class="space-y-6 max-xl:order-2 max-xl:col-span-2 max-md:col-span-4 md:space-y-9">
            <div class="card">
                <div class="card-body px-4 py-4">
                    <div class="card-title mb-4 text-lg">Semantic colors</div>
                    <div class="grid grid-cols-4 gap-x-5 gap-y-4">
                        <div class="flex flex-col items-center space-y-1">
                            <div class="bg-primary rounded-box size-12"></div>
                            <p class="text-base-content/80 text-xs">primary</p>
                        </div>
                        <div class="flex flex-col items-center space-y-1">
                            <div class="bg-secondary rounded-box size-12"></div>
                            <p class="text-base-content/80 text-xs">secondary</p>
                        </div>
                        <div class="flex flex-col items-center space-y-1">
                            <div class="bg-accent rounded-box size-12"></div>
                            <p class="text-base-content/80 text-xs">accent</p>
                        </div>
                        <div class="flex flex-col items-center space-y-1">
                            <div class="bg-neutral rounded-box size-12"></div>
                            <p class="text-base-content/80 text-xs">neutral</p>
                        </div>
                        <div class="flex flex-col items-center space-y-1">
                            <div class="bg-base-100 border-base-content/20 rounded-box size-12 border"></div>
                            <p class="text-base-content/80 text-xs">base 100</p>
                        </div>
                        <div class="flex flex-col items-center space-y-1">
                            <div class="bg-base-200 rounded-box size-12"></div>
                            <p class="text-base-content/80 text-xs">base 200</p>
                        </div>
                        <div class="flex flex-col items-center space-y-1">
                            <div class="bg-base-300 rounded-box size-12"></div>
                            <p class="text-base-content/80 text-xs">base 300</p>
                        </div>
                        <div class="flex flex-col items-center space-y-1">
                            <div class="bg-base-content rounded-box size-12"></div>
                            <p class="text-base-content/80 text-xs">content</p>
                        </div>
                        <div class="flex flex-col items-center space-y-1">
                            <div class="bg-info rounded-box size-12"></div>
                            <p class="text-base-content/80 text-xs">info</p>
                        </div>
                        <div class="flex flex-col items-center space-y-1">
                            <div class="bg-success rounded-box size-12"></div>
                            <p class="text-base-content/80 text-xs">success</p>
                        </div>
                        <div class="flex flex-col items-center space-y-1">
                            <div class="bg-warning rounded-box size-12"></div>
                            <p class="text-base-content/80 text-xs">warning</p>
                        </div>
                        <div class="flex flex-col items-center space-y-1">
                            <div class="bg-error rounded-box size-12"></div>
                            <p class="text-base-content/80 text-xs">error</p>
                        </div>
                    </div>
                </div>
            </div><input type="text" class="input flatpickr-inline hidden flatpickr-input" placeholder="YYYY-MM-DD"
                readonly="readonly">
            <div class="flatpickr-calendar animate inline" tabindex="-1">
                <div class="flatpickr-months"><span class="flatpickr-prev-month"><svg version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 17 17">
                            <g></g>
                            <path
                                d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z">
                            </path>
                        </svg></span>
                    <div class="flatpickr-month">
                        <div class="flatpickr-current-month"><span class="cur-month">December </span>
                            <div class="numInputWrapper"><input class="numInput cur-year" type="number" tabindex="-1"
                                    aria-label="Year"><span class="arrowUp"></span><span class="arrowDown"></span></div>
                        </div>
                    </div><span class="flatpickr-next-month"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17">
                            <g></g>
                            <path
                                d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z">
                            </path>
                        </svg></span>
                </div>
                <div class="flatpickr-innerContainer">
                    <div class="flatpickr-rContainer">
                        <div class="flatpickr-weekdays">
                            <div class="flatpickr-weekdaycontainer">
                                <span class="flatpickr-weekday">
                                    Sun</span><span class="flatpickr-weekday">Mon</span><span
                                    class="flatpickr-weekday">Tue</span><span class="flatpickr-weekday">Wed</span><span
                                    class="flatpickr-weekday">Thu</span><span class="flatpickr-weekday">Fri</span><span
                                    class="flatpickr-weekday">Sat
                                </span>
                            </div>
                        </div>
                        <div class="flatpickr-days" tabindex="-1">
                            <div class="dayContainer"><span class="flatpickr-day" aria-label="December 1, 2024"
                                    tabindex="-1">1</span><span class="flatpickr-day" aria-label="December 2, 2024"
                                    tabindex="-1">2</span><span class="flatpickr-day" aria-label="December 3, 2024"
                                    tabindex="-1">3</span><span class="flatpickr-day" aria-label="December 4, 2024"
                                    tabindex="-1">4</span><span class="flatpickr-day" aria-label="December 5, 2024"
                                    tabindex="-1">5</span><span class="flatpickr-day" aria-label="December 6, 2024"
                                    tabindex="-1">6</span><span class="flatpickr-day" aria-label="December 7, 2024"
                                    tabindex="-1">7</span><span class="flatpickr-day" aria-label="December 8, 2024"
                                    tabindex="-1">8</span><span class="flatpickr-day" aria-label="December 9, 2024"
                                    tabindex="-1">9</span><span class="flatpickr-day" aria-label="December 10, 2024"
                                    tabindex="-1">10</span><span class="flatpickr-day" aria-label="December 11, 2024"
                                    tabindex="-1">11</span><span class="flatpickr-day" aria-label="December 12, 2024"
                                    tabindex="-1">12</span><span class="flatpickr-day" aria-label="December 13, 2024"
                                    tabindex="-1">13</span><span class="flatpickr-day" aria-label="December 14, 2024"
                                    tabindex="-1">14</span><span class="flatpickr-day" aria-label="December 15, 2024"
                                    tabindex="-1">15</span><span class="flatpickr-day" aria-label="December 16, 2024"
                                    tabindex="-1">16</span><span class="flatpickr-day" aria-label="December 17, 2024"
                                    tabindex="-1">17</span><span class="flatpickr-day" aria-label="December 18, 2024"
                                    tabindex="-1">18</span><span class="flatpickr-day" aria-label="December 19, 2024"
                                    tabindex="-1">19</span><span class="flatpickr-day today"
                                    aria-label="December 20, 2024" aria-current="date" tabindex="-1">20</span><span
                                    class="flatpickr-day" aria-label="December 21, 2024" tabindex="-1">21</span><span
                                    class="flatpickr-day" aria-label="December 22, 2024" tabindex="-1">22</span><span
                                    class="flatpickr-day" aria-label="December 23, 2024" tabindex="-1">23</span><span
                                    class="flatpickr-day" aria-label="December 24, 2024" tabindex="-1">24</span><span
                                    class="flatpickr-day" aria-label="December 25, 2024" tabindex="-1">25</span><span
                                    class="flatpickr-day" aria-label="December 26, 2024" tabindex="-1">26</span><span
                                    class="flatpickr-day" aria-label="December 27, 2024" tabindex="-1">27</span><span
                                    class="flatpickr-day" aria-label="December 28, 2024" tabindex="-1">28</span><span
                                    class="flatpickr-day" aria-label="December 29, 2024" tabindex="-1">29</span><span
                                    class="flatpickr-day" aria-label="December 30, 2024" tabindex="-1">30</span><span
                                    class="flatpickr-day" aria-label="December 31, 2024" tabindex="-1">31</span><span
                                    class="flatpickr-day nextMonthDay" aria-label="January 1, 2025"
                                    tabindex="-1">1</span><span class="flatpickr-day nextMonthDay"
                                    aria-label="January 2, 2025" tabindex="-1">2</span><span
                                    class="flatpickr-day nextMonthDay" aria-label="January 3, 2025"
                                    tabindex="-1">3</span><span class="flatpickr-day nextMonthDay"
                                    aria-label="January 4, 2025" tabindex="-1">4</span><span
                                    class="flatpickr-day nextMonthDay" aria-label="January 5, 2025"
                                    tabindex="-1">5</span><span class="flatpickr-day nextMonthDay"
                                    aria-label="January 6, 2025" tabindex="-1">6</span><span
                                    class="flatpickr-day nextMonthDay" aria-label="January 7, 2025"
                                    tabindex="-1">7</span><span class="flatpickr-day nextMonthDay"
                                    aria-label="January 8, 2025" tabindex="-1">8</span><span
                                    class="flatpickr-day nextMonthDay" aria-label="January 9, 2025"
                                    tabindex="-1">9</span><span class="flatpickr-day nextMonthDay"
                                    aria-label="January 10, 2025" tabindex="-1">10</span><span
                                    class="flatpickr-day nextMonthDay" aria-label="January 11, 2025"
                                    tabindex="-1">11</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
