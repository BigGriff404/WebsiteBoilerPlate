console.log(
 "%cIf you used Developer Tools to find this, then follow me on Instagram! @yungaddydev",
 "font-family: Tahoma ; display: inline-block; background: linear-gradient(-225deg,#002025,#250600); margin: 1.5em auto; border-radius: 1em; font-weight: bold; padding: 20px; font-size: 30px;color: #aa81ff  ; text-shadow: 3px 3px 0 #b837ea , 6px 6px 0 #aa11bb  , 9px 9px 0 #90006c  , 12px 12px 0 #56002a  , 15px 15px 0 #25000d   "
);
// REFERENCE: https://www.telerik.com/blogs/how-to-style-console-log-contents-in-chrome-devtools
// https://youtu.be/UTFnBsJUN00

// const BROTHA = {
//  name: "Griffin",
//  age: 26,
//  ethnicity: "bi-racial",
//  alsoKnownAs: ["YungAddyDev", "BizquikBandit", "Chickaboom"],
// };

// console.dir(BROTHA);

const NICKNAMES = [
 {
  name: "YungAddyDev",
  occupation: "Web Developer \uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBB",
 },
 {
  name: "Chickaboom",
  occupation:
   "Boyfriend of 3years \uD83E\uDD1F\uD83C\uDFFD \uD83D\uDC9C \uD83D\uDE18",
 },
 { name: "BizquikBandit", occupation: "Underground Rapper \uD83C\uDFA4 \uD83C\uDFA7" },
];

NICKNAMES.forEach((NICKNAMES) => {
 console.groupCollapsed(`${NICKNAMES.name}`);
 console.log(`Griffin is also know as ${NICKNAMES.name}`);
 console.log(`${NICKNAMES.name} works as a ${NICKNAMES.occupation}`);
 console.groupEnd();
});

console.group(
 "%cThings to Remember... \uD83D\uDCAF",
 "background: linear-gradient(-225deg,#002025,#250600); font-size: 30px; color: #ffffff ; font-weight: bold ; padding: 4px ;"
);

console.log("Take the Small Victories");
console.log("God Doesn't Make Mistakes");
console.groupEnd();
console.warn("Puttin too much dip on ya chip!")
console.error("Stop being Lazy & Get to Work!")
