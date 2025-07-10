// Fibonacci series starts with two number 0 and 1 later all the digits are sum of all previous numbers

package logical;

import java.util.Scanner;

public class FibonacciSeries {
	
	public static void main(String[] args) {
		
		System.out.println("Enter number limit for fibonacci series");
		
		Scanner sc = new Scanner(System.in);
		
		int limit = sc.nextInt();
		
		int n1 = 0;
		
		int n2 = 1;
		
		int n3;
		
		if(limit == 1) {
			System.out.println(n1);
		}
		
		else if(limit == 2) {
			System.out.println(n1 + " " + n2);
		}
		
		else if(limit > 2) {
			System.out.print(n1+ " " + n2+ " ");
			for(int i=3; i<=limit; i++) {
				n3 = n1 + n2;
				System.out.print(n3+ " ");
				n1 = n2;
				n2 = n3;
			}
		}
		
//		System.out.println("Enter number limit for fibonacci series");
//		
//		Scanner sc = new Scanner(System.in);
//		
//		int limit = sc.nextInt();
//		
//		int n1 = 0;
//		
//		int n2 = 1;
//		
//		if (limit == 1) {
//			System.out.println(n1);
//		}
//		
//		else if(limit == 2) {
//			System.out.println(n1 + " " + n2);
//		}
//		
//		else if (limit > 2) {
//			System.out.print(n1 + " " + n2);		
//			for(int n = 3; n<= limit; n++) {
//				int n3 = n1 + n2;
//				System.out.print(" " + n3);
//				n1=n2;
//				n2=n3;
//			}
//			
//		}
//		else {
//			System.out.println("Invalid input");
//		}
		
	}

}
