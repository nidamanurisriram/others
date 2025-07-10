package logical;

import java.util.Scanner;

public class DiscountCalculator {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Amount   : ");
		
		double amount = sc.nextDouble();
		
		System.out.print("Discount : ");
		
		double discount = sc.nextDouble();
		
		double discountAmount = (amount * discount)/100;
		
		double finalAmount = amount - discountAmount;
		
		System.out.println("Final amount " + finalAmount);
		
	}

}
