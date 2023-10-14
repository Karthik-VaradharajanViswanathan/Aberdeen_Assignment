package petstore.restassured;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import org.testng.annotations.Test;

import io.restassured.RestAssured;

public class TC_02GetNewUserDetails {

	@Test(description = "Get the new pet store user resource which was created via api")
	public void GetMethod() {
		// TODO Auto-generated method stub

		RestAssured.baseURI = "https://petstore.swagger.io";
		given().log().all().header("Content-Type", "application/json").when().get("v2/user/life").then().log().all()
				.assertThat().statusCode(200).body("lastName", equalTo("beautiful"));

	}

}
