// If a number is divided by 2 then the number is referred to even number

package logical;

import java.util.Scanner;

public class EvenOrOdd {
	
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Please enter a number");
		
		int n = scanner.nextInt();
		
		if(n%2 == 0) {
			System.out.println("Given number " + n + " is a even number");
		}
		
		else {
		System.out.println("Given number " + n + " is not an even number");
		}
		
	}

}
