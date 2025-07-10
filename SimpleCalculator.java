package logical;

import java.util.Scanner;

public class SimpleCalculator {
	
	public void addition(int a, int b) {
		int c = a+b;
		System.out.println("Addition" + " " + "[" + a + "+" + b + "]" + " = " + c);		
	}
	
	public void subtraction(int a, int b) {
		int c = a-b;
		System.out.println("Subtraction" + " " + "[" + a + "-" + b + "]" + " = " + c);
	}
	
	public void multiplication(int a, int b) {
		int c = a*b;
		System.out.println("Multiplication" + " " + "[" + a + "*" + b + "]" + " = " + c);
	}
	
	public void division(int a, int b) {
		int c = a/b;
		System.out.println("Division" + " " + "[" + a + "/" + b + "]" + " = " + c);
	}
	
	public static void main(String[] args) {
		
		System.out.println("Press calculation number ");
		
		System.out.println("[ + ] -- 1");
		
		System.out.println("[ - ] -- 2");
		
		System.out.println("[ * ] -- 3");
		
		System.out.println("[ / ] -- 4");

		Scanner sc = new Scanner(System.in);
		
		SimpleCalculator sr = new SimpleCalculator();  
		
		System.out.print("Please enter input: ");
		
		int input = sc.nextInt();
		
		if((input != 1) && (input !=2) && (input !=3) && (input != 4)) {
			System.err.println("Invalid input!");
			return;
		}
		
		System.out.print("Number 1: ");
		
		int a = sc.nextInt();
		
		System.out.print("Number 2: ");
		
		int b = sc.nextInt();
		
		switch(input) {
		
		case 1: sr.addition(a, b); break;
		
		case 2: sr.subtraction(a, b); break;
		
		case 3: sr.multiplication(a, b); break;
		
		case 4: sr.division(a, b); break;
		
		default: System.err.println("Invalid input!");
		
		}
		
	}

}
