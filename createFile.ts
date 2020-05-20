// Create text file greet.txt
const encoder = new TextEncoder();

const greetText = encoder.encode("Hello World\nMy name is Gavin");

await Deno.writeFile("greet.txt", greetText);
