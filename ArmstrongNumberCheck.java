//If a number is equal to sum of each digit (multiplied number of times to the total count of all digits in the number) is referred to armstrong number  

package logical;

import java.util.Scanner;

public class ArmstrongNumberCheck {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter a number : ");
		
		int number = sc.nextInt();
		
		int count = 0;
		
		int outputNumber = 0;
		
		int duplicateNumber = number;
		
		while(number!=0) {
			
			count++;
			
			number = number/10;
		}
		
		number = duplicateNumber;
				
		while(number!=0) {
			
			int value = 1;
			
			int rem = number%10;
				
		for(int i = 1; i<=count; i++) {
			
			value = value*rem;
			
		}
		
		outputNumber = outputNumber + value;
		
		number = number/10;
			
		}
		
		number = duplicateNumber;
		
		System.out.println("Output number is : " + outputNumber);
		
		if(number == outputNumber) {
			System.out.println("Input number is Armstrong number");
		}
		else {
			System.out.println("Input number is not Armstrong number");
		}
	}

}
