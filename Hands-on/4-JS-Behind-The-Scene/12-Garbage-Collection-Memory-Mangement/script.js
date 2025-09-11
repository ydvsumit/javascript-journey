/**
 * CALL STACK:
 *            - Variable Environment is simply deleted when execution context pops off stack.
 *            - The global variable never deleted from gloabal execution context (GEC never disappears).
 *
 * HEAP:
 *      - Memory management is more complex.
 *      - In order to delete old unused objects from the heap and free up memory, JS Engine employ a process called "Garbage Collection".
 *      - Garbage Collection is a "central memory management tool" in a JS Engine.
 *
 * MARK AND SWEEP ALGORITHM: (Underneath HEAP in Garbage Collection)
 *                          - There are different ways to implement garbage collection but the most common strategy Garbage Collection (GC) uses is called Mark-and-Sweep Algorithm.
 *                          - All modern engines use an algorithm that called Mark and Sweep.
 *
 * STEPS:
 *      1. MARK:
 *              - Mark all objects that are "reachable" from a "root" as alive.
 *              - Root are basically starting point to search for alive objects.
 *
 *      2. SWEEP:
 *              - Delete un-marked "unreachable" objects and reclaim memory for future allocations.
 *
 * # Global Execution context stay forever and never disappears.
 *
 * Memory Leak:
 *            - When objects that are no longer are "incorrectly still reachable", and therefore "not being garbage collected" from one of the roots.
 *            - As a result, the object is marked as alive.
 */
