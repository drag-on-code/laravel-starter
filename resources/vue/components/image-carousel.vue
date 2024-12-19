<template>
    <div id="image"
        data-carousel='{ "loadingClasses": "opacity-0","isInfiniteLoop": true, "isAutoPlay": true, "speed": 5000 }'
        class="relative w-full">
        <div class="carousel">
            <div class="carousel-body h-full opacity-0">
                <!-- Slide 1 -->
                <div class="carousel-slide">
                    <div class="flex h-full justify-center">
                        <img src="https://picsum.photos/1280/720" class="size-full object-cover" alt="game" />
                    </div>
                </div>
                <!-- Slide 2 -->
                <div class="carousel-slide">
                    <div class="flex h-full justify-center">
                        <img src="https://picsum.photos/1280/720" class="size-full object-cover" alt="game" />
                    </div>
                </div>
                <!-- Slide 3 -->
                <div class="carousel-slide">
                    <div class="flex h-full justify-center">
                        <img src="https://picsum.photos/1280/720" class="size-full object-cover" alt="game" />
                    </div>
                </div>
                <!-- Slide 4 -->
                <div class="carousel-slide">
                    <div class="flex h-full justify-center">
                        <img src="https://picsum.photos/1280/720" class="size-full object-cover" alt="game" />
                    </div>
                </div>
                <!-- Slide 5 -->
                <div class="carousel-slide">
                    <div class="flex h-full justify-center">
                        <img src="https://picsum.photos/1280/720" class="size-full object-cover" alt="game" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Previous Slide -->
        <button type="button" class="carousel-prev">
            <span class="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
                <span class="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
            </span>
            <span class="sr-only">Previous</span>
        </button>
        <!-- Next Slide -->
        <button type="button" class="carousel-next">
            <span class="sr-only">Next</span>
            <span class="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
                <span class="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
            </span>
        </button>
    </div>
</template>
