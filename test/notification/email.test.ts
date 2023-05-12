import { ResponseStatus } from "../../src/module/base";
import { NotificationClient } from "../../src/module/notification";

const test = async () => {
  console.log(`🚀 Start testing module notification`);

  const client = new NotificationClient({
    host: "localhost",
    port: 3000,
  });

  const pingResult = await client.ping();
  if (pingResult.isSuccess) {
    console.log("✅ Ping success");
  } else {
    console.log("❌ Ping failed", pingResult);
    return;
  }

  const sendGmailResult = await client.sendByGmail({
    fromName: "Archery developer",
    fromEmail: "support.ads-pro.site",
    toName: "Archery developer's friend",
    toEmail: "zingfeng.9x@gmail.com",
    subject: "Hello from Archery",
    htmlBody: `<h1 style="color: red">Hello from Archery</h1>`,
  });

  if (sendGmailResult.status === ResponseStatus.SUCCESS) {
    console.log("✅ Send Gmail success");
  } else {
    console.log("❌ Send Gmail failed", sendGmailResult);
  }
};

test();
