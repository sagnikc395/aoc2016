async function countValidTriangles(filePath: string): Promise<number> {
  // Read the file
  const content = await Bun.file(filePath).text();

  // Split the file content by lines
  const lines = content.trim().split("\n");

  let validTriangleCount = 0;

  for (const line of lines) {
    // Extract side lengths
    const [a, b, c] = line.split(/\s+/).map(Number);

    // Check if it forms a valid triangle
    if (a + b > c && a + c > b && b + c > a) {
      validTriangleCount++;
    }
  }

  return validTriangleCount;
}

// Example usage
const filePath = "./input.txt";
countValidTriangles(filePath).then((count) => {
  console.log(`Number of valid triangles: ${count}`);
});
