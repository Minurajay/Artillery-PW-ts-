import { Page } from '@playwright/test';
import testLogin from '../commands/login';

export async function artilleryfunction(page: Page, vuContext: any, events: any) {
  await testLogin(page); //Perform login

  const startTime = Date.now(); //Start timer before API call

  //Example API call
  const response = await page.request.get('https://api.demoblaze.com/entries'); 

  const duration = Date.now() - startTime; //Calculate response time

  if (response.ok()) {
    events.emit("histogram", "api.entries.response_time", duration); //Track response time
    events.emit("counter", "api.entries.success", 1); //Track success count
  } else {
    events.emit("counter", "api.entries.failure", 1); //Track failure count
  }
}
