import { test } from "@playwright/test";
import { SignInPage } from "../../src/pages/SignInPage";
import { HomePage } from "../../src/pages/HomePage";

test.describe("Sign in positive tests", () => {
  let signInPage;
  let homePage;
  let user;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    homePage = new HomePage(page);

    user = {
      email: "qa.dptashevskyy@gmail.com",
      password: "12345678",
    };
  });

  test("Successful `Sign in` flow test", async ({ page }) => {
    await signInPage.open();
    await signInPage.fillEmailField(user.email);
    await signInPage.fillPasswordField(user.password);
    await signInPage.clickSignInButton();

    await homePage.assertYourFeedTabIsVisible();
  });
});
