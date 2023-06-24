export default function bs_list(haystack: number[], needle: number): boolean {
        var lo = 0;
        var hi = haystack.length;

        while (lo < hi) {
                const mid = Math.floor(lo + (hi - lo) / 2);
                const val = haystack[mid];

                if (val === needle) {
                        return true;
                }

                if (val > needle) {
                        hi = mid;
                } else {
                        lo = mid + 1;
                }
        }

        return false;
}
