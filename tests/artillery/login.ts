// const testLogin = require('../../js-tests/commands/login'); // ✅ Correct way to import CommonJS export
import { Page } from '@playwright/test';
import testLogin from '../commands/login'; // ✅ Correct way to import CommonJS export

export async function artilleryfunction(page: Page) {
  //output current metrics - incrementing a custom counters
  // events.emit("counter", `user:${vuContext.scenario.name}.SUBSCRIBE`, 1);
  await testLogin(page);
}

// module.exports = { artilleryfunction };
