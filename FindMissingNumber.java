package logical;

public class FindMissingNumber {
	
	public static void main(String[] args) {
		
		int arr[] = { 1, 2, 3, 5};
		
		int high = arr.length-1;
		
		int n = arr[high];
		
		int actualSum = 0;
		
		while(high >= 0) {
			actualSum = actualSum + arr[high];
			high--;
		}
		
		int expectedSum = (n * (n +1))/2;
		
		int number = expectedSum - actualSum;
		
		System.out.println("Missing number is " + number);
		
	}

}