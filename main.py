from memory_profiler import profile

@profile
def fib(n):
    if n < 1:
        return 0
    elif n <= 2:
        return 1

    a, b = 0, 1
    for i in range(2, n + 1):
        a, b = b, a + b

    return b

import time

start_time = time.time()
fib(10000)
print("Runtime: %s seconds" % (time.time() - start_time))
