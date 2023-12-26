package main

import (
	"fmt"
	"time"
)

func fib(n int) int {
	if n < 1 {
		return 0
	} else if n <= 2 {
		return 1
	}

	a, b := 0, 1
	for i := 2; i <= n; i++ {
		rtmp := a + b
		a, b = b, rtmp
	}

	return b
}

func main() {
	startTime := time.Now()
	fib(10000)
	fmt.Printf("Runtime: %s\n", time.Since(startTime))
}
