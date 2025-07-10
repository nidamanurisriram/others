// if number has only two factors (1 and the number it self) then the number is referred to prime number

package logical;

import java.util.Scanner;

public class PrimeNumberCheck {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Please enter a number");
		
		int input = sc.nextInt();
		
		int factor = 0;
		
		for(int i=1; i<=input; i++) {
			int rem = input%i;
			if(rem == 0) {
				factor++;
			}
		}
		
		if(factor == 2) {
			System.out.println("Given number is a prime number");
		}
		else {
			System.out.println("Given number is not a prime number");
		}
		
//		Scanner sc = new Scanner(System.in);
//		
//		System.out.println("Please enter a number");
//		
//		int n = sc.nextInt();
//		
//		int factor = 0;
//		
//		for(int i = 1; i<=n; i++) {
//			
//			int rem = n%i;
//			
//			if(rem == 0) {
//				factor++;
//			}
//			
//		}
//		
//		if(factor == 2) {
//			System.out.println("Entered number " + n + " is a prime number");
//		}
//		else {
//			System.out.println("Entered number " + n + " is not a prime number");
//		}
		
	}

}
