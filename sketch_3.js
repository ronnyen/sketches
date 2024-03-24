function setup() {
  createCanvas(100, 100);

  for (let i = 1; i < 10; i++) {
  line(50, 0, 50, i*10);
  line(50, 0, i*10, 50);

  line(50, 100, 50, i*10);
  line(50, 100, i*10, 50);

}
}