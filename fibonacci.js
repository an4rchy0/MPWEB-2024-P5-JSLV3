function fibonacci(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  return sequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
