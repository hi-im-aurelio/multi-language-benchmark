<?php
function fib($n) {
    if ($n < 1) {
        return 0;
    } elseif ($n <= 2) {
        return 1;
    }

    $a = 0;
    $b = 1;

    for ($i = 2; $i <= $n; $i++) {
        $rtmp = $a + $b;
        $a = $b;
        $b = $rtmp;
    }

    return $b;
}

$start_time = microtime(true);
fib(10000);
echo "Runtime: " . (microtime(true) - $start_time) * 1000 . " ms\n";
echo "Peak Memory Usage: " . memory_get_peak_usage() . " bytes\n";
?>
