<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"
        viewBox="0 0 32 32">
        <defs>

            <clipPath id="a">
                <rect class="a" width="32" height="32" transform="translate(356 1847)" />
            </clipPath>
        </defs>
        <g class="b" transform="translate(-356 -1847)">
            <g transform="translate(356 1847)">
                <path class="c" d="M0,0H32V32H0Z" />
                <rect class="d" width="8" height="8" rx="1.333" transform="translate(5.333 5.333)" />
                <rect class="d" width="8" height="8" rx="1.333" transform="translate(5.333 18.667)" />
                <rect class="d" width="8" height="8" rx="1.333" transform="translate(18.667 18.667)" />
                <circle class="e" cx="4" cy="4" r="4" transform="translate(18.667 5.333)" />
            </g>
        </g>
    </svg>
</template>
<style>
.a {
    fill: #cdcfd0;
}

.b {
    clip-path: url(#a);
}

.c,
.d,
.e {
    fill: none;
}

.d,
.e {
    stroke: #c92127;
    stroke-width: 2px;
}

.d {
    stroke-linecap: round;
    stroke-linejoin: round;
}
</style>