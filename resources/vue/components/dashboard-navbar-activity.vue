<template>
    <button type="button" class="btn btn-text btn-circle" aria-haspopup="dialog" aria-expanded="false"
        aria-controls="overlay-end-example" data-overlay="#overlay-end-example">
        <IconInfoCircle />
    </button>

    <div id="overlay-end-example"
        class="overlay overlay-open:translate-x-0 drawer drawer-end hidden [--body-scroll:true] [--overlay-backdrop:false]"
        role="dialog" tabindex="-1">
        <div class="drawer-header">
            <h3 class="drawer-title">
                {{ $t('Activity Log') }}
            </h3>
            <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close"
                data-overlay="#overlay-end-example">
                <span class="icon-[tabler--x] size-5"></span>
            </button>
        </div>
        <div class="drawer-body">
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
        </div>
    </div>
</template>
