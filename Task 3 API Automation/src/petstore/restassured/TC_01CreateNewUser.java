package petstore.restassured;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import java.io.File;

import org.testng.annotations.Test;

import io.restassured.RestAssured;

public class TC_01CreateNewUser {
	File jsonFile;

	@Test(description = "Create a new pet store user via api")
	public void PostMethod() {

		// TODO Auto-generated method stub

//		RestAssured.baseURI = "https://petstore.swagger.io";
//		given().log().all().header("Content-Type", "application/json")
//				.body("[\r\n" + "    {\r\n" + "        \"id\": 3453,\r\n" + "        \"username\": \"life\",\r\n"
//						+ "        \"firstName\": \"is\",\r\n" + "        \"lastName\": \"beautiful\",\r\n"
//						+ "        \"email\": \"test@001.com\",\r\n" + "        \"password\": \"Messi@10\",\r\n"
//						+ "        \"phone\": \"1234456488\",\r\n" + "        \"userStatus\": 1\r\n" + "    }\r\n"
//						+ "]")
//				.when().post("v2/user/createWithList").then().log().all().assertThat().statusCode(200)
//				.body("message", equalTo("ok"));

		jsonFile = new File(System.getProperty("user.dir") + "\\src\\jsontestdata\\CreateNewPetStoreUser.json");
		RestAssured.baseURI = "https://petstore.swagger.io";
		given().log().all().header("Content-Type", "application/json").body(jsonFile).when()
				.post("v2/user/createWithList").then().log().all().assertThat().statusCode(200)
				.body("message", equalTo("ok"));
	}

}
