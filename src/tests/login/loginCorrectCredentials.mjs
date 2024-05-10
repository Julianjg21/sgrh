import { Builder, By, until } from "selenium-webdriver";

async function loginCorrectCredentials() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    //Open the login page
    await driver.get("http://localhost:3000/login");
   //Wait for the username and password fields to appear
    await driver.wait(until.elementLocated(By.id("email")), 10000);
    await driver.wait(until.elementLocated(By.id("password")), 10000);

    //Enter incorrect credentials

    await driver
      .findElement(By.id("email"))
      .sendKeys("julianjimenez2001@hotmail.com");
    await driver.findElement(By.id("password")).sendKeys(2128);

    //Click the login button
    await driver.findElement(By.id("loginButton")).click();

    //Wait for the landing page to load after login
    await driver.wait(until.urlIs("http://localhost:3000/menu"), 10000);

    // Verificar que la URL sea la esperada después del inicio de sesión
    let currentUrl = await driver.getCurrentUrl();
    if (currentUrl === "http://localhost:3000/menu") {
      console.log("The login test was successful.");
    } else {
      console.error("The login test failed.");
    }
  } catch (error) {
    console.log("An error occurred during testing", error);
  } finally {
    await driver.quit(); //Close the browser at the end of the test
  }
}

//Call the function to run the test
loginCorrectCredentials();
