import { Builder, By, until } from "selenium-webdriver";

async function loginIncorrectCredentials() {
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
      .sendKeys("usuarioIncorrecto@hotmail.com");
    await driver
      .findElement(By.id("password"))
      .sendKeys("contraseñaIncorrecta");

    //Click the login button
    await driver.findElement(By.id("loginButton")).click();
    //Wait for the error message to appear
    await driver.wait(
      until.elementLocated(By.className("error-message")),
      10000
    );

    //Get the error message text
    let errorMessage = await driver
      .findElement(By.className("error-message"))
      .getText();
    //Check the error message
    if (
      errorMessage.includes(
        "Error, Contraseña o usuario ingresados son incorrectos!!"
      )
    ) {
      console.log("The bad credentials test was successful.");
    } else {
      console.log("The error message does not match what was expected.");
    }
  } catch (error) {
    console.log("An error occurred during testing", error);
  } finally {
    await driver.quit(); //Close the browser at the end of the test
  }
}

//Call the function to run the test
loginIncorrectCredentials();
