package logical;

import java.util.Scanner;

public class InterestCalculator {
	
	public void calculateInterest() {

		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter the initial amount: ");
		
		int amount = sc.nextInt();
		
		System.out.print("Enter rate of interest: ");
		
		int roi = sc.nextInt();
		
		System.out.println("Time duration of interest");
				
		System.out.println("-------------------------");
		
		System.out.print("No.of Years  :" + " ");
		
		double years = sc.nextDouble();
		
		System.out.print("No.of Months :" + " ");
		
		double months = sc.nextDouble();
		
		System.out.print("No.of Days   :" + " ");
		
		double days = sc.nextDouble();
		
		double time = (years *12) + (months) + (days/30);
		
		double interestAmount = (amount * time * roi) / 100;
		
		interestAmount = Math.round(interestAmount);
		
		double totalAmount = amount + interestAmount;
		
		System.out.println("Interest amount " + interestAmount);
		
		System.out.println("Total amount " + "   " + totalAmount);

	}
	
	public static void main(String[] args) {
		
				InterestCalculator ic = new InterestCalculator();
				
				ic.calculateInterest();
				
	}

}
