public class Fibonacci {
    public static int fib(int n) {
        if (n < 1) {
            return 0;
        } else if (n <= 2) {
            return 1;
        }

        int a = 0, b = 1;
        for (int i = 2; i <= n; i++) {
            int rtmp = a + b;
            a = b;
            b = rtmp;
        }

        return b;
    }

    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();
        fib(10000);
        System.out.println("Runtime: " + (System.currentTimeMillis() - startTime) + " ms");
    }
}
