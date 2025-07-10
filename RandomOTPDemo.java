package logical;

import java.util.Random;

public class RandomOTPDemo {
	
	public static void main(String[] args) {
		
		Random random = new Random();
		
		int randomOTP = random.nextInt(100000);
		
		if(randomOTP <= 9999) {
			randomOTP = randomOTP+10000;
		}
		
		System.out.println("Random 5-Pin OTP: " + randomOTP);
		
	}

}
