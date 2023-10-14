package extentlisteners;

import org.testng.ISuite;
import org.testng.ISuiteListener;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.markuputils.ExtentColor;
import com.aventstack.extentreports.markuputils.Markup;
import com.aventstack.extentreports.markuputils.MarkupHelper;

public class ExtentListeners implements ITestListener, ISuiteListener {

//	static Date d = new Date();
//	static SimpleDateFormat sdf = new SimpleDateFormat("HH_mm_ss");
//	static String formattedDate = sdf.format(d);
//	static String fileName = "Extent_" + formattedDate.replace(":", "_") + ".html";

	static String fileName = "Extent";
	private static ExtentReports extent = ExtentManager.createInstance(".\\reports\\" + fileName);
	public static ExtentTest test;

	public void onTestStart(ITestResult result) {

		test = extent.createTest(result.getTestClass().getName() + " : " + result.getMethod().getMethodName());
	}

	public void onTestSuccess(ITestResult result) {

		String methodName = result.getMethod().getMethodName();
		String logText = "<b>" + methodName.toUpperCase() + " PASSED" + "</b>";
		Markup m = MarkupHelper.createLabel(logText, ExtentColor.GREEN);
		test.pass(m);

	}

	public void onTestFailure(ITestResult result) {
		String methodName = result.getMethod().getMethodName();
		String logText = "<b>" + methodName.toUpperCase() + " FAILED" + "</b>";
		Markup m = MarkupHelper.createLabel(logText, ExtentColor.RED);
		test.log(Status.FAIL, m);
	}

	public void onTestSkipped(ITestResult result) {
		String methodName = result.getMethod().getMethodName();
		String logText = "<b>" + methodName + " Skipped" + "</b>";
		Markup m = MarkupHelper.createLabel(logText, ExtentColor.YELLOW);
		test.skip(m);

	}

	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {
		// TODO Auto-generated method stub
	}

	public void onStart(ITestContext context) {

	}

	public void onFinish(ITestContext context) {
		if (extent != null) {
			extent.flush();
		}

	}

	public void onStart(ISuite suite) {
		// TODO Auto-generated method stub
	}

	public void onFinish(ISuite suite) {
		// TODO Auto-generated method stub
	}

}
