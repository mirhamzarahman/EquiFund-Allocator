/**
 * ------------------------------------------------------
 * EquiFund Allocator
 * ------------------------------------------------------
 * Calculates the minimum additional funding required
 * to raise every allocation to the highest existing level.
 */

/**
 * Calculates the total funding needed to equalize allocations.
 *
 * @param {number[]} allocations - Current funding values.
 * @returns {number} Total additional funding required.
 */
function calculateRequiredFunding(allocations) {
    if (!Array.isArray(allocations) || allocations.length === 0) {
        return 0;
    }

    // Determine the highest existing allocation.
    const highestAllocation = Math.max(...allocations);

    let totalFundingRequired = 0;

    // Calculate the funding needed for each allocation.
    for (const allocation of allocations) {
        totalFundingRequired += highestAllocation - allocation;
    }

    return totalFundingRequired;
}

/* -------------------------------------------------- */
/* Example Usage                                      */
/* -------------------------------------------------- */

const communityFunding = [0, 1, 2, 3, 4];

const requiredFunding = calculateRequiredFunding(communityFunding);

console.log("Current Funding:", communityFunding);
console.log("Additional Funding Required:", requiredFunding);
