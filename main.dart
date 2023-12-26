int fib(n) {
  if (n < 1) {
    return 0;
  } else if (n <= 2) {
    return 1;
  }

  int a = 0, b = 1;

  for (int i = 2; i <= n; i++) {
    var rtmp = a + b;
    a = b;
    b = rtmp;
  }

  return b;
}

void main() {
  var stopwatch = Stopwatch()..start();

  fib(10000);

  stopwatch.stop();
  print("Runtime: ${stopwatch.elapsedMilliseconds} ms");
}
