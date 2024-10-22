import fs from "fs";

// Sample data (you would replace this with your actual guest list)
const guests = [
  { firstname: "John", lastname: "Doe", response: "YES" },
  { firstname: "Jane", lastname: "Smith", response: "NO" },
  { firstname: "Alice", lastname: "Johnson", response: "YES" },
  { firstname: "Bob", lastname: "Brown", response: "YES" },
  { firstname: "Charlie", lastname: "Davis", response: "NO" },
];

const vipGuests = guests
  .filter((guest) => guest.response === "YES")
  .sort((a, b) => a.lastname.localeCompare(b.lastname))
  .map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}`);
fs.writeFileSync("vip.txt", vipGuests.join("\n"), "utf-8");

console.log("VIP Guests List saved to vip.txt:");
console.log(vipGuests.join("\n"));
