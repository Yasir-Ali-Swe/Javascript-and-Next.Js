export default function () {
  console.log("Default function called");
}

let msg = "Yasir Ali";
let user = () => {
  console.log("User function called");
};
export { msg, user };
