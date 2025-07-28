package logical;

import java.util.Scanner;

public class AverageOfDigitsInNumber {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Please enter a number : ");
		
		int number = sc.nextInt();
		
		int sum = 0;
		
		int count = 0;
		
		int duplicateNumber = number;
		
		while(number!=0) {
			int rem = number%10;
			count++;
			sum = sum+rem;
			number = number/10;
		}
		
		number = duplicateNumber;
		
		int averageNumber = sum/count;
		
		System.out.println("Average output : " + averageNumber);
		
	}

}
