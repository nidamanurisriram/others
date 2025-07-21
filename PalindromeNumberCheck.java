//If input is equal to its reverse input then it is referred to palindrome

package logical;

import java.util.Scanner;

public class PalindromeNumberCheck {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Please enter number");
		
		int number = sc.nextInt();
		
		int reverseNumber = 0;
		
		while(number != 0) {
			
			int rem = number%10;
			
			reverseNumber = reverseNumber*10 + rem;
			
			number = number /10;
			
		}
		 
		if(number == reverseNumber) {
			System.out.println("Given number is a palindrome");
		}
		
		else {
			System.out.println("Given number is not a palindrome");
		}
		
	}

}
