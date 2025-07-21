package logical;

import java.util.Scanner;

public class PercentageCalculator {
	
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter the number        : ");
		
		double number = sc.nextDouble();
		
		System.out.print("Enter the percentage    : ");
		
		double percentage = sc.nextDouble();
		
		double percentageAmount = (number * percentage) / 100;
		
		System.out.print("Total percentage amount : " + percentageAmount);
		
	}

}
