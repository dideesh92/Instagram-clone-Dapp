const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("instacontract", (m) => {
    const insta = m.contract("InstagramDapp");
    return { insta };
});