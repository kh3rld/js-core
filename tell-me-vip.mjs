import fs from "fs";
import path from "path";

const guests = [];

const dirName = process.argv[2];
const dirPath = path.join(__dirname, dirName);

if (fs.existsSync(dirPath) && fs.readdirSync(dirPath).length > 0) {
  const vipGuests = guests
    .filter((guest) => guest.response === "YES")
    .sort((a, b) => a.lastname.localeCompare(b.lastname))
    .map(
      (guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}`,
    );
  fs.writeFileSync("vip.txt", vipGuests.join("\n"), "utf-8");

  console.log("VIP Guests List saved to vip.txt:");
  console.log(vipGuests.join("\n"));
} else {
  fs.writeFileSync("vip.txt", "", "utf-8");
  console.log("No guests found.");
}
