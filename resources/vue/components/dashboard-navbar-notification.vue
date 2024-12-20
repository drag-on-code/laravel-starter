<template>
    <button id="dropdown-scrollable" type="button"
        class="dropdown-toggle btn btn-text btn-circle dropdown-open:bg-base-content/10 size-10" aria-haspopup="menu"
        aria-expanded="false" aria-label="Dropdown">
        <div class="indicator">
            <span class="indicator-item bg-error size-2 rounded-full"></span>
            <span class="icon-[tabler--bell] text-base-content size-[1.375rem]"></span>
        </div>
    </button>
    <div class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical"
        aria-labelledby="dropdown-scrollable">
        <div class="dropdown-header justify-center">
            <h6 class="text-base-content/90 text-base">Notifications</h6>
        </div>
        <div
            class="vertical-scrollbar horizontal-scrollbar rounded-scrollbar text-base-content/80 max-h-56 overflow-auto max-md:max-w-60">
            <div class="dropdown-item">
                <div class="avatar away-bottom">
                    <div class="w-10 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar 1" />
                    </div>
                </div>
                <div class="w-60">
                    <h6 class="truncate text-base">Charles Franklin</h6>
                    <small class="text-base-content/50 truncate">Accepted your connection</small>
                </div>
            </div>
            <div class="dropdown-item">
                <div class="avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar 2" />
                    </div>
                </div>
                <div class="w-60">
                    <h6 class="truncate text-base">Martian added moved Charts & Maps task to the done board.
                    </h6>
                    <small class="text-base-content/50 truncate">Today 10:00 AM</small>
                </div>
            </div>
            <div class="dropdown-item">
                <div class="avatar online-bottom">
                    <div class="w-10 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png" alt="avatar 8" />
                    </div>
                </div>
                <div class="w-60">
                    <h6 class="truncate text-base">New Message</h6>
                    <small class="text-base-content/50 truncate">You have new message from Natalie</small>
                </div>
            </div>
            <div class="dropdown-item">
                <div class="avatar placeholder">
                    <div class="bg-neutral text-neutral-content w-10 rounded-full p-2">
                        <span class="icon-[tabler--user] size-full"></span>
                    </div>
                </div>
                <div class="w-60">
                    <h6 class="truncate text-base">Application has been approved 🚀</h6>
                    <small class="text-base-content/50 text-wrap">Your ABC project application has been
                        approved.</small>
                </div>
            </div>
            <div class="dropdown-item">
                <div class="avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png" alt="avatar 10" />
                    </div>
                </div>
                <div class="w-60">
                    <h6 class="truncate text-base">New message from Jane</h6>
                    <small class="text-base-content/50 text-wrap">Your have new message from Jane</small>
                </div>
            </div>
            <div class="dropdown-item">
                <div class="avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="avatar 3" />
                    </div>
                </div>
                <div class="w-60">
                    <h6 class="truncate text-base">Barry Commented on App review task.</h6>
                    <small class="text-base-content/50 truncate">Today 8:32 AM</small>
                </div>
            </div>
        </div>
        <RouterLink to="/dashboard/notifications" class="dropdown-footer justify-center gap-1">
            <IconEye class="size-4" />
            View all
        </RouterLink>
    </div>
</template>
